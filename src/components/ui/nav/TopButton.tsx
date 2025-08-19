import { Top } from "@/components/ui/icons";
import { cn } from "@/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function TopButton() {
    const [y, setY] = useState(20);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        function onScroll() {
            const docs = document.documentElement;
            const scrollTop = docs.scrollTop || document.body.scrollTop;
            if (scrollTop > document.body.clientHeight) {
                setY(0);
                setOpacity(100);
            } else {
                setY(20);
                setOpacity(0);
            }
        }

        window.document.addEventListener('scroll', onScroll);
        return () => {
            window.document.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <motion.div className={cn('fixed right-0 bottom-0 p-8 z-100 duration-500')}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y, opacity }}
            transition={{ type: 'tween', duration: 0.5 }} >
            <a key="top" href="#top" className="cursor-pointer">
                <Top />
            </a>
        </motion.div>
    )
}
