<template>
  <div class="bg-[linear-gradient(100deg,rgb(240,240,252)_11.73%,rgba(240,240,252,0)_104.43%)] p-10">
    <h2 class="text-3xl md:text-4xl font-semibold text-center">Frequently Asked <span
        class="text-teal-500 underline-text">Questions</span></h2>
    <p class="my-8 text-gray-500 text-md md:text-xl text-center">Some frequently asked questions.</p>



    <div class=" mx-auto space-y-4 md:p-16">


      <details class="bg-white shadow-xl rounded-lg p-8  ">
        <summary class="font-semibold cursor-pointer">What triggers a Taxable Event in Crypto Trading?</summary>
        <div class="mt-3 text-gray-600">
          <p>Taxable transfers of crypto may include:</p>
          <ul class="list-disc ml-6">
            <li>Selling crypto for INR or another fiat currency.</li>
            <li>Trading crypto for crypto, including stablecoins.</li>
            <li>Spending crypto on goods and services.</li>
            <li>Gifting crypto.</li>
            <li>Mining coins is potentially income from other sources.</li>
            <li>Getting paid a salary in crypto.</li>
            <li>Staking rewards.</li>
            <li>Mining tokens.</li>
            <li>Airdrops.</li>
          </ul>
        </div>
      </details>


      <details class="bg-white shadow-xl rounded-lg p-8">
        <summary class="font-semibold ">What are the current Tax Implications for Crypto Trading?</summary>
        <div class="mt-3 text-gray-600">
          <p>Profit from the transfer of any virtual digital asset is to be taxed at the rate of 30%.
            Profit from VDA transfer is taxed at 30%.</p>
          <p>Profits are seen as income, taxed under section 115.</p>
          <p>There is no opportunity to treat cryptocurrency as a capital asset.</p>
          <p>Discounted tax on long term versus short term gains is not an option.</p>
          <p>No deduction, except the cost of acquisition, will be allowed while reporting income from the transfer of
            digital assets.</p>
          <p>A TDS of 1% is to be charged on payments of virtual assets, above a certain threshold(yet to be defined).
          </p>
          <p>Recipients of a crypto gift will be taxed, as if their gift was a form of income.</p>
        </div>
      </details>


      <details class="bg-white shadow-xl rounded-lg p-8">
        <summary class="font-semibold">Is Crypto Legal?</summary>
        <div class="mt-3 text-gray-600">
          <p>
            Cryptocurrency is not legal tender in India. While cryptocurrency in India can be exchanged due to the
            absence of a robust regulatory framework, a protracted licensing process makes it very difficult for certain
            service providers’ technologies to operate. The chairman of the Central Board of Direct Taxation has said
            that anyone making profits from Cryptocurrency's will have to pay taxes on them</p>
        </div>
      </details>

      <details class="bg-white shadow-xl rounded-lg p-8">
        <summary class="font-semibold">What is the tax laibility for crypto gifting?</summary>
        <div class="mt-3 text-gray-600">
          <p>
            According to the latest proposal, the recipient of a cryptocurrency gift will be subject to a 30 percent
            flat rate of income tax. This holds true for all cryptocurrency assets, including NFTs.</p>
        </div>
      </details>

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
  width: 200px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media(max-width:720px) {
  .underline-text::after {
    left: -20px;
    width: 200px;
    height: 20px;
    bottom: -10px
  }
}
</style>
