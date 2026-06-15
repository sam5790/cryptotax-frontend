import { mainStore } from "~/store/mainstore";
import { useAuthStore } from "~/store/auth";

export const getAccounts = async () => {
  const store = mainStore();
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { accessToken } = auth;
  try {
    const { data } = await useApi(`users/pnldetails`, {
      baseURL: BASE_URL,
      method: "GET",
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
    const { data } = await useApi(`users/pnl/details?sortOrder=desc`, {
      baseURL: BASE_URL,
      method: "GET",
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
  const { accessToken } = auth;
  try {
    const { data, error } = await useApi(`users/transaction`, {
      baseURL: BASE_URL,
      method: "GET",
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
      return { data: null, error: error };
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
  }
};

export const upload = async (payload) => {
  const formData = new FormData();
  payload.forEach((file) => formData.append("files", file));

  const BASE_URL = useRuntimeConfig().public.apiBase;
  const { accessToken } = useAuthStore();

  try {
    const { data } = await useApi(`/upload`, {
      baseURL: BASE_URL,
      method: "POST",
      body: formData,
    });

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const fileUpload = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = useAuthStore();
  const { accessToken } = auth;
  try {
    const { data, error } = await useApi(`/${payload.exchange}`, {
      baseURL: BASE_URL,
      method: "POST",
      body: { urls: payload.urls },
    });
    if (data?.success) {
      return {
        data: data,
        error: null,
      };
    } else {
      return { data: null, error };
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
    const { data } = await useApi(`users/wallet/details`, {
      baseURL: BASE_URL,
      method: "GET",
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

export const addMissingTransaction = async (payload) => {
  try {
    const { data } = await useApi(`/users/transaction`, {
      method: "POST",
      body: payload,
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
export const editTransactions = async (id, payload) => {
  try {
    const { data } = await useApi(`users/update/${id}`, {
      method: "PUT",
      body: payload,
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
export const getUploadedFiles = async (exchange) => {
  try {
    const { data } = await useApi(`/files`, {
      method: "GET",
      query: { exchange },
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
export const deleteFiles = async (exchange, files) => {
  try {
    const { data } = await useApi(`/files`, {
      method: "DELETE",
      body: { exchange: exchange, fileIds: files },
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
export const deleteExchangeAccount = async (id) => {
  try {
    const { data } = await useApi(`pnlsummary/${id}`, {
      method: "DELETE",
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
export const getSellRemaining = async (payload) => {
  try {
    const { data } = await useApi(`users/sell-remaining`, {
      method: "GET",
      query: payload,
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
export const recalculate = async (exchange) => {
  try {
    const { data } = await useApi(`/pnlsummary/recalculate/${exchange}`, {
      method: "POST",
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
