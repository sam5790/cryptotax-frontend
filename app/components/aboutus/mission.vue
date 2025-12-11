<template>
    <div class="flex flex-col justify-center items-center bg-gray-50 p-3">
        <h2 class="text-center text-3xl md:text-4xl font-semibold mb-3">Our <span
                class="#4aabab underline-text">Mission</span></h2>
        <h2 class=" md:my-8 text-center text-teal-600 text-xl md:text-2xl font-semibold ">CryptoTax International PVT.
            LTD.</h2>
        <p class="text-center text-md md:text-lg lg:text-xl p-3 max-w-[1500px]">CryptoTax International Pvt. Ltd. is a
            one-stop solution for cryptocurrency taxes and has a physical presence in the United States and India. The
            company is managed by Abhinav Soomaney, who has over 5 years of experience assisting clients with crypto
            taxes having an MBA in finance & accounting, MCOM in auditing and commerce, & a bachelor's degree in
            management studies. Jeff Neumeister who is also a partner at CT, is a practising CPA having experience of
            over 19 years and specializes in the field of forensic accounting & taxes. CT is one of the first
            cryptocurrency tax accounting firms in India having over five years of crypto-tax calculation experience.
            Our team has assisted clients with crypto tax audits in the past and helped resolve notices with ease by
            presenting our in-house manual calculation process to the auditors. CryptoTax as a company has been featured
            with CNBC, economic times, money control and other media channels in the past to discuss and help solve the
            crypto tax conundrum in India.</p>
        <button class="mt-8 px-6 py-2 bg-teal-500 rounded-3xl text-white" @click="$router.push('/account')">Get Started</button>
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
    width: 170px;
    height: 40px;
    background-image: url("underline-new-user.png");
    background-size: cover;
}
</style>