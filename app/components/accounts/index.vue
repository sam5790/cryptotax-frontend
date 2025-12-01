<template>
  <div class="bg-gray-50 flex flex-col items-center ">

    <div class="bg-white flex rounded-full shadow-lg p-2 gap-2 relative tabs md:mt-10">

      <button class=" text-center rounded-full font-medium tab-btn" :class="{ active: tab === 'tax' }"
        @click="tab = 'tax'">
        Tax
      </button>

      <button class="  text-center rounded-full font-medium tab-btn" :class="{ active: tab === 'transactions' }"
        @click="tab = 'transactions'">
        Transactions
      </button>

      <button class="  text-center rounded-full font-medium tab-btn" :class="{ active: tab === 'accounts' }"
        @click="tab = 'accounts'">
        Accounts
      </button>
      <span class="shape"></span>
    </div>

    <div class=" mt-10">
      <AccountsTax v-if="tab === 'tax'" />
      <AccountsTransactions v-if="tab === 'transactions'" />
      <AccountsAccountnew v-if="tab === 'accounts'" />
    </div>

  </div>
</template>

<script setup>
import { useAuthStore } from '~/store/auth';
const auth = useAuthStore()
const { user } = storeToRefs(auth)
onMounted(() => {
  if (!user.value || !user.value.name) {
    router.push('/login');
    console.log("user existed or not", user.value)
  }
});
const router = useRouter()
const tab = ref("tax")

</script>


<style scoped>
.tabs {
  position: relative;
}

.shape {
  position: absolute;
  top: 14px;
  left: 8px;
  width: 128px;
  height: 32px;
  background: #027c6e;
  border-radius: 999px;
  z-index: 1;
  transition: all 0.3s ease;
}


.tabs .tab-btn.active:nth-of-type(1)~.shape {
  left: 8px;
}

.tabs .tab-btn.active:nth-of-type(2)~.shape {
  left: 144px;
}

.tabs .tab-btn.active:nth-of-type(3)~.shape {
  left: 280px;
}


.tab-btn {
  width: 128px;
  height: 40px;
  border-radius: 999px;
  color: #555;
  font-weight: 600;
  z-index: 2;
  position: relative;
  transition: color 0.3s ease;
}


.tab-btn.active {
  color: white;
}
</style>
