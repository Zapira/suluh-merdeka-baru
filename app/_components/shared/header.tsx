"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/app/_assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { BiX } from "react-icons/bi";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const stored = localStorage.getItem("recent_searches");
        if (stored) {
            setTimeout(() => {
                setRecentSearches(JSON.parse(stored));
            }, 0);
        }
    }, []);

    useEffect(() => {
        if (open) {
            inputRef.current?.focus();
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    const handleSearch = () => {
        if (!keyword.trim()) return;

        let updated = [keyword, ...recentSearches];

        updated = [...new Set(updated)];
        updated = updated.slice(0, 5);

        setRecentSearches(updated);
        localStorage.setItem("recent_searches", JSON.stringify(updated));

        setOpen(false);
        window.location.href = `/search?q=${keyword}`;
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const defaultRecommendations = [
        "Politik",
        "Pilkada",
        "Olahraga",
        "Teknologi",
    ];

    return (
        <>
            <header className="border-b border-gray-300 bg-white">
                <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={180}
                        height={60}
                        className="object-contain w-32 md:w-44"
                    />

                    <div className="hidden md:block relative">
                        <IoSearch className="absolute left-3 top-2.5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari di sini..."
                            className="border border-gray-300 pl-9 pr-4 py-1.5 w-64 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden"
                    >
                        <IoSearch size={22} className="text-gray-700" />
                    </button>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-50 bg-white transform transition-all duration-300 md:hidden
                ${open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col h-full">

                    <div className="flex items-center justify-between px-4 py-4 border-b">
                        <span className="text-lg font-semibold">
                            Cari Berita
                        </span>
                        <button onClick={() => setOpen(false)}>
                            <BiX size={26} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-8">

                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <IoSearch className="absolute left-4 top-4 text-gray-400" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={keyword}
                                    onChange={(e) =>
                                        setKeyword(e.target.value)
                                    }
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ketik kata kunci..."
                                    className="w-full border border-gray-300 pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            <button
                                onClick={handleSearch}
                                className="bg-red-600 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition"
                            >
                                Cari
                            </button>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 mb-3">
                                {recentSearches.length > 0
                                    ? "Pencarian Terakhir"
                                    : "Rekomendasi Pencarian"}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {(recentSearches.length > 0
                                    ? recentSearches
                                    : defaultRecommendations
                                ).map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setKeyword(item);
                                            window.location.href = `/search?q=${item}`;
                                        }}
                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t px-4 py-4 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Suluhmerdekabaru.com
                    </div>
                </div>
            </div>
        </>
    );
}
