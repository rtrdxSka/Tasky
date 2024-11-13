<template>
    <div
        :class="['flex justify-between border-b-2 max-xl:flex-col max-xl:items-center max-xl:text-center', indexNavbar, aboutNavbar, gettingStartedNavbar, featuresNavbar]">
        <div class="flex pl-10 max-xl:flex-col max-xl:px-0">
            <a href="/">
                <img 
                    src="../public/navbarPictures/Tasky.jpg"
                    class="w-20 p-4 transition ease-in-out delay-150 duration-300 hover:scale-110"
                    style="border-radius:32px">
            </a>
            <button
                :class="['text-3xl self-center font-roboto text-about-150', indexDefaultText, aboutDefaultText]">Tasky</button>
        </div>
        <div :class="['text-lg py-3 pr-4 max-xl:px-0']">
            <a href="/features">
                <button
                    :class="['p-4 hover:rounded-xl', indexNavbarButtons, aboutNavbarButtons, gettingStartedNavbarButtons, featuresNavbarButtons]">
                    Features
                </button>
            </a>
            <a href="/getting-started">
                <button
                    :class="['p-4 hover:rounded-xl', indexNavbarButtons, aboutNavbarButtons, gettingStartedNavbarButtons, featuresNavbarButtons]">
                    Getting started
                </button>
            </a>
            <a href="/about">
                <button
                    :class="['p-4 hover:rounded-xl', indexNavbarButtons, aboutNavbarButtons, gettingStartedNavbarButtons, featuresNavbarButtons]">
                    About
                </button>
            </a>
            <a href="/access/login">
                <button
                    :class="['p-4 hover:rounded-xl', indexNavbarButtons, aboutNavbarButtons, gettingStartedNavbarButtons, featuresNavbarButtons]">
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

//index
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

//about
const aboutNavbar = computed(() => {
    return route.name === 'about'
        ? 'border-about-150 bg-about-50'
        : ''
})
const aboutNavbarButtons = computed(() => {
    return route.name === 'about'
        ? `${aboutDefaultText.value} hover:text-about-50 hover:bg-about-150`
        : ''
})
const aboutDefaultText = computed(() => {
    return route.name === 'about'
        ? 'text-about-150'
        : ''
})

//getting-started
const gettingStartedNavbar = computed(() => {
    return route.name === 'getting-started'
        ? 'border-gettingStarted-150 bg-gettingStarted-50'
        : ''
})
const gettingStartedNavbarButtons = computed(() => {
    return route.name === 'getting-started'
        ? `${gettingStartedDefaultText.value} hover:text-gettingStarted-50 hover:bg-gettingStarted-150`
        : ''
})
const gettingStartedDefaultText = computed(() => {
    return route.name === 'getting-started'
        ? 'text-gettingStarted-150'
        : ''
})

//features
const featuresNavbar = computed(() => {
    return route.name === 'features'
        ? 'border-features-150 bg-features-50'
        : ''
})
const featuresNavbarButtons = computed(() => {
    return route.name === 'features'
        ? `${featuresDefaultText.value} hover:text-features-50 hover:bg-features-150`
        : ''
})
const featuresDefaultText = computed(() => {
    return route.name === 'features'
        ? 'text-features-150'
        : ''
})
</script>