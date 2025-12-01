<template>
  <div class="md:p-10 flex flex-col justify-center items-center bg-gray-50">
    <h2 class="text-3xl md:text-4xl font-semibold my-5">Transactions</h2>
    <div class="container shadow-2xl md:p-8">
      <table class="md:w-full text-left ">
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
            <td class="py-4 px-4 ">{{ item.exchange }}</td>
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
    <h2 class="text-3xl md:text-4xl font-semibold my-8"> Analysis</h2>
    <div class="container shadow-2xl md:p-8">
      <table class="md:w-full text-left ">
        <thead>
          <tr>
            <th class="py-2 px-4  border-b ">#</th>
            <th class="py-2 px-4  border-b ">Coin</th>
            <th class="py-2 px-4  border-b ">Quantity</th>
            <th class="py-2 px-4  border-b ">Sold On</th>
            <th class="py-2 px-4  border-b ">Selling Price</th>
            <th class="py-2 px-4  border-b ">Bought On</th>
            <th class="py-2 px-4  border-b ">Bought At</th>
            <th class="py-2 px-4  border-b ">P/L</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in computedPNL" :key="index" class="border-b">
            <td class="py-4 px-4  ">{{ index + 1 }}</td>
            <td class="py-4 px-4 ">{{ item.coin }}</td>
            <td class="py-4 px-4  ">{{ item.quantity.toFixed(5) }}</td>
            <td class="py-4 px-4  ">{{ item.sellDate }}</td>
            <td class="py-4 px-4  " :style="{ color: item.sellPrice >= item.buyPrice ? 'green' : 'red' }">{{
              item.sellPrice.toFixed(5) }}</td>
            <td class="py-4 px-4  ">{{ item.buyDate }}</td>
            <td class="py-4 px-4  " :style="{ color: item.buyPrice >= item.sellPrice ? 'green' : 'red' }">{{
              item.buyPrice.toFixed(5) }}</td>
            <td class="py-4 px-4  ">{{ item.pnl.toFixed(5) }}</td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
  <Footer class="fixed" />
</template>

<script setup>
import { mainStore } from '~/store/mainstore';
import Transactions from '../accounts/transactions.vue';
import Index from '../aboutus/index.vue';
const store = mainStore()
const { transactions, pnl } = storeToRefs(store)

const computedPNL = computed(() => {
  if (!Array.isArray(pnl.value)) return [];
  return pnl.value.filter(record => record.pnl !== null);
});


</script>
