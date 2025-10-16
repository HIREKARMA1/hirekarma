"use client";

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { HelpCircle, ChevronDown, Search, GraduationCap, Briefcase, School, Settings, MessageCircle } from 'lucide-react';

const faqCategories = [
    {
        id: 'students',
        name: 'For Students',
        icon: GraduationCap,
        faqs: [
            {
                question: "How do I register on the HireKarma platform?",
                answer: "Registration is simple! Visit your college's placement portal powered by HireKarma, or access the platform through the link provided by your T&P cell. You'll need your college email ID and basic profile information to get started. Once registered, you can complete your profile, upload your resume, and start accessing placement opportunities."
            },
            {
                question: "How does HireKarma help me find job opportunities?",
                answer: "HireKarma uses AI-powered matching to connect you with relevant job opportunities based on your skills, academic background, and career preferences. You'll receive personalized job alerts, can apply to campus drives, access skill assessment tools, and get career guidance—all from one platform. Our system ensures you never miss an opportunity that matches your profile."
            },
            {
                question: "Can I access the platform if I'm from a tier-2 or tier-3 college?",
                answer: "Absolutely! HireKarma is specifically designed to bridge the opportunity gap for students from all college tiers. We partner with 200+ colleges across India, with a special focus on tier-2, tier-3, and tier-4 institutions. Every student deserves equal access to quality opportunities, regardless of their college brand."
            },
            {
                question: "What is the AI assessment and how does it work?",
                answer: "Our AI assessment evaluates your technical skills, soft skills, and domain knowledge through interactive tests and simulations. Based on your performance, you receive a detailed skill report with personalized improvement recommendations. This helps you understand your strengths and areas for growth, making you more job-ready and confident during interviews."
            },
            {
                question: "Is there any fee to use HireKarma as a student?",
                answer: "No! HireKarma is completely free for students. All features including job matching, skill assessments, career guidance, and placement opportunities are available at no cost. Our platform is designed to empower students, and we believe access to career opportunities should never be limited by financial constraints."
            }
        ]
    },
    {
        id: 'corporate',
        name: 'For Corporate',
        icon: Briefcase,
        faqs: [
            {
                question: "How does HireKarma help streamline campus recruitment?",
                answer: "HireKarma provides end-to-end automation for campus hiring—from posting job requirements and receiving pre-assessed candidate profiles to scheduling interviews and managing offers. Our AI-powered matching ensures you only see candidates who meet your criteria, reducing screening time by up to 70%. Integration with your existing ATS makes the process seamless."
            },
            {
                question: "What kind of candidates can we access through HireKarma?",
                answer: "You get access to 50,000+ pre-vetted, skill-verified candidates from 200+ partner institutions across India. Our database includes students from engineering, management, commerce, science, and other streams. Each candidate has been assessed through our AI platform, giving you confidence in their skills and job-readiness before you even start interviewing."
            },
            {
                question: "How does the AI-powered candidate matching work?",
                answer: "Our AI analyzes multiple parameters including technical skills, soft skills, academic performance, projects, internships, and cultural fit indicators. We match these against your job requirements, company values, and historical hiring patterns to recommend the best-fit candidates. This predictive matching has shown to improve quality-of-hire by 40% and reduce early attrition."
            },
            {
                question: "Can we conduct virtual campus drives through the platform?",
                answer: "Yes! HireKarma supports fully virtual campus recruitment including online assessments, video interviews, and digital offer management. You can reach students across multiple colleges simultaneously, conduct large-scale assessments, and track every stage of your recruitment funnel—all through our integrated platform."
            },
            {
                question: "What are the pricing models for corporate partners?",
                answer: "We offer flexible pricing based on your hiring volume and needs—including subscription models, per-hire pricing, and enterprise packages. Contact our sales team for a customized quote based on your campus recruitment requirements. We also offer a demo to show you the platform's capabilities before you commit."
            }
        ]
    },
    {
        id: 'universities',
        name: 'For Universities',
        icon: School,
        faqs: [
            {
                question: "How does HireKarma benefit our Training & Placement cell?",
                answer: "HireKarma automates 80% of your T&P workflows—from student database management and eligibility tracking to recruiter coordination and placement analytics. You get real-time dashboards showing placement progress, company-wise statistics, and student performance metrics. This frees up your team to focus on strategic initiatives like building recruiter relationships and career counseling."
            },
            {
                question: "Can we customize the platform for our institution's specific needs?",
                answer: "Absolutely! HireKarma is highly customizable to match your institution's workflows, branding, and requirements. You can configure eligibility criteria, approval workflows, communication templates, and reporting formats. We work closely with your T&P team during onboarding to ensure the platform aligns perfectly with your processes."
            },
            {
                question: "How do you help improve our students' employability?",
                answer: "Beyond placement management, we provide comprehensive skill development tools including AI-powered assessments, personalized learning paths, mock interviews, and resume builders. Students get detailed feedback on their strengths and improvement areas. Our analytics help you identify skill gaps at a cohort level, enabling targeted training interventions."
            },
            {
                question: "What kind of analytics and reports do we get access to?",
                answer: "You get comprehensive analytics including placement statistics, company-wise hiring trends, student performance metrics, salary benchmarks, and sector-wise placement distribution. All reports are exportable and customizable for accreditation purposes, management presentations, or strategic planning. Real-time dashboards keep you updated throughout the placement season."
            },
            {
                question: "Is training provided for our T&P team and faculty?",
                answer: "Yes! We provide comprehensive onboarding and training for your entire T&P team, faculty coordinators, and student representatives. This includes platform walkthroughs, best practices workshops, and ongoing support. We also provide documentation, video tutorials, and a dedicated support team to ensure smooth adoption and usage."
            }
        ]
    },
    {
        id: 'platform',
        name: 'Platform & Technical',
        icon: Settings,
        faqs: [
            {
                question: "What technology does HireKarma use?",
                answer: "HireKarma is built on a modern, cloud-native architecture using cutting-edge technologies including AI/ML for candidate matching, natural language processing for resume parsing, and advanced analytics engines. Our platform is mobile-responsive, secure, and scalable to handle high-volume campus recruitment cycles across hundreds of institutions simultaneously."
            },
            {
                question: "How secure is student and company data on the platform?",
                answer: "Data security is our top priority. We use bank-grade encryption for data in transit and at rest, comply with industry-standard security protocols, and undergo regular security audits. We're GDPR-compliant and follow strict data privacy policies. Access controls ensure that data is only visible to authorized users, and we never share student data without explicit consent."
            },
            {
                question: "Can HireKarma integrate with our existing systems?",
                answer: "Yes! We offer API-based integrations with popular ATS systems, HRMS platforms, learning management systems, and communication tools. For universities, we can integrate with student information systems and ERP platforms. Our technical team works with you to ensure seamless data flow between systems while maintaining security and compliance."
            },
            {
                question: "Is the platform mobile-friendly?",
                answer: "Absolutely! HireKarma is fully responsive and works seamlessly on smartphones, tablets, and desktops. Students can apply for jobs, take assessments, and track their applications on the go. Recruiters can review candidates and schedule interviews from anywhere. We also offer native mobile apps for iOS and Android for enhanced user experience."
            },
            {
                question: "What kind of support do you provide?",
                answer: "We offer multi-channel support including email, phone, and in-platform chat. Dedicated account managers are assigned to institutional and corporate partners. We provide 24/7 technical support during critical recruitment periods. Our comprehensive help center includes FAQs, video tutorials, and step-by-step guides. We also conduct regular check-ins and training sessions."
            }
        ]
    }
];

const FAQPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('students');
    const [openFAQ, setOpenFAQ] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

    const filteredFAQs = currentCategory?.faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    const toggleFAQ = (categoryId: string, faqIndex: number) => {
        const faqId = `${categoryId}-${faqIndex}`;
        setOpenFAQ(openFAQ === faqId ? null : faqId);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">
                {/* Header Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                                <HelpCircle className="w-4 h-4" />
                                <span className="text-sm font-semibold">FAQ</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
                                How Can We Help You?
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
                                Find answers to commonly asked questions about HireKarma&apos;s platform, features, and services.
                            </p>

                            {/* Search Bar */}
                            <div className="relative max-w-2xl mx-auto">
                                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for answers..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-16 pr-6 py-5 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Navigation */}
                <section className="relative py-8 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-30 backdrop-blur-lg bg-white/95 dark:bg-gray-900/95">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-wrap gap-3 justify-center">
                                {faqCategories.map(category => {
                                    const Icon = category.icon;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setActiveCategory(category.id);
                                                setSearchQuery('');
                                            }}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category.id
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            {category.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Accordion Section */}
                <section className="relative py-16 lg:py-20 bg-white dark:bg-gray-900">
                    <WavyBackground variant="accent" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto">
                            {filteredFAQs.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredFAQs.map((faq, index) => {
                                        const faqId = `${activeCategory}-${index}`;
                                        const isOpen = openFAQ === faqId;

                                        return (
                                            <div
                                                key={index}
                                                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-all duration-300"
                                            >
                                                <button
                                                    onClick={() => toggleFAQ(activeCategory, index)}
                                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50 transition-colors duration-300"
                                                >
                                                    <span className="text-lg font-bold text-gray-900 pr-8">
                                                        {faq.question}
                                                    </span>
                                                    <ChevronDown
                                                        className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                                                        }`}
                                                >
                                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-xl text-gray-500">No FAQs found matching your search.</p>
                                    <p className="text-gray-400 mt-2">Try adjusting your search or browse by category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Quick Help Cards */}
                <section className="relative py-16 bg-gray-50 dark:bg-gray-800">
                    <WavyBackground variant="secondary" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                                Still Need Help?
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <MessageCircle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>
                                    <p className="text-gray-600 mb-6">
                                        Chat with our support team in real-time for instant assistance
                                    </p>
                                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300">
                                        Start Chat
                                    </button>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <MessageCircle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
                                    <p className="text-gray-600 mb-6">
                                        Send us your questions and we&apos;ll respond within 24 hours
                                    </p>
                                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300">
                                        Send Email
                                    </button>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <HelpCircle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Help Center</h3>
                                    <p className="text-gray-600 mb-6">
                                        Browse our comprehensive guides and documentation
                                    </p>
                                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300">
                                        Visit Help Center
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Didn&apos;t Find What You&apos;re Looking For?
                            </h2>
                            <p className="text-xl text-blue-100 mb-10">
                                Our team is here to help you with any questions or concerns
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    Contact Support
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                                    Request a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default FAQPage;

