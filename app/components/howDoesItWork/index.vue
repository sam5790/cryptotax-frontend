
<template>
  <div class="">
    <h2 class="text-4xl text-center font-semibold p-10">
      How does it <span class="text-teal-500 underline-text">work?</span>
    </h2>

   <div class="relative mt-16">
     <div class="absolute top-32 bottom-0 left-1/2 -translate-x-1/2 w-[4px] bg-[#D5D5FE]"></div>

    <div class="relative grid grid-cols-[1fr_4px_1fr] gap-10 mt-16">

      <div class="flex justify-end">
        <div class="bg-white shadow-lg rounded-2xl ">
         <video controls width="600">
      <source src="/login-screen.mp4" type="video/mp4" />
    </video>
        </div>
      </div>

     <div class="relative">
      <div class="absolute left-1/2 -translate-x-1/2 top-32 w-4 h-4 bg-white border border-gray-400 rounded-full z-20"></div>
    </div>

       <div class="flex justify-start items-center">
        <div class="bg-white shadow-lg rounded-2xl p-6 w-[350px] ">
          <div class="flex justify-between">
          <h3 class="text-xl  ">Registration</h3>
          
          <p class="text-teal-400 text-2xl ">01</p>
          
          </div>
          <p class="text-sm mt-2">
            To get started, you need to create an account on our crypto exchange platform. Click the "Sign Up" button and provide the required information, including your name, email address, and a secure password. Make sure to verify your email to activate your account.
          </p>
        </div>
      </div>

       <div class="flex justify-end items-center">
        <div class="bg-white shadow-lg rounded-2xl p-6 w-[350px]">
          <div class="flex justify-between">
          <h3 class="text-xl  ">Explore the Dashboard</h3>
          
          <p class="text-teal-400  text-2xl ">02</p>
          
          </div>
          <p class="text-sm mt-2">
            At CryptoTax International, our mission is to serve as the premier one-stop solution for cryptocurrency tax services for a global user base. Recognizing the absence of a reliable tax solution within the rapidly evolving cryptoeconomy, our goal is to bridge that gap by leveraging our extensive expertise.
          </p>
        </div>
      </div>

        <div class="relative">
      <div class="absolute left-1/2 -translate-x-1/2 top-16 w-4 h-4 bg-white border border-gray-400 rounded-full z-20"></div>
    </div>

      <div class="flex justify-start">
        <div class="bg-white shadow-lg rounded-2xl ">
         <video controls width="600">
      <source src="/dashboard.mp4" type="video/mp4" />
    </video>
        </div>
      </div>

      <div class="flex justify-end">
        <div class="bg-white shadow-lg rounded-2xl ">
          <video controls width="600">
      <source src="/tax-harvesting.mp4" type="video/mp4" />
    </video>
        </div>
      </div>

        <div class="relative">
      <div class="absolute left-1/2 -translate-x-1/2 top-16 w-4 h-4 bg-white border border-gray-400 rounded-full z-20"></div>
    </div>

       <div class="flex justify-start items-center">
        <div class="bg-white shadow-lg rounded-2xl p-6 w-[350px]">
          <div class="flex justify-between">
          <h3 class="text-xl  ">Tax Harvesting</h3>
          
          <p class="text-teal-400 text-2xl ">03</p>
          
          </div>
          <p class="text-sm mt-2">
            At CryptoTax International, our mission is to serve as the premier one-stop solution for cryptocurrency tax services for a global user base. Recognizing the absence of a reliable tax solution within the rapidly evolving cryptoeconomy, our goal is to bridge that gap by leveraging our extensive expertise.
          </p>
        </div>
      </div>

        <div class="flex justify-end items-center">
        <div class="bg-white shadow-lg rounded-2xl p-6 w-[350px]">
         <div class="flex justify-between">
          <h3 class="text-xl  ">Wallets</h3>
          
          <p class="text-teal-400 text-2xl ">04</p>
          
          </div>
          <p class="text-sm mt-2">
            At CryptoTax International, our mission is to serve as the premier one-stop solution for cryptocurrency tax services for a global user base. Recognizing the absence of a reliable tax solution within the rapidly evolving cryptoeconomy, our goal is to bridge that gap by leveraging our extensive expertise.
          </p>
        </div>
      </div>

      <div class="relative">
      <div class="absolute left-1/2 -translate-x-1/2 top-16 w-4 h-4 bg-white border border-gray-400 rounded-full z-20"></div>
    </div>

      <div class="flex justify-start">
        <div class="bg-white shadow-lg rounded-2xl">
          <video controls width="600">
      <source src="/wallets.mp4" type="video/mp4" />
    </video>
        </div>
      </div>

    </div>
    </div>
    <div class="relative">
  <img src="/pattern.png" class="w-full ">

  <div class="absolute inset-0 flex justify-center items-center">
    <button class="border border-teal-500 bg-teal-500 text-white rounded-full px-5 py-2">
      Get Started
    </button>
  </div>
</div>
  </div>
 

<Footer/>
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