<template>
  <div class="p-4 md:p-16 bg-gray-50">
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-6 p-5 flex-wrap"
    >
      <div
        class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28"
      >
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center"
        >
          <Icon name="mdi:alert" class="size-7 text-red-500" />
        </div>
        <p class="text-xl font-medium whitespace-nowrap">
          Missing Transactions
        </p>
        <p class="text-2xl font-medium">0</p>
      </div>

      <div
        class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28 mt-2 sm:mt-0"
      >
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3457 7.27283H22.9457M18.1457 1.27283L24.1457 7.27283L18.1457 13.2728M25.3457 19.2728H3.7457M8.5457 13.2728L2.5457 19.2728L8.5457 25.2728"
              stroke="#06BC4F"
              stroke-width="3.6"
            />
          </svg>
        </div>
        <p class="text-xl font-medium">Total Transactions</p>
        <p class="text-2xl font-medium font-[Poppins]">
          {{ transactionsPagination?.totalCount }}
        </p>
      </div>

      <div
        class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28 mt-2 sm:mt-0"
      >
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.3608 0C20.6664 0 19.0413 0.673104 17.8432 1.87124C16.6451 3.06937 15.972 4.69439 15.972 6.38881C15.972 8.08323 16.6451 9.70825 17.8432 10.9064C19.0413 12.1045 20.6664 12.7776 22.3608 12.7776C24.0552 12.7776 25.6802 12.1045 26.8783 10.9064C28.0765 9.70825 28.7496 8.08323 28.7496 6.38881C28.7496 4.69439 28.0765 3.06937 26.8783 1.87124C25.6802 0.673104 24.0552 0 22.3608 0ZM0 22.3608C0 20.6664 0.673103 19.0414 1.87123 17.8433C3.06936 16.6451 4.69438 15.972 6.38879 15.972C8.0832 15.972 9.70822 16.6451 10.9063 17.8433C12.1045 19.0414 12.7776 20.6664 12.7776 22.3608C12.7776 24.0553 12.1045 25.6803 10.9063 26.8784C9.70822 28.0765 8.0832 28.7496 6.38879 28.7496C4.69438 28.7496 3.06936 28.0765 1.87123 26.8784C0.673103 25.6803 0 24.0553 0 22.3608ZM15.972 17.5692C15.972 17.1456 16.1403 16.7394 16.4398 16.4398C16.7393 16.1403 17.1456 15.972 17.5692 15.972H27.1524C27.576 15.972 27.9822 16.1403 28.2818 16.4398C28.5813 16.7394 28.7496 17.1456 28.7496 17.5692V25.5552C28.7496 26.4025 28.413 27.215 27.8139 27.814C27.2149 28.4131 26.4024 28.7496 25.5552 28.7496H19.1664C18.3192 28.7496 17.5067 28.4131 16.9076 27.814C16.3085 27.215 15.972 26.4025 15.972 25.5552V17.5692ZM0 1.5972C0 1.1736 0.168276 0.767343 0.467808 0.46781C0.767341 0.168276 1.17359 0 1.5972 0H11.1804C11.604 0 12.0102 0.168276 12.3098 0.46781C12.6093 0.767343 12.7776 1.1736 12.7776 1.5972V9.58321C12.7776 10.4304 12.441 11.2429 11.842 11.842C11.2429 12.4411 10.4304 12.7776 9.58319 12.7776H3.1944C2.34719 12.7776 1.53468 12.4411 0.935617 11.842C0.336551 11.2429 0 10.4304 0 9.58321V1.5972Z"
              fill="#F3BA2F"
            />
          </svg>
        </div>
        <p class="text-xl font-medium">Uncategorised Data</p>
        <p class="text-2xl font-medium">0</p>
      </div>
    </div>

    <div class="mx-auto w-full md:p-7 md:my-8" v-if="transactions?.length">
      <div class="flex items-center justify-between gap-3 p-4 md:p-7 flex-wrap">
        <button
          class="rounded-lg text-sm p-3 sm:px-4 #4aabab font-medium shadow-[0_0_10px_0] shadow-[#254BD34D]"
        >
          + ADD MISSING TRANSACTIONS
        </button>

        <DownloadExcel
          class="btn btn-primary"
          :data="allTransactions"
          :fields="excelFields"
          name="transaction.xls"
        >
          <button
            class="flex justify-center gap-2 rounded-full px-3 py-2 border bg-[#4AABAB] text-white font-semibold"
          >
            <Icon name="mdi:export-variant" class="w-6 h-6" />
            Export Report
          </button>
        </DownloadExcel>
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
            <tr
              v-for="(item, index) in transactions"
              :key="index"
              class="border-b"
            >
              <td class="p-4">
                {{ index + (transactionsPagination.currentPage - 1) * 50 + 1 }}
              </td>
              <td class="p-4 flex items-center gap-2">
                <img
                  :src="`/icons/${item.exchange?.toLowerCase()}.png`"
                  class="w-6 h-6 sm:w-8 sm:h-8"
                />
                {{ item?.exchange }}
              </td>
              <td class="p-4">{{ item?.coin }}</td>
              <td class="p-4 font-[Poppins]">
                <NuxtTime
                  :datetime="item.date"
                  month="short"
                  year="numeric"
                  day="2-digit"
                />
              </td>
              <td class="p-4">
                <p
                  v-if="item.type == 'buy' || item.type == 'deposited'"
                  class="text-green-500 flex items-center gap-1 font-[Poppins]"
                >
                  <Icon name="mdi:menu-up" class="w-8 h-8 text-teal-600" />
                  {{ item?.quantity }}
                </p>
                <p
                  v-else
                  class="text-red-500 flex items-center gap-1 font-[Poppins]"
                >
                  <Icon name="mdi:menu-down" class="w-8 h-8 text-red-600" />
                  {{ item?.quantity }}
                </p>
              </td>
              <td class="p-4 font-[Poppins]">{{ item?.total }}</td>
              <td class="p-4 font-[Poppins]">{{ item?.tds }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center gap-3 mt-6">
          <button
            @click="changePage(transactionsPagination.currentPage - 1)"
            :disabled="transactionsPagination.currentPage === 1"
            class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
          >
            Previous
          </button>

          <span class="px-4 py-2 font-[Poppins]">
            Page {{ transactionsPagination?.currentPage }} of
            {{ transactionsPagination?.totalPages }}
          </span>

          <button
            @click="changePage(transactionsPagination.currentPage + 1)"
            :disabled="
              transactionsPagination.currentPage ===
              transactionsPagination.totalPages
            "
            class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <div class="md:hidden flex flex-col space-y-3 p-2">
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
            <img :src="`/icons/${item.exchange?.toLowerCase()}.png`" class="w-6 h-6" />
            <span class="font-medium">{{ item?.exchange }}</span>
          </div>
          <div class="capitalize rounded-xl px-3 font-medium text-sm text-white" :class="item.type === 'sell'?'bg-red-500':'bg-green-500'">
            {{ item?.type }}
          </div>
         </div>
          <div class="flex justify-between mb-1">
            <span class="font-medium">Coin:</span>
            <span>{{ item?.coin }}</span>
          </div>
          <div class="flex justify-between mb-1">
            <span class="font-medium">Quantity:</span>
            <span
              :class="
                item.type === 'buy'
                  ? 'text-green-500 font-[Poppins]'
                  : 'text-red-500 font-[Poppins]'
              "
              >{{ item?.quantity }}</span
            >
          </div>
          <div class="flex justify-between mb-1">
            <span class="font-medium">Amount:</span>
            <span class="font-[Poppins]">{{ item?.total }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium">TDS:</span>
            <span class="font-[Poppins]">{{ item?.tds || 0 }}</span>
          </div>
        </div>
        <div class="flex justify-center gap-3 mt-6">
          <button
            @click="changePage(transactionsPagination.currentPage - 1)"
            :disabled="transactionsPagination.currentPage === 1"
            class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
          >
            Previous
          </button>

          <span class="px-4 py-2 font-[Poppins]">
            Page {{ transactionsPagination?.currentPage }} of
            {{ transactionsPagination?.totalPages }}
          </span>

          <button
            @click="changePage(transactionsPagination.currentPage + 1)"
            :disabled="
              transactionsPagination.currentPage ===
              transactionsPagination.totalPages
            "
            class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <div
      class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white border border-teal-500 rounded-xl flex items-center px-4 sm:px-10 py-3 sm:py-5 shadow-md z-20 opacity-60 hover:opacity-100 cursor-pointer"
    >
      <div
        class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center"
      >
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
          />
        </svg>
      </div>
      <p class="text-sm sm:text-base m-0 ml-3 sm:ml-5">Call an Expert Now</p>
    </div>
  </div>
</template>

<script setup>
const { $exportExcel } = useNuxtApp();
import { mainStore } from "~/store/mainstore";
const store = mainStore();
const allTransactions=ref([])
onMounted(async () => {
  await getTransactions({ page: 1, limit: 50 });
  // const res = await getTransactionsForExport({});
  // allTransactions.value = res;
});
const { transactions, pnl, total_pnl, transactionsPagination } =
  storeToRefs(store);
  
const excelFields = ref({
  Exchange: "exchange",
  Coin: "coin",
  Timestamp: "date",
  Quantity: "quantity",
  Amount: "total",
  Type: "type",
});

const changePage = async (page) => {
  await getTransactions({ page: page, limit: 50 });
};

</script>
