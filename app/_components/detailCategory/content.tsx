"use client";

import Image from "next/image";
import { FaFire, FaClock, FaUser } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { ArticleTypes } from "@/app/_types/aticleTypes";
import axios from "axios";

interface Category {
    id: string | number;
    name_category: string;
    slug: string;
}

const LIMIT = 10;

export default function Content({ category, articlePopular }: { category: Category[]; articlePopular?: ArticleTypes[] }) {
    const params = useParams();
    const activeCategory = params?.category as string;

    const [articles, setArticles] = useState<ArticleTypes[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchArticles = useCallback(async () => {
        if (!activeCategory) return;

        try {
            setLoading(true);

            const url = `${process.env.NEXT_PUBLIC_PORTAL_API}/article/category/${activeCategory}?page=${page}&limit=${LIMIT}`;

            const response = await axios.get(url);
            const newData = response.data?.data?.data || [];

            setArticles((prev) =>
                page === 1 ? newData : [...prev, ...newData]
            );

            setHasMore(newData.length === LIMIT);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [activeCategory, page]);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    useEffect(() => {
        setArticles([]);
        setPage(1);
        setHasMore(true);
    }, [activeCategory]);

    return (
        <>
            <div className="grid grid-cols-12 gap-8 mt-8">
                <div className="col-span-12 lg:col-span-9 space-y-10">

                    {articles.length > 0 && (
                        <a href={`/article/detail/${articles[0]?.slug}`} className="relative w-full overflow-hidden rounded-xl group" style={{ aspectRatio: "16/9", minHeight: "220px" }}>
                            <div className="relative w-full overflow-hidden rounded-xl group" style={{ aspectRatio: "16/9", minHeight: "220px" }}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${articles[0]?.featured_image}`}
                                    alt="Hero"
                                    fill
                                    className="object-cover object-center scale-110 transition-transform duration-500 ease-in-out group-hover:scale-120"
                                    priority
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
                                    <div className="self-start">
                                        <span className="bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                            {articles[0]?.category.name_category}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <h1 className="text-white font-bold text-sm sm:text-lg md:text-2xl leading-tight line-clamp-2">
                                            {articles[0]?.title}
                                        </h1>
                                        <p className="text-white/80 text-[11px] sm:text-sm leading-snug line-clamp-2">
                                            {articles[0]?.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="flex items-center gap-1 text-white/70 text-[10px] sm:text-xs">
                                                <FaUser className="text-[9px]" />
                                                {articles[0]?.user.name}
                                            </span>
                                            <span className="flex items-center gap-1 text-white/70 text-[10px] sm:text-xs">
                                                <FaClock className="text-[9px]" />
                                                {new Date(articles[0]?.published_at).toLocaleDateString("id-ID", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )}

                    <div
                        key={activeCategory}
                        className="grid md:grid-cols-3 gap-6 mt-5"
                    >
                        {articles.slice(1).map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>

                    {hasMore && articles.length > 0 && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => {
                                    if (!loading) {
                                        setPage((prev) => prev + 1);
                                    }
                                }}
                                disabled={loading}
                                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50"
                            >
                                {loading ? "Loading..." : "Lihat Lebih Banyak"}
                            </button>
                        </div>
                    )}
                </div>

                <aside className="col-span-12 lg:col-span-3 space-y-4">
                    <h2 className="flex items-center gap-2 font-bold text-lg">
                        <FaFire className="text-red-600" /> Populer
                    </h2>
                    <div className="space-y-4">
                        {articlePopular?.slice(0, 5).map((item) => (
                            <a
                                key={item.id}
                                href={`/article/detail/${item.slug}`}
                                className="flex items-start gap-3 group border-b border-gray-200 pb-2"
                            >
                                <div className="relative w-20 h-12 flex-shrink-0 rounded-md overflow-hidden">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${item.featured_image}`}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold group-hover:text-red-600 transition">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {new Date(item.published_at).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </aside>
            </div>

            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4 border-l-4 border-red-600 pl-3">
                    Kategori Lain
                </h2>

                <div className="flex gap-3 overflow-x-auto pb-2">
                    {category
                        .filter((cat) => cat.slug !== activeCategory)
                        .map((cat) => (
                            <a
                                key={cat.id}
                                href={`/category/${cat.slug}`}
                                className="px-5 py-2 bg-gray-100 rounded-full text-sm hover:bg-red-600 hover:text-white transition whitespace-nowrap"
                            >
                                {cat.name_category}
                            </a>
                        ))}
                </div>
            </div>
        </>
    );
}

function Card({ item }: { item: ArticleTypes }) {
    return (
        <a href={`/article/detail/${item.slug}`} className="group">
            <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                    src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${item.featured_image}`}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            <h3 className="mt-3 font-semibold group-hover:text-red-600 transition">
                {item.title}
            </h3>

            <div className="fl{item.published_at}ex items-center gap-2 text-xs text-gray-500 mt-1">
                {new Date(item.published_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
            </div>
        </a>
    );
}