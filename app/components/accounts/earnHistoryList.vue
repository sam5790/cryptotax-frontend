<template>
    <div class="mx-auto w-full md:p-7 md:my-8">
        <button @click="isFilterDrawerOpen = true"
            class="md:hidden flex justify-center items-center gap-2 shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg px-4 py-2 border border-gray-50 font-semibold m-2 w-32">
            <Icon name="mdi:filter-variant" class="size-6 text-[#4AABAB]" />
            Filters
        </button>

        <div v-if="isFilterDrawerOpen" class="fixed inset-0 bg-black/40 z-40" @click="isFilterDrawerOpen = false">
        </div>
        <div class="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300"
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
                            <div class="flex items-center gap-3 text-sm py-0.5" v-if="selectedExchange">
                                <img :src="`/icons/${selectedExchange?.toLowerCase()}.png`" :alt="exchange"
                                    class="h-7 w-7 rounded-full border-2 border-white -ml-3 first:ml-0" /> {{
                                        selectedExchange }}
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
                                <li v-for="exchange in earnTransactionsPagination?.exchanges" :key="exchange" @click="
                                    ((selectedExchange = exchange), (openSelectExchange = false))
                                    "
                                    class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                                    :class="exchange === selectedExchange ? 'bg-[#4AABAB]/40' : ''
                                        ">
                                    <img :src="`/icons/${exchange?.toLowerCase()}.png`" :alt="exchange"
                                        class="h-7 w-7 rounded-full border-2 border-white -ml-3 first:ml-0" /> {{
                                            exchange }}
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
                                <li v-for="coin in earnTransactionsPagination?.coins" :key="coin" @click="
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
                    <label class="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                    <VueDatePicker v-model="selectedDate" range :enable-time-picker="false"
                        placeholder="Select date range..." />
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
                                class="absolute left-0 top-full max-w-48 min-w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1 overflow">

                                <ul class="text-sm text-gray-700 max-h-48 overflow-y-auto"
                                    v-if="earnTransactionsPagination?.exchanges?.length > 0">
                                    <li v-for="exchange in earnTransactionsPagination.exchanges" :key="exchange"
                                        @click="(selectedExchange = exchange), (openExchangeFilter = false)"
                                        class="px-2 py-2 m-1 cursor-pointer rounded-md transition flex items-center gap-6 justify-between"
                                        :class="exchange === selectedExchange
                                            ? 'bg-[#4AABAB] text-white'
                                            : 'text-gray-600 hover:bg-[#4AABAB]/20'
                                            ">
                                        <div class="flex items-center gap-2">
                                            <img :src="`/icons/${exchange?.toLowerCase()}.png`" :alt="exchange"
                                                class="h-7 w-7 rounded-full border-2 border-white -ml-3 first:ml-0" />
                                            {{ exchange }}
                                        </div>
                                        <Icon v-if="exchange === selectedExchange" name="mdi-close-circle"
                                            class="cursor-pointer text-white shrink-0 text-xl hover:scale-105 tranition-all duration-300"
                                            @click.stop="(selectedExchange = ''), (openExchangeFilter = false)" />
                                    </li>
                                </ul>
                                <div v-else class="px-4 py-2 text-sm text-gray-500">
                                    No exchanges found.
                                </div>
                            </div>
                        </th>
                        <th class="py-2 px-4 border-b font-semibold relative">
                            <div class="flex items-center gap-1"
                                :class="openCoinFilter || selectedCoin ? 'text-[#4AABAB]' : ''">
                                Coin
                                <Icon name="mdi-filter-menu" class="cursor-pointer"
                                    @click.stop="openCoinFilter = !openCoinFilter" />
                            </div>
                            <div v-if="openCoinFilter" @click.stop
                                class="absolute left-0 top-full max-w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-1 overflow">
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
                            <div class="flex items-center gap-1"
                                :class="openDateFilter || selectedDate ? 'text-[#4AABAB]' : ''">
                                Timestamp
                                <Icon name="mdi-filter-menu" class="cursor-pointer"
                                    @click.stop="openDateFilter = !openDateFilter" />


                            </div>
                            <div v-if="openDateFilter"
                                class="absolute left-0 top-full w-72 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn p-2"
                                @click.stop>
                                <VueDatePicker v-model="selectedDate" range :enable-time-picker="false"
                                    placeholder="Select date range..." :formats="{ input: 'dd-MM-yyyy' }"
                                    :time-config="{ enableTimePicker: false }" @cleared="openDateFilter = false" />
                            </div>
                        </th>
                        <th class="py-2 px-4 border-b font-semibold">
                            <div class="flex items-center gap-1">
                                Type
                                <div class="flex flex-col -space-y-2">
                                    <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                                        :class="{ 'text-[#4AABAB]': sortBy === 'type' && sortOrder === 'asc' }"
                                        @click.stop="handleSort('type', 'asc')" />
                                    <Icon name="mdi-menu-down" class="cursor-pointer text-xl"
                                        @click.stop="handleSort('type', 'desc')"
                                        :class="{ 'text-[#4AABAB]': sortBy === 'type' && sortOrder === 'desc' }" />
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
                                    <Icon name="mdi-menu-down" class="cursor-pointer text-xl"
                                        @click.stop="handleSort('amount', 'desc')"
                                        :class="{ 'text-[#4AABAB]': sortBy === 'amount' && sortOrder === 'desc' }" />
                                </div>
                            </div>
                        </th>
                        <th class="py-2 px-4 border-b font-semibold">
                            <div class="flex items-center gap-1">
                                Interest
                                <div class="flex flex-col -space-y-2">
                                    <Icon name="mdi-menu-up" class="cursor-pointer text-xl"
                                        :class="{ 'text-[#4AABAB]': sortBy === 'interest' && sortOrder === 'asc' }"
                                        @click.stop="handleSort('interest', 'asc')" />
                                    <Icon name="mdi-menu-down" class="cursor-pointer text-xl"
                                        @click.stop="handleSort('interest', 'desc')"
                                        :class="{ 'text-[#4AABAB]': sortBy === 'interest' && sortOrder === 'desc' }" />
                                </div>
                            </div>
                        </th>
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
                    <tr v-for="(item, index) in earnTransactions" :key="index" class="border-b">
                        <td class="p-4">
                            {{ index + (earnTransactionsPagination.currentPage - 1) * 50 + 1 }}
                        </td>
                        <td class="p-4">
                            <div class="flex items-center gap-2">
                                <img :src="`/icons/${item.exchange?.toLowerCase()}.png`"
                                    class="w-6 h-6 sm:w-8 sm:h-8" />
                                {{ item?.exchange }}

                            </div>

                        </td>
                        <td class="p-4">{{ item?.coin }}</td>
                        <td class="p-4 font-[Poppins]">
                            <NuxtTime :datetime="item.date" month="short" year="numeric" day="2-digit" :hour12="false"
                                hour="2-digit" minute="2-digit" second="2-digit" />
                        </td>

                        <td class="p-4 font-[Poppins]">
                            {{ item?.type }}

                        </td>
                        <td class="p-4 font-[Poppins]">
                            {{ item?.amount }}

                        </td>
                        <td class="p-4 font-[Poppins]" :class="item?.interest > 0 ? 'text-green-500' : ''">
                            {{ item?.interest }}

                        </td>


                    </tr>
                </tbody>
            </table>
        </div>

        <div class="md:hidden flex flex-col space-y-3 p-2" v-if="loading || earnTransactions?.length">
            <template v-if="loading">
                <div v-for="i in 4" :key="`mobile-skel-${i}`"
                    class="border p-4 rounded-lg shadow-md bg-white animate-pulse">
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
                <div v-for="(item, index) in earnTransactions" :key="index"
                    class="border p-4 rounded-lg shadow-md bg-white">
                    <div class="flex justify-between items-center mb-2 flex-wrap">
                        <span class="font-semibold font-[Poppins]">#{{
                            index + (earnTransactionsPagination.currentPage - 1) * 50 + 1
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
                        <span class="font-medium">Amount:</span>
                        <span class="font-[Poppins]">{{ item?.amount }}</span>
                    </div>
                    <div class="flex justify-between mb-1">
                        <span class="font-medium">Interest:</span>
                        <span class="font-[Poppins]" :class="item?.interest > 0 ? 'text-green-500' : ''">{{
                            item?.interest
                            }}</span>
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
    <div class="flex justify-center gap-3 mt-6" v-if="!loading && earnTransactions?.length">
        <button @click="changePage(earnTransactionsPagination.currentPage - 1)"
            :disabled="earnTransactionsPagination.currentPage === 1"
            class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
            Previous
        </button>

        <span class="px-4 py-2 font-[Poppins]">
            Page {{ earnTransactionsPagination?.currentPage }} of
            {{ earnTransactionsPagination?.totalPages }}
        </span>

        <button @click="changePage(earnTransactionsPagination.currentPage + 1)" :disabled="earnTransactionsPagination.currentPage ===
            earnTransactionsPagination.totalPages
            " class="px-4 py-2 rounded bg-gray-200 disabled:opacity-40">
            Next
        </button>
    </div>
    <div v-if="!loading && earnTransactions?.length === 0"
        class="flex flex-col items-center justify-center p-4 text-center rounded-xl">
        <div class="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-2">
            <Icon name="mdi:magnify" class="w-10 h-10 text-[#4AABAB] opacity-60" />
        </div>
        <h3 class="text-xl font-semibold text-gray-700 font-[Poppins] mb-2">
            No earn transactions found!
        </h3>
        <p class="text-gray-500 text-sm max-w-md">
            There are no transactions available matching your criteria. Try
            adjusting your filters or add missing transactions.
        </p>
    </div>

</template>

<script setup>import { mainStore } from "~/store/mainstore";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const store = mainStore();
const allTransactions = ref([]);
const selectedTransaction = ref(null);
const editTransaction = ref(false);
const addTransaction = ref(false);
const exchangeCoinData = ref(null);
const { earnTransactions, earnTransactionsPagination } = storeToRefs(store);
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
const openSelectCoin = ref(false)
const openSelectExchange = ref(false)
const openSelectSortBy = ref(false)
const openSelectSortOrder = ref(false)
const formatDate = (dateVal) => {
    if (!dateVal) return undefined;
    const date = new Date(dateVal);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
const sortOrderList = ref([{
    label: "asc",
    value: "asc"
}, {
    label: "desc",
    value: "desc"
}])
const sortByList = ref([
    {
        label: "type",
        value: "type"
    },
    {
        label: "amount",
        value: "amount"
    },
    {
        label: "interest",
        value: "interest"
    },

])

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
const getEarnTransactionData = async () => {
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
    await getEarnTransactions(payload)
    loading.value = false;
}
const changePage = async (pge) => {
    page.value = pge
};
const handleEditTransaction = (transaction) => {
    selectedTransaction.value = transaction;
    editTransaction.value = true;
};

const getCoinData = async (coin) => {
    selectedCoin.value = coin;
    openCoinFilter.value = false;

};
const coinList = computed(() => {
    const uniqueCoins = earnTransactionsPagination.value?.coins;

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
    getEarnTransactionData()
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
const exportTransaction = async () => {
    const { data, error } = await transactionsExportToExcel()
    if (data) {
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "transaction-report.xlsx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

}
watch([selectedExchange, selectedCoin, page, sortBy, sortOrder, selectedDate, transactionType, selectedType], async () => {
    await getEarnTransactionData()
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
