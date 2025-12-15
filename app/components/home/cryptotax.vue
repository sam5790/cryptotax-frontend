<template>
  <div class="bg-[#f0f0fC] p-16">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-3xl md:text-4xl text-center font-semibold">
        <div class="flex md:gap-3 gap-1 flex-wrap justify-center">
          Reasons to use
          <div class="text-[#4aabab]">
            CryptoTax
            <CurvedLine />
          </div>
        </div>
      </h2>

      <p class="text-center max-w-[400px] mx-auto text-gray-500">
        Here are six reasons for you to choose us for your Crypto currency
        taxes.
      </p>
    </div>

    <div class="max-w-4xl mx-auto mt-10">
      <div class="md:flex items-center justify-between md:mb-10 md:mb-16">
        <div class="flex items-center justify-start md:gap-10 gap-4 py-3 md:py-0">
          <img src="/reason1.png" class="md:size-12 size-10" />
          <p>Experience with crypto audits</p>
        </div>

        <div class="flex items-center justify-end md:gap-10 gap-4 py-3 md:py-0">
          <p class="text-end">Transfer and Tracking cost basis</p>
          <img src="/reason2.png" class="md:size-12 size-10" />
        </div>
      </div>
      <div class="md:flex items-center justify-between md:mb-10 md:mb-16">
        <div class="flex items-center justify-start md:gap-10 gap-4 py-3 md:py-0">
          <img src="/reason3.png" class="md:size-12 size-10" />
          <p>Timely documentation & record keeping of all trades</p>
        </div>

        <div class="flex items-center justify-end md:gap-10 gap-4 py-3 md:py-0">
          <p class="text-end">Tax audit/income tax notice!</p>
          <img src="/reason4.png" class="md:size-12 size-10" />
        </div>
      </div>
      <div class="md:flex items-center justify-between mb-10 md:mb-16">
        <div class="flex items-center justify-start md:gap-10 gap-4 py-3 md:py-0">
          <img src="/reason5.png" class="md:size-12 size-10" />
          <p>Expertise with Crypto Tax Laws</p>
        </div>

        <div class="flex items-center justify-end md:gap-10 gap-4 py-3 md:py-0">
          <p class="text-end">Audit Support</p>
          <img src="/reason6.png" class="md:size-12 size-10" />
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="md:mt-8 px-8 py-2 bg-[#4AABAB] rounded-3xl text-white font-semibold"
        @click="$router.push('/register')"
      >
        Sign Up
      </button>
    </div>
  </div>
</template>
