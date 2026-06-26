<template>
  <div class="p-4 md:p-16 bg-gray-50">
    <div class="flex flex-col sm:flex-row justify-center items-center gap-6 p-5 flex-wrap">
      <div class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28">
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center">
          <Icon name="mdi:sack-percent" class="size-7 text-blue-500" />
        </div>
        <p class="text-xl font-medium whitespace-nowrap">
          {{ activeTab === 'transactions' ? 'Total TDS' : activeTab === 'futureOrders' ? 'Realised PNL' :
          'Earn Interest'}}
        </p>
        <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />
        <div v-else>

          <p v-if="activeTab === 'transactions'" class="text-2xl font-medium font-[Poppins]">
            {{ transactionsPagination?.totalTds > 0 ? parseFloat(transactionsPagination?.totalTds)?.toFixed(2) : 0 }}
          </p>
          <p v-if="activeTab === 'futureOrders'" class="text-2xl font-medium font-[Poppins]">
            {{ futureTransactionsPagination?.realisedPnl !== 0 ?
              parseFloat(futureTransactionsPagination?.realisedpnl)?.toFixed(2) : 0 }}</p>
          <p v-if="activeTab === 'earnHistory'" class="text-2xl font-medium font-[Poppins]">
            {{ earnTransactionsPagination?.netinterest !== 0 ?
              `₹ ${parseFloat(earnTransactionsPagination?.netinterest)?.toFixed(5)}` : 0 }}</p>
        </div>
      </div>

      <div
        class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28 mt-2 sm:mt-0">
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.3457 7.27283H22.9457M18.1457 1.27283L24.1457 7.27283L18.1457 13.2728M25.3457 19.2728H3.7457M8.5457 13.2728L2.5457 19.2728L8.5457 25.2728"
              stroke="#06BC4F" stroke-width="3.6" />
          </svg>
        </div>
        <p class="text-xl font-medium">Total Transactions</p>
        <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />
        <div v-else>

          <p v-if="activeTab === 'transactions'" class="text-2xl font-medium font-[Poppins]">
            {{ transactionsPagination?.totalCount }}
          </p>
          <p v-if="activeTab === 'futureOrders'" class="text-2xl font-medium font-[Poppins]">
            {{ futureTransactionsPagination?.totalCount }}</p>
          <p v-if="activeTab === 'earnHistory'" class="text-2xl font-medium font-[Poppins]">
            {{ earnTransactionsPagination?.totalCount }}</p>
        </div>

      </div>

      <div
        class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28 mt-2 sm:mt-0">
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M22.3608 0C20.6664 0 19.0413 0.673104 17.8432 1.87124C16.6451 3.06937 15.972 4.69439 15.972 6.38881C15.972 8.08323 16.6451 9.70825 17.8432 10.9064C19.0413 12.1045 20.6664 12.7776 22.3608 12.7776C24.0552 12.7776 25.6802 12.1045 26.8783 10.9064C28.0765 9.70825 28.7496 8.08323 28.7496 6.38881C28.7496 4.69439 28.0765 3.06937 26.8783 1.87124C25.6802 0.673104 24.0552 0 22.3608 0ZM0 22.3608C0 20.6664 0.673103 19.0414 1.87123 17.8433C3.06936 16.6451 4.69438 15.972 6.38879 15.972C8.0832 15.972 9.70822 16.6451 10.9063 17.8433C12.1045 19.0414 12.7776 20.6664 12.7776 22.3608C12.7776 24.0553 12.1045 25.6803 10.9063 26.8784C9.70822 28.0765 8.0832 28.7496 6.38879 28.7496C4.69438 28.7496 3.06936 28.0765 1.87123 26.8784C0.673103 25.6803 0 24.0553 0 22.3608ZM15.972 17.5692C15.972 17.1456 16.1403 16.7394 16.4398 16.4398C16.7393 16.1403 17.1456 15.972 17.5692 15.972H27.1524C27.576 15.972 27.9822 16.1403 28.2818 16.4398C28.5813 16.7394 28.7496 17.1456 28.7496 17.5692V25.5552C28.7496 26.4025 28.413 27.215 27.8139 27.814C27.2149 28.4131 26.4024 28.7496 25.5552 28.7496H19.1664C18.3192 28.7496 17.5067 28.4131 16.9076 27.814C16.3085 27.215 15.972 26.4025 15.972 25.5552V17.5692ZM0 1.5972C0 1.1736 0.168276 0.767343 0.467808 0.46781C0.767341 0.168276 1.17359 0 1.5972 0H11.1804C11.604 0 12.0102 0.168276 12.3098 0.46781C12.6093 0.767343 12.7776 1.1736 12.7776 1.5972V9.58321C12.7776 10.4304 12.441 11.2429 11.842 11.842C11.2429 12.4411 10.4304 12.7776 9.58319 12.7776H3.1944C2.34719 12.7776 1.53468 12.4411 0.935617 11.842C0.336551 11.2429 0 10.4304 0 9.58321V1.5972Z"
              fill="#F3BA2F" />
          </svg>
        </div>
        <p class="text-xl font-medium">Uncategorised Data</p>
        <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />

        <div v-else>

          <p v-if="activeTab === 'transactions'" class="text-2xl font-medium font-[Poppins]">
            {{ transactionsPagination?.invalidTransactions }}
          </p>
          <p v-if="activeTab === 'futureOrders'" class="text-2xl font-medium font-[Poppins]">
            {{ futureTransactionsPagination?.invalidTransactions || 0 }}</p>
          <p v-if="activeTab === 'earnHistory'" class="text-2xl font-medium font-[Poppins]">
            {{ earnTransactionsPagination?.invalidTransactions || 0 }}</p>
        </div>
      </div>
    </div>

    <!-- Tabs Container -->
    <div class="flex justify-start sm:justify-center mt-4">
      <div class="flex gap-2 sm:gap-4 sm:min-w-max sm:px-2">
        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
          class="px-2 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-500 border-b-2"
          :class="activeTab === tab.id ? 'border-[#4AABAB] text-[#4AABAB]' : 'border-transparent text-gray-500 hover:text-gray-800'">
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div>
      <AccountsTransactionsList v-if="activeTab === 'transactions'" />
      <AccountsFutureList v-else-if="activeTab === 'futureOrders'" />
      <AccountsEarnHistoryList v-else-if="activeTab === 'earnHistory'" />
    </div>

    <div
      class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white border border-teal-500 rounded-xl flex items-center px-4 sm:px-10 py-3 sm:py-5 shadow-md z-20 opacity-60 hover:opacity-100 cursor-pointer">
      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 sm:w-6 sm:h-6">
          <path
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
        </svg>
      </div>
      <p class="text-sm sm:text-base m-0 ml-3 sm:ml-5">Call an Expert Now</p>
    </div>
  </div>

</template>

<script setup>
import { mainStore } from "~/store/mainstore";
const store = mainStore();
const activeTab = ref("transactions");
const tabs = [
  { id: "transactions", label: "Transactions" },
  { id: "futureOrders", label: "Future Orders" },
  { id: "earnHistory", label: "Earn History" },
];

const { transactionsPagination, loading, futureTransactionsPagination, earnTransactionsPagination } = storeToRefs(store);

</script>
