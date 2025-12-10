<template>
  <div class="flex items-center justify-center px-4 py-10 md:p-20">
    <div
      class="shadow-[0_0_25px_0] shadow-[#254BD34D] rounded-3xl p-6 md:p-16 w-full max-w-2xl"
    >
      <h2
        class="text-[38px] md:text-4xl font-bold text-center justify-center flex mb-5"
      >
        <div class="flex gap-3 flex-wrap">
          New
          <div class="text-[#4aabab]">
            user!
            <CurvedLine />
          </div>
        </div>
      </h2>

      <p class="text-center mb-10 text-gray-700 text-sm md:text-[22px]">
        Please enter your details to create a new account
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        <input
          type="text"
          v-model="firstName"
          class="rounded-md w-full ps-4 pe-3 py-2.5 border border-[#adadad]"
          placeholder="First Name"
        />

        <input
          type="text"
          v-model="lastName"
          class="rounded-md w-full ps-4 pe-3 py-2.5 border border-[#adadad]"
          placeholder="Last Name"
        />

        <input
          type="text"
          v-model="email"
          class="rounded-md w-full ps-4 pe-3 py-2.5 border border-[#adadad]"
          placeholder="Email"
        />

        <input
          type="text"
          v-model="phoneNumber"
          class="rounded-md w-full ps-4 pe-3 py-2.5 border border-[#adadad] font-[Poppins]"
          placeholder="Mobile Number"
        />

        <div class="relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            class="rounded-md w-full ps-4 pe-3 py-2.5 border border-[#adadad]"
            placeholder="Enter password"
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

        <div class="relative">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="confirmPassword"
            class="rounded-md w-full ps-4 pe-3 py-2.5 border border-[#adadad]"
            placeholder="Re-enter password"
          />

          <button
            type="button"
            @click="showConfirmPassword = !showConfirmPassword"
            class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
          >
            <svg
              v-if="showConfirmPassword"
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
      </div>

      <div class="flex mt-4 text-xs">
        <input
          v-model="termsAndPrivacy"
          type="checkbox"
          class="w-4 h-4 border rounded-xs mt-1 accent-[#4AABAB]"
        />
        <p class="mx-4 mt-1 text-[14px]">
          <span>I agree to the</span> <u class="font-semibold">Terms</u> &
          <u class="font-semibold">Privacy Policy.</u>
        </p>
      </div>

      <div class="flex justify-center mt-10">
        <button
          v-if="!loading"
          class="bg-[#4AABAB] rounded-full text-white py-2 px-8"
          @click="register"
        >
          Sign Up
        </button>
        <button
          v-else
          type="button"
          class="bg-[#4AABAB] hover:bg-teal-600 text-white font-medium py-2 px-8 rounded-full flex items-center gap-2 disabled:opacity-60"
          disabled
        >
          <span
            class="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"
          ></span>

          Signing up...
        </button>
      </div>

      <div class="flex items-center justify-center gap-5 my-5">
        <span class="line-with-dots"></span>
        <p class="whitespace-nowrap">or continue with</p>
        <span class="line-with-dots"></span>
      </div>

      <div class="flex justify-center mt-6">
        <LoginGoogle />
      </div>

      <p class="text-center mt-6 text-[16px] text-gray-500">
        Have an account?
        <button @click="router.push('/login')">
          <u class="font-semibold">Login Now</u>
        </button>
      </p>
    </div>
  </div>
</template>
<script setup>
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phoneNumber = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const loading = ref(false);
const user = ref(null);
const router = useRouter();
const toast = useToast();
const termsAndPrivacy = ref(false);
const register = async () => {
  loading.value = true;
  const payload = {
    name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    phonenumber: phoneNumber.value,
    password: password.value,
  };

  const { data, error } = await createUser(payload);
  if (data?.success) {
    router.push("/login");
    loading.value = false;
  } else {
    toast.error({
      message: error?.data?.error,
      timeout: 2000,
      position: "topCenter",
    });
    loading.value = false;
  }
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
  left: -0.4em;
  width: 140%;
  height: 0.6em;
  background-image: url("underline-new-user.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  pointer-events: none;
}
.line-with-dots {
  width: 150px;
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
  max-width: 200px;
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
