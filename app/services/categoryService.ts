import { CategoryQueryParams } from "../_types/aticleTypes";
import Api from "../api/interceptor";

export default function CategoryService(query?: CategoryQueryParams) {
    const api = Api()

    const getCategories = async (customQuery?: CategoryQueryParams) => {
        try {
            const response = await api.get("/category")
            console.log("Fetched categories:", response.data)
            return response.data
        } catch (error) {
            console.error("Error fetching categories:", error)
            throw error
        }
    }

    return {
        getCategories
    }
}