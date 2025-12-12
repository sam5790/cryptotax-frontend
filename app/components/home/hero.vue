<template>
  <div class="bg-gray-50 md:p-10">
    <div class="grid md:grid-cols-2">
      <div class="flex flex-col justify-center md:items-start items-center md:p-16 p-6">
        <h2 class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          One-Stop Solution For
          <div class="flex gap-3 flex-wrap">
            <div class="text-[#4aabab]">
              CryptoCurrency
              <CurvedLine class="md:mt-3" />
            </div>
            Taxes
          </div>
        </h2>

        <p
          class="md:mt-12 mt-5 md:text-xl text-xs md:max-w-[600px] md:text-justify text-center"
        >
          Advanced accounting methods applied to match structural changes in
          investment patterns
        </p>
        <div class="flex md:justify-start justify-center">
          <button
            class="mt-8 px-8 py-2 bg-[#4aabab] rounded-3xl text-white font-semibold"
            @click="$router.push('/account')"
          >
            Get Started
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <img src="/animation.gif" class="w-full" />
      </div>
    </div>
  </div>
</template>

