import { useContext, type ReactNode } from "react";

import SeriesCard from "@/components/widgets/SeriesCard";
import SeriesContext from '@/providers/SeriesProvider';

export default function Series(): ReactNode {
  const seriesContext = useContext(SeriesContext);
  return (
    <div className="relative flex flex-col gap-4 md:mx-24 sm:mx-2 md:my-8 sm:my-12">
      {seriesContext.all().map((series) => {
        return (
          <SeriesCard
            key={series.id} id={series.id}
            thumbnail={series.thumbnail} title={series.title}
            slug={series.slug} description={series.description}
            createdAt={series.createdAt}
            posts={series.posts}
          />
        )
      })}
    </div>
  )
}
