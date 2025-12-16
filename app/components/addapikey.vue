<template>
  <div>
    <div>
      <input v-model="name" type="text" class="w-full px-4 py-2 border border-gray-300 mb-3" placeholder="Name" />
    </div>
    <div class="text-center">
      <p class="text-gray-700 font-medium">
        Enter API Keys to fetch account data
      </p>
      <div>
        <input v-model="apiKey" type="text" class="w-full px-4 py-3 border border-gray-300  my-8"
          placeholder="APIKEY" />
      </div>
      <div>
        <input v-model="secret" type="password" class="w-full px-4 py-3 border border-gray-300 " placeholder="Secret" />
      </div>

      <div class="flex justify-center items-center my-4">
        <button  class="mt-5 px-5 py-3 border border-teal-600 text-teal-600 rounded-lg">
          Create A New Account
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const apiKey = ref("");
const secret = ref("");

const props = defineProps({
  account: Object
});

</script>
