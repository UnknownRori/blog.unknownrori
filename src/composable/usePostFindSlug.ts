import type { Post } from '@/models/Posts';
import PostContext from '@/providers/PostProvider';
import { useContext, useEffect, useState } from "react";

type ReturnType = [Post | undefined, boolean, boolean];

export function usePostFind(slug: string): ReturnType {
    const [data, setData] = useState<Post>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const postContext = useContext(PostContext);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const post = await postContext.findSlug(slug);
                setData(post);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(true);
                setLoading(false);
            }
        })();
    }, [postContext, slug]);

    return [data, loading, error];
}
