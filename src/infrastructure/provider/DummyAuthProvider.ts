import type AuthProvider from "@/interface/provider/AuthProvider";
import type AuthUser from "@/models/AuthUser";

export default class DummyAuthProvider implements AuthProvider {
    loggedIn: boolean = false;

    async login(email: string, password: string): Promise<boolean> {
        this.loggedIn = true;
        return true;
    }
    async logout(): Promise<boolean> {
        this.loggedIn = false;
        return true;
    }
    async authCheck(): Promise<boolean> {
        return this.loggedIn;
    }
    async user(): AuthUser | undefined {
        if (!this.loggedIn) return undefined;

        return {
            accessToken: "<dummy>",
            user: {
                id: "<dummy>",
                email: "rori@mail.com",
                username: "Rori",
            }
        };
    }

}
