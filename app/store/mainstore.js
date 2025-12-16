import { defineStore } from "pinia";

export const mainStore = defineStore(
  "main",
  () => {
    const transactions = ref([]);
    const coin_balance = ref([]);
    const pnl = ref([]);
    const total_pnl = ref([]);
    const total = ref(0);
    const totalTransactions = ref({})
    const transactionsPagination = ref({});
    const taxPagination = ref({});
    const showDetails = ref(false)
    const wallet = ref([])
    function setTransactions(value) {
      transactions.value = value;
    }

    function setCoinBalance(value) {
      coin_balance.value = value;
    }

    function setPnl(value) {
      pnl.value = value;
    }

    function setTotalPnl(value) {
      total_pnl.value = value;
    }

    function addTotal(value) {
      total.value = value;
    }
    function addTransactionsPagination(value) {
      transactionsPagination.value = value;
    }
    function addTaxPagination(value) {
      taxPagination.value = value;
    }
    function addTotalTransactions(value) {
      totalTransactions.value = value;
    }
    function updateShowDetails(value) {
      showDetails.value = value;
    }
    function addWallet(value) {
      wallet.value = value;
    }
    return {
      transactions,
      coin_balance,
      pnl,
      total_pnl,
      total,
      transactionsPagination,
      totalTransactions,
      showDetails,
      taxPagination,
      wallet,
      setTransactions,
      setCoinBalance,
      setPnl,
      setTotalPnl,
      addTotal,
      addTransactionsPagination,
      addTotalTransactions,
      updateShowDetails,
      addTaxPagination,
      addWallet
    };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
);
