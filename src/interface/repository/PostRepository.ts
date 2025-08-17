import type { Post } from "@/models/Posts";

export default interface PostRepository {
    all(): Promise<Array<Post>>;
    insert(post: Post): Promise<void>;
    delete(id: string): Promise<void>;
    find(id: string): Promise<Post | undefined>;
    findSlug(slug: string): Promise<Post | undefined>;
}
