import type { ReactNode } from "react";
import { Footer } from "@/components/ui/nav";

import {
  Outlet,
} from 'react-router';

export default function DashboardLayout(): ReactNode {
  return (
    <div>
      <div className="fixed w-screen h-screen -z-100 brightness-50 bg-[url(/assets/img/32.png)]"></div>
      <Outlet />
      <Footer />
    </div>
  )
}
