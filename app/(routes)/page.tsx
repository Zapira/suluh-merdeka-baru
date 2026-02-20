import BreakingNews from "../_components/home/breakingNews";
import { CategoryList } from "../_components/home/categoryList";
import Hero from "../_components/home/hero";
import NewPost from "../_components/home/newPost";
import Footer from "../_components/shared/footer";
import Header from "../_components/shared/header";
import Navbar from "../_components/shared/navbar";

import ArticleService from "../services/articleService";
import CategoryService from "../services/categoryService";

export default async function Home() {
  const articleService = ArticleService({ page: 1 });
  const breakingNews = await articleService.getArticles({ isBreakingNews: true });
  const breakingResult = breakingNews.data.data

  const trendingNews = await articleService.getArticles({ trending: true });
  const trendingResult = trendingNews.data.data

  const categoryService = CategoryService({ limit: 5 });
  const categories = await categoryService.getCategories();
  const categoryResult = categories.data.data

  return (
    <div className="max-w-screen mx-auto">
      <div className="bg-white border-gray-300  border-b">
        <Header />
      </div>
      <div className="bg-white border-gray-300  border-b">
        <Navbar data={categoryResult} />
      </div>
      <main className="max-w-5xl mx-auto px-4 py-6 bg-white min-h-screen">
        <BreakingNews data={breakingResult} />
        <Hero data={trendingResult} />
        <NewPost />
        <CategoryList />
        <Footer />
      </main>
    </div>
  );
}
