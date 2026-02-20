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

    return {
        getArticles
    }
}