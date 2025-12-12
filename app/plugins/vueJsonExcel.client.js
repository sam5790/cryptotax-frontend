import VueJsonExcel from 'vue-json-excel3';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('DownloadExcel', VueJsonExcel);
});
