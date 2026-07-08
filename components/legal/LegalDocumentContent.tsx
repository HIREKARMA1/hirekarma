"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import type { LegalDocument } from "@/types/legal-page";

interface LegalDocumentContentProps {
  document: LegalDocument;
}

export function LegalDocumentContent({ document }: LegalDocumentContentProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const headingClass = `text-2xl font-bold ${
    isDark ? "text-white" : "text-gray-900"
  }`;
  const bodyClass = `text-lg leading-relaxed ${
    isDark ? "text-gray-300" : "text-gray-600"
  }`;
  const subheadingClass = `text-xl font-semibold mb-2 ${
    isDark ? "text-white" : "text-gray-900"
  }`;
  const strongClass = isDark ? "text-white" : "text-gray-900";
  const linkClass = `font-semibold transition-colors duration-200 ${
    isDark
      ? "text-cyan-400 hover:text-cyan-300"
      : "text-cyan-600 hover:text-cyan-700"
  }`;

  return (
    <main className="flex-grow">
      <section className={`relative ${isDark ? "bg-gray-900" : "bg-white"}`}>
        <div className="relative content-container py-20">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 mb-12">
              <h1
                className={`text-4xl lg:text-5xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {document.title}
              </h1>
              <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {document.lastUpdatedLabel} {document.lastUpdated}
              </p>
            </div>

            <div className="space-y-12">
              {document.sections.map((section) => (
                <section key={section.id} className="space-y-4">
                  <h2 className={headingClass}>{section.title}</h2>

                  {section.paragraphs?.map((paragraph, index) => (
                    <p key={index} className={bodyClass}>
                      {paragraph}
                    </p>
                  ))}

                  {section.subsections && (
                    <div className={`space-y-6 ${bodyClass}`}>
                      {section.subsections.map((subsection, index) => (
                        <div key={index}>
                          <h3 className={subheadingClass}>{subsection.title}</h3>
                          <p>{subsection.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.intro && section.id !== "contact" && (
                    <p className={bodyClass}>{section.intro}</p>
                  )}

                  {section.listItems && (
                    <ul className={`list-disc pl-6 space-y-2 ${bodyClass}`}>
                      {section.listItems.map((item, index) => (
                        <li key={index}>
                          {item.label ? (
                            <>
                              <strong className={strongClass}>{item.label}</strong>{" "}
                              {item.text}
                            </>
                          ) : (
                            item.text
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.outro && (
                    <p className={`mt-4 ${bodyClass}`}>
                      {section.outro}{" "}
                      {section.contactEmail && (
                        <a
                          href={`mailto:${section.contactEmail}`}
                          className={linkClass}
                        >
                          {section.contactEmail}
                        </a>
                      )}
                    </p>
                  )}

                  {section.id === "contact" && (
                    <div className={bodyClass}>
                      {section.intro && <p className="mb-4">{section.intro}</p>}
                      <div className="space-y-2">
                        {section.companyName && (
                          <p>
                            <strong className={strongClass}>
                              {section.companyName}
                            </strong>
                          </p>
                        )}
                        {section.contactEmail && (
                          <p>
                            {section.contactEmailLabel && (
                              <strong className={strongClass}>
                                {section.contactEmailLabel}
                              </strong>
                            )}{" "}
                            <a
                              href={`mailto:${section.contactEmail}`}
                              className={linkClass}
                            >
                              {section.contactEmail}
                            </a>
                          </p>
                        )}
                        {section.address && (
                          <p>
                            {section.addressLabel && (
                              <strong className={strongClass}>
                                {section.addressLabel}
                              </strong>
                            )}{" "}
                            {section.address}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
