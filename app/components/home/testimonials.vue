<template>
  <div class="bg-[linear-gradient(100deg,rgb(240,240,252)_11.73%,rgba(240,240,252,0)_104.43%)] p-4">
    <div class="flex justify-center">
      <h2 class="text-3xl text-teal-500 md:text-4xl text-center font-semibold underline-text">
        Testimonials
      </h2>
    </div>

    <p class="text-center text-md md:text-xl mt-5 mb-7 text-gray-500">
      What our satisfied clients have to say about us.
    </p>

    
    <div class="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-3  xl:gap-0 p-6 justify-items-center place-items-stretch">

      <div v-for="(t, i) in testimonials" :key="i" class="border rounded-lg shadow-xl bg-white md:max-w-md ">
        <div class="flex items-center gap-4 p-4">
          <img :src="t.image" class="w-16 h-16 rounded-full" />
          <div class="flex flex-col">
            <h2 class="text-xl font-semibold">{{ t.name }}</h2>
            <p class="text-gray-600 text-lg">{{ t.title }}</p>
          </div>
        </div>
        <div class="px-4 pb-4">
          <p class="text-gray-600 text-md">{{ t.comment }}</p>
        </div>
      </div>
    
    </div>

    
    <div class="relative md:hidden overflow-hidden">
      <div
        class="flex transition-transform duration-300"
        :style="{ transform: `translateX(-${index * 100}%)` }"
      >
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="min-w-full flex justify-center"
        >
          <div class="border rounded-lg shadow-xl bg-white max-w-md m-4">
            <div class="flex items-center gap-4 p-4">
              <img :src="t.image" class="w-16 h-16 rounded-full" />
              <div class="flex flex-col">
                <h2 class="text-xl font-semibold">{{ t.name }}</h2>
                <p class="text-gray-600 text-lg">{{ t.title }}</p>
              </div>
            </div>
            <div class="px-4 pb-4">
              <p class="text-gray-600 text-md">{{ t.comment }}</p>
            </div>
          </div>
        </div>  
      </div>

     
      <button
        @click="prev"
        class="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow opacity-80 flex justify-center"
      >
        <icon name="mdi:arrow-left" class="w-5 h-5 text-gray-600" />
      </button>

      <button
        @click="next"
        class="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow opacity-80 flex justify-center"
      >
        <icon name="mdi:arrow-right" class="w-5 h-5 text-gray-600" />
      </button>
    </div>

    <div class="p-6 flex justify-center">
      <button class="py-2 px-4 border border-teal-500 text-teal-500 rounded-full">
        View More
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const testimonials = [
  {
    image: "/testimonial01.png",
    name: "Alex M",
    title: "CPA",
    comment:
      "The team at CryptoTax helped me minimize my taxable gains by using approved calculation methodologies. The team was extremely knowledgeable and responsive. Other CryptoTax solution software were pulling inaccurate cost basis for the coins that I was trading.",
  },
  {
    image: "/testimonial02.png",
    name: "Sarkis M",
    title: "Early Bitcoin Investor",
    comment:
      "The team over at CryptoTax was extremely professional. I had DeFi activity, and they were able to determine my cost basis. I tried many different tax solutions, but I always had errors. CryptoTax was able to accurately report my crypto gains and losses.",
  },
  {
    image: "/testimonial04.jpeg",
    name: "Utkarsh Kushwaha",
    title: "Crypto Investor",
    comment:
      "CryptoTax is my go-to now for crypto tax calculations. Unlike many other tax tools I experimented with, they left no room for error. Their meticulous approach ensured that every crypto trade and transfer, even across various exchanges, was accurately reconciled. The team provided insightful tax analysis and was very knowledgeable. Awesome Experience!",
  },
];

const index = ref(0);
const slidesCount = testimonials.length;

function next() {
  index.value = (index.value + 1) % slidesCount;
}

function prev() {
  index.value = (index.value - 1 + slidesCount) % slidesCount;
}
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
  left: -20px;
  width: 250px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media (max-width: 640px) {
  .underline-text::after {
    left: -20px;
    width: 200px;
    height: 20px;
    bottom: -10px
  }
}

</style>