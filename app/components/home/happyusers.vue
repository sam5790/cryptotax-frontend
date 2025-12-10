<template>
  <div class="bg-gray-50">
    <div class="image-bg min-h-[420px]">
      <img src="/pattern.png" width="100%" />
      <div class="text-position">
        <h2 class="text-2xl text-center md:text-4xl font-semibold mt-8 p-3">
          <div class="flex md:gap-3 gap-1 flex-wrap justify-center">
            We have a large no of
            <div class="text-[#4aabab]">
              <span class="px-2">happy user</span>
              <CurvedLine />
            </div>
          </div>
        </h2>
        <p class="mt-2 text-center text-lg md:text-xl">
          Start your journey right now by registering yourself:
        </p>
        <p
          class="text-2xl md:text-5xl font-semibold text-center my-4 font-[Poppins]"
        >
          90,403,304+
        </p>

        <div class="flex justify-center items-center mb-16">
          <img src="/customers.png" class="w-22 h-12 mt-5" />
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


</style>
