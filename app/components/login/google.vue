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
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const token = await auth.currentUser.getIdToken();
      const googleUser = result.user;
      if (!user.value) {
        const { data, status, error } = await useFetch(
          BASE_URL + "/googlevalidate",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (status.value === "success") {
          authData.addUser({
            user: data?.value?.data?.user?.name,
            token: data?.value?.data?.token,
          });
          router.push("/account");
        } else {
          console.error(error?.value);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
