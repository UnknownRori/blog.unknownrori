import type { Post } from '@/models/Posts';
import PostContext from '@/providers/PostProvider';
import { useContext, useEffect, useState } from "react";

type ReturnType = [Post[], boolean, boolean];

export function usePostAll(): ReturnType {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const postContext = useContext(PostContext);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const posts = await postContext.all();
                setData(posts);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(true);
                setLoading(false);
            }
        })();
    }, [postContext]);

    return [data, loading, error];
}
