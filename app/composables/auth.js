import { useAuthStore } from "~/store/auth";

export const userLogin = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  try {
    auth.setLoading(true);
    const data = await $fetch("/auth/login", {
      baseURL: BASE_URL,
      method: "POST",
      body: payload,
    });
    if (data?.success) {
      console.log("Login successful:", data.data.user);
      auth.addUser({ user: data?.data?.user, accessToken: data?.data?.accessToken, refreshToken: data?.data?.refreshToken });
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
    const data = await $fetch("/users/register", {
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

export const forgetPassword = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  try {
    const data = await $fetch("/forgot-password", {
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
  }
};

export const forgetResetPassword = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  try {
    const data = await $fetch("/reset-password", {
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
  }
};

export const tokenVerification = async () => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { token } = auth;
  try {
    const data = await $fetch("/verifytoken", {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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
  }
};
