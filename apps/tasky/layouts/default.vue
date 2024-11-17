<template>
    <div class="flex flex-col justify-between min-h-screen">
      <NavbarComponent/>
      <div class="flex">
        <slot/>
      </div>
      <FooterComponent/>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style scoped>
  </style>