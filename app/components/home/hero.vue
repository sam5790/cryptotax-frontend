<template>
  <div class="bg-gray-50 md:p-10">
    <div class="grid md:grid-cols-2">
      <div class="flex flex-col justify-center p-16 ">
        <h2 class="text-2xl  md:text-4xl lg:text-5xl xl:text-6xl  font-semibold">One-Stop Solution For
          <span class="text-teal-500 underline-text">CryptoCurrency </span> Taxes
        </h2>

        <p class="mt-12 text-xl md:max-w-[600px] md:text-justify">Advanced accounting methods applied to match
          structural
          changes in investment patterns</p>
        <div class="flex justify-start">
          <button class="mt-8 px-6 py-2 bg-teal-500 rounded-3xl text-white " @click="$router.push('/dashboard')">Get Started</button>
        </div>
      </div>
      <div class="flex juctify-center items-center">
        <img src="/animation.gif" class="w-full">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.underline-text {
  position: relative;
  color: #4aabab;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: -25px;
  width: 500px;
  height: 30px;
  background-image: url("underline.svg");
  background-size: cover;
}


@media (max-width: 1600px) {
  .underline-text::after {
    left: -20px;
    width: 450px;
    height: 30px;
    bottom: -15px;
  }
}


@media (max-width: 1280px) {
  .underline-text::after {
    left: -10px;
    width: 350px;
    height: 25px;
    bottom: -10px;
  }
}

@media (max-width: 1024px) {
  .underline-text::after {
    left: -5px;
    width: 250px;
    height: 20px;
    bottom: -8px;
  }
}


@media (max-width: 768px) {
  .underline-text::after {
    left: -15px;
    width: 200px;
    height: 15px;
    bottom: -5px;
  }
}

@media (max-width: 768px) {
  .underline-text::after {
    left: -15px;
    width: 200px;
    height: 15px;
    bottom: -5px;
  }
}

</style>
