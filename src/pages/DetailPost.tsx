import { useEffect, type ReactNode } from "react";
import { useParams } from "react-router";
import dompurify from 'dompurify'
import moment from "moment";

import type { Post } from "@/models/Posts";
import { LoadingIcon } from "@/components/ui/icons";
import GlassCard from "@/components/ui/card/GlassCard";
import { usePostFind } from "@/composable/usePostFindSlug";
import ReadingProgress from "@/components/widgets/ReadingProgress";
import { TopButton } from "@/components/ui/nav";

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
    <>
      <meta name="description" content="Post not found" />

      <div className="w-full h-screen flex justify-center items-center gap-4 text-center font-bold text-2xl">
        Posts Not Found!
      </div>

    </>
  );
}

function PostContent(post: Post) {
  const data = {
    __html: dompurify.sanitize(post.content)
  };

  document.title = `UnknownRori's Blog - ${post.title}`
  return (
    <>
      <div className="absolute w-screen top-0 left-0 z-100">
        <ReadingProgress />
      </div>

      <div>
        <meta name="description" content={post.description} />
        <meta property="og:image" content={post.thumbnail} />
      </div>

      <div className="w-full flex justify-center items-center">
        <GlassCard className="card sm:w-[100%] md:w-[85%] lg:w-[75%] 2xl:w-[65%] h-full p-0">
          <div className="bg-gray-900">
            <div className="mx-4">
              <h1 id="title" aria-label="title" className="font-bold text-lg">
                ■ {post.title}
              </h1>
              <span id="date-posted" aria-label="date-posted" className="text-xs italic">
                {moment(post.createdAt).format("dddd, DD MM,YYYY")}
              </span>
            </div>
          </div>
          <img id="thumbnail" aria-label="thumbnail" src={post.thumbnail} alt={post.slug}
            className="w-full object-cover min-h-[300px] flex justify-center items-center italic"
          />

          <div className="prose prose-invert max-w-[fit-content] p-4" dangerouslySetInnerHTML={data}>
          </div>
        </GlassCard >
      </div >

      <TopButton />
    </>
  );
}

