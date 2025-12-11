<template>
  <div class="bg-gray-50 p-10">
    <h2 class="text-3xl md:text-4xl font-semibold text-center">
      <div class="flex flex-wrap justify-center">
        Latest
        <div class="text-[#4aabab]">
          <span class="px-2">News</span>
          <CurvedLine />
        </div>
      </div>
    </h2>
    <p class="text-center mt-3 text-md md:text-xl text-gray-500 mb-6">
      Read our latest news and articles published online.
    </p>

    <div
      class="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-12"
    >
      <a href="https://youtu.be/DP09ao5S0k4" target="_blank">
        <div
          class="border flex flex-col items-center h-full md:h-[300px] rounded-2xl overflow-hidden mb-2"
        >
          <div
            class="h-40 flex justify-center items-center bg-white w-full p-4"
          >
            <img src="/news1.png" class="h-28" />
          </div>
          <div
            class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center"
          >
            <p
              class="text-center text-gray-700 text-sm md:text-md xl:text-lg font-bold"
            >
              Deconstructing Tax Implications On Cryptocurrencies
            </p>
          </div>
        </div>
      </a>

      <a
        href="https://www.forbes.com/sites/joshwilson/2023/02/08/record-breaking-cryptocurrency-adoption-leads-the-irs-to-release-new-reporting-requirements/?sh=131bf7e73710"
        target="_blank"
      >
        <div
          class="border flex flex-col items-center h-full md:h-[300px] rounded-2xl overflow-hidden mb-2"
        >
          <div
            class="h-40 flex justify-center items-center w-full bg-white p-4"
          >
            <img src="/money-control.jpeg" class="h-16" />
          </div>
          <div
            class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center"
          >
            <p
              class="text-center text-gray-700 text-sm md:text-md xl:text-lg font-bold"
            >
              Budget 2022: Tax clarity emerges on digital virtual assets
            </p>
          </div>
        </div>
      </a>

      <a
        href="https://www.forbes.com/sites/joshwilson/2023/02/08/record-breaking-cryptocurrency-adoption-leads-the-irs-to-release-new-reporting-requirements/?sh=131bf7e73710"
        target="_blank"
      >
        <div
          class="border flex flex-col items-center h-full md:h-[300px] rounded-2xl overflow-hidden mb-2"
        >
          <div
            class="h-40 flex justify-center items-center w-full bg-white p-4"
          >
            <img src="/forbes1.png" class="h-16" />
          </div>
          <div
            class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center"
          >
            <p
              class="text-center text-gray-700 text-sm md:text-md xl:text-lg font-bold"
            >
              Record-Breaking Cryptocurrency Adoption Leads The IRS To Release
              New Reporting Requirements
            </p>
          </div>
        </div>
      </a>

      <a
        href="https://www.laweekly.com/author-abhinav-r-soomaney-examines-cryptocurrency-industry-and-tax-saving-tips-in-amazon-best-selling-new-book/"
        target="_blank"
      >
        <div
          class="border flex flex-col items-center h-full md:h-[300px] rounded-2xl overflow-hidden mb-2"
        >
          <div
            class="h-40 flex justify-center items-center w-full bg-white p-4"
          >
            <img src="/laweekly.png" class="h-16" />
          </div>
          <div
            class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center"
          >
            <p
              class="text-center text-gray-700 text-sm md:text-md xl:text-lg font-bold"
            >
              Author Abhinav R. Soomaney Examines Cryptocurrency Industry and
              Tax-Saving Tips
            </p>
          </div>
        </div>
      </a>
    </div>

    <div class="flex justify-center p-10">
      <button
        class="mt-8 px-8 py-2 bg-[#4AABAB] rounded-3xl text-white font-semibold"
        @click="$router.push('/register')"
      >
        Sign Up
      </button>
    </div>
  </div>
</template>
