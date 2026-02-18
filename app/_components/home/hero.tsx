import Image from "next/image";
import Link from "next/link";
import { FaClock, FaUser } from "react-icons/fa";
import hero from "@/app/_assets/images/hero.jpg";

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto mt-6">
            <Link href="/artikel/terobosan-energi" className="block">
                <div className="relative rounded-2xl overflow-hidden group ">

                    <Image
                        src={hero}
                        alt="Terobosan Energi"
                        width={1200}
                        height={700}
                        className="group-hover:scale-120 transition duration-500 scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>

                    <div className="absolute bottom-0 p-6 md:p-10 text-white text-left space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="bg-red-600 text-xs px-3 py-1 rounded-full font-medium">
                                🔥 TRENDING
                            </span>
                            <span className="bg-white/20 backdrop-blur-sm text-xs px-3 py-1 rounded-full">
                                Teknologi
                            </span>
                        </div>

                        <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-3xl">
                            Terobosan Baru dalam Teknologi Energi Terbarukan Mengubah Lanskap Global
                        </h1>

                        <p className="text-sm md:text-base text-gray-200 max-w-2xl">
                            Para ilmuwan mengumumkan pencapaian efisiensi 47% dalam panel surya generasi terbaru,
                            membuka era baru dalam transisi energi global.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <FaUser size={16} />
                                <span>Dr. Maya Santoso</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaClock size={16} />
                                <span>15 menit lalu</span>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </section>
    );
}
