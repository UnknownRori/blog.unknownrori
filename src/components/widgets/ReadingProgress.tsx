import { useEffect, useState } from "react"

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        function onScroll() {
            const docs = document.documentElement;
            const scrollTop = docs.scrollTop || document.body.scrollTop;
            const scrollHeight = docs.scrollHeight || document.body.scrollHeight;
            const percent = scrollTop / (scrollHeight - document.body.clientHeight) * 100;
            setProgress(percent);
        }

        window.document.addEventListener('scroll', onScroll);
        return () => {
            window.document.removeEventListener('scroll', onScroll);
        }
    }, [])

    return (
        <div
            className="fixed h-[2px] rounded-full -z-10 bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee,0_0_16px_#22d3ee]"
            style={{ width: progress.toFixed(2) + '%' }}></div>
    )
}
