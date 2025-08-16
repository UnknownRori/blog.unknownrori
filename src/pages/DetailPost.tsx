import { useContext, type ReactNode } from "react";
import { useParams } from "react-router";
import sanitizeHtml from 'sanitize-html';
import moment from "moment";

import PostContext from '@/providers/PostProvider';
import type { Post } from "@/models/Posts";
import GlassCard from "@/components/ui/card/GlassCard";

export default function DetailPost(): ReactNode {
  const params = useParams();
  const post = useContext(PostContext).findSlug(params.slug ?? '-1');
  return (
    <div>
      {post == undefined ? PostNotFound() : PostContent(post)}
    </div>
  );
}

function PostNotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center gap-4">
      Posts Not Found!
    </div>
  );
}

function PostContent(post: Post) {
  const data = {
    __html: sanitizeHtml(post.content)
  };

  return (
    <div className="w-full flex justify-center items-center">
      <GlassCard className="card sm:w-[100%] md:w-[85%] lg:w-[75%] 2xl:w-[65%] h-full p-0">
        <div className="bg-gray-900">
          <div className="mx-4">
            <h1 className="font-bold text-lg">
              ■ {post.title}
            </h1>
            <span className="text-xs italic">
              {moment(post.createdAt).format("dddd, DD MM,YYYY")}
            </span>
          </div>
        </div>
        <img src={post.thumbnail} alt={post.slug}
          className="w-full h-[300px] object-cover"
        />

        <div className="prose prose-invert p-4" dangerouslySetInnerHTML={data}>
        </div>
      </GlassCard>
    </div>
  );
}

