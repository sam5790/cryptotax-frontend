<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <div
        class="flex flex-col justify-center items-center shadow-[0_0_10px_0] shadow-[#254BD34D] p-10 rounded-xl relative mt-4"
      >
        <div class="absolute -top-[60px] left-1/2 -translate-x-1/2 ">
          <img
            :src="'/new-avatar.png'"
            class="w-28 h-28 rounded-full bg-white shadow-[0_0_10px_0] shadow-[#254BD34D]"
          />
        </div>
        <h2 class="text-center text-xl font-medium pt-5">Total Exchanges</h2>
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-10  w-full"
        >
          <div class="text-center sm:p-2">
            <div class="text-4xl font-medium font-[Poppins]">
              {{ totalTransactions?.TransactionSum }}
            </div>

            <p>Total Transactions</p>
            <div class="flex justify-center mt-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.541016 7.45807H24.0634M18.8362 0.924072L25.3702 7.45807L18.8362 13.9921M26.677 20.5261H3.15462M8.38182 13.9921L1.84782 20.5261L8.38182 27.0601"
                  stroke="#4AABAB"
                  stroke-width="2.6136"
                />
              </svg>
            </div>
          </div>
          <div class="text-center bg-[#37D35921] rounded-2xl px-6 py-3">
            <div
              class="text-3xl font-medium font-[Poppins]"
              :class="
                totalTransactions?.PnlSum > 0
                  ? 'text-[#31B431]'
                  : totalTransactions?.PnlSum < 0
                  ? 'text-red-500'
                  : ''
              "
            >
              {{ totalTransactions?.PnlSum?.toFixed(2) }}
            </div>

            <p>Total Account Income</p>
          </div>
          <div class="text-center sm:p-2">
            <div class="text-4xl font-medium font-[Poppins]">
              {{ totalTransactions?.TotalSummary }}
            </div>
            <p>Total Imported Files</p>
            <div class="flex justify-center mt-2">
              <Icon name="mdi:files" class="w-6 h-6 text-[#4AABAB]" />
            </div>
          </div>
        </div>
      </div>
     
      <div class="relative md:min-w-[700px] md:mt-10 flex max-sm:mt-5 mb-4 mt-5">
  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
    <svg width="20" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.6217 21.5628L16.2802 17.0122M16.2802 9.04878C16.2802 11.1608 15.4797 13.1863 14.0549 14.6798C12.6301 16.1732 10.6976 17.0122 8.68257 17.0122C6.66756 17.0122 4.73508 16.1732 3.31025 14.6798C1.88542 13.1863 1.08496 11.1608 1.08496 9.04878C1.08496 6.93674 1.88542 4.9112 3.31025 3.41777C4.73508 1.92433 6.66756 1.08533 8.68257 1.08533C10.6976 1.08533 12.6301 1.92433 14.0549 3.41777C15.4797 4.9112 16.2802 6.93674 16.2802 9.04878Z"
            stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
  <input
    type="text"
    placeholder="Search your account"
    class="w-full rounded-full border border-gray-300 pl-12 pr-4 py-3 shadow-sm"
    />
     </div>
    </div>
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 w-30 gap-4 md:mt-3 md:p-16 md:ml-10 max-sm:mb-3 ml-5 mb-4 p-1"
    >
      <div
        class="bg-white shadow-sm rounded-lg p-4"
        v-for="item in total_pnl"
        :key="item._id"
      >
        <div class="flex gap-4 items-center justify-between">
          <!-- <div v-if="transactions[0].exchange==='CoinDCX'">
            <img src="/icons/coindcx.png" class="w-8 h-8" />
          </div>
          <div v-else>
            <img src="/icons/wazirx.png" class="w-8 h-8" />
          </div> -->

          <div>
            <img :src="`/icons/${item?.exchange}.png`" class="w-8 h-8" />
          </div>

          <div>
            <div class="text-lg font-medium capitalize">
              {{ item?.exchange }}
            </div>
            <div class="flex ">
          <button>
             <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.541016 7.45807H24.0634M18.8362 0.924072L25.3702 7.45807L18.8362 13.9921M26.677 20.5261H3.15462M8.38182 13.9921L1.84782 20.5261L8.38182 27.0601"
                  stroke="#4AABAB"
                  stroke-width="2.6136"
                />
              </svg>
          </button>
          <div class="text-lg font-medium fontPoppins -mt-1 ml-2">
            {{ item?.totalTransaction }}
          </div>
        </div>
          </div>

          <div
            class="rounded-md bg-teal-500 text-white px-3 py-1 text-sm shadow-sm"
          >
            Data Synced
          </div>

          <div class="relative inline-block text-left">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
              @click="toggleMenu(item._id)"
            >
              <Icon name="mdi:dots-vertical" class="w-6 h-6 text-gray-600" />
            </div>

            <div class="relative">
              <div class=" rounded-full flex items-center justify-center
                   cursor-pointer hover:bg-gray-100" @click="toggleMenu(item._id)">
                <Icon name="mdi:dots-vertical" class=" text-gray-600" />
              </div>

              <div v-if="open === item._id" class="absolute right-0 mt-2 w-36 sm:w-40 bg-white border border-gray-200 
                   rounded-lg shadow-lg z-50">
                <ul class="py-1 sm:py-2 text-sm text-gray-700">
                  <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit Now</li>
                  <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete Now</li>
                </ul>
              </div>
            </div>
          </div>
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
      <p class="text-sm sm:text-base m-0 ml-3 sm:ml-5 opacity-90">
        Add a new account
      </p>
    </div>
    <!-- <ExchangesList v-if="exchange" @close="exchange = false" @select="openDetails" /> -->
    <Exchangeslist v-if="exchange" @close="exchange = false" @select="openDetails" />
    <Addaccount v-if="showDetails" :account="selectedAccount" @close="showDetails = false" />
  </div>
  <!-- <Footer /> -->
</template>

<script setup>
import { mainStore } from "~/store/mainstore";

const store = mainStore();
onMounted(async () => {
  await getAccounts();
});
const { total_pnl, totalTransactions } = storeToRefs(store);

const router = useRouter();
const exchange = ref(false);
const showDetails = ref(false);
const selectedAccount = ref(null);

const open = ref(null);

const toggleMenu = (id) => {
  open.value = open.value === id ? null : id;
};

const buttonclick = () => {
  exchange.value = true;
};

function openDetails(item) {
  selectedAccount.value = item;
  showDetails.value = true;
  exchange.value = false;
}
</script>
