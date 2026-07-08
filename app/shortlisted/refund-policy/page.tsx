import Footer from "@/components/shortlisted/ui/Footer"

export default function RefundPolicyPage() {
    return (
        <main className="bg-white dark:bg-[#1a1f2e] min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1200px] py-12 lg:py-16">
                <h1 className="font-semibold text-[64px] leading-[1.1] text-gray-900 dark:text-white font-poppins">
                    Refund Policy
                </h1>

                <p className="text-[#00a2e5] text-base lg:text-lg font-poppins mb-8">
                    Last updated: June 1, 2026
                </p>

                <div className="mb-8">
                    <p className="font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
                        This Refund Policy applies to Shortlisted, a specialized sub-brand of HireKarma Private Limited.
                        It governs refunds for the Shortlisted placement execution program, including the one-time batch
                        subscription fee of ₹12,000 INR per batch.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-poppins mb-4">
                        1. Program Fee
                    </h2>
                    <p className="font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
                        The Shortlisted program is offered as a one-time subscription of ₹12,000 INR per batch. Payment
                        confirms your seat subject to eligibility review and batch availability (maximum 12 students per
                        batch).
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-poppins mb-4">
                        2. Refund Eligibility
                    </h2>
                    <p className="font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed mb-3">
                        You may request a full refund if:
                    </p>
                    <ul className="space-y-3 font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed list-disc list-inside">
                        <li>
                            Your request is submitted in writing to{" "}
                            <a href="mailto:info@hirekarma.in" className="text-[#00a2e5] hover:underline">
                                info@hirekarma.in
                            </a>{" "}
                            at least 7 calendar days before the official batch start date.
                        </li>
                        <li>
                            HireKarma cancels the batch or is unable to commence the program on the scheduled start date.
                        </li>
                        <li>
                            Your application is rejected during eligibility review before the batch begins (full refund
                            of any amount paid).
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-poppins mb-4">
                        3. Non-Refundable Situations
                    </h2>
                    <p className="font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed mb-3">
                        Refunds will not be issued when:
                    </p>
                    <ul className="space-y-3 font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed list-disc list-inside">
                        <li>The batch has officially started (including the offline kickstart phase).</li>
                        <li>You withdraw after batch commencement for personal reasons.</li>
                        <li>You fail to meet program participation requirements after enrollment.</li>
                        <li>Premium platform access (Solviq, DISHA) has been activated on your account.</li>
                        <li>You are removed from the program due to misconduct or violation of Terms of Service.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-poppins mb-4">
                        4. Partial Refunds
                    </h2>
                    <p className="font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
                        Partial refunds are not offered once the batch has started. In exceptional circumstances (e.g.
                        documented medical emergency), requests will be reviewed case-by-case at HireKarma&apos;s sole
                        discretion. Approved partial refunds, if any, may deduct costs for services already delivered.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-poppins mb-4">
                        5. Refund Process & Timeline
                    </h2>
                    <ul className="space-y-3 font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed list-disc list-inside">
                        <li>
                            Email your refund request to{" "}
                            <a href="mailto:info@hirekarma.in" className="text-[#00a2e5] hover:underline">
                                info@hirekarma.in
                            </a>{" "}
                            with your full name, registered email, payment reference, and batch details.
                        </li>
                        <li>Approved refunds are processed to the original payment method within 10–15 business days.</li>
                        <li>Bank or payment gateway processing times may vary and are outside our control.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-poppins mb-4">
                        6. No Employment Guarantee
                    </h2>
                    <p className="font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
                        Shortlisted is a placement execution program. HireKarma does not guarantee job placement, interview
                        selection, or employment outcomes. Dissatisfaction with placement results alone does not qualify
                        for a refund after the batch has started.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="font-bold text-xl lg:text-2xl text-gray-900 dark:text-white font-poppins mb-4">
                        7. Contact
                    </h2>
                    <p className="font-normal text-base lg:text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
                        For refund inquiries:{" "}
                        <a href="mailto:info@hirekarma.in" className="text-[#00a2e5] hover:underline">
                            info@hirekarma.in
                        </a>
                        <br />
                        HireKarma Private Limited - Room No: 109, 1st Floor, Tower A, O-HUB, Bhubaneswar
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="font-normal text-sm lg:text-base text-gray-600 dark:text-gray-400 font-poppins mb-2">
                        Copyright © 2026 HireKarma Private Limited. All Rights Reserved.
                    </p>
                    <p className="font-normal text-sm lg:text-base text-gray-600 dark:text-gray-400 font-poppins">
                        Shortlisted is powered by HireKarma Pvt Ltd.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    )
}
