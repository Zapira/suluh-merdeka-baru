import axios, { AxiosError } from "axios"

export default function Api() {
    const api = axios.create({
        baseURL: process.env.NEXT_PRIVATE_PORTAL_API,
        withCredentials: true
    })

    const apiKey = process.env.NEXT_PRIVATE_PORTAL_API_KEY

    api.interceptors.request.use((config) => {
        if (apiKey) {
            config.headers["Authorization"] = `Bearer ${apiKey}`
        }
        return config
    })

    api.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        console.error("Unauthorized access")
                        break;
                    case 404:
                        console.error("Resource not found")
                        break;
                    case 500:
                        console.error("Server error")
                        break;
                    default:
                        console.error(`Error ${error.response.status}: ${error.response.statusText}`)
                        break;
                }
            } else {
                console.error("Network error or no response received")
            }
        }
    )


    return api
}
