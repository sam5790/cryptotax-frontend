<template>
  <div class=" bg-white mx-auto p-4 md:p-7 my-5 md:my-8 w-full rounded-lg">
    <div class="flex flex-col items-center mb-10">
      <h1 class="text-2xl sm:text-3xl font-bold">
        Tax <span class="relative text-teal-500 underline-text">Harvesting</span>
      </h1>
      <p class="text-gray-500 mt-3 text-center">Check how your portfolio fare today</p>
    </div>

    <div class="flex flex-wrap gap-5 justify-center mb-10">
      <div class="shadow-md bg-white p-4 w-full sm:w-[300px] rounded-lg text-center sm:text-left">
        <p>Current Value</p>
        <h1 class="text-2xl">0$</h1>
      </div>

      <div class="shadow-md bg-white p-4 w-full sm:w-[300px] rounded-lg text-center sm:text-left">
        <p>Selling Value</p>
        <h1 class="text-2xl">0$</h1>
      </div>

      <div class="shadow-md bg-white p-4 w-full sm:w-[300px] rounded-lg">
        <div class="flex justify-between sm:justify-start">
          <p>Tax:</p>
          <h3 class="ml-5">0$</h3>
        </div>
        <div class="flex justify-between sm:justify-start mt-4">
          <p>Rate:</p>
          <h3 class="ml-5">30%</h3>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto w-full">
      <table class="w-full text-left">
        <thead>
          <tr class="border-b text-gray-400">
            <th class="py-3 px-4">#</th>
            <th class="py-3 px-4"></th>
            <th class="py-3 px-4">Exchange</th>
            <th class="py-3 px-4">Coin</th>
            <th class="py-3 px-4 whitespace-nowrap">Current Price</th>
            <th class="py-3 px-4">Quantity</th>
            <th class="py-3 px-4">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in coin_balance" :key="index" class="border-b">
            <td class="py-4 px-4">{{ index + 1 }}</td>

            <td class="py-4 px-4">
              <input type="checkbox" class="h-5 w-5 text-teal-500" />
            </td>

            <td class="py-4 px-4 flex items-center">
              <img :src="`/icons/${item.exchange}.png`" class="w-10 h-10 rounded-full mr-3" />
              {{ item.exchange }}
            </td>

            <td class="py-4 px-4">
              <p><span class="mr-1">{{ item.coin }}</span></p>
            </td>

            <td class="py-4 px-4">$ --</td>

            <td class="py-4 px-4 fontPoppins">
              <p>{{ item.coinsRemaining }}</p>
            </td>

            <td class="py-4 px-4">
              <button class="border border-teal-500 text-teal-500 px-3 py-1 rounded-2xl">
                Sell
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>

import { mainStore } from '~/store/mainstore';


const mainstore = mainStore()
const { coin_balance } = storeToRefs(mainstore)
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
        bottom: -10px
    }
}

.fontPoppins {
  font-family: "Poppins", sans-serif !important;
}

</style>