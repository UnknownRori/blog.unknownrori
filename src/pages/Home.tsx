import type { ReactNode } from "react";

import ProfileCard from "@/components/widgets/ProfileCard";

export default function Home(): ReactNode {
  return (
    <div className='flex sm:flex-col md:flex-row gap-4 justify-around md:mx-24 sm:mx-2 md:my-8 sm:my-12 items-center text-white'>
      <div>
        <ProfileCard />
      </div>
      <div>
        Post list
      </div>
    </div>
  )
}
