"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/app/login/actions";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface NavItem {
  href: string;
  label: string;
}

import {
  ANNOUNCEMENT_TEXT,
  ANNOUNCEMENT_GRAD_COLOR,
  ANNOUNCEMENT_LINK,
} from "../data/general";
import { ExternalLink } from "lucide-react";

const navigationItems: NavItem[] = [
  { href: "/dashboard", label: "Home" },
  { href: "/resources", label: "Support Resources" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [announceDismissed, setAnnounceDismissed] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40 || announceDismissed);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [announceDismissed]);

  if (
    !pathname.startsWith("/dashboard") &&
    !pathname.startsWith("/resources")
  ) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    router.refresh();
  };

  const hasAnnouncement = Boolean(ANNOUNCEMENT_TEXT) && !announceDismissed;

  return (
    <nav className="relative">
      {ANNOUNCEMENT_TEXT ? (
        <motion.div
          onMouseDown={() => {
            setAnnounceDismissed(true);
          }}
          className={`z-10 w-full h-[58px] sm:h-[40px] px-6 absolute flex justify-between items-center bg-gradient-to-b ${ANNOUNCEMENT_GRAD_COLOR} to-white group/announcement_bar overflow-hidden`}
          initial={{
            opacity: 0,
            translateY: "-100%",
            position: "static",
          }}
          animate={
            !announceDismissed
              ? { opacity: 1, translateY: "0%" }
              : {
                  opacity: 0,
                  translateY: "-100%",
                  position: "absolute",
                }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="w-[70%] mx-auto font-semibold text-xs sm:text-sm text-center group-hover/announcement_bar:animate-pulse">
            {ANNOUNCEMENT_LINK ? (
              <Link
                href={ANNOUNCEMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 text-neutral-800 hover:text-neutral-950"
              >
                <span>{ANNOUNCEMENT_TEXT}</span>
                <ExternalLink
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  strokeWidth={2.2}
                />
              </Link>
            ) : (
              <span>{ANNOUNCEMENT_TEXT}</span>
            )}
          </p>

          {/* <p className="z-10 right-4 absolute text-neutral-600 text-xs lg:text-base font-semibold select-none animate-pulse">
            press to dismiss
          </p> */}
        </motion.div>
      ) : null}

      <div
        className={`max-w-7xl mx-auto px-8 lg:px-0 transition-[padding-top] duration-500 ${
          hasAnnouncement ? "pt-0 sm:pt-0" : ""
        }`}
      >
        <div className="flex items-center justify-start lg:relative h-14 sm:h-16 gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 lg:justify-start">
            {navigationItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <div
                  key={item.href}
                  className={`flex items-center space-x-4 sm:space-x-8 rounded-lg px-3 py-2 sm:px-4 sm:py-3 hover:px-6 active:scale-90 duration-300 ${isActive ? "bg-black" : "bg-[#FDD06E]"}`}
                >
                  <Link
                    href={item.href}
                    className={`text-xs sm:text-sm font-bold transition-colors ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleSignOut}
            className="flex items-center space-x-4 sm:space-x-8 rounded-lg px-3 py-2 sm:px-4 sm:py-3 bg-[#ea580c] text-xs sm:text-sm font-bold text-white hover:px-6 active:scale-90 duration-300  lg:absolute lg:right-0"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
