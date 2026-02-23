import Image from "next/image";
import { ArticleTypes } from "@/app/_types/aticleTypes";
import hero from "@/app/_assets/images/hero.jpg";
import { FaFire } from "react-icons/fa";

interface HeroProps {
    data: ArticleTypes[];
}

export default function Hero({ data }: HeroProps) {
    const adsImage = hero;

    return (
        <div className="mt-10 space-y-8">

            {adsImage && (
                <div className="relative w-full overflow-hidden rounded-xl h-[200px] md:h-[500px]">
                    <Image
                        src={adsImage}
                        alt="Advertisement"
                        fill
                        className="object-content md:object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
                        BANNER
                    </div>
                </div>
            )}

            <div className="flex items-center gap-2">
                <FaFire className="text-red-600" />
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                    Trending News
                </h2>
                <div className="flex-1 h-[2px] bg-linear-to-r from-red-600/50 to-transparent ml-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {data.slice(0, 2).map((item, index) => (
                    <a
                        key={index}
                        href={`/article/detail/${item.slug}`}
                        className="relative overflow-hidden rounded-xl group"
                        style={{ aspectRatio: "16/9" }}
                    >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_PORTAL_API}/article/img/${item.featured_image}`}
                            alt={item.title}
                            fill
                            className="object-cover scale-110 group-hover:scale-125 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full font-semibold">
                            🔥 TRENDING
                        </div>

                        <div className="absolute bottom-0 p-4 text-white">
                            <h2 className="font-bold text-lg line-clamp-2">
                                {item.title}
                            </h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}