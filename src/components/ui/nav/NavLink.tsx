import { NavLink as ReactNavLink } from "react-router";
import type { PropsWithChildren, ReactNode } from "react";

import { cn } from "../../../utils";

export type NavLinkProps = {
    className?: string,
    to: string
} & PropsWithChildren

export default function NavLink({ to, className, children }: NavLinkProps): ReactNode {
    return (
        <ReactNavLink to={to} className={cn('text-xl text-gray-200 hover:text-white font-bold duration-500', className)}>
            {children}
        </ReactNavLink>
    );
}
