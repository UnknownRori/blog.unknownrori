import { createContext, type Context } from "react";

import type AuthProvider from "@/interface/provider/AuthProvider";
import DummyAuthProvider from "@/infrastructure/provider/DummyAuthProvider";

const AuthContext: Context<AuthProvider> = createContext(new DummyAuthProvider());

export default AuthContext;
