import fs from "fs";
import path from "path";

const ROOT = "data/resources-page/articles";
const SLUGS = [
  "campus-placement-systems-problem",
  "public-grievance-systems-problem",
  "hyperlocal-workforce-systems-problem",
  "solviqai-career-readiness-systems-problem",
  "shortlisted-virtual-placement-systems-problem",
  "ama-gopalpur-constituency-development-systems-problem",
];

function trimBlocks(blocks) {
  const refIndex = blocks.findIndex(
    (block) =>
      block.type === "heading" &&
      block.level === 2 &&
      block.text === "References"
  );
  return refIndex >= 0 ? blocks.slice(0, refIndex) : blocks;
}

function loadLocale(locale) {
  const file = path.join(ROOT, "locale-overlays", `${locale}.json`);
  const base = JSON.parse(fs.readFileSync(file, "utf8"));
  const supplementPath = path.join(ROOT, "locale-overlays", `${locale}-supplement.json`);

  if (!fs.existsSync(supplementPath)) {
    return base;
  }

  const supplement = JSON.parse(fs.readFileSync(supplementPath, "utf8"));
  return { ...base, ...supplement };
}

function translateBlocks(blocks, overlayBlocks) {
  return blocks.map((block, index) => {
    const overlay = overlayBlocks[index];
    if (!overlay || overlay.type !== block.type) return block;

    if (block.type === "paragraph" || block.type === "heading") {
      return { ...block, text: overlay.text };
    }

    if (block.type === "list") {
      return { ...block, items: overlay.items };
    }

    return block;
  });
}

function localizeArticle(enArticle, overlay) {
  return {
    ...enArticle,
    meta: overlay.meta,
    hero: overlay.hero,
    blocks: translateBlocks(trimBlocks(enArticle.blocks), overlay.blocks),
    references: overlay.references,
    authorBox: overlay.authorBox,
    sidebar: overlay.sidebar,
  };
}

for (const locale of ["hi", "od"]) {
  const overlays = loadLocale(locale);
  const outDir = path.join(ROOT, locale);
  fs.mkdirSync(outDir, { recursive: true });

  for (const slug of SLUGS) {
    const enPath = path.join(ROOT, "en", `${slug}.json`);
    const enArticle = JSON.parse(fs.readFileSync(enPath, "utf8"));
    const overlay = overlays[slug];

    if (!overlay) {
      throw new Error(`Missing overlay for ${locale}/${slug}`);
    }

    const localized = localizeArticle(enArticle, overlay);
    fs.writeFileSync(
      path.join(outDir, `${slug}.json`),
      JSON.stringify(localized, null, 2)
    );
    console.log(`wrote ${locale}/${slug}`);
  }
}
