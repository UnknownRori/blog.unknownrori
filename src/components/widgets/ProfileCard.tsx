import type { ReactNode } from "react";
import { Clock, MapPin, Building } from "lucide-react";

import useClock from "@/composable/useClock";

export default function ProfileCard(): ReactNode {
    const clock = useClock();

    return (
        <figure id="profile-card" className="relative flex flex-col backdrop-blur-lg p-8 border-2 border-gray-500/20 rounded">
            <div className="w-full h-full flex justify-center items-cnter">
                <img src="assets/img/29.gif" alt="UnknownRori Profile"
                    className="w-[150px] h-[150px] rounded-full object-cover border-2 border-gray-500/50"
                />
            </div>
            <h1 className="font-bold">
                Akbar Hendra Jaya
            </h1>
            <div className="flex my-2">
                <div className="border-b-[4px] w-[20%] border-gray-500"></div>
                <div className="border-b-[4px] w-[80%] border-gray-700"></div>
            </div>
            <h2 className="italic">
                @UnknownRori
            </h2>
            <ul className="flex flex-col gap-2 mt-8">
                <li className="flex items-center gap-2 text-sm">
                    <Building className="w-4 h-4" />
                    <p>
                        STMIK AMIKOM Surakarta
                    </p>
                </li>
                <li className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    <p>
                        Indonesia, Sol III, Sol
                    </p>
                </li>
                <li className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <p>
                        {clock}
                    </p>
                </li>
            </ul>
        </figure>
    )
}
