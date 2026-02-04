import { useAuthStore } from "@/store/auth.store";

export const useAuth = () => {
  const { isAuthenticated, user, setAuth, clearAuth } =
    useAuthStore();

  return {
    isAuthenticated,
    user,
    loginSuccess: setAuth,
    logout: clearAuth,
  };
};

