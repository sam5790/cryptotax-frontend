<template>
  <div class="bg-[#f0f0fc] p-4">
    <div class="flex justify-center">
      <h2 class="text-3xl text-[#4AABAB] md:text-4xl text-center font-semibold">
        Testimonials
        <CurvedLine />
      </h2>
    </div>

    <p class="text-center text-md md:text-xl mt-5 mb-7 text-gray-500">
      What our satisfied clients have to say about us.
    </p>

    <div class="hidden md:flex gap-10 justify-center">
      <div
        v-for="(t, i) in testimonials"
        :key="i"
        class="border rounded-lg shadow-[0_0_25px_0] shadow-[#254BD34D] border-[#254BD34D] bg-white md:max-w-sm"
      >
        <div class="flex items-center gap-4 p-4">
          <img :src="t.image" class="w-16 h-16 rounded-full" />
          <div class="flex flex-col">
            <h2 class="text-xl font-semibold">{{ t.name }}</h2>
            <p class="text-gray-600 text-lg">{{ t.title }}</p>
          </div>
        </div>
        <div class="px-4 pb-4 flex">
          <div >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83906 2.28882e-05L4.23906 9.20002H6.63906V18.32H-0.000937283V9.20002L2.39906 2.28882e-05H5.83906ZM16.8791 2.28882e-05L15.2791 9.20002H17.6791V18.32H11.0391V9.20002L13.4391 2.28882e-05H16.8791Z"
                fill="#4AABAB"
              />
            </svg>
          </div>
          <p class="text-gray-600 text-md text-center">{{ t.comment }}</p>
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
          <div class="border border-[#254BD34D] rounded-lg shadow-[0_0_25px_0] shadow-[#254BD34D] bg-white max-w-sm">
            <div class="flex items-center gap-4 p-4">
              <img :src="t.image" class="w-16 h-16 rounded-full" />
              <div class="flex flex-col">
                <h2 class="text-xl font-semibold">{{ t.name }}</h2>
                <p class="text-gray-600 text-lg">{{ t.title }}</p>
              </div>
            </div>
            <div class="px-4 pb-4 flex">
          <div >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83906 2.28882e-05L4.23906 9.20002H6.63906V18.32H-0.000937283V9.20002L2.39906 2.28882e-05H5.83906ZM16.8791 2.28882e-05L15.2791 9.20002H17.6791V18.32H11.0391V9.20002L13.4391 2.28882e-05H16.8791Z"
                fill="#4AABAB"
              />
            </svg>
          </div>
          <p class="text-gray-600 text-md text-center">{{ t.comment }}</p>
        </div>
          </div>
        </div>
      </div>

      <button
        @click="prev"
        class="absolute top-1/2 left-0 -translate-y-1/2 bg-white border border-[#4AABAB] p-2 rounded-full shadow opacity-80 flex"
      >
        <icon name="mdi:arrow-left" class="w-6 h-6 text-[#4AABAB]" />
      </button>

      <button
        @click="next"
        class="absolute top-1/2 right-0 -translate-y-1/2 bg-white border border-[#4AABAB] p-2 rounded-full shadow opacity-80 flex"
      >
        <icon name="mdi:arrow-right" class="w-6 h-6 text-[#4AABAB]" />
      </button>
    </div>

    <div class="p-6 flex justify-center">
      <button class="py-2 px-8 border border-teal-500 text-[#4AABAB] rounded-full">
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
