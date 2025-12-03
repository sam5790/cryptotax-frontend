<template>
  <div class="bg-gray-50 flex flex-col items-center ">

    <div class="bg-white flex rounded-full shadow-lg p-2 gap-2 relative tabs md:mt-10 max-sm:mb-10">

      <button class=" text-center rounded-full font-medium tab-btn text-base max-sm:text-xs" :class="{ active: tab === 'tax' }"
        @click="tab = 'tax'">
        Tax
      </button>

      <button class="  text-center rounded-full font-medium tab-btn text-base max-sm:text-xs" :class="{ active: tab === 'transactions' }"
        @click="tab = 'transactions'">
        Transactions
      </button>

      <button class="  text-center rounded-full font-medium tab-btn text-base max-sm:text-xs" :class="{ active: tab === 'accounts' }"
        @click="tab = 'accounts'">
        Accounts
      </button>
      <span class="shape"></span>
    </div>

    <div class="mt-10">
      <AccountsTax v-if="tab === 'tax'" />
      <AccountsTransactions v-if="tab === 'transactions'" />
      <AccountsAccountnew  v-if="tab === 'accounts'"/>
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
  display: flex;
  width: 100%;
  max-width: 360px;
  justify-content: space-between;
}

.shape {
  position: absolute;
  top: 13px;
  left: 3px;
  height: 30px;
  background: #027c6e;
  border-radius: 999px;
  z-index: 1;
  transition: all 0.3s ease;
  width: calc(100% / 3 - 6px);
}

.tabs .tab-btn.active:nth-of-type(1)~.shape {
  left: 3px;
}

.tabs .tab-btn.active:nth-of-type(2)~.shape {
  left: calc(100% / 3 + 3px);
}

.tabs .tab-btn.active:nth-of-type(3)~.shape {
  left: calc((100% / 3) * 2 + 3px);
}



.tab-btn {
  flex: 1;
  height: 40px;
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
