import { useAuthStore } from "~/store/auth";

export const userLogin = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  try {
    auth.setLoading(true);
    const data = await $fetch("/login", {
      baseURL: BASE_URL,
      method: "POST",
      body: payload,
    });
    if (data?.success) {
      auth.addUser({ user: data?.customer, token: data?.token });
      return { data: data, error: null };
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
    auth.setLoading(false);
  }
};


export const createUser = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  auth.setLoading(true);
  try {
    const data = await $fetch("register", {
      baseURL: BASE_URL,
      method: "POST",
      body: payload,
    });
    if (data?.success) {
      return { data: data, error: null };
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
    auth.setLoading(false);
  }
};




