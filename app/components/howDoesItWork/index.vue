<template>
  <div>
    <h2 class="text-4xl text-center font-semibold">
      <div class="flex flex-wrap gap-3 justify-center">
        How does it
        <div class="text-[#4aabab]">
          work?
          <CurvedLine />
        </div>
      </div>
    </h2>

    <div class="relative mt-5 md:p-3">
      <div
        class="absolute left-1/2 -translate-x-1/2 w-[4px] bg-[#D5D5FE] top-[160px] bottom-0  md:top-[220px] md:bottom-0 z-10"
      ></div>

      <div
        class="relative grid md:grid-cols-[1fr_4px_1fr] gap-4 md:gap-10 grid-cols-[1fr_0px_1fr] "
      >
        <div class="flex justify-end items-center mt-16 p-1 ">
          <div
            class="bg-white shadow-lg rounded-2xl w-full h-full max-w-[300px] md:max-w-[500px] shadow-[0_0_10px_0] shadow-[#254BD34D]"
          >
            <video controls class="w-full rounded-2xl h-full">
              <source src="/login-screen.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute left-1/2 -translate-x-1/2 top-40 md:top-48 w-4 h-4 bg-white border border-gray-300 rounded-full z-20"
          ></div>
        </div>

        <div class="flex justify-start items-center mt-16">
          <div
            class="bg-white shadow-lg rounded-2xl p-6  max-w-[300px] md:max-w-[450px] shadow-[0_0_10px_0] shadow-[#254BD34D]"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-lg md:text-3xl font-medium">Registration</h3>
              <p class="text-[#4aabab] text-xl md:text-4xl">01</p>
            </div>
            <p class="text-xs md:text-sm mt-2 leading-4 md:leading-6 text-gray-900 font-medium">
              To get started, you need to create an account on our crypto
              exchange platform. Click the "Sign Up" button and provide the
              required information, including your name, email address, and a
              secure password. Make sure to verify your email to activate your
              account.
            </p>
          </div>
        </div>

        <div class="flex justify-end items-center mt-16">
         
          <div
            class="bg-white shadow-lg rounded-2xl p-6  max-w-[300px] md:max-w-[450px]  shadow-[0_0_10px_0] shadow-[#254BD34D]"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-lg md:text-3xl font-medium">Explore the Dashboard</h3>
              <p class="text-[#4aabab] text-xl md:text-4xl">02</p>
            </div>
            <p class="text-xs md:text-sm mt-2 leading-4 md:leading-6 text-gray-900 font-medium">
               At CryptoTax International, our mission is to serve as the premier
              one-stop solution for cryptocurrency tax services for a global
              user base. Recognizing the absence of a reliable tax solution
              within the rapidly evolving cryptoeconomy, our goal is to bridge
              that gap by leveraging our extensive expertise.
            </p>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute left-1/2 -translate-x-1/2 top-40 md:top-48 w-4 h-4 bg-white border border-gray-300 rounded-full z-20"
          ></div>
        </div>

        <div class="flex justify-start items-center mt-16 p-1">
         <div
            class="bg-white shadow-lg rounded-2xl w-full h-full max-w-[300px] md:max-w-[500px]  shadow-[0_0_10px_0] shadow-[#254BD34D]"
          >
            <video controls class="w-full h-full rounded-2xl">
              <source src="/account.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div class="flex justify-end items-center mt-16 p-1">
         <div
            class="bg-white shadow-lg rounded-2xl w-full h-full max-w-[300px] md:max-w-[500px]  shadow-[0_0_10px_0] shadow-[#254BD34D]"
          >
            <video controls class="w-full h-full rounded-2xl">
              <source src="/tax-harvesting.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute left-1/2 -translate-x-1/2 top-40 md:top-48 w-4 h-4 bg-white border border-gray-300 rounded-full z-20"
          ></div>
        </div>

        <div class="flex justify-start items-center mt-16">
          
           <div
            class="bg-white shadow-lg rounded-2xl p-6  max-w-[300px] md:max-w-[450px] shadow-[0_0_10px_0] shadow-[#254BD34D]"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-lg md:text-3xl font-medium">Tax Harvesting</h3>
              <p class="text-[#4aabab] text-xl md:text-4xl">03</p>
            </div>
            <p class="text-xs md:text-sm mt-2 leading-4 md:leading-6 text-gray-900 font-medium">
             At CryptoTax International, our mission is to serve as the premier
              one-stop solution for cryptocurrency tax services for a global
              user base. Recognizing the absence of a reliable tax solution
              within the rapidly evolving cryptoeconomy, our goal is to bridge
              that gap by leveraging our extensive expertise.
            </p>
          </div>
        </div>

        <div class="flex justify-end items-center mt-16">
          
           <div
            class="bg-white shadow-lg rounded-2xl p-6  max-w-[300px] md:max-w-[450px] shadow-[0_0_10px_0] shadow-[#254BD34D]"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-lg md:text-3xl font-medium">Wallets</h3>
              <p class="text-[#4aabab] text-xl md:text-4xl">04</p>
            </div>
            <p class="text-xs md:text-sm mt-2 leading-4 md:leading-6 text-gray-900 font-medium">
            At CryptoTax International, our mission is to serve as the premier
              one-stop solution for cryptocurrency tax services for a global
              user base. Recognizing the absence of a reliable tax solution
              within the rapidly evolving cryptoeconomy, our goal is to bridge
              that gap by leveraging our extensive expertise.
            </p>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute left-1/2 -translate-x-1/2 top-40 md:top-48 w-4 h-4 bg-white border border-gray-300 rounded-full z-20"
          ></div>
        </div>

        <div class="flex justify-start items-center mt-16 p-1">
          <div
            class="bg-white shadow-lg rounded-2xl w-full h-full max-w-[300px] md:max-w-[500px]  shadow-[0_0_10px_0] shadow-[#254BD34D]"
          >
            <video controls class="w-full h-full rounded-2xl">
              <source src="/wallets.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mt-16">
      <img src="/pattern.png" class="w-full" />
      <div class="absolute inset-0 flex justify-center items-center">
        <button @click="$router.push('/account')"
          class="border border-teal-500 bg-teal-500 text-white rounded-full px-5 py-2"
        >
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
