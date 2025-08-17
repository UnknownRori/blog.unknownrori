import type { ReactNode } from "react";
import { cn } from "@/utils";
import { Loader2 } from "lucide-react";

interface Props {
    className?: string,
}

export default function Loading(props: Props): ReactNode {
    return (
        <Loader2 className={cn("animate-spin duration-500 text-white", props.className)} />
    )
}
