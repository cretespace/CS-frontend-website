import api from "@/lib/axios";

export const login = (data) =>
  api.post("/auth/login", data).then((res) => res.data);
export const register = (data) =>
  api.post("/auth/register", data).then((res) => res.data);
export const logout = () => api.post("/auth/logout").then((res) => res.data);
