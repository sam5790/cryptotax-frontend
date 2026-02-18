<template>
  <div>
    <input v-model="name" type="text" placeholder="Custom Name" class="w-full border border-gray-300 rounded-lg p-3" />

    <div class="text-center mt-6">
      <p class="font-medium text-gray-700">Upload XLSX file</p>

      <p v-if="fileName.length" class="flex items-center justify-center gap-2 mt-2 text-green-600">
        {{ fileName?.join(", ") }}
      </p>
      <div class="w-full max-w-md mx-auto">
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
          :class="dragOver ? 'border-blue-500 bg-blue-50' : ''" @dragover.prevent="dragOver = true"
          @dragleave.prevent="dragOver = false" @drop.prevent="handleDrop" @click="$refs.fileInput.click()">
          <svg class="mx-auto mb-2 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8M8 16l4-4 4 4" />
          </svg>
          <p class="text-gray-500 mb-3">
            Drag and drop your excel file here, or click to upload
          </p>
          <input type="file" ref="fileInput" accept=".xlsx,.csv" hidden multiple @change="handleFileChange" />

          <div v-if="isUploading" class="text-gray-700 font-semibold mb-2">
            Uploading... Please wait.
          </div>
        </div>
      </div>
      <button @click="uploadFile" class="mt-5 px-5 py-3 border border-teal-600 text-teal-600 rounded-lg">
        Create A New Account
      </button>
    </div>
  </div>
</template>

<script setup>
import { mainStore } from "~/store/mainstore";
const store = mainStore();
const props = defineProps({
  account: {
    type: Object,
    default: () => ({}),
  },
});

const name = ref("");
const fileName = ref([]);
const files = ref([]);
const fileUrls = ref([]);
const dragOver = ref(false);
const isUploading = ref(false);
const toast = useToast();
const handleDrop = (e) => {
  dragOver.value = false;
  files.value = Array.from(e.dataTransfer.files || []);
  fileName.value = files.value.map((f) => f.name);
};

const handleFileChange = async (e) => {
  files.value = Array.from(e.target.files || [])
  fileName.value = files.value.map(f => f.name)

  const { data, error } = await upload(files.value)

  if (error) {
    console.error(error)
    return
  }

  console.log("in handleFileChange", data?.data)
  fileUrls.value = data?.data || []
};
console.log( props.account.title )

console.log( props.account.title )
const uploadFile = async () => {
  console.log("urls",fileUrls.value)
  if (!fileUrls.value.length) return;

  isUploading.value = true;

  const formData = new FormData();
  Array.from(fileUrls.value).forEach((file) =>
    formData.append("excelFiles", file)
  );
  const exchange =
    props.account.title === "Coin DCX"
      ? "coindcx"
      : props.account.title === "Murdex"
      ? "mudrex"
      : props.account.title === "Coinswitch"
      ? "coinswitch"
      : props.account.title === "Bitbns"
      ? "bitbns"
      : "wasirx";
  const { data, error } = await fileUpload({ formData, exchange });
  if (data?.success) {
    await getAccounts();
    store.updateShowDetails(false);
    isUploading.value = false;
  } else {
    toast.error({
      message: error?.data?.message,
      position: "topCenter",
    });
  }
};
</script>
