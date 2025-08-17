import type PostRepository from "@/interface/repository/PostRepository";
import type SeriesRepository from "@/interface/repository/SeriesRepository";
import type { Database } from "@/models/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

type ContainerParams = {
    postRepository: PostRepository,
    seriesRepository: SeriesRepository,
    supabase?: SupabaseClient<Database>;
}

export default class Container {
    postRepository: PostRepository;
    seriesRepository: SeriesRepository;
    supabase?: SupabaseClient<Database>;

    constructor({ postRepository, seriesRepository, supabase }: ContainerParams) {
        this.postRepository = postRepository;
        this.seriesRepository = seriesRepository;
        this.supabase = supabase;
    }
}

