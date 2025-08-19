import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn, sleep } from "@/utils";

export interface FlavorText {
    time: number,
    text: string,
};

export interface LoadingScreenProps {
    className?: string,
    flavorText: FlavorText[]
    onDone: () => void,
};

export default function LoadingScreen(props: LoadingScreenProps): ReactNode {
    const [loadingLength, setLoadingLength] = useState(0);
    const [shownContent, setShowContent] = useState<FlavorText[]>([]);
    const hasLoaded = useRef(false);

    useEffect(() => {
        async function load() {
            if (hasLoaded.current) return;
            hasLoaded.current = true;
            const increment = 100 / (props.flavorText.length + 1);

            for (const text of props.flavorText) {
                setShowContent(prev => [...prev, text]);
                setLoadingLength(prev => prev + increment);
                await sleep(Math.random() * text.time);
            }
            props.onDone();
        }
        load();
    }, []);

    return (
        <div className={cn(
            "absolute z-100 w-screen h-screen flex flex-col justify-center items-center gap-4 dark:bg-slate-950 duration-500 pointer-events-none",
            props.className,
        )}>
            <h2 className="font-bold text-3xl dark:text-white shadow-white/50 shadow-text">
                Please wait warmly
            </h2>

            <div className="relative w-[24vw] rounded-md bg-gray-900 py-2 sm:w-[82vw] md:w-[60vw] lg:w-[42vw]">
                <span className="absolute left-0 top-0 h-full rounded-md bg-white" style={{ width: `${loadingLength}%` }}></span>
            </div>

            <div className="relative min-h-[48vh] w-[24vw] sm:w-[82vw] md:w-[60vw] lg:w-[42vw] flex flex-col-reverse items-start justify-center overflow-hidden dark:text-white">
                {shownContent.map((content) =>
                    <span key={content.text} className="font-bold fade-in">
                        [{
                            "\u00A0".repeat(
                                5 - content.time.toString().length >= 0
                                    ? 5 - content.time.toString().length
                                    : 0,
                            ) + content.time
                        }] {content.text}
                    </span>
                )}
            </div>

            <div
                className="absolute inset-0 z-10 w-screen bg-gradient-to-b from-transparent from-40% to-black to-80%"
            ></div>
        </div>
    );
}
