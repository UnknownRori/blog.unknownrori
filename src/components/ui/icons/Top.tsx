import type { ReactNode } from "react";
import { cn } from "@/utils";
import { ArrowUp } from "lucide-react";

interface Props {
    className?: string,
}

export default function Top(props: Props): ReactNode {
    return (
        <ArrowUp className={cn("hover:animate-pulse duration-500 text-white", props.className)} />
    )
}
