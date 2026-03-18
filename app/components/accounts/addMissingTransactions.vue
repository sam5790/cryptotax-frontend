<template>
  <div
    v-if="addTransaction"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5"
    @click="handleClose"
  >
    <div
      class="bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-h-full overflow-y-auto w-[95%] max-w-3xl relative"
      @click.stop
    >
      <button
        @click="handleClose"
        class="absolute top-0 right-0 p-2 rounded-full hover:bg-gray-200 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 md:w-8 md:h-8 text-white bg-[#4aabab] rounded-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <h2 class="text-xl md:text-2xl font-medium text-center mb-6">
        Add Missing Transaction
      </h2>
      <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div>
          <label class="text-gray-400 font-medium text-sm">Exchange</label>
          <div class="relative inline-block text-left mt-1">
            <button
              @click.stop="openSelectExchange = !openSelectExchange"
              class="w-48 flex items-center justify-between gap-2 rounded-lg px-4 py-2 border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-[#4aabab]"
            >
              <div
                class="flex items-center gap-3 text-sm"
                v-if="transactionDetails?.exchange"
              >
                <img
                  :src="`/icons/${transactionDetails?.exchange.toLowerCase()}.png`"
                  :alt="transactionDetails?.exchange"
                  class="h-6 w-6 rounded-full"
                />
                {{ transactionDetails?.exchange }}
              </div>
              <div
                class="flex items-center gap-3 text-sm py-0.5 text-gray-400 font-normal"
                v-else
              >
                Select Exchange
              </div>
              <Icon
                name="mdi:chevron-down"
                class="size-5 text-[#4AABAB] transition-transform"
                :class="{ 'rotate-180': openSelectExchange }"
              />
            </button>
            <div
              v-if="openSelectExchange"
              class="absolute right-0 top-11 bg-white rounded-lg w-48 border border-gray-200 shadow-lg z-50 animate-fadeIn"
            >
              <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                <li
                  v-for="exchange in exchangeCoinData?.exchanges"
                  :key="exchange"
                  @click="handleSelectExchange(exchange)"
                  class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                  :class="
                    exchange === transactionDetails.exchange
                      ? 'bg-[#4AABAB]/40'
                      : ''
                  "
                >
                  <img
                    :src="`/icons/${exchange?.toLowerCase()}.png`"
                    :alt="exchange"
                    class="h-6 w-6 rounded-full border-2 border-white -ml-3 first:ml-0"
                  />
                  {{ exchange }}
                </li>
              </ul>
            </div>
          </div>
          <span
            v-if="errors.exchange"
            class="text-red-500 text-xs mt-1 block"
            >{{ errors.exchange }}</span
          >
        </div>
        <div>
          <label class="text-gray-400 font-medium text-sm">Coin</label>
          <div class="relative inline-block text-left mt-1">
            <button
              @click.stop="openSelectCoin = !openSelectCoin"
              class="w-48 flex items-center justify-between gap-2 rounded-lg px-4 py-2 border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-[#4aabab]"
            >
              <div
                class="flex items-center gap-3 text-sm py-0.5"
                v-if="transactionDetails?.coin"
              >
                {{ transactionDetails?.coin }}
              </div>
              <div
                class="flex items-center gap-3 text-sm py-0.5 text-gray-400 font-normal"
                v-else
              >
                Select Coin
              </div>
              <Icon
                name="mdi:chevron-down"
                class="size-5 text-[#4AABAB] transition-transform"
                :class="{ 'rotate-180': openSelectCoin }"
              />
            </button>
            <div
              v-if="openSelectCoin"
              class="absolute right-0 top-11 bg-white rounded-lg w-48 border border-gray-200 shadow-lg z-50 animate-fadeIn"
            >
              <ul class="text-sm text-gray-700 max-h-60 overflow-y-auto">
                <li
                  v-for="coin in exchangeCoinData?.coins"
                  :key="coin"
                  @click="
                    ((transactionDetails.coin = coin), (openSelectCoin = false))
                  "
                  class="px-4 py-2 m-1 cursor-pointer rounded-md hover:bg-[#4AABAB]/10 flex items-center gap-3 transition"
                  :class="
                    coin === transactionDetails.coin ? 'bg-[#4AABAB]/40' : ''
                  "
                >
                  {{ coin }}
                </li>
              </ul>
            </div>
          </div>
          <span v-if="errors.coin" class="text-red-500 text-xs mt-1 block">{{
            errors.coin
          }}</span>
        </div>
        <div>
          <label class="text-gray-400 font-medium text-sm">Date and Time</label>
          <input
            type="datetime-local"
            v-model="transactionDetails.date"
            class="border w-48 rounded-lg text-gray-400 font-normal focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
          />
          <span v-if="errors.date" class="text-red-500 text-xs mt-1 block">{{
            errors.date
          }}</span>
        </div>
      </div>

      <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div>
          <label class="text-gray-400 font-medium text-sm">Unit Price</label>
          <input
            type="number"
            v-model="transactionDetails.price"
            class="border w-48 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
          />
          <span v-if="errors.price" class="text-red-500 text-xs mt-1 block">{{
            errors.price
          }}</span>
        </div>
        <div>
          <label class="text-gray-400 font-medium text-sm">Quantity</label>
          <input
            type="number"
            v-model="transactionDetails.quantity"
            class="border w-48 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
          />
          <span
            v-if="errors.quantity"
            class="text-red-500 text-xs mt-1 block"
            >{{ errors.quantity }}</span
          >
        </div>
        <div>
          <label class="text-gray-400 font-medium text-sm"
            >Transaction Type</label
          >
          <div class="relative inline-block text-left">
            <button
              @click.stop="openTransactionType = !openTransactionType"
              class="flex items-center justify-between gap-2 w-48 rounded-lg px-4 py-1.5 border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition mt-1"
            >
              <div
                class="flex items-center gap-3 capitalize text-sm py-0.5"
                v-if="transactionDetails?.type"
              >
                {{ transactionDetails?.type }}
              </div>
              <div
                class="flex items-center gap-3 capitalize text-gray-400 font-normal text-sm py-0.5"
                v-else
              >
                Select Type
              </div>
              <Icon
                name="mdi:chevron-down"
                class="size-5 text-[#4AABAB] transition-transform"
                :class="{ 'rotate-180': openTransactionType }"
              />
            </button>
            <div
              v-if="openTransactionType"
              class="absolute right-0 mt-1 w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50 animate-fadeIn"
            >
              <ul class="text-sm text-gray-700 max-h-72 overflow-y-auto">
                <li
                  v-for="type in transactionType"
                  :key="type.value"
                  @click="getTransactionType(type.value)"
                  class="px-4 py-2 m-1 cursor-pointer rounded-md flex items-center gap-3 transition"
                  :class="
                    type.value === transactionDetails?.type
                      ? 'bg-[#4AABAB] text-white'
                      : 'hover:bg-[#4AABAB]/10'
                  "
                >
                  {{ type.label }}
                </li>
              </ul>
            </div>
          </div>
          <span v-if="errors.type" class="text-red-500 text-xs mt-1 block">{{
            errors.type
          }}</span>
        </div>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div>
          <label class="text-gray-400 font-medium text-sm">Amount</label>
          <input
            type="number"
            v-model="transactionDetails.total"
            class="border w-48 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
          />
          <span v-if="errors.total" class="text-red-500 text-xs mt-1 block">{{
            errors.total
          }}</span>
        </div>
        <div>
          <label class="text-gray-400 font-medium text-sm">Fees</label>
          <input
            type="number"
            v-model="transactionDetails.fee"
            class="border w-48 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
          />
          <span v-if="errors.fee" class="text-red-500 text-xs mt-1 block">{{
            errors.fee
          }}</span>
        </div>
        <div>
          <label class="text-gray-400 font-medium text-sm">TDS</label>
          <input
            type="number"
            v-model="transactionDetails.tds"
            class="border w-48 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
          />
          <span v-if="errors.tds" class="text-red-500 text-xs mt-1 block">{{
            errors.tds
          }}</span>
        </div>
      </div>

      <div>
        <label class="text-gray-400 font-medium text-sm">Description</label>
        <textarea
          v-model="transactionDetails.remark"
          class="border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] p-3 mt-1"
        ></textarea>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-2 gap-4 mt-0">
        <div
          v-for="(file, index) in availableFiles"
          :key="index"
          class="flex items-center justify-between p-2 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
        >
          <div class="flex items-center gap-2 overflow-hidden">
            <Icon
              name="mdi:file-excel"
              class="text-3xl text-[#4aabab] shrink-0"
            />
            <span
              class="text-sm text-gray-600 truncate max-w-32"
              :title="file.fileName || file.name"
            >
              {{ file.fileName || file.name || `File ${index + 1}` }}
            </span>
          </div>
          <input
            name="file"
            :value="file?._id"
            v-model="transactionDetails.files"
            type="radio"
            class="w-4 h-4 accent-[#4aabab] cursor-pointer"
          />
        </div>
        <span
          v-if="errors.files"
          class="text-red-500 text-xs mt-1 block col-span-full"
          >{{ errors.files }}</span
        >
      </div>
      <div class="mt-6 flex justify-end gap-3">
        <button
          type="button"
          @click.stop="handleClose"
          class="px-6 py-2 border rounded-lg hover:bg-gray-50 transition font-medium text-gray-700"
        >
          Cancel
        </button>
        <button
          @click.stop="handleSave"
          class="px-6 py-2 bg-[#4aabab] text-white rounded-lg hover:bg-[#4aabab]/90 transition font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["closeModal", "saveTransaction"]);
const props = defineProps([
  "transaction",
  "addTransaction",
  "exchangeCoinData",
  "currentPage",
]);
const availableFiles = ref([]);
const toast = useToast();
const transactionDetails = ref({
  exchange: "",
  files: "",
  date: "",
  type: "",
  coin: "",
  price: 0,
  currency: "INR",
  quantity: 0,
  total: 0,
  fee: 0,
  tds: 0,
  remark: "",
  transactionType: "Manual transaction",
});
const errors = ref({});
const openSelectExchange = ref(false);
const openSelectCoin = ref(false);
const openTransactionType = ref(false);

const transactionType = [
  { label: "Buy", value: "buy" },
  { label: "Sell", value: "sell" },
  { label: "Deposited", value: "deposited" },
  { label: "Withdraw", value: "withdraw" },
  { label: "Credit", value: "credit" },
  { label: "Debit", value: "debit" },
];

const handleClose = () => {
  emit("closeModal");
};
const handleSelectExchange = (exchange) => {
  getUploadedData(exchange);
  transactionDetails.value.exchange = exchange;
  openSelectExchange.value = false;
};

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!transactionDetails.value.exchange) {
    errors.value.exchange = "Exchange is required";
    isValid = false;
  }
  if (!transactionDetails.value.coin) {
    errors.value.coin = "Coin is required";
    isValid = false;
  }
  if (!transactionDetails.value.date) {
    errors.value.date = "Date is required";
    isValid = false;
  }
  if (!transactionDetails.value.price || transactionDetails.value.price <= 0) {
    errors.value.price = "Valid price is required";
    isValid = false;
  }
  if (
    !transactionDetails.value.quantity ||
    transactionDetails.value.quantity <= 0
  ) {
    errors.value.quantity = "Valid quantity is required";
    isValid = false;
  }
  if (!transactionDetails.value.total || transactionDetails.value.total <= 0) {
    errors.value.total = "Valid amount is required";
    isValid = false;
  }

  if (!transactionDetails.value.type) {
    errors.value.type = "Transaction type is required";
    isValid = false;
  }
  if (
    transactionDetails.value.total === null ||
    transactionDetails.value.total === "" ||
    transactionDetails.value.total < 0
  ) {
    errors.value.total = "Valid amount is required";
    isValid = false;
  }
  if (
    transactionDetails.value.fee === null ||
    transactionDetails.value.fee === "" ||
    transactionDetails.value.fee < 0
  ) {
    errors.value.fee = "Valid fee is required";
    isValid = false;
  }
  if (
    transactionDetails.value.tds === null ||
    transactionDetails.value.tds === "" ||
    transactionDetails.value.tds < 0
  ) {
    errors.value.tds = "Valid TDS is required";
    isValid = false;
  }
  if (!transactionDetails.value.files) {
    errors.value.files = "File selection is required";
    isValid = false;
  }

  return isValid;
};

const handleSave = async () => {
  if (!validateForm()) return;
  const { data, error } = await addMissingTransaction(
    transactionDetails?.value,
  );
  if (data?.success) {
    await getTransactions({ page: props?.currentPage, limit: 50 });
    handleClose();
  }
};
const getTransactionType = (type) => {
  transactionDetails.value.type = type;
  openTransactionType.value = false;
};
const getUploadedData = async (exchange) => {
  const { data, error } = await getUploadedFiles(exchange);
  if (data?.success) {
    availableFiles.value = data?.data?.data;
  }
};

onMounted(() => {
  getUploadedData();
});
</script>
