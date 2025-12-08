<template>
  <div class=" flex flex-col justify-center items-center bg-gray-50 h-auto">
    <h2 class="text-2xl md:text-4xl font-semibold my-5">Transactions</h2>
    <div class="w-full overflow-x-auto shadow-2xl md:p-8 bg-white rounded-lg p-4">
      <table class="w-full min-w-[700px] text-left">
        <thead>
          <tr class="text-sm md:text-base">
            <th class="py-2 px-3 border-b">#</th>
            <th class="py-2 px-3 border-b">Exchange</th>
            <th class="py-2 px-3 border-b">Coin</th>
            <th class="py-2 px-3 border-b">Timestamp</th>
            <th class="py-2 px-3 border-b">Quantity</th>
            <th class="py-2 px-3 border-b">Amount</th>
            <th class="py-2 px-3 border-b">Type</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in transactions" :key="index" class="border-b text-sm md:text-base">
            <td class="py-3 px-3">{{ index + 1 }}</td>
            <td class="py-4 px-4 flex items-center gap-2">
                <img :src="`/icons/${item.exchange}.png`" class="w-6 h-6 sm:w-8 sm:h-8" />
                {{ item.exchange }}
              </td>
            <td class="py-3 px-3">{{ item.coin }}</td>
            <td class="py-3 px-3">{{ item.date }}</td>

            <td class="py-3 px-3">
              <div v-if="item.type === 'buy' || item.type === 'deposited'" class="flex items-center text-green-500">
                <svg class="w-3 h-2 mr-1" xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 16 10">
                  <path
                    d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                </svg>
                {{ item.quantity }}
              </div>

              <div v-else class="flex items-center text-red-500">
                <svg class="w-3 h-2 mr-1" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 16 10">
                  <path
                    d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                </svg>
                {{ item.quantity }}
              </div>
            </td>

            <td class="py-3 px-3">{{ item.total }}</td>
            <td class="py-3 px-3">{{ item.type }}</td>
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
    <h2 class="text-2xl md:text-4xl font-semibold my-8">Analysis</h2>
    <div class="w-full overflow-x-auto shadow-2xl md:p-8 bg-white rounded-lg mb-10 p-4">
      <table class="w-full min-w-[800px] text-left">
        <thead>
          <tr class="text-sm md:text-base">
            <th class="py-2 px-3 border-b">#</th>
            <th class="py-2 px-3 border-b">Coin</th>
            <th class="py-2 px-3 border-b">Quantity</th>
            <th class="py-2 px-3 border-b">Sold On</th>
            <th class="py-2 px-3 border-b">Selling Price</th>
            <th class="py-2 px-3 border-b">Bought On</th>
            <th class="py-2 px-3 border-b">Bought At</th>
            <th class="py-2 px-3 border-b">P/L</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in computedPNL" :key="index" class="border-b text-sm md:text-base">
            <td class="py-3 px-3">{{ index + 1 }}</td>
            <td class="py-3 px-3">{{ item.coin }}</td>
            <td class="py-3 px-3">{{ item.quantity }}</td>
            <td class="py-3 px-3">{{ item.sellDate }}</td>

            <td class="py-3 px-3" :style="{ color: item.sellPrice >= item.buyPrice ? 'green' : 'red' }">
              {{ item.sellPrice }}
            </td>

            <td class="py-3 px-3">{{ item.buyDate }}</td>

            <td class="py-3 px-3" :style="{ color: item.buyPrice >= item.sellPrice ? 'green' : 'red' }">
              {{ item.buyPrice }}
            </td>

            <td class="py-3 px-3">{{ item.pnl }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
import { mainStore } from '~/store/mainstore';
import Transactions from '../accounts/transactions.vue';
// import Index from '../aboutUs/index.vue';
import { useAuthStore } from '~/store/auth';
const auth = useAuthStore()
const { user } = storeToRefs(auth)
const router = useRouter()

await getTransactions()
const store = mainStore()
const { transactions, pnl } = storeToRefs(store)

onMounted(() => {
  if (!auth.token) {
    router.push("/login");
    console.log("user existed or not", user.value)
  }

});

const pagination = ref({
  currentPage: 1,
  totalPages: 1
});
const loadTransactions = async (page = 1) => {
  const res = await getTransactions(page);

  if (res?.data) {
    pagination.value = res.pagination;  
  }
};
await loadTransactions(1);


const computedPNL = computed(() => {
  if (!Array.isArray(pnl.value)) return [];
  return pnl.value.filter(record => record.pnl !== null);
});

</script>
