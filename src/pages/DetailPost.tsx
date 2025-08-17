import { type ReactNode } from "react";
import { useParams } from "react-router";
import sanitizeHtml from 'sanitize-html';
import moment from "moment";

import type { Post } from "@/models/Posts";
import { LoadingIcon } from "@/components/ui/icons";
import GlassCard from "@/components/ui/card/GlassCard";
import { usePostFind } from "@/composable/usePostFindSlug";

export default function DetailPost(): ReactNode {
  const params = useParams();
  const [post, loading] = usePostFind(params.slug ?? '-1');
  return (
    <div>
      {loading ? <div className="w-full h-screen flex justify-center items-center gap-4 text-center font-bold text-2xl">
        <LoadingIcon className="w-24 h-24" />
      </div>
        : post != undefined ? PostContent(post) : PostNotFound()
      }
    </div>
  );
}

function PostNotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4 text-center font-bold text-2xl">
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
          className="w-full object-cover"
        />

        <div className="w-full p-4">
          <div className="prose prose-invert" dangerouslySetInnerHTML={data}>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

