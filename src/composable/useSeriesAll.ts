import type { Series } from '@/models/Series';
import SeriesContext from '@/providers/SeriesProvider';
import { useContext, useEffect, useState } from "react";

type ReturnType = [Series[], boolean, boolean];

export function useSeriesAll(): ReturnType {
    const [data, setData] = useState<Series[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const seriesContext = useContext(SeriesContext);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const posts = await seriesContext.all();
                setData(posts);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(true);
                setLoading(false);
            }
        })();
    }, [seriesContext]);

    return [data, loading, error];
}
