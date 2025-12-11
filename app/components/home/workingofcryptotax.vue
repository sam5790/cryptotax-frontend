<template>
  <div class="bg-gray-50 p-6">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-3xl text-center md:text-4xl font-semibold">
        <div class="flex gap-3 flex-wrap">
          How
          <div class="text-[#4aabab]">
            Cryptotax
            <CurvedLine />
          </div>
          works ?
        </div>
      </h2>
      <p class="text-md md:text-xl text-gray-500 mt-3 mb-6 text-center">
        Discover how we help you simplify your crypto taxes.
      </p>
      <div class="relative w-full max-w-4xl mx-auto">
        <button
          v-if="!isPlaying"
          @click="playVideo"
          class="absolute inset-0 flex items-center justify-center"
        >
          <div class="bg-white rounded-full shadow-lg">
            <svg
              class="w-16 h-16 text-[#4AABAB]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>

        <video
          ref="videoRef"
          class="rounded-2xl w-full object-cover"
          style="max-height: 400px"
          controls
        >
          <source
            src="https://cryptotax-videos.s3.ap-south-1.amazonaws.com/cryptotax-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</template>
<script setup>
const isPlaying = ref(false);
const videoRef = ref(null);

const playVideo = () => {
  isPlaying.value = true;
  videoRef.value.play();
};
</script>
