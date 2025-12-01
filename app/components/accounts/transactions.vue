<template>
  <div>

    <div class="flex justify-center gap-6 p-5">

      <div class="shadow-2xl p-6 text-center rounded-2xl relative">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg 
                    w-12 h-12 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 13H11V7H13M13 17H11V15H13M1 21H23L12 2" />
          </svg>
        </div>
        <p class="text-xl font-medium">Missing Transactions</p>
        <p class="text-2xl font-medium">0</p>
      </div>

      <div class="shadow-2xl p-6 text-center rounded-2xl relative">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg 
                    w-12 h-12 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 18">
            <path stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3" />
          </svg>
        </div>
        <p class="text-xl font-medium">Total Transactions</p>
        <p class="text-2xl font-medium">{{ transactions.length }}</p>
      </div>

      <div class="shadow-2xl p-6 text-center rounded-2xl relative">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg 
                    w-12 h-12 rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="orange" viewBox="0 0 20 20">
            <path
              d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
          </svg>
        </div>
        <p class="text-xl font-medium">Uncategorised Data</p>
        <p class="text-2xl font-medium">0</p>
      </div>

    </div>


    <div class="container bg-white mx-auto md:p-7 shadow-lg md:my-8 w-[1100px]">
      <div class="flex justify-end gap-3 p-7">
        <button class="rounded-full text-sm py-1 px-3 text-teal-500 font-medium shadow-2xl">
          ADD MISSING TRANSACTIONS</button>


        <button class="rounded-full text-sm py-1 px-3  text-teal-500 font-medium shadow-2xl"
          @click="exportTransactions">EXPORT TRANSACTIONS</button>

        <button class="rounded-full  text-sm py-1 px-3 bg-teal-500 text-white font-medium" @click="exportPnl">EXPORT
          PNL</button>
      </div>
      <table class="md:w-full text-left ">
        <thead>
          <tr>
            <th class="py-2 px-4  border-b ">#</th>
            <th class="py-2 px-4  border-b ">Exchange</th>
            <th class="py-2 px-4  border-b ">Coin</th>
            <th class="py-2 px-4  border-b ">timestamp</th>
            <th class="py-2 px-4  border-b ">Quantity</th>
            <th class="py-2 px-4  border-b ">Amount</th>
            <th class="py-2 px-4  border-b ">TDS</th>
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
            <td class="py-4 px-4  ">{{ item.tds || 0 }}</td>
          </tr>

        </tbody>
      </table>

    </div>

    <div class="fixed bottom-12 right-12 bg-white border border-teal-500 rounded-xl 
         flex items-center px-10 py-5 shadow-md">
      <div class="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em"
          height="1em"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
          <path
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
        </svg>

      </div>

      <p class="m-0 ml-5">

        Call an Expert Now </p>
    </div>
  </div>
  <Footer />
</template>

<script setup>

import { mainStore } from '~/store/mainstore';
const store = mainStore()
const { transactions, pnl } = storeToRefs(store)

const logpnl = () => {
  console.log("PNL:", pnl);
}
const logtransaction = () => {
  console.log("TRANSACTION:", transactions);
}

const { $exportExcel } = useNuxtApp();

const exportTransactions = () => {
  $exportExcel(transactions.value, "transactions");
};

const exportPnl = () => {
  $exportExcel(pnl.value, "pnl");
};

</script>