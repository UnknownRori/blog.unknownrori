import type PostRepository from "@/interface/repository/PostRepository";
import type SeriesRepository from "@/interface/repository/SeriesRepository";

type ContainerParams = {
    postRepository: PostRepository,
    seriesRepository: SeriesRepository,
}

export default class Container {
    postRepository: PostRepository;
    seriesRepository: SeriesRepository;

    constructor({ postRepository, seriesRepository }: ContainerParams) {
        this.postRepository = postRepository;
        this.seriesRepository = seriesRepository;
    }
}

