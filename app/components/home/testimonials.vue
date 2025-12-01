<template>
  <div class="bg-gray-50 p-4">
    <div class="flex justify-center">
      <h2 class="text-3xl text-teal-500 md:text-4xl text-center  underline-text">Testimonials</h2>
    </div>
    <p class="text-center text-md md:text-xl my-7 text-gray-500">What our satisfied clients has to
      say about us.
    </p>

    <div class="md:flex justify-center gap-6 p-6 bg-gray-50">

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
