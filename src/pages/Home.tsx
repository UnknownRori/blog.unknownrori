import { type ReactNode } from "react";

import AnimatedLayout from "@/components/ui/animation/AnimatedLayout";
import PostCard from "@/components/widgets/PostCard";
import ProfileCard from "@/components/widgets/ProfileCard";
import { LoadingIcon } from "@/components/ui/icons";

import { usePostAll } from "@/composable/usePostAll";

export default function Home(): ReactNode {
  const [post, loading, error] = usePostAll();

  return (
    <AnimatedLayout className='relative flex sm:flex-col md:flex-row gap-4 justify-around md:mx-24 sm:mx-2 md:my-8 sm:my-12 items-center text-white'>
      <div className="lg:w-[50%] sm:w-full mb-auto">
        <ProfileCard />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-4">
        {loading ? <LoadingIcon /> : <></>}
        {error ? <p className="text-red-500">Failed to fetch posts</p> : <></>}
        {post.map((post) => {
          return (
            <PostCard
              key={post.id} id={post.id} languageId={post.languageId} categoriesId={post.categoriesId}
              thumbnail={post.thumbnail} title={post.title}
              slug={post.slug} content={post.content} description={post.description}
              createdAt={post.createdAt}
            />
          )
        })}
      </div>
    </AnimatedLayout>
  )
}
