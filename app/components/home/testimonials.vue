<template>
  <div class="bg-gray-50 p-4">
    <div class="flex justify-center">
      <h2 class="text-3xl text-teal-500 md:text-4xl text-center font-semibold  underline-text">Testimonials</h2>
    </div>
    <p class="text-center text-md md:text-xl mt-5 mb-7 text-gray-500">What our satisfied clients has to
      say about us.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex justify-center gap-6 p-6 bg-gray-50">
      <div class="border rounded-lg shadow-xl md:w-80 bg-white mb-2">
        <div class="flex items-center gap-4 p-4">
          <img src="/testimonial01.png" class="w-16 h-16 " />
          <div class="flex flex-col">
            <h2 class="text-xl font-semibold">Alex M</h2>
            <p class="text-gray-600 text-lg">CPA</p>
          </div>
        </div>
        <div class="px-4 pb-4">
          <p class="text-gray-600 text-md">
            The team at CryptoTax helped me minimize my taxable gains by using approved
            calculation methodologies. The team was extremely knowledgeable
            and responsive. Other CryptoTax solution software were pulling
            inaccurate cost basis for the coins that I was trading.
          </p>
        </div>
      </div>

      <div class="border rounded-lg shadow-xl md:w-80 bg-white mb-2">
        <div class="flex items-center gap-4 p-4">
          <img src="/testimonial02.png" class="w-16 h-16 " />
          <div class="flex flex-col">
            <h2 class="text-xl font-semibold">Sarkis M</h2>
            <p class="text-gray-600 text-lg">Early Bitcoin Investor</p>
          </div>
        </div>
        <div class="px-4 pb-4">
          <p class="text-gray-600 text-md">
            The team over at CryptoTax was extremely professional. I had DeFi activity, and they were able to determine
            my cost basis. I tried many different tax solutions, but I always had errors. CryptoTax was able to
            accurately report my crypto gains and losses.
          </p>
        </div>
      </div>


      <div class="border rounded-lg shadow-xl md:w-80 bg-white mb-2">
        <div class="flex items-center gap-4 p-4">
          <img src="/testimonial04.jpeg" class="w-16 h-16 rounded-full" />
          <div class="flex flex-col">
            <h2 class="text-xl font-semibold">Utkarsh Kushwaha</h2>
            <p class="text-gray-600 text-lg">Crypto Investor</p>
          </div>
        </div>
        <div class="px-4 pb-4">
          <p class="text-gray-600 text-md">
            CryptoTax is my go-to now for crypto tax calculations. Unlike many other tax tools I experimented with, they
            left no room for error. Their meticulous approach ensured that every crypto trade and transfer, even across
            various exchanges, was accurately reconciled. The team provided insightful tax analysis and was very
            knowledgeable. Awesome Experience!
          </p>
        </div>
      </div>
    </div>


  <!-- <div class="p-6 bg-gray-50">
    <div class="relative overflow-hidden">
    
      <div class="flex transition-transform duration-500"
           :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="min-w-full px-2">
          <div class="border rounded-lg shadow-xl bg-white mb-2">
            <div class="flex items-center gap-4 p-4">
              <img :src="testimonial.image" class="w-16 h-16 rounded-full" />
              <div class="flex flex-col">
                <h2 class="text-xl font-semibold">{{ testimonial.name }}</h2>
                <p class="text-gray-600 text-lg">{{ testimonial.title }}</p>
              </div>
            </div>
            <div class="px-4 pb-4">
              <p class="text-gray-600 text-md">{{ testimonial.comment }}</p>
            </div>
          </div>
        </div>
      </div>

      
      <button @click="prev" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
        ◀
      </button>
      <button @click="next" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
        ▶
      </button>
    </div>

  
    <div class="flex justify-center gap-2 mt-4">
      <span v-for="(testimonial, index) in testimonials" :key="index"
            class="w-3 h-3 rounded-full cursor-pointer"
            :class="currentIndex === index ? 'bg-teal-500' : 'bg-gray-300'"
            @click="goTo(index)">
      </span>
    </div>
  </div> -->

    <div class="p-6 flex justify-center">
      <button class="py-2 px-4 border border-teal-500 text-teal-500 rounded-full">View More</button>
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

<!-- <script setup>
import { ref } from 'vue'

const testimonials = [
  {
    image: '/testimonial01.png',
    name: 'Alex M',
    title: 'CPA',
    comment: 'The team at CryptoTax helped me minimize my taxable gains...',
  },
  {
    image: '/testimonial02.png',
    name: 'Sarkis M',
    title: 'Early Bitcoin Investor',
    comment: 'The team over at CryptoTax was extremely professional...',
  },
  {
    image: '/testimonial04.jpeg',
    name: 'Utkarsh Kushwaha',
    title: 'Crypto Investor',
    comment: 'CryptoTax is my go-to now for crypto tax calculations...',
  },
]

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goTo = (index) => {
  currentIndex.value = index
}
</script> -->