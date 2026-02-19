<template>
  <button class="rounded-lg border px-3 py-2 flex" @click="loginWithGoogle">
    <img src="/google.svg" class="h-6 mr-2" />
    <span>Sign in with Google</span>
  </button>
</template>

<script setup>
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useAuthStore } from "~/store/auth";
const provider = new GoogleAuthProvider();
const BASE_URL = useRuntimeConfig().public.apiBase;
const authData = useAuthStore();
const toast = useToast();
const { loading, user, token } = storeToRefs(authData);
const auth = getAuth();
const router = useRouter();
const loginWithGoogle = () => {
  const authStore = useAuthStore();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const token = await auth.currentUser.getIdToken();
      const googleUser = result.user;
      if (!user.value) {
        const { data } = await useApi(
          BASE_URL + "/auth/firebase/validate",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("token", token);
        if (data?.data) {
          authStore.addUser({ user: data?.data?.user, accessToken: data?.data?.accessToken, refreshToken: data?.data?.refreshToken });
          router.push("/account");
        } else {
          console.error(data?.error);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
