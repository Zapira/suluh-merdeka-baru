'use client';
import { useEffect, useState } from "react";
import Title from "../shared/title";
import Image from "next/image";
import { ArticleTypes, CategoryTypes } from "@/app/_types/aticleTypes";
import axios from "axios";
import Link from "next/link";

interface CategoryListProps {
    category: CategoryTypes[];
}

export function CategoryList({ category }: CategoryListProps) {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [visibleCount, setVisibleCount] = useState(6);
    const [articles, setArticles] = useState<ArticleTypes[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchArticles = async () => {
        try {
            setLoading(true);

            let url = `${process.env.NEXT_PUBLIC_PORTAL_API}/article`;

            if (activeCategory !== "Semua") {
                url = `${process.env.NEXT_PUBLIC_PORTAL_API}/article/category/${activeCategory}`;
            }

            const response = await axios.get(url);
            setArticles(response.data?.data?.data || []);
        } catch (error) {
            console.log(error);
            setArticles([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
        setVisibleCount(6);
    }, [activeCategory]);

    const visibleNews = articles.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <div className="mt-16 px-4 md:px-0">
            <Title title="List Kategori" />

            <div className="flex gap-3 overflow-x-auto pb-4 mt-6">
                <button
                    onClick={() => setActiveCategory("Semua")}
                    className={`cursor-pointer px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300
                        ${activeCategory === "Semua"
                            ? "bg-red-500 text-white shadow-md"
                            : "bg-gray-100 hover:bg-red-100"
                        }
                    `}
                >
                    Semua
                </button>

                {category?.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveCategory(cat?.name_category)}
                        className={`cursor-pointer px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300
                            ${activeCategory === cat?.name_category
                                ? "bg-red-500 text-white shadow-md"
                                : "bg-gray-100 hover:bg-red-100"
                            }
                        `}
                    >
                        {cat?.name_category}
                    </button>
                ))}
            </div>

            {loading ? (
                <p className="mt-6 text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {visibleNews.map((news) => (
                        <Link key={news.id} href={`/article/detail/${news.slug}`}>
                            <div
                                key={news.id}
                                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
                            >
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${news.featured_image}`}
                                    alt={news.title}
                                    className="w-full h-40 object-cover rounded-lg"
                                    width={400}
                                    height={160}
                                />
                                <span className="text-xs text-red-500 font-semibold">
                                    {news.category?.name_category}
                                </span>
                                <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                                    {news.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                                    {news.excerpt}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    {new Date(news.published_at).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

            {visibleCount < articles.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="cursor-pointer px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 shadow-md"
                    >
                        Lihat Lebih Banyak
                    </button>
                </div>
            )}
        </div>
    );
}