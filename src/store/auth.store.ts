import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;

}
interface AuthState {
  isAuthenticated: boolean;
  user: User |null;
  setAuth: (user: User) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setAuth: (user) => set({ isAuthenticated: true, user }),
  clearAuth: () => set({ isAuthenticated: false, user: null }),
}));

