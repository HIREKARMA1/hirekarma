import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CampusDriveDetailView } from "@/components/events-page/CampusDriveDetailView";
import { NameCover } from "@/components/events-page/NameCover";

function text(value: unknown): string {
  if (typeof value === "string") return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  if (Array.isArray(value)) return value.map(text).filter(Boolean).join(", ");
  return "";
}

function when(value: unknown) {
  const raw = text(value);
  if (!raw) return "";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return raw;
  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function money(min: unknown, max: unknown, currency: unknown) {
  const format = (value: unknown) => {
    const amount = typeof value === "number" ? value : Number(text(value).replace(/,/g, ""));
    if (!Number.isFinite(amount) || amount <= 0) return "";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: text(currency) || "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };
  const left = format(min);
  const right = format(max);
  if (left && right) return `${left} – ${right}`;
  return left || right || "Not disclosed";
}

function rows(items: { label: string; value: string }[]) {
  return items.filter((item) => item.value);
}

function ApplyLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md bg-[#1b52a4] px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
    >
      Apply
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

function Shell({
  backHref,
  backLabel,
  image,
  imageName,
  title,
  subtitle,
  applyHref,
  facts,
  blocks,
}: {
  backHref: string;
  backLabel: string;
  image?: string;
  imageName: string;
  title: string;
  subtitle?: string;
  applyHref: string;
  facts: { label: string; value: string }[];
  blocks: { title: string; body: string }[];
}) {
  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      <div className="content-container space-y-5 py-6">
        <Link href={backHref} className="text-sm font-semibold text-[#1b52a4] hover:underline">
          {backLabel}
        </Link>
        <section className="overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-sm">
          <div className="relative aspect-[16/9] max-h-80 w-full bg-[#e8eef8]">
            <NameCover src={image} name={imageName} className="absolute inset-0 h-full w-full text-3xl" />
          </div>
          <div className="space-y-4 p-5 sm:p-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#0f1622]">{title}</h1>
              {subtitle ? <p className="mt-1 text-sm text-[#64748b]">{subtitle}</p> : null}
            </div>
            <ApplyLink href={applyHref} />
          </div>
        </section>
        {facts.length > 0 ? (
          <section className="grid gap-3 rounded-2xl border border-[#e6e8ec] bg-white p-5 sm:grid-cols-2 sm:p-6">
            {facts.map((fact) => (
              <p key={fact.label} className="text-sm text-[#334155]">
                <span className="font-semibold text-[#0f1622]">{fact.label}: </span>
                {fact.value}
              </p>
            ))}
          </section>
        ) : null}
        {blocks.map((block) => (
          <section key={block.title} className="rounded-2xl border border-[#e6e8ec] bg-white p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-[#0f1622]">{block.title}</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[#334155]">{block.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

function listBlocks(record: Record<string, unknown>, key: string, title: string) {
  const items = record[key];
  if (!Array.isArray(items) || items.length === 0) return [];
  const body = items
    .map((item) => {
      if (!item || typeof item !== "object") return text(item);
      const row = item as Record<string, unknown>;
      const heading = text(row.title || row.name);
      const detail = text(row.description || row.value);
      return [heading, detail].filter(Boolean).join(" — ");
    })
    .filter(Boolean)
    .join("\n");
  return body ? [{ title, body }] : [];
}

export function EventPublicDetail({
  record,
  applyHref,
}: {
  record: Record<string, unknown>;
  applyHref: string;
}) {
  const title = text(record.title) || "Event";
  const facts = rows([
    { label: "Category", value: text(record.category) },
    { label: "Mode", value: text(record.mode) },
    { label: "Venue", value: text(record.venue) },
    { label: "Starts", value: when(record.event_start_date) },
    { label: "Ends", value: when(record.event_end_date) },
    { label: "Registration starts", value: when(record.registration_start_date) },
    { label: "Registration ends", value: when(record.registration_end_date) },
    { label: "Prize", value: text(record.prize_pool) },
    { label: "Organizer", value: text(record.organizer_name) },
    { label: "Organizer email", value: text(record.organizer_email) },
    { label: "Organizer phone", value: text(record.organizer_phone) },
    { label: "Website", value: text(record.organizer_website) },
    { label: "Support email", value: text(record.support_email) },
    { label: "Support phone", value: text(record.support_phone) },
  ]);
  const blocks = [
    { title: "Summary", body: text(record.short_description || record.subtitle) },
    { title: "Description", body: text(record.long_description) },
    { title: "Eligibility", body: text(record.eligibility) },
    { title: "About the organizer", body: text(record.about_organizer) },
    { title: "Support", body: text(record.support_content) },
    ...listBlocks(record, "rounds", "Rounds"),
    ...listBlocks(record, "rewards", "Rewards"),
    ...listBlocks(record, "faqs", "FAQs"),
  ].filter((block) => block.body);

  return (
    <Shell
      backHref="/events"
      backLabel="Back to events"
      image={text(record.banner_url || record.organizer_logo_url)}
      imageName={title}
      title={title}
      subtitle={text(record.subtitle)}
      applyHref={applyHref}
      facts={facts}
      blocks={blocks}
    />
  );
}

export function JobPublicDetail({
  record,
  applyHref,
}: {
  record: Record<string, unknown>;
  applyHref: string;
}) {
  return (
    <CampusDriveDetailView
      record={record}
      applyHref={applyHref}
      backHref="/events/campus-drives"
      backLabel="Back to campus drives"
    />
  );
}

export function ProgramPublicDetail({
  record,
  applyHref,
}: {
  record: Record<string, unknown>;
  applyHref: string;
}) {
  return (
    <CampusDriveDetailView
      record={record}
      applyHref={applyHref}
      backHref="/events/campus-drives"
      backLabel="Back to campus drives"
    />
  );
}


export function DetailMissing({ backHref, backLabel }: { backHref: string; backLabel: string }) {
  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      <div className="content-container py-16">
        <h1 className="text-2xl font-bold text-[#0f1622]">Details not found</h1>
        <p className="mt-2 text-sm text-[#64748b]">This record is not available on Disha right now.</p>
        <Link href={backHref} className="mt-4 inline-block text-sm font-semibold text-[#1b52a4] hover:underline">
          {backLabel}
        </Link>
      </div>
    </main>
  );
}
