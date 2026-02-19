<template>
  <div class="flex items-center justify-center px-4 py-10 md:p-20">
    <div v-if="!showOTPCard" class="shadow-[0_0_25px_0] shadow-[#254BD34D] rounded-3xl p-6 md:p-16 w-full max-w-xl">
      <h2 class="text-[38px] md:text-4xl font-bold text-center justify-center flex mb-5">
        <div class="flex gap-3 flex-wrap">
          <div class="text-[#4aabab]">
            Welcome
            <CurvedLine />
          </div>
          Back
        </div>
      </h2>
      <div>
        <p class="text-center mb-16 text-gray-700 text-sm md:text-[22px]">
          Please enter your mobile number
        </p>
        <form id="loginPhone">
          <div class="my-4 relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="w-4 text-gray-500" width="16" height="16" viewBox="0 0 512 512" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M341.601,0H170.399c-29.292,0-53.121,23.828-53.121,53.121v405.756c0,29.292,23.83,53.123,53.121,53.123
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
    C309.425,468.106,308.973,467.654,308.973,467.118z" />
              </svg>
            </div>

            <input type="number" v-model="mobile"
              class="rounded-lg w-full pl-9 pr-3 py-2.5 border border-[#adadad] font-[Poppins]"
              placeholder="Enter your mobile number" minlength="10" required />
          </div>
          <div class="flex justify-center mt-6">
            <button v-if="!loading" class="bg-[#4AABAB] rounded-full text-white py-2 px-8 font-medium" @click="login">
              Log In
            </button>

            <button v-else type="button"
              class="bg-[#4AABAB] hover:bg-teal-600 text-white font-medium py-2 px-8 rounded-full flex items-center gap-2 disabled:opacity-60"
              disabled>
              <span
                class="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>

              Logging in...
            </button>
          </div>
        </form>
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
        <button class="rounded-lg border px-3 py-2 flex" @click="$router.push('/login/mail')">
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
    <div v-else class="shadow-[0_0_25px_0] shadow-[#254BD34D] rounded-3xl p-6 md:p-16 w-full max-w-xl">
      <h2 class="text-[38px] md:text-4xl font-bold text-center mb-5">
        <span class="#4aabab underline-text">Welcome</span> Back
      </h2>
      <div>
        <p class="text-center mb-16 text-gray-700 text-sm md:text-[22px]">
          Enter 6 digit OTP sent to <strong>{{ mobile }}</strong>
        </p>

        <div class="my-4 flex gap-2 items-center justify-center">
          <input type="number" v-model="otp" placeholder="Enter 6 digit OTP"
            class="rounded-lg w-full border p-2.5 border-[#adadad]" />
        </div>
        <div class="flex justify-center mt-6">
          <button v-if="!loading" class="bg-[#4AABAB] rounded-full text-white py-2 px-8" @click="verifyOTP">
            Verify OTP
          </button>
          <button v-else type="button"
            class="bg-[#4AABAB] hover:bg-teal-600 text-white font-medium py-2 px-8 rounded-full flex items-center gap-2 disabled:opacity-60"
            disabled>
            <span
              class="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>

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
        <button class="rounded-lg border px-3 py-2 flex" @click="$router.push('/login/mail')">
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
  const form = document.getElementById("loginPhone")
  if (!form.reportValidity()) {
    return
  }
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
  const authStore = useAuthStore();
  const confirmOTP = otpConfirmation.value;
  const code = otp.value;
  confirmOTP.confirm(code).then(async (result) => {
    const token = await auth.currentUser.getIdToken();

    if (!user.value) {
      const { data } = await useFetch(
        BASE_URL + `/auth/firebase/validate`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.value?.success) {
        authStore.addUser({ user: data?.value?.data.user,
           accessToken: data?.value?.data.accessToken,
            refreshToken: data?.value?.data.refreshToken });
        router.push("/account");
        loading.value = false;
      } else {
        loading.value = false;
        console.error(data?.value.error);
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
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin .6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
