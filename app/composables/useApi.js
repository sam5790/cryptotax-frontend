import { useAuthStore } from "~/store/auth";


export const useApi = async (
  endpoint,
  options = {},
) => {
  const config = useRuntimeConfig();
  const { accessToken, addUser, refreshToken } = useAuthStore();

  const { onLoading, ...fetchOptions } = options;
  const toast = useToast();

  if (onLoading) {
    onLoading(true);
  }

  const defaults = {
    baseURL: config.public.apiBase,
    headers: {
      Authorization: `Bearer ${accessToken}` || "",
    },
  };

  const params = {
    ...defaults,
    ...fetchOptions,
    headers: {
      ...defaults.headers,
      ...fetchOptions.headers,
    },
  };

  try {
    const response = await $fetch(endpoint, params);

    if (response?.success === false) {
      throw new Error(response.message || "API request unsuccessful");
    }

    return { data: response, error: null };
  } catch (error) {
    if (
      error?.data?.statusCode === 401 &&
      error?.data?.message === "Unauthorized"
    ) {
      try {
        const updateToken = await $fetch(
          `${config.public.apiBase}/auth/refresh`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );

        addUser(updateToken);
        const newAccessToken = updateToken?.accessToken;

        if (newAccessToken) {
          params.headers.Authorization = `Bearer ${newAccessToken}`;
          const response = await $fetch(endpoint, params);

          if (response?.success === false) {
            throw new Error(response.message || "API request unsuccessful");
          }

          return { data: response, error: null };
        }
      } catch (error) {
        console.log(error);
      }
    }

    console.error(`[useApi] Error fetching ${endpoint}:`, error);

    let message = "Something went wrong";

    if (error?.response?._data?.message) {
      message = error.response._data.message;
    } else if (error?.message) {
      message = error.message;
    }

    return { data: null, error: message };
  } finally {
    if (onLoading) {
      onLoading(false);
    }
  }
};