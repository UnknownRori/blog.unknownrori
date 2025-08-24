import type AuthProvider from "@/interface/provider/AuthProvider";
import type AuthUser from "@/models/AuthUser";
import type { Database } from "@/models/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export default class SupabaseAuthProvider implements AuthProvider {
    supabase: SupabaseClient<Database>;
    authUser?: AuthUser;

    constructor(supabase: SupabaseClient<Database>) {
        this.supabase = supabase;
    }

    async login(email: string, password: string): Promise<boolean> {
        const result = await this.supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
    }
    async logout(): Promise<boolean> {
        this.authUser = undefined;
        return true;
    }
    async authCheck(): Promise<boolean> {
        return this.authUser != undefined;
    }
    async user(): AuthUser | undefined {
        return this.authUser;
    }

}
