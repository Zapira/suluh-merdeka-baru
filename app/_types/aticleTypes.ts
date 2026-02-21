export interface ArticleTypes {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    published_at: string;
    category: {
        name_category: string;
    };
    featured_image: string;
    is_breaking_news: boolean;
    slug: string;
    user: {
        name: string;
    };
    views: number;
}

export interface CategoryTypes {
    id: number;
    name_category: string;
}

export interface ArticleQueryParams {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    sort?: string;
    is_breaking_news?: boolean;
    trending?: boolean;
}

export interface CategoryQueryParams {
    page?: number;
    limit?: number;
}