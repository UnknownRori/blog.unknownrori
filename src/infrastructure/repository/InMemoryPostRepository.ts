import type PostRepository from "@/interface/repository/PostRepository";
import type { Post } from "@/models/Posts";

export default class InMemoryPostRepository implements PostRepository {
    private data: Array<Post>;

    constructor(data: Array<Post> = []) {
        this.data = data;
    }

    async all(): Promise<Array<Post>> {
        return this.data;
    }

    async insert(post: Post): Promise<void> {
        this.data.push(post);
    }

    async delete(id: string): Promise<void> {
        this.data = this.data.filter((post) => post.id !== id);
    }

    async find(id: string): Promise<Post | undefined> {
        return this.data.find((post) => post.id === id);
    }

    async findSlug(slug: string): Promise<Post | undefined> {
        return this.data.find((post) => post.slug === slug);
    }

}
