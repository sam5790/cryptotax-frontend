import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref("");
  const loading = ref(false);

  const addUser = (payload) => {
    user.value = payload.user;
    token.value = payload.token;
  };
  
  const logout = () => {
    user.value = null;
    token.value = "";
  };

  const setLoading = (val) => {
    loading.value = val;
  };

  return {
    user,
    token,
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
