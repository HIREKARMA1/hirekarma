import fs from "fs";
import path from "path";

const blogDir = "E:/HK/hirekarma-blogs/hirekarma-blogs";
const outDir = "data/resources-page/articles/en";
fs.mkdirSync(outDir, { recursive: true });

const slugMap = {
  "blog-1-campus-placement-systems-problem.html": "campus-placement-systems-problem",
  "blog-2-public-grievance-systems-problem.html": "public-grievance-systems-problem",
  "blog-3-hyperlocal-workforce-systems-problem.html": "hyperlocal-workforce-systems-problem",
  "blog-4-solviqai-career-readiness-systems-problem.html": "solviqai-career-readiness-systems-problem",
  "blog-5-shortlisted-virtual-placement-systems-problem.html": "shortlisted-virtual-placement-systems-problem",
  "blog-6-ama-gopalpur-constituency-development-systems-problem.html":
    "ama-gopalpur-constituency-development-systems-problem",
};

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseBlocks(articleHtml) {
  const blocks = [];
  const re = /<(p|h2|h3|ul|ol)(?:\s+class="([^"]*)")?[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;

  while ((match = re.exec(articleHtml)) !== null) {
    const tag = match[1].toLowerCase();
    const cls = match[2] || "";
    const inner = match[3];

    if (tag === "p") {
      const variant = cls.includes("lead")
        ? "lead"
        : cls.includes("emphasis")
          ? "emphasis"
          : cls.includes("pullquote")
            ? "pullquote"
            : cls.includes("italic")
              ? "italic"
              : "default";
      blocks.push({ type: "paragraph", variant, text: stripTags(inner) });
    } else if (tag === "h2" || tag === "h3") {
      blocks.push({
        type: "heading",
        level: tag === "h2" ? 2 : 3,
        text: stripTags(inner),
      });
    } else if (tag === "ul" || tag === "ol") {
      const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((li) =>
        stripTags(li[1])
      );
      const listType = cls.includes("product-list") ? "product" : "default";
      blocks.push({
        type: "list",
        ordered: tag === "ol",
        listType,
        items,
      });
    }
  }

  return blocks;
}

for (const [file, slug] of Object.entries(slugMap)) {
  const html = fs.readFileSync(path.join(blogDir, file), "utf8");
  const titleMatch = html.match(/<h1>([\s\S]*?)<\/h1>/);
  const title = titleMatch ? stripTags(titleMatch[1]) : slug;
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  const metaDesc = descMatch ? descMatch[1] : "";
  const articleMatch = html.match(/<article class="article-content">([\s\S]*?)<\/article>/);
  const articleHtml = articleMatch ? articleMatch[1] : "";
  const blocks = parseBlocks(articleHtml);
  const refsMatch = articleHtml.match(
    /<section class="references">[\s\S]*?<ol>([\s\S]*?)<\/ol>/
  );
  const references = refsMatch
    ? [...refsMatch[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((r) =>
        stripTags(r[1])
      )
    : [];
  const metaLine = html.match(
    /<div class="article-meta">[\s\S]*?<time[^>]*>([^<]+)<\/time>[\s\S]*?<span>([^<]+)<\/span>/
  );
  const date = metaLine ? metaLine[1].trim() : "July 2026";
  const categoryLabel = metaLine ? metaLine[2].trim() : "Blogs";

  const data = {
    slug,
    meta: {
      title: title.length > 90 ? `${title.slice(0, 87)}...` : title,
      description: metaDesc,
    },
    hero: {
      title,
      date,
      categoryLabel,
      author: "HireKarma Editorial Team",
      backLink: "Back to Resources",
    },
    blocks,
    references: references.length
      ? { title: "References", items: references }
      : undefined,
    authorBox: {
      title: "About the authors",
      name: "HireKarma Editorial Team",
      role: "Product and Impact, HireKarma Private Limited",
      bio: "HireKarma builds outcome-driven platforms for campus recruitment, AI career readiness, and digital public service — trusted by colleges, companies, and government partners across India.",
    },
    sidebar: {
      shareTitle: "Loved this insight?",
      shareDescription:
        "Share it with your network and help strengthen India's placement ecosystem.",
      relatedTitle: "Related products",
      relatedProducts: "SolviqAI · Disha · Lakshya · Shortlisted",
      cta: { label: "View all products", hrefKey: "products" },
    },
  };

  fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(data, null, 2));
  console.log(`wrote ${slug} (${blocks.length} blocks)`);
}
