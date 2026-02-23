export default function Content() {
    const redaksi = [
        { jabatan: "Pemimpin Umum", nama: "Imam Juliansyah" },
        { jabatan: "Pemimpin Redaksi", nama: "Imam Juliansyah" },
        { jabatan: "Editor", nama: "Imam Juliansyah" },
        { jabatan: "Reporter", nama: "-" },
        { jabatan: "Media Publisher", nama: "-" },
        { jabatan: "Video Journalist", nama: "-" },
        { jabatan: "IT", nama: "Imam Juliansyah" },
        { jabatan: "Admin", nama: "-" },
        { jabatan: "Bagian Umum", nama: "-" },
        { jabatan: "Iklan", nama: "-" },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6  bg-white min-h-screen">
            <div className="mb-10 border-b pb-6">
                <h1 className="text-4xl font-bold text-gray-900">
                    Redaksi Suluh Merdeka Baru
                </h1>
                <p className="text-gray-600 mt-4 leading-relaxed max-w-3xl">
                    Halaman ini memuat struktur redaksi Suluh Merdeka Baru sebagai bentuk transparansi kepada publik.
                    Kami berkomitmen menyajikan berita yang akurat, berimbang, dan sesuai dengan pedoman media siber.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {redaksi.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
                    >
                        <h3 className="text-sm uppercase tracking-wide text-red-600 font-semibold mb-2">
                            {item.jabatan}
                        </h3>
                        <p className="text-lg font-medium text-gray-800">
                            {item.nama !== "-" ? item.nama : (
                                <span className="text-gray-400 italic">Belum ditetapkan</span>
                            )}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 border-t pt-6 text-sm text-gray-500">
                <p>
                    Untuk korespondensi redaksi, klarifikasi berita, atau kerja sama,
                    silakan hubungi kami melalui halaman kontak resmi.
                </p>
            </div>

        </div>
    );
}