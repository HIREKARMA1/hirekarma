import type { ArticleContentBlock } from "@/types/resources-page";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils/cn";

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-gray-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const colonMatch = part.match(/^([^:]+:)(.*)$/);
    if (colonMatch && part.includes(" - ")) {
      return (
        <span key={index}>
          <strong className="font-semibold text-gray-900 dark:text-white">
            {colonMatch[1]}
          </strong>
          {colonMatch[2]}
        </span>
      );
    }

    const dashParts = part.split(/(\s-\s)/);
    if (dashParts.length > 1) {
      return (
        <span key={index}>
          {dashParts.map((segment, i) =>
            i === 0 && segment.includes(":") ? (
              <strong key={i} className="font-semibold text-gray-900 dark:text-white">
                {segment.split(":")[0]}:
              </strong>
            ) : (
              <span key={i}>{segment}</span>
            )
          )}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function ParagraphBlock({
  variant,
  text,
}: Extract<ArticleContentBlock, { type: "paragraph" }>) {
  return (
    <p
      className={cn(
        "mb-4 leading-relaxed text-slate-600 dark:text-white/90",
        variant === "lead" && "text-lg text-slate-800 dark:text-white/90",
        variant === "emphasis" &&
          "font-semibold text-slate-800 dark:text-white/90",
        variant === "pullquote" &&
          "border-l-4 pl-4 text-lg font-bold text-[#00a2e5]",
        variant === "italic" && "italic text-slate-500 dark:text-white/85"
      )}
      style={
        variant === "pullquote"
          ? { borderColor: theme.colors.orange }
          : undefined
      }
    >
      {text}
    </p>
  );
}

function ListBlock({
  ordered,
  listType,
  items,
}: Extract<ArticleContentBlock, { type: "list" }>) {
  const Tag = ordered ? "ol" : "ul";
  const listClass =
    listType === "product"
      ? "mb-5 list-none space-y-0 pl-0"
      : "mb-5 list-disc space-y-2 pl-5";

  return (
    <Tag className={listClass}>
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            "text-slate-600 dark:text-white/90",
            listType === "product" &&
              "border-b border-slate-200 py-3 last:border-b-0 dark:border-white/10"
          )}
        >
          {renderInlineBold(item)}
        </li>
      ))}
    </Tag>
  );
}

interface ArticleContentRendererProps {
  blocks: ArticleContentBlock[];
}

export function ArticleContentRenderer({
  blocks,
}: ArticleContentRendererProps) {
  return (
    <div className="w-full max-w-none">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <ParagraphBlock key={index} {...block} />;
        }

        if (block.type === "heading") {
          const Tag = block.level === 2 ? "h2" : "h3";
          return (
            <Tag
              key={index}
              className={cn(
                "font-bold tracking-tight text-gray-900 dark:text-white",
                block.level === 2
                  ? "mt-8 mb-4 text-2xl"
                  : "mt-6 mb-3 text-lg text-[#00a2e5]"
              )}
            >
              {block.text}
            </Tag>
          );
        }

        return <ListBlock key={index} {...block} />;
      })}
    </div>
  );
}
