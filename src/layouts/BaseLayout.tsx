import {
  Outlet,
} from 'react-router';
import type { ReactNode } from "react";

import { NavigationBar } from '@/components/ui/nav';

export default function BaseLayout(): ReactNode {
  return (
    <div className="w-screen h-screen text-white">
      <div className="absolute w-screen h-screen -z-10 brightness-50 bg-[url(assets/img/32.png)]"></div>
      <NavigationBar />
      <Outlet />
    </div>
  )
}
