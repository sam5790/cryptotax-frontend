<template>
  <div class="md:p-10">
    <div class="flex flex-col justify-center items-center">

      <div class="flex flex-col justify-center items-center shadow-2xl p-10 rounded-xl relative ">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2">
          <img src="/avatar.png" class="w-20 h-20 rounded-full ring-4 ring-white shadow-lg" />
        </div>
        <h2 class="text-center text-xl font-medium">Total Exchanges</h2>
        <div class="md:p-3 flex justify-center">

          <div class="md:p-2 text-center">
            <h2 class="text-xl font-medium">{{ transactions.length }}</h2>
            <p class="">Total Transactions</p>
          </div>

          <div class="md:p-2 text-center bg-green-200 rounded-2xl">

            <div v-if="PNL_TOTAL == 0">

              <h2 class="text-xl font-medium text-green-400">
                0
              </h2>
            </div>
            <div v-else-if="PNL_TOTAL > 0">

              <h2 class="text-xl font-medium text-green-500">
                {{
                  PNL_TOTAL.toFixed(2)
                }}
              </h2>
            </div>
            <div v-else>
              <h2 class="text-xl font-medium text-red-600">
                {{ PNL_TOTAL.toFixed(2) }}
              </h2>
            </div>

            <p>Total Account Income</p>
          </div>

          <div class="md:p-2 text-center">
            <h2 class="text-xl font-medium">01</h2>
            <p>Total Imported Files</p>
          </div>
        </div>
      </div>


      <div class="md:min-w-[700px] md:mt-10 flex">
        <input type="text" placeholder="Search your account"
          class="relative w-full rounded-full border border-gray-300 px-12 py-3 shadow-sm " />
      </div>

    </div>

    <div class=" flex w-30 gap-4 md:mt-6 md:p-16 md:ml-10">

      <div class="shadow-2xl rounded-2xl p-5" v-if="transactions.length > 0">
        <div class="flex gap-4 items-center justify-between ">


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

    <div @click="buttonclick" class="fixed bottom-12 right-12 bg-white border border-teal-500 rounded-xl 
         flex items-center gap-2 px-10 py-5 shadow-md">
      <div class="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>

      <p class="m-0 ml-5">
        Add a new account
      </p>
    </div>
    <Exchangeslist v-if="exchange" @close="exchange = false" @select="openDetails" />
    <addaccount v-if="showDetails" :account="selectedAccount" @close="showDetails = false" />
  </div>
  <Footer />
</template>

<script setup>
import Exchangeslist from '../exchangeslist.vue'
import { mainStore } from '~/store/mainstore'

const store = mainStore()
const { transactions, PNL_TOTAL } = storeToRefs(store)

const router = useRouter()
const exchange = ref(false)
const showDetails = ref(false)
const selectedAccount = ref(null)

const buttonclick = () => {
  exchange.value = true
}

function openDetails(item) {
  selectedAccount.value = item
  showDetails.value = true
  exchange.value = false
}


</script>