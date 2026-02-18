import { mainStore } from "~/store/mainstore";
import { useAuthStore } from "~/store/auth";

export const getAccounts = async () => {
  const store = mainStore();
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { accessToken } = auth;
  try {
    const {data} = await useApi(`users/pnldetails`, {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
  const { accessToken } = auth;
  try {
    const {data} = await useApi(`users/pnl/details`, {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      query: payload,
    });
    if (data?.success) {
      console.log("pnl details data",data.meta)
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
  const { accessToken } = auth;
  try {
    const {data} = await useApi(`users/transaction`, {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      query: payload,
    });
    if (data?.success) {
      console.log("data",data)
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

export const upload = async (payload) => {
  const formData = new FormData()
  payload.forEach(file => formData.append("files", file))

  const BASE_URL = useRuntimeConfig().public.apiBase
  const { accessToken } = useAuthStore()

  try {
    const { data } = await useApi(`/upload`, {
      baseURL: BASE_URL,
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
};


export const fileUpload = async (payload) => {
  console.log("in api files",payload)
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { accessToken } = auth;
  try {
    const data = await useApi(`/${payload.exchange}`, {
      baseURL: BASE_URL,
      method: "POST",
      body: payload.formData,
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
  const { accessToken } = auth;
  try {
    const {data} = await useApi(`users/wallet/details`, {
      baseURL: BASE_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
