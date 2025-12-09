<template>
    <div class="flex flex-col justify-center items-center bg-gray-50 pt-8 md:pt-12">
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-7">
            Our <span class="text-teal-500 underline-text">Founders</span>
        </h2>
    </div>
    <div class="bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="/jeff.png" class="w-full h-auto object-cover">
                <div class="p-4 sm:p-5 md:p-6 flex flex-col justify-center items-center">
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Jeff Neumeister</h2>
                    <p class="text-teal-600 font-medium mt-1 text-sm sm:text-base">Partner</p>
                    <p class="text-gray-600 text-xs sm:text-sm md:text-base">MA, MAcc, MBA, MS2</p>
                    <img src="/lnkdn.png" class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mt-3">
                </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="/abhinav.png" class="w-full h-auto object-cover">
                <div class="p-4 sm:p-5 md:p-6 flex flex-col justify-center items-center">
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Abhinav Soomaney</h2>
                    <p class="text-teal-600 font-medium mt-1 text-sm sm:text-base">Managing Partner</p>
                    <p class="text-gray-600 text-xs sm:text-sm md:text-base">CFI, MBA, MCom, BMS</p>
                    <img src="/lnkdn.png" class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mt-3">
                </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="/ashish.png" class="w-full h-auto object-cover">
                <div class="p-4 sm:p-5 md:p-6 flex flex-col justify-center items-center">
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-center">Ashish Soomaney</h2>
                    <p class="text-teal-600 font-medium mt-1 text-sm sm:text-base">Partner</p>
                    <p class="text-gray-600 text-xs sm:text-sm md:text-base">MBA, MPA</p>
                    <img src="/lnkdn.png" class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mt-3">
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <style scoped>
.underline-text {
    position: relative;
}

.underline-text::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 35px;
    background-image: url("underline-new-user.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

@media (max-width: 640px) {
    .underline-text::after {
        width: 150px;
        height: 30px;
        bottom: -12px;
    }
}

@media (min-width: 768px) {
    .underline-text::after {
        width: 200px;
        height: 40px;
        bottom: -18px;
    }
}

@media (min-width: 1024px) {
    .underline-text::after {
        width: 220px;
        height: 45px;
        bottom: -20px;
    }
}
</style> -->

<style scoped>
.underline-text {
    position: relative;
}

.underline-text::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: -25px;
    width: 210px;
    height: 40px;
    background-image: url("underline-new-user.png");
    background-size: cover;
}

@media (max-width:767px) {

    .underline-text {
        position: relative;
    }

    .underline-text::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: -20px;
        width: 180px;
        height: 30px;
        background-image: url("welcome.png");
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
        bottom: -10px;
        left: -20px;
        width: 150px;
        height: 30px;
        background-image: url("underline-new-user.png");
        background-size: cover;
    }

}

</style>