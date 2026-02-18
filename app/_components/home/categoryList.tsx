'use client';
import { useState } from "react";
import Title from "../shared/title";
import hero from "@/app/_assets/images/hero.jpg";
import Image from "next/image";

export function CategoryList() {
    const categories = ["Semua", "Politik", "Ekonomi", "Teknologi", "Olahraga"];

    const newsData = [
        { id: 1, title: "Program Subsidi BBM", category: "Politik", date: "15 Juni 2024", image: hero , description: "Pemerintah Indonesia mengumumkan program subsidi BBM baru untuk meringankan beban masyarakat."},
        { id: 2, title: "IHSG Menguat", category: "Ekonomi", date: "16 Juni 2024", image: hero, description: "IHSG menunjukkan penguatan signifikan pada perdagangan hari ini, didorong oleh sentimen positif pasar global." },
        { id: 3, title: "Startup AI Indonesia", category: "Teknologi", date: "17 Juni 2024", image: hero, description: "Startup lokal mengembangkan teknologi AI yang inovatif dan berpotensi mempercepat digitalisasi industri." },
        { id: 4, title: "Timnas Lolos Final", category: "Olahraga", date: "18 Juni 2024", image: hero, description: "Timnas Indonesia lolos ke final turnamen internasional setelah menang telak di babak semifinal." },
        { id: 5, title: "Reformasi Pajak Digital", category: "Ekonomi", date: "19 Juni 2024", image: hero, description: "Pemerintah meluncurkan reformasi pajak digital untuk meningkatkan pendapatan negara dari sektor teknologi." },
        { id: 6, title: "UU Baru Disahkan", category: "Politik", date: "20 Juni 2024", image: hero, description: "UU baru tentang perlindungan data pribadi telah disahkan oleh DPRD." },
        { id: 7, title: "Crypto Naik Tajam", category: "Ekonomi", date: "21 Juni 2024", image: hero, description: "Harga kripto mengalami lonjakan tajam akibat permintaan pasar yang meningkat." },
        { id: 8, title: "AI Chatbot Lokal", category: "Teknologi", date: "22 Juni 2024", image: hero, description: "AI chatbot lokal mulai digunakan secara luas di berbagai industri." },
        { id: 9, title: "Liga Indonesia Dimulai", category: "Olahraga", date: "23 Juni 2024", image: hero, description: "Liga sepak bola Indonesia dimulai dengan antusiasme tinggi dari masyarakat." },
    ];

    const [activeCategory, setActiveCategory] = useState("Semua");
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredNews =
        activeCategory === "Semua"
            ? newsData
            : newsData.filter((news) => news.category === activeCategory);

    const visibleNews = filteredNews.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <div className="mt-16 px-4 md:px-0">
            <Title title="List Kategori" />

            <div className="flex gap-3 overflow-x-auto pb-4 mt-6">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveCategory(cat);
                            setVisibleCount(6);
                        }}
                        className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300
                            ${
                                activeCategory === cat
                                    ? "bg-red-500 text-white shadow-md"
                                    : "bg-gray-100 hover:bg-red-100"
                            }
                        `}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {visibleNews.map((news) => (
                    <div
                        key={news.id}
                        className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
                    >
                        <Image
                            src={news.image}
                            alt={news.title}
                            className="w-full h-40 object-cover rounded-lg"
                            width={400}
                            height={160}
                        />
                        <span className="text-xs text-red-500 font-semibold">
                            {news.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                            {news.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                            {news.description}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            {news.date}
                        </p>
                    </div>
                ))}
            </div>

            {visibleCount < filteredNews.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 shadow-md"
                    >
                        Lihat Lebih Banyak
                    </button>
                </div>
            )}
        </div>
    );
}
