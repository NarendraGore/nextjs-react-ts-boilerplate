import { api } from "@/lib/axios";
import { LoginPayload } from "@/types/auth.types";

export const authService = {
  login: (data: LoginPayload) => api.post("/login", data),
  logout: () => api.post("/logout"),
  me: () => api.get("/me"),
};

