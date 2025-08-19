import { type ReactNode } from "react";

import AnimatedLayout from "@/components/ui/animation/AnimatedLayout";
import SeriesCard from "@/components/widgets/SeriesCard";
import { LoadingIcon } from "@/components/ui/icons";
import { useSeriesAll } from "@/composable/useSeriesAll";

export default function Series(): ReactNode {
  const [series, loading] = useSeriesAll();
  return (
    <AnimatedLayout className="relative flex flex-col justify-center items-center gap-4 md:mx-24 sm:mx-2 md:my-8 sm:my-12">
      {loading ? <LoadingIcon /> : <></>}
      {series.map((series) => {
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
    </AnimatedLayout>
  )
}
