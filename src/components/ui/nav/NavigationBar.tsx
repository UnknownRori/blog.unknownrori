import { Sun } from 'lucide-react';
import type { ReactNode } from "react";
import { useLocation } from 'react-router';

import { NavLink } from "@/components/ui/nav";

const nav = [
    { to: "/", title: "Home" },
    { to: "/series", title: "Series" },
]

export default function Navbar(): ReactNode {
    const pathname = useLocation().pathname;

    return (
        <nav aria-label="navigation-bar"
            className="absolute flex gap-4 justify-between items-center w-full py-4 px-8 shadow-lg backdrop:bg-white/20 backdrop-blur-3xl">
            <div className="font-bold">
                Blog
            </div>
            <div>
                <ul>
                    <li className="flex gap-4">
                        {nav.map((nav) => {
                            return (
                                <NavLink to={nav.to} ariaLabel={nav.title} isActive={nav.to == pathname}>
                                    {nav.title}
                                </NavLink>
                            );
                        })}
                    </li>
                </ul>
            </div>
            <div>
                <Sun className="text-white" />
            </div>
        </nav>
    )
}
