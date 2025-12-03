<template>
  <div class="md:p-10">
    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-col justify-center items-center shadow-2xl p-10 rounded-xl relative mt-4">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2">
          <img :src="'/avatar.png'" class="w-20 h-20 rounded-full ring-4 ring-white shadow-lg" key="avatar" />
        </div>
        <h2 class="text-center text-xl font-medium">Total Exchanges</h2>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-10 mt-6 w-full">
          <div class="text-center sm:p-2">
            <h2 class="text-xl font-medium">
              {{ transactions.length }}
            </h2>
            <p>Total Transactions</p>
          </div>
          <div class="text-center bg-green-200 rounded-2xl p-4 sm:p-2">
            <div v-if="PNL_TOTAL == 0">
              <h2 class="text-xl font-medium text-green-400">0</h2>
            </div>
            <div v-else-if="PNL_TOTAL > 0">
              <h2 class="text-xl font-medium text-green-500">
                {{ PNL_TOTAL.toFixed(2) }}
              </h2>
            </div>
            <div v-else>
              <h2 class="text-xl font-medium text-red-600">
                {{ PNL_TOTAL.toFixed(2) }}
              </h2>
            </div>
            <p>Total Account Income</p>
          </div>
          <div class="text-center sm:p-2">
            <h2 class="text-xl font-medium">01</h2>
            <p>Total Imported Files</p>
          </div>
        </div>
      </div>
      <div class="md:min-w-[700px] md:mt-10 flex max-sm:mt-5 mb-4 mt-5">
        <input type="text" placeholder="Search your account"
          class="relative w-full rounded-full border border-gray-300 px-12 py-3 shadow-sm" />
      </div>
    </div>

    <div class="flex w-30 gap-4 md:mt-3 md:p-16 md:ml-10 max-sm:mb-3 ml-5 mb-4 p-1">
      <div class="shadow-2xl rounded-2xl p-5" v-if="transactions.length > 0">
        <div class="flex gap-4 items-center justify-between">
          <!-- <div v-if="transactions[0].exchange==='CoinDCX'">
              <img src="/icons/coindcx.png" class="w-8 h-8" />
      
                         </div>
                      <div v-else>
                            <img src="/icons/wazirx.png" class="w-8 h-8" />
                                </div> -->

          <div>
            <img :src="`/icons/${transactions[0].exchange}.png`" class="w-8 h-8" />
          </div>

          <div>
            <h2 class="text-lg font-medium capitalize">
              {{ transactions[0].exchange }}
            </h2>
          </div>

          <div class="rounded-md bg-teal-500 text-white px-3 py-1 text-sm shadow-sm">
            Data Synced
          </div>

          <div class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        <div class="mt-4 ml-16">
          <h2 class="text-lg font-medium">{{ transactions.length }}</h2>
        </div>
      </div>
    </div>

    <div @click="buttonclick"
      class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white border border-teal-500 rounded-xl flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 shadow-md z-10 opacity-80">
      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-6 h-6 sm:w-8 sm:h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <p class="text-sm sm:text-base m-0 ml-3 sm:ml-5 opacity-90">Add a new account</p>
    </div>

    <ExchangesList v-if="exchange" @close="exchange = false" @select="openDetails" />
    <AddAccount v-if="showDetails" :account="selectedAccount" @close="showDetails = false" />
  </div>
  <!-- <Footer /> -->
</template>

<script setup>
// import Exchangeslist from '../exchangesList.vue'
// import AddAccount from '~/components/addaccount.vue'
import { mainStore } from '~/store/mainstore'

const store = mainStore();
const { transactions, PNL_TOTAL } = storeToRefs(store);

const router = useRouter();
const exchange = ref(false);
const showDetails = ref(false);
const selectedAccount = ref(null);

const buttonclick = () => {
  exchange.value = true;
};

function openDetails(item) {
  selectedAccount.value = item;
  showDetails.value = true;
  exchange.value = false;
}
</script>
