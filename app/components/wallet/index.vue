<template>
  <div class="flex flex-col items-center md:p-10">
    <h2 class="text-3xl md:text-4xl font-semibold text-center">
      <div class="flex gap-3 flex-wrap">
      My <div class="text-[#4aabab]">Wallet
        <CurvedLine/>
      </div>
      </div>
    </h2>
    <p class="text-md md:text-xl my-4 text-center">
      A brief summary of your crypto portfolio
    </p>
    <div class="container p-4 w-full overflow-x-auto">
      <table class="min-w-[600px] md:min-w-full text-center">
        <thead class="text-gray-400">
          <tr>
            <th class="py-2 px-4 border-b font-semibold">#</th>
            <th class="py-2 px-4 border-b font-semibold">Exchange</th>
            <th class="py-2 px-4 border-b font-semibold">Coin</th>
            <th class="py-2 px-4 border-b font-semibold">Balance</th>
          </tr>
        </thead>
        <tbody v-if="store.coin_balance.length">
          <tr
            v-for="(item, index) in store.coin_balance"
            :key="index"
            class="border-b"
          >
            <td class="py-4 px-4">{{ index + 1 }}</td>
            <td class="py-4 px-4">
              <div class="flex justify-center items-center gap-2">
                <img
                  :src="`/icons/${item.exchange}.png`"
                  width="32"
                  height="32"
                  class="rounded-full"
                />
                {{ item.exchange }}
              </div>
            </td>
            <td class="py-4 px-4">{{ item.coin }}</td>
            <td class="py-4 px-4">{{ item.coinsRemaining.toFixed(2) }}</td>
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
  </div>
</template>
<script setup>
import { mainStore } from "~/store/mainstore";
const store = mainStore();
</script>

