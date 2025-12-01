<template>
  <div class="bg-gray-50 p-7">
    <div class="">
      <h2 class="text-3xl md:text-5xl text-center font-semibold">Our <span class="underline-text">Blogs</span></h2>
      <p class="text-center my-5 text-gray-500 text-md md:text-xl">Latest posts from our blog.</p>
    </div>

    <div class="flex items-center justify-center ">

      <div class=" md:w-50 p-3">
        <div class="border shadow-md bg-white p-2 rounded-lg md:flex items-center md:h-50">
          <img src="/blog006.png" class="md:h-full" />
          <div class="p-3">
            <p class="font-semibold">Can USDT be priced differently across the globe? "YES"</p>
            <button class="mt-2 border border-teal-500 text-teal-500 px-3 py-1 rounded text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div class=" md:w-50  p-3">
        <div class="border shadow-md bg-white p-2 rounded-lg md:flex items-center md:h-50">
          <img src="/blog002.png" class="md:h-full" />
          <div class="p-3">
            <p class="font-semibold">Can USDT be priced differently across the globe? "YES"</p>
            <button class="mt-2 border border-teal-500 text-teal-500 px-3 py-1 rounded text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>

    </div>
    <div class="flex items-center justify-center">
      <div class=" md:w-50  p-3">
        <div class="border shadow-md bg-white p-2 rounded-lg md:flex items-center md:h-50">
          <img src="/blog003.png" class="md:h-full" />
          <div class="p-3">
            <p class="font-semibold">Can USDT be priced differently across the globe? "YES"</p>
            <button class="mt-2 border border-teal-500 text-teal-500 px-3 py-1 rounded text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div class=" md:w-50  p-3">
        <div class="border shadow-md bg-white p-2 rounded-lg md:flex items-center md:h-50">
          <img src="/blog004.png" class="h-full" />
          <div class="p-3">
            <p class="font-semibold">Can USDT be priced differently across the globe? "YES"</p>
            <button class="mt-2 border border-teal-500 text-teal-500 px-3 py-1 rounded text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class=" md:w-50  p-3">
        <div class="border shadow-md bg-white p-2 rounded-lg md:flex items-center md:h-50">
          <img src="/blog005.png" class="md:h-full" />
          <div class="p-3">
            <p class="font-semibold">Can USDT be priced differently across the globe? "YES"</p>
            <button class="mt-2 border border-teal-500 text-teal-500 px-3 py-1 rounded text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div class=" md:w-50  p-3">
        <div class="border shadow-md bg-white p-2 rounded-lg md:flex items-center md:h-50">
          <img src="/blog006.png" class="h-full" />
          <div class="p-3">
            <p class="font-semibold">Can USDT be priced differently across the globe? "YES"</p>
            <button class="mt-2 border border-teal-500 text-teal-500 px-3 py-1 rounded text-sm">
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
    bottom: -10px
  }
}
</style>
