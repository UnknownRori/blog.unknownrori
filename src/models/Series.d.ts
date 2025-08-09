export interface Series {
    id: string,
    thumbnail: string,
    title: string,
    slug: string,
    description: string,
    createdAt: Date,

    posts: Array<Posts>
}
