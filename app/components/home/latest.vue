<template>
  <div class=" p-10">
    <h2 class="text-3xl md:text-4xl font-semibold text-center">Latest <span
        class="text-teal-500 underline-text">News</span></h2>
    <p class="text-center mt-3 text-md md:text-xl text-gray-500 mb-6">Read our latest news and articles
      published online.</p>

    <div class="hidden md:grid p-4 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-12">
      <a href="https://youtu.be/DP09ao5S0k4" target="_blank">
        <div class="border flex flex-col items-center h-full md:h-[300px] rounded-2xl overflow-hidden mb-2">
          <div class="h-40 flex justify-center items-center bg-white w-full p-4">
            <img src="/news1.png" class="h-28" />
          </div>
          <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
            <p class="text-center text-gray-700 text-sm md:text-md xl:text-lg font-bold">
              Deconstructing Tax Implications On Cryptocurrencies
            </p>
          </div>
        </div>
      </a>

      <a href="https://www.forbes.com/sites/joshwilson/2023/02/08/record-breaking-cryptocurrency-adoption-leads-the-irs-to-release-new-reporting-requirements/?sh=131bf7e73710"
        target="_blank">
        <div class="border flex flex-col items-center h-full md:h-[300px] rounded-2xl overflow-hidden mb-2">
          <div class="h-40 flex justify-center items-center w-full bg-white p-4">
            <img src="/money-control.jpeg" class="h-16" />
          </div>
          <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
            <p class="text-center text-gray-700 text-sm md:text-md xl:text-lg font-bold">
              Budget 2022: Tax clarity emerges on digital virtual assets
            </p>
          </div>
        </div>
      </a>

      <a href="https://www.forbes.com/sites/joshwilson/2023/02/08/record-breaking-cryptocurrency-adoption-leads-the-irs-to-release-new-reporting-requirements/?sh=131bf7e73710"
        target="_blank">
        <div class="border flex flex-col items-center h-full md:h-[300px] rounded-2xl overflow-hidden mb-2">
          <div class="h-40 flex justify-center items-center w-full bg-white p-4">
            <img src="/forbes1.png" class="h-16" />
          </div>
          <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
            <p class="text-center text-gray-700 text-sm md:text-md xl:text-lg font-bold">
              Record-Breaking Cryptocurrency Adoption Leads The IRS To Release New Reporting Requirements
            </p>
          </div>
        </div>
      </a>

      <a href="https://www.laweekly.com/author-abhinav-r-soomaney-examines-cryptocurrency-industry-and-tax-saving-tips-in-amazon-best-selling-new-book/"
        target="_blank">
        <div class="border flex flex-col items-center h-full md:h-[300px] rounded-2xl overflow-hidden mb-2">
          <div class="h-40 flex justify-center items-center w-full bg-white p-4">
            <img src="/laweekly.png" class="h-16" />
          </div>
          <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
            <p class="text-center text-gray-700 text-sm md:text-md xl:text-lg font-bold">
              Author Abhinav R. Soomaney Examines Cryptocurrency Industry and Tax-Saving Tips
            </p>
          </div>
        </div>
      </a>
    </div>

    <div class="relative sm:hidden overflow-hidden p-4">
      <div ref="track" class="flex transition-transform duration-300"
        :style="{ transform: `translateX(-${index * 100}%)` }">

        <div class=" min-w-full p-2">
          <div class="min-w-full">
            <a href="https://youtu.be/DP09ao5S0k4" target="_blank">
              <div class="border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
                <div class="h-40 flex justify-center items-center bg-white w-full p-4">
                  <img src="/news1.png" class="h-28" />
                </div>
                <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
                  <p class="text-center text-gray-700 text-sm font-bold truncate">
                    Deconstructing Tax Implications On Cryptocurrencies
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class=" min-w-full p-2">
          <div class="min-w-full">
            <a href="https://www.forbes.com/sites/joshwilson/2023/02/08/record-breaking-cryptocurrency-adoption-leads-the-irs-to-release-new-reporting-requirements/?sh=131bf7e73710"
              target="_blank">
              <div class="border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
                <div class="h-40 flex justify-center items-center bg-white w-full p-4">
                  <img src="/money-control.jpeg" class="h-16" />
                </div>
                <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
                  <p class="text-center text-gray-700 text-sm font-bold truncate">
                    Budget 2022: Tax clarity emerges on digital virtual assets
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class=" min-w-full p-2">
          <div class="min-w-full">
            <a href="https://www.forbes.com/sites/joshwilson/2023/02/08/record-breaking-cryptocurrency-adoption-leads-the-irs-to-release-new-reporting-requirements/?sh=131bf7e73710"
              target="_blank">
              <div class="border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
                <div class="h-40 flex justify-center items-center bg-white w-full p-4">
                  <img src="/forbes1.png" class="h-16" />
                </div>
                <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
                  <p class="text-center text-gray-700 text-sm font-bold truncate">
                    Record-Breaking Cryptocurrency Adoption Leads The IRS To Release New Reporting Requirements
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class=" min-w-full p-2">
          <div class="min-w-full">
            <a href="https://www.laweekly.com/author-abhinav-r-soomaney-examines-cryptocurrency-industry-and-tax-saving-tips-in-amazon-best-selling-new-book/"
              target="_blank">
              <div class="border flex flex-col items-center rounded-2xl overflow-hidden mb-2">
                <div class="h-40 flex justify-center items-center bg-white w-full p-4">
                  <img src="/laweekly.png" class="h-16" />
                </div>
                <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
                  <p class="text-center text-gray-700 text-sm font-bold truncate">
                    Author Abhinav R. Soomaney Examines Cryptocurrency Industry and Tax-Saving Tips
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <button @click="prev"
        class="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow opacity-80 flex justify-center">
        <icon name="mdi:arrow-left" class="w-6 h-6 text-gray-600" />
      </button>

      <button @click="next"
        class="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow opacity-80 flex justify-center">
        <icon name="mdi:arrow-right" class="w-6 h-6 text-gray-600" />
      </button>
    </div>

    <div class="flex justify-center p-10">
      <button class="bg-teal-500 rounded-full px-5 py-2 text-white text-md md:text-xl"
        @click="router.push('/register')">Sign up</button>
    </div>
  </div>
</template>
<script setup>

const router = useRouter()

const index = ref(0)
const slidesCount = 4

function next() {
  index.value = (index.value + 1) % slidesCount
}

function prev() {
  index.value = (index.value - 1 + slidesCount) % slidesCount
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
  width: 150px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media (max-width: 768px) {
  .underline-text::after {
    left: -10px;
    width: 100px;
    height: 20px;
    bottom: -10px
  }


}
</style>