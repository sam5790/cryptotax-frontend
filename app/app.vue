<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
     <NuxtPage />
     </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  script: [
    {
      src: "https://accounts.google.com/gsi/client",
      async: true,
      defer: true
    }
  ]
});
</script>

<style>

body{
  font-family: "Raleway", sans-serif;
}

</style>
