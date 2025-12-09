<template>
  <nav class="bg-white">
    <div class="px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <button @click="isOpen = true" class="md:hidden p-2">
          <svg
            class="w-7 h-7 text-gray-700"
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

        <img
          class="h-10 md:h-20 cursor-pointer"
          @click="router.push('/')"
          src="/logo.png"
        />
      </div>

      <div class="hidden md:flex gap-4 lg:gap-12 items-center">
        <button
          class="whitespace-nowrap cursor-pointer"
          @click="router.push('/dashboard')"
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
          @click="router.push('/mywallet')"
        >
          My Wallet
        </button>
        <button
          class="whitespace-nowrap cursor-pointer"
          @click="router.push('/reports')"
        >
          Reports
        </button>
        <button
          class="whitespace-nowrap cursor-pointer"
          @click="router.push('/aboutus')"
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

      <div class="flex items-center gap-2">
        <button
          v-if="!auth.token"
          class="px-6 py-2 bg-teal-500 rounded-3xl text-white font-semibold text-sm"
          @click="router.push('/login')"
        >
          Log in
        </button>
        <button
          v-else
          class="px-6 py-2 bg-teal-500 rounded-3xl text-white font-semibold text-sm"
          @click="handleLogout"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- in mobile -->

    <transition name="slide" class="md:hidden">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex">
        <div @click="isOpen = false"></div>
        <div class="relative bg-white w-64 h-full shadow-xl p-6">
          <button class="absolute top-4 right-4" @click="isOpen = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-700"
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
          <!-- <div>
            <img class="h-10 cursor-pointer" @click="router.push('/')" src="/logo.png" />
          </div> -->

          <div class="flex flex-col mt-10 gap-4">
            <button
              class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
              @click="navigate('/dashboard')"
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
              @click="navigate('/mywallet')"
            >
              My Wallet
            </button>
            <button
              class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
              @click="navigate('/reports')"
            >
              Reports
            </button>
            <button
              class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
              @click="navigate('/aboutus')"
            >
              About Us
            </button>
            <button
              class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
              @click="navigate('/Price')"
            >
              Pricing
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";

const isOpen = ref(false);
const router = useRouter();
const auth = useAuthStore();

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
