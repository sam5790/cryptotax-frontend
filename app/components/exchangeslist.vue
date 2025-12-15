<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="$emit('close')">
    <div class="bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-h-full overflow-y-auto w-[95%] max-w-7xl relative"
      @click.stop>
      <button @click="$emit('close')" class="absolute top-0 right-0 p-4 rounded-full hover:bg-gray-200 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-8 md:h-8 text-white bg-[#4aabab] rounded-full" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <h2 class="text-xl md:text-2xl font-medium text-center">
        Enter the correct details to create your new account!
      </h2>
      <div class="flex justify-center mt-6 md:mt-10">
        <div class="bg-white rounded-full p-1 flex gap-1 border">
          <button @click="tab = 'auto'" :class="tab === 'auto' && 'bg-[#4aabab] text-white'"
            class="px-4 py-1 text-sm font-medium rounded-full">
            Automatic Sync
          </button>
          <button @click="tab = 'custom'" :class="tab === 'custom' && 'bg-[#4aabab] text-white'"
            class="px-4 py-1 text-sm font-medium rounded-full">
            Custom
          </button>
        </div>
      </div>

      <div class="mt-6 md:mt-10 flex items-center justify-center">
        <div class="relative w-full max-w-[70%]">
          <span class="absolute left-4 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </span>
          <input v-model="searchText" type="text" placeholder="e.g. Binance, WazirX, Ethereum"
            class="w-full rounded-full border border-gray-300 pl-12 pr-6 py-2 shadow-sm" />
        </div>
      </div>

      <div class="border rounded-2xl mt-6 p-5 w-full">
        <div class="flex flex-col lg:flex-row gap-6">
          <div class="flex flex-col">
            <button
      v-for="item in buttonFilters"
      :key="item"
      @click="selected = item"
      class="w-full flex justify-start"
      :class="[
        'text-md font-medium py-1 px-3 rounded-full',
        selected === item ? 'bg-[#4aabab] text-white' : 'bg-transparent text-black'
      ]"
    >
      {{ item }}
    </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
            <div class="border flex items-center p-4 cursor-pointer" v-for="item in filteredList" :key="item.title"
              @click="openIntegration(item)">
              <img :src="item.icon" class="w-8 h-8 mr-4" />
              <h2 class="text-sm font-medium">{{ item.title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const searchText = ref("");
const list = ref([
  {
    icon: "/icons/okx.png",
    title: "OKX",
    type: "Exchange",
  },
  {
    icon: "/icons/binance.png",
    title: "Binance",
    type: "Exchange",
  },
  {
    icon: "/icons/bitbns.png",
    title: "Bitbns",
    type: "Exchange",
  },
  {
    icon: "/icons/coin-dcx.png",
    title: "Coin DCX",
    type: "Exchange",
  },
  {
    icon: "/icons/wazirx.png",
    title: "Wazir X",
    type: "Exchange",
  },
  {
    icon: "/icons/gate-io.png",
    title: "Gate.io",
    type: "Exchange",
  },
  {
    icon: "/icons/zebpay.png",
    title: "Zeb pay",
    type: "Exchange",
  },
  {
    icon: "/icons/bitcoin.png",
    title: "Bitcoin",
    type: "Chain",
  },
  {
    icon: "/icons/ethereum.png",
    title: "Ethereum",
    type: "Chain",
  },
  {
    icon: "/icons/polygon.png",
    title: "Polygon Network",
    type: "Chain",
  },
  {
    icon: "/icons/solana.png",
    title: "Solana",
    type: "Chain",
  },
  {
    icon: "/icons/solana.png",
    title: "Ripple",
    type: "Chain",
  },
  {
    icon: "/icons/litecoin.png",
    title: "Litecoin",
    type: "Chain",
  },
  {
    icon: "/icons/cardano.png",
    title: "Cardano",
    type: "Chain",
  },
  {
    icon: "/icons/binance.png",
    title: "BNB Chain",
    type: "Chain",
  },
  {
    icon: "/icons/dogecoin.png",
    title: "Doge Coin",
    type: "Chain",
  },
]);

const selected = ref('All')
const buttonFilters = ['All', 'Chains', 'Exchanges', 'Custodians', 'Wallets']

const emit = defineEmits(["close", "select"]);

function openIntegration(item) {
  emit("select", item);
}

const tab = ref("auto");

const filteredList = computed(() => {
  if (searchText.value.length > 2) {
    return list.value.filter((item) =>
      item.title.toLowerCase().includes(searchText.value.toLowerCase())
    );
  }
  return list.value;
});

</script>
