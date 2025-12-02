<template>
  <nav class="bg-white">
    <div class=" px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="hidden sm:flex flex justify-between md:h-20">

        <div class=" flex items-center">
          <img class="md:h-full h-12 mt-2" @click="router.push('/')" src="/logo.png" />
        </div>
        <div class="flex justify-center ">
          <button class="md:p-4 p-1 md:text-xl" @click="router.push('/dashboard')">Account</button>
          <button class="md:p-4 p-1 md:text-xl" @click="router.push('/tax')">Tax Guide</button>
          <button class="md:p-4 p-1 md:text-xl">Export Data</button>
          <button class="md:p-4 p-1 md:text-xl" @click="router.push('/mywallet')">My Wallet</button>
          <button class="md:p-4 p-1 md:text-xl" @click="router.push('reports')">Reports</button>
          <button class="md:p-4 p-1 md:text-xl" @click="router.push('/Aboutus')">About Us</button>
          <button class="md:p-4 p-1 md:text-xl" @click="router.push('/Price')">Pricing</button>
        </div>

        <div class="flex items-center">
          <button v-if="!auth.token" class="px-6 py-1 bg-teal-500 rounded-3xl ml-3 text-white md:text-lg"
            @click="router.push('/login')">
            LogIn
          </button>

          <button v-else class="px-6 py-1 text-teal-500 border border-teal-500 rounded-3xl ml-3  md:text-lg"
            @click="handleLogout">
            Logout
          </button>
        </div>

      </div>
      <div class="flex sm:hidden justify-between items-center h-16">


        <div class="flex items-center space-x-3">

          <button @click="isOpen = !isOpen" class="p-2">
            <svg class="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
            </svg>
          </button>


          <img class="h-10" @click="router.push('/')" src="/logo.png" />
        </div>


        <button class="px-4 py-1 bg-teal-500 rounded-xl text-white text-sm">
          Sign Up
        </button>

      </div>

      <div v-if="isOpen" class="sm:hidden shadow p-4 ">
        <button class="block w-full text-left p-2 text-gray-700" @click="router.push('/dashboard')">Account</button>
        <button class="block w-full text-left p-2 text-gray-700" @click="router.push('/tax')">Tax Guide</button>
        <button class="block w-full text-left p-2 text-gray-700">Export Data</button>
        <button class="md:p-4 p-1 md:text-xl" @click="router.push('/mywallet')">My Wallet</button>
        <button class="md:p-4 p-1 md:text-xl">Reports</button>
        <button class="block w-full text-left p-2 text-gray-700" @click="router.push('/Aboutus')">About Us</button>
        <button class="block w-full text-left p-2 text-gray-700">Pricing</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
const auth = useAuthStore();

const isOpen = ref(false);
const router = useRouter()

const handleLogout = () => {
  auth.logout();
  router.push("/");
};

</script>