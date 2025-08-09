import { expect, describe, it } from 'vitest';
import InMemorySeriesRepository from '../InMemorySeriesRepository';

describe('InMemorySeriesRepository', () => {
    it('It should initialize InMemorySeriesRepository correctly', () => {
        const repo = new InMemorySeriesRepository();

        expect(repo.all().length).toBe(0);
    });

    it('It should able to insert series into InMemoryPostRepository correctly', () => {
        const repo = new InMemorySeriesRepository();

        repo.insert({
            id: "series-1",
            slug: "hi-world!",
            title: "Hi World!",
            description: "Hi",
            createdAt: new Date(),
            thumbnail: "",
            posts: [],
        });

        expect(repo.all().length).toBe(1);
    });

    it('It should able to delete series into InMemoryPostRepository correctly', () => {
        const repo = new InMemorySeriesRepository();

        repo.insert({
            id: "series-1",
            slug: "hi-world!",
            title: "Hi World!",
            description: "Hi",
            createdAt: new Date(),
            thumbnail: "",
            posts: [],
        });

        repo.delete("series-1");

        expect(repo.all().length).toBe(0);
    });
});
