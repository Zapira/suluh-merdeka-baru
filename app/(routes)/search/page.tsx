import Header from "@/app/_components/shared/header";
import Navbar from "@/app/_components/shared/navbar";
import Footer from "@/app/_components/shared/footer";

import { getCategories } from "@/app/services/categoryService";
import { getArticles, getArticleBySlug } from "@/app/services/articleService";
import Content from "@/app/_components/searchPage/content";

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

    ] = await Promise.all([
        getCategories({ limit: 5 }),

    ]);

    const categoryResult = categories.data.data;


    return (
        <div className="max-w-screen mx-auto">
            <div className="bg-white border-gray-300 border-b">
                <Header />
                <Navbar data={categoryResult} />
            </div>

            <main className="max-w-5xl mx-auto px-4 py-6 bg-white min-h-screen">
                {/* <Content
                    data={articleResult}
                    articlePopular={popularResult}
                    anotherArticle={anotherResult}
                /> */}
                <Content/>
                <Footer />
            </main>
        </div>
    );
}