import { ArticleTypes } from "@/app/_types/aticleTypes";
import Link from "next/link";

interface BreakingNewsProps {
    data: ArticleTypes[];
}

export default function BreakingNews({ data }: BreakingNewsProps) {
    console.log("BreakingNews component received data:", data)
    return (
        <div className="bg-red-700 text-white py-2 px-4 text-sm">
            <span className="font-bold">Breaking News:</span> {data[0]?.title}
            <Link href={`/article/detail/${data[0]?.slug}`} className="ml-2 underline font-medium">
                Baca selengkapnya
            </Link>
        </div>
    )
}