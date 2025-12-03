<template>
    <div class="p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center items-center bg-gray-50">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 text-center px-2">
            <span class="text-teal-500 underline-text">One-Stop Solution</span> For Cryptocurrency Taxes
        </h2>
        <div class="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-16 px-2 sm:px-4">
            <p class="text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-[1200px] mx-auto">
                At CryptoTax International, our mission is to serve as the premier one-stop solution for cryptocurrency tax services for a global user base. Recognizing the absence of a reliable tax solution within the rapidly evolving cryptoeconomy, our goal is to bridge that gap by leveraging our extensive expertise.
            </p>

            <p class="text-center mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl">we are recognized by</p>
            <div class="flex justify-center items-center mt-2 sm:mt-3">
                <img src="/start-up-india.png" alt="Start-up India" class="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72">
            </div>
        </div>
    </div>
</template>

<style scoped>
.underline-text {
    position: relative;
    display: inline-block;
}

.underline-text::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 25px;
    background-image: url("underline.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

/* XS Devices (below 400px) */
@media (max-width: 400px) {
    .underline-text::after {
        width: 220px;
        height: 20px;
        bottom: -8px;
    }
}

/* Small devices (640px and up) */
@media (min-width: 640px) {
    .underline-text::after {
        width: 320px;
        height: 28px;
        bottom: -12px;
    }
}

/* Medium devices (768px and up) */
@media (min-width: 768px) {
    .underline-text::after {
        width: 380px;
        height: 32px;
        bottom: -14px;
    }
}

/* Large devices (1024px and up) */
@media (min-width: 1024px) {
    .underline-text::after {
        width: 450px;
        height: 35px;
        bottom: -16px;
    }
}

/* Extra large devices (1280px and up) */
@media (min-width: 1280px) {
    .underline-text::after {
        width: 520px;
        height: 38px;
        bottom: -18px;
    }
}

/* 2XL devices (1536px and up) */
@media (min-width: 1536px) {
    .underline-text::after {
        width: 600px;
        height: 40px;
        bottom: -20px;
    }
}
</style>