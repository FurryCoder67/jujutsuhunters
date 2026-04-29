const { Resvg } = require('@resvg/resvg-js');
const png2icons = require('png2icons');
const path = require('path');
const fs = require('fs');

const svgPath = path.join(__dirname, '..', 'favicon.svg');
const svgData = fs.readFileSync(svgPath);

const resvg = new Resvg(svgData, { fitTo: { mode: 'width', value: 512 } });
const pngBuffer = Buffer.from(resvg.render().asPng());

fs.writeFileSync(path.join(__dirname, 'icon.png'), pngBuffer);
console.log('wrote icon.png (512x512)');

const icoBuffer = png2icons.createICO(pngBuffer, png2icons.BILINEAR, 0, false);
if (!icoBuffer) throw new Error('ICO generation failed');
fs.writeFileSync(path.join(__dirname, 'icon.ico'), icoBuffer);
console.log('wrote icon.ico (multi-size)');

const icnsBuffer = png2icons.createICNS(pngBuffer, png2icons.BILINEAR, 0);
if (!icnsBuffer) throw new Error('ICNS generation failed');
fs.writeFileSync(path.join(__dirname, 'icon.icns'), icnsBuffer);
console.log('wrote icon.icns');
