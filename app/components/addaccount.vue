<template>

  <div class="fixed inset-0 bg-black/50 grid place-items-center z-50" @click="$emit('close')">

    <div class="bg-white md:p-10 rounded-2xl shadow-xl max-h-full overflow-y-auto" @click.stop>

      <h1 class="text-xl md:text-2xl font-medium text-center mb-6">
        {{ title }}
      </h1>

      <div class="flex border border-gray-300 rounded-full p-1 mb-6 justify-between">
        <button class="flex-1 py-2 rounded-full text-md font-medium"
          :class="type === 'API' ? 'bg-teal-500 text-white' : 'text-gray-600'" @click="type = 'API'">
          API KEY
        </button>

        <button class="flex-1 py-2 rounded-full text-md font-medium"
          :class="type === 'CSV' ? 'bg-teal-500 text-white' : 'text-gray-600'" @click="type = 'CSV'">
          CSV FILE
        </button>
      </div>

      <!-- <addapikey :account="account" v-if="type == 'API'" /> -->
      <!-- <add-api-key :account="account" v-if="type == 'API'"/> -->
      <add-api-key :account="account" v-if="type == 'API'"/>
      <uploadfile :account="account" v-if="type == 'CSV'" />

    </div>
  </div>
</template>

<script setup>
// import Addapikey from './addApiKey.vue';


const type = ref("API")

const props = defineProps({
  account: Object
})

const title = computed(() =>
  type.value === "API"
    ? "Enter API Keys to fetch account’s data!"
    : "Upload CSV File to fetch account’s data!"
)
</script>
