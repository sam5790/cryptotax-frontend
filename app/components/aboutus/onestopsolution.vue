<template>
    <div class="p-4 md:p-16 flex flex-col justify-center items-center bg-gray-50">
        <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 text-center"><span
                class="text-teal-500 underline-text">One-Stop Solution</span> For Cryptocurrency Taxes</h2>
        <div class=" md:p-16">
            <p class="text-center text-md md:text-lg lg:text-xl md:max-w-[1200px]">At CryptoTax International, our
                mission is to serve as the premier one-stop solution for cryptocurrency tax services for a global user
                base. Recognizing the absence of a reliable tax solution within the rapidly evolving cryptoeconomy, our
                goal is to bridge that gap by leveraging our extensive expertise.</p>

            <p class="text-center mt-6 text-md md:text-lg lg:text-xl">we are recognized by</p>
            <div class="flex justify-center items-center mt-2">
                <img src="/start-up-india.png" class="items-center " width="200px">
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
    left: -35px;
    width: 600px;
    height: 40px;
    background-image: url("underline.svg");
    background-size: cover;
}



@media (max-width:1280px) {

    .underline-text {
        position: relative;
    }

    .underline-text::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: -25px;
        width: 440px;
        height: 30px;
        background-image: url("underline.svg");
        background-size: cover;
    }

}

@media (max-width:1024px) {

    .underline-text {
        position: relative;
    }

    .underline-text::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: -25px;
        width: 350px;
        height: 30px;
        background-image: url("underline.svg");
        background-size: cover;
    }

}

@media (max-width:768px) {

    .underline-text {
        position: relative;
    }

    .underline-text::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: -15px;
        width: 330px;
        height: 30px;
        background-image: url("underline.svg");
        background-size: cover;
    }

}

@media (max-width:640px) {

    .underline-text {
        position: relative;
    }

    .underline-text::after {
        content: "";
        position: absolute;
        bottom: -20px;
        left: -15px;
        width: 280px;
        height: 30px;
        background-image: url("underline.svg");
        background-size: cover;
    }

}
</style>