<template>
    <div class="flex items-center justify-center px-4 py-10 md:p-20">
      <div
        class="shadow-[0_0_25px_0] shadow-[#254BD34D] rounded-3xl p-6 md:p-16 w-full max-w-xl"
      >
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
          <p class="text-center mb-10 text-gray-700 text-sm md:text-[22px]">
            Please enter your email & password
          </p>

          <form id="loginForm">
          <div class="my-4 relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                  fill="#929292"
                />
              </svg>
            </div>

            <input
              type="email"
              v-model="email"
              class="rounded-md w-full pl-10 pr-3 py-2.5 border border-[#adadad]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="mb-4 relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                width="20"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.55089e-07 6.00234C-0.000513962 4.6811 0.435095 3.39664 1.23922 2.34829C2.04335 1.29994 3.17103 0.546323 4.44726 0.204401C5.72349 -0.137522 7.07689 -0.0486323 8.29743 0.457276C9.51797 0.963184 10.5374 1.85782 11.1975 3.00234H21C21.0986 3.00216 21.1962 3.02141 21.2873 3.05899C21.3784 3.09657 21.4612 3.15173 21.531 3.22134L23.781 5.47134C23.8508 5.54101 23.9063 5.62377 23.9441 5.71489C23.9819 5.80601 24.0013 5.90369 24.0013 6.00234C24.0013 6.10099 23.9819 6.19867 23.9441 6.28979C23.9063 6.38091 23.8508 6.46367 23.781 6.53334L21.531 8.78334C21.4613 8.85318 21.3786 8.9086 21.2874 8.94641C21.1963 8.98422 21.0987 9.00368 21 9.00368C20.9013 9.00368 20.8037 8.98422 20.7126 8.94641C20.6214 8.9086 20.5387 8.85318 20.469 8.78334L19.5 7.81284L18.531 8.78334C18.4613 8.85318 18.3786 8.9086 18.2874 8.94641C18.1963 8.98422 18.0987 9.00368 18 9.00368C17.9013 9.00368 17.8037 8.98422 17.7126 8.94641C17.6214 8.9086 17.5387 8.85318 17.469 8.78334L16.5 7.81284L15.531 8.78334C15.4613 8.85318 15.3786 8.9086 15.2874 8.94641C15.1963 8.98422 15.0987 9.00368 15 9.00368C14.9013 9.00368 14.8037 8.98422 14.7126 8.94641C14.6214 8.9086 14.5387 8.85318 14.469 8.78334L13.5 7.81284L12.531 8.78334C12.4612 8.85294 12.3784 8.90811 12.2873 8.94569C12.1962 8.98326 12.0986 9.00251 12 9.00234H11.1975C10.5374 10.1469 9.51797 11.0415 8.29743 11.5474C7.07689 12.0533 5.72349 12.1422 4.44726 11.8003C3.17103 11.4584 2.04335 10.7047 1.23922 9.65639C0.435095 8.60804 -0.000513962 7.32357 4.55089e-07 6.00234ZM6 1.50234C5.19471 1.50264 4.40426 1.71904 3.7111 2.12895C3.01795 2.53886 2.44749 3.12727 2.05924 3.83278C1.67099 4.5383 1.47918 5.33508 1.50381 6.13999C1.52845 6.9449 1.76862 7.72846 2.19929 8.40891C2.62995 9.08937 3.23532 9.64179 3.95224 10.0085C4.66917 10.3753 5.47137 10.543 6.27518 10.494C7.07898 10.4451 7.85492 10.1813 8.52205 9.73032C9.18919 9.2793 9.72307 8.65751 10.068 7.92984C10.1289 7.80198 10.2247 7.69397 10.3445 7.61832C10.4642 7.54267 10.6029 7.50246 10.7445 7.50234H11.6895L12.969 6.22134C13.0387 6.15149 13.1214 6.09608 13.2126 6.05827C13.3037 6.02046 13.4013 6.001 13.5 6.001C13.5987 6.001 13.6963 6.02046 13.7874 6.05827C13.8786 6.09608 13.9613 6.15149 14.031 6.22134L15 7.19184L15.969 6.22134C16.0387 6.15149 16.1214 6.09608 16.2126 6.05827C16.3037 6.02046 16.4013 6.001 16.5 6.001C16.5987 6.001 16.6963 6.02046 16.7874 6.05827C16.8786 6.09608 16.9613 6.15149 17.031 6.22134L18 7.19184L18.969 6.22134C19.0387 6.15149 19.1214 6.09608 19.2126 6.05827C19.3037 6.02046 19.4013 6.001 19.5 6.001C19.5987 6.001 19.6963 6.02046 19.7874 6.05827C19.8786 6.09608 19.9613 6.15149 20.031 6.22134L21 7.19184L22.1895 6.00234L20.6895 4.50234H10.7445C10.6029 4.50222 10.4642 4.46201 10.3445 4.38635C10.2247 4.3107 10.1289 4.2027 10.068 4.07484C9.70304 3.3049 9.12698 2.65441 8.40684 2.199C7.68669 1.7436 6.85206 1.50201 6 1.50234Z"
                  fill="#929292"
                />
              </svg>
            </div>

            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Password"
              class="rounded-md w-full px-10 py-2.5 border border-[#adadad]"
              required
            />

         <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>

              <svg
                v-else
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.073 9.901L2.212 6.04C0.692 7.697 0.116 9.357 0.106 9.391L0 9.707L0.105 10.023C0.127 10.09 2.421 16.707 10.054 16.707C10.983 16.707 11.829 16.605 12.606 16.434L9.86 13.688C8.87128 13.6395 7.93595 13.225 7.23598 12.525C6.53601 11.825 6.12147 10.8897 6.073 9.901ZM10.054 2.707C8.199 2.707 6.679 3.111 5.412 3.705L1.707 0L0.293 1.414L18.293 19.414L19.707 18L16.409 14.702C19.047 12.749 19.988 10.065 20.002 10.023L20.107 9.707L20.002 9.391C19.98 9.324 17.687 2.707 10.054 2.707ZM11.96 10.253C12.147 9.576 11.988 8.814 11.468 8.293C10.948 7.772 10.185 7.614 9.508 7.801L8 6.293C8.61796 5.91298 9.32855 5.71026 10.054 5.707C12.26 5.707 14.054 7.501 14.054 9.707C14.051 10.4323 13.8479 11.1427 13.467 11.76L11.96 10.253Z"
                  fill="#909090"
                />
              </svg>
            </button>
          </div>

          <p class="text-gray-500 text-sm mb-6 underline text-left cursor-pointer" @click="$router.push('/forget-password')">
            Forgot your password?
          </p>

          <div class="flex justify-center mt-6">
            <button v-if="!loader" class="bg-[#4AABAB] rounded-full text-white py-2 px-8 font-medium" @click="login">
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

        <div class="flex items-center justify-center gap-2 my-5">
          <span class="line-with-dots"></span>
          <p class="whitespace-nowrap">or continue with</p>
          <span class="line-with-dots"></span>
        </div>

        <div class="flex justify-center items-center my-3">
          <button class="rounded-md border p-2 flex" @click="loginWithGoogle">
            <img src="/google.svg" class="h-6 mr-2" />
            <span>Sign In With Google</span>
          </button>
        </div>

        <div class="flex justify-center my-3">
          <button
            class="rounded-md border p-2 flex"
            @click="$router.push('/login')"
          >
            <img src="/phone.svg" class="h-6 mr-2" />

            <span>Sign In With Mobile</span>
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
</template>

<script setup>
import { useAuthStore } from "~/store/auth";

const authData = useAuthStore();

const { loading, user, token } = storeToRefs(authData);
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const router = useRouter();
const loader = ref(false);
const toast = useToast();


const login = async () => {
  const form = document.getElementById("loginForm");

  if (!form.reportValidity()) return;

  loader.value = true;

  const payload = {
    email: email.value,
    password: password.value,
  };

  try {
    const { data } = await userLogin(payload);

    if (!data?.success) throw new Error("Login failed");

    authData.addUser({
      user: data.data.user.name,
      token: data.data.token,
    });
    router.push("/account");
    toast.success({ message: "Logged in successfully", position: 'topCenter', timeout:2000 })
  } catch (err) {
    console.error(err);
    toast.error({ message: "Invalid email or password", position: 'topCenter', timeout:2000})
  }
  loader.value = false;
};


const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

const passwordRules = [
  (v) => !!v || "Password is required",
  (v) => v.length >= 6 || "Password must be at least 6 characters",
];
const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const token = await auth.currentUser.getIdToken();
      const googleUser = result.user;

      if (!user.value) {
        let payload = {
          idToken: token,
          user: {
            uid: googleUser.uid,
            phoneNumber: googleUser.phoneNumber,
            email: googleUser.email,
            displayName: googleUser.displayName,
            emailVerified: googleUser.emailVerified,
            photoURL: googleUser.photoURL,
          },
        };

        const { data, status, error } = await useFetch(
          BASE_URL + "/user/auth",
          {
            method: "POST",
            headers: {
              Authorization: guest.value,
              "Content-Type": "application/json",
            },
            body: payload,
          }
        );

        if (status.value === "success") {
          saveGuestId(data.value.data.token);
          saveUser(data.value.data.user);
          const tokenCookie = useCookie("ecomToken", {
            maxAge: 60 * 60 * 24 * 90,
          });
          const userCookie = useCookie("ecomUser", {
            maxAge: 60 * 60 * 24 * 90,
          });
          tokenCookie.value = data.value.data.token;
          userCookie.value = data.value.data.user;
          router.push("/");
        } else {
          console.error(error?.value);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const verifyOTP = () => {
  otpLoading.value = true;
  const confirmOTP = otpConfirmation.value;
  const code = otp.value;
  confirmOTP
    .confirm(code)
    .then(async (result) => {
      const token = await auth.currentUser.getIdToken();

      if (!user.value) {
        let payload = {
          idToken: token,
          user: {
            uid: result.user.uid,
            phoneNumber: result.user.phoneNumber,
            email: result.user.email,
            displayName: result.user.displayName,
            emailVerified: result.user.emailVerified,
            photoURL: result.user.photoURL,
          },
        };

        const { data, status, error } = await useFetch(
          BASE_URL + "/user/auth",
          {
            method: "POST",
            headers: {
              Authorization: guest.value,
              "Content-Type": "application/json",
            },
            body: payload,
          }
        );

        if (status.value === "success") {
          saveGuestId(data.value.data.token);
          saveUser(data.value.data.user);
          const tokenCookie = useCookie("ecomToken", {
            maxAge: 60 * 60 * 24 * 90,
          });
          const userCookie = useCookie("ecomUser", {
            maxAge: 60 * 60 * 24 * 90,
          });
          tokenCookie.value = data.value.data.token;
          userCookie.value = data.value.data.user;
          router.push("/");
        } else {
          console.error(error?.value);
        }
      }
      otpLoading.value = false;
    })
    .catch((error) => {
      console.log("otp error:", error);
      toast.error({
        title: "Invalid OTP",
        timeout: 3000,
        position: "topCenter",
      });
      otp.value = "";
      otpLoading.value = false;
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
