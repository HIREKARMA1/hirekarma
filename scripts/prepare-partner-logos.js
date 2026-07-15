const sharp = require("sharp");
const fs = require("fs");
const https = require("https");
const path = require("path");

const dir = path.join("public", "partners");

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
      })
      .on("error", reject);
  });
}

async function makeSvgPng(file, svg) {
  const out = path.join(dir, file);
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log("made", file, fs.statSync(out).size);
}

(async () => {
  await download("https://aim.gov.in/images/aim-logo.png", path.join(dir, "aim.png"));

  let { data, info } = await sharp(path.join(dir, "aim.png"))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let p = 0; p < data.length; p += 4) {
    const lum = 0.2126 * data[p] + 0.7152 * data[p + 1] + 0.0722 * data[p + 2];
    if (lum < 40) {
      data[p] = 255;
      data[p + 1] = 255;
      data[p + 2] = 255;
      data[p + 3] = 255;
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ height: 88, fit: "inside" })
    .png()
    .toFile(path.join(dir, "aim.png"));
  console.log("aim ok");

  const meityMeta = await sharp(path.join(dir, "meity.png")).metadata();
  const emblemPath = path.join(dir, "niti-emblem.png");
  await sharp(path.join(dir, "meity.png"))
    .extract({
      left: 0,
      top: 0,
      width: Math.min(170, meityMeta.width || 170),
      height: meityMeta.height || 88,
    })
    .resize({ height: 72, fit: "inside" })
    .png()
    .toFile(emblemPath);

  const emblem = fs.readFileSync(emblemPath).toString("base64");
  await makeSvgPng(
    "niti-aayog.png",
    `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="88" viewBox="0 0 280 88">
      <rect width="280" height="88" fill="#ffffff"/>
      <image href="data:image/png;base64,${emblem}" x="8" y="8" height="72"/>
      <text x="100" y="52" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#0f1622">NITI Aayog</text>
    </svg>`
  );
  fs.unlinkSync(emblemPath);

  await makeSvgPng(
    "meity-startup-hub.png",
    `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="88" viewBox="0 0 280 88">
      <rect width="280" height="88" fill="#ffffff"/>
      <text x="24" y="40" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800" fill="#1b52a4">MeitY</text>
      <text x="24" y="66" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="600" fill="#0f1622">Startup Hub</text>
    </svg>`
  );

  await makeSvgPng(
    "inji.png",
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="88" viewBox="0 0 200 88">
      <rect width="200" height="88" fill="#ffffff"/>
      <circle cx="36" cy="44" r="22" fill="none" stroke="#00a2e5" stroke-width="6"/>
      <circle cx="36" cy="44" r="12" fill="none" stroke="#1b52a4" stroke-width="4"/>
      <text x="70" y="52" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800" fill="#0f1622">INJI</text>
    </svg>`
  );

  console.log("done", fs.readdirSync(dir));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
