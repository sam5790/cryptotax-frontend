<template>
    <div class="p-3 container mx-auto">
        <h2 class="text-2xl md:text-4xl md:text-3xl text-center font-semibold md:py-8"><span
                class="underline-text">Features</span></h2>

<div class="grid grid-cols-6  gap-8 p-6 md:py-10">
<div>
    <button class="bg-teal-600">
    <img src="/feature1.png" />
    </button>
</div>
<div class="flex justify-center">
    <button class="relative">
        <img src="/feature2.png" />
        <img src="/feature7.png" class="absolute bottom-10 left-6"/>
        </button>
</div>
<div class="flex justify-center">
    <button class="">
        <img src="/feature3.png"/>
        </button>
</div>
<div class="flex justify-center">
    <button class="">
        <img src="/feature4.png"/>
        </button>
</div>
<div class="flex justify-center">
    <button class="">
        <img src="/feature5.png"/>
        </button>
</div>
<div class="flex justify-center">
    <button class="">
        <img src="/feature6.png"/>
        </button>
</div>
</div>

        <div class=" flex flex-col justify-center items-center text-center md:p-10 ">
            <p class="text-md md:text-xl font-medium md:p-6">

                Rapid AI progress is revolutionizing industries, from healthcare to finance. Ethical concerns arise,
                requiring a balance between innovation and accountability, as AI shapes our workforce, services, and
                lives.
            </p>
            <p class="text-center text-md">Rapid AI progress is revolutionizing industries, from healthcare to finance. Ethical concerns arise,
                requiring a balance between innovation and accountability, as AI shapes our workforce, services, and
                lives.Rapid AI progress is revolutionizing industries, from healthcare to finance. Ethical concerns
                arise, requiring a balance between innovation and accountability, as AI shapes our workforce, services,
                and lives.</p>
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
    left: -15px;
    width: 200px;
    height: 30px;
    background-image: url("welcome.png");
    background-size: cover;
}

@media (max-width: 640px) {
    .underline-text::after {
        left: -10px;
        width: 150px;
        height: 20px;
        bottom: -10px
    }
}
</style>