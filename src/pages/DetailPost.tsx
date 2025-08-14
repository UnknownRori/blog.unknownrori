import { useContext, type ReactNode } from "react";
import { useParams } from "react-router";

import PostContext from '@/providers/PostProvider';
import type { Post } from "@/models/Posts";

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

  return (
    <div>
      <h1>
        {post.title}
      </h1>
    </div>
  );
}

