import type PostRepository from "@/interface/repository/PostRepository";
import type { Post } from "@/models/Posts";
import type { Database } from "@/models/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export default class SupabasePostRepository implements PostRepository {
    supabase: SupabaseClient<Database>;

    constructor(supabase: SupabaseClient<Database>) {
        this.supabase = supabase;
    }

    async all(): Promise<Array<Post>> {
        const { data, error } = await this.supabase.from('posts').select();
        if (error) {
            throw error;
        }
        return data as unknown as Post[];
    }

    async insert(post: Post): Promise<void> {
        throw "TODO";
    }

    async delete(id: string): Promise<void> {
        throw "TODO";
    }

    async find(id: string): Promise<Post | undefined> {
        const { data, error } = await this.supabase.from('posts').select('*').eq('id', Number(id));
        if (error) {
            throw error;
        }
        return data as unknown as Post;
    }

    async findSlug(slug: string): Promise<Post | undefined> {
        const { data, error } = await this.supabase.from('posts').select('*').eq('slug', slug).single();
        if (error) {
            throw error;
        }
        return data as unknown as Post;
    }

}
