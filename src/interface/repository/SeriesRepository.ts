import type { Series } from "@/models/Series";

export default interface SeriesRepository {
    all(): Array<Series>;
    find(id: string): Series | undefined;
}
