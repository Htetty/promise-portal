"use client";

import { useState } from "react";
import FilterTop from "./components/filter";
import { CanvasLink, Inquiry, Peo, Guides } from "./components/links";

const cards = [
  { component: <Peo />, badge: "PEO" },
  { component: <Guides />, badge: "FAQ" },
  { component: <CanvasLink />, badge: "Canvas" },
  { component: <Inquiry />, badge: "Support" },
];

const filters = ["All", "PEO", "FAQ", "Canvas", "Support"];

export default function FAQ() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCards =
    activeFilter === "All"
      ? cards
      : cards.filter((card) => card.badge === activeFilter);

  return (
    <div className="min-h-screen bg-background pt-4 px-4 sm:px-6 lg:px-8 pb-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <FilterTop
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div
          className="
          grid
          auto-rows-fr
          gap-6
          [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
        "
        >
          {filteredCards.map((card, i) => (
            <div key={i}>{card.component}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
