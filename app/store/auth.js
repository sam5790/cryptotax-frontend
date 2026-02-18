import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const accessToken = ref("");
  const refreshToken = ref("");
  const loading = ref(false);

  const addUser = (payload) => {
    user.value = payload.user;
    accessToken.value = payload.accessToken;
    refreshToken.value = payload.refreshToken;
    console.log("in store accessToken",accessToken.value)
    console.log("in store refreshToken",refreshToken.value)
  };
  
  const logout = () => {
    user.value = null;
    accessToken.value = "";
  };

  const setLoading = (val) => {
    loading.value = val;
  };

  return {
    user,
    accessToken,
    refreshToken,
    loading,
    addUser,
    logout,
    setLoading
  };
},
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
);
