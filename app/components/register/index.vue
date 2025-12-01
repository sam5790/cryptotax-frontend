<template>
  <div class="min-h-screen flex items-center justify-center bg-gray md:p-10">

    <div class="shadow-2xl rounded-2xl p-16 w-full max-w-2xl border-gray-200">
      <h2 class="text-4xl font-semibold text-center mb-5">New <span class="text-teal-500 underline-text">User!</span>
      </h2>
      <p class="text-center mb-14 text-gray-700">Please enter your details to create a new account</p>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <input type="text" v-model="firstName" class="rounded-md w-full ps-4 pe-3 py-2.5  border border-gray-500 "
            placeholder="First Name">
        </div>
        <div>
          <input type="text" v-model="lastName" class="rounded-md w-full ps-4 pe-3 py-2.5 border border-gray-500"
            placeholder="Last Name">
        </div>
        <div>
          <input type="text" v-model="email" class="rounded-md w-full ps-4 pe-3 py-2.5 border border-gray-500"
            placeholder="Email">
        </div>
        <div>
          <input type="text" v-model="phoneNumber" class="rounded-md w-full ps-4 pe-3 py-2.5 border border-gray-500"
            placeholder="Phone Number">
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
        <div class="mb-4 relative">

          <div class="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
            </svg>
          </div>

          <input id="password" :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword"
            placeholder="Enter your password" class="rounded-md w-full ps-9 pe-3 py-2.5 border border-gray-500">

          <button type="button" @click="showConfirmPassword = !showConfirmPassword"
            class="absolute inset-y-0 end-0 flex items-center pr-3 text-gray-500">
            <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
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
      </div>
      <div class="flex mt-3 ms-2 text-xs">
        <input type="checkbox" value="" class="w-4 h-4 border rounded-xs mt-1">
        <label class=" ms-2 mt-1"><span>I agree to the</span> <b><u>terms</u></b> & <b><u>privacy
              policy.</u></b></label>
      </div>
      <div class="flex justify-center mt-10  items-center">
        <button class="flex justify-center items-center  bg-teal-500 rounded-full text-white py-2 px-4 mb-6 w-32"
          @click="register">
          SIGN UP
        </button>
      </div>
      <div class=" flex">
        <img src="/divider.svg" class="divider">
        <p class="ml-3 mr-3">or continue with</p>
        <img src="/divider.svg" class="divider">
      </div>
      <div class="flex justify-center items-center mt-6">
        <button class="rounded-md border p-2 flex" @click="loginWithGoogle"><img src="/google.svg"
            class="h-6 mr-2"><span>Sign In With Google</span></button>
      </div>
      <p class="text-body text-center mt-6 text-sm text-gray-500">Have an account? <u
          @click="router.push('/login')"><b>LogIn Now</b></u></p>
    </div>

  </div>
  <Footer />
</template>

<script setup>

import { ref } from "vue";
import { signInWithPopup, signOut } from "firebase/auth";

import { createUser } from "~/composables/auth";

const { $auth, $provider } = useNuxtApp();

const firstName = ref("")
const lastName = ref("")
const email = ref("")
const phoneNumber = ref("")
const password = ref("")
const confirmPassword = ref("")
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const user = ref(null);
const router = useRouter()
const toast = useToast()
const register = async () => {
  const payload = {
    name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    phonenumber: phoneNumber.value,
    password: password.value,
  }

  const { data } = await createUser(payload)
  if (data?.success) {
    router.push('/login')
  }
}
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

<style scoped>
.underline-text {
  position: relative;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: -20px;
  width: 120px;
  height: 30px;
  background-image: url("underline-new-user.png");
  background-size: cover;
}

.divider {
  margin-top: 6px;
  width: 200px
}
</style>