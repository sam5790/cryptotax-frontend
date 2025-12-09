<template>
    <div class="flex flex-col justify-center items-center bg-gray-50 pt-8 md:pt-12">
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-7">
            Our <span class="text-teal-500 underline-text">Founders</span>
        </h2>
    </div>

    <div class="bg-gray-50 p-4">
        <div class="hidden lg:grid grid-cols-3 gap-10 place-items-center">
            <div class="max-w-md overflow-hidden">
                <img src="/jeff.png" class="w-full object-cover" />
                <div class="p-4 text-center">
                    <h2 class="text-2xl font-semibold">Jeff Neumeister</h2>
                    <p class="text-teal-600">Partner</p>
                    <p class="text-gray-600">MA, MAcc, MBA, MS2</p>
                </div>
            </div>

            <div class="max-w-md overflow-hidden">
                <img src="/abhinav.png" class="w-full object-cover" />
                <div class="p-4 text-center">
                    <h2 class="text-2xl font-semibold">Abhinav Soomaney</h2>
                    <p class="text-teal-600">Managing Partner</p>
                    <p class="text-gray-600">CFI, MBA, MCom, BMS</p>
                </div>
            </div>

            <div class="max-w-md overflow-hidden">
                <img src="/ashish.png" class="w-full object-cover" />
                <div class="p-4 text-center">
                    <h2 class="text-2xl font-semibold">Ashish Soomaney</h2>
                    <p class="text-teal-600">Partner</p>
                    <p class="text-gray-600">MBA, MPA</p>
                </div>
            </div>
        </div>

        <div class="relative lg:hidden overflow-hidden">
            <div ref="track" class="flex transition-transform duration-300"
                :style="{ transform: `translateX(-${index * 100}%)` }">
                <div class="min-w-full flex justify-center">
                    <div class="max-w-md">
                        <img src="/jeff.png" class="w-full object-cover" />
                        <div class="p-4 text-center">
                            <h2 class="text-xl font-semibold">Jeff Neumeister</h2>
                            <p class="text-teal-600">Partner</p>
                            <p class="text-gray-600">MA, MAcc, MBA, MS2</p>
                        </div>
                    </div>
                </div>

                <div class="min-w-full flex justify-center">
                    <div class="max-w-md">
                        <img src="/abhinav.png" class="w-full object-cover" />
                        <div class="p-4 text-center">
                            <h2 class="text-xl font-semibold">Abhinav Soomaney</h2>
                            <p class="text-teal-600">Managing Partner</p>
                            <p class="text-gray-600">CFI, MBA, MCom, BMS</p>
                        </div>
                    </div>
                </div>

                <div class="min-w-full flex justify-center">
                    <div class="max-w-md">
                        <img src="/ashish.png" class="w-full object-cover" />
                        <div class="p-4 text-center">
                            <h2 class="text-xl font-semibold">Ashish Soomaney</h2>
                            <p class="text-teal-600">Partner</p>
                            <p class="text-gray-600">MBA, MPA</p>
                        </div>
                    </div>
                </div>
            </div>

            <button @click="prev" class="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow justify-center flex opacity-80">
                <icon name="mdi:arrow-left" class="w-6 h-6 text-gray-600" />
            </button>
            <button @click="next" class="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow justify-center flex opacity-80">
                <icon name="mdi:arrow-right" class="w-6 h-6 text-gray-600" />
            </button>
        </div>
    </div>
</template>

<script setup>
const track = ref(null);
const index = ref(0);
const slidesCount = 3;

function next() {
  index.value = (index.value + 1) % slidesCount;
}

function prev() {
  index.value = (index.value - 1 + slidesCount) % slidesCount;
}
</script>

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