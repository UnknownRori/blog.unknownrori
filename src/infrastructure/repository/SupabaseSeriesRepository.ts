import type SeriesRepository from "@/interface/repository/SeriesRepository";
import type { Series } from "@/models/Series";
import type { Database } from "@/models/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export default class SupabaseSeriesRepository implements SeriesRepository {
    supabase: SupabaseClient<Database>;

    constructor(supabase: SupabaseClient<Database>) {
        this.supabase = supabase;
    }

    async all(): Promise<Array<Series>> {
        const { data: series, error } = await this.supabase.from('series').select(`
            *,
            posts (
                *
            )
        `);

        if (error) {
            throw error;
        }
        return series as unknown as Series[];
    }

    async insert(series: Series): Promise<void> {
        throw "TODO";
    }

    async delete(id: string): Promise<void> {
        throw "TODO";
    }

    async find(id: string): Promise<Series | undefined> {
        throw "TODO";
    }

}
