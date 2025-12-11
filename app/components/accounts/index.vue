<template>
  <div class="bg-gray-50 flex flex-col items-center">
    <div
      class="bg-white flex rounded-full border shadow-[0_0_25px_0] shadow-[#254BD34D] p-2 gap-2 relative tabs md:max-w-xl max-w-xs sm:max-w-md md:mt-10 mt-5"
    >
      <button
        class="text-center rounded-full font-medium tab-btn text-base max-sm:text-xs"
        :class="{ active: tab === 'tax' }"
        @click="tab = 'tax'"
      >
        Tax
      </button>

      <button
        class="text-center rounded-full font-medium tab-btn text-base max-sm:text-xs"
        :class="{ active: tab === 'transactions' }"
        @click="tab = 'transactions'"
      >
        Transactions
      </button>

      <button
        class="text-center rounded-full font-medium tab-btn text-base max-sm:text-xs"
        :class="{ active: tab === 'accounts' }"
        @click="tab = 'accounts'"
      >
        Accounts
      </button>
      <span class="shape"></span>
    </div>

    <div class="mt-10 w-screen">
      <AccountsTax v-if="tab === 'tax'" />
      <AccountsTransactions v-if="tab === 'transactions'" />
      <AccountsAccountnew v-if="tab === 'accounts'" />
    </div>
  </div>
</template>

<script setup>
const tab = ref("tax");
</script>

<style scoped>
.tabs {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.shape {
  position: absolute;
  top: 8px;
  height: 30px;
  background: #4aabab;
  border-radius: 999px;
  z-index: 1;
  transition: all 0.3s ease;
  width: calc(100% / 3 - 20px);
  left: 10px;
}

.tabs .tab-btn.active:nth-of-type(1) ~ .shape {
  left: 10px;
}

.tabs .tab-btn.active:nth-of-type(2) ~ .shape {
  left: calc(100% / 3 + 10px);
}

.tabs .tab-btn.active:nth-of-type(3) ~ .shape {
  left: calc((100% / 3) * 2 + 10px);
}

.tab-btn {
  flex: 1;
  height: 30px;
  border-radius: 999px;
  color: #555;
  font-weight: 600;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
  text-align: center;
}

.tab-btn.active {
  color: white;
}
</style>
