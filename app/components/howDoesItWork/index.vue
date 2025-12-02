<template>
<div class="p-10">
    <h2 class="text-4xl text-center font-semibold">How does it <span class="text-teal-500 underline-text">work?</span></h2>

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
  width: 150px;
  height: 30px;
  background-image: url("welcome.png");
  background-size: cover;
}

@media (max-width: 768px) {
  .underline-text::after {
    left: -10px;
    width: 100px;
    height: 20px;
    bottom: -10px
  }


}
</style>