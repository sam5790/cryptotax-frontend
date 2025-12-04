<template>
  <nav class="bg-white">
    <div class=" px-4 sm:px-6 lg:px-8">
      <div class="hidden md:flex flex justify-between md:h-20">
        <div class=" flex items-center">
          <img class="md:h-full h-12 mt-2" @click="router.push('/')" src="/logo.png" />
        </div>
        <div class="flex justify-center ">
          <button class="md:p-2 p-1 md:text-md whitespace-nowrap" @click="router.push('/dashboard')">Account</button>
          <button class="md:p-2 p-1 md:text-md whitespace-nowrap" @click="router.push('/Taxguide')">Tax Guide</button>
          <button class="md:p-2 p-1 md:text-md whitespace-nowrap">Export Data</button>
          <button class="md:p-2 p-1 md:text-md whitespace-nowrap">My Wallet</button>
          <button class="md:p-2 p-1 md:text-md whitespace-nowrap">Reports</button>
          <button class="md:p-2 p-1 md:text-md whitespace-nowrap" @click="router.push('/aboutus')">About Us</button>
          <Button class="md:p-2 p-1 md:text-md whitespace-nowrap">Pricing</Button>
        </div>
        <div class="flex items-center ">
          <button class="px-6 py-1 md:px-3 bg-teal-500 rounded-3xl ml-3 text-white md:text-md"
            @click="router.push('/login')">LogIn</button>
          <button class="px-6 py-1 md:px-3 bg-teal-500 rounded-3xl ml-3 text-white md:text-md"
            @click="router.push('/register')">SignUp</button>
        </div>
      </div>
      <div class="flex md:hidden justify-between items-center h-16">
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
        <div class="flex justify-end ">
          <button class="px-4 py-1 bg-teal-500 rounded-xl text-white text-sm mr-1">LogIn</button>
          <button class="px-4 py-1 bg-teal-500 rounded-xl text-white text-sm">
            Sign Up
          </button>
        </div>
      </div>

      <transition name="slide" class="md:hidden">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex ">
          <div @click="isOpen = false"></div>
          <div class="relative bg-white w-64 h-full shadow-xl p-6">
            <button class="absolute top-4 right-4" @click="isOpen = false">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <!-- <div>
            <img class="h-10 cursor-pointer" @click="router.push('/')" src="/logo.png" />
          </div> -->

            <div class="flex flex-col mt-10 gap-4">
              <button class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="router.push('/dashboard')">Account</button>
              <button class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded" @click="router.push('/tax')">Tax
                Guide</button>
              <button class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded">Export Data</button>
              <button class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded" @click="router.push('/mywallet')">My
                Wallet</button>
              <button class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="router.push('/reports')">Reports</button>
              <button class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded" @click="router.push('/aboutus')">About
                Us</button>
              <button class="text-left p-2 text-gray-700 hover:bg-gray-100 rounded"
                @click="router.push('/Price')">Pricing</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false);
const router = useRouter()
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
