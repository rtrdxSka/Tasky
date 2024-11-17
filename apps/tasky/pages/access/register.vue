<template>
  <div class="flex w-full flex-col bg-index-150/20 items-center justify-center h-screen">
    <div class="bg-index-250 text-index-50 w-80 rounded-md pl-8 z-10">
      <h1 class="pt-9 text-3xl">Register</h1>
      <div class="flex flex-col w-56 gap-2 pt-6">
        <h2 class="text-md">Username</h2>
        <input class="rounded-lg h-7 text-index-300 pl-2">
      </div>
      <div class="flex flex-col w-56 gap-2 pt-6">
        <h2 class="text-md">E-mail</h2>
        <input class="rounded-lg h-7 text-index-300 pl-2">
      </div>
      <div class="flex flex-col w-56 gap-2 pt-6">
        <h2 class="text-md">Password</h2>
        <input class="rounded-lg h-7 text-index-300 pl-2" type="password">
      </div>
      <div class="flex flex-col w-56 gap-2 pt-6">
        <h2 class="text-md">Confirm Password</h2>
        <input class="rounded-lg h-7 text-index-300 pl-2" type="password">
      </div>
      <div class="flex flex-col w-fit pt-9 ">
        <button class="bg-index-150 text-index-250 rounded px-5 text-xl pb-1">Register</button>
      </div>
      <div class="pb-14 pt-2">
        <h2>Already have an account? Login <NuxtLink to="/access/login" class="text-index-150">here!</NuxtLink></h2>
      </div>
    </div>
    <img src="../../public/AccessImages/Access1.jpg" class="absolute z-0 rounded-xl w-72 left-16 top-2/3 max-xl:w-52 max-lg:hidden">
    <img src="../../public/AccessImages/Access2.jpg" class="absolute z-0 rounded-xl w-72 left-1/4 top-1/4 max-xl:w-52 max-lg:hidden">
    <img src="../../public/AccessImages/Access3.jpg" class="absolute z-0 rounded-xl w-72 right-1/4 top-2/3 max-xl:w-52 max-lg:hidden">
    <img src="../../public/AccessImages/Access4.jpg" class="absolute z-0 rounded-xl w-72 right-16 top-1/4 max-xl:w-52 max-lg:hidden">
  </div>
</template>
  
<script lang="ts" setup>
  
</script>