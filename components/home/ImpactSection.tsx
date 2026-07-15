"use client";

import {
  BarChart3,
  Briefcase,
  Building2,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";

const icons = [Users, GraduationCap, Briefcase, Building2, MapPin, BarChart3];

export default function ImpactSection() {
  const { content } = useHomeLocale();
  const { statsBar } = content;

  return (
    <section style={{ backgroundColor: theme.colors.ink }}>
      <div className="content-container py-7 sm:py-8">
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-2">
          {statsBar.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.id}
                className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-4 w-4 text-white/90" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-xl font-bold leading-none tracking-tight text-white sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-snug text-white/90 sm:text-[13px]">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
