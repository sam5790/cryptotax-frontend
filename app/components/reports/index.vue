<template>
  <div class="p-5 bg-gray-50 h-auto">
    <h2 class="text-2xl md:text-4xl font-semibold my-5 text-center">
      Transactions
    </h2>
    <div
      class="w-full hidden md:block overflow-x-auto md:p-8 bg-white rounded-lg p-4"
    >
      <table class="w-full min-w-[700px] text-left">
        <thead>
          <tr class="text-sm md:text-base">
            <th class="py-2 px-3 border-b">#</th>
            <th class="py-2 px-3 border-b">Exchange</th>
            <th class="py-2 px-3 border-b">Coin</th>
            <th class="py-2 px-3 border-b">Timestamp</th>
            <th class="py-2 px-3 border-b">Quantity</th>
            <th class="py-2 px-3 border-b">Amount</th>
            <th class="py-2 px-3 border-b">Type</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in transactions"
            :key="index"
            class="border-b text-sm md:text-base"
          >
            <td class="py-3 px-3 font-[Poppins]">
              {{ index + (transactionsPagination.currentPage - 1) * 50 + 1 }}
            </td>
            <td class="py-4 px-4 flex items-center gap-2">
              <img
                :src="`/icons/${item.exchange}.png`"
                class="w-6 h-6 sm:w-8 sm:h-8"
              />
              {{ item.exchange }}
            </td>
            <td class="py-3 px-3">{{ item.coin }}</td>
            <td class="py-3 px-3 font-[Poppins]">
              <NuxtTime
                :datetime="item.date"
                month="short"
                year="numeric"
                day="2-digit"
              />
            </td>

            <td class="py-3 px-3 font-[Poppins]">
              <div
                v-if="item.type === 'buy' || item.type === 'deposited'"
                class="flex items-center text-green-500"
              >
                <svg
                  class="w-3 h-2 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="green"
                  viewBox="0 0 16 10"
                >
                  <path
                    d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                  />
                </svg>
                {{ item.quantity }}
              </div>

              <div v-else class="flex items-center text-red-500">
                <svg
                  class="w-3 h-2 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 16 10"
                >
                  <path
                    d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                  />
                </svg>
                {{ item.quantity }}
              </div>
            </td>

            <td class="py-3 px-3 font-[Poppins]">{{ item.total }}</td>
            <td class="py-3 px-3 capitalize">{{ item.type }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="block md:hidden space-y-4">
      <div
        v-for="(item, index) in transactions"
        :key="index"
        class="border p-4 rounded-lg shadow-md bg-white"
      >
        <div class="flex justify-between items-center mb-2 flex-wrap">
          <span class="font-semibold font-[Poppins]"
            >#{{
              index + (transactionsPagination.currentPage - 1) * 50 + 1
            }}</span
          >
          <span class="text-gray-400 text-sm font-[Poppins]">
            <NuxtTime
              :datetime="item.date"
              month="short"
              year="numeric"
              day="2-digit"
          /></span>
        </div>
        <div class="flex justify-between items-center my-2">
          <div class="flex items-center gap-2">
            <img :src="`/icons/${item.exchange}.png`" class="w-6 h-6" />
            <span class="font-medium">{{ item.exchange }}</span>
          </div>
          <div
            class="capitalize rounded-xl px-3 font-medium text-sm text-white"
            :class="item.type === 'sell' ? 'bg-red-500' : 'bg-green-500'"
          >
            {{ item.type }}
          </div>
        </div>
        <div class="flex justify-between mb-1">
          <span class="font-medium">Coin:</span>
          <span>{{ item.coin }}</span>
        </div>
        <div class="flex justify-between mb-1">
          <span class="font-medium">Quantity:</span>
          <span
            :class="
              item.type === 'sell'
                ? 'text-red-500 font-[Poppins]'
                : 'text-green-500 font-[Poppins]'
            "
            >{{ item.quantity }}</span
          >
        </div>
        <div class="flex justify-between mb-1">
          <span class="font-medium">Amount:</span>
          <span class="font-[Poppins]">{{ item.total }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-3 mt-6">
      <button
        @click="changeTransactionPage(transactionsPagination?.currentPage - 1)"
        :disabled="transactionsPagination?.currentPage === 1"
        class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
      >
        Previous
      </button>

      <span class="px-4 py-2">
        Page {{ transactionsPagination?.currentPage }} of
        {{ transactionsPagination?.totalPages }}
      </span>

      <button
        @click="changeTransactionPage(transactionsPagination?.currentPage + 1)"
        :disabled="
          transactionsPagination?.currentPage ===
          transactionsPagination?.totalPages
        "
        class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
      >
        Next
      </button>
    </div>
    <!-- Analysis -->
    <h2 class="text-2xl md:text-4xl font-semibold my-8 text-center">
      Analysis
    </h2>
    <div
      class="w-full hidden md:block overflow-x-auto md:p-8 bg-white rounded-lg mb-10 p-4"
    >
      <table class="w-full min-w-[800px] text-left">
        <thead>
          <tr class="text-sm md:text-base">
            <th class="py-2 px-3 border-b">#</th>
            <th class="py-2 px-3 border-b">Coin</th>
            <th class="py-2 px-3 border-b">Quantity</th>
            <th class="py-2 px-3 border-b">Sold On</th>
            <th class="py-2 px-3 border-b">Selling Price</th>
            <th class="py-2 px-3 border-b">Bought On</th>
            <th class="py-2 px-3 border-b">Bought At</th>
            <th class="py-2 px-3 border-b">PNL</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in pnl"
            :key="pnl?._id"
            class="border-b text-sm md:text-base"
          >
            <td class="py-3 px-3 font-[Poppins]">
              {{ index + (taxPagination.currentPage - 1) * 50 + 1 }}
            </td>
            <td class="py-3 px-3">{{ item.coin }}</td>
            <td class="py-3 px-3 font-[Poppins]">{{ item.quantity }}</td>
            <td class="py-3 px-3 font-[Poppins]">
              <NuxtTime
                :datetime="item.sellDate"
                month="short"
                year="numeric"
                day="2-digit"
              />
            </td>

            <td
              class="py-3 px-3 font-[Poppins]"
              :style="{
                color: item.sellPrice >= item.buyPrice ? 'green' : 'red',
              }"
            >
              {{ item.sellPrice }}
            </td>

            <td class="py-3 px-3 font-[Poppins]">
              <NuxtTime
                :datetime="item.buyDate"
                month="short"
                year="numeric"
                day="2-digit"
              />
            </td>

            <td
              class="py-3 px-3 font-[Poppins]"
              :style="{
                color: item.buyPrice >= item.sellPrice ? 'green' : 'red',
              }"
            >
              {{ item.buyPrice }}
            </td>

            <td class="py-3 px-3 font-[Poppins]">{{ item.pnl }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="block md:hidden space-y-4">
      <div
        v-for="(item, index) in pnl"
        :key="index"
        class="p-4 rounded-xl shadow-md bg-white border"
      >
        <div class="flex justify-between mb-2 flex-wrap">
          <span class="font-semibold font-[Poppins]"
            >#{{ index + (taxPagination?.currentPage - 1) * 50 + 1 }}</span
          >
          <span
            class="text-gray-500 font-semibold text-sm font-[Poppins]"
            :class="item.pnl > 0 ? 'text-green-700' : 'text-red-500'"
          >
            {{ item.pnl }}</span
          >
        </div>
        <div class="flex items-center mb-3 gap-2">
          <img :src="`/icons/${item.exchange}.png`" class="w-7 h-7" />
          <span class="font-medium">{{ item.exchange }}</span>
        </div>
        <div class="flex justify-between my-1">
          <span class="font-medium">Coin</span>
          <span>{{ item.coin }}</span>
        </div>
        <div class="flex justify-between my-1 flex-wrap">
          <span class="font-medium">Buy</span>
          <span
            class="text-green-700 flex items-center flex-wrap gap-1 font-[Poppins]"
            ><Icon name="mdi:menu-up" class="w-8 h-8" />{{ item.buyPrice }} (
            <NuxtTime
              :datetime="item.buyDate"
              month="short"
              year="numeric"
              day="2-digit"
            />)</span
          >
        </div>
        <div class="flex justify-between my-1 flex-wrap">
          <span class="font-medium">Sell</span>
          <span
            class="text-red-600 flex items-center gap-1 font-[Poppins] flex-wrap"
            ><Icon name="mdi:menu-down" class="w-8 h-8" />{{ item.sellPrice }}(
            <NuxtTime
              :datetime="item.sellDate"
              month="short"
              year="numeric"
              day="2-digit"
            />)</span
          >
        </div>
        <div class="flex justify-between my-1 flex-wrap">
          <span class="font-medium">Quantity</span>
          <span class="font-[Poppins]">
            {{ item.quantity }}
          </span>
        </div>
        <div class="flex justify-between mb-1 flex-wra">
          <span class="font-medium">Balance</span>
          <span class="font-[Poppins]">{{ item.remaining }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-3 mt-6">
      <button
        @click="changeTaxPage(taxPagination?.currentPage - 1)"
        :disabled="taxPagination?.currentPage === 1"
        class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
      >
        Previous
      </button>

      <span class="px-4 py-2">
        Page {{ taxPagination?.currentPage }} of
        {{ taxPagination?.totalPages }}
      </span>

      <button
        @click="changeTaxPage(taxPagination?.currentPage + 1)"
        :disabled="taxPagination?.currentPage === taxPagination?.totalPages"
        class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { mainStore } from "~/store/mainstore";
onMounted(async () => {
  await getPnlDetails({ page: 1, limit: 50 });
  await getTransactions({ page: 1, limit: 50 });
});
const store = mainStore();
const { transactions, pnl, taxPagination, transactionsPagination } =
  storeToRefs(store);

const changeTaxPage = async (page) => {
  await getPnlDetails({ page: page, limit: 50 });
};
const changeTransactionPage = async (page) => {
  await getTransactions({ page: page, limit: 50 });
};
</script>
