"use client";

import { useState } from "react";
import FilterTop from "./components/filter";
import { CanvasLink, Counselor, Peo, Handbook, FA } from "./components/links";

const cards = [
  { component: <Peo />, badge: "PSP Requirements" },
  { component: <Handbook />, badge: "FAQ" },
  { component: <CanvasLink />, badge: "Canvas" },
  { component: <Counselor />, badge: "PSP Requirements" },
  { component: <FA />, badge: "FAQ" },
];

const filters = ["All", "FAQ", "Canvas", "PSP Requirements"];

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

        <div className="grid grid-cols-2 gap-6">
          {filteredCards.map((card, i) => (
            <div key={i}>{card.component}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
