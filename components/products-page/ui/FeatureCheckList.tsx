import { FeatureCheckItem } from "./FeatureCheckItem";

interface FeatureCheckListProps {
  features: { text: string }[];
  accentColor: string;
  variant?: "light" | "dark";
}

export function FeatureCheckList({
  features,
  accentColor,
  variant = "light",
}: FeatureCheckListProps) {
  return (
    <ul className="space-y-2.5 sm:space-y-3">
      {features.map((feature, index) => (
        <FeatureCheckItem
          key={`${feature.text}-${index}`}
          text={feature.text}
          accentColor={accentColor}
          variant={variant}
        />
      ))}
    </ul>
  );
}
