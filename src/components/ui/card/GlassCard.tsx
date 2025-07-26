import type { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/utils";

interface GlassCardProps extends PropsWithChildren {
    className?: string,
}

export default function GlassCard(props: GlassCardProps): ReactNode {
    return (
        <div className={cn("relative flex flex-col backdrop-blur-lg p-8 border-2 border-gray-500/20 rounded", props.className)}>
            {props.children}
        </div>
    )
}
