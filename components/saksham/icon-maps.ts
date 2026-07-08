import {
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  GraduationCap,
  LineChart,
  Upload,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const problemIconMap = {
  "book-open": BookOpen,
  brain: Brain,
  briefcase: Briefcase,
} satisfies Record<string, LucideIcon>;

export const solutionIconMap = {
  upload: Upload,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  "bar-chart": BarChart3,
  "book-open": BookOpen,
  "user-check": UserCheck,
} satisfies Record<string, LucideIcon>;

export const journeyIconMap = {
  upload: Upload,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  "bar-chart": BarChart3,
  "book-open": BookOpen,
  "line-chart": LineChart,
  "user-check": UserCheck,
} satisfies Record<string, LucideIcon>;

export const advantageIconMap = {
  brain: Brain,
  "line-chart": LineChart,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export const solutionStyleMap = [
  {
    colorLight: "text-blue-600",
    colorDark: "text-blue-400",
    bgLight: "bg-blue-100/80",
    bgDark: "bg-blue-900/20",
    gradientLight: "from-blue-50 to-white",
    gradientDark: "from-blue-900/10 to-gray-800",
  },
  {
    colorLight: "text-green-600",
    colorDark: "text-green-400",
    bgLight: "bg-green-100/80",
    bgDark: "bg-green-900/20",
    gradientLight: "from-green-50 to-white",
    gradientDark: "from-green-900/10 to-gray-800",
  },
  {
    colorLight: "text-purple-600",
    colorDark: "text-purple-400",
    bgLight: "bg-purple-100/80",
    bgDark: "bg-purple-900/20",
    gradientLight: "from-purple-50 to-white",
    gradientDark: "from-purple-900/10 to-gray-800",
  },
  {
    colorLight: "text-yellow-600",
    colorDark: "text-yellow-400",
    bgLight: "bg-yellow-100/80",
    bgDark: "bg-yellow-900/20",
    gradientLight: "from-yellow-50 to-white",
    gradientDark: "from-yellow-900/10 to-gray-800",
  },
  {
    colorLight: "text-red-600",
    colorDark: "text-red-400",
    bgLight: "bg-red-100/80",
    bgDark: "bg-red-900/20",
    gradientLight: "from-red-50 to-white",
    gradientDark: "from-red-900/10 to-gray-800",
  },
  {
    colorLight: "text-indigo-600",
    colorDark: "text-indigo-400",
    bgLight: "bg-indigo-100/80",
    bgDark: "bg-indigo-900/20",
    gradientLight: "from-indigo-50 to-white",
    gradientDark: "from-indigo-900/10 to-gray-800",
  },
] as const;

export const journeyStyleMap = [
  {
    colorLight: "text-blue-600",
    colorDark: "text-blue-400",
    bgLight: "bg-blue-100/80",
    bgDark: "bg-blue-900/20",
  },
  {
    colorLight: "text-emerald-600",
    colorDark: "text-emerald-400",
    bgLight: "bg-emerald-100/80",
    bgDark: "bg-emerald-900/20",
  },
  {
    colorLight: "text-purple-600",
    colorDark: "text-purple-400",
    bgLight: "bg-purple-100/80",
    bgDark: "bg-purple-900/20",
  },
  {
    colorLight: "text-yellow-600",
    colorDark: "text-yellow-400",
    bgLight: "bg-yellow-100/80",
    bgDark: "bg-yellow-900/20",
  },
  {
    colorLight: "text-red-600",
    colorDark: "text-red-400",
    bgLight: "bg-red-100/80",
    bgDark: "bg-red-900/20",
  },
  {
    colorLight: "text-indigo-600",
    colorDark: "text-indigo-400",
    bgLight: "bg-indigo-100/80",
    bgDark: "bg-indigo-900/20",
  },
  {
    colorLight: "text-cyan-600",
    colorDark: "text-cyan-400",
    bgLight: "bg-cyan-100/80",
    bgDark: "bg-cyan-900/20",
  },
] as const;

export const advantageIconColorMap = {
  brain: "text-indigo-500",
  "line-chart": "text-pink-500",
  zap: "text-teal-500",
} as const;
