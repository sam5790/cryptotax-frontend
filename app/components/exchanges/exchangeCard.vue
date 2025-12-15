<template>
<div>
    <h2 class=" text-center text-2xl md:text-3xl font-semibold py-5">
      <div class="flex flex-wrap gap-3 justify-center">
      Exchanges: How to  <div class="text-[#4aabab] whitespace-nowrap">
      Export API or CSV?
    <curved-line/>
    </div>
  </div>
</h2>

    <div class="p-8 hidden sm:flex justify-center items-center gap-6 ">

      <div class="border flex flex-col items-center md:w-60  rounded-2xl overflow-hidden mb-2">

        <div class="h-40 flex justify-center items-center w-full bg-black opacity-85">
          <img src="/binanceimage.png" class="h-28" />
        </div>

        <div class=" w-full py-4 px-3 flex flex-col justify-center items-center">
          <div class="flex justify-center items-center gap-2 p-3">
            <img src="/binance.png" class="h-6" />
            <p>Binance</p>
          </div>
          <p class="text-center text-sm ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.
          </p>
            <div class="p-3 flex justify-center items-center">
            <button class="text-[#4aabab] border border-teal-500 rounded-full px-3">Learn More</button>
          </div>
        </div>

      </div>

      <div class="border flex flex-col items-center md:w-60 rounded-2xl overflow-hidden mb-2">
        <div class="h-40 flex justify-center items-center w-full bg-black opacity-85 rounded-xl">
          <img src="/biboximage.jpg" class="h-16 " />
        </div>

        <div class="w-full py-4 px-3 flex flex-col justify-center items-center">
          <div class="flex justify-center items-center gap-2 p-3">
            <img src="/bibox.png" class="h-6" />
            <p>Bibox</p>
          </div>
          <p class="text-center text-sm ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.
          </p>
          <div class="p-3 flex justify-center items-center">
            <button class="text-[#4aabab] border border-teal-500 rounded-full px-3">Learn More</button>
          </div>
        </div>
      </div>

      <div class="border flex flex-col items-center md:w-60 rounded-2xl overflow-hidden mb-2">
        <div class="h-40 flex justify-center items-center w-full bg-black opacity-85">
          <img src="/bitflyerimage.png" class="h-16" />
        </div>

        <div class=" w-full py-4 px-3 flex flex-col justify-center items-center">
          <div class="flex justify-center items-center gap-2 p-3">
            <img src="/bitfyer.png" class="h-6" />
            <p>Bitfyer</p>
          </div>
          <p class="text-center text-sm ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.
          </p>
            <div class="p-3 flex justify-center items-center">
            <button class="text-[#4aabab] border border-teal-500 rounded-full px-3">Learn More</button>
          </div>
        </div>
      </div>


      <div class="border flex flex-col items-center md:w-60  rounded-2xl overflow-hidden mb-2">
        <div class="h-40 flex justify-center items-center w-full bg-black opacity-85 rounded-xl">
          <img src="/bitfineximage.png" class="h-16" />
        </div>

        <div class=" w-full py-4 px-3 flex flex-col justify-center items-center">
          <div class="flex justify-center items-center gap-2 p-3">
            <img src="/bitfinex.png" class="h-6" />
            <p>Bitfinex</p>
          </div>
          <p class="text-center text-sm ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.
          </p>
            <div class="p-3 flex justify-center items-center">
            <button class="text-[#4aabab] border border-teal-500 rounded-full px-3">Learn More</button>
          </div>
        </div>
      </div>


      <div class="border flex flex-col items-center md:w-60  rounded-2xl overflow-hidden mb-2">

        <div class="h-40 flex justify-center items-center w-full bg-black opacity-85">
          <img src="/bigoneimage.png" class="h-28" />
        </div>

        <div class=" w-full py-4 px-3 flex flex-col justify-center items-center">
          <div class="flex justify-center items-center gap-2 p-3">
            <img src="/bigone.png" class="h-6" />
            <p>Bigone</p>
          </div>
          <p class="text-center text-sm ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.
          </p>
            <div class="p-3 flex justify-center items-center">
            <button class="text-[#4aabab] border border-teal-500 rounded-full px-3">Learn More</button>
          </div>
        </div>

      </div>


    </div>
    <div class="relative sm:hidden overflow-hidden">
      <div ref="track" class="flex transition-transform duration-300"
        :style="{ transform: `translateX(-${index * 100}%)` }">

        <div class="min-w-full p-4">
          <div class="min-w-full border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
            <div class="h-40 flex justify-center items-center w-full bg-black opacity-85">
              <img src="/binanceimage.png" class="h-28" />
            </div>

            <div class=" w-full py-4 px-3 flex flex-col justify-center items-center">
              <div class="flex justify-center items-center gap-2 p-3">
                <img src="/binance.png" class="h-6" />
                <p>Binance</p>
              </div>
              <p class="text-center text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                volutpat.
              </p>
              <div class="p-3 flex justify-center items-center">
                <button class="text-teal-500 border border-teal-500 rounded-full px-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div class="min-w-full p-4">
          <div class="min-w-full border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
            <div class="h-40 flex justify-center items-center w-full bg-black opacity-85 rounded-xl">
              <img src="/biboximage.jpg" class="h-16 " />
            </div>

            <div class="w-full py-4 px-3 flex flex-col justify-center items-center">
              <div class="flex justify-center items-center gap-2 p-3">
                <img src="/bibox.png" class="h-6" />
                <p>Bibox</p>
              </div>
              <p class="text-center text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                volutpat.
              </p>
              <div class="p-3 flex justify-center items-center">
                <button class="text-teal-500 border border-teal-500 rounded-full px-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div class="min-w-full p-4">
          <div class="min-w-full border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
            <div class="h-40 flex justify-center items-center w-full bg-black opacity-85">
              <img src="/bitflyerimage.png" class="h-16" />
            </div>

            <div class=" w-full py-4 px-3 flex flex-col justify-center items-center">
              <div class="flex justify-center items-center gap-2 p-3">
                <img src="/bitfyer.png" class="h-6" />
                <p>Bitfyer</p>
              </div>
              <p class="text-center text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                volutpat.
              </p>
              <div class="p-3 flex justify-center items-center">
                <button class="text-teal-500 border border-teal-500 rounded-full px-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div class="min-w-full p-4">
          <div class="min-w-full border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
            <div class="h-40 flex justify-center items-center w-full bg-black opacity-85 rounded-xl">
              <img src="/bitfineximage.png" class="h-16" />
            </div>

            <div class=" w-full py-4 px-3 flex flex-col justify-center items-center">
              <div class="flex justify-center items-center gap-2 p-3">
                <img src="/bitfinex.png" class="h-6" />
                <p>Bitfinex</p>
              </div>
              <p class="text-center text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                volutpat.
              </p>
              <div class="p-3 flex justify-center items-center">
                <button class="text-teal-500 border border-teal-500 rounded-full px-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div class="min-w-full p-4">
          <div class="min-w-full border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
            <div class="h-40 flex justify-center items-center w-full bg-black opacity-85">
              <img src="/bigoneimage.png" class="h-28" />
            </div>

            <div class=" w-full py-4 px-3 flex flex-col justify-center items-center">
              <div class="flex justify-center items-center gap-2 p-3">
                <img src="/bigone.png" class="h-6" />
                <p>Bigone</p>
              </div>
              <p class="text-center text-sm ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa
                volutpat.
              </p>
              <div class="p-3 flex justify-center items-center">
                <button class="text-teal-500 border border-teal-500 rounded-full px-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button @click="prev"
        class="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow justify-center flex opacity-80">
        <icon name="mdi:arrow-left" class="w-6 h-6 text-gray-600" />
      </button>
      <button @click="next"
        class="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow justify-center flex opacity-80">
        <icon name="mdi:arrow-right" class="w-6 h-6 text-gray-600" />
      </button>
    </div>

    <div class="flex justify-center items-center p-3">
      <button class="text-white text-center bg-teal-500 rounded-full px-5 py-2">Show More</button>
    </div>
  </div>
</template>

<script setup>

const track = ref(null);
const index = ref(0);
const slidesCount = 5;

function next() {
  index.value = (index.value + 1) % slidesCount;
}

function prev() {
  index.value = (index.value - 1 + slidesCount) % slidesCount;
}
</script>
