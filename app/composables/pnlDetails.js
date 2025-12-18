import { mainStore } from "~/store/mainstore";
import { useAuthStore } from "~/store/auth";

export const getAccounts = async () => {
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
      store.setTotalPnl(data.data);
      store.addTotalTransactions(data.meta);
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
export const getPnlDetails = async (payload) => {
  const store = mainStore();
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { token } = auth;
  try {
    const data = await $fetch(`/pnl/details`, {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      query: payload,
    });
    if (data?.success) {
      store.setPnl(data?.data);
      store.addTaxPagination(data.meta);
      return { data: data, error: null };
    } else {
      store.setPnl([]);
      store.addTaxPagination({});
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    store.setPnl([]);
    store.addTaxPagination({});
    return { data: null, error };
  } finally {
  }
};

export const getTransactions = async (payload) => {
  const store = mainStore();
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { token } = auth;
  try {
    const data = await $fetch(`/transactions`, {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      query: payload,
    });
    if (data?.success) {
      const transactions = data.data;
      const { currentPage, totalPages, totalCount, pageSize } = data.meta;
      store.setTransactions(transactions);
      store.addTotal(totalCount);
      store.addTransactionsPagination(data.meta);
      return {
        data: transactions,
        pagination: { currentPage, totalPages, totalCount, pageSize },
        error: null,
      };
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
  }
};
export const fileUpload = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { token } = auth;
  try {
    const data = await $fetch(`/${payload.exchange}`, {
      baseURL: BASE_URL,
      method: "POST",
      body: payload.formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data?.success) {
      return {
        data: data,
        error: null,
      };
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
  }
};
export const getWallet = async (payload) => {
  const store = mainStore();
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { token } = auth;
  try {
    const data = await $fetch(`/wallet/details`, {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      query: payload,
    });
    if (data?.success) {
      store.addWallet(data);
      return {
        data: data,
        error: null,
      };
    } else {
      store.addWallet([]);
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    store.addWallet([]);
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
  }
};
export const getTransactionsForExport = async (payload) => {

  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { token } = auth;
  try {
    const data = await $fetch(`/transactions`, {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      query: payload,
    });
    if (data?.success) {
      const transactions = data.data;
       return transactions;
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
  }
};