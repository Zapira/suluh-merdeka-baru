import { ArticleQueryParams } from "../_types/aticleTypes";
import Api from "../api/interceptor";



export default function ArticleService(query?: ArticleQueryParams) {
    const api = Api()

    const getArticles = async (customQuery?: ArticleQueryParams) => {
        try {
            const response = await api.get("/article")
            console.log("Fetched articles:", response.data)
            return response.data
        } catch (error) {
            console.error("Error fetching articles:", error)
            throw error
        }
    }

    const getArticleBySlug = async (slug: string) => {
        try {
            const response = await api.get(`/article/slug/${slug}`)
            return response.data.data
        } catch (error) {
            console.error(`Error fetching article with slug`, error)
            throw error
        }
    }

    return {
        getArticles,
        getArticleBySlug,
    }
}