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
            <img src="/line-chart.png" class="w-full" />
          </div>

          <div
            class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-xl text-center md:flex hidden flex-col justify-center items-center p-6 col-span-1 lg:col-span-2"
          >
            <div
              class="border border-[#4AABAB] rounded-full flex justify-center items-center"
            >
              <img src="/new-avatar.png" class="w-14 h-14" alt="avatar" />
            </div>
            <p
              class="text-xs xl:text-lg font-medium mt-2 capitalize font-[Poppins]"
            >
              {{ user }}
            </p>
            <div class="flex mt-2 items-center">
              <img
                v-for="exchange in taxPagination?.exchanges?.slice(0, 3)"
                :key="exchange"
                :src="`/icons/${exchange}.png`"
                :alt="exchange"
                class="h-8 w-8 rounded-full border-2 border-white -ml-3 first:ml-0"
              />
              <div
                v-if="taxPagination?.exchanges?.length - 3 > 0"
                class="flex items-center"
              >
                <icon name="mdi:plus" class="w-4 h-4" />{{
                  total_pnl?.length - 3
                }}
              </div>
            </div>

            <button
              @click="router.push('/my-wallet')"
              class="mt-4 border border-[#4AABAB] text-[#4AABAB] px-4 py-1 rounded-full text-xs xl:text-lg"
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
        v-if="pnl.length > 0"
      >
        <h2 class="text-3xl md:text-4xl font-semibold my-10">Transactions</h2>

        <div class="w-full hidden sm:hidden md:block overflow-x-auto">
          <div class="flex justify-between md:px-6 md:py-3 bg-none">
            <ClientOnly>
              <DownloadExcel
                class="btn btn-primary"
                :data="allTransactions"
                :fields="excelFields"
                name="transaction.xls"
              >
                <button
                  class="flex justify-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-3 py-2 border border-gray-50 font-semibold"
                >
                  <Icon
                    name="mdi:export-variant"
                    class="w-6 h-6 text-[#4AABAB]"
                  />
                  Export Report
                </button>
              </DownloadExcel></ClientOnly
            >
            <div class="relative inline-block text-left">
              <button
                @click="openChooseAccount = !openChooseAccount"
                class="flex items-center justify-between gap-2 w-48 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-100 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                <div class="flex items-center gap-3">
                  <img
                    v-if="selectedAccount"
                    :src="`/icons/${selectedAccount}.png`"
                    :alt="selectedAccount"
                    class="h-8 w-8 rounded-full"
                  />
                  {{ selectedAccount || "Choose Account" }}
                </div>
                <Icon
                  name="mdi:chevron-down"
                  class="size-5 text-[#4AABAB] transition-transform"
                  :class="{ 'rotate-180': openChooseAccount }"
                />
              </button>
              <div
                v-if="openChooseAccount"
                class="absolute right-0 mt-1 w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn"
              >
                <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                  <li
                    v-for="exchange in taxPagination?.exchanges"
                    :key="exchange"
                    @click="getExchangeData(exchange)"
                    class="px-4 py-1 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                    :class="
                      exchange === selectedAccount ? 'bg-[#4AABAB]/40' : ''
                    "
                  >
                    <img
                      :src="`/icons/${exchange}.png`"
                      :alt="exchange"
                      class="h-8 w-8 rounded-full border-2 border-white -ml-3 first:ml-0"
                    />
                    {{ exchange }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <table class="w-full text-left">
            <thead class="bg-[#f1f1f1]">
              <tr class="text-gray-400">
                <th class="py-2 px-4 border-b font-semibold">#</th>
                <th class="py-2 px-4 border-b font-semibold">Exchange</th>
                <th class="py-2 px-4 border-b font-semibold">Coin</th>
                <th class="py-2 px-4 border-b font-semibold">Buy Date</th>
                <th class="py-2 px-4 border-b font-semibold">Buy Price</th>
                <th class="py-2 px-4 border-b font-semibold">Quantity</th>
                <th class="py-2 px-4 border-b font-semibold">Sell Date</th>
                <th class="py-2 px-4 border-b font-semibold">Sell Price</th>
                <th class="py-2 px-4 border-b font-semibold">PNL</th>
                <th class="py-2 px-4 border-b font-semibold">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in pnl" :key="index" class="border-b">
                <td class="py-4 px-4">
                  {{ index + (taxPagination?.currentPage - 1) * 50 + 1 }}
                </td>
                <td class="py-4 px-4 flex items-center gap-1">
                  <img :src="`/icons/${item.exchange}.png`" class="w-8 h-8" />
                  {{ item.exchange }}
                </td>
                <td class="py-4 px-4 ">{{ item.coin }}</td>
                <td class="py-4 px-4 font-[Poppins] whitespace-nowrap">
                  <NuxtTime
                    :datetime="item.buyDate"
                    month="short"
                    year="numeric"
                    day="2-digit"
                  />
                </td>
                <td class="py-4 px-4 font-[Poppins] text-green-700">
                  <p
                    class="text-green-700 flex items-center gap-1 font-[Poppins]"
                  >
                    <Icon name="mdi:menu-up" class="w-8 h-8" />{{
                      item.buyPrice
                    }}
                  </p>
                </td>
                <td class="py-4 px-4 font-[Poppins]">{{ item.quantity }}</td>
                <td class="py-4 px-4 capitalize font-[Poppins]  whitespace-nowrap">
                  <NuxtTime
                    :datetime="item.sellDate"
                    month="short"
                    year="numeric"
                    day="2-digit"
                  />
                </td>
                <td class="py-4 px-4 capitalize">
                  <p
                    class="text-red-500 flex items-center gap-1 font-[Poppins]"
                  >
                    <Icon name="mdi:menu-down" class="w-8 h-8" />{{
                      item.sellPrice
                    }}
                  </p>
                </td>
                <td
                  class="py-4 px-4 font-[Poppins]"
                  :class="item.pnl > 0 ? 'text-green-700' : 'text-red-500'"
                >
                  {{ item.pnl }}
                </td>
                <td class="py-4 px-4 font-[Poppins]">{{ item.remaining }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-center gap-3 mt-6">
            <button
              @click="changePage(taxPagination?.currentPage - 1)"
              :disabled="taxPagination?.currentPage === 1"
              class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
            >
              Previous
            </button>

            <span class="px-4 py-2">
              Page {{ taxPagination?.currentPage }} of
              {{ taxPagination?.totalPages }}
            </span>

            <button
              @click="changePage(taxPagination?.currentPage + 1)"
              :disabled="
                taxPagination?.currentPage === taxPagination?.totalPages
              "
              class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
        <div class="w-full sm:w-full md:hidden space-y-4 px-2">
          <div
            class="flex justify-between md:px-6 md:py-3 gap-3 bg-none flex-wrap"
          >
            <ClientOnly>
              <DownloadExcel
                class="btn btn-primary"
                :data="pnl"
                :fields="excelFields"
                name="pnl.xls"
              >
                <button
                  class="flex justify-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-3 py-2 border border-gray-50 font-semibold"
                >
                  <Icon
                    name="mdi:export-variant"
                    class="w-6 h-6 text-[#4AABAB]"
                  />
                  Export Report
                </button>
              </DownloadExcel></ClientOnly
            >
            <div class="relative inline-block text-left">
              <button
                @click="openChooseAccount = !openChooseAccount"
                class="flex items-center justify-between gap-2 w-48 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-100 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                <div class="flex items-center gap-3">
                  <img
                    v-if="selectedAccount"
                    :src="`/icons/${selectedAccount}.png`"
                    :alt="selectedAccount"
                    class="h-8 w-8 rounded-full"
                  />
                  {{ selectedAccount || "Choose Account" }}
                </div>
                <Icon
                  name="mdi:chevron-down"
                  class="size-5 text-[#4AABAB] transition-transform"
                  :class="{ 'rotate-180': openChooseAccount }"
                />
              </button>
              <div
                v-if="openChooseAccount"
                class="absolute right-0 mt-1 w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn"
              >
                <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                  <li
                    v-for="exchange in taxPagination?.exchanges"
                    :key="exchange._id"
                    @click="getExchangeData(exchange)"
                    class="px-4 py-1 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                    :class="
                      exchange === selectedAccount ? 'bg-[#4AABAB]/40' : ''
                    "
                  >
                    <img
                      :src="`/icons/${exchange}.png`"
                      :alt="exchange"
                      class="h-8 w-8 rounded-full border-2 border-white -ml-3 first:ml-0"
                    />
                    {{ exchange }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            v-for="(item, index) in pnl"
            :key="index"
            class="p-4 rounded-xl shadow-md bg-white border"
          >
            <div class="flex justify-between mb-2 flex-wrap">
              <span class="font-semibold font-[Poppins]"
                >#{{ index + (taxPagination?.currentPage - 1) * 50 + 1 }}</span
              >
              <span
                class="text-gray-500 font-semibold text-sm font-[Poppins]"
                :class="item.pnl > 0 ? 'text-green-700' : 'text-red-500'"
              >
                {{ item.pnl }}</span
              >
            </div>
            <div class="flex items-center mb-3 gap-2">
              <img :src="`/icons/${item.exchange}.png`" class="w-7 h-7" />
              <span class="font-medium">{{ item.exchange }}</span>
            </div>
            <div class="flex justify-between my-1">
              <span class="font-medium">Coin</span>
              <span>{{ item.coin }}</span>
            </div>
            <div class="flex justify-between my-1 flex-wrap">
              <span class="font-medium">Buy</span>
              <span
                class="text-green-700 flex items-center gap-1 font-[Poppins] flex-wrap"
                ><Icon name="mdi:menu-up" class="w-8 h-8" />{{
                  item.buyPrice
                }}
                (
                <NuxtTime
                  :datetime="item.buyDate"
                  month="short"
                  year="numeric"
                  day="2-digit"
                />)</span
              >
            </div>
            <div class="flex justify-between my-1 flex-wrap">
              <span class="font-medium">Sell</span>
              <span
                class="text-red-600 flex items-center gap-1 font-[Poppins] flex-wrap"
                ><Icon name="mdi:menu-down" class="w-8 h-8" />{{
                  item.sellPrice
                }}(
                <NuxtTime
                  :datetime="item.sellDate"
                  month="short"
                  year="numeric"
                  day="2-digit"
                />)</span
              >
            </div>
            <div class="flex justify-between my-1 flex-wrap">
              <span class="font-medium">Quantity</span>
              <span class="font-[Poppins]">
                {{ item.quantity }}
              </span>
            </div>
            <div class="flex justify-between mb-1 flex-wrap">
              <span class="font-medium">Balance</span>
              <span class="font-[Poppins]">{{ item.remaining }}</span>
            </div>
          </div>
          <div class="flex justify-center gap-3 mt-6">
            <button
              @click="changePage(taxPagination?.currentPage - 1)"
              :disabled="taxPagination?.currentPage === 1"
              class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
            >
              Previous
            </button>

            <span class="px-4 py-2 font-[Poppins]">
              Page {{ taxPagination?.currentPage }} of
              {{ taxPagination?.totalPages }}
            </span>

            <button
              @click="changePage(taxPagination?.currentPage + 1)"
              :disabled="
                taxPagination?.currentPage === taxPagination?.totalPages
              "
              class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
<script setup>
import { mainStore } from "~/store/mainstore";
import { useAuthStore } from "~/store/auth";
const allTransactions=ref([])
onMounted(async () => {
  await getPnlDetails({ page: 1, limit: 50 });
  const res = await getTransactionsForExport({
  });
  allTransactions.value = res;
});
const auth = useAuthStore();
const store = mainStore();
const { transactions, pnl, total_pnl, taxPagination } = storeToRefs(store);
const { user } = storeToRefs(auth);

const changePage = async (page) => {
  if (selectedAccount.value) {
    await getPnlDetails({
      page: page,
      limit: 50,
      exchange: selectedAccount.value,
    });
  } else await getPnlDetails({ page: page, limit: 50 });
};
const openChooseAccount = ref(false);
const selectedAccount = ref("");
const router = useRouter();
const excelFields = ref({
  Exchange: "exchange",
  Coin: "coin",
  Timestamp: "date",
  Quantity: "quantity",
  Amount: "total",
  Type: "type",
});
const getExchangeData = async (exchange) => {
  selectedAccount.value = exchange;
  openChooseAccount.value = false;
  await getPnlDetails({ exchange: exchange, limit: 50, page: 1 });
};
</script>
