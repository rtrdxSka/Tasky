<template>
  <div class="flex w-full flex-col justify-between bg-index-150/20">
    <img src="../public/Unlogged/mainPictures/mainFlower.png" class="absolute right-0 z-0">
    <div class="flex justify-between pb-64 pt-24 z-10 rounded-3xl max-xl:flex-col max-xl:pt-0 max-md:pb-48">
      <div class="z-10 pl-48 flex flex-col gap-12 max-xl:items-center max-xl:px-0 max-xl:text-center">
        <h1 class="text-6xl pt-24 text-index-300 max-md:text-5xl">Tasky</h1>
        <h2 class="w-96 text-4xl text-index-300 max-md:text-2xl max-md:w-80"> Organize and complete daily tasks while contributing to a greener
          planet.
          With every task you check off, take one step closer to sustainable living and environmental impact. </h2>
      </div>
      <div class="flex flex-col items-center pt-24 gap-5 w-3/6 pr-24 max-xl:w-full max-xl:px-10 max-md:h-96">
        <h1 class="text-5xl text-index-300 max-md:text-4xl">Our Impact</h1>
        <UtilsCarousel />
      </div>
    </div>
    <div class="flex justify-between pb-28 max-xl:flex-col max-xl:pt-20 max-md:pt-0">
      <div class="z-10 flex flex-col pl-32 gap-20 max-xl:pl-0 max-xl:items-center">
        <h1 class="text-6xl  text-index-250 pb-4 max-md:text-5xl">Why Tasky?</h1>
        <div class="bg-index-200 w-96 rounded-xl flex items-center max-md:w-80">
          <img src="../public/Unlogged/mainPictures/note.png" class="p-6 max-xl:p-4">
          <h2 class="text-xl text-center pr-4 text-index-100">Tasky helps you organize your day to day life.</h2>
        </div>
        <div class="bg-index-200 w-96 rounded-xl flex items-center max-md:w-80">
          <img src="../public/Unlogged/mainPictures/plant.png" class="p-6 max-xl:p-4 ">
          <h2 class="text-xl text-center pr-4 text-index-100">You save the planet by using our app.</h2>
        </div>
        <div class="bg-index-200 w-96 rounded-xl flex items-center max-md:w-80">
          <img src="../public/Unlogged/mainPictures/www.png" class="p-6 max-xl:p-4">
          <h2 class="text-xl text-center pr-4 text-index-100">Cross-platform accessability.</h2>
        </div>
      </div>
      <div class="flex flex-col justify-center w-1/2 max-xl:w-screen">
        <img src="../public/Unlogged/mainPictures/laptop.webp" class="pr-32 pt-32 max-xl:px-24 max-md:px-5">
        <img src="../public/Unlogged/mainPictures/bush.png" class="absolute left-0 h-3/4 max-xl:h-3/6 max-md:pt-14">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>