<template>
  <div class="w-full max-w-md mx-auto">
    <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
      :class="dragOver ? 'border-blue-500 bg-blue-50' : ''" @dragover.prevent="dragOver = true"
      @dragleave.prevent="dragOver = false" @drop.prevent="handleDrop" @click="$refs.fileInput.click()">
      <svg class="mx-auto mb-2 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8M8 16l4-4 4 4" />
      </svg>
      <p class="text-gray-500 mb-3">Drag and drop your excel file here, or click to upload</p>
      <input type="file" ref="fileInput" accept=".xlsx,.csv" hidden multiple @change="handleFileChange" />

      <div v-if="isUploading" class="text-gray-700 font-semibold mb-2">
        Uploading... Please wait.
      </div>

      <div v-if="uploadProgress > 0 && uploadProgress < 100" class="w-full h-2 bg-gray-200 rounded  mb-2">
        <div class="h-2 bg-blue-500 " :style="{ width: uploadProgress + '%' }"></div>
      </div>


    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { mainStore } from '~/store/mainstore'

const store = mainStore()
const emit = defineEmits(['uploadSuccess'])
const props = defineProps({
  uploadEndpoint: { type: String, required: true }
})

const files = ref([])
const dragOver = ref(false)
const isUploading = ref(false)
const uploadProgress = ref(0)

const fileNames = computed(() =>
  Array.from(files.value).map(f => f.name)
)

const handleDrop = (e) => {
  dragOver.value = false
  files.value = e.dataTransfer.files
  emitUploadSuccess()
}

const handleFileChange = (e) => {
  files.value = e.target.files
  emitUploadSuccess()
}

const uploadFile = async () => {
  if (!files.value.length) return

  isUploading.value = true

  const formData = new FormData()
  Array.from(files.value).forEach(file =>
    formData.append('excelFiles', file)
  )

  try {
    const BASE_URL = useRuntimeConfig().public.apiBase;
    const res = await $fetch(`${BASE_URL}/${props.uploadEndpoint}`, {
      method: "POST",
      body: formData,
    });

    console.log("Upload success:", res)

    if (res.transactions) store.setTransactions(res.transactions)
    if (res.pnlRecords) store.setPnl(res.pnlRecords)
    if (res.finalBalances) store.setCoinBalance(res.finalBalances)
    console.log("store", store.transactions, "storepnl", store.pnl, "store", store.coin_balance)
    emitUploadSuccess()

  } catch (err) {
    console.error("Upload failed:", err)
  } finally {
    isUploading.value = false
    uploadProgress.value = 0
  }
}


const emitUploadSuccess = () => {
  const names = Array.from(files.value).map(f => f.name)
  emit('uploadSuccess', names)
}

defineExpose({ uploadFile })

</script>

<style scoped></style>
