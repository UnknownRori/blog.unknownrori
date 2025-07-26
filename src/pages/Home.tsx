import type { ReactNode } from "react";

import ProfileCard from "@/components/widgets/ProfileCard";

export default function Home(): ReactNode {
  return (
    <div className='flex sm:flex-col md:flex-row gap-4 justify-center items-center text-white'>
      <div>
        <ProfileCard />
      </div>
      <div>
        Post list
      </div>
    </div>
  )
}
