<template>
  <div
    class="fixed inset-0 bg-black/50 grid place-items-center z-50 p-5"
    @click="$emit('close')"
  >
    <div
      class="bg-white md:p-10 rounded-2xl shadow-xl max-h-full overflow-y-auto p-8"
      @click.stop
    >
      <h1 class="text-xl md:text-2xl font-medium text-center mb-6">
        {{
          type === "API"
            ? "Enter API Keys to fetch account’s data!"
            : "Upload CSV File to fetch account’s data!"
        }}
      </h1>

      <div
        class="flex border border-gray-300 rounded-full p-1 mb-6 justify-between"
      >
        <button
          class="flex-1 py-2 rounded-full text-md font-medium"
          :class="type === 'API' ? 'bg-teal-500 text-white' : 'text-gray-600'"
          @click="type = 'API'"
        >
          API KEY
        </button>

        <button
          class="flex-1 py-2 rounded-full text-md font-medium"
          :class="type === 'CSV' ? 'bg-teal-500 text-white' : 'text-gray-600'"
          @click="type = 'CSV'"
        >
          CSV FILE
        </button>
      </div>

      <addapikey :account="account" v-if="type == 'API'" />

      <!-- <add-api-key :account="account" v-if="type == 'API'"/> -->
      <Uploadfile :account="account" v-if="type == 'CSV'" />
      <div class="flex justify-end">
        <div class="flex items-center rounded-xl max-w-fit">
          <img :src="props?.account?.icon" class="w-8 h-8 mr-2" />
          <div class="font-medium">{{ props?.account?.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const type = ref("API");
const props = defineProps({
  account: Object,
});
</script>
