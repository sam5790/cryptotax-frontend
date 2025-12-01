<template>
  <div class="md:p-16 bg-gray-50">

    <div class="flex justify-center gap-4 ">
      <div class="flex">

        <div class="bg-white shadow-2xl rounded-lg p-6 xl:w-[450px] justify-center">

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <p class="px-4 py-1 text-white bg-teal-600 rounded-full">HIFO</p>
              <p class="text-gray-700">LIFO</p>
              <p class="text-gray-700">FIFO</p>
            </div>
            <p class="font-semibold">FY 22-23</p>
          </div>

          <div class="border-b-2 border-dashed mt-3"></div>

          <div class="flex items-center justify-between gap-4 py-5 mt-3">

            <div>
              <p class="m-0 text-xl">Income</p>
              <h1 class="text-green-700 text-2xl font-bold text-center mt-2">$0</h1>
            </div>

            <div v-if="PNL_TOTAL > 0">
              <p class="m-0 text-xl">Capital Gain</p>
              <h3 class="text-green-700 flex items-center text-2xl font-bold mt-2">
                {{ PNL_TOTAL.toFixed(2) }}
              </h3>
            </div>

            <div v-else>
              <p class="m-0 text-xl">Capital Loss</p>
              <h3 class="text-red-600 flex items-center text-2xl font-bold mt-2">
                {{ PNL_TOTAL.toFixed(2) }}
              </h3>
            </div>

            <div>
              <p class="m-0 text-xl">TDS</p>
              <h3 class="text-xl font-bold mt-2">{{ TDS_TOTAL.toFixed(2) }}</h3>
            </div>

          </div>
        </div>
      </div>

      <div class="bg-white shadow-2xl flex justify-center items-center">
        <img src="/line-chart.png" width="400px">
      </div>


      <div class="bg-white shadow-2xl rounded-lg  text-center flex flex-col justify-center items-center xl:w-[200px]">
        <img src="/avatar.png" class="w-12" />
        <p class=" font-medium">{{ user?.name }}</p>

        <img src="/my-accounts.png" class="mt-2" />

        <button @click="router.push('/mywallet')"
          class="mt-4 border border-teal-600 text-teal-600 px-4 py-1 rounded-full">
          My Wallet
        </button>
      </div>

    </div>

    <div class="xl:p-10 flex justify-center">
      <div class=" my-8 shadow-2xl rounded-lg p-10 flex flex-col  items-center xl:w-[1100px]">
        <h2 class="text-center text-xl md:text-2xl font-semibold">Optimise your Tax Harvesting 💰</h2>
        <button class="mt-8 px-6 py-2 bg-teal-600 rounded-3xl text-white" @click="router.push('/harvesting')">Go to Tax
          Harvesting</button>
      </div>

    </div>


    <div class="lg:p-8 flex flex-col justify-center items-center">
      <h2 class="text-3xl md:text-4xl font-semibold my-5 ">Transactions</h2>
      <div class="container p-5 shadow-2xl bd-white xl:w-[1100px] rounded-xl">
        <table class="w-full text-left ">
          <thead>
            <tr>
              <th class="py-2 px-4  border-b ">#</th>
              <th class="py-2 px-4  border-b ">Exchange</th>
              <th class="py-2 px-4  border-b ">Coin</th>
              <th class="py-2 px-4  border-b ">timestamp</th>
              <th class="py-2 px-4  border-b ">Quantity</th>
              <th class="py-2 px-4  border-b ">Amount</th>
              <th class="py-2 px-4  border-b ">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in transactions" :key="index" class="border-b">
              <td class="py-4 px-4  ">{{ index + 1 }}</td>
              <td class="py-4 px-4 flex">
                <img :src="`/icons/${item.exchange}.png`" class="w-8 h-8 mr-1" />
                {{ item.exchange }}
              </td>
              <td class="py-4 px-4  ">{{ item.coin }}</td>
              <td class="py-4 px-4  ">{{ item.date }}</td>

              <td class="py-4 px-4">
                <p v-if="item.type == buy" class="text-green-500">
                  <svg class="w-3 h-2 text-gray-800 dark:text-white mt-2 mr-1" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 16 10">
                    <path
                      d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                  </svg>
                  {{ item.quantity }}
                </p>
                <p v-else class="text-red-500 flex">
                  <svg class="w-4 h-2 text-gray-800 dark:text-white mt-2 mr-1" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 16 10">
                    <path
                      d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                  </svg>
                  {{ item.quantity }}
                </p>

              </td>
              <td class="py-4 px-4  ">{{ item.total }}</td>
              <td class="py-4 px-4 ">{{ item.type }}</td>
            </tr>

          </tbody>
        </table>
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