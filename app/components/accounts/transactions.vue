<template>
  <div class="p-4 md:p-16 bg-gray-50">
    <div class="flex flex-col sm:flex-row justify-center items-center gap-6 p-5 flex-wrap">
      <div class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28">
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center">
          <Icon name="mdi:sack-percent" class="size-7 text-blue-500" />
        </div>
        <p class="text-xl font-medium whitespace-nowrap">
          Total TDS
        </p>
        <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />
        <p v-else class="text-2xl font-medium font-[Poppins]">
          {{ transactionsPagination?.totalTds > 0 ? parseFloat(transactionsPagination?.totalTds)?.toFixed(2) : 0 }}</p>
      </div>

      <div
        class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28 mt-2 sm:mt-0">
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.3457 7.27283H22.9457M18.1457 1.27283L24.1457 7.27283L18.1457 13.2728M25.3457 19.2728H3.7457M8.5457 13.2728L2.5457 19.2728L8.5457 25.2728"
              stroke="#06BC4F" stroke-width="3.6" />
          </svg>
        </div>
        <p class="text-xl font-medium">Total Transactions</p>
        <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />
        <p v-else class="text-2xl font-medium font-[Poppins]">
          {{ transactionsPagination?.totalCount }}
        </p>
      </div>

      <div
        class="shadow-[0_0_10px_0] shadow-[#254BD34D] p-6 text-center rounded-2xl relative w-full sm:w-64 h-28 mt-2 sm:mt-0">
        <div
          class="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] w-12 h-12 rounded-full flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M22.3608 0C20.6664 0 19.0413 0.673104 17.8432 1.87124C16.6451 3.06937 15.972 4.69439 15.972 6.38881C15.972 8.08323 16.6451 9.70825 17.8432 10.9064C19.0413 12.1045 20.6664 12.7776 22.3608 12.7776C24.0552 12.7776 25.6802 12.1045 26.8783 10.9064C28.0765 9.70825 28.7496 8.08323 28.7496 6.38881C28.7496 4.69439 28.0765 3.06937 26.8783 1.87124C25.6802 0.673104 24.0552 0 22.3608 0ZM0 22.3608C0 20.6664 0.673103 19.0414 1.87123 17.8433C3.06936 16.6451 4.69438 15.972 6.38879 15.972C8.0832 15.972 9.70822 16.6451 10.9063 17.8433C12.1045 19.0414 12.7776 20.6664 12.7776 22.3608C12.7776 24.0553 12.1045 25.6803 10.9063 26.8784C9.70822 28.0765 8.0832 28.7496 6.38879 28.7496C4.69438 28.7496 3.06936 28.0765 1.87123 26.8784C0.673103 25.6803 0 24.0553 0 22.3608ZM15.972 17.5692C15.972 17.1456 16.1403 16.7394 16.4398 16.4398C16.7393 16.1403 17.1456 15.972 17.5692 15.972H27.1524C27.576 15.972 27.9822 16.1403 28.2818 16.4398C28.5813 16.7394 28.7496 17.1456 28.7496 17.5692V25.5552C28.7496 26.4025 28.413 27.215 27.8139 27.814C27.2149 28.4131 26.4024 28.7496 25.5552 28.7496H19.1664C18.3192 28.7496 17.5067 28.4131 16.9076 27.814C16.3085 27.215 15.972 26.4025 15.972 25.5552V17.5692ZM0 1.5972C0 1.1736 0.168276 0.767343 0.467808 0.46781C0.767341 0.168276 1.17359 0 1.5972 0H11.1804C11.604 0 12.0102 0.168276 12.3098 0.46781C12.6093 0.767343 12.7776 1.1736 12.7776 1.5972V9.58321C12.7776 10.4304 12.441 11.2429 11.842 11.842C11.2429 12.4411 10.4304 12.7776 9.58319 12.7776H3.1944C2.34719 12.7776 1.53468 12.4411 0.935617 11.842C0.336551 11.2429 0 10.4304 0 9.58321V1.5972Z"
              fill="#F3BA2F" />
          </svg>
        </div>
        <p class="text-xl font-medium">Uncategorised Data</p>
        <Icon v-if="loading" name="mdi-loading" class="animate-spin mt-1 h-8 w-8" />
        <p v-else class="text-2xl font-medium font-[Poppins]">
          {{ transactionsPagination?.invalidTransactions }}
        </p>
      </div>
    </div>

    <div class="mx-auto w-full md:p-7 md:my-8">
      <div class="flex items-center justify-between gap-3 p-4 md:p-7 flex-wrap">
        <div class="flex items-center gap-3 flex-wrap">
          <button @click="handleAddMissingTransaction"
            class="rounded-lg text-sm p-3 sm:px-4 hover:text-[#4AABAB] font-medium shadow-[0_0_10px_0] shadow-[#254BD34D]">
            + ADD MISSING TRANSACTIONS
          </button>
          <div class="relative inline-block text-left">
            <button @click.stop="openTransactionType = !openTransactionType"
              class="flex items-center justify-between gap-2 w-[235px] shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-100 font-semibold hover:text-[#4AABAB] text-gray-700 hover:bg-gray-50 transition">
              <div class="flex items-center gap-2">
                {{ selectedType || "Transaction Type" }}
              </div>
              <Icon name="mdi:chevron-down" class="size-5 text-[#4AABAB] transition-transform"
                :class="{ 'rotate-180': openTransactionType }" />
            </button>
            <div v-if="openTransactionType"
              class="absolute right-0 mt-1 w-full bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn">
              <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                <li v-for="type in [
                  'All',
                  'Valid Transactions',
                  'Invalid Transactions',
                ]" :key="type" @click="filterTransactionType(type)"
                  class="px-4 py-1 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                  :class="type === selectedType ? 'bg-[#4AABAB]/40' : ''">
                  {{ type }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DownloadExcel class="btn btn-primary" :data="allTransactions" :fields="excelFields" name="transaction.xls">
          <button class="flex justify-center gap-2 rounded-full px-3 py-2 border bg-[#4AABAB] text-white font-semibold"
            @click="exportFiles">
            <Icon name="mdi:export-variant" class="w-6 h-6" />
            Export Report
          </button>
        </DownloadExcel>
        <button @click="isFilterDrawerOpen = true"
          class="md:hidden flex justify-center items-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-50 font-semibold">
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
              <label for="exchange-filter" class="block text-sm font-medium text-gray-700 mb-1">Exchange</label>
              <select id="exchange-filter" v-model="selectedExchange"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#4AABAB] focus:ring-[#4AABAB]">
                <option value="">All Exchanges</option>
                <option v-for="exchange in transactionsPagination?.exchanges" :key="exchange" :value="exchange">
                  {{ exchange }}
                </option>
              </select>
            </div>
            <div>
              <label for="coin-filter" class="block text-sm font-medium text-gray-700 mb-1">Coin</label>
              <select id="coin-filter" v-model="selectedCoin"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#4AABAB] focus:ring-[#4AABAB]">
                <option value="">All Coins</option>
                <option v-for="coin in transactionsPagination?.coins" :key="coin" :value="coin">
                  {{ coin }}
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <VueDatePicker v-model="selectedDate" range :enable-time-picker="false"
                placeholder="Select date range..." />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="sort-by" class="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select id="sort-by" v-model="sortBy"
                  class="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#4AABAB] focus:ring-[#4AABAB]">
                  <option value="">Default</option>

                  <option value="quantity">Quantity</option>
                  <option value="type">Type</option>
                  <option value="amount">Amount</option>
                  <option value="tds">TDS</option>
                </select>
              </div>
              <div>
                <label for="sort-order" class="block text-sm font-medium text-gray-700 mb-1">Order</label>
                <select id="sort-order" v-model="sortOrder"
                  class="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#4AABAB] focus:ring-[#4AABAB]"
                  :disabled="!sortBy">
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
      </div>
      <div class="hidden md:block">
        <table class="w-full text-left">
          <thead class="bg-gray-100">
            <tr class="text-gray-500">
              <th class="py-2 px-4 border-b font-semibold">#</th>
              <th class="py-2 px-4 border-b font-semibold relative">
                <div class="flex items-center gap-1"
                  :class="openExchangeFilter || selectedExchange ? 'text-[#4AABAB]' : ''">
                  Exchange
                  <Icon name="mdi-filter-menu" class="cursor-pointer"
                    @click.stop="openExchangeFilter = !openExchangeFilter" />
                </div>
                <div v-if="openExchangeFilter"
                  class="absolute right-0 top-full max-w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1 overflow">

                  <ul class="text-sm text-gray-700 max-h-48 overflow-y-auto"
                    v-if="transactionsPagination?.exchanges?.length > 0">
                    <li v-for="exchange in transactionsPagination.exchanges" :key="exchange"
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
              <th class="py-2 px-4 border-b font-semibold relative">
                <div class="flex items-center gap-1" :class="openCoinFilter || selectedCoin ? 'text-[#4AABAB]' : ''">
                  Coin
                  <Icon name="mdi-filter-menu" class="cursor-pointer" @click.stop="openCoinFilter = !openCoinFilter" />
                </div>
                <div v-if="openCoinFilter"
                  class="absolute right-0 top-full max-w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1 overflow">
                  <div class="px-1 py-2 flex items-center justify-center gap-2 max-w-full">
                    <input v-model="searchCoin" type="text"
                      class="border max-w-full rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#4AABAB]"
                      placeholder="Search" />
                  </div>


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
                <div class="flex items-center gap-1" :class="openDateFilter || selectedDate ? 'text-[#4AABAB]' : ''">
                  Timestamp
                  <Icon name="mdi-filter-menu" class="cursor-pointer" @click.stop="openDateFilter = !openDateFilter" />


                </div>
                <div v-if="openDateFilter"
                  class="absolute right-0 top-full w-72 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-2"
                  @click.stop>
                  <VueDatePicker v-model="selectedDate" range :enable-time-picker="false"
                    placeholder="Select date range..." :formats="{ input: 'dd-MM-yyyy' }"
                    :time-config="{ enableTimePicker: false }" @cleared="openDateFilter = false" />
                </div>
              </th>
              <th class="py-2 px-4 border-b font-semibold">
                <div class="flex items-center gap-1">
                  Quantity
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
                <div class="flex items-center gap-1" :class="openTypeFilter || transactionType ? 'text-[#4AABAB]' : ''">
                  Type
                  <Icon name="mdi-filter-menu" class="cursor-pointer" @click.stop="openTypeFilter = !openTypeFilter" />
                </div>
                <div v-if="openTypeFilter"
                  class="absolute right-0 top-full max-w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1 overflow">
                  <ul class="text-sm text-gray-700 max-h-48 min-w-32 overflow-y-auto" v-if="coinList.length > 0">
                    <li v-for="type in transactionsPagination.types" :key="type"
                      @click="(transactionType = type), (openTypeFilter = false)"
                      class="px-2 py-2 m-1 cursor-pointer rounded-md transition flex items-center justify-between capitalize"
                      :class="type === transactionType
                        ? 'bg-[#4AABAB] text-white'
                        : 'text-gray-600 hover:bg-[#4AABAB]/20'
                        ">
                      {{ type }}
                      <Icon v-if="type === transactionType" name="mdi-close-circle"
                        class="cursor-pointer text-white shrink-0 text-xl hover:scale-105 tranition-all duration-300"
                        @click.stop="(transactionType = ''), (openTypeFilter = false)" />
                    </li>
                  </ul>
                  <div v-else class="px-4 py-2 text-sm text-gray-500">
                    No coins found.
                  </div>
                </div>
              </th>
              <th class="py-2 px-4 border-b font-semibold">
                <div class="flex items-center gap-1">
                  Amount
                  <div class="flex flex-col -space-y-2">
                    <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                      :class="{ 'text-[#4AABAB]': sortBy === 'amount' && sortOrder === 'asc' }"
                      @click.stop="handleSort('amount', 'asc')" />
                    <Icon name="mdi-menu-down" class="cursor-pointer text-xl" @click.stop="handleSort('amount', 'desc')"
                      :class="{ 'text-[#4AABAB]': sortBy === 'amount' && sortOrder === 'desc' }" />
                  </div>
                </div>
              </th>
              <th class="py-2 px-4 border-b font-semibold">
                <div class="flex items-center gap-1">
                  TDS
                  <div class="flex flex-col -space-y-2">
                    <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                      :class="{ 'text-[#4AABAB]': sortBy === 'tds' && sortOrder === 'asc' }"
                      @click.stop="handleSort('tds', 'asc')" />
                    <Icon name="mdi-menu-down" class="cursor-pointer text-xl" @click.stop="handleSort('tds', 'desc')"
                      :class="{ 'text-[#4AABAB]': sortBy === 'tds' && sortOrder === 'desc' }" />
                  </div>
                </div>
              </th>
              <th class="py-2 px-4 border-b font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody v-if="loading">
            <tr v-for="i in 5" :key="`skel-${i}`" class="border-b animate-pulse">
              <td class="p-4">
                <div class="h-4 bg-gray-200 rounded w-8"></div>
              </td>
              <td class="p-4">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div class="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </td>
              <td class="p-4">
                <div class="h-4 bg-gray-200 rounded w-16"></div>
              </td>
              <td class="p-4">
                <div class="h-4 bg-gray-200 rounded w-32"></div>
              </td>
              <td class="p-4">
                <div class="h-4 bg-gray-200 rounded w-20"></div>
              </td>
              <td class="p-4">
                <div class="h-4 bg-gray-200 rounded w-16"></div>
              </td>
              <td class="p-4">
                <div class="h-4 bg-gray-200 rounded w-24"></div>
              </td>
              <td class="p-4">
                <div class="h-4 bg-gray-200 rounded w-16"></div>
              </td>
              <td class="p-4">
                <div class="h-4 bg-gray-200 rounded w-12"></div>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(item, index) in transactions" :key="index" class="border-b">
              <td class="p-4">
                {{ index + (transactionsPagination.currentPage - 1) * 50 + 1 }}
              </td>
              <td class="p-4">
                <div class="flex items-center gap-2">
                  <img :src="`/icons/${item.exchange?.toLowerCase()}.png`" class="w-6 h-6 sm:w-8 sm:h-8" />
                  {{ item?.exchange }}
                  <div class="flex items-center justify-center relative group"
                    v-if="item?.transactionType === 'INR Converted'">
                    <Icon name="mdi-repeat-variant" class="text-2xl text-[#4AABAB]" />
                    <div
                      class="group-hover:block hidden absolute bottom-full left-1/2 -translate-x-1/2 bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-2 py-2 text-xs text-[#4AABAB] font-medium whitespace-nowrap text-center">
                      {{ item?.transactionType }}
                    </div>
                    <div class="absolute group-hover:block hidden -top-1 right-2 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
                <div v-if="item?.issues?.length"
                  class="flex items-center gap-1 flex-wrap mt-1 bg-red-100 rounded-md py-1 px-2">
                  <Icon name="mdi-information-outline" class="text-red-600" />
                  <div v-for="(issue, index) in item?.issues" :key="index"
                    class="font-semibold text-xs leading-tight text-red-600 rounded-md">
                    <span>{{ issue.message }}</span><span v-if="item?.issues?.length > index + 1">,</span>
                  </div>
                </div>
              </td>
              <td class="p-4">{{ item?.coin }}</td>
              <td class="p-4 font-[Poppins]">
                <NuxtTime :datetime="item.date" month="short" year="numeric" day="2-digit" :hour12="false"
                  hour="2-digit" minute="2-digit" second="2-digit" />
              </td>

              <td class="p-4 font-[Poppins]">
                {{ item?.quantity }}
                <!-- <p v-if="item.type == 'buy' || item.type == 'deposited'"
                  class="text-green-500 flex items-center gap-1 font-[Poppins]">
                  <Icon name="mdi:menu-up" class="w-8 h-8 text-teal-600" />
                  {{ item?.quantity }}
                </p>
                <p v-else class="text-red-500 flex items-center gap-1 font-[Poppins]">
                  <Icon name="mdi:menu-down" class="w-8 h-8 text-red-600" />
                  {{ item?.quantity }}
                </p> -->
              </td>
              <td class="p-4 font-[Poppins] capitalize">{{ item?.type }}</td>
              <td class="p-4 font-[Poppins]">{{ item?.total }}</td>
              <td class="p-4 font-[Poppins]">{{ item?.tds }}</td>
              <td class="p-4">
                <button class="hover:text-[#4AABAB] flex items-center justify-center"
                  @click="handleEditTransaction(item)">
                  <Icon name="mdi-pencil" class="text-lg" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="md:hidden flex flex-col space-y-3 p-2" v-if="loading || transactions?.length">
        <template v-if="loading">
          <div v-for="i in 4" :key="`mobile-skel-${i}`" class="border p-4 rounded-lg shadow-md bg-white animate-pulse">
            <div class="flex justify-between items-center mb-2">
              <div class="h-4 bg-gray-200 rounded w-10"></div>
              <div class="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div class="flex justify-between items-center my-2">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                <div class="h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div class="h-6 bg-gray-200 rounded-xl w-16"></div>
            </div>
            <div class="space-y-3 mt-4">
              <div class="flex justify-between">
                <div class="h-4 bg-gray-200 rounded w-12"></div>
                <div class="h-4 bg-gray-200 rounded w-16"></div>
              </div>
              <div class="flex justify-between">
                <div class="h-4 bg-gray-200 rounded w-16"></div>
                <div class="h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div class="flex justify-between">
                <div class="h-4 bg-gray-200 rounded w-16"></div>
                <div class="h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div class="flex justify-between">
                <div class="h-4 bg-gray-200 rounded w-10"></div>
                <div class="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div v-for="(item, index) in transactions" :key="index" class="border p-4 rounded-lg shadow-md bg-white">
            <div class="flex justify-between items-center mb-2 flex-wrap">
              <span class="font-semibold font-[Poppins]">#{{
                index + (transactionsPagination.currentPage - 1) * 50 + 1
              }}</span>
              <span class="text-gray-400 text-sm font-[Poppins]">
                <NuxtTime :datetime="item.date" month="short" year="numeric" day="2-digit" />
              </span>
            </div>
            <div class="flex justify-between items-center my-2">
              <div class="flex items-center gap-2">
                <img :src="`/icons/${item.exchange?.toLowerCase()}.png`" class="w-6 h-6" />
                <span class="font-medium">{{ item?.exchange }}</span>
              </div>
              <div class="capitalize rounded-xl px-3 font-medium text-sm text-white"
                :class="item.type === 'sell' ? 'bg-red-500' : 'bg-green-500'">
                {{ item?.type }}
              </div>
            </div>
            <div class="flex justify-between mb-1">
              <span class="font-medium">Coin:</span>
              <span>{{ item?.coin }}</span>
            </div>
            <div class="flex justify-between mb-1">
              <span class="font-medium">Quantity:</span>
              <span :class="item.type === 'buy'
                ? 'text-green-500 font-[Poppins]'
                : 'text-red-500 font-[Poppins]'
                ">{{ item?.quantity }}</span>
            </div>
            <div class="flex justify-between mb-1">
              <span class="font-medium">Amount:</span>
              <span class="font-[Poppins]">{{ item?.total }}</span>
            </div>
            <div class="flex justify-between">
              <span class="font-medium">TDS:</span>
              <span class="font-[Poppins]">{{ item?.tds || 0 }}</span>
            </div>
            <div class="flex justify-between items-center my-1">
              <div class="flex gap-1 items-center">
                <Icon name="mdi-upload" class="text-2xl text-[#4AABAB]"
                  v-if="item?.transactionType === 'Uploaded Transactions'" />
                <Icon name="mdi-repeat-variant" class="text-2xl text-[#4AABAB]"
                  v-else-if="item?.transactionType === 'INR Converted'" />
                <Icon name="mdi-plus" class="text-2xl text-[#4AABAB]" v-else />
                {{ item?.transactionType }}
              </div>
              <button
                class="text-[#4AABAB] flex justify-between border border-[#4AABAB] items-center px-4 py-1 rounded-lg font-medium"
                @click="handleEditTransaction(item)">
                <Icon name="mdi-pencil" /> Edit
              </button>
            </div>
            <div v-if="item?.issues?.length"
              class="flex items-center gap-1 flex-wrap mt-1 bg-red-100 rounded-md py-1 px-2">
              <Icon name="mdi-information-outline" class="text-red-600" />
              <div v-for="(issue, index) in item?.issues" :key="index"
                class="font-semibold text-xs leading-tight text-red-600 rounded-md">
                <span>{{ issue.message }}</span><span v-if="item?.issues?.length > index + 1">,</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="flex justify-center gap-3 mt-6" v-if="!loading && transactions?.length">
      <button @click="changePage(transactionsPagination.currentPage - 1)"
        :disabled="transactionsPagination.currentPage === 1" class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
        Previous
      </button>

      <span class="px-4 py-2 font-[Poppins]">
        Page {{ transactionsPagination?.currentPage }} of
        {{ transactionsPagination?.totalPages }}
      </span>

      <button @click="changePage(transactionsPagination.currentPage + 1)" :disabled="transactionsPagination.currentPage ===
        transactionsPagination.totalPages
        " class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
        Next
      </button>
    </div>
    <div v-if="!loading && transactions?.length === 0"
      class="flex flex-col items-center justify-center p-4 text-center rounded-xl">
      <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-2">
        <Icon name="mdi:magnify" class="w-10 h-10 text-[#4AABAB] opacity-60" />
      </div>
      <h3 class="text-xl font-semibold text-gray-700 font-[Poppins] mb-2">
        No transactions found!
      </h3>
      <p class="text-gray-500 text-sm max-w-md">
        There are no transactions available matching your criteria. Try
        adjusting your filters or add missing transactions.
      </p>
    </div>
    <div
      class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white border border-teal-500 rounded-xl flex items-center px-4 sm:px-10 py-3 sm:py-5 shadow-md z-20 opacity-60 hover:opacity-100 cursor-pointer">
      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 sm:w-6 sm:h-6">
          <path
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
        </svg>
      </div>
      <p class="text-sm sm:text-base m-0 ml-3 sm:ml-5">Call an Expert Now</p>
    </div>
  </div>
  <AccountsEditTransactionModal :transaction="selectedTransaction" :editTransaction="editTransaction"
    :currentPage="transactionsPagination?.currentPage" @closeModal="handleCloseModal" />
  <AccountsAddMissingTransactions :addTransaction="addTransaction" :currentPage="transactionsPagination?.currentPage"
    @closeModal="handleCloseModal" :exchangeCoinData="exchangeCoinData" />
</template>

<script setup>
import { mainStore } from "~/store/mainstore";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const store = mainStore();
const allTransactions = ref([]);
const selectedTransaction = ref(null);
const editTransaction = ref(false);
const addTransaction = ref(false);
const exchangeCoinData = ref(null);
const { transactions, transactionsPagination } = storeToRefs(store);
const openTransactionType = ref(false);
const selectedType = ref("All");
const transactionType = ref("");
const loading = ref(true);
const openCoinFilter = ref(false);
const openExchangeFilter = ref(false);
const openDateFilter = ref(false);
const openTypeFilter = ref(false);
const searchCoin = ref("");
const selectedCoin = ref("")
const page = ref(1)
const selectedExchange = ref("")
const selectedDate = ref(null)
const sortBy = ref("")
const sortOrder = ref("")
const isFilterDrawerOpen = ref(false)

const formatDate = (dateVal) => {
  if (!dateVal) return undefined;
  const date = new Date(dateVal);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const loadAllTransactions = async () => {
  try {
    const { data, error } = await useApi("users/transaction", {
      method: "GET",
    });
    if (data?.success) {
      const wholeTransactions = data?.data;
      wholeTransactions.forEach((item) => {
        const date = new Date(item.date);

        const offset = date.getTimezoneOffset();
        const localDate = new Date(date.getTime() - offset * 60000);
        item.date = localDate.toISOString().slice(0, 19);
      });
      allTransactions.value = wholeTransactions || [];

    } else {
      allTransactions.value = [];
    }
  } catch {
    allTransactions.value = [];
  }
};

const excelFields = {
  Exchange: "exchange",
  Coin: "coin",
  Timestamp: "date",
  Type: "type",
  Quantity: "quantity",
  Amount: "price",
  Total: "total",
  TDS: "tds",
  "Transaction Type": "transactionType",
  Fee: "fee",
  Issues: {
    field: "issues",
    callback: (value) => {
      if (!value || !Array.isArray(value)) return "";
      return value.map((issue) => `${issue.message}`).join(", ");
    },
  },
  Remark: "remark",
};
const getTransactionData = async () => {
  loading.value = true;
  const payload = {
    page: page.value,
    limit: 50,
    exchange: selectedExchange.value || undefined,
    coin: selectedCoin.value || undefined,
    type: transactionType.value || undefined,
    startDate: formatDate(selectedDate.value?.[0]) || undefined,
    endDate: formatDate(selectedDate.value?.[1]) || undefined,
    sortBy: sortBy.value || undefined,
    sortOrder: sortOrder.value || undefined,
    invalid: selectedType.value === "Invalid Transactions" ? true : selectedType.value === "Valid Transactions" ? false : undefined
  }
  await getTransactions(payload)
  loading.value = false;
}
const changePage = async (pge) => {
  page.value = pge
};
const handleEditTransaction = (transaction) => {
  selectedTransaction.value = transaction;
  editTransaction.value = true;
};
const handleAddMissingTransaction = () => {
  const coins = [
    ...new Set(
      allTransactions.value
        ?.sort((a, b) => a?.coin?.localeCompare(b.coin))
        ?.map((item) => item.coin) || [],
    ),
  ];
  const exchanges = [
    ...new Set(
      allTransactions.value
        ?.sort((a, b) => a?.exchange?.localeCompare(b.exchange))
        ?.map((item) => item.exchange) || [],
    ),
  ];
  exchangeCoinData.value = { coins, exchanges };
  addTransaction.value = true;
};
const handleCloseModal = () => {
  selectedTransaction.value = null;
  editTransaction.value = false;
  addTransaction.value = false;
};
const filterTransactionType = async (type) => {
  selectedType.value = type;
  openTransactionType.value = false;
};
const getCoinData = async (coin) => {
  selectedCoin.value = coin;
  openCoinFilter.value = false;

};
const coinList = computed(() => {
  const uniqueCoins = transactionsPagination.value?.coins;

  if (!searchCoin.value) return uniqueCoins;
  return uniqueCoins?.filter((coin) =>
    coin?.toLowerCase().includes(searchCoin.value.toLowerCase())
  );
});
const handleSort = (sort, order) => {
  sortBy.value = sort;
  sortOrder.value = order;
};
onMounted(async () => {
  loading.value = true;
  await loadAllTransactions();
  getTransactionData()
  loading.value = false;
  document.addEventListener("click", handleClickOutside);
});
const handleClickOutside = () => {
  openTransactionType.value = false;
  openCoinFilter.value = false;
  openExchangeFilter.value = false;
  openDateFilter.value = false;
};
const applyFilters = () => {
  isFilterDrawerOpen.value = false;
};
const clearFilters = () => {
  selectedExchange.value = "";
  selectedCoin.value = "";
  selectedDate.value = null;
  sortBy.value = "";
  sortOrder.value = "asc";
  page.value = 1;
  isFilterDrawerOpen.value = false;
};
watch([selectedExchange, selectedCoin, page, sortBy, sortOrder, selectedDate, transactionType, selectedType], async () => {
  await getTransactionData()
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
