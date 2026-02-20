'use client'

import { useRef } from "react";
import Image from "next/image";
import hero from "@/app/_assets/images/hero.jpg";
import Title from "../shared/title";
export default function NewPost() {
    const scrollRef = useRef(null);

    const posts = [
        {
            id: 1,
            title: "Pemerintah Umumkan Program Subsidi BBM Baru Mulai Tahun Depan",
            excerpt:
                "Jakarta - Pemerintah Indonesia mengumumkan program subsidi BBM baru untuk meringankan beban masyarakat.",
            date: "15 Juni 2024",
            image: hero,
        },
        {
            id: 2,
            title: "Nilai Tukar Rupiah Menguat di Tengah Ketidakpastian Global",
            excerpt:
                "Rupiah menunjukkan penguatan signifikan terhadap dolar AS pada perdagangan hari ini.",
            date: "14 Juni 2024",
            image: hero,
        }, {
            id: 3,
            title: "Bank Indonesia Tahan Suku Bunga Acuan",
            excerpt:
                "Keputusan ini diambil untuk menjaga stabilitas ekonomi nasional.",
            date: "13 Juni 2024",
            image: hero,
        },
        {
            id: 4,
            title: "Pertumbuhan UMKM Meningkat 12% Tahun Ini",
            excerpt:
                "Sektor UMKM mengalami peningkatan signifikan berkat dukungan digitalisasi.",
            date: "12 Juni 2024",
            image: hero,
        },
        {
            id: 5,
            title: "Pertumbuhan UMKM Meningkat 12% Tahun Ini",
            excerpt:
                "Sektor UMKM mengalami peningkatan signifikan berkat dukungan digitalisasi.",
            date: "12 Juni 2024",
            image: hero,
        },
        {
            id: 6,
            title: "Pertumbuhan UMKM Meningkat 12% Tahun Ini",
            excerpt:
                "Sektor UMKM mengalami peningkatan signifikan berkat dukungan digitalisasi.",
            date: "12 Juni 2024",
            image: hero,
        },
    ];

    return (
        <div className="mt-16 px-4 md:px-0">
            <Title title="Berita Terbaru" />
            <div className="hidden md:grid md:grid-cols-3 gap-6">

                <div className="col-span-2 group cursor-pointer border border-gray-200 p-3 rounded-2xl">
                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src={posts[0].image}
                            alt={posts[0].title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                            width={800}
                            height={350}
                            priority
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold group-hover:text-red-500 transition">
                            {posts[0].title}
                        </h3>
                        <p className="text-gray-600 mt-2">
                            {posts[0].excerpt}
                        </p>
                        <span className="text-sm text-gray-400">
                            {posts[0].date}
                        </span>
                    </div>
                </div>

                <div className="space-y-6 border border-gray-200 p-3 rounded-2xl max-h-96 overflow-y-auto">
                    {posts.slice(1).map((post) => (
                        <div
                            key={post.id}
                            className="flex gap-4 group cursor-pointer"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="w-28 h-24 object-cover rounded-xl group-hover:scale-105 transition"
                                width={112}
                                height={96}
                            />
                            <div>
                                <h4 className="font-semibold text-sm group-hover:text-red-500 transition">
                                    {post.title}
                                </h4>
                                <span className="text-xs text-gray-400">
                                    {post.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                >
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="min-w-[85%] snap-center bg-white rounded-2xl shadow-md overflow-hidden"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                                width={400}
                                height={192}
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <span className="text-xs text-gray-400 block mt-2">
                                    {post.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
