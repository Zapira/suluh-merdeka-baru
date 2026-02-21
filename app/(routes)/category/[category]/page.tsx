import Content from "@/app/_components/detailCategory/content";
import BreakingNews from "@/app/_components/home/breakingNews";
import Footer from "@/app/_components/shared/footer";
import Header from "@/app/_components/shared/header";
import Navbar from "@/app/_components/shared/navbar";
import { getArticles } from "@/app/services/articleService";
import { getCategories } from "@/app/services/categoryService";

export default async function CategoryPage() {
    const [
        categories,
        breakingNews,
        popularArticles
    ] = await Promise.all([
        getCategories({ limit: 100 }),
        getArticles({ is_breaking_news: true }),
        getArticles({ trending: true })
    ]);

    const breakingResult = breakingNews.data.data;
    const categoryResult = categories.data.data;
    const popularResult = popularArticles.data;
    return (
        <div className="max-w-screen mx-auto">
            <div className="bg-white border-gray-300 border-b">
                <Header />
                <Navbar data={categoryResult} />
            </div>

            <main className="max-w-5xl mx-auto px-4 py-6 bg-white min-h-screen">
                <BreakingNews data={breakingResult} />
                <Content category={categoryResult}    articlePopular={popularResult}/>
                <Footer />
            </main>
        </div>
    );
}