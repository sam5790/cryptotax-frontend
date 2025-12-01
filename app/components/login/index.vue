<template>
  <div class=" flex items-center justify-center bg-gray md:p-10">

    <div class="shadow-2xl rounded-2xl p-16 w-full max-w-2xl border-gray-200">
      <h2 class="text-4xl font-semibold text-center mb-5"><span class="text-teal-500 underline-text">Welcome</span> back
      </h2>
      <p class="text-center mb-14 text-gray-700">Please enter your email & address</p>



      <div class="mb-4 relative">
        <div class="absolute inset-y-5  flex items-center ps-3">
          <svg class="w-4" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
          </svg>
        </div>
        <input type="text" v-model="email" class="rounded-md w-full ps-9 pe-3 py-2.5  border border-gray-500 "
          placeholder="Enter your email" :rules="emailRules">
      </div>

      <div class="mb-4 relative">

        <div class="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
          </svg>
        </div>


        <input id="password" :type="showPassword ? 'text' : 'password'" v-model="password"
          placeholder="Enter your password" class="rounded-md w-full ps-9 pe-3 py-2.5 border border-gray-500">

        <button type="button" @click="showPassword = !showPassword"
          class="absolute inset-y-0 end-0 flex items-center pr-3 text-gray-500">
          <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-8" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.27-2.943-9.543-7a10.05 10.05 0 011.66-3.04M6.5 6.5l11 11" />
          </svg>
        </button>
      </div>

      <p class=" ml-1 text-gray-500 text-sm">
        <u> Forgot your password? </u>
      </p>
      <div class="flex justify-center mt-10  items-center">
        <button class="flex justify-center items-center  bg-teal-500 rounded-full text-white py-2 px-4  mb-6 w-32"
          @click="login">
          Log In
        </button>
      </div>
      <div class=" flex justify-center items-center gap-3">
        <img src="/divider.svg" class="divider">
        <p class="ml-3 mr-3">or continue with</p>
        <img src="/divider.svg" class="divider">
      </div>
      <div class="flex justify-center items-center mt-6">

        <GoogleLoginButton :verify-on-server="true" :options="{ theme: 'filled_blue', size: 'large' }"
          @success="onSuccess" @verified="onVerified" @error="onError" />
        <!-- <button class="rounded-md border p-2 flex"  ><img src="/google.svg"
            class="h-6 mr-2"><span>Sign In With Google</span></button> -->
      </div>
      <p class="text-body text-center mt-6 text-sm text-gray-500">Dont have an account? <u
          @click="router.push('/register')"><b>SignUp</b></u></p>
    </div>

  </div>

  <Footer />
</template>

<style scoped>
.underline-text {
  position: relative;
  color: #4aabab;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: -25px;
  width: 200px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

.divider {
  margin-top: 4px;
  width: 180px
}
</style>


<script setup>
import { ref } from "vue";
import { userLogin } from "~/composables/auth";

import { useAuthStore } from "~/store/auth";


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

// eslint-disable-next-line no-console
const onSuccess = (e) => {
  console.log('success:', e.claims, e.credential.slice(0, 20) + '…')
}
// eslint-disable-next-line no-console
const onVerified = (data) => {
  console.log('verified:', data)
}
// eslint-disable-next-line no-console
const onError = (err) => {
  console.error('error:', err)
}

const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

const passwordRules = [
  (v) => !!v || "Password is required",
  (v) => v.length >= 6 || "Password must be at least 6 characters",
];

// import { signInWithPopup, signOut } from "firebase/auth";

// const { $auth, $provider } = useNuxtApp(); 

// const user = ref(null);

// const loginWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup($auth, $provider);
//     user.value = result.user;
//     console.log("User Info:", result.user);
//   } catch (error) {
//     console.error("Login Error:", error);
//   }
// };

// const logout = async () => {
//   await signOut($auth);
//   user.value = null;
// };


</script>
