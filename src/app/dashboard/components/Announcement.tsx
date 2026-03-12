"use client";

import { useEffect, useState } from "react";
import type { Announcement } from "@/lib/canvas/server";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    async function fetchAnnouncements() {
      const res = await fetch("/api/announcements");
      const data = await res.json();
      const visibleAnnouncements = data.filter(
        (announcement: Announcement) => announcement.user_can_see_posts === true
      );
      setAnnouncements(visibleAnnouncements);
    }
    fetchAnnouncements();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg sm:text-xl font-bold text-[black] mb-4 sm:mb-6">
          Announcements:
        </h3>
        <h2 className="text-sm text-gray-600 mb-4 sm:mb-6">
          Click to read more!
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {announcements.slice(0, 3).map((announcement, index) => (
          <a
            key={index}
            href={announcement.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-2 border-b border-gray-200 pb-5 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDD06E] focus-visible:ring-offset-2 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  {
                    announcement.author_image_url ? (
                      <img
                        src={announcement.author_image_url}
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      "P"
                    ) // placeholder for no image
                  }
                </span>
              </div>
              <div className="flex-1 text-black text-lg font-semibold">
                {announcement.title}
              </div>
              <div className="text-right grid grid-cols-1">
                <p className="text-sm text-black font-semibold">Posted on:</p>
                <p className="text-sm text-gray-600">
                  {new Date(announcement.posted_at).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  {new Date(announcement.posted_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
