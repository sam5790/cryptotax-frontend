<!-- <template>
        <div class="p-10">
                <div class="flex flex-col justify-center items-center">
                        <h2 class="text-3xl xl:text-4xl font-semibold">
                                Crypto Tax Guide for
                                <span class="text-teal-500 underline-text">INDIA</span>
                        </h2>
                        <p class="text-lg md:my-2 md:mb-16">Cryptotax tax guide</p>
                        <div class="flex flex-justify-center flex-col">
                                <h2 class="text-2xl md:text-3xl text-teal-500">
                                        Understanding the Crypto Tax Landscape in India?
                                </h2>
                                <ul class="my-5 list-disc pl-6">
                                        <li class="whitespace-normal">
                                                Cryptocurrency management in India remains complex due to unclear tax
                                                guidelines.
                                        </li>
                                        <li class="whitespace-normal">
                                                The government has outlined tax structures, but implementation has faced
                                                challenges.
                                        </li>
                                        <li class="whitespace-normal">
                                                This guide aims to clarify Indian cryptocurrency tax concerns, going
                                                beyond the 30% tax slab and 1% TDS.
                                        </li>
                                </ul>

                        </div>

                        <div class="flex flex-justify-center flex-col">
                                <h2 class="text-2xl md:text-3xl text-teal-500">
                                        Union Budget 2023: Key Updates on Crypto Tax.
                                </h2>

                                <ul class="my-5 list-disc pl-6">
                                        <li class="whitespace-normal">
                                                Cryptocurrency management in India remains complex due to unclear
                                                tax guidelines.
                                        </li>
                                        <li class="whitespace-normal">
                                                The government has outlined tax structures, but implementation has
                                                faced challenges.
                                        </li>
                                        <li class="whitespace-normal">
                                                This guide aims to clarify Indian cryptocurrency tax concerns, going
                                                beyond the 30% tax slab and 1% TDS.
                                        </li>
                                </ul>
                        </div>

                        <div class="flex flex-justify-center flex-col">
                                <h2 class="text-2xl md:text-3xl text-teal-500">
                                        Taxable Events in Crypto.
                                </h2>

                                <ul class="my-5 list-disc pl-6">
                                        <li class="whitespace-normal">
                                                Cryptocurrency management in India remains complex due to unclear
                                                tax guidelines.
                                        </li>
                                        <li class="whitespace-normal">
                                                The government has outlined tax structures, but implementation has
                                                faced challenges.
                                        </li>
                                        <li class="whitespace-normal">
                                                This guide aims to clarify Indian cryptocurrency tax concerns, going
                                                beyond the 30% tax slab and 1% TDS.
                                        </li>
                                </ul>
                        </div>

                        <div class="flex flex-justify-center flex-col">
                                <h2 class="text-2xl md:text-3xl text-teal-500">
                                        Virtual Digital Assets (VDAs).
                                </h2>

                                <ul class="my-5 list-disc pl-6">
                                        <li class="whitespace-normal">
                                                Cryptocurrency management in India remains complex due to unclear
                                                tax guidelines.
                                        </li>
                                        <li class="whitespace-normal">
                                                The government has outlined tax structures, but implementation has
                                                faced challenges.
                                        </li>
                                        <li class="whitespace-normal">
                                                This guide aims to clarify Indian cryptocurrency tax concerns, going
                                                beyond the 30% tax slab and 1% TDS.
                                        </li>
                                </ul>
                        </div>

                        <div class="flex flex-justify-center flex-col">
                                <h2 class="text-2xl md:text-3xl text-teal-500">
                                        Why Crypto is Taxed in India.
                                </h2>

                                <ul class="my-5 list-disc pl-6">
                                        <li class="whitespace-normal">
                                                Cryptocurrency management in India remains complex due to unclear
                                                tax guidelines.
                                        </li>
                                        <li class="whitespace-normal">
                                                The government has outlined tax structures, but implementation has
                                                faced challenges.
                                        </li>
                                        <li class="whitespace-normal">
                                                This guide aims to clarify Indian cryptocurrency tax concerns, going
                                                beyond the 30% tax slab and 1% TDS.
                                        </li>
                                </ul>
                        </div>

                        <div class="flex flex-justify-center flex-col">
                                <h2 class="text-2xl md:text-3xl text-teal-500">
                                        Taxable Events in Crypto.
                                </h2>

                                <ul class="my-5 list-disc pl-6">
                                        <li class="whitespace-normal">
                                                Cryptocurrency management in India remains complex due to unclear
                                                tax guidelines.
                                        </li>
                                        <li class="whitespace-normal">
                                                The government has outlined tax structures, but implementation has
                                                faced challenges.
                                        </li>
                                        <li class="whitespace-normal">
                                                This guide aims to clarify Indian cryptocurrency tax concerns, going
                                                beyond the 30% tax slab and 1% TDS.
                                        </li>
                                </ul>
                        </div>

                        <div class="flex flex-justify-center flex-col">
                                <h2 class="text-2xl md:text-3xl text-teal-500">
                                        Understanding the Crypto Tax Landscape in India?
                                </h2>

                                <ul class="my-5 list-disc pl-6">
                                        <li class="whitespace-normal">
                                                Cryptocurrency management in India remains complex due to unclear
                                                tax guidelines.
                                        </li>
                                        <li class="whitespace-normal">
                                                The government has outlined tax structures, but implementation has
                                                faced challenges.
                                        </li>
                                        <li class="whitespace-normal">
                                                This guide aims to clarify Indian cryptocurrency tax concerns, going
                                                beyond the 30% tax slab and 1% TDS.
                                        </li>
                                </ul>
                        </div>
                </div>
        </div>
</template> -->

<template>
        <div class="p-10">


  <div class="flex flex-col justify-center items-center">
                        <h2 class="text-3xl xl:text-4xl font-semibold">
                                Crypto Tax Guide for
                                <span class="text-teal-500 underline-text">INDIA</span>
                        </h2>
                        <p class="text-lg md:my-2 md:mb-16">Cryptotax tax guide</p>
                        </div>


        </div>
  <div class="p-10 flex gap-10">
    
 
    <div class="w-64 border rounded-xl p-4 bg-white shadow-sm">
      <h3 class="font-semibold text-lg mb-4">Table of Contents</h3>
<div class="border border-gray-500 mb-3"></div>
      <ul class="space-y-4">
        <li 
          v-for="(item, index) in toc" 
          :key="index"
          @click="active = index"
          class="flex items-center gap-3 cursor-pointer"
        >
          <div 
            class="w-3 h-3 rounded-full border"
            :class="active === index ? 'bg-teal-500 border-teal-500' : 'border-gray-400'"
          ></div>

          <span
            :class="active === index ? 'text-teal-600 font-semibold' : 'text-gray-700'"
          >
            {{ item.title }}
          </span>
        </li>
      </ul>
    </div>

    <div class="flex-1">

      <div class="mt-5 space-y-10">

        <section>
          <h3 
            class="text-xl md:text-3xl font-semibold"
            :class="active === 0 ? 'text-teal-600' : 'text-gray-500'"
          >
            Distinguishing Cryptocurrency as an Asset, Not a Currency
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>The confusion often arises from the interchangeable use of "cryptocurrency" and "crypto asset.
                "It is imperative to distinguish between these terms. While a currency is government-issued legal tender, 
                crypto assets are recognized as valuable items, offering investors a unique avenue for portfolio diversification.
</li>
            <li>In India, the official classification of crypto as an asset is underscored,
                and any attempt to label it as a "security" or a "currency" is explicitly prohibited by the Advertising Standards Council of India.</li>
          </ul>
        </section>

        <section>
          <h3 
            class="text-xl md:text-3xl font-semibold"
            :class="active === 1 ? 'text-teal-600' : 'text-gray-500'"
          >
            Taxation Framework Unveiled in Budget 2023
          </h3>
          <p class="text-sm md:text-lg mt-4">The Income Tax Act categorizes crypto assets as capital assets, subjecting them to capital gains taxation. The key tax implications for crypto transactions in India are as follows:</p>
          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>30% Income Tax on Capital Gains: Profits derived from crypto transactions are subject to a tax rate of up to 30%. Interestingly, this taxation is levied irrespective of the cost of acquisition of the underlying VDAs, and gains cannot be offset against losses from other asset classes.</li>
            <li>1% TDS on All Crypto Transactions: A significant development is the introduction of a 1% Tax Deducted at Source (TDS) on all crypto transactions, including those resulting in a financial loss. The cumulative TDS, however, can be adjusted against the total income tax payable at the conclusion of the fiscal year.</li>
            <li>Tax on Crypto Gifts: The provision laid out in the budget mandates that receiving crypto assets as gifts is a taxable event.</li>
          </ul>
        </section>

        <section>
          <h3 
            class="text-xl md:text-3xl font-semibold"
            :class="active === 2 ? 'text-teal-600' : 'text-gray-500'"
          >
            Taxation as an Additional Source of Income
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>Crypto transactions are treated as an additional source of income, with a fixed 30% tax rate on positive trades. Crucially, the tax laws focus exclusively on gains, precluding the possibility of offsetting losses from other sources.</li>
            
          </ul>
        </section>

        
        <section>
          <h3 
            class="text-xl md:text-3xl font-semibold"
            :class="active === 3 ? 'text-teal-600' : 'text-gray-500'"
          >
            Navigating the Disclosure of Crypto Assets
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>Income tax laws stipulate the mandatory disclosure of crypto assets if an individual's taxable income surpasses ₹50 lakhs. A notable challenge emerges in determining whether digital assets are to be declared as Indian or foreign, leading to the prevailing practice of declaring assets from exchanges based in India.</li>
         
          </ul>
        </section>

    
        <section>
          <h3 
            class="text-xl md:text-3xl font-semibold"
            :class="active === 4 ? 'text-teal-600' : 'text-gray-500'"
          >
            Taxation Does Not Imply Legalization of Cryptos
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>It is paramount to understand that the introduction of taxation does not automatically confer legal status upon crypto assets in India. The government's overarching stance on cryptocurrencies remains shrouded in ambiguity, and only the passage of time is expected to bring forth more definitive regulatory clarity.</li>
           
          </ul>
        </section>


        <section>
          <h3 
            class="text-xl md:text-3xl font-semibold"
            :class="active === 5 ? 'text-teal-600' : 'text-gray-500'"
          >
           Frequently Asked Questions (FAQs): A Deeper Dive
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>Tax on Crypto Transactions: Gains from trading cryptocurrencies are taxed at a rate of 30%, augmented by an additional 4% cess. A 1% TDS applies to transactions exceeding ₹50,000 in the same financial year.</li>
           <li>Refundable TDS: Indian investors can seek a refund for excess TDS paid, which can exceed their actual tax liability.</li>
           <li>Strategies to Mitigate Crypto Tax: Proactive strategies, including tax-loss harvesting, long-term asset holding, and charitable donations, can be employed to minimize tax liabilities.</li>
            <li>Tax on Received Crypto: Receiving crypto assets as gifts exceeding ₹50,000 incurs a 30% tax liability.</li>
             <li>Calculation of Crypto Tax: Irrespective of income type or holding term, gains from the transfer of virtual assets are consistently subject to a 30% tax rate.</li>
          </ul>
        </section>

<p class="mt-8 text-sm md:text-lg">In conclusion, the introduction of crypto taxation in India marks a significant milestone, yet the regulatory landscape is dynamic and subject to continuous evolution. The government's stance on cryptocurrencies remains an unfolding narrative, and stakeholders must navigate these complexities with a keen eye on emerging developments.</p>

      </div>

    </div>
  </div>
</template>


<style scoped>
.underline-text {
        position: relative;
}

.underline-text::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: -25px;
        width: 160px;
        height: 40px;
        background-image: url("underline-new-user.png");
        background-size: cover;
}

@media (max-width: 1024px) {
        .underline-text {
                position: relative;
        }

        .underline-text::after {
                content: "";
                position: absolute;
                bottom: -20px;
                left: -20px;
                width: 120px;
                height: 40px;
                background-image: url("underline-new-user.png");
                background-size: cover;
        }
}
</style>


<script setup>
import { ref } from "vue";

const active = ref(0);

const toc = [
  {
    title: "Distinguishing Cryptocurrency as an Asset, Not a Currency",
    
  },
  {
    title: "Taxation Framework Unveiled in Budget 2023",
   
  },
  {
    title: "Taxation as an Additional Source of Income",
   
  },
  {
    title: "Navigating the Disclosure of Crypto Assets",
  
  },
  {
    title: "Taxation Does Not Imply Legalization of Cryptos",
 
  },
    {
    title: "Frequently Asked Questions (FAQs): A Deeper Dive",
  
}
];
</script>
