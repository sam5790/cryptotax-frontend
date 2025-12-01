import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref("");
  const loading = ref(false);

  const addUser = (payload) => {
    user.value = payload.user;
    token.value = payload.token;
    console.log("token",token.value)
  };
  
  const logout = () => {
    user.value = null;
    token.value = "";
  };

  const setLoading = (val) => {
    console.log(loading.value)
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
  { persist: true, storage: "localStorage" }
);
