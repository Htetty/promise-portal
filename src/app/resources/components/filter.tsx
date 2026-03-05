"use client";

interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function FilterTop({
  filters,
  activeFilter,
  setActiveFilter,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition
              ${
                active ? "bg-black text-white" : "bg-black/5 hover:bg-black/10"
              }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
