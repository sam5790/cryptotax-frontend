<template>
  <div class="p-10">
    <div class="flex flex-col sm:flex-row justify-center items-center gap-6 p-5 flex-wrap">
      <div class="shadow-md p-6 text-center rounded-2xl relative w-full sm:w-64 h-28">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 13H11V7H13M13 17H11V15H13M1 21H23L12 2" />
          </svg>
        </div>
        <p class="text-xl font-medium whitespace-nowrap">Missing Transactions</p>
        <p class="text-2xl font-medium">0</p>
      </div>

      <div class="shadow-md p-6 text-center rounded-2xl relative w-full sm:w-64 h-28 mt-2 sm:mt-0">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3" />
          </svg>
        </div>
        <p class="text-xl font-medium">Total Transactions</p>
        <p class="text-2xl font-medium">{{ transactions.length }}</p>
      </div>

      <div class="shadow-md p-6 text-center rounded-2xl relative w-full sm:w-64 h-28 mt-2 sm:mt-0">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 20 20">
            <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
          </svg>
        </div>
        <p class="text-xl font-medium">Uncategorised Data</p>
        <p class="text-2xl font-medium">0</p>
      </div>
    </div>

    <div class=" bg-white mx-auto w-full md:p-7 shadow-md md:my-8">
      <div class="flex flex-col sm:flex-row justify-end gap-3 p-4 md:p-7 flex-wrap">
        <button class="rounded-full text-sm py-2 px-3 sm:px-4 text-teal-500 font-medium shadow">ADD MISSING TRANSACTIONS</button>
        <button class="rounded-full text-sm py-2 px-3 sm:px-4 text-teal-500 font-medium shadow" @click="exportTransactions">EXPORT TRANSACTIONS</button>
        <button class="rounded-full text-sm py-2 px-3 sm:px-4 bg-teal-500 text-white font-medium" @click="exportPnl">EXPORT PNL</button>
      </div>
      <div class="overflow-x-auto hidden md:block">
        <table class="w-full text-left">
          <thead class="bg-gray-100">
            <tr class="text-gray-400">
              <th class="py-2 px-4 border-b font-semibold">#</th>
              <th class="py-2 px-4 border-b font-semibold">Exchange</th>
              <th class="py-2 px-4 border-b font-semibold">Coin</th>
              <th class="py-2 px-4 border-b font-semibold">Timestamp</th>
              <th class="py-2 px-4 border-b font-semibold">Quantity</th>
              <th class="py-2 px-4 border-b font-semibold">Amount</th>
              <th class="py-2 px-4 border-b font-semibold">TDS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in transactions" :key="index" class="border-b">
              <td class="py-4 px-4">{{ index + 1 }}</td>
              <td class="py-4 px-4 flex items-center gap-2">
                <img :src="`/icons/${item.exchange}.png`" class="w-6 h-6 sm:w-8 sm:h-8" />
                {{ item.exchange }}
              </td>
              <td class="py-4 px-4">{{ item.coin }}</td>
              <td class="py-4 px-4">{{ item.date }}</td>
              <td class="py-4 px-4">
                <span :class="item.type === 'buy' ? 'text-green-500 fontPoppins' : 'text-red-500 fontPoppins'">{{ item.quantity }}</span>
              </td>
              <td class="py-4 px-4 fontPoppins">{{ item.total }}</td>
              <td class="py-4 px-4 fontPoppins">{{ item.tds || 0 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="md:hidden flex flex-col space-y-3 p-2">
        <div v-for="(item, index) in transactions" :key="index" class="border p-4 rounded-lg shadow-md bg-white">
          <div class="flex justify-between items-center mb-2 flex-wrap">
            <span class="font-semibold">#{{ index + 1 }}</span>
            <span class="text-gray-400 text-sm">{{ item.date }}</span>
          </div>
          <div class="flex items-center mb-2 gap-2">
            <img :src="`/icons/${item.exchange}.png`" class="w-6 h-6" />
            <span class="font-medium">{{ item.exchange }}</span>
          </div>
          <div class="flex justify-between mb-1">
            <span>Coin:</span>
            <span>{{ item.coin }}</span>
          </div>
          <div class="flex justify-between mb-1">
            <span>Quantity:</span>
            <span :class="item.type === 'buy' ? 'text-green-500 fontPoppins' : 'text-red-500 fontPoppins'">{{ item.quantity }}</span>
          </div>
          <div class="flex justify-between mb-1">
            <span>Amount:</span>
            <span class="fontPoppins">{{ item.total }}</span>
          </div>
          <div class="flex justify-between">
            <span>TDS:</span>
            <span class="fontPoppins">{{ item.tds || 0 }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white border border-teal-500 rounded-xl flex items-center px-4 sm:px-10 py-3 sm:py-5 shadow-md z-20 opacity-80">
      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
        </svg>
      </div>
      <p class="text-sm sm:text-base m-0 ml-3 sm:ml-5">Call an Expert Now</p>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script setup>
import { mainStore } from "~/store/mainstore";
const store = mainStore();
const { transactions, pnl } = storeToRefs(store);

const logpnl = () => {
  console.log("PNL:", pnl);
};
const logtransaction = () => {
  console.log("TRANSACTION:", transactions);
};

const { $exportExcel } = useNuxtApp();

const exportTransactions = () => {
  $exportExcel(transactions.value, "transactions");
};

const exportPnl = () => {
  $exportExcel(pnl.value, "pnl");
};
</script>
<style scoped>

.fontPoppins {
  font-family: "Poppins", sans-serif !important;
}

</style>
