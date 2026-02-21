'use client'

import { useRef } from "react";
import Image from "next/image";
import hero from "@/app/_assets/images/hero.jpg";
import { ArticleTypes } from "@/app/_types/aticleTypes";
import Title from "../shared/title";
import Link from "next/link";

interface NewPostProps {
    data: ArticleTypes[];
}

export default function NewPost({ data }: NewPostProps) {
    const scrollRef = useRef(null);

    return (
        <div className="mt-16 px-4 md:px-0">
            <Title title="Berita Terbaru" />
            <div className="hidden md:grid md:grid-cols-3 gap-6">

                <div className="col-span-2 group cursor-pointer border border-gray-200 p-3 rounded-2xl">
                    <Link href={`/article/detail/${data?.[0]?.slug}`}>
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${data?.[0]?.featured_image}`}
                                alt={data?.[0]?.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                                width={800}
                                height={350}
                                priority
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold group-hover:text-red-500 transition">
                                {data?.[0]?.title}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                {data?.[0]?.excerpt}
                            </p>
                            <span className="text-sm text-gray-400">
                                {new Date(data?.[0]?.published_at).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                    </Link>

                </div>

                <div className="space-y-6 border border-gray-200 p-3 rounded-2xl max-h-96 overflow-y-auto">
                    {data?.slice(1).map((post) => (
                        <Link key={post.id} href={`/article/detail/${post.slug}`} className="flex gap-4 group cursor-pointer">
                            <div
                                className="flex gap-4 group cursor-pointer"
                            >
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${post.featured_image}`}
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
                                        {new Date(post.published_at).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="md:hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                >
                    {data?.map((post) => (
                        <Link key={post.id} href={`/article/detail/${post.slug}`} className="min-w-[85%] snap-center bg-white rounded-2xl shadow-md overflow-hidden">
                            <div
                                className="min-w-[85%] snap-center bg-white rounded-2xl shadow-md overflow-hidden"
                            >
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${post.featured_image}`}
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
                                        {new Date(post.published_at).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
