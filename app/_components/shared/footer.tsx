import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "@/app/_assets/images/logo.png";

export default function Footer() {
    return (
        <footer className="bg-[#0A1A4F] text-white mt-20">
            <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo & Nama Portal */}
                <div className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="Suluh Merdeka Baru"
                        className="w-full object-contain"
                        width={200}
                        height={40}
                    />
                    {/* <span className="text-xl font-bold">Suluh Merdeka Baru</span> */}
                </div>

                {/* Sosial Media */}
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition duration-300">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition duration-300">
                        <FaInstagram />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition duration-300">
                        <FaTwitter />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-red-600 transition duration-300">
                        <FaYoutube />
                    </a>
                </div>

            </div>

            <div className="border-t border-white/20 mt-6">
                <div className="max-w-4xl mx-auto px-6 py-4 text-center text-sm text-red-100">
                    © 2026 Suluh Merdeka Baru. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
