import type { Post } from "@/models/Posts";

export default interface PostRepository {
    all(): Array<Post>;
    find(id: string): Array<Post>;
}
