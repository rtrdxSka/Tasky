<template>
  <n-carousel 
    effect="card" prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
    next-slide-style="transform: translateX(50%) translateZ(-800px);" class="h-96 pt-10" :show-dots="false">
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img rounded-xl" src="../../public/CarouselImages/Carousel1.webp">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img rounded-xl" src="../../public/CarouselImages/Carousel2.webp">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img rounded-xl" src="../../public/CarouselImages/Carousel3.webp">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img rounded-xl" src="../../public/CarouselImages/Carousel4.webp">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img rounded-xl" src="../../public/CarouselImages/Carousel5.webp">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img rounded-xl" src="../../public/CarouselImages/Carousel6.webp">
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img class="carousel-img rounded-xl" src="../../public/CarouselImages/Carousel7.webp">
    </n-carousel-item>
  </n-carousel>
</template>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%; object-fit: cover;
}
</style>