import { create } from "zustand";
import { User } from "@/types/auth.types";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  setAuth: (user: User) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setAuth: (user) => set({ isAuthenticated: true, user }),
  clearAuth: () => set({ isAuthenticated: false, user: null }),
}));

