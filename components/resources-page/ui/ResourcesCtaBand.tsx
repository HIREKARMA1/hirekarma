import { theme } from "@/config/theme";
import { ProductButton } from "@/components/products-page/ui/ProductButton";
import type { ResourcesHubContent } from "@/types/resources-page";

interface ResourcesCtaBandProps {
  cta: ResourcesHubContent["cta"];
}

export function ResourcesCtaBand({ cta }: ResourcesCtaBandProps) {
  return (
    <section
      className="rounded-2xl px-6 py-12 text-center sm:px-10 sm:py-14"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.heroBg} 0%, #15418a 55%, ${theme.colors.primary} 100%)`,
      }}
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {cta.heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
        {cta.description}
      </p>
      <div className="mt-6 flex justify-center">
        <ProductButton
          cta={{
            label: cta.button.label,
            hrefKey: cta.button.hrefKey,
            variant: "primary",
          }}
          accentColor={theme.colors.orange}
        />
      </div>
    </section>
  );
}
