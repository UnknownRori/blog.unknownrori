import moment from "moment";
import { useEffect, useState } from "react";

export default function useClock() {
    const utcOffset = 8;
    const format = "hh:mm A";

    const [clock, setClock] = useState(moment().utc().utcOffset(utcOffset).format(format));

    useEffect(() => {
        const id = setInterval(() => {
            setClock(moment().utc().utcOffset(utcOffset).format(format));
        }, 1000);

        return () => {
            clearInterval(id);
        }
    })

    return clock;
}
