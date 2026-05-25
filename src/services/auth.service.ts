import { api } from "@/lib/axios";
import { AuthResponse, LoginPayload, User } from "@/types/auth.types";

export const authService = {
  login: (data: LoginPayload) =>
    api.post<AuthResponse>("/auth/login", data),
  logout: () => api.post<void>("/auth/logout"),
  me: () => api.get<User>("/auth/me"),
};

