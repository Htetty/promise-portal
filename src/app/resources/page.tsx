"use client";

import { useState } from "react";
import FilterTop from "./components/filter";
import {
  CanvasLink,
  Counselor,
  Peo,
  Handbook,
  FA,
  AccordionCard,
  OneLogin
} from "./components/links";

const cards = [
  { component: <Peo />, badge: "PSP Requirements" },
  { component: <Handbook />, badge: "FAQ" },
  { component: <AccordionCard badge="FAQ" />, badge: "FAQ" },
  { component: <CanvasLink />, badge: "Apps" },
  { component: <Counselor />, badge: "PSP Requirements" },
  { component: <FA />, badge: "FAQ" },
  { component: <OneLogin />, badge: "Apps" },
];

const filters = ["All", "FAQ", "Apps", "PSP Requirements"];

export default function FAQ() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCards =
    activeFilter === "All"
      ? cards.filter((card) => !(card.component.type === AccordionCard))
      : activeFilter === "FAQ"
      ? cards.filter((card) => card.badge === "FAQ")
      : cards.filter((card) => card.badge === activeFilter);

  return (
    <div className="min-h-screen bg-background pt-4 px-4 sm:px-6 lg:px-8 pb-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <FilterTop
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {activeFilter === "FAQ" ? (
          <div className="grid sm:grid-col-1 lg:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-6 flex-1 [&>*]:w-full">
              <Handbook />
              <FA />
            </div>
            <div className="flex-1">
              <AccordionCard badge="FAQ" />
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-col-1 lg:grid-cols-2 gap-6 items-start">
            {filteredCards.map((card, i) => (
              <div key={i} className="max-w-2xl mx-auto w-full">
                {card.component}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
