

import Header from "@/app/_components/shared/header";

import Navbar from "@/app/_components/shared/navbar";
import Footer from "@/app/_components/shared/footer";
import CategoryService from "@/app/services/categoryService";
import Content from "@/app/_components/detailArticle/content";
import ArticleService from "@/app/services/articleService";

interface Props {
    params: {
        slug: string
    }
}

export default async function DetailArticle({ params }: Props) {
    const categoryService = CategoryService({ limit: 5 });
    const categories = await categoryService.getCategories();
    const categoryResult = categories.data.data

    const { slug } = await params

    const articleService = ArticleService();
    const getArticleBySlug = await articleService.getArticleBySlug(slug)

    const getArticlePopuler = await articleService.getArticles({ trending: true })
    const populareResult = getArticlePopuler.data

    const anotherArticle = await articleService.getArticles({ limit: 4 })
    const anotherResult = anotherArticle.data?.data

    return (
        <div className="max-w-screen mx-auto">
            <div className="bg-white border-gray-300  border-b">
                <Header />
                <Navbar data={categoryResult} />
            </div>
            <main className="max-w-5xl mx-auto px-4 py-6 bg-white min-h-screen">
                <Content
                    data={getArticleBySlug}
                    articlePopular={populareResult}
                    anotherArticle={anotherResult}
                />
                <Footer />
            </main>
        </div>
    );
}
