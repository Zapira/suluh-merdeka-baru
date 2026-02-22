import { getArticles } from "@/app/services/articleService";
import { NextResponse } from "next/server";

export async function GET() {
    const baseUrl = "https://suluhmediabaru.com";

    const articles = await getArticles({ limit: 1000 });

    const articleResult = articles?.data.data

    type Article = {
        slug: string;
        published_at: string;
        title: string;
    };

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${articleResult
            .map((article: Article) => `
  <url>
    <loc>${baseUrl}/berita/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Suluh Media Baru</news:name>
        <news:language>id</news:language>
      </news:publication>
      <news:publication_date>${article.published_at}</news:publication_date>
      <news:title>${article.title}</news:title>
    </news:news>
  </url>`).join('')}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: { "Content-Type": "text/xml" },
    });
}