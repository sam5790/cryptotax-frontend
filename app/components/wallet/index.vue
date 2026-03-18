<template>
  <ClientOnly>
    <div class="flex flex-col items-center md:p-10">
      <h2 class="text-3xl md:text-4xl font-semibold text-center">
        <div class="flex gap-3 flex-wrap">
          My
          <div class="text-[#4aabab]">
            Wallet
            <CurvedLine />
          </div>
        </div>
      </h2>
      <p class="text-md md:text-xl my-4 text-center">
        A brief summary of your crypto portfolio
      </p>
      <div class="p-4 w-full overflow-x-auto md:block hidden">
        <table class="min-w-[600px] md:min-w-full text-center">
          <thead class="text-gray-400">
            <tr>
              <th class="py-2 px-4 border-b font-semibold">#</th>
              <th class="py-2 px-4 border-b font-semibold">Exchange</th>
              <th class="py-2 px-4 border-b font-semibold">Coin</th>
              <th class="py-2 px-4 border-b font-semibold">Balance</th>
            </tr>
          </thead>
          <tbody v-if="wallet?.data?.length">
            <tr
              v-for="(item, index) in wallet?.data"
              :key="index"
              class="border-b"
            >
              <td class="p-4">
                {{
                  wallet?.meta?.pageSize * (wallet?.meta?.currentPage - 1) +
                  index +
                  1
                }}
              </td>
              <td class="p-4">
                <div class="flex justify-center items-center gap-2 capitalize">
                  <img
                    :src="`/icons/${item.exchange?.toLowerCase()}.png`"
                    width="32"
                    height="32"
                    class="rounded-full"
                  />
                  {{ item.exchange }}
                </div>
              </td>
              <td class="p-4">{{ item.coin }}</td>
              <td class="p-4 font-[Poppins]">
                {{ item.coinsRemaining }}
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="4" class="py-10 text-gray-500 text-center">
                No records found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="md:hidden w-full space-y-3 p-3" v-if="wallet?.data?.length">
        <div
          v-for="(item, index) in wallet?.data"
          :key="wallet?.data?._id"
          class="border p-4 rounded-lg shadow-md bg-white"
        >
          <div class="flex justify-between items-center mb-2 flex-wrap">
            <span class="font-semibold font-[Poppins]"
              >#{{ index + (wallet?.meta?.currentPage - 1) * 50 + 1 }}</span
            >
            <div class="flex items-center gap-2">
              <img
                :src="`/icons/${item.exchange?.toLowerCase()}.png`"
                class="w-6 h-6"
              />
              <span class="font-medium capitalize">{{ item.exchange }}</span>
            </div>
          </div>
          <div class="flex justify-between mb-1">
            <span class="font-medium">Coin:</span>
            <span>{{ item.coin }}</span>
          </div>
          <div class="flex justify-between mb-1 flex-wrap">
            <span class="font-medium">Remaining:</span>
            <span class="font-[Poppins]">{{ item.coinsRemaining }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-3 my-6" v-if="wallet?.data?.length">
        <button
          @click="changePage(wallet?.meta?.currentPage - 1)"
          :disabled="wallet?.meta?.currentPage === 1"
          class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
        >
          Previous
        </button>

        <span class="px-4 py-2 font-[Poppins]">
          Page {{ wallet?.meta?.currentPage }} of
          {{ wallet?.meta?.totalPages }}
        </span>

        <button
          @click="changePage(wallet?.meta?.currentPage + 1)"
          :disabled="wallet?.meta?.currentPage === wallet?.meta?.totalPages"
          class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div></ClientOnly
  >
</template>
<script setup>
import { mainStore } from "~/store/mainstore";
const store = mainStore();
const { wallet } = storeToRefs(store);
onMounted(async () => {
  await getWallet({ page: 1, limit: 50 });
});
const changePage = async (page) => {
  await getWallet({ page: page, limit: 50 });
};
</script>
