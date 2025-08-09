import type { Series } from "@/models/Series";

export default interface SeriesRepository {
    all(): Array<Series>;
    insert(series: Series): void;
    delete(id: string): void;
    find(id: string): Series | undefined;
}
