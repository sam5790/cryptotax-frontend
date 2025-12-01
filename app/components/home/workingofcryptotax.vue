<template>
  <div class="bg-gray-50 p-6">
    <div class="flex flex-col justify-center items-center ">
      <h2 class="text-3xl text-center md:text-4xl font-semibold">How <span
          class="text-teal-500 underline-text">Cryptotax</span> works ?</h2>
      <p class="text-md  md:text-xl text-gray-500 my-6 text-center max-w-[400px]">Discover how we help you simplify
        your crypto taxes.</p>
      <video class="my-5 rounded-lg" controls>
        <source src="https://cryptotax-videos.s3.ap-south-1.amazonaws.com/cryptotax-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
  width: 200px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media (max-width: 640px) {
  .underline-text::after {
    left: -20px;
    width: 200px;
    height: 20px;
    bottom: -5px
  }


}
</style>
