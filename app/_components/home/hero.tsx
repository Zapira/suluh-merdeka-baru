import Image from "next/image";
import { FaClock, FaUser } from "react-icons/fa";
import { ArticleTypes } from "@/app/_types/aticleTypes";
import Link from "next/link";

interface HeroProps {
    data: ArticleTypes[];
}

export default function Hero({ data }: HeroProps) {
    return (
        <Link href={`/article/detail/${data[0]?.slug}`} className="relative w-full overflow-hidden rounded-xl mt-10 group" style={{ aspectRatio: "16/9", minHeight: "220px" }}>
            <div className="relative w-full overflow-hidden rounded-xl mt-10 group" style={{ aspectRatio: "16/9", minHeight: "220px" }}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${data[0]?.featured_image}`}
                    alt="Hero"
                    fill
                    className="object-cover object-center scale-110 transition-transform duration-500 ease-in-out group-hover:scale-120"
                    priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
                    <div className="self-start">
                        <span className="bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                            🔥 TRENDING · {data[0]?.category.name_category}
                        </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-white font-bold text-sm sm:text-lg md:text-2xl leading-tight line-clamp-2">
                            {data[0]?.title}
                        </h1>
                        <p className="text-white/80 text-[11px] sm:text-sm leading-snug line-clamp-2">
                            {data[0]?.excerpt}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-white/70 text-[10px] sm:text-xs">
                                <FaUser className="text-[9px]" />
                                {data[0]?.user.name}
                            </span>
                            <span className="flex items-center gap-1 text-white/70 text-[10px] sm:text-xs">
                                <FaClock className="text-[9px]" />
                                {new Date(data[0]?.published_at).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}