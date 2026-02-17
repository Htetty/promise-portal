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
    { href: "/faq", label: "Support Resources" },
];

export function Navigation() {
    const pathname = usePathname();
    const router = useRouter();
    
    if (pathname !== "/dashboard" && pathname !== "/faq") {
        return null;
    }

    const handleSignOut = async () => {
        await signOut();
        router.refresh();
    };

    return (
        <nav className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-start lg:relative h-16 gap-4">
                    <div className="flex items-center gap-4 flex-1 lg:justify-center">
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <div
                                    key={item.href}
                                    className={`flex items-center space-x-8 rounded-lg px-4 py-3 ${isActive ? "bg-black" : ""
                                        }`}
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors ${isActive ? "text-white" : "text-black"
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
                        className="flex items-center space-x-8 rounded-lg px-4 py-3 bg-[#ea580c] text-sm font-medium text-white hover:opacity-90 hover:cursor-pointer lg:absolute lg:right-0"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </nav>
    );
}

