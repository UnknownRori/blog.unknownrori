import type { PropsWithChildren, ReactNode } from "react"
import { motion } from "motion/react"

import { cn } from "@/utils";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

interface Props extends PropsWithChildren {
    className?: string,
}

export default function AnimatedLayout(props: Props): ReactNode {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: "tween" }}
            className={cn(props.className)}
        >
            {props.children}
        </motion.div>
    );
}
