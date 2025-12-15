<template>
  <ClientOnly>
    <nav class="bg-white">
      <div class="px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <img
            class="h-10 md:h-20 cursor-pointer"
            @click="router.push('/')"
            src="/logo.png"
          />
        </div>

        <div class="hidden md:flex gap-4 lg:gap-12 items-center">
          <button
            class="whitespace-nowrap cursor-pointer"
            @click="
              auth?.token ? router.push('/account') : router.push('/login')
            "
          >
            Account
          </button>
          <button
            class="whitespace-nowrap cursor-pointer"
            @click="router.push('/tax')"
          >
            Tax Guide
          </button>
          <button class="whitespace-nowrap cursor-pointer">Export Data</button>
          <button
            class="whitespace-nowrap cursor-pointer"
            @click="
              auth?.token ? router.push('/my-wallet') : router.push('/login')
            "
          >
            My Wallet
          </button>
          <button
            class="whitespace-nowrap cursor-pointer"
            @click="
              auth?.token ? router.push('/reports') : router.push('/login')
            "
          >
            Reports
          </button>
          <button
            class="whitespace-nowrap cursor-pointer"
            @click="router.push('/about-us')"
          >
            About Us
          </button>
          <button
            class="whitespace-nowrap cursor-pointer"
            @click="router.push('/Price')"
          >
            Pricing
          </button>
        </div>

      <div class="items-center gap-2 hidden md:flex">
        <button
          v-if="!auth?.token"
          class="px-6 py-2 bg-[#4aabab] rounded-3xl text-white font-semibold text-sm"
          @click="router.push('/login')"
        >
          Log in
        </button>
        <button
          v-else
          class="px-6 py-2 bg-[#4aabab] rounded-3xl text-white font-semibold text-sm"
          @click="handleLogout"
        >
          Logout
        </button>
      </div>
      <button @click="isOpen = true" class="md:hidden p-2">
        <svg
          class="w-7 h-7 text-[#4AABAB]"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

      <!-- in mobile -->

      <transition name="slide" class="md:hidden">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex">
          <div @click="isOpen = false"></div>
          <div class="bg-white w-64 h-full shadow-xl p-6">
            <div class="relative" v-if="auth.token">
              <div class="flex flex-col items-center justify-center">
                <img
                  src="/avatar.png"
                  class="w-16 h-16 rounded-full ring-2 ring-[#4AABAB] shadow-md"
                  
                />
                <div
                  class="capitalize my-1 text-lg font-semibold font-[Poppins]"
                >
                  {{ user }}
                </div>
                <div class="flex mb-2 items-center">
                  <img
                    v-for="exchange in transactionsPagination?.exchanges?.slice(
                      0,
                      3
                    )"
                    :key="exchange"
                    :src="`/icons/${exchange}.png`"
                    :alt="exchange"
                    class="h-8 w-8 rounded-full border-2 border-white -ml-3 first:ml-0"
                  />
                  <div
                    v-if="transactionsPagination?.exchanges?.length - 3 > 0"
                    class="flex items-center"
                  >
                    <icon name="mdi:plus" class="w-4 h-4" />{{
                      total_pnl?.length - 3
                    }}
                  </div>
                </div>
                <button
                  class="py-1 px-3 bg-[#4AABAB] rounded-3xl text-white font-semibold text-xs"
                  @click="router.push('/my-wallet')"
                >
                  View Wallet
                </button>
              </div>
              <button class="absolute top-0 right-0" @click="isOpen = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-[#4AABAB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div v-else class="flex items-center justify-between">
              <img
                class="h-14 cursor-pointer"
                @click="router.push('/')"
                src="/logo.png"
              />
              <button @click="isOpen = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-[#4AABAB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-col mt-5 gap-4">
              <button
                class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="navigate('/')"
              >
                Home
              </button>
              <button
                class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="auth?.token ? navigate('/account') : navigate('/login')"
              >
                Account
              </button>
              <button
                class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="navigate('/tax')"
              >
                Tax Guide
              </button>
              <button
                class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Export Data
              </button>
              <button
                class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="
                  auth?.token ? navigate('/my-wallet') : navigate('/login')
                "
              >
                My Wallet
              </button>
              <button
                class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="auth?.token ? navigate('/reports') : navigate('/login')"
              >
                Reports
              </button>
              <button
                class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="navigate('/about-us')"
              >
                About Us
              </button>
              <button
                class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="navigate('/Price')"
              >
                Pricing
              </button>
              <div>
                <button
                  v-if="!auth?.token"
                  class="text-left p-2 text-[#4AABAB] font-semibold hover:bg-gray-100 rounded"
                  @click="router.push('/login')"
                >
                  Log in
                </button>
                <button
                  v-else
                  class="text-left p-2 text-red-500 font-semibold hover:bg-gray-100 rounded"
                  @click="handleLogout"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </nav></ClientOnly
  >
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
import { mainStore } from "~/store/mainstore";
const store = mainStore();
const { transactionsPagination } = storeToRefs(store);
const isOpen = ref(false);
const router = useRouter();
const auth = useAuthStore();
const { user } = storeToRefs(auth);
const handleLogout = () => {
  auth.logout();
  router.push("/");
};

const navigate = (path) => {
  router.push(path);
  isOpen.value = false;
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-from {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
