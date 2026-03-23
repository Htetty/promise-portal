"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function Disclaimer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="text-xs lg:text-sm flex items-center gap-1 cursor-pointer"
      >
        <ChevronRight className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <div>
          <p className="text-sm">
            *Data updates at the start of each week.*
          </p>
          <p className="text-sm">
            *If you believe this information is inaccurate, please contact us at skylinepromise@my.smccd.edu.*
          </p>
        </div>
      )}
    </div>
  );
}