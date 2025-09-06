import api from "@/lib/axios";

export const getUser = () => api.get("/users/me").then((res) => res.data);
export const updateUser = (data) =>
  api.put("/users/me", data).then((res) => res.data);
