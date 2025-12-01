<template>
    <div class="bg-[linear-gradient(100deg,rgb(240,240,252)_11.73%,rgba(240,240,252,0)_104.43%)] p-4">
        <div class="flex flex-col justify-center items-center  p-10">
            <h2 class=" text-3xl md:text-4xl text-center font-semibold ">Reasons to use <span
                    class="underline-text">CryptoTax</span></h2>
            <p class="text-center max-w-[400px] mx-auto mt-5 text-gray-500">Here are six reasons for you to choose us
                for your
                Crypto currency taxes.</p>
        </div>
        <div class="grid grid-cols-2  text-xl font-semibold">
            <div class=" flex justify-center p-5">
                <img src="">
                <p class=" ">Experience with crypto audits</p>
            </div>
            <div class=" flex justify-center p-5">
                <img src="">
                <p class="text-xl">Transfer and Tracking cost basis</p>

            </div>

            <div class=" flex justify-center p-5">
                <img src="">
                <p class="text-xl">Timely documentation & record keeping of all trades</p>
            </div>
            <div class=" flex justify-center p-5">
                <img src="">
                <p class="text-xl">Tax audit/income tax notice!</p>
            </div>
            <div class=" flex justify-center p-5">
                <img src="">
                <p class="text-xl">Expertise with Crypto Tax Laws</p>
            </div>
            <div class=" flex justify-center p-5">
                <img src="">
                <p class="text-xl">Audit Support</p>
            </div>

        </div>
        <div class="flex justify-center">
            <button class="mt-8 px-6 py-2 bg-teal-500 rounded-3xl text-white ">Sign Up</button>
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
    left: -20px;
    width: 250px;
    height: 30px;
    background-image: url("welcome.png");
    background-size: cover;
}

@media(max-width:720px) {
    .underline-text::after {
        left: -20px;
        width: 200px;
        height: 20px;
        bottom: -10px
    }
}
</style>