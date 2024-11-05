<template>
    <div  :class="['flex justify-between border-b-2', indexNavbar, ]"  >
        <div class="flex pl-10">
            <img src="../public/navbarPictures/Tasky.jpg" class="w-20 p-4 transition ease-in-out delay-150 duration-300 hover:scale-110" style="border-radius:32px">
            <button :class="['text-3xl self-center text-primary-200 font-roboto', indexDefaultText]">Tasky</button>
        </div>
        <div class="text-lg py-3 pr-4">
            <button :class="['p-4 hover:rounded-xl', indexNavbarButtons]">
                Features
            </button>
            <button :class="['p-4 hover:rounded-xl', indexNavbarButtons]">
                Getting started
            </button>
            <button :class="['p-4 hover:rounded-xl', indexNavbarButtons]">
                About
            </button>
            <button :class="['p-4 hover:rounded-xl', indexNavbarButtons]">
                Login
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const indexNavbar = computed(() => {
  return route.name === 'index'
    ? 'border-primary-150 bg-primary-50'
    : '';
});
const indexNavbarButtons = computed(()=>{
    return route.name === 'index'
    ? `${indexDefaultText.value} hover:text-primary-100 hover:bg-primary-150`
    : '';
})
const indexDefaultText = computed(()=>{
    return route.name === 'index'
    ? 'text-primary-200'
    : '';
})


</script>