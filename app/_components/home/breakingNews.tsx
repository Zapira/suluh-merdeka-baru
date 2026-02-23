import { ArticleTypes } from "@/app/_types/aticleTypes";

interface BreakingNewsProps {
    data?: ArticleTypes[]; // optional
}

export default function BreakingNews({ data }: BreakingNewsProps) {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div className="bg-red-700 text-white py-2 px-4 text-sm">
            <span className="font-bold">Breaking News:</span> {data[0].title}
            <a
                href={`/article/detail/${data[0].slug}`}
                className="ml-2 underline font-medium"
            >
                Baca selengkapnya
            </a>
        </div>
    );
}