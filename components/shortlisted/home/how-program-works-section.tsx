"use client"

import { Check, Calendar } from "lucide-react"
import { Button } from "@/components/shortlisted/ui/button"
import { OptimizedImage } from "@/components/shortlisted/ui/optimized-image"
import { cn } from "@/lib/shortlisted/utils"

const phase1Features = [
    "ATS resume rebuild",
    "GD, HR & technical prep",
    "Aptitude assessment",
    "Personal placement plan",
]

export function HowProgramWorksSection() {
    return (
        <section className="relative bg-[#F0F9F4] py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1600px]">
                {/* Title and Subtitle */}
                <div className="text-center mb-4 px-2 sm:px-0">
                    <h1 className="font-semibold text-[36px] max-[375px]:text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] text-gray-900 font-poppins mb-4 break-words">
                        How the Program Works
                    </h1>
                    <p className="font-normal text-base max-[375px]:text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-poppins">
                        Two phases. One placement outcome. </p>
                </div>

                {/* Phase 1 Button */}
                <div className="flex justify-center mb-12">
                    <Button
                        className={cn(
                            "bg-[#00a2e5] hover:bg-[#0091cc] text-white rounded-lg",
                            "px-5 py-2 font-semibold text-[20px] font-poppins"
                        )}
                    >
                        Phase 1
                    </Button>
                </div>

                {/* Two Column Layout - Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Left Card - Offline Kickstart */}
                    <div className="border border-gray-300 rounded-xl p-4 lg:p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                        {/* Header */}
                        <h3 className="font-bold text-2xl lg:text-3xl text-gray-900 font-poppins mb-2">
                            Offline Kickstart
                        </h3>

                        {/* Duration */}
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-base lg:text-lg text-gray-700 font-poppins" />
                            <span className="text-base lg:text-lg text-gray-700 font-poppins">
                                First 4 Days
                            </span>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-3 mb-4">
                            {phase1Features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <div className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#00a2e5]">
                                        <Check className="w-4 h-4 text-white stroke-[2.5]" />
                                    </div>
                                    <span className="font-normal text-[20px] leading-relaxed text-gray-900 font-poppins">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Separator Line */}
                        <div className="w-full h-px bg-gray-200 my-4" />

                        {/* Outcome */}
                        <div>
                            <p className="font-medium text-xl lg:text-2xl text-gray-900 font-poppins mb-2">
                                Outcome:

                                <span className="font-medium text-xl lg:text-2xl text-[#00a2e5] font-poppins">
                                    Clarity. Confidence. Foundation
                                </span> .</p>
                        </div>
                    </div>

                    {/* Right Card - Image with Overlay */}
                    <div className="relative p-4 lg:p-6  mt-4 lg:mt-8">
                        <div className="relative w-full h-full min-h-[250px] lg:min-h-[320px] rounded-lg overflow-hidden">
                            <OptimizedImage
                                src="https://hirekarma.s3.us-east-1.amazonaws.com/shortlisted/herosection3.jpeg"
                                alt="Students bootcamp training"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Day 1-4 Badge Overlay - Left Bottom, overlapping */}
                        <div className="absolute bottom-0 -left-2 lg:-left-4 -mb-2 lg:-mb-3 z-10">
                            <div className="bg-[#00BAE8] rounded-xl px-4 py-3 w-[180px] lg:w-[220px] shadow-lg">
                                <p className="text-white font-semibold text-lg lg:text-xl font-poppins leading-tight">
                                    Day 1-4
                                </p>
                                <p className="text-white font-semibold text-base lg:text-lg font-poppins leading-tight">
                                    Bootcamp Training
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

