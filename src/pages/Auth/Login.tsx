import type { ReactNode } from "react";
import { GlassCard } from "@/components/ui/card";

export default function Login(): ReactNode {
  return (
    <div className="w-screen h-screen flex justify-center md:justify-end items-center text-white">
      <GlassCard className="p-2 md:min-w-[30%] 2xl:min-w-[20%] md:h-full justify-center items-center gap-8">
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <form action="#" method="post" className="w-full flex flex-col gap-4 px-4">
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="" className="italic text-sm">Email</label>
            <input placeholder="Email" type="email" className="p-2 border-gray-800 border-[1px] rounded" />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="" className="italic text-sm">Password</label>
            <input placeholder="Password" type="text" className="p-2 border-gray-800 border-[1px] rounded" />
          </div>
          <div>
            <button type="submit" className="bg-gray-800/80 hover:bg-gray-600/80 cursor-pointer py-2 px-8 rounded duration-200">Login</button>
          </div>
        </form>
      </GlassCard>
    </div>
  )
}
