import { createContext, type Context } from "react";

import supabase from "@/infrastructure/supabase/supabase";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/models/supabase";

const SupabaseContext: Context<SupabaseClient<Database>> = createContext(supabase);

export default SupabaseContext;

