import { CategoryQueryParams } from "../_types/aticleTypes";

const BASE_URL = process.env.NEXT_PRIVATE_PORTAL_API;

function buildQuery(params?: CategoryQueryParams) {
    if (!params) return "";

    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            searchParams.append(key, String(value));
        }
    });

    return `?${searchParams.toString()}`;
}

export async function getCategories(params?: CategoryQueryParams) {
    const query = buildQuery(params);

    const res = await fetch(`${BASE_URL}/category${query}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return res.json();
}