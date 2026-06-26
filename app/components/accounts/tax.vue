<template>
  <ClientOnly>
    <div class="p-4 md:p-16 bg-gray-50">
      <div class="px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div
            class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-xl p-6 flex flex-col justify-between col-span-1 lg:col-span-5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap items-center gap-2">
                <input type="radio" name="method" id="fifo" class="hidden peer/fifo" checked />
                <label for="fifo"
                  class="px-4 py-1 rounded-full text-[#949494] peer-checked/fifo:bg-[#4AABAB] peer-checked/fifo:text-white font-semibold cursor-pointer">
                  FIFO
                </label>
                <input type="radio" name="method" id="hifo" class="hidden peer/hifo" />
                <label for="hifo"
                  class="px-4 py-1 rounded-full text-[#949494] peer-checked/hifo:bg-[#4AABAB] peer-checked/hifo:text-white font-semibold cursor-pointer">
                  HIFO
                </label>
                <input type="radio" name="method" id="lifo" class="hidden peer/lifo" />
                <label for="lifo"
                  class="px-4 py-1 rounded-full text-[#949494] peer-checked/lifo:bg-[#4AABAB] peer-checked/lifo:text-white font-semibold cursor-pointer">
                  LIFO
                </label>
              </div>
              <p class="font-semibold font-[Poppins]">
                FY
                <NuxtTime :datetime="new Date()" year="numeric" />
              </p>
            </div>
            <div class="border-b-2 border-dashed mt-3"></div>
            <div class="flex flex-wrap justify-between gap-4 py-5 mt-3">
              <div>
                <p class="text-sm text-[#949494]">Gain</p>
                <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />

                <span v-else class=" md:text-2xl text-lg font-bold mt-2 font-[Poppins] flex gap-1"
                  :class="taxPagination?.netGain !== 0 ? 'text-green-700' : ''">
                  <Icon v-if="taxPagination?.netGain !== 0" name="mdi:menu-up" class="md:size-8 size-6" />{{
                    taxPagination?.netGain && taxPagination?.netGain !== 0 ?
                      parseFloat(taxPagination?.netGain).toFixed(2) : 0 }}
                </span>
              </div>
              <div>
                <p class="text-sm text-[#949494]">Loss</p>
                <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />

                <span v-else class="md:text-2xl text-lg font-bold mt-2 font-[Poppins] flex gap-1"
                  :class="taxPagination?.netLoss !== 0 ? 'text-red-600 ' : ''">
                  <Icon name="mdi:menu-down" class="md:size-8 size-6" v-if="taxPagination?.netLoss !== 0" />{{
                    taxPagination?.netLoss && taxPagination?.netLoss !== 0 ?
                      parseFloat(taxPagination?.netLoss).toFixed(2) : 0 }}
                </span>
              </div>

              <div>
                <p class="text-sm text-[#949494]">Total PNL</p>
                <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />

                <span v-else class="md:text-2xl text-lg font-bold mt-2 font-[Poppins] flex gap-1"
                  :class="taxPagination?.pnlSum > 0 ? 'text-green-700' : taxPagination?.pnlSum < 0 ? 'text-red-600' : ''">
                  {{ taxPagination?.pnlSum && taxPagination?.pnlSum !== 0 ?
                    parseFloat(taxPagination?.pnlSum).toFixed(2) : 0 }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-xl flex justify-center items-center p-4 col-span-1 lg:col-span-5 lg:min-h-[205px]">
            <img src="/line-chart.png" class="w-full" />
          </div>

          <div
            class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-xl text-center md:flex hidden flex-col justify-center items-center p-6 col-span-1 lg:col-span-2">
            <div class="border border-[#4AABAB] rounded-full flex justify-center items-center">
              <img src="/new-avatar.png" class="w-14 h-14" alt="avatar" />
            </div>
            <p class="text-xs xl:text-lg font-medium mt-2 capitalize font-[Poppins]">
              {{ user?.name }}
            </p>
            <div class="flex mt-2 items-center">
              <img v-for="exchange in taxPagination?.exchanges?.slice(0, 3)" :key="exchange"
                :src="`/icons/${exchange?.toLowerCase()}.png`" :alt="exchange"
                class="h-8 w-8 rounded-full border-2 border-white -ml-3 first:ml-0" />
              <div v-if="taxPagination?.exchanges?.length - 3 > 0" class="flex items-center">
                <icon name="mdi:plus" class="w-4 h-4" />{{
                  total_pnl?.length - 3
                }}
              </div>
            </div>

            <button @click="router.push('/my-wallet')"
              class="mt-4 border border-[#4AABAB] text-[#4AABAB] px-4 py-1 rounded-full text-xs xl:text-lg">
              My Wallet
            </button>
          </div>
        </div>

        <div class="flex justify-center mt-5">
          <div
            class="shadow-[0_0_5px_0] shadow-[#254BD34D] rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col items-center w-full bg-white">
            <h2 class="text-center text-lg sm:text-xl md:text-2xl font-semibold">
              Optimise your Tax Harvesting 💰
            </h2>
            <button class="mt-8 px-6 py-2 bg-[#4AABAB] rounded-3xl text-white" @click="$router.push('/harvesting')">
              Go to Tax Harvesting
            </button>
          </div>
        </div>
      </div>
      <div class="lg:p-8 flex flex-col justify-center items-center w-full">
        <h2 class="text-3xl md:text-4xl font-semibold my-10">
          PNL Transactions
        </h2>

        <div class="w-full hidden sm:hidden md:block overflow-x-auto min-h-96">
          <div class="flex justify-between md:px-6 md:py-3 bg-none">
            <ClientOnly>
              <!-- <DownloadExcel class="btn btn-primary" :data="allTransactions" :fields="excelFields"
                name="pnl-transactions.xls"> -->
              <button
                class="flex justify-center items-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-3 py-2 border border-gray-50 font-semibold"
                @click="exportPnl">
                <Icon name="mdi:export-variant" class="w-6 h-6 text-[#4AABAB]" />
                Export Report
              </button>
              <!-- </DownloadExcel> -->
            </ClientOnly>
            <div class="relative inline-block text-left">
              <button @click.stop="openChooseAccount = !openChooseAccount"
                class="flex items-center justify-between gap-2 w-48 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-100 font-semibold text-gray-700 hover:bg-gray-50 transition">
                <div class="flex items-center gap-3">
                  <img v-if="selectedAccount" :src="`/icons/${selectedAccount?.toLowerCase()}.png`"
                    :alt="selectedAccount" class="h-8 w-8 rounded-full capitalise" />
                  {{ selectedAccount || "Choose Account" }}
                </div>
                <Icon name="mdi:chevron-down" class="size-5 text-[#4AABAB] transition-transform"
                  :class="{ 'rotate-180': openChooseAccount }" />
              </button>
              <div v-if="openChooseAccount"
                class="absolute right-0 mt-1 w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn">
                <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                  <li
                    class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                    :class="!selectedAccount ? 'bg-[#4AABAB]/40' : ''" @click="handleExchange()">
                    <Icon name="mdi-swap-horizontal" class="w-6 h-6 text-[#4AABAB]" />
                    All Exchanges
                  </li>
                  <li v-for="exchange in taxPagination?.exchanges" :key="exchange._id" @click="handleExchange(exchange)"
                    class="px-4 py-1 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                    :class="exchange === selectedAccount ? 'bg-[#4AABAB]/40' : ''
                      ">
                    <img :src="`/icons/${exchange?.toLowerCase()}.png`" :alt="exchange"
                      class="h-8 w-8 rounded-full border-2 border-white -ml-3 first:ml-0" />
                    {{ exchange }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <table class="w-full text-left">
            <thead class="bg-[#f1f1f1]">
              <tr class="text-gray-500">
                <th class="py-2 px-4 border-b font-semibold">#</th>
                <th class="py-2 px-4 border-b font-semibold">Exchange</th>
                <th class="py-2 px-4 border-b font-semibold relative">
                  <div class="flex items-center gap-1" :class="openCoinFilter || selectedCoin ? 'text-[#4AABAB]' : ''">
                    Coin
                    <Icon name="mdi-filter-menu" class="cursor-pointer"
                      @click.stop="openCoinFilter = !openCoinFilter" />
                  </div>
                  <div v-if="openCoinFilter"
                    class="absolute right-0 top-full max-w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1 overflow"
                    @click.stop>
                    <div class="px-1 py-2 flex items-center justify-center gap-2 max-w-full">
                      <input v-model="searchCoin" type="text"
                        class="border max-w-full rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#4AABAB]"
                        placeholder="Search" />
                    </div>
                    <!-- <div v-if="selectedCoin"
                      class="flex items-center justify-between gap-2 rounded-full bg-[#4AABAB]/10 border border-[#4AABAB]/20 py-1.5 px-2 mx-1 mb-2 w-fit">
                      <div class="text-xs font-medium text-gray-700 truncate">
                        {{ selectedCoin }}
                      </div>
                      <Icon name="mdi-close-circle" class="cursor-pointer text-gray-500 hover:text-[#4AABAB] shrink-0"
                        @click.stop="(getCoinData(''), (searchCoin = ''))" />
                    </div> -->

                    <ul class="text-sm text-gray-700 max-h-48 overflow-y-auto" v-if="coinList.length > 0">
                      <li v-for="coin in coinList" :key="coin" @click="getCoinData(coin)"
                        class="px-2 py-2 m-1 cursor-pointer rounded-md transition flex items-center justify-between"
                        :class="coin === selectedCoin
                          ? 'bg-[#4AABAB] text-white'
                          : 'text-gray-600 hover:bg-[#4AABAB]/20'
                          ">
                        {{ coin }}
                        <Icon v-if="coin === selectedCoin" name="mdi-close-circle"
                          class="cursor-pointer text-white shrink-0 text-xl hover:scale-105 tranition-all duration-300"
                          @click.stop="(getCoinData(''), (searchCoin = ''))" />
                      </li>
                    </ul>
                    <div v-else class="px-4 py-2 text-sm text-gray-500">
                      No coins found.
                    </div>
                  </div>
                </th>
                <th class="py-2 px-4 border-b font-semibold relative">
                  <div class="flex items-center gap-1" :class="openBuyDateFilter || buyDate ? 'text-[#4AABAB]' : ''">
                    Buy Date
                    <Icon name="mdi-filter-menu" class="cursor-pointer"
                      @click.stop="openBuyDateFilter = !openBuyDateFilter" />


                  </div>
                  <div v-if="openBuyDateFilter"
                    class="absolute right-0 top-full w-72 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-2"
                    @click.stop>
                    <VueDatePicker v-model="buyDate" range :enable-time-picker="false" placeholder="Select buy range..."
                      :formats="{ input: 'dd-MM-yyyy' }" :time-config="{ enableTimePicker: false }"
                      @cleared="openBuyDateFilter = false" />
                  </div>
                </th>
                <th class="py-2 px-4 border-b font-semibold">
                  <div class="flex items-center gap-1">
                    Buy Price
                    <div class="flex flex-col -space-y-2">
                      <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                        :class="{ 'text-[#4AABAB]': sortBy === 'buyPrice' && sortOrder === 'asc' }"
                        @click.stop="handleSort('buyPrice', 'asc')" />
                      <Icon name="mdi-menu-down" class="cursor-pointer text-xl"
                        @click.stop="handleSort('buyPrice', 'desc')"
                        :class="{ 'text-[#4AABAB]': sortBy === 'buyPrice' && sortOrder === 'desc' }" />
                    </div>
                  </div>
                </th>
                <th class="py-2 px-4 border-b font-semibold">
                  <div class="flex items-center gap-1">
                    Quanitity
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
                <th class="py-2 px-4 border-b font-semibold relative">
                  <div class="flex items-center gap-1" :class="openSellDateFilter || sellDate ? 'text-[#4AABAB]' : ''">
                    Sell Date
                    <Icon name="mdi-filter-menu" class="cursor-pointer"
                      @click.stop="openSellDateFilter = !openSellDateFilter" />


                  </div>
                  <div v-if="openSellDateFilter"
                    class="absolute right-0 top-full w-72 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-2"
                    @click.stop>
                    <VueDatePicker v-model="sellDate" range :enable-time-picker="false"
                      placeholder="Select sell range..." :formats="{ input: 'dd-MM-yyyy' }"
                      :time-config="{ enableTimePicker: false }" @cleared="openSellDateFilter = false" />
                  </div>
                </th>
                <th class="py-2 px-4 border-b font-semibold">
                  <div class="flex items-center gap-1">
                    Sell Price
                    <div class="flex flex-col -space-y-2">
                      <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                        :class="{ 'text-[#4AABAB]': sortBy === 'sellPrice' && sortOrder === 'asc' }"
                        @click.stop="handleSort('sellPrice', 'asc')" />
                      <Icon name="mdi-menu-down" class="cursor-pointer text-xl"
                        @click.stop="handleSort('sellPrice', 'desc')"
                        :class="{ 'text-[#4AABAB]': sortBy === 'sellPrice' && sortOrder === 'desc' }" />
                    </div>
                  </div>
                </th>
                <th class="py-2 px-4 border-b font-semibold">
                  <div class="flex items-center gap-1">
                    PNL
                    <div class="flex flex-col -space-y-2">
                      <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                        :class="{ 'text-[#4AABAB]': sortBy === 'pnl' && sortOrder === 'asc' }"
                        @click.stop="handleSort('pnl', 'asc')" />
                      <Icon name="mdi-menu-down" class="cursor-pointer text-xl" @click.stop="handleSort('pnl', 'desc')"
                        :class="{ 'text-[#4AABAB]': sortBy === 'pnl' && sortOrder === 'desc' }" />
                    </div>
                  </div>
                </th>
                <th class="py-2 px-4 border-b font-semibold">
                  <div class="flex items-center gap-1">
                    Balance
                    <div class="flex flex-col -space-y-2">
                      <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                        :class="{ 'text-[#4AABAB]': sortBy === 'remaining' && sortOrder === 'asc' }"
                        @click.stop="handleSort('remaining', 'asc')" />
                      <Icon name="mdi-menu-down" class="cursor-pointer text-xl"
                        @click.stop="handleSort('remaining', 'desc')"
                        :class="{ 'text-[#4AABAB]': sortBy === 'remaining' && sortOrder === 'desc' }" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody v-if="loading">
              <tr v-for="i in 5" :key="`skel-pnl-${i}`" class="border-b animate-pulse">
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-8"></div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div class="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-20"></div>
                </td>
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-20"></div>
                </td>
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td class="py-4 px-4">
                  <div class="h-4 bg-gray-200 rounded w-16"></div>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr v-for="(item, index) in pnl" :key="index" class="border-b">
                <td class="py-4 px-4">
                  {{ index + (taxPagination?.currentPage - 1) * 50 + 1 }}
                </td>
                <td class="py-4 px-4 flex items-center gap-1">
                  <img :src="`/icons/${item.exchange?.toLowerCase()}.png`" class="w-8 h-8" />
                  {{ item?.exchange }}
                </td>
                <td class="py-4 px-4">{{ item?.coin }}</td>
                <td class="py-4 px-4 font-[Poppins] whitespace-nowrap">
                  <NuxtTime :datetime="item.buyDate" month="short" year="numeric" day="2-digit" />
                </td>
                <td class="py-4 px-4 font-[Poppins] text-green-700">
                  <p class="text-green-700 flex items-center gap-1 font-[Poppins]">
                    <Icon name="mdi:menu-up" class="w-8 h-8" />{{
                      item?.buyPrice
                    }}
                  </p>
                </td>
                <td class="py-4 px-4 font-[Poppins]">{{ item?.quantity }}</td>
                <td class="py-4 px-4 capitalize font-[Poppins] whitespace-nowrap">
                  <NuxtTime :datetime="item.sellDate" month="short" year="numeric" day="2-digit" />
                </td>
                <td class="py-4 px-4 capitalize">
                  <p class="text-red-500 flex items-center gap-1 font-[Poppins]">
                    <Icon name="mdi:menu-down" class="w-8 h-8" />{{
                      item?.sellPrice
                    }}
                  </p>
                </td>
                <td class="py-4 px-4 font-[Poppins]" :class="item.pnl > 0 ? 'text-green-700' : 'text-red-500'">
                  {{ item?.pnl }}
                </td>
                <td class="py-4 px-4 font-[Poppins]">{{ item?.remaining }}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="!loading && pnl.length === 0"
            class="flex flex-col items-center justify-center p-4 text-center rounded-xl">
            <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-2">
              <Icon name="mdi:magnify" class="w-10 h-10 text-[#4AABAB] opacity-60" />
            </div>
            <h3 class="text-xl font-semibold text-gray-700 font-[Poppins] mb-2">
              No pnl found!
            </h3>
            <p class="text-gray-500 text-sm max-w-md">
              There are no pnl available matching your criteria. Try
              adjusting your filters or add missing transactions.
            </p>
          </div>
          <div class="flex justify-center gap-3 mt-6" v-if="!loading && pnl.length > 0">
            <button @click="changePage(taxPagination?.currentPage - 1)" :disabled="taxPagination?.currentPage === 1"
              class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
              Previous
            </button>

            <span class="px-4 py-2">
              Page {{ taxPagination?.currentPage }} of
              {{ taxPagination?.totalPages }}
            </span>

            <button @click="changePage(taxPagination?.currentPage + 1)" :disabled="taxPagination?.currentPage === taxPagination?.totalPages
              " class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
              Next
            </button>
          </div>
        </div>
        <div class="w-full sm:w-full md:hidden space-y-4 px-2">
          <div class="flex justify-between gap-3 bg-none flex-wrap">
            <ClientOnly>
              <!-- <DownloadExcel class="btn btn-primary" :data="allTransactions" :fields="excelFields"
                name="pnl-transactions.xls"> -->
              <button @click="exportPnl"
                class="flex justify-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-3 py-3 border border-gray-50 font-semibold">
                <Icon name="mdi:export-variant" class="w-6 h-6 text-[#4AABAB]" />
                Export Report
              </button>
              <!-- </DownloadExcel> -->
            </ClientOnly>
            <div class="hidden md:flex items-center gap-2 flex-wrap ">
              <div
                class="shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-3 py-2 border border-gray-50 font-semibold relative">
                <div class="flex items-center gap-1" :class="openCoinFilter ? 'text-[#4AABAB]' : ''">
                  Coin
                  <Icon name="mdi-filter-menu" class="cursor-pointer" @click.stop="openCoinFilter = !openCoinFilter" />
                </div>
                <div v-if="openCoinFilter"
                  class="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1"
                  @click.stop>
                  <div class="px-1 py-2 flex items-center justify-center">
                    <input v-model="searchCoin" type="text"
                      class="border max-w-full rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#4AABAB]"
                      placeholder="Search" />
                  </div>
                  <div v-if="selectedCoin"
                    class="flex items-center justify-between gap-2 rounded-full bg-[#4AABAB]/10 border border-[#4AABAB]/20 py-1.5 px-2 mx-1 mb-2 w-fit">
                    <div class="text-xs font-medium text-gray-700 truncate">
                      {{ selectedCoin }}
                    </div>
                    <Icon name="mdi-close-circle" class="cursor-pointer text-gray-500 hover:text-[#4AABAB] shrink-0"
                      @click.stop="(getCoinData(''), (searchCoin = ''))" />
                  </div>
                  <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                    <li v-for="coin in coinList" :key="coin" @click="getCoinData(coin)"
                      class="px-4 py-1 m-1 cursor-pointer rounded-md transition" :class="coin === selectedCoin
                        ? 'bg-[#4AABAB] text-white'
                        : 'text-gray-600 hover:bg-[#4AABAB]/20'
                        ">
                      {{ coin }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="relative inline-block text-left">
                <button @click.stop="openChooseAccount = !openChooseAccount"
                  class="flex items-center justify-between gap-2 w-48 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-100 font-semibold text-gray-700 hover:bg-gray-50 transition">
                  <div class="flex items-center gap-3">
                    <img v-if="selectedAccount" :src="`/icons/${selectedAccount?.toLowerCase()}.png`"
                      :alt="selectedAccount" class="h-8 w-8 rounded-full capitalise" />
                    {{ selectedAccount || "Choose Account" }}
                  </div>
                  <Icon name="mdi:chevron-down" class="size-5 text-[#4AABAB] transition-transform"
                    :class="{ 'rotate-180': openChooseAccount }" />
                </button>
                <div v-if="openChooseAccount"
                  class="absolute right-0 mt-1 w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn">
                  <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                    <li
                      class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                      :class="!selectedAccount ? 'bg-[#4AABAB]/40' : ''" @click="handleExchange()">
                      <Icon name="mdi-swap-horizontal" class="w-6 h-6 text-[#4AABAB]" />
                      All Exchanges
                    </li>
                    <li v-for="exchange in taxPagination?.exchanges" :key="exchange._id"
                      @click="handleExchange(exchange)"
                      class="px-4 py-1 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                      :class="exchange === selectedAccount ? 'bg-[#4AABAB]/40' : ''
                        ">
                      <img :src="`/icons/${exchange?.toLowerCase()}.png`" :alt="exchange"
                        class="h-8 w-8 rounded-full border-2 border-white -ml-3 first:ml-0" />
                      {{ exchange }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button @click="isFilterDrawerOpen = true"
              class="flex justify-center items-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-50 font-semibold">
              <Icon name="mdi:filter-variant" class="size-6 text-[#4AABAB]" />
              Filters
            </button>
            <div v-if="isFilterDrawerOpen" class="fixed inset-0 bg-black/40 z-40" @click="isFilterDrawerOpen = false">
            </div>
            <div
              class="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300"
              :class="isFilterDrawerOpen ? 'translate-x-0' : 'translate-x-full'">
              <div class="flex justify-between items-center p-4 border-b">
                <h3 class="text-lg font-semibold text-gray-800">Filters & Sort</h3>
                <button @click="isFilterDrawerOpen = false" class="text-gray-500 hover:text-gray-800">
                  <Icon name="mdi-close" class="size-6" />
                </button>
              </div>
              <div class="p-6 space-y-6 overflow-y-auto" style="height: calc(100% - 130px);">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Exchange</label>
                  <div class="relative inline-block text-left mt-1 w-full">
                    <button @click.stop="openSelectExchange = !openSelectExchange"
                      class="w-full flex items-center justify-between gap-2 rounded-lg px-4 py-2 border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-[#4aabab]">
                      <div class="flex items-center gap-3 text-sm py-0.5" v-if="selectedAccount">
                        <img :src="`/icons/${selectedAccount?.toLowerCase()}.png`" :alt="exchange"
                          class="h-7 w-7 rounded-full border-2 border-white -ml-3 first:ml-0" /> {{ selectedAccount }}
                      </div>
                      <div class="flex items-center gap-3 text-sm py-0.5 text-gray-400 font-normal" v-else>
                        Select Exchange
                      </div>
                      <Icon name="mdi:chevron-down" class="size-5 text-[#4AABAB] transition-transform"
                        :class="{ 'rotate-180': openSelectExchange }" />
                    </button>
                    <div v-if="openSelectExchange"
                      class="absolute right-0 top-12 bg-white rounded-lg w-full border border-gray-200 shadow-lg z-50 animate-fadeIn">
                      <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                        <li v-for="exchange in taxPagination?.exchanges" :key="exchange" @click="
                          ((selectedAccount = exchange), (openSelectExchange = false))
                          "
                          class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                          :class="exchange === selectedAccount ? 'bg-[#4AABAB]/40' : ''
                            ">
                          <img :src="`/icons/${exchange?.toLowerCase()}.png`" :alt="exchange"
                            class="h-7 w-7 rounded-full border-2 border-white -ml-3 first:ml-0" /> {{ exchange }}
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Coin</label>
                  <div class="relative inline-block text-left mt-1 w-full">
                    <button @click.stop="openSelectCoin = !openSelectCoin"
                      class="w-full flex items-center justify-between gap-2 rounded-lg px-4 py-2 border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-[#4aabab]">
                      <div class="flex items-center gap-3 text-sm py-0.5" v-if="selectedCoin">
                        {{ selectedCoin }}
                      </div>
                      <div class="flex items-center gap-3 text-sm py-0.5 text-gray-400 font-normal" v-else>
                        Select Coin
                      </div>
                      <Icon name="mdi:chevron-down" class="size-5 text-[#4AABAB] transition-transform"
                        :class="{ 'rotate-180': openSelectCoin }" />
                    </button>
                    <div v-if="openSelectCoin"
                      class="absolute right-0 top-12 bg-white rounded-lg w-full border border-gray-200 shadow-lg z-50 animate-fadeIn">
                      <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                        <li v-for="coin in taxPagination?.coins" :key="coin" @click="
                          ((selectedCoin = coin), (openSelectCoin = false))
                          "
                          class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                          :class="coin === selectedCoin ? 'bg-[#4AABAB]/40' : ''
                            ">
                          {{ coin }}
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Buy Date Range</label>
                  <VueDatePicker v-model="buyDate" range :enable-time-picker="false"
                    placeholder="Select buy range..." />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Sell Date Range</label>
                  <VueDatePicker v-model="sellDate" range :enable-time-picker="false"
                    placeholder="Select sell range..." />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                    <div class="relative inline-block text-left mt-1 w-full">
                      <button @click.stop="openSelectSortBy = !openSelectSortBy"
                        class="w-full flex items-center justify-between gap-2 rounded-lg px-4 py-2 border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-[#4aabab]">
                        <div class="flex items-center gap-3 text-sm py-0.5 capitalize" v-if="sortBy">
                          {{ sortBy }}
                        </div>
                        <div class="flex items-center gap-3 text-sm py-0.5 text-gray-400 font-normal" v-else>
                          Sort By
                        </div>
                        <Icon name="mdi:chevron-down" class="size-5 text-[#4AABAB] transition-transform"
                          :class="{ 'rotate-180': openSelectSortBy }" />
                      </button>
                      <div v-if="openSelectSortBy"
                        class="absolute right-0 top-12 bg-white rounded-lg w-full border border-gray-200 shadow-lg z-50 animate-fadeIn">
                        <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                          <li v-for="item in sortByList" :key="item.value" @click="
                            ((sortBy = item.value), (openSelectSortBy = false))
                            "
                            class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition capitalize"
                            :class="item.value === sortBy ? 'bg-[#4AABAB]/40' : ''
                              ">
                            {{ item.label }}
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Order</label>
                    <div class="relative inline-block text-left mt-1 w-full">
                      <button @click.stop="openSelectSortOrder = !openSelectSortOrder"
                        class="w-full flex items-center justify-between gap-2 rounded-lg px-4 py-2 border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-[#4aabab]">
                        <div class="flex items-center gap-3 text-sm py-0.5 capitalize" v-if="sortOrder">
                          {{ sortOrder }}
                        </div>
                        <div class="flex items-center gap-3 text-sm py-0.5 text-gray-400 font-normal" v-else>
                          Sort Order
                        </div>
                        <Icon name="mdi:chevron-down" class="size-5 text-[#4AABAB] transition-transform"
                          :class="{ 'rotate-180': openSelectSortOrder }" />
                      </button>
                      <div v-if="openSelectSortOrder"
                        class="absolute right-0 top-12 bg-white rounded-lg w-full border border-gray-200 shadow-lg z-50 animate-fadeIn">
                        <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                          <li v-for="item in sortOrderList" :key="item.value" @click="
                            ((sortOrder = item.value), (openSelectSortOrder = false))
                            "
                            class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition capitalize"
                            :class="item.value === sortOrder ? 'bg-[#4AABAB]/40' : ''
                              ">
                            {{ item.label }}
                          </li>
                        </ul>
                      </div>
                    </div>

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

          </div>
          <template v-if="loading">
            <div v-for="i in 4" :key="`mobile-skel-pnl-${i}`"
              class="p-4 rounded-xl shadow-md bg-white border animate-pulse">
              <div class="flex justify-between mb-2">
                <div class="h-4 bg-gray-200 rounded w-10"></div>
                <div class="h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div class="flex items-center mb-3 gap-2">
                <div class="w-7 h-7 bg-gray-200 rounded-full"></div>
                <div class="h-4 bg-gray-200 rounded w-24"></div>
              </div>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <div class="h-4 bg-gray-200 rounded w-12"></div>
                  <div class="h-4 bg-gray-200 rounded w-16"></div>
                </div>
                <div class="flex justify-between">
                  <div class="h-4 bg-gray-200 rounded w-10"></div>
                  <div class="h-4 bg-gray-200 rounded w-32"></div>
                </div>
                <div class="flex justify-between">
                  <div class="h-4 bg-gray-200 rounded w-12"></div>
                  <div class="h-4 bg-gray-200 rounded w-32"></div>
                </div>
                <div class="flex justify-between">
                  <div class="h-4 bg-gray-200 rounded w-16"></div>
                  <div class="h-4 bg-gray-200 rounded w-16"></div>
                </div>
                <div class="flex justify-between">
                  <div class="h-4 bg-gray-200 rounded w-16"></div>
                  <div class="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div v-for="(item, index) in pnl" :key="index" class="p-4 rounded-xl shadow-md bg-white border">
              <div class="flex justify-between mb-2 flex-wrap">
                <span class="font-semibold font-[Poppins]">#{{
                  index + (taxPagination?.currentPage - 1) * 50 + 1
                }}</span>
                <span class="text-gray-500 font-semibold text-sm font-[Poppins]"
                  :class="item.pnl > 0 ? 'text-green-700' : 'text-red-500'">
                  {{ item?.pnl }}</span>
              </div>
              <div class="flex items-center mb-3 gap-2">
                <img :src="`/icons/${item.exchange?.toLowerCase()}.png`" class="w-7 h-7" />
                <span class="font-medium">{{ item?.exchange }}</span>
              </div>
              <div class="flex justify-between my-1 items-center">
                <span class="font-medium">Coin</span>
                <span>{{ item?.coin }}</span>
              </div>
              <div class="flex justify-between my-1 flex-wrap items-center">
                <span class="font-medium">Buy</span>
                <span class="text-green-700 flex items-center gap-1 font-[Poppins] flex-wrap">
                  <Icon name="mdi:menu-up" class="w-8 h-8" />{{ item.buyPrice }}
                  (
                  <NuxtTime :datetime="item.buyDate" month="short" year="numeric" day="2-digit" />)
                </span>
              </div>
              <div class="flex justify-between my-1 flex-wrap items-center">
                <span class="font-medium">Sell</span>
                <span class="text-red-600 flex items-center gap-1 font-[Poppins] flex-wrap">
                  <Icon name="mdi:menu-down" class="w-8 h-8" />{{
                    item.sellPrice
                  }}(
                  <NuxtTime :datetime="item.sellDate" month="short" year="numeric" day="2-digit" />)
                </span>
              </div>
              <div class="flex justify-between my-1 flex-wrap items-center">
                <span class="font-medium">Quantity</span>
                <span class="font-[Poppins]">
                  {{ item?.quantity }}
                </span>
              </div>
              <div class="flex justify-between mb-1 flex-wrap items-center">
                <span class="font-medium">Balance</span>
                <span class="font-[Poppins]">{{ item?.remaining }}</span>
              </div>
            </div>
          </template>
          <div class="flex justify-center gap-3 mt-6" v-if="!loading">
            <button @click="changePage(taxPagination?.currentPage - 1)" :disabled="taxPagination?.currentPage === 1"
              class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
              Previous
            </button>

            <span class="px-4 py-2 font-[Poppins]">
              Page {{ taxPagination?.currentPage }} of
              {{ taxPagination?.totalPages }}
            </span>

            <button @click="changePage(taxPagination?.currentPage + 1)" :disabled="taxPagination?.currentPage === taxPagination?.totalPages
              " class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
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
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const openChooseAccount = ref(false);
const router = useRouter();
const selectedCoin = ref("");
const auth = useAuthStore();
const store = mainStore();
const openCoinFilter = ref(false);
const openBuyDateFilter = ref(false);
const openSellDateFilter = ref(false);
const { transactions, pnl, total_pnl, taxPagination } = storeToRefs(store);
const selectedAccount = ref("");
const { user } = storeToRefs(auth);
const searchCoin = ref("");
const loading = ref(true);
const page = ref(1);
const sortBy = ref("");
const sortOrder = ref("");
const buyDate = ref(null)
const sellDate = ref(null)
const isFilterDrawerOpen = ref(false)
const openSelectCoin = ref(false)
const openSelectExchange = ref(false)
const openSelectSortBy = ref(false)
const openSelectSortOrder = ref(false)
const excelFields = {
  Exchange: "exchange",
  Coin: "coin",
  BuyDate: "buyDate",
  BuyPrice: "buyPrice",
  Quantity: "quantity",
  SellDate: "sellDate",
  SellPrice: "sellPrice",
  PNL: "pnl",
  Balance: "remaining",
};
// const loadAllTransactions = async () => {
//   try {
//     const res = await useApi("users/pnl/details", {
//       method: "GET",
//     });
//     allTransactions.value = res?.data?.data || [];
//   } catch {
//     allTransactions.value = [];
//   }
// };
const sortOrderList = ref([{
  label: "asc",
  value: "asc"
}, {
  label: "desc",
  value: "desc"
}])
const sortByList = ref([{
  label: "quantity",
  value: "quantity"
}, {
  label: "buyPrice",
  value: "buyPrice"
},
{
  label: "sellPrice",
  value: "sellPrice"
},
{
  label: "pnl",
  value: "pnl"
},
{ label: "balance", value: "balance" }
])
const getExchangeData = async () => {
  loading.value = true;

  const formatDate = (dateVal) => {
    if (!dateVal) return undefined;
    const date = new Date(dateVal);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  await getPnlDetails({
    exchange: selectedAccount.value || undefined,
    limit: 50,
    page: page.value || undefined,
    coin: selectedCoin.value || undefined,
    sortBy: sortBy.value || undefined,
    sortOrder: sortOrder.value || undefined,
    buyFrom: formatDate(buyDate.value?.[0]),
    buyTo: formatDate(buyDate.value?.[1]),
    sellFrom: formatDate(sellDate.value?.[0]),
    sellTo: formatDate(sellDate.value?.[1]),
  });

  loading.value = false;
};
const coinList = computed(() => {
  const uniqueCoins = taxPagination.value?.coins;

  if (!searchCoin.value) return uniqueCoins;
  return uniqueCoins?.filter((coin) =>
    coin?.toLowerCase().includes(searchCoin.value.toLowerCase())
  );
});
const handleExchange = (exchange) => {
  selectedAccount.value = exchange;
  openChooseAccount.value = false;
};
const changePage = async (pge) => {
  page.value = pge;
};


const getCoinData = async (coin) => {
  selectedCoin.value = coin;
  openCoinFilter.value = false;

};
const handleSort = (sort, order) => {
  sortBy.value = sort;
  sortOrder.value = order;
};
const handleClickOutside = () => {
  openChooseAccount.value = false;
  openCoinFilter.value = false;
  openBuyDateFilter.value = false;
  openSellDateFilter.value = false;
};
const applyFilters = () => {
  isFilterDrawerOpen.value = false;
};
const clearFilters = () => {
  selectedAccount.value = "";
  selectedCoin.value = "";
  buyDate.value = null;
  sellDate.value = null;
  sortBy.value = "";
  sortOrder.value = "asc";
  page.value = 1;
  applyFilters();
};

const exportPnl = async () => {
  const { data, error } = await pnlExportToExcel()
  if (data) {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "pnl-report.xlsx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

}
watch([selectedAccount, selectedCoin, page, sortBy, sortOrder, buyDate, sellDate], async () => {
  await getExchangeData();
});
onMounted(async () => {
  document.addEventListener("click", handleClickOutside);
  loading.value = true;
  await getExchangeData();
  // await loadAllTransactions();
  loading.value = false;
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style>
.dp--action-buttons .dp--action-select {
  background-color: #4AABAB !important;
  margin: 1px !important;
}

.dp--today {
  border-color: #4AABAB !important;
}

.dp--active {
  background-color: #4AABAB !important;
  border-radius: 3px !important;
  margin: 1px !important;
}
</style>
