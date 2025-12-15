<template>
  <div class="bg-[#f0f0fc] p-7">
    <div class="">
      <h2 class="text-3xl md:text-4xl text-center font-semibold">
        <div class="flex  flex-wrap justify-center">
          Our
          <div class="text-[#4aabab]">
            <span class="px-2">Blogs</span>
            <CurvedLine />
          </div>
        </div>
      </h2>
      <p class="text-center mt-3 mb-5 text-gray-500 text-md md:text-xl">
        Latest posts from our blog.
      </p>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-center">
      <div class="md:w-[550px] p-3">
        <div
          class="border bg-white p-2 rounded-xl shadow-[0_0_25px_0] shadow-[#254BD34D] border-[#254BD34D] md:flex items-start md:h-50"
        >
          <img src="/blog006.png" class="md:h-full" />
          <div class="px-3 py-1">
            <p class="font-semibold md:text-lg">
              Can USDT be priced differently across the globe? "YES"
            </p>
            <button
              class="mt-5 border border-[#4AABAB] text-[#4AABAB] px-3 py-1 rounded-3xl font-semibold text-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div class="md:w-[550px] p-3">
        <div
          class="border bg-white p-2 rounded-xl shadow-[0_0_25px_0] shadow-[#254BD34D] border-[#254BD34D] md:flex items-start md:h-50"
        >
          <img src="/blog002.png" class="md:h-full" />
          <div class="px-3 py-1">
            <p class="font-semibold md:text-lg">
              Can USDT be priced differently across the globe? "YES"
            </p>
            <button
              class="mt-5 border border-[#4AABAB] text-[#4AABAB] px-3 py-1 rounded-3xl font-semibold text-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center">
      <div class="md:w-[550px] p-3">
        <div
          class="border bg-white p-2 rounded-xl shadow-[0_0_25px_0] shadow-[#254BD34D] border-[#254BD34D] md:flex items-start md:h-50"
        >
          <img src="/blog003.png" class="md:h-full" />
          <div class="px-3 py-1">
            <p class="font-semibold md:text-lg">
              Can USDT be priced differently across the globe? "YES"
            </p>
            <button
              class="mt-5 border border-[#4AABAB] text-[#4AABAB] px-3 py-1 rounded-3xl font-semibold text-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div class="md:w-[550px] p-3">
        <div
          class="border bg-white p-2 rounded-xl shadow-[0_0_25px_0] shadow-[#254BD34D] border-[#254BD34D] md:flex items-start md:h-50"
        >
          <img src="/blog004.png" class="h-full" />
          <div class="px-3 py-1">
            <p class="font-semibold md:text-lg">
              Can USDT be priced differently across the globe? "YES"
            </p>
            <button
              class="mt-5 border border-[#4AABAB] text-[#4AABAB] px-3 py-1 rounded-3xl font-semibold text-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center">
      <div class="md:w-[550px] p-3">
        <div
          class="border bg-white p-2 rounded-xl shadow-[0_0_25px_0] shadow-[#254BD34D] border-[#254BD34D] md:flex items-start md:h-50"
        >
          <img src="/blog005.png" class="md:h-full" />
          <div class="px-3 py-1">
            <p class="font-semibold md:text-lg">
              Can USDT be priced differently across the globe? "YES"
            </p>
            <button
              class="mt-5 border border-[#4AABAB] text-[#4AABAB] px-3 py-1 rounded-3xl font-semibold text-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div class="md:w-[550px] p-3">
        <div
          class="border bg-white p-2 rounded-xl shadow-[0_0_25px_0] shadow-[#254BD34D] border-[#254BD34D] md:flex items-start md:h-50"
        >
          <img src="/blog006.png" class="h-full" />
          <div class="px-3 py-1">
            <p class="font-semibold md:text-lg">
              Can USDT be priced differently across the globe? "YES"
            </p>
            <button
              class="mt-5 border border-[#4AABAB] text-[#4AABAB] px-3 py-1 rounded-3xl font-semibold text-sm"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.underline-text {
  position: relative;

  color: #4aabab;
}

.underline-text::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: -15px;
  width: 150px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media (max-width: 640px) {
  .underline-text::after {
    left: -10px;
    width: 100px;
    height: 20px;
    bottom: -10px;
  }
}
</style>
