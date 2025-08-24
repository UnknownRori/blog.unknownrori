import type AuthProvider from "@/interface/provider/AuthProvider";
import type PostRepository from "@/interface/repository/PostRepository";
import type SeriesRepository from "@/interface/repository/SeriesRepository";

type ContainerParams = {
    postRepository: PostRepository,
    seriesRepository: SeriesRepository,

    authProvider: AuthProvider,
}

export default class Container {
    postRepository: PostRepository;
    seriesRepository: SeriesRepository;
    authProvider: AuthProvider;

    constructor({ postRepository, seriesRepository, authProvider }: ContainerParams) {
        this.postRepository = postRepository;
        this.seriesRepository = seriesRepository;
        this.authProvider = authProvider;
    }
}

