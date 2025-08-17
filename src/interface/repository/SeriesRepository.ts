import type { Series } from "@/models/Series";

export default interface SeriesRepository {
    all(): Promise<Array<Series>>;
    insert(series: Series): Promise<void>;
    delete(id: string): Promise<void>;
    find(id: string): Promise<Series | undefined>;
}
