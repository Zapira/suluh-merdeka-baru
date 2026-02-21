import Header from "@/app/_components/shared/header";
import Navbar from "@/app/_components/shared/navbar";
import Footer from "@/app/_components/shared/footer";
import Content from "@/app/_components/detailArticle/content";

import { getCategories } from "@/app/services/categoryService";
import { getArticles, getArticleBySlug } from "@/app/services/articleService";

interface Props {
    params: {
        slug: string;
    };
}

export default async function DetailArticle({ params }: Props) {
    const { slug } = await params;
    console.log('Received slug:', slug);
    const [
        categories,
        articleDetail,
        popularArticles,
        anotherArticles
    ] = await Promise.all([
        getCategories({ limit: 5 }),
        getArticleBySlug(slug),
        getArticles({ trending: true }),
        getArticles({ limit: 4 })
    ]);

    const categoryResult = categories.data.data;
    const articleResult = articleDetail.data;
    const popularResult = popularArticles.data;
    const anotherResult = anotherArticles.data.data;

    return (
        <div className="max-w-screen mx-auto">
            <div className="bg-white border-gray-300 border-b">
                <Header />
                <Navbar data={categoryResult} />
            </div>

            <main className="max-w-5xl mx-auto px-4 py-6 bg-white min-h-screen">
                <Content
                    data={articleResult}
                    articlePopular={popularResult}
                    anotherArticle={anotherResult}
                />
                <Footer />
            </main>
        </div>
    );
}