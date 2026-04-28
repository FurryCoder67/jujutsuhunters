const { createClient } = require('@vercel/kv');

const kv = createClient({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-secret');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const secret = req.headers['x-admin-secret'] || req.query.secret;
  if (!secret || secret !== (process.env.ADMIN_SECRET || 'hunters_reset_2026')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    let deleted = 0;
    for (const pattern of ['user:*', 'token:*', 'save:*']) {
      let cursor = 0;
      do {
        const result = await kv.scan(cursor, { match: pattern, count: 100 });
        cursor = result[0];
        const keys = result[1];
        if (keys.length > 0) {
          await Promise.all(keys.map(k => kv.del(k)));
          deleted += keys.length;
        }
      } while (cursor !== 0);
    }
    return res.status(200).json({ ok: true, deleted, message: 'All accounts and saves deleted' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
