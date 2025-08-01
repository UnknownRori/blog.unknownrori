import moment from "moment";
import type { ReactNode } from "react";

import { GlassCard } from "../ui/card";
import type { Series } from "@/models/Series";

const MAX_TEXT_CONTENT = 400;

export default function SeriesCard(props: Series): ReactNode {
    return (
        <GlassCard className="card w-full h-full p-0">
            <div className="bg-gray-900">
                <div className="mx-4">
                    <h1 className="font-bold text-lg">
                        ■ {props.title}
                    </h1>
                    <span className="text-xs italic">
                        {moment(props.createdAt).format("dddd, DD MM,YYYY")}
                    </span>
                </div>
            </div>
            <div className="flex sm:flex-col md:flex-row">
                <img src={props.thumbnail} alt={props.slug}
                    className="w-full h-[300px] object-cover"
                />

                <div className="sm:w-full md:w-[40%] lg:w-[35%] xl:w-[30%] flex flex-col gap-1">
                    <h3 className="text-center font-bold text-lg">Series List</h3>

                    <ul className="series-list flex flex-col gap-2">
                        {props.posts.map((post) => {
                            return (
                                <li className="hover:bg-gray-500/20 backdrop-blur-lg py-2 px-4 hover:cursor-pointer hover:font-bold duration-200">
                                    <p>■ {post.title}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="p-4">
                <p>
                    {props.content.slice(0, MAX_TEXT_CONTENT) + (props.content.length >= MAX_TEXT_CONTENT ? "..." : "")}
                </p>
            </div>
        </GlassCard>
    )
}
