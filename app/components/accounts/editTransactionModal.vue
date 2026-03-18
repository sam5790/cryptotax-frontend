<template>
  <div
    v-if="editTransaction"
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
        Edit Transaction
      </h2>
      <div class="space-y-6">
        <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div>
            <label class="text-gray-400 font-medium text-sm">Exchange</label>
            <div class="flex items-center gap-2">
              <img
                :src="`/icons/${transactionDetails?.exchange?.toLowerCase()}.png`"
                class="w-6 h-6"
              />
              <span class="font-medium">
                {{ transactionDetails?.exchange }}
              </span>
            </div>
          </div>
          <div>
            <label class="text-gray-400 font-medium text-sm">Coin</label>
            <div class="font-medium">{{ transactionDetails?.coin }}</div>
          </div>
          <div>
            <label class="text-gray-400 font-medium text-sm">Currency</label>
            <div class="font-medium capitalize">
              {{ transactionDetails?.currency }}
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-gray-400 font-medium text-sm">Type</label>
            <div class="font-medium">
              {{ transactionDetails?.transactionType }}
            </div>
          </div>
          <div>
            <label class="text-gray-400 font-medium text-sm">Unit Price</label>
            <div class="font-medium capitalize">
              {{ transactionDetails?.price }}
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div>
            <label class="text-gray-400 font-medium text-sm"
              >Date and Time</label
            >
            <input
              type="datetime-local"
              v-model="transactionDetails.date"
              class="border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
            />
          </div>
          <div>
            <label class="text-gray-400 font-medium text-sm">Quantity</label>
            <input
              type="number"
              v-model="transactionDetails.quantity"
              class="border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
            />
          </div>
          <div>
            <label class="text-gray-400 font-medium text-sm"
              >Transaction Type</label
            >
            <div class="relative inline-block text-left">
              <button
                @click.stop="openTransactionType = !openTransactionType"
                class="flex items-center justify-between gap-2 w-48 rounded-lg px-4 py-2 border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                <div class="flex items-center gap-3 capitalize">
                  {{ transactionDetails?.type || "Select Type" }}
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
          </div>
        </div>
        <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div>
            <label class="text-gray-400 font-medium text-sm">Amount</label>
            <input
              type="number"
              v-model="transactionDetails.total"
              class="border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
            />
          </div>
          <div>
            <label class="text-gray-400 font-medium text-sm">Fees</label>
            <input
              type="number"
              v-model="transactionDetails.fee"
              class="border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
            />
          </div>
          <div>
            <label class="text-gray-400 font-medium text-sm">TDS</label>
            <input
              type="number"
              v-model="transactionDetails.tds"
              class="border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] px-3 py-1.5 mt-1"
            />
          </div>
        </div>

        <div>
          <label class="text-gray-400 font-medium text-sm">Description</label>
          <textarea
            v-model="transactionDetails.remark"
            class="border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4aabab] p-3 mt-1"
          ></textarea>
        </div>
      </div>
      <div class="mt-6 flex justify-end gap-3">
        <button
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
const props = defineProps(["transaction", "editTransaction", "currentPage"]);
const toast = useToast();
const transactionDetails = ref({});

const openTransactionType = ref(false);
const transactionType = [
  { label: "Buy", value: "buy" },
  { label: "Sell", value: "sell" },
  { label: "Deposited", value: "deposited" },
  { label: "Withdraw", value: "withdraw" },
  { label: "Credit", value: "credit" },
  { label: "Debit", value: "debit" },
];
watch(
  () => props.transaction,
  (newVal) => {
    if (newVal) {
      transactionDetails.value = { ...newVal };
      if (transactionDetails.value.date) {
        const date = new Date(transactionDetails.value.date);
        const offset = date.getTimezoneOffset();
        const localDate = new Date(date.getTime() - offset * 60000);

        transactionDetails.value.date = localDate.toISOString().slice(0, 19);
      }
    }
  },
  { immediate: true },
);

const handleClose = () => {
  emit("closeModal");
};

const handleSave = async () => {
  const payload = {
    coin: transactionDetails.value.coin,
    currency: transactionDetails.value.currency,
    date: new Date(transactionDetails.value.date).toISOString(),
    exchange: transactionDetails.value.exchange,
    fee: transactionDetails.value.fee,
    price: transactionDetails.value.price,
    quantity: transactionDetails.value.quantity,
    remark: transactionDetails.value.remark,
    tds: transactionDetails.value.tds,
    total: transactionDetails.value.total,
    transactionType: transactionDetails.value.transactionType,
    type: transactionDetails.value.type,
  };
  const id = transactionDetails?.value?._id;
  const { data, error } = await editTransactions(id, payload);
  if (data?.success) {
    await getTransactions({ page: props?.currentPage || 1, limit: 50 });
    handleClose();
  }
};
const getTransactionType = (type) => {
  transactionDetails.value.type = type;
  openTransactionType.value = false;
};
</script>
