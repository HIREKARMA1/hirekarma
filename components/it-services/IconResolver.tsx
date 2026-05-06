import React from "react";
import {
  Building2,
  CircleDashed,
  Code2,
  Database,
  Layers,
  Monitor,
  Smartphone,
  LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Database,
  Layers,
  Code2,
  CircleDashed,
  Building2,
};

interface IconResolverProps {
  icon: string;
  className?: string;
}

const IconResolver: React.FC<IconResolverProps> = ({ icon, className }) => {
  const Component = ICONS[icon] ?? Monitor;
  return <Component className={className} />;
};

export default IconResolver;
