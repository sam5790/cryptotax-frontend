<template>
  <div class="bg-gray-50 ">
    <div class="image-bg min-h-[420px]">
      <img src="/pattern.png" width="100%">
      <div class="text-position ">
        <h2 class=" text-3xl text-center md:text-4xl font-semibold mt-6">We have a large no of <span
            class="text-teal-500 underline-text">happyusers</span></h2>
        <p class="mt-6 text-center text-lg md:text-xl">Start your journey right now by registering yourself:</p>
        <p class="text-xl md:text-3xl font-semibold text-center mt-4 my-4"><b>90,403,304+</b></p>
        <div class="flex justify-center items-center mb-16">
          <img src="/customers.png" class="w-22 h-12 mt-5">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-bg {
  position: relative;
  display: flex;
  justify-content: center;

}

.text-position {
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
}


.underline-text {
  position: relative;
  color: #4aabab;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: -25px;
  width: 240px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media (max-width: 768px) {
  .underline-text::after {
    left: -20px;
    width: 180px;
    height: 20px;
    bottom: -10px
  }


}
</style>
