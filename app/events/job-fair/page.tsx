import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

import { getPublicJobFairs } from "@/services/job-fairs";
import { env } from "@/lib/config/env";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Job Fairs | HireKarma",
  description: "Explore published Job Fairs and career opportunities from participating organizations.",
};

function dishaFairHref(slug: string) {
  return `${env.dishaUrl.replace(/\/$/, "")}/job-fairs/${encodeURIComponent(slug)}`;
}

export default async function JobFairLandingPage() {
  const { items, failed } = await getPublicJobFairs();

  return (
    <main className="min-h-screen bg-[#fbfbf8] text-slate-950">
      <section className="mx-auto max-w-7xl px-4 pb-6 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-[#effbf5] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border-[36px] border-white/60" />
          <div className="relative max-w-2xl">
            <h1 className="text-[2.75rem] font-bold leading-tight tracking-tight sm:text-[3.25rem]">Job Fairs</h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore published career fairs and the opportunities shared by participating organizations.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="job-fairs-heading" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">Explore</p>
            <h2 id="job-fairs-heading" className="mt-2 text-2xl font-bold">Find a Job Fair</h2>
          </div>
          {!failed && <span className="text-sm text-slate-500">{items.length} {items.length === 1 ? "event" : "events"}</span>}
        </div>

        {failed ? (
          <div className="rounded-2xl border border-amber-200 bg-white px-6 py-14 text-center">
            <h3 className="text-lg font-semibold">Job Fairs could not be loaded</h3>
            <p className="mt-2 text-sm text-slate-500">Please try again in a little while.</p>
          </div>
        ) : items.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((fair, index) => (
              <a
                key={fair.id}
                href={dishaFairHref(fair.slug)}
                className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${index % 3 === 1 ? "bg-[#fffdf3]" : index % 3 === 2 ? "bg-[#f7f4ff]" : "bg-[#f4fbf6]"}`}
              >
                <div className="relative grid h-48 place-items-center overflow-hidden bg-emerald-50">
                  {fair.heroImage ? (
                    <img src={fair.heroImage} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white text-emerald-800 shadow-sm">
                      <Briefcase className="h-9 w-9" />
                    </div>
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-800">Career Expo</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold group-hover:text-emerald-800">{fair.title}</h3>
                  <p className="mt-2 line-clamp-3 min-h-0 text-sm leading-6 text-slate-600">
                    {fair.shortDescription || "View event information and open opportunities."}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    Explore event <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Briefcase className="h-7 w-7" /></div>
            <h3 className="mt-4 text-lg font-semibold">No published Job Fairs right now</h3>
            <p className="mt-2 text-sm text-slate-500">Check back soon for new career events.</p>
            <Link href="/events" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:underline">Browse all events</Link>
          </div>
        )}
      </section>
    </main>
  );
}
