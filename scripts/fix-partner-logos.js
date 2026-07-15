const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join("public", "partners");

(async () => {
  const a = await sharp(path.join(dir, "aim.png"))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let changed = 0;
  for (let p = 0; p < a.data.length; p += 4) {
    const lum =
      0.2126 * a.data[p] + 0.7152 * a.data[p + 1] + 0.0722 * a.data[p + 2];
    if (lum < 55 && a.data[p + 3] > 200) {
      a.data[p] = 255;
      a.data[p + 1] = 255;
      a.data[p + 2] = 255;
      changed++;
    }
  }
  console.log("aim pixels whitened", changed);
  await sharp(a.data, {
    raw: { width: a.info.width, height: a.info.height, channels: 4 },
  })
    .png()
    .toFile(path.join(dir, "aim.png"));

  const m = await sharp(path.join(dir, "meity.png")).metadata();
  const w = Math.max(40, Math.round((m.width || 200) * 0.18));
  const emblemPath = path.join(dir, "_emblem.png");
  await sharp(path.join(dir, "meity.png"))
    .extract({ left: 0, top: 0, width: w, height: m.height || 80 })
    .resize({ height: 70, fit: "inside" })
    .png()
    .toFile(emblemPath);

  const emblem = fs.readFileSync(emblemPath).toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="88" viewBox="0 0 260 88">
  <rect width="260" height="88" fill="#ffffff"/>
  <image href="data:image/png;base64,${emblem}" x="12" y="9" height="70"/>
  <text x="90" y="52" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#0f1622">NITI Aayog</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(dir, "niti-aayog.png"));
  fs.unlinkSync(emblemPath);
  console.log("niti fixed");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
