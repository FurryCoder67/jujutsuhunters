const { createClient } = require('@vercel/kv');
const cors = require('./_cors');

const kv = createClient({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

async function getUserFromToken(req) {
  const auth = req.headers['authorization'] || '';
  const token = auth.replace('Bearer ', '').trim();
  if (!token) return null;
  try { return await kv.get(`token:${token}`); } catch (e) { return null; }
}

module.exports = async function handler(req, res) {
  if (cors(req, res)) return;
  try {
    const username = await getUserFromToken(req);
    if (!username) return res.status(401).json({ error: 'Unauthorized' });

    const saveKey = `save:${username}`;

    if (req.method === 'GET') {
      const data = await kv.get(saveKey);
      return res.status(200).json(data || {});
    }

    if (req.method === 'POST') {
      const { save, storySave } = req.body || {};
      const existing = (await kv.get(saveKey)) || {};
      await kv.set(saveKey, { ...existing, save, storySave, updatedAt: Date.now() });
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    console.error('save error:', e);
    return res.status(500).json({ error: 'Server error' });
  }
};
