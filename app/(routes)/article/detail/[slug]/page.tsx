export default function DetailArticle() {
    const article = {
        title: "Indonesia Jadi Tuan Rumah Konferensi Internasional",
        author: "Muhammad Rizki",
        category: "News",
        publishedAt: "2026-02-19",
        imageUrl: "https://source.unsplash.com/800x400/?news",
        content: `
Indonesia akan menjadi tuan rumah konferensi internasional terbesar tahun ini...
        
Acara ini diharapkan dihadiri oleh puluhan negara...
        
Pemerintah menegaskan pentingnya kerjasama global...
        `,
    };

    const trending = [
        { id: 1, title: "Ekonomi Indonesia Tumbuh 5%" },
        { id: 2, title: "Teknologi Baru untuk Energi Bersih" },
        { id: 3, title: "Olahraga Nasional: Prestasi Terbaru" },
        { id: 4, title: "Pendidikan Digital di Era Modern" },
    ];

    const relatedArticles = [
        { id: 1, title: "Politik Internasional Terkini" },
        { id: 2, title: "Startup Lokal Naik Daun" },
        { id: 3, title: "Tips Investasi Aman" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
                {/* Breadcrumb */}
                <p className="text-gray-500 text-sm mb-2">
                    Home / {article.category}
                </p>

                {/* Title */}
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

                {/* Info */}
                <div className="flex items-center text-gray-600 text-sm mb-6 space-x-4">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{article.category}</span>
                </div>

                {/* Main Image */}
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-auto rounded-lg mb-6"
                />

                {/* Content */}
                <div className="prose prose-lg max-w-none mb-10">
                    {article.content.split("\n").map((p, idx) => (
                        <p key={idx}>{p}</p>
                    ))}
                </div>

                {/* Related Articles */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Berita Lainnya</h2>
                    <ul className="space-y-2">
                        {relatedArticles.map((rel) => (
                            <li key={rel.id}>
                                <a href={`/article/${rel.id}`} className="text-blue-600 hover:underline">
                                    {rel.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
                <div className="bg-gray-100 p-4 rounded-lg sticky top-20">
                    <h2 className="text-xl font-semibold mb-4">Trending</h2>
                    <ul className="space-y-3">
                        {trending.map((item) => (
                            <li key={item.id}>
                                <a href={`/article/${item.id}`} className="hover:underline text-gray-800">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}
