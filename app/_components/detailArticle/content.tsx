'use client'
import Image from "next/image"
import { FaFacebookF, FaLink, FaWhatsapp } from "react-icons/fa"
import { ArticleTypes } from "@/app/_types/aticleTypes";
import { useEffect } from "react";
import ArticleService from "@/app/services/articleService";
import axios from "axios";
import Link from "next/link";

interface ArticleProps {
    data: ArticleTypes;
    articlePopular?: ArticleTypes[];
    anotherArticle?: ArticleTypes[];
}

export default function Content({ data, articlePopular, anotherArticle }: ArticleProps) {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const shareToFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        window.open(url, "_blank", "width=600,height=400")
    }

    const shareToWhatsapp = () => {
        const text = `${data?.title} - ${currentUrl}`
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`
        window.open(url, "_blank")
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl)
            alert("Link berhasil disalin!")
        } catch (err) {
            console.error("Gagal copy link", err)
        }
    }

    useEffect(() => {
        const incrementViewCount = async () => {
            if (data?.slug) {
                await axios.post(`${process.env.NEXT_PUBLIC_PORTAL_API}/article/counting-views/${data.slug}`)
            }
        }
        incrementViewCount()
    }, [data?.slug])

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">

                    <span className="text-red-600 font-semibold uppercase text-sm">
                        {data?.category?.name_category}
                    </span>

                    <h1 className="text-4xl font-bold leading-tight mt-2">
                        {data?.title}
                    </h1>

                    <div className="flex justify-between items-center mt-4 text-sm text-gray-500 flex-wrap gap-4">
                        <div>
                            <span className="font-semibold text-black">
                                {data?.user?.name}
                            </span>{" "}
                            | {new Date(data?.published_at).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                            <span> | {data?.views} views</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span>Bagikan:</span>

                            <button
                                onClick={shareToFacebook}
                                className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:opacity-80 transition"
                            >
                                <FaFacebookF size={14} />
                            </button>

                            <button
                                onClick={shareToWhatsapp}
                                className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:opacity-80 transition"
                            >
                                <FaWhatsapp size={14} />
                            </button>

                            <button
                                onClick={copyLink}
                                className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:opacity-80 transition"
                            >
                                <FaLink size={12} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${data?.featured_image}`}
                            alt="hero"
                            width={900}
                            height={500}
                            className="w-full rounded-lg"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            {data?.title}
                        </p>
                    </div>

                    <div className="mt-6 text-lg leading-relaxed space-y-6 text-gray-800">
                        <div
                            dangerouslySetInnerHTML={{ __html: data?.content || "" }}
                        />
                    </div>

                    <div className="mt-16 border-t pt-8">
                        <h2 className="text-2xl font-bold mb-6">
                            Berita Lainnya
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {anotherArticle?.map((item) => (
                                <div key={item.id} className="flex gap-4 group cursor-pointer">
                                    <Image
                                        src={`http://localhost:8888/api/v1/article/img/${item.featured_image}`}
                                        alt="related"
                                        width={200}
                                        height={120}
                                        className="w-40 h-28 object-cover rounded-md"
                                    />
                                    <div>
                                        <span className="text-sm text-red-600 font-semibold">
                                            {item.category?.name_category}
                                        </span>
                                        <h3 className="font-bold group-hover:text-red-600 transition">
                                            {item.title}
                                        </h3>
                                        <span className="text-sm text-gray-500">
                                            {new Date(item.published_at).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <h2 className="text-xl font-bold mb-4 border-b pb-2">
                            Terpopuler
                        </h2>

                        <div className="space-y-6">
                            {articlePopular?.map((item, index) => (
                                <Link href={`/article/detail/${item.slug}`} key={item.id} className="flex gap-4 group cursor-pointer">
                                    <span className="text-3xl font-bold text-gray-300">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h4 className="font-semibold group-hover:text-red-600 transition">
                                            {item.title}
                                        </h4>
                                        <span className="text-sm text-gray-500">
                                            {new Date(item.published_at).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}