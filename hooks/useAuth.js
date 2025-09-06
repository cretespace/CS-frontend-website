import { useState, useEffect } from "react";
import {
  login as loginApi,
  register as registerApi,
  logout as logoutApi,
} from "@/services/authService";
import { getUser } from "@/services/userService";
import { useAuthStore } from "@/store/authStore";
import { removeToken, saveToken } from "@/lib/auth";

export default function useAuth() {
  const { user, setUser, clearUser } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const data = await loginApi(credentials);
      saveToken(data.token);
      setUser(data.user);
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const data = await registerApi(userData);
      saveToken(data.token);
      setUser(data.user);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await logoutApi();
    removeToken();
    clearUser();
  };

  const fetchUser = async () => {
    try {
      const data = await getUser();
      setUser(data);
    } catch {
      clearUser();
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, login, register, logout };
}
