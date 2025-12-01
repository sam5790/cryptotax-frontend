<template>
    <div class="flex flex-col justify-center items-center bg-gray-50">
        <h2 class="text-center text-3xl md:text-4xl font-semibold mb-3 md:my-7">Our <span
                class="text-teal-500 underline-text">Founders</span></h2>
    </div>
    <div class="bg-gray-50 p-10 grid grid-cols-1 md:grid-cols-3 place-items-center">
        <div class=" md:w-[300px] md:h-[600px]">
            <img src="/jeff.png">
            <div class="p-3 flex flex-col justify-center items-center">
                <h2 class="text-3xl font-semibold">Jeff Neumeister</h2>
                <p>Partner</p>
                <p>MA, MAcc, MBA, MS2</p>

                <img src="/lnkdn.png" class="w-10 mt-3">

            </div>

        </div>
        <div class="md:w-[300px] md:h-[600px]">
            <img src="/abhinav.png">
            <div class="p-3 flex flex-col justify-center items-center">
                <h2 class="text-3xl font-semibold">Abhinav Soomaney</h2>
                <p>Managing Partner</p>
                <p>CFI, MBA, MCom, BMS</p>

                <img src="/lnkdn.png" class="w-10 mt-3">

            </div>
        </div>
        <div class="md:w-[300px] md:h-[600px]">
            <img src="/ashish.png">
            <div class="p-3 flex flex-col justify-center items-center">
                <h2 class="text-3xl font-semibold">Ashish Soomaney</h2>
                <p>Partner</p>
                <p>MBA, MPA</p>

                <img src="/lnkdn.png" class="w-10 mt-3">

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
    bottom: -20px;
    left: -25px;
    width: 200px;
    height: 40px;
    background-image: url("underline-new-user.png");
    background-size: cover;
}
</style>