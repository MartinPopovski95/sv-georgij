export interface CreatePostRequest {
    title: string;
    content: string;
    imageUrl: string;
    categoryName: string;
    publishStatus: number;
    publishedAt?: string;
}

export interface UpdatePostRequest {
    title: string;
    slug: string;
    content: string;
    imageUrl: string;
    category: string;
    publishStatus: number;
    publishedAt: string;
}