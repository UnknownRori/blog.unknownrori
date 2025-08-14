import { expect, describe, it } from 'vitest';
import InMemoryPostRepository from '../InMemoryPostRepository';

describe('InMemoryPostRepository', () => {
    it('It should initialize InMemoryPostRepository correctly', () => {
        const repo = new InMemoryPostRepository();

        expect(repo.all().length).toBe(0);
    });

    it('It should able to insert post into InMemoryPostRepository correctly', () => {
        const repo = new InMemoryPostRepository();

        repo.insert({
            id: "post-1",
            slug: "hi-world!",
            title: "Hi World!",
            content: "Hi",
            createdAt: new Date(),
            thumbnail: "",
        });

        expect(repo.all().length).toBe(1);
    });

    it('It should able to delete post in InMemoryPostRepository correctly', () => {
        const repo = new InMemoryPostRepository();

        repo.insert({
            id: "post-1",
            slug: "hi-world!",
            title: "Hi World!",
            content: "Hi",
            createdAt: new Date(),
            thumbnail: "",
        });

        repo.insert({
            id: "post-2",
            slug: "hi-world!",
            title: "Hi World!",
            content: "Hi",
            createdAt: new Date(),
            thumbnail: "",
        });

        repo.delete("post-1")

        expect(repo.all().length).toBe(1);
    });

    it('It should able to find post in InMemoryPostRepository correctly', () => {
        const repo = new InMemoryPostRepository();

        repo.insert({
            id: "post-1",
            slug: "hi-world!",
            title: "Hi World!",
            content: "Hi",
            createdAt: new Date(),
            thumbnail: "",
        });

        const post = repo.find("post-1");

        expect(post).not.toBeNull();
        expect(post?.id).toBe("post-1");
        expect(post?.slug).toBe("hi-world!");
        expect(post?.title).toBe("Hi World!");
        expect(post?.content).toBe("Hi");
    });

    it('It should able to find post using slug in InMemoryPostRepository correctly', () => {
        const repo = new InMemoryPostRepository();

        repo.insert({
            id: "post-1",
            slug: "hi-world!",
            title: "Hi World!",
            content: "Hi",
            createdAt: new Date(),
            thumbnail: "",
        });

        repo.insert({
            id: "post-2",
            slug: "cats",
            title: "Hi World!",
            content: "Hi",
            createdAt: new Date(),
            thumbnail: "",
        });

        const post = repo.findSlug("hi-world!");

        expect(post).not.toBeNull();
        expect(post?.id).toBe("post-1");
        expect(post?.slug).toBe("hi-world!");
        expect(post?.title).toBe("Hi World!");
        expect(post?.content).toBe("Hi");
    });
});
