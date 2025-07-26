import type { ReactNode } from "react";

export default function Footer(): ReactNode {
    const date = new Date();

    return (
        <footer id="footer" className="fixed bottom-0 print:hidden w-full flex justify-center items-center p-2 select-none">
            <span className="text-white/20">{date.getFullYear()}&copy; Made with ❤️ by UnknownRori</span>
        </footer>
    )
}
