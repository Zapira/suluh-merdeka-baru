import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logo from "@/app/_assets/images/logo.png";

export default function Footer() {
    return (
        <footer className="bg-[#0A1A4F] text-white mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <Image
                        src={logo}
                        alt="Suluh Merdeka Baru"
                        width={180}
                        height={40}
                        className="object-contain"
                    />
                    <p className="text-sm text-red-100 mt-4 leading-relaxed">
                        Portal berita terkini dan terpercaya dari Suluh Media Baru. Menyajikan informasi aktual, mendalam, dan terpercaya untuk pembaca di seluruh Indonesia.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Informasi</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/redaksi" className="hover:text-red-400 transition">
                                Redaksi
                            </a>
                        </li>
                        {/* <li>
                            <Link href="/tentang-kami" className="hover:text-red-400 transition">
                                Tentang Kami
                            </Link>
                        </li>
                        <li>
                            <Link href="/pedoman-media-siber" className="hover:text-red-400 transition">
                                Pedoman Media Siber
                            </Link>
                        </li> */}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Ikuti Kami</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition">
                            <FaWhatsapp />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/20">
                <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-red-100">
                    © {new Date().getFullYear()} Suluh Media Baru. All rights reserved.
                </div>
            </div>
        </footer>
    );
}