import { HeroSection } from "@/components/shortlisted/home/hero-section"
import { WhyShortlistedSection } from "@/components/shortlisted/home/why-shortlisted-section"
import { HowProgramWorksSection } from "@/components/shortlisted/home/how-program-works-section"
import WhoCanJoin from "@/components/shortlisted/home/WhoCanJoin"
import WhatMakesDifferent from "@/components/shortlisted/home/WhatMakesDifferent"
import LiveJobExecution from "@/components/shortlisted/home/LiveJobExecution"
import WhatYouWalkAwayWith from "@/components/shortlisted/home/WhatYouWalkAwayWith"
import CTABanner from "@/components/shortlisted/home/CTABanner"
import PricingSection from "@/components/shortlisted/home/PricingSection"
import Footer from "@/components/shortlisted/ui/Footer"

export default function HomePage() {
    return (
        <main className="bg-white dark:bg-[#1a1f2e] min-h-screen">
            <HeroSection />
            <WhyShortlistedSection />
            <HowProgramWorksSection />
            <LiveJobExecution />
            <WhoCanJoin />
            <WhatMakesDifferent />
            <WhatYouWalkAwayWith />
            <PricingSection />
            <CTABanner />
            <Footer />
        </main>
    )
}
