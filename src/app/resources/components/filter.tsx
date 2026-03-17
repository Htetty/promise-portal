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
            className={`px-3 py-1 rounded-full text-sm font-medium hover:px-4 active:scale-90 cursor-pointer duration-300 
              ${
                active ? "bg-black text-white" : "bg-black/5"
              }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
