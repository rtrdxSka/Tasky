<template>
    <div class="carousel-container flex px-36">
      <n-carousel show-arrow autoplay>
        <img
        class="carousel-img rounded-xl"
        src="../../public/CarouselImages/Carousel1.webp"
      >
      <img
        class="carousel-img rounded-xl"
        src="../../public/CarouselImages/Carousel2.webp"
      >
      <img
        class="carousel-img rounded-xl"
        src="../../public/CarouselImages/Carousel3.webp"
      >
      <img
        class="carousel-img rounded-xl"
        src="../../public/CarouselImages/Carousel4.webp"
      >
      <img
        class="carousel-img rounded-xl"
        src="../../public/CarouselImages/Carousel5.webp"
      >
      <img
        class="carousel-img rounded-xl"
        src="../../public/CarouselImages/Carousel6.webp"
      >
      <img
        class="carousel-img rounded-xl"
        src="../../public/CarouselImages/Carousel7.webp"
      >
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ 'is-active': currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
  </template>
  
  <script lang="ts">
  import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    components: {
      ArrowBack,
      ArrowForward
    }
  })
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    width: 100%;
    max-width: 1200px; /* Adjust based on your needs */
    margin: 0 auto;
  }
  
  .carousel-img {
    width: 100%;
    height: 500px; /* Increased height for better visibility */
    object-fit: cover;
  }
  
  .custom-arrow {
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 20px;
    z-index: 10;
    gap: 8px; /* Added gap between buttons */
  }
  
  .custom-arrow button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px; /* Slightly larger buttons */
    height: 32px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3); /* Darker background for better visibility */
    border: none;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  
  .custom-arrow button:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
  
  .custom-arrow button:active {
    transform: scale(0.95);
  }
  
  .custom-dots {
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 10;
    list-style: none;
    gap: 6px; /* Consistent spacing between dots */
  }
  
  .custom-dots li {
    display: inline-block;
    width: 12px;
    height: 4px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  
  .custom-dots li.is-active {
    width: 40px;
    background-color: #fff;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .carousel-img {
      height: 300px;
    }
    
    .custom-arrow {
      bottom: 15px;
      right: 15px;
    }
    
    .custom-arrow button {
      width: 28px;
      height: 28px;
    }
    
    .custom-dots {
      bottom: 15px;
      left: 15px;
    }
  }
  </style>