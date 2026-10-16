import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays } from "lucide-react";

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

function rows(items: { label: string; value: string }[]) {
  return items.filter((item) => item.value);
}

function ApplyLink({ href, bright = false }: { href: string; bright?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 hover:brightness-105 ${bright ? "bg-[#ffc72c] text-[#102657] shadow-lg" : "bg-[#2450dc] text-white shadow-md"}`}
    >
      Apply now
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

function Shell({
  image,
  imageName,
  title,
  subtitle,
  applyHref,
  facts,
  blocks,
  takeaways,
  organizer,
}: {
  image?: string;
  imageName: string;
  title: string;
  subtitle?: string;
  applyHref: string;
  facts: { label: string; value: string }[];
  blocks: { title: string; body: string }[];
  takeaways: { title: string; body: string }[];
  organizer: { label: string; value: string }[];
}) {
  const highlightOrder = ["Category", "Mode", "Venue", "Starts"];
  const highlights = highlightOrder
    .map((label) => facts.find((fact) => fact.label === label))
    .filter((fact): fact is { label: string; value: string } => Boolean(fact));
  const otherFacts = facts.filter((fact) => !highlightOrder.includes(fact.label) && !fact.label.startsWith("Organizer"));
  const summary = blocks.find((block) => block.title === "Summary");
  const contentBlocks = blocks.filter((block) => block.title !== "Summary");
  return (
    <main className="min-h-screen bg-[#f3f6fc]">
      <div className="content-container py-5 sm:py-8">
        {/* <Link href="/events/upcoming" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5c6c91] transition hover:text-[#2450dc]">
          <ArrowLeft className="h-4 w-4" />Back to all events
        </Link> */}

        <section className="grid overflow-hidden rounded-[28px] bg-gradient-to-br from-[#10245b] via-[#16377f] to-[#2146a4] p-6 text-white shadow-[0_20px_50px_rgba(22,49,112,.16)] sm:p-9 lg:min-h-[420px] lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-10 lg:p-12">
          <div className="flex flex-col items-start">
            <div className="flex flex-wrap gap-2">
              {facts.find((fact) => fact.label === "Category") ? <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white">{facts.find((fact) => fact.label === "Category")?.value}</span> : null}
              {facts.find((fact) => fact.label === "Mode") ? <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white">{facts.find((fact) => fact.label === "Mode")?.value}</span> : null}
            </div>
            <h1 className="mt-5 max-w-[700px] text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[50px]">{title}</h1>
            {subtitle ? <p className="mt-4 max-w-[620px] text-base leading-relaxed text-[#d8e2ff] sm:text-lg">{subtitle}</p> : null}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ApplyLink href={applyHref} bright />
              {facts.find((fact) => fact.label === "Starts") ? <span className="inline-flex items-center gap-2 text-sm font-medium text-[#d8e2ff]"><CalendarDays className="h-4 w-4" />{facts.find((fact) => fact.label === "Starts")?.value}</span> : null}
            </div>
          </div>

          <div className="relative mt-8 min-h-[230px] overflow-hidden rounded-[22px] border border-white/20 bg-white/10 shadow-xl sm:min-h-[280px] lg:mt-0 lg:min-h-[300px]">
            <NameCover src={image} name={imageName} className="absolute inset-0 h-full w-full text-4xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081942]/85 via-[#081942]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              {/* <p className="mt-1 text-lg font-bold text-white sm:text-xl">{facts.find((fact) => fact.label === "Category")?.value || "Featured event"}</p>
              {summary ? <p className="mt-2 line-clamp-2 max-w-lg text-sm leading-relaxed text-white/80">{summary.body}</p> : null} */}
            </div>
          </div>
        </section>

        {highlights.length ? <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{highlights.map((fact) => <div key={fact.label} className="rounded-[18px] border border-[#e7ebf3] bg-white px-5 py-4 shadow-[0_4px_14px_rgba(24,44,88,.04)]"><p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#7583a3]">{fact.label}</p><p className="mt-1.5 line-clamp-2 text-base font-bold text-[#1c2b50]">{fact.value}</p></div>)}</section> : null}

        <div className="mt-5 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            {summary ? <section className="rounded-[24px] border border-[#e8edf5] bg-white p-6 shadow-[0_5px_20px_rgba(24,44,88,.04)] sm:p-8"><h2 className="text-2xl font-bold tracking-tight text-[#14244c]">About this event</h2><p className="mt-3 whitespace-pre-wrap text-[15px] leading-7 text-[#586789]">{summary.body}</p></section> : null}
            {takeaways.length ? <section className="rounded-[24px] border border-[#e8edf5] bg-white p-6 shadow-[0_5px_20px_rgba(24,44,88,.04)] sm:p-8"><h2 className="text-2xl font-bold tracking-tight text-[#14244c]">What you&apos;ll take away</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{takeaways.map((item, index) => <article key={`${item.title}-${index}`} className="rounded-2xl bg-[#eff4ff] p-4"><h3 className="font-bold text-[#1b2d56]">{item.title}</h3>{item.body ? <p className="mt-1.5 text-sm leading-relaxed text-[#607091]">{item.body}</p> : null}</article>)}</div></section> : null}
            {contentBlocks.map((block) => <details key={block.title} open className="group border-b border-[#e1e7f0] bg-white px-5 py-5 first:rounded-t-[22px] last:rounded-b-[22px] last:border-b-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#1c2b50] marker:hidden">{block.title}<span className="text-xl leading-none text-[#2450dc] transition group-open:rotate-45">+</span></summary><p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[#61708e]">{block.body}</p></details>)}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            {otherFacts.length ? <section className="rounded-[24px] border border-[#e8edf5] bg-white p-6 shadow-[0_8px_24px_rgba(24,44,88,.08)]"><h2 className="text-lg font-bold text-[#14244c]">Event information</h2><div className="mt-4 space-y-3">{otherFacts.map((fact) => <p key={fact.label}><span className="block text-[11px] font-bold uppercase tracking-wide text-[#7a88a5]">{fact.label}</span><span className="mt-0.5 block text-sm font-semibold text-[#253657]">{fact.value}</span></p>)}</div><div className="mt-5"><ApplyLink href={applyHref} /></div></section> : null}
            {organizer.length ? <section className="rounded-[24px] border border-[#e8edf5] bg-white p-6 shadow-[0_8px_24px_rgba(24,44,88,.06)]"><h2 className="text-lg font-bold text-[#14244c]">Organizer</h2><div className="mt-3 space-y-2.5">{organizer.map((fact) => <p key={fact.label}><span className="block text-[11px] font-bold uppercase tracking-wide text-[#7a88a5]">{fact.label}</span><span className="mt-0.5 block text-sm font-semibold text-[#253657]">{fact.value}</span></p>)}</div></section> : null}
          </aside>
        </div>
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

function takeawayCards(record: Record<string, unknown>) {
  const source = record.key_takeaways || record.takeaways || record.learning_outcomes || record.highlights;
  if (!Array.isArray(source)) return [];
  return source.map((item, index) => {
    if (!item || typeof item !== "object") {
      return { title: `Key takeaway ${index + 1}`, body: text(item) };
    }
    const row = item as Record<string, unknown>;
    return {
      title: text(row.title || row.name || row.label) || `Key takeaway ${index + 1}`,
      body: text(row.description || row.value || row.detail),
    };
  }).filter((item) => item.title || item.body).slice(0, 6);
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
  const organizer = rows([
    { label: "Name", value: text(record.organizer_name) },
    { label: "Email", value: text(record.organizer_email) },
    { label: "Phone", value: text(record.organizer_phone) },
    { label: "Website", value: text(record.organizer_website) },
  ]);

  return (
    <Shell
      image={text(record.banner_url || record.organizer_logo_url)}
      imageName={title}
      title={title}
      subtitle={text(record.subtitle)}
      applyHref={applyHref}
      facts={facts}
      blocks={blocks}
      takeaways={takeawayCards(record)}
      organizer={organizer}
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
