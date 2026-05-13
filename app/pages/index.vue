<template>
  <Home />
  <PageLoader v-if="isLoading" />
</template>
<script setup>
const nuxtApp = useNuxtApp();
const isLoading = ref(true);

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
});
nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});

nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
</script>
