<template>
  <div class="md:p-10">
    <div class="flex flex-col justify-center items-center">
      <div
        class="flex relative flex-col justify-center items-center shadow-[0_0_10px_0] shadow-[#254BD34D] sm:p-10 px-5 py-10 rounded-xl mt-10 md:mt-4 mx-2 md:mx-0"
      >
        <div class="absolute -top-[60px] left-1/2 -translate-x-1/2">
          <img
            src="/new-avatar.png"
            class="w-28 h-28 rounded-full bg-white shadow-[0_0_10px_0] shadow-[#254BD34D]"
          />
        </div>
        <h2 class="text-center text-xl font-medium pt-5 pb-2">
          Total Exchanges
        </h2>
        <div class="flex items-center justify-center gap-4 sm:gap-10 w-full">
          <div class="text-center sm:p-2">
            <div class="sm:text-4xl text-lg font-medium font-[Poppins]">
              {{ totalTransactions?.TransactionSum }}
            </div>

            <p class="text-xs sm:text-base">Total Transactions</p>
            <div class="flex justify-center mt-2">
              <svg
                class="sm:w-6 sm:h-6 w-4 h-4"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.541016 7.45807H24.0634M18.8362 0.924072L25.3702 7.45807L18.8362 13.9921M26.677 20.5261H3.15462M8.38182 13.9921L1.84782 20.5261L8.38182 27.0601"
                  stroke="#4AABAB"
                  stroke-width="2.6136"
                />
              </svg>
            </div>
          </div>
          <div class="text-center bg-[#37D35921] rounded-2xl sm:px-6 px-2 py-3">
            <div
              class="sm:text-3xl text-lg font-medium font-[Poppins]"
              :class="
                totalTransactions?.PnlSum > 0
                  ? 'text-[#31B431]'
                  : totalTransactions?.PnlSum < 0
                    ? 'text-red-500'
                    : ''
              "
            >
              {{ totalTransactions?.PnlSum?.toFixed(2) }}
            </div>

            <p class="text-xs sm:text-base">Total Account Income</p>
          </div>
          <div class="text-center sm:p-2">
            <div class="sm:text-4xl text-lg font-medium font-[Poppins]">
              {{ totalTransactions?.FileCount }}
            </div>
            <p class="text-xs sm:text-[16px]">Total Imported Files</p>
            <div class="flex justify-center mt-2">
              <Icon
                name="mdi:files"
                class="sm:w-6 w-4 sm:h-6 h-4 text-[#4AABAB]"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="md:min-w-[900px] min-w-[95%] mt-10">
        <input
          type="text"
          placeholder="Search your account"
          class="relative w-full rounded-full border border-gray-300 px-12 py-3 shadow-sm"
        />
      </div>
    </div>

    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:mt-3 md:p-16 max-sm:mb-3 mb-4 p-3 xl:max-w-7xl mx-auto"
    >
      <div
        v-for="item in total_pnl"
        :key="item._id"
        class="bg-white shadow-[0_0_10px_0] shadow-[#254BD34D] rounded-lg p-5"
      >
        <div class="flex justify-between items-start gap-4">
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <img
                :src="`/icons/${item?.exchange?.toLowerCase()}.png`"
                class="w-8 h-8"
              />

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
            <div
              class="rounded-full opacity-85 bg-[#c2f3d5] px-3 py-1 md:text-sm text-xs"
            >
              Data Synced
            </div>

            <div
              class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
              @click="toggleMenu(item._id)"
            >
              <Icon name="mdi:dots-vertical" class="w-6 h-6 text-gray-600" />
            </div>
            <div
              v-if="open === item._id"
              class="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            >
              <ul class="py-2 text-sm text-gray-700">
                <li
                  @click="buttonclick"
                  class="px-4 py-2 hover:bg-[#4aabab]/10 cursor-pointer flex items-center gap-1"
                >
                  <Icon name="mdi-plus" class="text-[#4aabab]" /> Add Files
                </li>
                <li
                  v-if="item?.fileUploadCount > 0"
                  class="px-4 py-2 hover:bg-[#4aabab]/10 cursor-pointer flex items-center gap-1"
                  @click="confirmDelete(item)"
                >
                  <Icon name="mdi-delete" class="text-red-600" /> Delete Files
                </li>
                <li
                  v-else
                  class="px-4 py-2 hover:bg-[#4aabab]/10 cursor-pointer flex items-center gap-1"
                  @click="confirmDeleteAccount(item)"
                >
                  <Icon name="mdi-delete" class="text-red-600" /> Delete Account
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      @click="buttonclick"
      class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white border border-teal-500 rounded-xl flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 shadow-md z-10 opacity-80 cursor-pointer"
    >
      <div
        class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center opacity-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <p class="text-sm sm:text-base m-0 ml-3 sm:ml-5">Add a new account</p>
    </div>

    <div
      v-if="confirm"
      class="fixed inset-0 bg-black/40 flex items-center justify-center p-2"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-4 w-full max-w-xs text-center"
      >
        <p class="text-lg font-medium mb-3">Select the files</p>
        <div
          class="max-h-40 overflow-y-auto mb-4 text-left border border-gray-100 rounded-lg p-1"
          v-if="totalFiles.length > 0"
        >
          <div
            v-for="(file, index) in totalFiles"
            :key="index"
            class="flex items-center justify-between p-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 rounded transition-colors"
          >
            <div class="flex items-center gap-2 overflow-hidden">
              <Icon
                name="mdi:file-excel"
                class="text-3xl text-[#4aabab] shrink-0"
              />
              <span
                class="text-sm text-gray-600 truncate"
                :title="file.fileName || file.name"
              >
                {{ file.fileName || file.name || `File ${index + 1}` }}
              </span>
            </div>
            <input
              @change="handelCheckedFile($event, file)"
              type="checkbox"
              class="w-4 h-4 text-[#4aabab] border-gray-300 rounded accent-[#4aabab] cursor-pointer"
            />
          </div>
        </div>
        <div v-if="deleteLoading" class="text-gray-700 font-semibold mb-2">
          Deleting... Please wait.
        </div>
        <div class="flex justify-center gap-3">
          <button
            @click="confirm = false"
            class="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            :disabled="deleteLoading"
            @click="deleteExchangeFiles(totalFiles?.[0]?.exchange)"
            class="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="deleteAccountConfirm"
      class="fixed inset-0 bg-black/40 flex items-center justify-center p-2"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-4 w-full max-w-md text-center"
      >
        <p class="text-lg font-medium mb-3">Delete Account</p>
        <div class="mb-4">
          Are you sure you want to delete
          <span class="font-medium capitalize text-[#4AABAB]"
            >"{{ selectedAccount?.exchange }}"</span
          >
          account?
        </div>

        <div class="flex justify-center gap-3">
          <button
            @click="deleteAccountConfirm = false"
            class="px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            @click="deleteExchange(selectedAccount?._id)"
            class="px-4 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <Exchangeslist
      v-if="exchange"
      @close="exchange = false"
      @select="openDetails"
    />
    <Addaccount
      v-if="showDetails"
      :account="selectedAccount"
      @close="showDetails = false"
    />
  </div>
</template>

<script setup>
import { mainStore } from "~/store/mainstore";
const toast = useToast();
const store = mainStore();
const { total_pnl, totalTransactions, showDetails } = storeToRefs(store);

const router = useRouter();
const exchange = ref(false);
const totalFiles = ref([]);
const selectedFiles = ref([]);
const selectedAccount = ref(null);

const open = ref(null);
const confirm = ref(false);
const deleteAccountConfirm = ref(false);
const idToDelete = ref(null);
const deleteLoading = ref(false);

const toggleMenu = (id) => {
  open.value = open.value === id ? null : id;
};

const buttonclick = () => {
  exchange.value = true;
  open.value = null;
};

const confirmDelete = async (item) => {
  const { data, error } = await getUploadedFiles(item?.exchange);
  if (data?.success) {
    selectedFiles.value = [];
    totalFiles.value = data?.data?.data;
    idToDelete.value = item?._id;
    confirm.value = true;
    open.value = null;
  }
};
const confirmDeleteAccount = async (item) => {
  selectedAccount.value = item;
  deleteAccountConfirm.value = true;
  open.value = null;
};

function openDetails(item) {
  selectedAccount.value = item;
  exchange.value = false;
  store.updateShowDetails(true);
}
const handelCheckedFile = (e, file) => {
  if (e.target.checked) {
    selectedFiles.value.push(file?._id);
  } else {
    selectedFiles.value = selectedFiles.value.filter((f) => f !== file?._id);
  }
};
const deleteExchangeFiles = async (exchange) => {
  deleteLoading.value = true;
  const { data, error } = await deleteFiles(exchange, selectedFiles.value);
  if (data?.success) {
    await getAccounts();
    confirm.value = false;
  }
  deleteLoading.value = false;
};
const deleteExchange = async (exchange) => {
  const { data, error } = await deleteExchangeAccount(exchange);
  if (data?.success) {
    await getAccounts();
    selectedAccount.value = null;
    deleteAccountConfirm.value = false;
    toast.success({
      title: "Success",
      message: "Account deleted successfully",
      duration: 1000,
      position: "topCenter",
    });
  }
};

onMounted(async () => {
  await getAccounts();
});
</script>
