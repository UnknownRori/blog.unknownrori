import moment from "moment";
import type { ReactNode } from "react";

import type { Post } from "@/models/Posts";
import { GlassCard } from "../ui/card";

const MAX_TEXT_CONTENT = 400;

export default function PostCard(props: Post): ReactNode {
    return (
        <GlassCard className="w-full h-full p-0">
            <div className="bg-gray-900">
                <div className="mx-4">
                    <h1 className="font-bold text-lg">
                        ■  {props.title}
                    </h1>
                    <span className="text-xs italic">
                        {moment(props.createdAt).format("dddd, DD MM,YYYY")}
                    </span>
                </div>
            </div>
            <img src={props.thumbnail} alt={props.slug}
                className="w-full h-[300px] object-cover"
            />

            <div className="p-4">
                <p>
                    {props.content.slice(0, MAX_TEXT_CONTENT) + (props.content.length >= MAX_TEXT_CONTENT ? "..." : "")}
                </p>
            </div>
        </GlassCard>
    )
}
