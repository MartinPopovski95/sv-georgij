import { PublishStatus } from "../enums/publish-status";

export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    imageUrl?: string;
    author: string;
    publishedAt: string;
    publishStatus: PublishStatus; //enum
    userId: string;
    categoryId: string;
    categoryName: string;
}
