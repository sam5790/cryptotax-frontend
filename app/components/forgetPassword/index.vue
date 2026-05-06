<template>
  <div class="flex items-center justify-center px-4 py-10 md:p-20">
    <div
      class="shadow-[0_0_25px_0] shadow-[#254BD34D] rounded-3xl p-6 md:p-16 w-full max-w-xl"
    >
      <h2
        class="text-[38px] md:text-4xl font-bold text-center justify-center flex mb-5"
      >
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
          Reset password
        </p>

        <form v-if="!otpSent" id="verifyEmail">
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

          <div class="flex justify-center mt-10">
            <button
              v-if="!loading"
              class="bg-[#4AABAB] rounded-full text-white py-2 px-8"
              @click="emailVerify"
            >
              Verify
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

              Verify...
            </button>
          </div>
        </form>

        <form v-if="otpSent" id="forgetPassword">
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
              disabled
            />
          </div>

          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="newPassword"
              class="rounded-md w-full ps-4 pe-3 py-2.5 border border-[#adadad]"
              placeholder="Enter password"
              minlength="6"
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

          <div class="my-4 relative">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              class="rounded-md w-full ps-4 pe-3 py-2.5 border border-[#adadad]"
              placeholder="confirm password"
              minlength="6"
              required
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

          <input
            type="text"
            v-model="otp"
            class="rounded-md w-full pl-4 py-2.5 border border-[#adadad]"
            placeholder="Enter your otp"
            required
          />

          <div class="flex justify-center mt-10">
            <button
              v-if="!loading"
              class="bg-[#4AABAB] rounded-full text-white py-2 px-8"
              @click="resetPassword"
            >
              ResetPassword
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

              ResetPassword...
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const newPassword = ref("");
const confirmPassword = ref("");
const otp = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const otpSent = ref(false);
const loading = ref(false);
const toast = useToast();
const router = useRouter();

const emailVerify = async () => {
  const form = document.getElementById("verifyEmail");
  if (!form.reportValidity()) {
    return;
  }

  loading.value = true;
  const payload = { email: email.value };
  const { data, error } = await forgetPassword(payload);
  if (data.success) {
    loading.value = false;
    otpSent.value = true;
    toast.success({
      message: data.message || "Otp sent successfully",
      timeOut: 2000,
      position: "topCenter",
    });
  } else {
    toast.error({
      message: error.message || "Something Went Wrong",
      timeOut: 2000,
      position: "topCenter",
    });
  }
};

const resetPassword = async () => {
  const form = document.getElementById("forgetPassword");

  if (!form.reportValidity()) {
    return;
  }
  if (newPassword.value !== confirmPassword.value) {
    toast.error({
      message: "Password Mismatch Try Again",
      position: "topCenter",
    });
    return;
  }
  loading.value = true;
  const payload = {
    email: email.value,
    newPassword: newPassword.value,
    confirmPassword: confirmPassword.value,
    otp: otp.value,
  };
  try {
    const { data, error } = await forgetResetPassword(payload);
    if (data.success) {
      router.push("/login/mail");
    }
  } catch (err) {
    toast.error({
      message: err.data.message,
      timeOut: 2000,
      position: "topCenter",
    });
  } finally {
    loading.value = false;
  }
};
</script>
