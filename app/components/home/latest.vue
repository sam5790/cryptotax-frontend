<template>
  <div class="bg-gray-50 p-10">
    <h2 class="text-3xl font-semibold text-center">Latest <span class="text-teal-500 underline-text">News</span></h2>
    <p class="text-center mt-3 text-md md:text-xl text-gray-500 mb-6">Read our latest news and articles
      published online.</p>



    <div class="p-4 md:flex justify-center items-center gap-4">

 <a href="https://youtu.be/DP09ao5S0k4" target="_blank">
      <div class="border flex flex-col items-center md:w-60 md:h-[400px] rounded-2xl overflow-hidden mb-2">
       
        <div class="h-40 flex justify-center items-center bg-white w-full bg-white">
          <img src="/news1.png" class="h-28" />
        </div>

        <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
          <p class="text-center text-gray-700 text-sm md:text-md xl:text-lg">
            <b> Deconstructing Tax Implications On Cryptocurrencies</b>
          </p>
        </div>

      </div></a>

<a  href="https://www.forbes.com/sites/joshwilson/2023/02/08/record-breaking-cryptocurrency-adoption-leads-the-irs-to-release-new-reporting-requirements/?sh=131bf7e73710"
          target="_blank">
      <div class="border flex flex-col items-center md:w-60 md:h-[400px] rounded-2xl overflow-hidden mb-2">
        <div class="h-40 flex justify-center items-center w-full bg-white">
          <img src="/money-control.jpeg" class="h-16" />
        </div>

        <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
          <p class="text-center text-gray-700 text-sm md:text-md xl:text-lg">
            <b> Budget 2022: Tax clarity emerges on digital virtual assets </b>
          </p>
        </div>
      </div>
      </a>

      <a href="https://www.forbes.com/sites/joshwilson/2023/02/08/record-breaking-cryptocurrency-adoption-leads-the-irs-to-release-new-reporting-requirements/?sh=131bf7e73710"
          target="_blank">
      <div class="border flex flex-col items-center md:w-60 md:h-[400px] rounded-2xl overflow-hidden mb-2">
        <div class="h-40 flex justify-center items-center w-full bg-white">
          <img src="/forbes1.png" class="h-16" />
        </div>

        <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
          <p class="text-center text-gray-700 text-sm md:text-md xl:text-lg">
            <b> Record-Breaking Cryptocurrency Adoption Leads The IRS To Release New Reporting Requirements</b>
          </p>
        </div>
      </div>
</a>

<a href="https://www.laweekly.com/author-abhinav-r-soomaney-examines-cryptocurrency-industry-and-tax-saving-tips-in-amazon-best-selling-new-book/" target="_blank">
      <div class="border flex flex-col items-center md:w-60 md:h-[400px] rounded-2xl overflow-hidden mb-2">
        <div class="h-40 flex justify-center items-center w-full bg-white">
          <img src="/laweekly.png" class="h-16" />
        </div>

        <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
          <p class="text-center text-gray-700 text-sm md:text-md xl:text-lg">
            <b> Author Abhinav R. Soomaney Examines Cryptocurrency Industry and Tax-Saving Tips in Amazon Best-Selling
              New Book</b>
          </p>
        </div>
      </div>
      </a>

    </div>


    <!-- <div class="p-4 flex  justify-center  gap-4 ">
<div class=" flex flex-col border items-center shadow-2xl">
<img src="/news1.png" class="h-30">
<div class="bg-gray-50 w-full ">
<p class="text-center ">
    Deconstructing Tax Implications On Cryptocurrencies
</p>
</div>
</div>
<div class="border flex flex-col items-center w-60 rounded-lg">

  
  <div class="h-40 flex justify-center items-center w-full bg-white">
    <img src="/money-control.jpeg" class="h-16" />
  </div>

 
  <div class="bg-gray-50 w-full py-4 px-3 flex justify-center items-center">
    <p class="text-center text-gray-700">
      Budget 2022: Tax clarity emerges on digital virtual assets
    </p>
  </div>

</div>


<div class="border flex flex-col items-center p-2">
  <img src="/forbes1.png" class="h-16">
  <div class="bg-gray-50">
<p class="text-center ">
    Record-Breaking Cryptocurrency Adoption Leads The IRS To Release New Reporting Requirements
</p>
</div>
</div>
<div class="border flex flex-col items-center">
 <img src="/laweekly.png" class="h-16">
 <div class="bg-gray-50">
<p class="text-center ">
    Author Abhinav R. Soomaney Examines Cryptocurrency Industry and Tax-Saving Tips in Amazon Best-Selling New Book
</p>
</div>
</div>
</div> -->
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