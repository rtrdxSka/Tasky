<template>
  <div class="flex flex-col justify-between bg-primary-100/20">
    <img src="../public/mainPictures/mainFlower.png" class="absolute z-0">
    <div class="flex w-screen justify-between pb-52 z-10 bg-primary-50/60 rounded-3xl">
      <div class="z-10 pl-48 flex flex-col gap-24">
        <h1 class="text-6xl pt-24 text-primary-250">Tasky</h1>
        <h2 class="w-96 text-4xl text-primary-250"> Organize and complete daily tasks while contributing to a greener planet.
          With every task you check off, take one step closer to sustainable living and environmental impact. </h2>
      </div>
      <div class="flex flex-col items-center pt-24 gap-5">
        <h1 class="text-5xl text-primary-250">Our Impact</h1>
        <UtilsCarousel />
      </div>
    </div>
    <div class="flex justify-between pb-32">
      <div class="z-10 flex flex-col pl-32 gap-20 ">
        <h1 class="text-6xl pt-32 text-primary-200 pb-4">Why Tasky?</h1>
        <div class="bg-primary-150 w-96 rounded-xl flex items-center">
          <img src="../public/mainPictures/note.png" class="p-6">
          <h2 class="text-xl text-primary-50 text-center pr-4">Tasky helps you organize your day to day life.</h2>
        </div>
        <div class="bg-primary-150 w-96 rounded-xl flex items-center">
          <img src="../public/mainPictures/plant.png" class="p-6">
          <h2 class="text-xl text-primary-50 text-center pr-4">You save the planet by using our app.</h2>
        </div>
        <div class="bg-primary-150 w-96 rounded-xl flex items-center">
          <img src="../public/mainPictures/www.png" class="p-6">
          <h2 class="text-xl text-primary-50 text-center pr-4">Cross-platform accessability.</h2>
        </div>
      </div>
      <div class="flex flex-col pt-96">
        <img src="../public/mainPictures/laptop.webp" class="pr-32">
        <img src="../public/mainPictures/bush.png" class="absolute right-0" style="height:44rem">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>