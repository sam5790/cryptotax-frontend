<template>
  <ClientOnly>
    <div class="p-4 md:p-16 bg-gray-50">
      <div class="px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div
            class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-xl p-6 flex flex-col justify-between col-span-1 lg:col-span-5"
          >
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap items-center gap-2">
                <input
                  type="radio"
                  name="method"
                  id="hifo"
                  class="hidden peer/hifo"
                  checked
                />
                <label
                  for="hifo"
                  class="px-4 py-1 rounded-full text-[#949494] peer-checked/hifo:bg-[#4AABAB] peer-checked/hifo:text-white font-semibold cursor-pointer"
                >
                  HIFO
                </label>
                <input
                  type="radio"
                  name="method"
                  id="lifo"
                  class="hidden peer/lifo"
                />
                <label
                  for="lifo"
                  class="px-4 py-1 rounded-full text-[#949494] peer-checked/lifo:bg-[#4AABAB] peer-checked/lifo:text-white font-semibold cursor-pointer"
                >
                  LIFO
                </label>
                <input
                  type="radio"
                  name="method"
                  id="fifo"
                  class="hidden peer/fifo"
                />
                <label
                  for="fifo"
                  class="px-4 py-1 rounded-full text-[#949494] peer-checked/fifo:bg-[#4AABAB] peer-checked/fifo:text-white font-semibold cursor-pointer"
                >
                  FIFO
                </label>
              </div>
              <p class="font-semibold font-[Poppins]">
                FY <NuxtTime :datetime="new Date()" year="numeric" />
              </p>
            </div>
            <div class="border-b-2 border-dashed mt-3"></div>
            <div class="flex flex-wrap justify-between gap-4 py-5 mt-3">
              <div>
                <p class="text-sm text-[#949494]">Income</p>
                <span
                  class="text-green-700 text-2xl font-bold mt-2 font-[Poppins]"
                  >$0</span
                >
              </div>
              <div v-if="total_pnl[0]?.totalPnl > 0">
                <p class="text-sm text-[#949494]">Capital Gain</p>
                <span
                  class="text-green-700 text-2xl font-bold font-[Poppins] flex gap-1"
                >
                  <Icon name="mdi:menu-up" class="size-8" />

                  {{ total_pnl[0]?.totalPnl?.toFixed(2) }}</span
                >
              </div>
              <div v-else>
                <p class="text-[#949494] text-sm">Capital Loss</p>
                <span
                  class="text-red-600 text-2xl font-bold font-[Poppins] flex gap-1"
                >
                  <Icon name="mdi:menu-down" class="size-8" />{{
                    total_pnl[0]?.totalPnl?.toFixed(2)
                  }}</span
                >
              </div>
              <div>
                <p class="text-sm text-[#949494]">TDS:</p>
                <span class="text-2xl font-bold fontPoppins">0</span>
              </div>
            </div>
          </div>

          <div
            class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-xl flex justify-center items-center p-4 col-span-1 lg:col-span-5 lg:min-h-[205px]"
          >
            <img :src="'/line-chart.png'" class="w-full" />
          </div>

          <div
            class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-xl text-center flex flex-col justify-center items-center p-6 col-span-1 lg:col-span-2"
          >
            <div
              class="border border-[#4AABAB] rounded-full flex justify-center items-center"
            >
              <img src="/avatar.png" class="size-14" />
            </div>
            <p class="font-medium mt-2 capitalize">
              {{ total_pnl[0]?.user?.name }}
            </p>

            <div class="flex mt-2 items-center">
              <img
                v-for="exchange in distinctExchanges?.slice(0, 3)"
                :key="exchange"
                :src="`/icons/${exchange}.png`"
                :alt="exchange"
                class="h-8 w-8 rounded-full border-2 border-white -ml-3 first:ml-0"
              />
              <div
                v-if="distinctExchanges?.length - 3 > 0"
                class="flex items-center"
              >
                <icon name="mdi:plus" class="w-4 h-4 mt-1" />{{
                  distinctExchanges?.length - 3
                }}
              </div>
            </div>

            <button
              @click="router.push('/mywallet')"
              class="mt-4 border border-[#4AABAB] text-[#4AABAB] px-4 py-1 rounded-full"
            >
              My Wallet
            </button>
          </div>
        </div>

        <div class="flex justify-center mt-5">
          <div
            class="shadow-[0_0_5px_0] shadow-[#254BD34D] rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col items-center w-full bg-white"
          >
            <h2
              class="text-center text-lg sm:text-xl md:text-2xl font-semibold"
            >
              Optimise your Tax Harvesting 💰
            </h2>
            <button
              class="mt-8 px-6 py-2 bg-[#4AABAB] rounded-3xl text-white"
              @click="$router.push('/harvesting')"
            >
              Go to Tax Harvesting
            </button>
          </div>
        </div>
      </div>
      <div
        class="lg:p-8 flex flex-col justify-center items-center w-full"
        v-if="transactions.length > 0"
      >
        <h2 class="text-3xl md:text-4xl font-semibold my-10">Transactions</h2>

        <div class="w-full hidden sm:hidden md:block overflow-x-auto">
          <div class="flex justify-between md:px-6 md:py-3 bg-none">
            <button
              class="flex justify-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-3 py-2 border border-gray-50 font-semibold"
            >
              <Icon name="mdi:export-variant" class="w-6 h-6 text-[#4AABAB]" />
              Export Report
            </button>
            <button
              class="flex justify-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-3 py-2 border border-gray-50 font-semibold"
            >
              Choose Account
              <Icon name="mdi:chevron-down" class="size-6 text-[#4AABAB]" />
            </button>
          </div>
          <table class="w-full text-left">
            <thead class="bg-[#f1f1f1]">
              <tr class="text-gray-400">
                <th class="py-2 px-4 border-b font-semibold">#</th>
                <th class="py-2 px-4 border-b font-semibold">Exchange</th>
                <th class="py-2 px-4 border-b font-semibold">Coin</th>
                <th class="py-2 px-4 border-b font-semibold">Timestamp</th>
                <th class="py-2 px-4 border-b font-semibold">Quantity</th>
                <th class="py-2 px-4 border-b font-semibold">Amount</th>
                <th class="py-2 px-4 border-b font-semibold">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in transactions"
                :key="index"
                class="border-b"
              >
                <td class="py-4 px-4">
                  {{ index + (pagination.currentPage - 1) * 50 + 1 }}
                </td>
                <td class="py-4 px-4 flex items-center gap-1">
                  <img :src="`/icons/${item.exchange}.png`" class="w-8 h-8" />
                  {{ item.exchange }}
                </td>
                <td class="py-4 px-4">{{ item.coin }}</td>
                <td class="py-4 px-4 font-[Poppins]">
                  <NuxtTime
                    :datetime="item.date"
                    month="short"
                    year="numeric"
                    day="2-digit"
                  />
                </td>
                <td class="py-4 px-4">
                  <p
                    v-if="item.type == 'buy' || item.type == 'deposited'"
                    class="text-green-700 flex items-center gap-1 font-[Poppins]"
                  >
                    <Icon name="mdi:menu-up" class="w-8 h-8 text-green-700" />
                    {{ item.quantity }}
                  </p>
                  <p
                    v-else
                    class="text-red-500 flex items-center gap-1 font-[Poppins]"
                  >
                    <Icon name="mdi:menu-down" class="w-8 h-8 text-red-600" />
                    {{ item.quantity }}
                  </p>
                </td>
                <td class="py-4 px-4 font-[Poppins]">{{ item.total }}</td>
                <td class="py-4 px-4 capitalize">{{ item.type }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-center gap-3 mt-6">
            <button
              @click="loadTransactions(pagination.currentPage - 1)"
              :disabled="pagination.currentPage === 1"
              class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
            >
              Previous
            </button>

            <span class="px-4 py-2">
              Page {{ pagination.currentPage }} of {{ pagination.totalPages }}
            </span>

            <button
              @click="loadTransactions(pagination.currentPage + 1)"
              :disabled="pagination.currentPage === pagination.totalPages"
              class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
        <div class="w-full sm:w-full md:hidden space-y-4 px-2">
          <div
            v-for="(item, index) in transactions"
            :key="index"
            class="p-4 rounded-xl shadow-md bg-white border"
          >
            <div class="flex justify-between mb-2 flex-wrap">
              <span class="font-semibold">#{{ index + 1 }}</span>
              <span class="text-gray-500 text-sm">{{ item.date }}</span>
            </div>
            <div class="flex items-center mb-3 gap-2">
              <img :src="`/icons/${item.exchange}.png`" class="w-7 h-7" />
              <span class="font-medium">{{ item.exchange }}</span>
            </div>
            <div class="flex justify-between mb-1">
              <span class="font-medium">Coin</span>
              <span>{{ item.coin }}</span>
            </div>
            <div class="flex justify-between mb-1">
              <span class="font-medium">Quantity</span>
              <span
                :class="
                  item?.type == 'buy'
                    ? 'text-green-500 flex items-center gap-1 fontPoppins'
                    : 'text-red-500 flex items-center gap-1 fontPoppins'
                "
              >
                <Icon
                  v-if="item?.type == 'buy'"
                  name="mdi:menu-up"
                  class="w-8 h-8 text-[#4AABAB]"
                />
                <Icon
                  v-else
                  name="mdi:menu-down"
                  class="w-8 h-8 text-red-600"
                />
                {{ item.quantity }}
              </span>
            </div>
            <div class="flex justify-between mb-1">
              <span class="font-medium">Amount</span>
              <span class="fontPoppins">{{ item.total }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">Type</span>
              <span>{{ item.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import { mainStore } from "~/store/mainstore";
import { useAuthStore } from "~/store/auth";
await getPnlDetails();
await getTransactions();
const auth = useAuthStore();
const store = mainStore();
const { transactions, pnl, total_pnl } = storeToRefs(store);
const { user } = storeToRefs(auth);
const router = useRouter();

const pagination = ref({
  currentPage: 1,
  totalPages: 1,
});
const loadTransactions = async (page = 1) => {
  const res = await getTransactions(page);

  if (res?.data) {
    pagination.value = res.pagination;
  }
};
await loadTransactions(1);

const distinctExchanges = computed(() => {
  const exchanges = total_pnl.value.map((item) => item.exchange);
  return [...new Set(exchanges)];
});
const totalDistinctExchanges = computed(() => distinctExchanges.value.length);
</script>
<style scoped>
.fontPoppins {
  font-family: "Poppins", sans-serif !important;
}
</style>
