"use client";

import { ExternalLink, ChevronDown } from "lucide-react";
import { staticImages } from "../data/images";
import { faqs } from "../data/faqs";
import { useState } from "react";

type LinkCardProps = {
  href: string;
  cta: string;
  imgSrc?: string;
  imgAlt?: string;
  badge: string;
  imgClassName?: string;
};

function Card({
  href,
  cta,
  imgSrc,
  imgAlt,
  badge,
  imgClassName,
}: LinkCardProps) {
  const baseCardClass =
    "group block w-full rounded-2xl overflow-hidden bg-white shadow-md border border-gray-200 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDD06E] focus-visible:ring-offset-2";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseCardClass}
    >
      <div className="relative w-full h-56 sm:h-64">
        <span className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
          {badge}
        </span>
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={imgAlt ?? "Link image"}
            className={imgClassName ?? "w-full h-full object-cover"}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-50 flex items-center justify-center text-sm text-gray-500">
            Image coming soon
          </div>
        )}
      </div>
      <div className="p-4 flex items-center gap-2 font-bold text-sm">
        <span>{cta}</span>
        <ExternalLink color="#1E88E5" className="h-5 w-5 transition group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

export function CanvasLink() {
  return (
    <Card
      href="https://smccd.instructure.com/"
      cta="Promise Scholars Canvas"
      imgSrc={staticImages?.canvas?.src}
      imgAlt="Canvas Page"
      badge="Apps"
      imgClassName="w-full h-full object-contain object-center"
    />
  );
}

export function OneLogin() {
  return (
    <Card
      href="https://smccd.onelogin.com/portal"
      cta="SMCCD OneLogin"
      imgSrc={staticImages?.smccd?.src}
      imgAlt="OneLogin Portal"
      badge="Apps"
      imgClassName="w-full h-full object-contain object-center"
    />
  );
}

export function Counselor() {
  return (
    <Card
      href="https://skylinecollege.edu/promise/team.php"
      cta="Need to talk to your counselor?"
      imgSrc={staticImages?.counseling?.src}
      imgAlt="PSP Team"
      badge="PSP Requirements"
    />
  );
}

export function Handbook() {
  return (
    <Card
      href="https://sway.cloud.microsoft/wVwtgavvD4fG4MLC?ref=Link&loc=play"
      cta="Student Handbook"
      imgSrc={staticImages?.handbook?.src}
      imgAlt="Student Handbook"
      badge="FAQ"
    />
  );
}

export function FA() {
  return (
    <Card
      href="https://skylinecollege.edu/financialaid/"
      cta="Financial Aid"
      imgSrc={staticImages?.fa?.src}
      imgAlt="Financial Aid"
      badge="FAQ"
    />
  );
}

export function Peo() {
  return (
    <Card
      href="https://docs.google.com/spreadsheets/d/1WPx-ZLq_MWdaMmPlwNOrEnIFJH_lKGbKNTIHVzTbde8/edit?pli=1&gid=15414001#gid=15414001"
      cta="Upcoming PEO Events"
      imgSrc={staticImages?.peo?.src}
      imgAlt="Upcoming PEO Events"
      badge="PSP Requirements"
    />
  );
}

export function AccordionCard({ badge }: { badge: string }) {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const getUrl = (value: string) => {
    const match = value.match(/https?:\/\/[^\s]+/);
    return match ? match[0] : null;
  };

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-md">
      <div className="relative w-full h-full overflow-y-auto">
        <span className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
          {badge}
        </span>

        <div className="flex flex-col gap-3 px-4 pt-12 pb-4">
          {faqs.map((section, categoryIndex) => {
            const categoryOpen = openCategory === categoryIndex;

            return (
              <div key={categoryIndex} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => {
                    setOpenCategory(categoryOpen ? null : categoryIndex);
                    setOpenQuestion(null);
                  }}
                  className="w-full flex justify-between items-center px-4 py-4 font-bold text-lg bg-gray-100 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-gray-300"
                >
                  {section.category}

                  <ChevronDown
                    className={`transition-transform duration-200 h-4 w-4 ${
                      categoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* QUESTIONS */}
                {categoryOpen && (
                  <div className="flex flex-col gap-2 p-3 bg-white">
                    {section.questions.map((faq, questionIndex) => {
                      const questionOpen = openQuestion === questionIndex;

                      return (
                        <div
                          key={questionIndex}
                          className=" rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              setOpenQuestion(
                                questionOpen ? null : questionIndex
                              )
                            }
                            className="w-full flex justify-between items-center px-4 py-3 font-semibold text-left transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-gray-300"
                          >
                            {faq.question}

                            <ChevronDown
                              className={`transition-transform duration-200 h-4 w-4 ${
                                questionOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {questionOpen && (
                            <div className="px-4 py-3 text-gray-700 bg-gray-50">
                              <span>{faq.answer}</span>

                              {faq.extra?.map((line, i) => {
                                const url = getUrl(line);

                                return (
                                  <span key={i}>
                                    <br />
                                    {url ? (
                                      <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-blue-600"
                                      >
                                        {line}
                                      </a>
                                    ) : (
                                      line
                                    )}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
