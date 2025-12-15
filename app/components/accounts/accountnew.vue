<template>
  <div class="md:p-10">
    <div class="flex flex-col justify-center items-center">
      <div
        class="flex flex-col justify-center items-center shadow-[0_0_10px_0] shadow-[#254BD34D] p-10 rounded-xl relative mt-10 md:mt-4">
        <div class="absolute -top-[60px] left-1/2 -translate-x-1/2">
          <img :src="'/new-avatar.png'"
            class="w-28 h-28 rounded-full bg-white shadow-[0_0_10px_0] shadow-[#254BD34D]" />
        </div>
        <h2 class="text-center text-xl font-medium pt-5">Total Exchanges</h2>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-10 w-full">
          <div class="text-center sm:p-2">
            <div class="text-4xl font-medium font-[Poppins]">
              {{ totalTransactions?.TransactionSum }}
            </div>

            <p>Total Transactions</p>
            <div class="flex justify-center mt-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.541016 7.45807H24.0634M18.8362 0.924072L25.3702 7.45807L18.8362 13.9921M26.677 20.5261H3.15462M8.38182 13.9921L1.84782 20.5261L8.38182 27.0601"
                  stroke="#4AABAB" stroke-width="2.6136" />
              </svg>
            </div>
          </div>
          <div class="text-center bg-[#37D35921] rounded-2xl px-6 py-3">
            <div class="text-3xl font-medium font-[Poppins]" :class="totalTransactions?.PnlSum > 0
              ? 'text-[#31B431]'
              : totalTransactions?.PnlSum < 0
                ? 'text-red-500'
                : ''
              ">
              {{ totalTransactions?.PnlSum?.toFixed(2) }}
            </div>

            <p>Total Account Income</p>
          </div>
          <div class="text-center sm:p-2">
            <div class="text-4xl font-medium font-[Poppins]">
              {{ totalTransactions?.FileCount }}
            </div>
            <p>Total Imported Files</p>
            <div class="flex justify-center mt-2">
              <Icon name="mdi:files" class="w-6 h-6 text-[#4AABAB]" />
            </div>
          </div>
        </div>
      </div>
      <div class="md:min-w-[700px] md:mt-10 flex max-sm:mt-5 mb-4 mt-5">
        <input type="text" placeholder="Search your account"
          class="relative w-full rounded-full border border-gray-300 px-12 py-3 shadow-sm" />
      </div>
    </div>

    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:mt-3 md:p-16 max-sm:mb-3 mb-4 p-3 xl:max-w-7xl mx-auto ">
      <div v-for="item in total_pnl" :key="item._id"
        class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg p-5 ">
        <div class="flex justify-between items-start gap-4">
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <img :src="`/icons/${item?.exchange}.png`" class="w-8 h-8" />

              <div class="text-lg font-medium capitalize px-2">
                {{ item?.exchange }}
                <div class="flex justify-start mt-3">

                  <Icon name="mdi:swap-horizontal" class="w-6 h-6"></Icon>

                  <div class="text-lg font-medium font-[Poppins] ml-2 -mt-1">
                    {{ item?.totalTransaction }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative flex items-center gap-2">
            <div class="rounded-full opacity-85 bg-[#c2f3d5] px-3 py-1 text-sm">
              Data Synced
            </div>

            <div class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
              @click="toggleMenu(item._id)">
              <Icon name="mdi:dots-vertical" class="w-6 h-6 text-gray-600" />
            </div>

            <div v-if="open === item._id"
              class="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul class="py-2 text-sm text-gray-700">
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit Now</li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="confirmDelete(item._id)">Delete Now</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div @click="buttonclick"
      class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white border border-teal-500 rounded-xl flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 shadow-md z-10 opacity-80 cursor-pointer">
      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center opacity-90">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-6 h-6 sm:w-8 sm:h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <p class="text-sm sm:text-base m-0 ml-3 sm:ml-5 ">
        Add a new account
      </p>
    </div>

    <div v-if="confirm" class="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center">
        <p class="text-lg font-medium mb-6">Confirm delete?</p>

        <div class="flex justify-center gap-3">
          <button @click="confirm = false" class="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
            Cancel
          </button>

          <button @click="deleteAccount(idToDelete)"
            class="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>

    <Exchangeslist v-if="exchange" @close="exchange = false" @select="openDetails" />
    <Addaccount v-if="showDetails" :account="selectedAccount" @close="showDetails = false" />
    <div v-if="confirm" class="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center">
        <p class="text-lg font-medium mb-6">Confirm delete?</p>

        <div class="flex justify-center gap-3">
          <button @click="confirm = false" class="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">
            Cancel
          </button>

          <button @click="deleteAccount(idToDelete)"
            class="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { mainStore } from "~/store/mainstore";
import { useAuthStore } from "~/store/auth";
const toast = useToast();

const store = mainStore();

const { total_pnl, totalTransactions,showDetails } = storeToRefs(store);

const router = useRouter();
const exchange = ref(false);

const selectedAccount = ref(null);

const open = ref(null);
const confirm = ref(false)
const idToDelete = ref(null)

const askDelete = (id) => {
  idToDelete.value = id
  confirm.value = true
  open.value = null
}

const toggleMenu = (id) => {
  open.value = open.value === id ? null : id;
};

//TODO refactor function name
const buttonclick = () => {
  exchange.value = true;
};

const confirmDelete = (id) => {
  idToDelete.value = id
  confirm.value = true
  open.value = null
}

function openDetails(item) {
  selectedAccount.value = item;
  exchange.value = false;
  store.updateShowDetails(true);
}

const deleteAccount = async (id) => {
  try {
    const store = mainStore()
    const BASE_URL = useRuntimeConfig().public.apiBase
    const { token } = useAuthStore()
    const res = await $fetch(`/delete/${id}`, {
      baseURL: BASE_URL,
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })

    if (!res?.success) throw new Error()

    toast.success({ message: "Account deleted", position: 'topCenter' })
    confirm.value = false;

  } catch (e) {
    console.error(e)
    toast.error({ message: "Delete failed", position: 'topCenter' })
  }
  await getAccounts();
}

onMounted(async () => {
  await getAccounts();
});
</script>
