import type SeriesRepository from "@/interface/repository/SeriesRepository";
import type { Series } from "@/models/Series";

export default class InMemorySeriesRepository implements SeriesRepository {
    private data: Array<Series>;

    constructor(data: Array<Series> = []) {
        this.data = data;
    }

    all(): Array<Series> {
        return this.data;
    }

    insert(series: Series): void {
        this.data.push(series);
    }

    delete(id: string): void {
        this.data = this.data.filter((series) => series.id !== id);
    }

    find(id: string): Series | undefined {
        return this.data.find((series) => series.id === id);
    }

}
