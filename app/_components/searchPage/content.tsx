"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import { FaClock } from "react-icons/fa";
import { ArticleTypes } from "@/app/_types/aticleTypes";

export default function Content() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get("q");

    const [articles, setArticles] = useState<ArticleTypes[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchArticles = useCallback(async () => {
        if (!keyword) return;

        try {
            setLoading(true);

            const url = `${process.env.NEXT_PUBLIC_PORTAL_API}/article?search=${keyword}&page=${page}`;

            const response = await axios.get(url);

            const newData = response.data?.data?.data || [];
            const nextPage = response.data?.data?.next_page_url;

            setArticles((prev) =>
                page === 1 ? newData : [...prev, ...newData]
            );

            setHasMore(!!nextPage);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [keyword, page]);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    useEffect(() => {
        setArticles([]);
        setPage(1);
        setHasMore(true);
    }, [keyword]);

    if (!keyword) {
        return (
            <div className="max-w-5xl mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold">
                    Masukkan kata kunci pencarian
                </h1>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

            <h1 className="text-2xl font-bold">
                Hasil pencarian untuk: 
                <span className="text-red-600"> {keyword}</span>
            </h1>

            {!loading && articles.length === 0 && (
                <p className="text-gray-500">
                    Tidak ditemukan artikel dengan kata kunci tersebut.
                </p>
            )}

            {articles.length > 0 && (
                <a
                    href={`/article/detail/${articles[0].slug}`}
                    className="relative block rounded-xl overflow-hidden group"
                >
                    <div className="relative w-full h-96">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${articles[0].featured_image}`}
                            alt={articles[0].title}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white max-w-xl">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">
                            {articles[0].title}
                        </h1>
                        <p className="text-sm text-white/80">
                            {articles[0].excerpt}
                        </p>
                    </div>
                </a>
            )}

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-6">
                {articles.slice(1).map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>

            {/* LOAD MORE */}
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

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <FaClock /> {item.published_at}
            </div>
        </a>
    );
}