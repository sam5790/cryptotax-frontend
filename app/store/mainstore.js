import { defineStore } from "pinia";

export const mainStore = defineStore("main", () => {

  const transactions = ref([]);
  const coin_balance = ref([]);
  const pnl = ref([]);
  const total_pnl=ref([])

  const PNL_TOTAL = computed(() => {
    return pnl.value.reduce((total, rec) => total + rec.pnl, 0);
  });

  const TDS_TOTAL = computed(() => {
    return transactions.value.reduce(
      (total, rec) => total + parseFloat(rec.tds || 0),
      0
    );
  });//need to change from the front-end and fetch it from the backend
  

  function setTransactions(value){
  transactions.value=value
  console.log("transactions",transactions.value)
  } 

  function setCoinBalance(value){
    coin_balance.value=value
  }

  function setPnl(value){
    pnl.value=value
  }

  function setTotalPnl(value){
    console.log("totalpnl",total_pnl.value)
    total_pnl.value=value
  }
  return {
    
    transactions,
    coin_balance,
    pnl,
    total_pnl,

    PNL_TOTAL,
    TDS_TOTAL,

    setTransactions,
    setCoinBalance,
    setPnl,
    setTotalPnl
  };
},
  { persist: true, storage: "localStorage" }
);
