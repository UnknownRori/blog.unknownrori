import { NavLink as ReactNavLink } from "react-router";
import type { PropsWithChildren, ReactNode } from "react";

import { cn } from "../../../utils";

export type NavLinkProps = {
    className?: string,
    to: string
    ariaLabel?: string,
    isActive: boolean,
} & PropsWithChildren

export default function NavLink({ to, isActive, className, ariaLabel, children }: NavLinkProps): ReactNode {
    return (
        <div className="relative group">
            <span className={cn(`absolute -bottom-1 left-0 z-10 h-[2px] w-0 bg-white/20 dark:bg-white
                duration-500`, isActive ? 'w-full bg-white ' : 'group-hover:w-full group-hover:bg-white ')}></span>
            <ReactNavLink to={to} aria-label={ariaLabel}
                className={cn('text-xl text-gray-200 group-hover:text-white font-bold duration-500',
                    isActive ? 'active animate-pulse group-hover:animate-none' : '',
                    className)}
            >
                {children}
            </ReactNavLink>
            <span className={cn(`absolute -bottom-1 right-0 z-10 h-[2px] w-0 bg-white/20 dark:bg-white
                duration-500`, isActive ? 'w-full bg-white animate-pulse' : 'group-hover:w-full group-hover:bg-white ')}></span>
        </div>
    );
}
