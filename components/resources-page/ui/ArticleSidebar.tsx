import Link from "next/link";

import { ProductButton } from "@/components/products-page/ui/ProductButton";
import { theme } from "@/config/theme";
import type { ResourceArticleContent } from "@/types/resources-page";

interface ArticleSidebarProps {
  sidebar: ResourceArticleContent["sidebar"];
}

export function ArticleSidebar({ sidebar }: ArticleSidebarProps) {
  return (
    <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/5 lg:sticky lg:top-24">
      <h4 className="text-sm font-bold text-white">{sidebar.shareTitle}</h4>
      <p className="mt-2 text-sm leading-relaxed text-white/65">
        {sidebar.shareDescription}
      </p>

      <div className="mt-4 flex gap-2" aria-label="Share">
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url="
          target="_blank"
          rel="noopener noreferrer"
          className="grid size-9 place-items-center rounded-lg border border-white/15 bg-white/5 text-xs font-bold text-white transition hover:border-white/30"
          title="Share on LinkedIn"
        >
          in
        </a>
        <a
          href="https://twitter.com/intent/tweet"
          target="_blank"
          rel="noopener noreferrer"
          className="grid size-9 place-items-center rounded-lg border border-white/15 bg-white/5 text-xs font-bold text-white transition hover:border-white/30"
          title="Share on X"
        >
          X
        </a>
      </div>

      <hr className="my-5 border-white/10" />

      <h4 className="text-sm font-bold text-white">{sidebar.relatedTitle}</h4>
      <p className="mt-2 text-sm text-white/65">{sidebar.relatedProducts}</p>

      <div className="mt-4">
        <ProductButton
          cta={{
            label: sidebar.cta.label,
            hrefKey: sidebar.cta.hrefKey,
            variant: "outline",
          }}
          fullWidth
        />
      </div>
    </aside>
  );
}

interface ArticleAuthorBoxProps {
  authorBox: ResourceArticleContent["authorBox"];
}

export function ArticleAuthorBox({ authorBox }: ArticleAuthorBoxProps) {
  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 ring-1 ring-white/5">
      <h2 className="text-lg font-bold text-white">{authorBox.title}</h2>
      <div className="mt-4 flex gap-4">
        <span
          className="grid size-14 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
          style={{ background: theme.gradients.brand }}
          aria-hidden
        >
          HK
        </span>
        <div>
          <h3 className="font-semibold text-white">{authorBox.name}</h3>
          <p className="text-sm text-white/55 italic">{authorBox.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/65">
            {authorBox.bio}
          </p>
        </div>
      </div>
    </section>
  );
}

interface ArticleReferencesProps {
  references: NonNullable<ResourceArticleContent["references"]>;
}

export function ArticleReferences({ references }: ArticleReferencesProps) {
  return (
    <section className="mt-10 border-t border-white/10 pt-6">
      <h2 className="text-xl font-bold text-white">{references.title}</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-white/60">
        {references.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  );
}

interface ArticleBackLinkProps {
  label: string;
}

export function ArticleBackLink({ label }: ArticleBackLinkProps) {
  return (
    <Link
      href="/resources"
      className="inline-flex items-center gap-1 text-sm font-semibold text-white/60 transition hover:text-[#00a2e5]"
    >
      ← {label}
    </Link>
  );
}
