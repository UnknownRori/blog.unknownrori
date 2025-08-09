import type { Series } from "@/models/Series";
import { postData } from "./PostData";

export const seriesData = [
    {
        id: "1",
        thumbnail: "/assets/img/32.png",
        title: "Hello, World",
        slug: "hello-world",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        createdAt: new Date(),

        posts: postData,
    },
] as Array<Series>;
