export interface Series {
    id: string,
    thumbnail: string,
    title: string,
    slug: string,
    content: string,
    createdAt: Date,

    posts: Array<Posts>
}
