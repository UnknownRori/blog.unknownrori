import type { ReactNode } from "react";

import PostCard from "@/components/widgets/PostCard";
import ProfileCard from "@/components/widgets/ProfileCard";
import { postData } from "@/statics/PostData";

export default function Home(): ReactNode {
  return (
    <div className='relative flex sm:flex-col md:flex-row gap-4 justify-around md:mx-24 sm:mx-2 md:my-8 sm:my-12 items-center text-white'>
      <div className="lg:w-[50%] sm:w-full mb-auto">
        <ProfileCard />
      </div>
      <div className="w-full flex flex-col gap-4">
        {postData.map((post) => {
          return (
            <PostCard
              key={post.id} id={post.id}
              thumbnail={post.thumbnail} title={post.title}
              slug={post.slug} content={post.content}
              createdAt={post.createdAt}
            />
          )
        })}
      </div>
    </div>
  )
}
