import SeriesCard from "@/components/widgets/SeriesCard";
import { seriesData } from "@/statics/SeriesData";
import type { ReactNode } from "react";

export default function Series(): ReactNode {
  return (
    <div className="relative flex flex-col gap-4 md:mx-24 sm:mx-2 md:my-8 sm:my-12">
      {seriesData.map((series) => {
        return (
          <SeriesCard
            key={series.id} id={series.id}
            thumbnail={series.thumbnail} title={series.title}
            slug={series.slug} content={series.content}
            createdAt={series.createdAt}
            posts={series.posts}
          />
        )
      })}
    </div>
  )
}
