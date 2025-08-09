import { createContext, type Context } from "react";

import { seriesData } from "@/statics/SeriesData";
import InMemorySeriesRepository from "@/infrastructure/repository/InMemorySeriesRepository";
import type SeriesRepository from "@/interface/repository/SeriesRepository";

const SeriesContext: Context<SeriesRepository> = createContext(new InMemorySeriesRepository(seriesData) as SeriesRepository);

export default SeriesContext;

