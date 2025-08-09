import type { Post } from "@/models/Posts";

export default interface PostRepository {
    all(): Array<Post>;
    insert(post: Post): void;
    delete(id: string): void;
    find(id: string): Post | undefined;
}
