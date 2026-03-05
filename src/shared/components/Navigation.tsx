"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/app/login/actions";

interface NavItem {
  href: string;
  label: string;
}

const navigationItems: NavItem[] = [
  { href: "/dashboard", label: "Home" },
  { href: "/resources", label: "Support Resources" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

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

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        <div className="flex items-center justify-start lg:relative h-16 gap-4">
          <div className="flex items-center gap-4 flex-1 lg:justify-start">
            {navigationItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <div
                  key={item.href}
                  className={`flex items-center space-x-8 rounded-lg px-4 py-3 hover:opacity-90 ${
                    isActive ? "bg-black" : "bg-[#FDD06E]"
                  }`}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-bold transition-colors ${
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
            className="flex items-center space-x-8 rounded-lg px-4 py-3 bg-[#ea580c] text-sm font-bold text-white hover:opacity-90 hover:cursor-pointer lg:absolute lg:right-0"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
