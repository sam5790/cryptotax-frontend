<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="$emit('close')">
    <div class="bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-h-full overflow-y-auto w-[95%] max-w-5xl relative"
      @click.stop>
      <button @click="$emit('close')" class="absolute top-0 right-0 p-2 rounded-full hover:bg-gray-200 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <h2 class="text-xl md:text-2xl font-medium text-center">
        Enter the correct details to create your new account!
      </h2>

      <div class="mt-6 md:mt-10">
        <input v-model="searchText" type="text" placeholder="e.g. Binance, WazirX, Ethereum"
          class="w-full rounded-full border border-gray-300 px-6 md:px-12 py-3 shadow-sm" />
      </div>

      <div class="border rounded-2xl mt-6 p-5 w-full">

        <div class="flex flex-col lg:flex-row gap-6">

          <div class="w-full lg:w-auto lg:mr-4">
            <ul>
              <li class="text-md font-medium py-1">All</li>
              <li class="text-md font-medium py-1">Chains</li>
              <li class="text-md font-medium py-1">Exchanges</li>
              <li class="text-md font-medium py-1">Custodians</li>
              <li class="text-md font-medium py-1">Wallets</li>
            </ul>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">

            <div class="border flex items-center p-4 rounded-xl cursor-pointer" v-for="item in filteredList"
              :key="item.title" @click="openIntegration(item)">
              <img :src="item.icon" class="w-8 h-8 mr-4">
              <h2 class="text-lg font-medium">{{ item.title }}</h2>
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
    icon: "/icons/xrp.png",
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
])

const emit = defineEmits(['close', 'select']);

function openIntegration(item) {
  emit("select", item);
}


const filteredList = computed(() => {
  if (searchText.value.length > 2) {
    return list.value.filter(item =>
      item.title.toLowerCase().includes(searchText.value.toLowerCase())
    );
  }
  return list.value;
});
</script>