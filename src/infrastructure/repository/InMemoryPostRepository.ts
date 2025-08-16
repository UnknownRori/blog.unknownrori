import type PostRepository from "@/interface/repository/PostRepository";
import type { Post } from "@/models/Posts";

export default class InMemoryPostRepository implements PostRepository {
    private data: Array<Post>;

    constructor(data: Array<Post> = []) {
        this.data = data;
    }

    all(): Array<Post> {
        return this.data;
    }

    insert(post: Post): void {
        this.data.push(post);
    }

    delete(id: string): void {
        this.data = this.data.filter((post) => post.id !== id);
    }

    find(id: string): Post | undefined {
        return this.data.find((post) => post.id === id);
    }

    findSlug(slug: string): Post | undefined {
        return this.data.find((post) => post.slug === slug);
    }

}
