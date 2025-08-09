import { createContext, type Context } from "react";

import { postData } from "@/statics/PostData";
import InMemoryPostRepository from "@/infrastructure/repository/InMemoryPostRepository";
import type PostRepository from "@/interface/repository/PostRepository";

const SeriesContext: Context<PostRepository> = createContext(new InMemoryPostRepository(postData) as PostRepository);

export default SeriesContext;

