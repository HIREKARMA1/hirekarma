import Link from "next/link";
import Image from "next/image";

type NavbarLogoProps = {
  isDark: boolean;
};

export function NavbarLogo({ isDark }: NavbarLogoProps) {
  return (
    <Link href="/" className="relative flex shrink-0 items-center">
      <Image
        src={
          isDark
            ? "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogowhite.png"
            : "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogoblack.png"
        }
        alt="HireKarma Logo"
        width={250}
        height={50}
        className="h-9 w-auto max-w-42 object-contain object-left transition-transform duration-300 hover:scale-105 sm:h-10 sm:max-w-46 md:h-11 md:max-w-50"
        priority
      />
    </Link>
  );
}
