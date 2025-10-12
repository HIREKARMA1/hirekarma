"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const OurServicesSection: React.FC = () => {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
        'students-1': false,
        'students-2': false,
        'students-3': false,
        'students-4': false,
        'corporate-1': false,
        'corporate-2': false,
        'corporate-3': false,
        'corporate-4': false,
        'university-1': false,
        'university-2': false,
        'university-3': false,
        'university-4': false,
    });


    const toggleExpanded = (itemKey: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey]
        }));
    };

    const sections = [
        {
            id: 'students',
            title: 'For Students',
            description: 'Empowering students with industry-aligned skills and connecting them to dream careers through comprehensive training and placement support.',
            image: '/students.jpg', // Students image
            services: [
                {
                    key: 'students-1',
                    title: 'Skill Development Programs',
                    description: 'Comprehensive training programs designed to bridge the gap between academic learning and industry requirements. Our curriculum covers emerging technologies, soft skills, and practical applications to ensure students are job-ready.',
                    features: ['Industry-specific curriculum', 'Hands-on projects', 'Certification programs', 'Mentorship support']
                },
                {
                    key: 'students-2',
                    title: 'Career Guidance & Counseling',
                    description: 'Personalized career counseling to help students identify their strengths, interests, and career paths. Our experts provide guidance on skill development, resume building, and interview preparation.',
                    features: ['Career assessment', 'Resume building', 'Interview preparation', 'Industry insights']
                },
                {
                    key: 'students-3',
                    title: 'Placement Assistance',
                    description: 'Direct connection to top employers and placement opportunities. We facilitate campus drives, job fairs, and one-on-one placement support to help students secure their dream jobs.',
                    features: ['Campus recruitment drives', 'Job fair participation', 'Direct employer connections', 'Placement tracking']
                },
                {
                    key: 'students-4',
                    title: 'Industry Mentorship',
                    description: 'Connect with industry professionals and mentors who provide real-world insights, career advice, and networking opportunities to accelerate your professional growth.',
                    features: ['Industry mentor matching', 'Networking events', 'Professional development', 'Career insights']
                }
            ]
        },
        {
            id: 'corporate',
            title: 'For Corporate',
            description: 'Streamline your hiring process with our centralized platform that connects you to pre-vetted, job-ready talent from top institutions across India.',
            image: '/corporate.jpg', // Corporate image
            services: [
                {
                    key: 'corporate-1',
                    title: 'Centralized Campus Hiring',
                    description: 'Post jobs across multiple colleges simultaneously and manage applications from a single dashboard. Reduce hiring costs by 40% while accessing a larger talent pool.',
                    features: ['Multi-college job posting', 'Real-time application management', 'Cost reduction', 'Centralized dashboard']
                },
                {
                    key: 'corporate-2',
                    title: 'Pre-screened Talent Pool',
                    description: 'Access a database of pre-vetted candidates who have completed our skill development programs. Save time and resources with candidates who are already trained and job-ready.',
                    features: ['Pre-screened candidates', 'Skill-verified profiles', 'Reduced screening time', 'Quality assurance']
                },
                {
                    key: 'corporate-3',
                    title: 'Lateral Hiring Solutions',
                    description: 'Find experienced professionals who align with your company culture and growth plans. We recruit across tech, operations, sales, marketing, and other sectors tailored to your needs.',
                    features: ['Experienced professionals', 'Culture fit assessment', 'Multiple sectors', 'Growth-focused hiring']
                },
                {
                    key: 'corporate-4',
                    title: 'Flexible Staffing Solutions',
                    description: 'Scale your workforce efficiently with our flexible staffing solutions. From urgent role filling to long-term workforce planning, we deliver reliable results fast.',
                    features: ['Flexible contracts', 'Quick deployment', 'Scalable solutions', 'Reliable delivery']
                }
            ]
        },
        {
            id: 'university',
            title: 'For Universities',
            description: 'Transform your placement outcomes with our comprehensive platform that increases student employability and connects your institution to top employers.',
            image: '/university.jpg', // University image
            services: [
                {
                    key: 'university-1',
                    title: 'Placement Management System',
                    description: 'Complete placement management solution that helps track student progress, manage employer relationships, and streamline the entire placement process from registration to job offers.',
                    features: ['Student tracking', 'Employer management', 'Process automation', 'Analytics dashboard']
                },
                {
                    key: 'university-2',
                    title: 'Industry Partnership Programs',
                    description: 'Build strong relationships with leading companies through our industry partnership programs. Connect with top recruiters and create long-term placement opportunities for your students.',
                    features: ['Employer partnerships', 'Industry collaborations', 'Long-term relationships', 'Placement opportunities']
                },
                {
                    key: 'university-3',
                    title: 'Student Skill Enhancement',
                    description: 'Enhance your students\' employability with our comprehensive skill development programs. Our industry-aligned curriculum ensures students are prepared for the job market.',
                    features: ['Skill assessment', 'Training programs', 'Industry alignment', 'Employability focus']
                },
                {
                    key: 'university-4',
                    title: 'Placement Analytics & Reporting',
                    description: 'Track and analyze placement performance with detailed analytics and reporting. Monitor success rates, identify trends, and make data-driven decisions to improve outcomes.',
                    features: ['Performance analytics', 'Success tracking', 'Trend analysis', 'Data-driven insights']
                }
            ]
        }
    ];

    return (
        <section className="relative bg-white py-20 lg:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                }}></div>
            </div>

            <div className="relative content-container">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-medium text-cyan-800 border border-cyan-200 mb-6">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
                        Our Services
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        End-to-End Talent Solutions
                        <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            From Training to Hiring
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Simplify campus recruitment with HireKarma — India&apos;s leading platform for end-to-end hiring, 
                        upskilling, and staffing solutions. Access pre-vetted, job-ready talent from top government and private colleges.
                    </p>
                </div>

                {/* Main Services Sections */}
                {sections.map((section, sectionIndex) => (
                    <div key={section.id} className={`mb-20 ${sectionIndex > 0 ? 'mt-20' : ''}`}>
                        <div className={`grid lg:grid-cols-2 gap-16 items-center ${sectionIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                            {/* Content */}
                            <div className={`space-y-8 ${sectionIndex % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div>
                                    <h3 className="text-4xl font-bold text-gray-900 mb-6">{section.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        {section.description}
                                    </p>
                                </div>

                                {/* Services List */}
                                <div className="space-y-4">
                                    {section.services.map((service) => (
                                        <div key={service.key} className="border border-gray-200 rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => toggleExpanded(service.key)}
                                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                <span className="text-lg font-semibold text-gray-900">{service.title}</span>
                                                {expandedItems[service.key] ? (
                                                    <ChevronUp className="w-5 h-5 text-cyan-600" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-cyan-600" />
                                                )}
                                            </button>
                                            {expandedItems[service.key] && (
                                                <div className="px-6 pb-6">
                                                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                                                    <ul className="space-y-2">
                                                        {service.features.map((feature, featureIndex) => (
                                                            <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-600">
                                                                <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`${sectionIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={section.image}
                                        alt={`${section.title} - HireKarma Services`}
                                        width={600}
                                        height={400}
                                        className="w-full h-[400px] object-cover"
                                        priority={sectionIndex === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* CTA Section
                <div className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
                    <p className="text-xl mb-8 opacity-90">
                        Start your journey with HireKarma today. Whether you&apos;re hiring, training, or looking for your next opportunity — we&apos;re here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Partner With Us
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default OurServicesSection;
