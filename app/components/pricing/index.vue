<template>
  <div>
    <div class="mb-8 md:mb-12">
      <p class="text-center text-base md:text-xl font-medium p-2">PRICING</p>
      <p class="text-center text-2xl md:text-4xl font-semibold p-2">
        <div class="flex gap-3 flex-wrap justify-center">
        Begin with <div class="text-[#4aabab]">NO charges
          <curved-line/>
        </div>
        </div>
      </p>
      <p class="text-center text-base md:text-xl text-gray-500 p-2">Get started today</p>
    </div>

    <div class="w-full flex justify-center mt-6 md:mt-10 mb-12 md:mb-16 p-2">
      <div
        class="bg-white border border-gray-300 rounded-full flex flex-row items-center w-full max-w-lg md:max-w-2xl">
        <input type="email" placeholder="Enter your email address to start your free trial"
          class="flex-1 w-full   rounded-full text-gray-600 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 p-2" />
        <button
          class="sm:mt-0 sm:ml-4 bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white px-6 py-2 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap">
          Redeem Now
        </button>
      </div>
    </div>

    <div class="p-4 md:p-10">
      <div class="hidden lg:grid grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        <div class="rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 class="text-lg md:text-xl font-semibold">Basic Plan</h2>
          <p class="text-gray-500 text-sm md:text-base mb-4">For individuals</p>

          <div class="flex items-baseline">
            <p class="text-2xl md:text-3xl font-semibold">FREE</p>
            <p class="text-xs md:text-sm mb-6 mt-3 font-semibold ml-2">/100 Txs</p>
          </div>

          <ul class="space-y-3 mb-6 flex-grow">
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-8.svg" class="w-4 md:w-5" alt="check"> All analytics features
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-7.svg" class="w-4 md:w-5" alt="check"> Up to 250,000 visits
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-6.svg" class="w-4 md:w-5" alt="check"> Normal support
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-5.svg" class="w-4 md:w-5" alt="check"> Up to 3 team members
            </li>
          </ul>

          <button
            class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 md:py-2 rounded-full text-sm md:text-base">
            Get Started
          </button>
        </div>

        <div class="relative  md:-translate-y-4 lg:-translate-y-8">
          <div
            class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4AABAB] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow whitespace-nowrap z-10">
            Recommended
          </div>

          <div
            class="border border-[#4AABAB] rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col h-full">
            <h2 class="text-lg md:text-xl font-semibold">Medium Plan</h2>
            <p class="text-gray-500 text-sm md:text-base mb-4">Recommended by experts</p>

            <div class="flex items-end gap-1">
              <p class="text-2xl md:text-3xl font-semibold">FREE</p>
              <p class="text-xs md:text-sm font-semibold mb-1 ml-2">/100 Txs</p>
            </div>

            <ul class="space-y-3 mb-6 mt-4 flex-grow">
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-12.svg" class="w-4 md:w-5" alt="check"> All analytics
                features
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-11.svg" class="w-4 md:w-5" alt="check"> Up to 250,000 visits
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-10.svg" class="w-4 md:w-5" alt="check"> Normal support
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-9.svg" class="w-4 md:w-5" alt="check"> Up to 3 team members
              </li>
            </ul>

            <button
              class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 md:py-2 rounded-full text-sm md:text-base">
              Get Started
            </button>
          </div>
        </div>

        <div class="rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 class="text-lg md:text-xl font-semibold">Advanced Plan</h2>
          <p class="text-gray-500 text-sm md:text-base mb-4">For startups</p>

          <div class="flex items-baseline">
            <p class="text-2xl md:text-3xl font-semibold">FREE</p>
            <p class="text-xs md:text-sm mb-6 mt-3 font-semibold ml-2">/100 Txs</p>
          </div>

          <ul class="space-y-3 mb-6 flex-grow">
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-8.svg" class="w-4 md:w-5" alt="check"> All analytics features
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-7.svg" class="w-4 md:w-5" alt="check"> Up to 250,000 visits
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-6.svg" class="w-4 md:w-5" alt="check"> Normal support
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-5.svg" class="w-4 md:w-5" alt="check"> Up to 3 team members
            </li>
          </ul>

          <button
            class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 md:py-2 rounded-full text-sm md:text-base">
            Get Started
          </button>
        </div>

        <div class="rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 class="text-lg md:text-xl font-semibold">Premium Plan</h2>
          <p class="text-gray-500 text-sm md:text-base mb-4">For large businesses</p>

          <div class="flex items-baseline">
            <p class="text-2xl md:text-3xl font-semibold">FREE</p>
            <p class="text-xs md:text-sm mb-6 mt-3 font-semibold ml-2">/100 Txs</p>
          </div>

          <ul class="space-y-3 mb-6 flex-grow">
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-8.svg" class="w-4 md:w-5" alt="check"> All analytics features
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-7.svg" class="w-4 md:w-5" alt="check"> Up to 250,000 visits
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-6.svg" class="w-4 md:w-5" alt="check"> Normal support
            </li>
            <li class="flex items-center gap-3 text-sm md:text-base">
              <img src="/about/filled-icons-check-circle-5.svg" class="w-4 md:w-5" alt="check"> Up to 3 team members
            </li>
          </ul>

          <button
            class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 md:py-2 rounded-full text-sm md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </div>
    <!-- Carousel (md and below) -->
    <div class="lg:hidden relative overflow-hidden md:grid md:grid-cols-2">
      <div ref="track" class="flex transition-all duration-300" :style="{ transform: `translateX(-${index * 100}%)` }">
        <!-- Slide 1 -->
        <div class="min-w-full p-5">
          <div class="rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col border border-[#4AABAB]">
            <h2 class="text-lg md:text-xl font-semibold">Basic Plan</h2>
            <p class="text-gray-500 text-sm md:text-base mb-4">For individuals</p>

            <div class="flex items-baseline">
              <p class="text-2xl md:text-3xl font-semibold">FREE</p>
              <p class="text-xs md:text-sm mb-6 mt-3 font-semibold ml-2">/100 Txs</p>
            </div>

            <ul class="space-y-3 mb-6 flex-grow">
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-8.svg" class="w-4 md:w-5" alt="check"> All analytics features
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-7.svg" class="w-4 md:w-5" alt="check"> Up to 250,000 visits
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-6.svg" class="w-4 md:w-5" alt="check"> Normal support
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-5.svg" class="w-4 md:w-5" alt="check"> Up to 3 team members
              </li>
            </ul>

            <button
              class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 md:py-2 rounded-full text-sm md:text-base">
              Get Started
            </button>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="min-w-full p-5">
          <div class="relative md:-translate-y-0 lg:-translate-y-8">
            <div
              class=" absolute -top-3 md:-top-1 left-1/2 -translate-x-1/2 bg-[#4AABAB] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow whitespace-nowrap z-10">
              Recommended
            </div>

            <div
              class="border border-[#4AABAB] rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col h-full">
              <h2 class="text-lg md:text-xl font-semibold">Medium Plan</h2>
              <p class="text-gray-500 text-sm md:text-base mb-4">Recommended by experts</p>

              <div class="flex items-end gap-1">
                <p class="text-2xl md:text-3xl font-semibold">FREE</p>
                <p class="text-xs md:text-sm font-semibold mb-1 ml-2">/100 Txs</p>
              </div>

              <ul class="space-y-3 mb-6 mt-4 flex-grow">
                <li class="flex items-center gap-3 text-sm md:text-base">
                  <img src="/about/filled-icons-check-circle-12.svg" class="w-4 md:w-5" alt="check"> All analytics
                  features
                </li>
                <li class="flex items-center gap-3 text-sm md:text-base">
                  <img src="/about/filled-icons-check-circle-11.svg" class="w-4 md:w-5" alt="check"> Up to 250,000
                  visits
                </li>
                <li class="flex items-center gap-3 text-sm md:text-base">
                  <img src="/about/filled-icons-check-circle-10.svg" class="w-4 md:w-5" alt="check"> Normal support
                </li>
                <li class="flex items-center gap-3 text-sm md:text-base">
                  <img src="/about/filled-icons-check-circle-9.svg" class="w-4 md:w-5" alt="check"> Up to 3 team members
                </li>
              </ul>

              <button
                class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 md:py-2 rounded-full text-sm md:text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="min-w-full p-5">
          <div class="rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col border border-[#4AABAB]">
            <h2 class="text-lg md:text-xl font-semibold">Advanced Plan</h2>
            <p class="text-gray-500 text-sm md:text-base mb-4">For startups</p>

            <div class="flex items-baseline">
              <p class="text-2xl md:text-3xl font-semibold">FREE</p>
              <p class="text-xs md:text-sm mb-6 mt-3 font-semibold ml-2">/100 Txs</p>
            </div>

            <ul class="space-y-3 mb-6 flex-grow">
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-8.svg" class="w-4 md:w-5" alt="check"> All analytics features
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-7.svg" class="w-4 md:w-5" alt="check"> Up to 250,000 visits
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-6.svg" class="w-4 md:w-5" alt="check"> Normal support
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-5.svg" class="w-4 md:w-5" alt="check"> Up to 3 team members
              </li>
            </ul>

            <button
              class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 md:py-2 rounded-full text-sm md:text-base">
              Get Started
            </button>
          </div>
        </div>

        <!-- Slide 4 -->
        <div class="min-w-full p-5">
          <div class="rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col border border-[#4AABAB]">
            <h2 class="text-lg md:text-xl font-semibold">Premium Plan</h2>
            <p class="text-gray-500 text-sm md:text-base mb-4">For large businesses</p>

            <div class="flex items-baseline">
              <p class="text-2xl md:text-3xl font-semibold">FREE</p>
              <p class="text-xs md:text-sm mb-6 mt-3 font-semibold ml-2">/100 Txs</p>
            </div>

            <ul class="space-y-3 mb-6 flex-grow">
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-8.svg" class="w-4 md:w-5" alt="check"> All analytics features
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-7.svg" class="w-4 md:w-5" alt="check"> Up to 250,000 visits
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-6.svg" class="w-4 md:w-5" alt="check"> Normal support
              </li>
              <li class="flex items-center gap-3 text-sm md:text-base">
                <img src="/about/filled-icons-check-circle-5.svg" class="w-4 md:w-5" alt="check"> Up to 3 team members
              </li>
            </ul>

            <button
              class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 md:py-2 rounded-full text-sm md:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <!-- Arrows -->
      <button
        class="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow flex justify-center opacity-80"
        @click="prev">
        <icon name="mdi:arrow-left" class="w-5 h-5 text-gray-600" />
      </button>

      <button
        class="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow flex justify-center opacity-80"
        @click="next">
        <icon name="mdi:arrow-right" class="w-5 h-5 text-gray-600" />
      </button>
    </div>

    <div class="p-4 md:p-10">
      <div class="rounded-xl shadow-lg md:shadow-2xl p-6 md:p-10 mx-auto max-w-4xl">
        <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          Need help from an expert? Contact us to learn more
        </p>
        <div class="p-3 flex justify-center mt-8 md:mt-14">
          <button
            class="text-white bg-[#4AABAB] hover:bg-teal-600 transition-colors rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-xl flex items-center justify-center whitespace-nowrap">
            <img src="/about/vector.svg" class="mr-2 w-4 h-4 md:w-5 md:h-5" alt="phone icon" />
            Call to an expert now
          </button>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl mb-10 px-4 md:px-8">
      <h2 class="text-2xl md:text-3xl font-semibold text-center p-6 md:p-10">Professional Crypto Tax Pricing</h2>

      <div class="flex flex-col justify-center p-4 md:p-8 bg-gray-50 rounded-xl mb-8 md:mb-12">
        <ul class="list-disc pl-5 space-y-3">
          <li class="text-sm md:text-base">
            Cryptotax regulations vary globally, making it crucial to understand your country's rules.
          </li>
          <li class="text-sm md:text-base">
            Keep detailed records of crypto transactions to simplify tax reporting and minimize errors.
          </li>
          <li class="text-sm md:text-base">
            Consult a tax professional for expert guidance on navigating the complexities of cryptocurrency taxation.
          </li>
        </ul>
      </div>

      <div
        class="mx-auto max-w-7xl mb-10 px-4 md:px-8 hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
        <div class="relative">
          <div
            class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4AABAB] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow whitespace-nowrap z-10">
            Pro Plan 2023
          </div>

          <div class="border border-teal-500 rounded-2xl shadow-lg md:shadow-2xl flex flex-col h-full">
            <div class="bg-[#95D0D0] mt-8 p-4">
              <div class="flex items-end justify-center gap-1">
                <p class="text-2xl md:text-3xl font-semibold">₹9,999</p>
                <p class="text-xs md:text-sm font-semibold mb-1">/30 Min Consult</p>
              </div>
            </div>

            <div class="p-4 md:p-6 flex-grow">
              <p class="text-sm md:text-base">
                A tax expert can help you optimize your crypto tax strategy and minimize liabilities. Complex crypto
                investments often require specialized guidance for accurate tax reporting.
              </p>
            </div>

            <div class="flex justify-center items-center p-4">
              <button
                class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 px-6 md:py-2 md:px-8 rounded-full text-sm md:text-base w-full max-w-xs">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4AABAB] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow whitespace-nowrap z-10">
            Pro Plan 2023
          </div>

          <div class="border border-teal-500 rounded-2xl shadow-lg md:shadow-2xl flex flex-col h-full">
            <div class="bg-[#95D0D0] mt-8 p-4">
              <div class="flex items-end justify-center gap-1">
                <p class="text-2xl md:text-3xl font-semibold">₹9,999</p>
                <p class="text-xs md:text-sm font-semibold mb-1">/30 Min Consult</p>
              </div>
            </div>

            <div class="p-4 md:p-6 flex-grow">
              <p class="text-sm md:text-base">
                A tax expert can help you optimize your crypto tax strategy and minimize liabilities. Complex crypto
                investments often require specialized guidance for accurate tax reporting.
              </p>
            </div>

            <div class="flex justify-center items-center p-4">
              <button
                class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 px-6 md:py-2 md:px-8 rounded-full text-sm md:text-base w-full max-w-xs">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4AABAB] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow whitespace-nowrap z-10">
            Pro Plan 2023
          </div>

          <div class="border border-teal-500 rounded-2xl shadow-lg md:shadow-2xl flex flex-col h-full">
            <div class="bg-[#95D0D0] mt-8 p-4">
              <div class="flex items-end justify-center gap-1">
                <p class="text-2xl md:text-3xl font-semibold">₹9,999</p>
                <p class="text-xs md:text-sm font-semibold mb-1">/30 Min Consult</p>
              </div>
            </div>

            <div class="p-4 md:p-6 flex-grow">
              <p class="text-sm md:text-base">
                A tax expert can help you optimize your crypto tax strategy and minimize liabilities. Complex crypto
                investments often require specialized guidance for accurate tax reporting.
              </p>
            </div>

            <div class="flex justify-center items-center p-4">
              <button
                class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 px-6 md:py-2 md:px-8 rounded-full text-sm md:text-base w-full max-w-xs">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Carousel (visible on md and below) -->
      <div class="mx-auto max-w-7xl mb-10 px-4 md:px-8 relative overflow-hidden md:grid md:grid-cols-2 lg:hidden">
        <div ref="track" class="flex transition-all duration-300"
          :style="{ transform: `translateX(-${index2 * 100}%)` }">

          <div class="min-w-full p-5">
            <div class="relative">
              <div
                class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4AABAB] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow whitespace-nowrap z-10">
                Pro Plan 2023
              </div>

              <div class="border border-teal-500 rounded-2xl flex flex-col h-full">
                <div class="bg-[#95D0D0] mt-8 p-4">
                  <div class="flex items-end justify-center gap-1">
                    <p class="text-2xl md:text-3xl font-semibold">₹9,999</p>
                    <p class="text-xs md:text-sm font-semibold mb-1">/30 Min Consult</p>
                  </div>
                </div>

                <div class="p-4 md:p-6 flex-grow">
                  <p class="text-sm md:text-base">
                    A tax expert can help you optimize your crypto tax strategy and minimize liabilities. Complex crypto
                    investments often require specialized guidance for accurate tax reporting.
                  </p>
                </div>

                <div class="flex justify-center items-center p-4">
                  <button
                    class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 px-6 md:py-2 md:px-8 rounded-full text-sm md:text-base w-full max-w-xs">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="min-w-full p-5">
            <div class="relative">
              <div
                class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4AABAB] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow whitespace-nowrap z-10">
                Pro Plan 2023
              </div>

              <div class="border border-teal-500 rounded-2xl flex flex-col h-full">
                <div class="bg-[#95D0D0] mt-8 p-4">
                  <div class="flex items-end justify-center gap-1">
                    <p class="text-2xl md:text-3xl font-semibold">₹9,999</p>
                    <p class="text-xs md:text-sm font-semibold mb-1">/30 Min Consult</p>
                  </div>
                </div>

                <div class="p-4 md:p-6 flex-grow">
                  <p class="text-sm md:text-base">
                    A tax expert can help you optimize your crypto tax strategy and minimize liabilities. Complex crypto
                    investments often require specialized guidance for accurate tax reporting.
                  </p>
                </div>

                <div class="flex justify-center items-center p-4">
                  <button
                    class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 px-6 md:py-2 md:px-8 rounded-full text-sm md:text-base w-full max-w-xs">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="min-w-full p-5">
            <div class="relative">
              <div
                class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4AABAB] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow whitespace-nowrap z-10">
                Pro Plan 2023
              </div>

              <div class="border border-teal-500 rounded-2xl flex flex-col h-full">
                <div class="bg-[#95D0D0] mt-8 p-4">
                  <div class="flex items-end justify-center gap-1">
                    <p class="text-2xl md:text-3xl font-semibold">₹9,999</p>
                    <p class="text-xs md:text-sm font-semibold mb-1">/30 Min Consult</p>
                  </div>
                </div>

                <div class="p-4 md:p-6 flex-grow">
                  <p class="text-sm md:text-base">
                    A tax expert can help you optimize your crypto tax strategy and minimize liabilities. Complex crypto
                    investments often require specialized guidance for accurate tax reporting.
                  </p>
                </div>

                <div class="flex justify-center items-center p-4">
                  <button
                    class="bg-[#4AABAB] hover:bg-teal-700 transition-colors text-white py-3 px-6 md:py-2 md:px-8 rounded-full text-sm md:text-base w-full max-w-xs">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow flex justify-center opacity-80"
          @click="prevSlide">
          <icon name="mdi:arrow-left" class="w-5 h-5 text-gray-600" />
        </button>

        <button class="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow flex justify-center opacity-80"
          @click="nextSlide">
          <icon name="mdi:arrow-right" class="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>

const index = ref(0);
const slidesCount = 4;

function next() {
  index.value = (index.value + 1) % slidesCount;
}

function prev() {
  index.value = (index.value - 1 + slidesCount) % slidesCount;
}

const index2 = ref(0);
const slides = 3;

function nextSlide() {
  index2.value = (index2.value + 1) % slides;
}

function prevSlide() {
  index2.value = (index2.value - 1 + slides) % slides;
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

@media (max-width: 768px) {
  .underline-text::after {
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 25px;
    bottom: -8px;
  }
}

@media (max-width: 480px) {
  .underline-text::after {
    width: 180px;
    height: 20px;
    bottom: -6px;
  }
}

button {
  transition: all 0.3s ease;
}

.rounded-2xl {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.rounded-2xl:hover {
  transform: translateY(-5px);
}
</style>