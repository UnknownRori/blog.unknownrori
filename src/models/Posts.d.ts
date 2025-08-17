export interface Post {
    id: string,
    thumbnail: string,
    title: string,
    slug: string,
    description: string,
    content: string,
    createdAt: Date,
    categoriesId: number;
    languageId: number;
}
