<template>
  <div class="p-4">
    <input
      v-model="name"
      type="text"
      placeholder="Custom Name"
      class="w-full border border-gray-300 rounded-lg p-3"
    />

    <div class="text-center mt-6">
      <p class="font-medium text-gray-700">Upload XLSX file</p>

      <p
        v-if="fileName.length > 0"
        class="flex items-center justify-center gap-2 mt-2 text-green-600"
      >
        {{ fileName }}
      </p>

      <Uploader
        ref="uploaderRef"
        :title="account.title"
        :uploadEndpoint="account.title === 'Coin DCX' ? 'coindcx' : 'wasirx'"
        @uploadSuccess="handleUploadSuccess"
      />
      <button
        @click="triggerUploaderUpload"
        class="mt-5 px-5 py-3 border border-teal-600 text-teal-600 rounded-lg"
      >
        Create A New Account
      </button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  account: {
    type: Object,
    default: () => ({}),
  },
});

const uploaderRef = ref(null);
const name = ref("");
const file = ref([]);
const fileName = ref("");
const loading = ref(false);

const router = useRouter();
const route = useRoute();
const toast = useToast();

const handleUploadSuccess = (fileNames) => {
  fileName.value = fileNames.join(", ");
  toast.success({ message: `Uploaded: ${fileName.value}` });
};

const triggerUploaderUpload = async () => {
  if (uploaderRef.value?.uploadFile) {
    uploaderRef.value.uploadFile();
   
  } else {
    toast.error({
      message: "Uploader component not found or file not selected.",
      position: "topCenter",
    });
  }
};
</script>
