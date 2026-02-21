import BreakingNews from "../_components/home/breakingNews";
import { CategoryList } from "../_components/home/categoryList";
import Hero from "../_components/home/hero";
import NewPost from "../_components/home/newPost";
import Footer from "../_components/shared/footer";
import Header from "../_components/shared/header";
import Navbar from "../_components/shared/navbar";

import { getArticles } from "../services/articleService";
import { getCategories } from "../services/categoryService";

export default async function Home() {

  const [
    breakingNews,
    trendingNews,
    categories,
    newPostArticles,
    allCategory
  ] = await Promise.all([
    getArticles({ is_breaking_news: true }),
    getArticles({ trending: true }),
    getCategories({ limit: 5 }),
    getArticles({ limit: 5 }),
    getCategories({ limit: 100 })
  ]);

  const breakingResult = breakingNews.data.data;
  const trendingResult = trendingNews.data;
  const categoryResult = categories.data.data;
  const newPostResult = newPostArticles.data.data;
  const allCategoryResult = allCategory.data.data;

  return (
    <div className="max-w-screen mx-auto">
      <div className="bg-white border-gray-300 border-b">
        <Header />
      </div>

      <div className="bg-white border-gray-300 border-b">
        <Navbar data={categoryResult} />
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6 bg-white min-h-screen">
        <BreakingNews data={breakingResult} />
        <Hero data={trendingResult} />
        <NewPost data={newPostResult} />
        <CategoryList category={allCategoryResult} />
        <Footer />
      </main>
    </div>
  );
}