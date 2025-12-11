<template>
  <div>
    <h2 class="text-4xl text-center font-semibold p-10">
      How does it <span class="#4aabab underline-text">work?</span>
    </h2>

    <div class="relative mt-16 p-3">

      <div class="absolute left-1/2 -translate-x-1/2 w-[4px] bg-[#D5D5FE]
               top-[70px]
               bottom-[72px]
               sm:top-[90px]
               sm:bottom-[90px]
               md:top-32
               md:bottom-0
               z-10">
      </div>

      <div class="relative grid grid-cols-[1fr_4px_1fr] gap-4 md:gap-10">
        <div class="flex justify-end items-center mt-16">
          <div class="bg-white shadow-lg rounded-2xl w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]">
            <video controls class="w-full">
              <source src="/login-screen.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute left-1/2 -translate-x-1/2 top-16 md:top-32 w-4 h-4 bg-white border border-gray-400 rounded-full z-20">
          </div>
        </div>

        <div class="flex justify-start items-center mt-16">
          <div class="bg-white shadow-lg rounded-2xl p-4 md:p-6 w-full max-w-[250px] md:w-[350px]">
            <div class="flex justify-between items-center">
              <h3 class="text-lg md:text-xl">Registration</h3>
              <p class="text-teal-400 text-xl md:text-2xl">01</p>
            </div>
            <p class="text-xs md:text-sm mt-2">
              To get started, you need to create an account on our crypto exchange platform. Click the "Sign Up" button
              and provide the required information, including your name, email address, and a secure password. Make sure
              to verify your email to activate your account.
            </p>
          </div>
        </div>

        <div class="flex justify-end items-center mt-16">
          <div class="bg-white shadow-lg rounded-2xl p-4 md:p-6 w-full max-w-[250px] md:w-[350px]">
            <div class="flex justify-between items-center">
              <h3 class="text-lg md:text-xl">Explore the Dashboard</h3>
              <p class="text-teal-400 text-xl md:text-2xl">02</p>
            </div>
            <p class="text-xs md:text-sm mt-2">
              At CryptoTax International, our mission is to serve as the premier one-stop solution for cryptocurrency
              tax services for a global user base. Recognizing the absence of a reliable tax solution within the rapidly
              evolving cryptoeconomy, our goal is to bridge that gap by leveraging our extensive expertise.
            </p>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute left-1/2 -translate-x-1/2 top-16 md:top-16 w-4 h-4 bg-white border border-gray-400 rounded-full z-20">
          </div>
        </div>

        <div class="flex justify-start items-center mt-16">
          <div class="bg-white shadow-lg rounded-2xl w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]">
            <video controls class="w-full">
              <source src="/account.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div class="flex justify-end items-center mt-16">
          <div class="bg-white shadow-lg rounded-2xl w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]">
            <video controls class="w-full">
              <source src="/tax-harvesting.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute left-1/2 -translate-x-1/2 top-16 md:top-16 w-4 h-4 bg-white border border-gray-400 rounded-full z-20">
          </div>
        </div>

        <div class="flex justify-start items-center mt-16">
          <div class="bg-white shadow-lg rounded-2xl p-4 md:p-6 w-full max-w-[250px] md:w-[350px]">
            <div class="flex justify-between items-center">
              <h3 class="text-lg md:text-xl">Tax Harvesting</h3>
              <p class="text-teal-400 text-xl md:text-2xl">03</p>
            </div>
            <p class="text-xs md:text-sm mt-2">
              At CryptoTax International, our mission is to serve as the premier one-stop solution for cryptocurrency
              tax services for a global user base. Recognizing the absence of a reliable tax solution within the rapidly
              evolving cryptoeconomy, our goal is to bridge that gap by leveraging our extensive expertise.
            </p>
          </div>
        </div>

        <div class="flex justify-end items-center mt-16">
          <div class="bg-white shadow-lg rounded-2xl p-4 md:p-6 w-full max-w-[250px] md:w-[350px]">
            <div class="flex justify-between items-center">
              <h3 class="text-lg md:text-xl">Wallets</h3>
              <p class="text-teal-400 text-xl md:text-2xl">04</p>
            </div>
            <p class="text-xs md:text-sm mt-2">
              At CryptoTax International, our mission is to serve as the premier one-stop solution for cryptocurrency
              tax services for a global user base. Recognizing the absence of a reliable tax solution within the rapidly
              evolving cryptoeconomy, our goal is to bridge that gap by leveraging our extensive expertise.
            </p>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute left-1/2 -translate-x-1/2 top-16 md:top-16 w-4 h-4 bg-white border border-gray-400 rounded-full z-20">
          </div>
        </div>

        <div class="flex justify-start items-center mt-16">
          <div class="bg-white shadow-lg rounded-2xl w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]">
            <video controls class="w-full">
              <source src="/wallets.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </div>

    <div class="relative mt-16">
      <img src="/pattern.png" class="w-full" />
      <div class="absolute inset-0 flex justify-center items-center">
        <button class="border border-teal-500 bg-teal-500 text-white rounded-full px-5 py-2">
          Get Started
        </button>
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
  width: 150px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media (max-width: 640px) {
  .underline-text::after {
    left: -10px;
    width: 100px;
    height: 20px;
    bottom: -10px;
  }
}
</style>
