import { expect, describe, it } from 'vitest';
import InMemorySeriesRepository from '../InMemorySeriesRepository';

describe('InMemorySeriesRepository', () => {
    it('It should initialize InMemorySeriesRepository correctly', async () => {
        const repo = new InMemorySeriesRepository();

        expect((await repo.all()).length).toBe(0);
    });

    it('It should able to insert series into InMemoryPostRepository correctly', async () => {
        const repo = new InMemorySeriesRepository();

        await repo.insert({
            id: "series-1",
            slug: "hi-world!",
            title: "Hi World!",
            description: "Hi",
            createdAt: new Date(),
            thumbnail: "",
            posts: [],
        });

        expect((await repo.all()).length).toBe(1);
    });

    it('It should able to delete series into InMemoryPostRepository correctly', async () => {
        const repo = new InMemorySeriesRepository();

        await repo.insert({
            id: "series-1",
            slug: "hi-world!",
            title: "Hi World!",
            description: "Hi",
            createdAt: new Date(),
            thumbnail: "",
            posts: [],
        });

        await repo.delete("series-1");

        expect((await repo.all()).length).toBe(0);
    });
});
