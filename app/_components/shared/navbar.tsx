"use client";

import { usePathname } from "next/navigation";

interface Category {
    id: string | number;
    name_category: string;
    slug: string;
}

export default function Navbar({ data }: { data: Category[] }) {
    const pathname = usePathname();

    return (
        <nav className="border-b border-gray-300 bg-[#0A1A4F]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex space-x-3 overflow-x-auto no-scrollbar py-3">

                    <a href="/" className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all duration-200 ${pathname === "/" ? "bg-red-600 text-white" : "text-white hover:bg-red-600" }`} >
                        Terkini
                    </a>

                    {data.map((category) => {
                        const href = `/category/${category.slug}`;
                        const isActive = pathname === href;

                        return (
                            <a key={category.id}
                                href={href}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all duration-200
                  ${isActive
                                        ? "bg-red-600 text-white"
                                        : "text-white hover:bg-red-600"
                                    }`}
                            >
                                {category.name_category}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
