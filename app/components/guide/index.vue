<template>
  <div class="mt-3 relative">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-3xl xl:text-4xl font-semibold">
       <div class="flex flex-wrap gap-2 text-center justify-center">
                                Crypto Tax Guide for
                                <div class="text-[#4aabab] text-center">INDIA
                                  <CurvedLine/>
                                </div>
                                </div>
      </h2>
      <p class="text-lg md:my-2 md:mb-16">Cryptotax tax guide</p>
    </div>
  </div>

  <div class="sm:block md:hidden absolute left-5 p-1 ml-1" @click.stop>
    <h3 class="font-semibold text-lg cursor-pointer inline-block border-b-2 border-teal-500 text-[#4aabab]"
      @click="showToc = !showToc">
      Table of Contents
    </h3>

    <transition name="slide">
      <div v-if="showToc" class="border rounded-xl bg-white shadow-sm mt-2 p-2 w-64">
        <ul class="space-y-4 relative">

          <div class="absolute left-[7px] top-[40px] bottom-[30px] w-[2px] bg-gray-300"></div>

          <li v-for="(item, index) in toc" :key="index" @click="scrollToSection(index)"
            class="flex items-center gap-3 cursor-pointer relative">
            <div class="w-4 h-4 rounded-full border shrink-0 relative z-10"
              :class="active === index ? 'bg-[#4aabab] border-teal-500' : 'bg-white'"></div>

            <span :class="active === index ? 'text-[#4aabab] font-semibold' : 'text-gray-700'">
              {{ item.title }}
            </span>
          </li>

        </ul>
      </div>
    </transition>
  </div>

  <div class="p-10 flex gap-10">

    <div class="w-64 border rounded-xl shadow-sm md:block hidden h-[600px]">
      <h3 class="font-semibold text-lg flex justify-center py-2">Table of Contents</h3>
      <div class="border border-gray-500 mb-3"></div>
      <ul class="space-y-4 p-2 relative">
        <div class="absolute left-[15px] top-[65px] bottom-[38px] w-[2px] bg-gray-300"></div>

        <li v-for="(item, index) in toc" :key="index" @click="scrollToSection(index)"
          class="flex items-center gap-3 cursor-pointer relative">
          <div class="w-4 h-4 rounded-full border shrink-0 relative z-10"
            :class="active === index ? 'bg-teal-500 border-teal-500' : 'bg-white'"></div>

          <span :class="active === index ? 'text-teal-600 font-semibold' : 'text-gray-700'">
            {{ item.title }}
          </span>
        </li>
      </ul>
    </div>


    <div class="flex-1">

      <div class="mt-5 space-y-10">

        <section :ref="sectionRefs[0]">
          <h3 class="text-xl md:text-3xl font-semibold" :class="active === 0 ? 'text-[#4aabab]' : 'text-gray-500'">
            Distinguishing Cryptocurrency as an Asset, Not a Currency
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>The confusion often arises from the interchangeable use of "cryptocurrency" and "crypto asset.
              "It is imperative to distinguish between these terms. While a currency is government-issued legal tender,
              crypto assets are recognized as valuable items, offering investors a unique avenue for portfolio
              diversification.
            </li>
            <li>In India, the official classification of crypto as an asset is underscored,
              and any attempt to label it as a "security" or a "currency" is explicitly prohibited by the Advertising
              Standards Council of India.</li>
          </ul>
        </section>

        <section :ref="sectionRefs[1]">
          <h3 class="text-xl md:text-3xl font-semibold" :class="active === 1 ? 'text-[#4aabab]' : 'text-gray-500'">
            Taxation Framework Unveiled in Budget 2023
          </h3>
          <p class="text-sm md:text-lg mt-4">The Income Tax Act categorizes crypto assets as capital assets, subjecting
            them to capital gains taxation. The key tax implications for crypto transactions in India are as follows:
          </p>
          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>30% Income Tax on Capital Gains: Profits derived from crypto transactions are subject to a tax rate of
              up to 30%. Interestingly, this taxation is levied irrespective of the cost of acquisition of the
              underlying VDAs, and gains cannot be offset against losses from other asset classes.</li>
            <li>1% TDS on All Crypto Transactions: A significant development is the introduction of a 1% Tax Deducted at
              Source (TDS) on all crypto transactions, including those resulting in a financial loss. The cumulative
              TDS, however, can be adjusted against the total income tax payable at the conclusion of the fiscal year.
            </li>
            <li>Tax on Crypto Gifts: The provision laid out in the budget mandates that receiving crypto assets as gifts
              is a taxable event.</li>
          </ul>
        </section>

        <section :ref="sectionRefs[2]">
          <h3 class="text-xl md:text-3xl font-semibold" :class="active === 2 ? 'text-[#4aabab]' : 'text-gray-500'">
            Taxation as an Additional Source of Income
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>Crypto transactions are treated as an additional source of income, with a fixed 30% tax rate on positive
              trades. Crucially, the tax laws focus exclusively on gains, precluding the possibility of offsetting
              losses from other sources.</li>

          </ul>
        </section>


        <section :ref="sectionRefs[3]">
          <h3 class="text-xl md:text-3xl font-semibold" :class="active === 3 ? 'text-[#4aabab]' : 'text-gray-500'">
            Navigating the Disclosure of Crypto Assets
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>Income tax laws stipulate the mandatory disclosure of crypto assets if an individual's taxable income
              surpasses ₹50 lakhs. A notable challenge emerges in determining whether digital assets are to be declared
              as Indian or foreign, leading to the prevailing practice of declaring assets from exchanges based in
              India.</li>

          </ul>
        </section>


        <section :ref="sectionRefs[4]">
          <h3 class="text-xl md:text-3xl font-semibold" :class="active === 4 ? 'text-[#4aabab]' : 'text-gray-500'">
            Taxation Does Not Imply Legalization of Cryptos
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>It is paramount to understand that the introduction of taxation does not automatically confer legal
              status upon crypto assets in India. The government's overarching stance on cryptocurrencies remains
              shrouded in ambiguity, and only the passage of time is expected to bring forth more definitive regulatory
              clarity.</li>

          </ul>
        </section>


        <section :ref="sectionRefs[5]">
          <h3 class="text-xl md:text-3xl font-semibold" :class="active === 5 ? 'text-[#4aabab]' : 'text-gray-500'">
            Frequently Asked Questions (FAQs): A Deeper Dive
          </h3>

          <ul class="list-disc pl-6 mt-2 text-sm md:text-lg">
            <li>Tax on Crypto Transactions: Gains from trading cryptocurrencies are taxed at a rate of 30%, augmented by
              an additional 4% cess. A 1% TDS applies to transactions exceeding ₹50,000 in the same financial year.</li>
            <li>Refundable TDS: Indian investors can seek a refund for excess TDS paid, which can exceed their actual
              tax liability.</li>
            <li>Strategies to Mitigate Crypto Tax: Proactive strategies, including tax-loss harvesting, long-term asset
              holding, and charitable donations, can be employed to minimize tax liabilities.</li>
            <li>Tax on Received Crypto: Receiving crypto assets as gifts exceeding ₹50,000 incurs a 30% tax liability.
            </li>
            <li>Calculation of Crypto Tax: Irrespective of income type or holding term, gains from the transfer of
              virtual assets are consistently subject to a 30% tax rate.</li>
          </ul>
        </section>

        <p class="mt-8 text-sm md:text-lg">In conclusion, the introduction of crypto taxation in India marks a
          significant milestone, yet the regulatory landscape is dynamic and subject to continuous evolution. The
          government's stance on cryptocurrencies remains an unfolding narrative, and stakeholders must navigate these
          complexities with a keen eye on emerging developments.</p>

      </div>

    </div>
  </div>
</template>
<script setup>

const showToc = ref(false)
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

const sectionRefs = [
  ref(null),
  ref(null),
  ref(null),
  ref(null),
  ref(null),
  ref(null),
];

const scrollToSection = (index) => {
  active.value = index;
  sectionRefs[index].value?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToc.value = false
};


const closeToc = () => {
  showToc.value = false
}

onMounted(() => {
  document.addEventListener("click", closeToc)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", closeToc)
})

</script>

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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
