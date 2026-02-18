import Link from "next/link";

export default function BreakingNews() {
    return (
        <div className="bg-red-700 text-white py-2 px-4 text-sm">
            <span className="font-bold">Breaking News:</span> Gempa bumi berkekuatan 6.5 SR mengguncang wilayah Sulawesi Tengah, menyebabkan kerusakan parah di beberapa daerah. Tim SAR sedang melakukan evakuasi dan penanganan darurat.
            <Link href="/search?q=gempa-bumi-bla" className="ml-2 underline font-medium">
                Baca selengkapnya
            </Link>
        </div>
    )
}