"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const menus = [
        { name: "Terkini", href: "/" },
        { name: "Pemerintahan", href: "/pemerintahan" },
        { name: "Olahraga", href: "/olahraga" },
        { name: "Sulteng", href: "/sulteng" },
        { name: "Teknologi", href: "/teknologi" },
    ];

    return (
        <nav className="border-b border-gray-300 bg-blue-700">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex space-x-3 overflow-x-auto no-scrollbar py-3">
                    {menus.map((menu) => {
                        const isActive = pathname === menu.href;
                        return (
                            <Link
                                key={menu.href}
                                href={menu.href}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all duration-200
                                    ${isActive
                                        ? "bg-red-600 text-white"
                                        : "text-white hover:bg-red-600 hover:text-white"
                                    }`}
                            >
                                {menu.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
