import type { ReactNode } from "react";
import {
  Outlet,
} from 'react-router';
import { Footer } from "@/components/ui/nav";


export default function AuthLayout(): ReactNode {
  return (
    <div>
      <div className="fixed w-screen h-screen -z-100 brightness-50 bg-[url(/assets/img/32.png)]"></div>
      <Outlet />
      <Footer />
    </div>
  )
}
