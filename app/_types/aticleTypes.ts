export interface ArticleTypes {
    id: number;
    title: string;
    content: string;
    author: string;
    publishedAt: string;
    category: string;
    imageUrl: string;
}

export interface ArticleQueryParams {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    sort?: string;
}