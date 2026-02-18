<template>
  <div>
    <div class="bg-black">
      <div
        class="grid grid-cols-1 md:grid-cols-6 gap-8 p-12 text-center md:text-left"
      >
        <div class="w-full flex justify-start md:block">
          <img src="/footerwhitelogo.png" class="h-32" />
        </div>

        <div
          class="flex flex-col text-white w-full items-start"
        >
          <b>Quick Links</b>
          <p @click="$router.push('/about-us')">About Us</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Solutions</p>
          <p @click="$router.push('/how-does-it-work')" class="cursor-pointer">How does it work</p>
          <p @click="$router.push('/exchanges')" class="cursor-pointer">Exchange</p>
        </div>

        <div
          class="flex flex-col text-white w-full items-start"
        >
          <b>Legal</b>    
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div
          class="flex flex-col text-white md:col-span-2 w-full items-start"
        >
          <b>Subscribe to Our News Letter</b>
          <p class="mb-2">Subscribe to our news letter to stay updated!</p>

          <div
            class="flex flex-col lg:flex-row items-center w-full lg:w-auto gap-3"
          >
            <input
              type="text"
              class="rounded-md w-full lg:w-64 px-3 py-3 border border-gray-500"
              placeholder="Enter your email"
            />

          <button
            class="bg-[#4AABAB] px-8 py-3 text-white rounded-md w-full lg:w-auto"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-4 p-12">
      <div class="text-white">
        <div class="flex">
          <a
           href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcryptotax_int"
            target="_blank">
          <img src="/x.png" class="mr-4"/></a>
          <a href="https://m.facebook.com/cryptotaxinternational" target="_blank">
          <img src="/fb.png" class="mr-4"/></a>
          <a href="https://www.instagram.com/cryptotax_in/" target="_blank">
          <img src="/instagram.png" class="mr-4" /></a>
          <a href="https://www.linkedin.com/company/crypto-tax-software/" target="_blank">
          <img src="/linkedin.png" class="mr-4" /></a>
          <a href="https://wa.me/+919996669951" target="_blank">
          <img src="/whatsapp.png" class="mr-4" /></a>
        </div>
        <p class="mt-5">
          <b>Disclaimer:</b> CryptoTax services provided herein are for
          informational purposes only and should not be considered as financial,
          investment, or legal advice. We are not financial advisors, and our
          services do not constitute personalized financial or legal
          recommendations. You should consult with a qualified financial or
          legal professional before making any cryptocurrency-related decisions.
        </p>
      </div>
      <div class="flex flex-col text-white justify-end md:items-center p-3 mb-3 mt-3">
        <p>We are certified by</p>
        <img src="/start-up-india.png" class="w-[150px]"/>
        <p><b>Certificate No: 1093092030221202</b></p>
      </div>
      <div class="flex flex-col text-white justify-end md:items-center mt-2">
        <p>You can reach us at this number from 10 AM to 7 PM</p>
        <p>(Monday to Friday) :</p>
        <p><b>+91 99966 69951</b></p>
      </div>
      <div class="flex flex-col text-white justify-end md:items-center mt-3 mb-3">
        <div class="flex flex-col justify-start">
          <p class="mb-1 ml-2">We Support</p>
          <div class="flex">
            <img src="/upi.png" class="h-7 bg-white mr-1"/>
            <img src="/visa.png" class="h-7 bg-white mr-1"/>
            <img src="/master-card.png" class="h-7 bg-white mr-1"/>
            <img src="/american-express.png" class="h-7 mr-2 bg-white"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="bg-gray-600">
    <p class="lg:text-lg text-gray-200 flex justify-center p-2">
      ©2023-2024 CryptoTax | All rights are reserved
    </p>
  </div>
</template>
<!-- 
<script setup>

const router=useRouter()

</script> -->
