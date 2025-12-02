<template>
  <div class="md:p-16 bg-gray-50">
    <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
      <div class="bg-white shadow-2xl rounded-lg p-6 w-[300px] sm:w-[350px] xl:w-[450px]">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <p class="px-4 py-1 text-white bg-teal-600 rounded-full">HIFO</p>
            <p class="text-gray-700">LIFO</p>
            <p class="text-gray-700">FIFO</p>
          </div>
          <p class="font-semibold">FY 22-23</p>
        </div>

        <div class="border-b-2 border-dashed mt-3"></div>

        <div class="flex justify-between gap-4 py-5 mt-3">

          <div>
            <p class="text-xl max-sm:text-sm">Income</p>
            <span class="text-green-700 text-2xl font-bold mt-2">$0</span>
          </div>

          <div v-if="PNL_TOTAL > 0">
            <p class="text-xl max-sm:text-sm">Capital Gain</p>
            <span class="text-green-700 text-2xl font-bold mt-2">{{ PNL_TOTAL.toFixed(2) }}</span>
          </div>

          <div v-else>
            <p class="text-xl max-sm:text-sm">Capital Loss</p>
            <span class="text-red-600 text-2xl font-bold mt-2">{{ PNL_TOTAL.toFixed(2) }}</span>
          </div>

          <div>
            <p class="text-xl max-sm:text-sm">TDS</p>
            <span class="text-xl font-bold mt-2">{{ TDS_TOTAL.toFixed(2) }}</span>
          </div>

        </div>
      </div>
      <div class="bg-white shadow-2xl flex justify-center items-center p-4 w-[300px] sm:w-[350px] xl:w-[400px]">
        <img :src="'/line-chart.png'" class="w-full max-w-[350px]" key="line-chart">
      </div>
      <div
        class="bg-white shadow-2xl rounded-lg text-center flex flex-col justify-center items-center p-6 w-[300px] sm:w-[200px]">
        <img :src="'/avatar.png'" class="w-12" key="avatar" />
        <p class="font-medium mt-2">{{ user?.name }}</p>
        <img :src="'/my-accounts.png'" class="mt-2" key="my-accounts" />
        <button @click="router.push('/mywallet')"
          class="mt-4 border border-teal-600 text-teal-600 px-4 py-1 rounded-full">
          My Wallet
        </button>
      </div>
    </div>
    <div class="flex justify-center px-4 sm:px-6 lg:px-8 xl:p-10">
      <div class="my-8 shadow-2xl rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col items-center w-45 max-w-4xl">
        <h2 class="text-center text-lg sm:text-xl md:text-2xl font-semibold">
          Optimise your Tax Harvesting 💰
        </h2>

        <button class="mt-8 px-6 py-2 bg-teal-600 rounded-3xl text-white" @click="router.push('/harvesting')">
          Go to Tax Harvesting
        </button>
      </div>
    </div>



    <div class="lg:p-8 flex flex-col justify-center items-center" v-if="transactions.length > 0">
      <h2 class="text-3xl md:text-4xl font-semibold my-5">Transactions</h2>

      <!-- DESKTOP TABLE -->
      <div class="container p-5 shadow-2xl bg-white xl:w-[1100px] rounded-xl hidden sm:hidden md:block">
        <table class="w-full text-left">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">#</th>
              <th class="py-2 px-4 border-b">Exchange</th>
              <th class="py-2 px-4 border-b">Coin</th>
              <th class="py-2 px-4 border-b">Timestamp</th>
              <th class="py-2 px-4 border-b">Quantity</th>
              <th class="py-2 px-4 border-b">Amount</th>
              <th class="py-2 px-4 border-b">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in transactions" :key="index" class="border-b">
              <td class="py-4 px-4">{{ index + 1 }}</td>
              <td class="py-4 px-4 flex">
                <img :src="`/icons/${item.exchange}.png`" class="w-8 h-8 mr-1" />
                {{ item.exchange }}
              </td>
              <td class="py-4 px-4">{{ item.coin }}</td>
              <td class="py-4 px-4">{{ item.date }}</td>

              <td class="py-4 px-4">
                <p v-if="item.type == buy" class="text-green-500 flex items-center">
                  <svg class="w-3 h-2 mt-1 mr-1" fill="green" viewBox="0 0 16 10">
                    <path
                      d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                  </svg>
                  {{ item.quantity }}
                </p>

                <p v-else class="text-red-500 flex items-center">
                  <svg class="w-4 h-2 mt-1 mr-1" fill="red" viewBox="0 0 16 10">
                    <path
                      d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                  </svg>
                  {{ item.quantity }}
                </p>
              </td>

              <td class="py-4 px-4">{{ item.total }}</td>
              <td class="py-4 px-4">{{ item.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- MOBILE CARDS -->
      <div class="w-full sm:w-full md:hidden space-y-4 px-4">
        <div v-for="(item, index) in transactions" :key="index" class="p-4 rounded-xl shadow-md bg-white border">
          <div class="flex justify-between mb-2">
            <span class="font-semibold">#{{ index + 1 }}</span>
            <span class="text-gray-500 text-sm">{{ item.date }}</span>
          </div>

          <div class="flex items-center mb-3">
            <img :src="`/icons/${item.exchange}.png`" class="w-7 h-7 mr-2" />
            <span class="font-medium">{{ item.exchange }}</span>
          </div>

          <div class="flex justify-between mb-1">
            <span class="font-medium">Coin</span>
            <span>{{ item.coin }}</span>
          </div>

          <div class="flex justify-between mb-1">
            <span class="font-medium">Quantity</span>
            <span :class="item.type == buy ? 'text-green-500 flex items-center' : 'text-red-500 flex items-center'">
              <svg v-if="item.type == buy" class="w-3 h-2 mt-1 mr-1" fill="green" viewBox="0 0 16 10">
                <path
                  d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
              </svg>

              <svg v-else class="w-4 h-2 mt-1 mr-1" fill="red" viewBox="0 0 16 10">
                <path
                  d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
              </svg>

              {{ item.quantity }}
            </span>
          </div>

          <div class="flex justify-between mb-1">
            <span class="font-medium">Amount</span>
            <span>{{ item.total }}</span>
          </div>

          <div class="flex justify-between">
            <span class="font-medium">Type</span>
            <span>{{ item.type }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
  <Footer />
</template>



<script setup>
import { mainStore } from '~/store/mainstore';
import { useAuthStore } from '~/store/auth';
const auth = useAuthStore()
const store = mainStore()
const { transactions, TDS_TOTAL, PNL_TOTAL } = storeToRefs(store)
const { user } = storeToRefs(auth)
const router = useRouter()
</script>