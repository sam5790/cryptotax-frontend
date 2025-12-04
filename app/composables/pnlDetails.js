import { mainStore } from "~/store/mainstore";
import { useAuthStore } from "~/store/auth";


export const getpnlDetails = async () => {
  const store = mainStore();
  const BASE_URL = useRuntimeConfig().public.apiBase;
   const auth = useAuthStore();
  const { token } = auth;
  try {
    const data = await $fetch(`/pnldetails`, {
      baseURL: BASE_URL,
      method: "GET",
       headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("data.data",data.data)
    if (data?.success) {
      store.setTotalPnl(data.data)
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