<template>
  <div class="flex items-center justify-center bg-gray px-4 py-10 md:p-10 min-h-screen ">
    <div class="shadow-2xl rounded-2xl p-6 md:p-16 w-full max-w-lg border-gray-200">

      <h2 class="text-3xl md:text-4xl font-semibold text-center mb-5">
        <span class="text-teal-500 underline-text">Welcome</span> Back
      </h2>
      <p class="text-center mb-10 text-gray-700 text-sm md:text-base">
        Please enter your email & address
      </p>

      <div class="mb-4 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-4 text-gray-500" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
          </svg>
        </div>

        <input
          type="text"
          v-model="email"
          class="rounded-md w-full pl-9 pr-3 py-2.5 border border-gray-500"
          placeholder="Enter your email"
        />
      </div>

      <div class="mb-4 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-5 text-gray-400" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
          </svg>
        </div>

        <input
          id="password"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Enter your password"
          class="rounded-md w-full pl-9 pr-10 py-2.5 border border-gray-500"
        />

        <button
          type="button"
          @click="showPassword = !showPassword"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
        >
          <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>

          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.27-2.943-9.543-7a10.05 10.05 0 011.66-3.04M6.5 6.5l11 11"/>
          </svg>
        </button>
      </div>

      <p class="text-gray-500 text-sm mb-6 underline text-left">Forgot your password?</p>

      <div class="flex justify-center mt-6">
        <button
          class="bg-teal-500 rounded-full text-white py-2 px-6 w-32"
          @click="login"
        >
          Log In
        </button>
      </div>

      <div class="flex items-center justify-center gap-3">
        <img src="/divider.svg" class="divider">
        <p class=" whitespace-nowrap">or continue with</p>
        <img src="/divider.svg" class="divider">
      </div>

      <div class="mt-6 w-full flex justify-center">
        <GoogleSignInButton
          class=" max-w-xs"
          @success="handleLoginSuccess"
          @error="handleLoginError"
        />
      </div>

      <p class="text-center mt-6 text-sm text-gray-500">
        Don’t have an account?
        <u @click="router.push('/register')" class="font-bold">SignUp</u>
      </p>

    </div>
  </div>

  <!-- <Footer /> -->
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
import {
  GoogleSignInButton,
} from "vue3-google-signin";

const authData = useAuthStore()

const { loading, user, token } = storeToRefs(authData)

const email = ref("")
const password = ref("")
const showPassword = ref(false);
const router = useRouter();

const login = async () => {

  const payload = {
    email: email.value,
    password: password.value
  }

  const { data } = await userLogin(payload);
  if (data?.success) {
    authData.addUser({
      user: data.customer,
      token: data.token,
    });

    router.push("/dashboard");
  }
}


const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

const passwordRules = [
  (v) => !!v || "Password is required",
  (v) => v.length >= 6 || "Password must be at least 6 characters",
];


const handleLoginSuccess = (response) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

const handleLoginError = () => {
  console.error("Login failed");
};

</script>


<style scoped>
.underline-text {
  position: relative;
  display: inline-block;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: -0.3em;
  left: -0.6em;
  width: 120%;
  height: 0.6em;
  background-image: url("underline-new-user.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  pointer-events: none;
}

@media (max-width: 768px) {
  .underline-text::after {
    bottom: -0.15em;
    height: 0.4em;
  }
}

@media (max-width: 480px) {
  .underline-text::after {
    bottom: -0.1em;
    height: 0.3em;
  }
}


.divider {
  margin-top: 6px;
  width: 100%;
  max-width: 170px;
}

@media (max-width: 768px) {
  .divider {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .divider {
    width: 60px;
  }
}
</style>
