<template>
    <div class="p-3 container mx-auto">
        <h2 class="text-2xl md:text-3xl md:text-3xl text-center font-semibold"><span
                class="underline-text">Features</span></h2>

<div class="grid grid-cols-6  gap-8 p-10">
<div>
    <button class="bg-teal-500">
    <img src="/feature1.png" />
    </button>
</div>
<div class="">
    <button class="">
        <img src="/feature2.png"/>
        </button>
</div>
</div>

        <div class=" flex flex-col justify-center items-center text-center p-10 ">
            <p class="text-xl font-medium p-6">

                Rapid AI progress is revolutionizing industries, from healthcare to finance. Ethical concerns arise,
                requiring a balance between innovation and accountability, as AI shapes our workforce, services, and
                lives.
            </p>
            <p class="text-center ">Rapid AI progress is revolutionizing industries, from healthcare to finance. Ethical concerns arise,
                requiring a balance between innovation and accountability, as AI shapes our workforce, services, and
                lives.Rapid AI progress is revolutionizing industries, from healthcare to finance. Ethical concerns
                arise, requiring a balance between innovation and accountability, as AI shapes our workforce, services,
                and lives.</p>
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
    left: -15px;
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
        bottom: -10px
    }
}
</style>