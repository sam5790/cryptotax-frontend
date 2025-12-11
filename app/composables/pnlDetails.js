import { mainStore } from "~/store/mainstore";
import { useAuthStore } from "~/store/auth";


export const getPnlDetails = async () => {
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

export const getTransactions = async (page = 1) => {
  const store = mainStore();
  const BASE_URL = useRuntimeConfig().public.apiBase;
   const auth = useAuthStore();
  const { token } = auth;
  try {
    const data = await $fetch(`/transactions?page=${page}`, {
      baseURL: BASE_URL,
      method: "GET",
       headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (data?.success) {
      const transactions=data.data
      const { currentPage,totalPages,totalCount,pageSize }=data.meta
      store.setTransactions(transactions)
      store.addTotal(totalCount)

      return { data: transactions, pagination:{currentPage,totalPages,totalCount,pageSize }, error: null };
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
  }
};


