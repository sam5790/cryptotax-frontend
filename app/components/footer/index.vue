<template>
  <div class="bg-black">
    <div class="grid md:grid-cols-6  p-12">
      <div class="col-span-1">
        <img :src="'/logo-white.png'" class="h-32" key="logo">
      </div>
      <div class="flex flex-col text-white ">
        <b> Quick Links</b>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Careers</p>
        <p>Solutions</p>
        <p>Scope</p>
      </div>
      <div class="flex flex-col text-white ">
        <b>Legal</b>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div class=" flex flex-col text-white col-span-2">
        <b>Subscribe to Our News Letter</b>
        <p class="mb-2">Subscribe to our news letter to stay updated!</p>

        <div class="flex items-center">
          <div class=" flex-1 relative">
            <input type="text" class="rounded-md w-full ps-9 pe-3 py-3 border border-gray-500"
              placeholder="Enter your email">
          </div>

          <button class="bg-teal-500 ml-2 px-4 py-3 text-white rounded-md">
            SUBSCRIBE
          </button>
        </div>
      </div>

    </div>


    <div class="grid md:grid-cols-4 p-12">
      <div class="text-white">
        <div class="flex">
          <img :src="'/x.png'" class="mr-4" key="x"/>
          <img :src="'/fb.png'" class="mr-4" key="fb"/>
          <img :src="'/instagram.png'" class="mr-4" key="instagram" />
          <img :src="'/linkedin.png'" class="mr-4" key="linkedin"/>
          <img :src="'/whatsapp.png'" class="mr-4" key="whatsapp"/>
        </div>
        <p class="mt-5"><b>Disclaimer:</b> CryptoTax services provided herein are for informational purposes only and
          should not be considered as financial, investment, or legal advice. We are not financial advisors, and our
          services do not constitute personalized financial or legal recommendations. You should consult with a
          qualified financial or legal professional before making any cryptocurrency-related decisions.</p>
      </div>
      <div class="flex flex-col text-white justify-end md:items-center">
        <p>We are certified by</p>
        <img :src="'/start-up-india.png'" class="w-[150px]" key="start-up-india"/>
        <p><b>Certificate No: 1093092030221202</b></p>
      </div>
      <div class="flex flex-col text-white justify-end md:items-center">
        <p>You can reach us at this number from 10 AM to 7 PM</p>
        <p>(Monday to Friday) :</p>
        <p><b>+91 99966 69951</b></p>
      </div>
      <div class="flex flex-col text-white justify-end md:items-center">
        <div class="flex flex-col justify-start">
          <p class="mb-1 ml-2">We Support</p>
          <div class="flex">
            <img :src="'/upi.png'" class="h-8" key="upi">
            <img :src="'/visa.png'" class="h-8" key="visa"/>
            <img :src="'/master-card.png'" class="h-8" key="master-card"/>
            <img :src="'/american-express.png'" class="h-8" key="american-express"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-600">
    <p class="lg:text-lg text-gray-200 flex justify-center p-2">©2023-2024 CryptoTax | All rights are reserved</p>
  </div>
</template>