import {
  Outlet,
} from 'react-router';
import { useState, type PropsWithChildren, type ReactNode } from "react";

import { NavigationBar, Footer } from '@/components/ui/nav';
import LoadingScreen from '@/components/ui/animation/LoadingScreen';
import { type FlavorText } from '@/components/ui/animation/LoadingScreen';
import { cn, sleep } from '@/utils';

export default function BaseLayout({ children }: PropsWithChildren): ReactNode {
  const [done, setDone] = useState(false);
  const currentPageFile = 'index.html';
  const flavorText = [
    { time: 0, text: "Booting..." },
    { time: 1, text: "Loading minimal resources..." },
    { time: 4, text: "Loading /sw.js" },
    { time: 12, text: currentPageFile },
    { time: 42, text: "/assets/css/nuxt.js" },
    { time: 12, text: "/assets/css/tailwind.css" },
    { time: 14, text: "/assets/css/scroll.css" },
    { time: 62, text: "Loading content..." },
    { time: 82, text: "Content Loaded..." },
    { time: 88, text: "Creating app..." },
    { time: 92, text: "Mounting app..." },
    { time: 94, text: "Starting app..." },
    { time: 112, text: "Ready" },
  ] as FlavorText[];

  async function loadDone() {
    await sleep(300);
    setDone(() => true);
  }
  return (
    <>
      <LoadingScreen flavorText={flavorText} onDone={loadDone} className={cn(done ? 'opacity-0' : 'opacity-100')} />
      <div className={cn("w-screen h-screen text-white", done ? 'opacity-100' : 'opacity-0')}>
        <div className="fixed w-screen h-screen -z-100 brightness-50 bg-[url(/assets/img/32.png)]"></div>
        <NavigationBar />
        {children == undefined ? <Outlet /> : children}
        <Footer />
      </div>
    </>
  )
}
