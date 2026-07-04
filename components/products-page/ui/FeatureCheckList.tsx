import { FeatureCheckItem } from "./FeatureCheckItem";

interface FeatureCheckListProps {
  features: { text: string }[];
  accentColor: string;
}

export function FeatureCheckList({ features, accentColor }: FeatureCheckListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <FeatureCheckItem
          key={`${feature.text}-${index}`}
          text={feature.text}
          accentColor={accentColor}
        />
      ))}
    </ul>
  );
}
