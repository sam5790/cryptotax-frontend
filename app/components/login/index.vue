<template>
  <div class="flex items-center justify-center px-4 py-10 md:p-20">
    <div
      v-if="!showOTPCard"
      class="shadow-[0_0_25px_0] shadow-[#254BD34D] rounded-3xl p-6 md:p-16 w-full max-w-xl"
    >
      <h2 class="text-[38px] md:text-4xl font-bold text-center mb-5">
        <span class="text-teal-500 underline-text">Welcome</span> Back
      </h2>
<<<<<<< HEAD
      <div>
        <p class="text-center mb-16 text-gray-700 text-sm md:text-[22px]">
          Please enter your mobile number
        </p>
        <div class="my-4 relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <svg
              class="w-4 text-gray-500"
              width="16"
              height="16"
              viewBox="0 0 512 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M341.601,0H170.399c-29.292,0-53.121,23.828-53.121,53.121v405.756c0,29.292,23.83,53.123,53.121,53.123
    h171.202c29.292,0,53.121-23.83,53.121-53.119V53.121C394.722,23.828,370.893,0,341.601,0z M234.91,453.434
    c0-0.536,0.452-0.988,0.988-0.988H276.1c0.536,0,0.988,0.452,0.988,0.988v13.684c0,0.536-0.452,0.988-0.988,0.988h-40.202
    c-0.536,0-0.988-0.452-0.988-0.988V453.434z M277.088,429.684c0,0.536-0.452,0.988-0.988,0.988h-40.202
    c-0.536,0-0.988-0.452-0.988-0.988V416c0-0.534,0.452-0.984,0.988-0.984H276.1c0.536,0,0.988,0.45,0.988,0.984V429.684z
    M277.088,392.25c0,0.545-0.443,0.988-0.988,0.988h-40.202c-0.546,0-0.988-0.442-0.988-0.988v-13.68
    c0-0.536,0.452-0.988,0.988-0.988H276.1c0.536,0,0.988,0.452,0.988,0.988V392.25z M255.999,351.476
    c-13.461,0-24.414-10.951-24.414-24.412c0-13.462,10.953-24.416,24.414-24.416c13.463,0,24.416,10.953,24.416,24.416
    C280.415,340.524,269.462,351.476,255.999,351.476z M170.397,36.304h171.202c10.004,0,18.142,8.137,18.142,18.144v225.136H152.257
    V54.449C152.257,44.441,160.395,36.304,170.397,36.304z M211.35,315.983v22.162h-43.742l-13.906-22.162H211.35z M203.025,429.684
    c0,0.536-0.452,0.988-0.986,0.988h-40.204c-0.534,0-0.986-0.452-0.986-0.988V416c0-0.542,0.443-0.984,0.986-0.984h40.204
    c0.544,0,0.986,0.443,0.986,0.984V429.684z M203.025,392.25c0,0.545-0.442,0.988-0.986,0.988h-40.204
    c-0.543,0-0.986-0.442-0.986-0.988v-13.68c0-0.536,0.452-0.988,0.986-0.988h40.204c0.534,0,0.986,0.452,0.986,0.988V392.25z
    M160.849,467.118v-13.684c0-0.536,0.452-0.988,0.986-0.988h40.204c0.534,0,0.986,0.452,0.986,0.988v13.684
    c0,0.536-0.452,0.988-0.986,0.988h-40.204C161.302,468.106,160.849,467.654,160.849,467.118z M358.295,315.983l-13.905,22.162
    h-43.742v-22.162H358.295z M351.151,429.684c0,0.536-0.452,0.988-0.988,0.988h-40.202c-0.536,0-0.988-0.452-0.988-0.988V416
    c0-0.542,0.443-0.984,0.988-0.984h40.202c0.546,0,0.988,0.443,0.988,0.984V429.684z M351.151,392.25
    c0,0.545-0.442,0.988-0.988,0.988h-40.202c-0.545,0-0.988-0.442-0.988-0.988v-13.68c0-0.536,0.452-0.988,0.988-0.988h40.202
    c0.536,0,0.988,0.452,0.988,0.988V392.25z M308.973,467.118v-13.684c0-0.536,0.452-0.988,0.988-0.988h40.202
    c0.536,0,0.988,0.452,0.988,0.988v13.684c0,0.536-0.452,0.988-0.988,0.988h-40.202
    C309.425,468.106,308.973,467.654,308.973,467.118z"
              />
            </svg>
          </div>
=======
      <p class="text-center mb-10 text-gray-700 text-sm md:text-base">
        Please enter your details
      </p>
>>>>>>> 20118253b655f49eb7c30355140e30f91a0ded11

          <input
            type="number"
            v-model="mobile"
            class="rounded-lg w-full pl-9 pr-3 py-2.5 border border-[#adadad]"
            placeholder="Enter your mobile number"
          />
        </div>
        <div class="flex justify-center mt-6">
          <button
            v-if="!loading"
            class="bg-teal-500 rounded-full text-white py-2 px-8 font-medium"
            @click="login"
          >
            Log In
          </button>

<<<<<<< HEAD
          <button
            v-else
            type="button"
            class="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-8 rounded-full flex items-center gap-2 disabled:opacity-60"
            disabled
          >
            <span
              class="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"
            ></span>

            Logging in...
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center gap-5 mt-5">
        <span class="line-with-dots"></span>
        <p class="whitespace-nowrap">or continue with</p>
        <span class="line-with-dots"></span>
      </div>

      <div class="flex justify-center items-center my-3">
        <LoginGoogle />
      </div>
      <div class="flex justify-center items-center my-3">
        <button
          class="rounded-lg border px-3 py-2 flex"
          @click="$router.push('/login/mail')"
        >
          <img src="/email.svg" class="h-6 mr-2" />

          <span>Sign In With Email</span>
        </button>
      </div>

      <p class="text-center mt-6 text-[16px] text-gray-500">
=======
        <input type="text" v-model="email" class="rounded-md w-full pl-9 pr-3 py-2.5 border border-gray-500"
          placeholder="Enter your email" />
      </div>

      <div class="mb-4 relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name="mdi:key" class="w-4 h-6 text-gray-600" />
        </div>

        <input id="password" :type="showPassword ? 'text' : 'password'" v-model="password"
          placeholder="Enter your password" class="rounded-md w-full pl-9 pr-10 py-2.5 border border-gray-500" />

        <button type="button" @click="showPassword = !showPassword"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
          <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
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

      <p class="text-gray-500 text-sm mb-6 underline text-left">Forgot your password?</p>

      <div class="flex justify-center mt-6">
        <button class="bg-teal-500 rounded-full text-white py-2 px-6 w-32 flex justify-center" @click="login"
          :disabled="isLoading">
          <span v-if="!isLoading">Log In</span>
          <div v-else class="loader"></div>
        </button>
      </div>

      <div class="flex items-center justify-center gap-3 mt-5">
        <img src="/divider.svg" class="divider">
        <p class=" whitespace-nowrap">or continue with</p>
        <img src="/divider.svg" class="divider">
      </div>

      <div class="mt-6 w-full flex justify-center">
        <GoogleSignInButton class=" max-w-xs" @success="handleLoginSuccess" @error="handleLoginError" />
      </div>

      <p class="text-center mt-6 text-xs text-gray-500">
>>>>>>> 20118253b655f49eb7c30355140e30f91a0ded11
        Don’t have an account?
        <button @click="router.push('/register')">
          <u class="font-semibold">Sign Up</u>
        </button>
      </p>
    </div>
    <div
      v-else
      class="shadow-[0_0_25px_0] shadow-[#254BD34D] rounded-3xl p-6 md:p-16 w-full max-w-xl"
    >
      <h2 class="text-[38px] md:text-4xl font-bold text-center mb-5">
        <span class="text-teal-500 underline-text">Welcome</span> Back
      </h2>
      <div>
        <p class="text-center mb-16 text-gray-700 text-sm md:text-[22px]">
          Enter 6 digit OTP sent to <strong>{{ mobile }}</strong>
        </p>

        <div class="my-4 flex gap-2 items-center justify-center">
          <input
            type="number"
            v-model="otp"
            placeholder="Enter 6 digit OTP"
            class="rounded-lg w-full border p-2.5 border-[#adadad]"
          />
        </div>
        <div class="flex justify-center mt-6">
          <button
            v-if="!loading"
            class="bg-teal-500 rounded-full text-white py-2 px-8"
            @click="verifyOTP"
          >
            Verify OTP
          </button>
          <button
            v-else
            type="button"
            class="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-8 rounded-full flex items-center gap-2 disabled:opacity-60"
            disabled
          >
            <span
              class="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"
            ></span>

            Verifying...
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center gap-5 mt-5">
        <span class="line-with-dots"></span>
        <p class="whitespace-nowrap">or continue with</p>
        <span class="line-with-dots"></span>
      </div>

      <div class="flex justify-center items-center my-3">
        <LoginGoogle />
      </div>
      <div class="flex justify-center items-center my-3">
        <button
          class="rounded-lg border px-3 py-2 flex"
          @click="$router.push('/login/mail')"
        >
          <img src="/email.svg" class="h-6 mr-2" />

          <span>Sign In With Email</span>
        </button>
      </div>

      <p class="text-center mt-6 text-[16px] text-gray-500">
        Don’t have an account?
        <button @click="router.push('/register')">
          <u class="font-semibold">Sign Up</u>
        </button>
      </p>
    </div>
  </div>
  <div id="recaptcha-container"></div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
import {
<<<<<<< HEAD
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
} from "firebase/auth";
const BASE_URL = useRuntimeConfig().public.apiBase;
const authData = useAuthStore();
const toast = useToast();
const loading = ref(false);
const { user, token } = storeToRefs(authData);
const mobile = ref(null);
const otpConfirmation = ref(null);
const showOTPCard = ref(false);
const router = useRouter();
const auth = getAuth();
const otp = ref(null);
const counter = ref(null);
const otpLoading = ref(false);
const timer = ref(null);
let recaptchaVerifier = null;

const login = async () => {
  loading.value = true;
  if (!recaptchaVerifier) {
    recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: (response) => {
        console.log("Recaptcha resolved:", response);
      },
      "expired-callback": () => {
        console.log("Recaptcha expired");
      },
    });
=======
  GoogleSignInButton,
} from "vue3-google-signin";

const toast = useToast()


const authData = useAuthStore()

const { loading, user, token } = storeToRefs(authData)

const email = ref("")
const password = ref("")
const showPassword = ref(false);
const router = useRouter();

const isLoading = ref(false)


useHead({
  script: [
    {
      src: "https://accounts.google.com/gsi/client",
      async: true,
      defer: true
    }
  ]
});

// const login = async () => {


//   isLoading.value = true

//   const payload = {
//     email: email.value,
//     password: password.value
//   }

//   const { data } = await userLogin(payload);
//   console.log(data.data)
//   if (data?.success) {
//     authData.addUser({
//       user: data.data.user.name,
//       token: data.data.token,
//     });

//     isLoading.value = false
//     router.push("/dashboard");
//   }
// }

const login = async () => {
  if (!email.value || !password.value) {
    toast.error({ message: "Email and password are required", position: "topCenter"})
    return
  }

  isLoading.value = true

  try {
    const payload = {
      email: email.value,
      password: password.value
    }

    const { data } = await userLogin(payload)

    if (data?.success) {
      toast.success({ message: "Login successful", position: "topCenter" })

      authData.addUser({
        user: data.data.user.name,
        token: data.data.token,
      })

      router.push("/dashboard")
    } else {
      toast.error({ message: "Invalid login credentials", position: "topCenter" })
    }

  } catch (err) {
    toast.error({ message: "Something went wrong. Try again.", position: "topCenter"})
    console.error(err)
  } finally {
    isLoading.value = false
>>>>>>> 20118253b655f49eb7c30355140e30f91a0ded11
  }
  const phoneNumber = `+91 ${mobile.value}`;
  signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      otpConfirmation.value = confirmationResult;
      showOTPCard.value = true;
      counter.value = 30;
      // timer = setInterval(() => {
      //   if (counter.value > 0) {
      //     counter.value--;
      //   } else {
      //     clearInterval(timer);
      //     timer = null;
      //   }
      // }, 1000);
      otp.value = "";
      loading.value = false;
    })
    .catch((error) => {
      console.error("Error sending SMS:", error);
      loading.value = false;
    });
};

const verifyOTP = () => {
  loading.value = true;
  const confirmOTP = otpConfirmation.value;
  const code = otp.value;
  confirmOTP.confirm(code).then(async (result) => {
    const token = await auth.currentUser.getIdToken();

    if (!user.value) {
      const { data, status, error } = await useFetch(
        BASE_URL + `/validate/+91${mobile.value}`,
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
          user: data?.value?.data?.user?.name || data?.value?.data?.user?.phone,
          token: data?.value?.data?.token,
        });
        router.push("/dashboard");
        loading.value = false;
      } else {
        loading.value = false;
        console.error(error?.value);
      }
    }
  });
};
</script>

<style scoped>
.underline-text {
  position: relative;
  display: inline-block;
}
.line-with-dots {
  width: 100px;
  height: 1px;
  background-color: #3d3d3d;
  position: relative;
  margin: auto;
}

.line-with-dots::before,
.line-with-dots::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #3d3d3d;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.line-with-dots::before {
  left: -3px;
}

.line-with-dots::after {
  right: -3px;
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
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"].no-arrows {
  padding-left: 2.25rem;
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

.loader {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin .6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
