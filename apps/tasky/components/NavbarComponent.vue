<template>
    <div :class="['flex justify-between border-b-2 ', indexNavbar, aboutNavbar]">
        <div class="flex pl-10">
            <a href="/">
                <img src="../public/navbarPictures/Tasky.jpg" class="w-20 p-4 transition ease-in-out delay-150 duration-300 hover:scale-110" style="border-radius:32px">
            </a>
            <button :class="['text-3xl self-center font-roboto text-about-150', indexDefaultText, aboutDefaultText]">Tasky</button>
        </div>
        <div class="text-lg py-3 pr-4">
            <a href="/features">
                <button :class="['p-4 hover:rounded-xl', indexNavbarButtons, aboutNavbarButtons]">
                    Features
                </button>
            </a>
            <a href="/getting-started">
                <button :class="['p-4 hover:rounded-xl', indexNavbarButtons, aboutNavbarButtons]">
                    Getting started
                </button>
            </a>
            <a href="/about">
                <button :class="['p-4 hover:rounded-xl', indexNavbarButtons, aboutNavbarButtons]">
                    About
                </button>
            </a>
            <a href="/access/login">
                <button :class="['p-4 hover:rounded-xl', indexNavbarButtons, aboutNavbarButtons]">
                    Login
                </button>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const indexNavbar = computed(() => {
    return route.name === 'index'
        ? 'border-index-200 bg-index-50'
        : '';
});
const indexNavbarButtons = computed(() => {
    return route.name === 'index'
        ? `${indexDefaultText.value} hover:text-index-150 hover:bg-index-200`
        : '';
})
const indexDefaultText = computed(() => {
    return route.name === 'index'
        ? 'text-index-250'
        : '';
})

const aboutNavbar = computed (()=>{
    return route.name === 'about'
    ? 'border-about-150 bg-about-50'
    : ''
})
const aboutNavbarButtons = computed(()=>{
    return route.name === 'about'
    ? `${aboutDefaultText.value} hover:text-about-50 hover:bg-about-150`
    : ''
})
const aboutDefaultText = computed(()=>{
    return route.name === 'about'
    ? 'text-about-150'
    : ''
})
</script>