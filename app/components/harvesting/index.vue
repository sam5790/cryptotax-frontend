<template>
  <div class="bg-white mx-auto p-4 md:p-7 my-5 md:my-8 w-full rounded-lg">
    <div class="flex flex-col items-center mb-10">
      <h1 class="text-2xl sm:text-3xl font-bold">
        <div class="flex flex-wrap gap-3">
          Tax
          <div class="relative text-[#4aabab]">
            Harvesting
            <CurvedLine />
          </div>
        </div>
      </h1>
      <p class="text-gray-500 mt-3 text-center">
        Check how your portfolio fare today
      </p>
    </div>

    <div class="flex flex-wrap gap-5 justify-center mb-10">
      <div class="shadow-md bg-white p-4 w-full sm:w-[300px] rounded-lg text-center sm:text-left">
        <p>Current Value</p>
        <h1 class="text-2xl">0 INR</h1>
      </div>

      <div class="shadow-md bg-white p-4 w-full sm:w-[300px] rounded-lg text-center sm:text-left">
        <p>Selling Value</p>
        <h1 class="text-2xl">0 INR</h1>
      </div>

      <div class="shadow-md bg-white p-4 w-full sm:w-[300px] rounded-lg">
        <div class="flex justify-between sm:justify-start">
          <p>Tax:</p>
          <h3 class="ml-5">0 INR</h3>
        </div>
        <div class="flex justify-between sm:justify-start mt-4">
          <p>Rate:</p>
          <h3 class="ml-5">10%</h3>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto w-full">
      <div class="flex justify-end mb-4 md:hidden px-2">
        <button @click="isFilterDrawerOpen = true"
          class="flex justify-center items-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-50 font-semibold">
          <Icon name="mdi:filter-variant" class="size-6 text-[#4AABAB]" />
          Filters
        </button>
      </div>

      <div v-if="isFilterDrawerOpen" class="fixed inset-0 bg-black/40 z-40 md:hidden"
        @click="isFilterDrawerOpen = false">
      </div>
      <div
        class="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden"
        :class="isFilterDrawerOpen ? 'translate-x-0' : 'translate-x-full'">
        <div class="flex justify-between items-center p-4 border-b">
          <h3 class="text-lg font-semibold text-gray-800">Filters & Sort</h3>
          <button @click="isFilterDrawerOpen = false" class="text-gray-500 hover:text-gray-800">
            <Icon name="mdi-close" class="size-6" />
          </button>
        </div>
        <div class="p-6 space-y-6 overflow-y-auto" style="height: calc(100% - 130px);">
          <div>
            <label for="exchange-filter" class="block text-sm font-medium text-gray-700 mb-1">Exchange</label>
            <select id="exchange-filter" v-model="selectedExchange"
              class="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#4AABAB] focus:ring-[#4AABAB] py-2 px-3 border">
              <option value="">All Exchanges</option>
              <option v-for="exchange in sellRemainingPagination?.exchange" :key="exchange" :value="exchange">
                {{ exchange }}
              </option>
            </select>
          </div>
          <div>
            <label for="coin-filter" class="block text-sm font-medium text-gray-700 mb-1">Coin</label>
            <select id="coin-filter" v-model="selectedCoin"
              class="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#4AABAB] focus:ring-[#4AABAB] py-2 px-3 border">
              <option value="">All Coins</option>
              <option v-for="coin in sellRemainingPagination?.coins" :key="coin" :value="coin">
                {{ coin }}
              </option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="sort-by" class="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select id="sort-by" v-model="sortBy"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#4AABAB] focus:ring-[#4AABAB] py-2 px-3 border">
                <option value="">Default</option>
                <option value="quantity">Quantity</option>
              </select>
            </div>
            <div>
              <label for="sort-order" class="block text-sm font-medium text-gray-700 mb-1">Order</label>
              <select id="sort-order" v-model="sortOrder"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#4AABAB] focus:ring-[#4AABAB] py-2 px-3 border">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-4 border-t bg-white flex gap-4">
          <button @click="clearFilters"
            class="w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition-colors">
            Clear
          </button>
          <button @click="applyFilters"
            class="w-full py-2 border border-[#4AABAB] bg-[#4AABAB] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Apply
          </button>
        </div>
      </div>

      <div class="hidden md:block">
        <table class="w-full text-left">
          <thead>
            <tr class="border-b text-gray-400">
              <th class="py-3 px-4">#</th>
              <th class="py-3 px-4 relative">
                <div class="flex items-center gap-1 "
                  :class="openExchangeFilter || selectedExchange ? 'text-[#4AABAB]' : ''">
                  Exchange
                  <Icon name="mdi-filter-menu" class="cursor-pointer"
                    @click.stop="openExchangeFilter = !openExchangeFilter" />
                </div>
                <div v-if="openExchangeFilter"
                  class="absolute left-0 top-full max-w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1 overflow">

                  <ul class="text-sm text-gray-700 max-h-48 min-w-32 overflow-y-auto"
                    v-if="sellRemainingPagination?.exchange?.length > 0">
                    <li v-for="exchange in sellRemainingPagination?.exchange" :key="exchange"
                      @click="(selectedExchange = exchange), (openExchangeFilter = false)"
                      class="px-2 py-2 m-1 cursor-pointer rounded-md transition flex items-center gap-6 justify-between"
                      :class="exchange === selectedExchange
                        ? 'bg-[#4AABAB] text-white'
                        : 'text-gray-600 hover:bg-[#4AABAB]/20'
                        ">
                      <div class="flex items-center gap-2">
                        <img :src="`/icons/${exchange?.toLowerCase()}.png`" :alt="exchange"
                          class="h-7 w-7 rounded-full border-2 border-white -ml-3 first:ml-0" /> {{ exchange }}
                      </div>
                      <Icon v-if="exchange === selectedExchange" name="mdi-close-circle"
                        class="cursor-pointer text-white shrink-0 text-xl hover:scale-105 tranition-all duration-300"
                        @click.stop="(selectedExchange = ''), (openExchangeFilter = false)" />
                    </li>
                  </ul>
                  <div v-else class="px-4 py-2 text-sm text-gray-500">
                    No coins found.
                  </div>
                </div>
              </th>
              <th class="py-3 px-4 relative">
                <div class="flex items-center gap-1" :class="openCoinFilter || selectedCoin ? 'text-[#4AABAB]' : ''">
                  Coin
                  <Icon name="mdi-filter-menu" class="cursor-pointer" @click.stop="openCoinFilter = !openCoinFilter" />
                </div>
                <div v-if="openCoinFilter"
                  class="absolute left-0 top-full max-w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1 overflow">



                  <ul class="text-sm text-gray-700 max-h-48 min-w-32 overflow-y-auto"
                    v-if="sellRemainingPagination?.coins?.length > 0">
                    <li v-for="coin in sellRemainingPagination?.coins" :key="coin"
                      @click="selectedCoin = coin, openCoinFilter = false"
                      class="px-2 py-2 m-1 cursor-pointer rounded-md transition flex items-center justify-between"
                      :class="coin === selectedCoin
                        ? 'bg-[#4AABAB] text-white'
                        : 'text-gray-600 hover:bg-[#4AABAB]/20'
                        ">
                      {{ coin }}
                      <Icon v-if="coin === selectedCoin" name="mdi-close-circle"
                        class="cursor-pointer text-white shrink-0 text-xl hover:scale-105 tranition-all duration-300"
                        @click.stop="selectedCoin = '', openCoinFilter = false" />
                    </li>
                  </ul>
                  <div v-else class="px-4 py-2 text-sm text-gray-500">
                    No coins found.
                  </div>
                </div>
              </th>
              <th class="py-3 px-4">
                <div class="flex items-center gap-1">
                  Quantity Remaining
                  <div class="flex flex-col -space-y-2">
                    <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                      :class="{ 'text-[#4AABAB]': sortBy === 'quantity' && sortOrder === 'asc' }"
                      @click.stop="handleSort('quantity', 'asc')" />
                    <Icon name="mdi-menu-down" class="cursor-pointer text-xl"
                      @click.stop="handleSort('quantity', 'desc')"
                      :class="{ 'text-[#4AABAB]': sortBy === 'quantity' && sortOrder === 'desc' }" />
                  </div>
                </div>
              </th>
              <th class="py-3 px-4">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in sellRemaining" :key="index" class="border-b">
              <td class="py-4 px-4">{{ index + 1 }}</td>
              <td class="py-4 px-4 flex items-center gap-4">
                <input type="checkbox" class="h-4 w-4 accent-[#4aabab]" />
                <div class="flex items-center gap-2">
                  <img :src="`/icons/${item.exchange}.png`" class="w-10 h-10 rounded-full" />
                  {{ item.exchange }}
                </div>
              </td>

              <td class="py-4 px-4">
                <p>
                  <span class="mr-1">{{ item.coin }}</span>
                </p>
              </td>

              <td class="py-4 px-4 font-[Poppins]">
                <p>{{ item.quantity }}</p>
              </td>

              <td class="py-4 px-4">
                <button class="border border-[#4aabab] text-[#4aabab] px-3 py-1 rounded-2xl">
                  Sell
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="md:hidden flex flex-col space-y-3 px-2" v-if="sellRemaining?.length">
        <div v-for="(item, index) in sellRemaining" :key="index" class="p-4 rounded-xl shadow-md bg-white border">
          <div class="flex justify-between items-center mb-3">
            <span class="font-semibold font-[Poppins]">#{{ index + ((sellRemainingPagination?.currentPage || 1) - 1) *
              50 + 1 }}</span>
            <button class="border border-[#4aabab] text-[#4aabab] px-4 py-1 rounded-2xl text-sm font-medium">
              Sell
            </button>
          </div>
          <div class="flex justify-between items-center my-2">
            <div class="flex items-center gap-3">
              <input type="checkbox" class="h-4 w-4 accent-[#4aabab]" />
              <img :src="`/icons/${item.exchange?.toLowerCase()}.png`" class="w-8 h-8 rounded-full" />
              <span class="font-medium">{{ item?.exchange }}</span>
            </div>
            <span class="font-medium text-sm text-gray-600">{{ item?.coin }}</span>
          </div>
          <div class="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
            <span class="text-sm font-medium text-gray-500">Quantity Remaining</span>
            <span class="font-[Poppins] font-semibold text-[#4AABAB]">{{ item?.quantity }}</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-3 mt-6" v-if="sellRemaining?.length > 0">
        <button @click="changePage(sellRemainingPagination?.currentPage - 1)"
          :disabled="sellRemainingPagination?.currentPage === 1"
          class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
          Previous
        </button>

        <span class="px-4 py-2 font-[Poppins]">
          Page {{ sellRemainingPagination?.currentPage }} of
          {{ sellRemainingPagination?.totalPages }}
        </span>

        <button @click="changePage(sellRemainingPagination?.currentPage + 1)"
          :disabled="sellRemainingPagination?.currentPage === sellRemainingPagination?.totalPages"
          class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { mainStore } from "~/store/mainstore";
const mainstore = mainStore();
const { sellRemaining, sellRemainingPagination } = storeToRefs(mainstore);
const openExchangeFilter = ref(false)
const openCoinFilter = ref(false)
const selectedExchange = ref('')
const selectedCoin = ref('')
const sortBy = ref('')
const sortOrder = ref('')
const page = ref(1)
const isFilterDrawerOpen = ref(false)

const applyFilters = () => {
  isFilterDrawerOpen.value = false;
};

const clearFilters = () => {
  selectedExchange.value = "";
  selectedCoin.value = "";
  sortBy.value = "";
  sortOrder.value = "asc";
  page.value = 1;
  applyFilters();
};

const changePage = (value) => {
  page.value = value
}
const handleSort = (sortByValue, sortOrderValue) => {
  sortBy.value = sortByValue
  sortOrder.value = sortOrderValue
}
const sellRemainingData = async () => {

  const payload = {
    page: page.value,
    limit: 50,
    sortBy: sortBy.value || undefined,
    sortOrder: sortOrder.value || undefined,
    exchange: selectedExchange.value || undefined,
    coin: selectedCoin.value || undefined
  }
  await getSellRemaining(payload);
}
watch([selectedExchange, selectedCoin, page, sortBy, sortOrder], async () => {
  await sellRemainingData()
});
onMounted(() => {
  sellRemainingData()
});
</script>

<style scoped>
.underline-text {
  position: relative;

  color: #4aabab;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: -20px;
  width: 200px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media (max-width: 640px) {
  .underline-text::after {
    left: -20px;
    width: 200px;
    height: 20px;
    bottom: -10px;
  }
}

.fontPoppins {
  font-family: "Poppins", sans-serif !important;
}
</style>
