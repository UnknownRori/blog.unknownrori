import type AuthUser from "@/models/AuthUser";

export default interface AuthProvider {
    login(email: string, password: string): Promise<boolean>;
    logout(): Promise<boolean>;
    authCheck(): Promise<boolean>;
    user(): AuthUser | undefined,
}
