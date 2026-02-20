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
    isBreakingNews: boolean;
    slug: string;
    user: {
        name: string;
    };
}

export interface ArticleQueryParams {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    sort?: string;
    isBreakingNews?: boolean;
    trending?: boolean;
}

export interface CategoryQueryParams {
    page?: number;
    limit?: number;
}