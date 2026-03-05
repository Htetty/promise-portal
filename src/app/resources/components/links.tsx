"use client";

import { ExternalLink } from "lucide-react";
import { staticImages } from "../data/images";

type LinkCardProps = {
  href: string;
  cta: string;
  imgSrc?: string;
  imgAlt?: string;
  badge: string;
};

function Card({ href, cta, imgSrc, imgAlt, badge }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group block
        max-w-2xl mx-auto
        rounded-2xl
        overflow-hidden
        bg-white
        shadow-md
        border border-gray-200
        transition-all duration-200
        hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-gray-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDD06E] focus-visible:ring-offset-2
      "
    >
      <div className="relative w-full">
        <span
          className="
            absolute top-3 left-3
            bg-black/70 text-white
            px-3 py-1
            rounded-full
            text-xs font-semibold
            z-10
          "
        >
          {badge}
        </span>

        {imgSrc ? (
          <img
            src={imgSrc}
            alt={imgAlt ?? "Link image"}
            className="
              w-full
              h-56 sm:h-64
              object-cover
            "
            loading="lazy"
          />
        ) : (
          <div
            className="
              w-full
              h-56 sm:h-64
              bg-gray-50
              flex items-center justify-center
              text-sm text-gray-500
            "
          >
            Image coming soon
          </div>
        )}
      </div>

      <div className="p-4 flex items-center gap-2 font-bold text-sm text-[#FDD06E] underline underline-offset-4">
        <span>{cta}</span>
        <ExternalLink className="h-5 w-5 transition group-hover:translate-x-0.5" />
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
      badge="Canvas"
    />
  );
}

export function Inquiry() {
  return (
    <Card
      href="https://skylinecollege.edu/promise/team.php"
      cta="Need to talk to your counselor?"
      imgSrc={staticImages?.counseling?.src}
      imgAlt="PSP Team"
      badge="Support"
    />
  );
}

export function Guides() {
  return (
    <Card
      href="https://sway.cloud.microsoft/wVwtgavvD4fG4MLC?ref=Link&loc=play"
      cta='"How-To" Guides'
      imgSrc={staticImages?.guides?.src}
      imgAlt="How-to Guides"
      badge="FAQ"
    />
  );
}

export function Peo() {
  return (
    <Card
      href="https://docs.google.com/spreadsheets/d/1WPx-ZLq_MWdaMmPlwNOrEnIFJH_lKGbKNTIHVzTbde8/edit?pli=1&gid=15414001#gid=15414001"
      cta="PEO Google Sheets"
      imgSrc={staticImages?.peo?.src}
      imgAlt="PEO Google Sheets"
      badge="PEO"
    />
  );
}
