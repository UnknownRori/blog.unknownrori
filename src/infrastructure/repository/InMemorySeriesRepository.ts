import type SeriesRepository from "@/interface/repository/SeriesRepository";
import type { Series } from "@/models/Series";

export default class InMemorySeriesRepository implements SeriesRepository {
    private data: Array<Series>;

    constructor(data: Array<Series> = []) {
        this.data = data;
    }

    async all(): Promise<Array<Series>> {
        return this.data;
    }

    async insert(series: Series): Promise<void> {
        this.data.push(series);
    }

    async delete(id: string): Promise<void> {
        this.data = this.data.filter((series) => series.id !== id);
    }

    async find(id: string): Promise<Series | undefined> {
        return this.data.find((series) => series.id === id);
    }

}
