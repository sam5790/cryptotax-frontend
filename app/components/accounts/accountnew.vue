<template>
  <div class="md:p-10">
    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-col justify-center items-center shadow-md p-10 rounded-xl relative mt-4">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2">
          <img :src="'/avatar.png'" class="w-20 h-20 rounded-full ring-4 ring-white shadow-md" key="avatar" />
        </div>
        <h2 class="text-center text-xl font-medium">Total Exchanges</h2>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-10 mt-6 w-full">
          <div class="text-center sm:p-2">
            <h2 class="text-xl font-medium fontPoppins">
              {{ total_pnl[0]?.totalTransaction }}
            </h2>
            
            <p>Total Transactions</p>
            <div class="flex justify-center mt-2">
              <!-- <svg class="w-5 h-5 text-gray-800 dark:text-white"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
</svg> -->
<icon name="mdi:arrow-expand-horizontal" class="w-6 h-6 text-gray-600" />
</div>
          </div>
          <div class="text-center bg-green-200 rounded-2xl p-4 sm:p-2">
            <div v-if="total_pnl[0]?.totalPnl == 0">
              <h2 class="text-xl font-medium text-green-400 fontPoppins">0</h2>
            </div>
            <div v-else-if="total_pnl[0]?.totalPnl > 0">
              <h2 class="text-xl font-medium text-green-500 fontPoppins">
                {{ (total_pnl[0]?.totalPnl)?.toFixed(2) }}
              </h2>
            </div>
            <div v-else>
              <h2 class="text-xl font-medium text-red-600 fontPoppins">
                {{ (total_pnl[0]?.totalPnl)?.toFixed(2) }}
              </h2>
            </div>
            <p>Total Account Income</p>
          </div>
          <div class="text-center sm:p-2">
            <h2 class="text-xl font-medium fontPoppins">01</h2>
            <p>Total Imported Files</p>
            <div class="flex justify-center mt-2">
               <Icon name="mdi:files" class="w-6 h-6 text-gray-600" />
              <!-- <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="teal-500" viewBox="0 0 16 20">
    <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
</svg> -->
            </div>
          </div>
        </div>
      </div>
      <div class="md:min-w-[700px] md:mt-10 flex max-sm:mt-5 mb-4 mt-5">
        <input type="text" placeholder="Search your account"
          class="relative w-full rounded-full border border-gray-300 px-12 py-3 shadow-sm" />
      </div>
    </div>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-30 gap-4 md:mt-3 md:p-16 md:ml-10 max-sm:mb-3 ml-5 mb-4 p-1">
      <div class=" bg-white shadow-sm rounded-lg p-4" v-for="item in total_pnl" :key="item._id" 
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
            <h2 class="text-lg font-medium capitalize">
              {{ item?.exchange }}
            </h2>
          </div>

          <div class="rounded-md bg-teal-500 text-white px-3 py-1 text-sm shadow-sm">
            Data Synced
          </div>


 <div class="relative inline-block text-left">

  <div
    class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
    @click="toggleMenu(item._id)"
  >
    <Icon name="mdi:dots-vertical" class="w-6 h-6 text-gray-600" />
  </div>

  <div
    v-if="open === item._id"
    class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
  >
    <ul class="py-2 text-sm text-gray-700">
      <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit Now</li>
      <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete Now</li>
    </ul>
  </div>

</div>




        </div>

        <div class="flex  mt-4 ml-16">
          
          <button>
    <icon name="mdi:arrow-expand-horizontal" class="w-6 h-6 text-gray-600" />
</button>
          <h2 class="text-lg font-medium fontPoppins -mt-1 ml-2">{{ item?.totalTransaction }}</h2>
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
    <!-- <ExchangesList v-if="exchange" @close="exchange = false" @select="openDetails" /> -->
     <ExchangesList v-if="exchange" @close="exchange = false" @select="openDetails"/>
     <Addaccount v-if="showDetails" :account="selectedAccount" @close="showDetails = false"/>
  </div>
  <!-- <Footer /> -->
</template>

<script setup>
// import Exchangeslist from '../exchangesList.vue'
// import AddAccount from '~/components/addaccount.vue'
import { mainStore } from '~/store/mainstore'

const store = mainStore();
await getPnlDetails()
const { total_pnl } = storeToRefs(store);

const router = useRouter();
const exchange = ref(false);
const showDetails = ref(false);
const selectedAccount = ref(null);

const open = ref(null);


const toggleMenu = (id) => {
  open.value = open.value === id ? null : id;
};

console.log("totalpnl",total_pnl.value)
const buttonclick = () => {
  exchange.value = true;
};

function openDetails(item) {
  selectedAccount.value = item;
  showDetails.value = true;
  exchange.value = false;
}

</script>
<style scoped>

.fontPoppins {
  font-family: "Poppins", sans-serif !important;
}

</style>