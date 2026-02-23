import { ArticleQueryParams } from "../_types/aticleTypes";

const BASE_URL = process.env.NEXT_PRIVATE_PORTAL_API;

function buildQuery(params?: ArticleQueryParams) {
    if (!params) return "";

    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            searchParams.append(key, String(value));
        }
    });

    return `?${searchParams.toString()}`;
}

export async function getArticles(params?: ArticleQueryParams) {
    const query = buildQuery(params);

    console.log('base url:', BASE_URL);
    const res = await fetch(`${BASE_URL}/article${query}`, {
        cache: "no-store",
    });

    if (res.status === 404) {
        return { data: [] };
    }

    if (!res.ok) {
        console.error("Error fetching articles:", res.status, res.statusText);
        throw new Error("Failed to fetch articles");
    }

    return res.json();
}

export async function getArticleBySlug(slug: string) {
    console.log('fetching article with slug:', slug);
    const res = await fetch(`${BASE_URL}/article/slug/${slug}`, {
        cache: "no-store",
    });

    if (res.status === 404) {
        return { data: [] };
    }

    if (!res.ok) {
        throw new Error("Failed to fetch article");
    }

    return res.json();
}

export async function getArticleByCategory(category: string) {
    const res = await fetch(`${BASE_URL}/article/category/${category}`, {
        cache: "no-store",
    });

    if (res.status === 404) {
        return { data: [] };
    }

    if (!res.ok) {
        throw new Error("Failed to fetch articles by category");
    }

    return res.json();
}