<template>
    <div :class="['flex  h-28 w-full border-t-2 justify-between z-10 max-xl:flex-col max-xl:items-center max-xl:h-full', indexFooter, aboutFooter, gettingStartedFooter, featuresFooter]">
        <div class="flex pt-3 pl-4 gap-2 max-xl:gap-10 max-xl:px-5">
            <img src="../public/navbarPictures/Tasky.jpg" class="w-20 h-20 p-4 self-center max-xl:hidden" style="border-radius:32px">
            <div class="flex flex-col pl-10 max-xl:p-0">
                <p style="font-size:15px">Useful Information</p>
                <p :class="['text-xs hover:cursor-pointer pt-1', indexFooterText, aboutFooterText, gettingStartedFooterText, featuresFooterText]">Support</p>
                <p :class="['text-xs hover:cursor-pointer', indexFooterText, aboutFooterText, gettingStartedFooterText, featuresFooterText]">Often asked questions</p>
            </div>
            <div class="flex flex-col pl-10 max-xl:p-0">
                <p style="font-size:15px">About us</p>
                <p :class="['text-xs hover:cursor-pointer pt-1', indexFooterText, aboutFooterText, gettingStartedFooterText, featuresFooterText]">About Tasky</p>
                <p :class="['text-xs hover:cursor-pointer', indexFooterText, aboutFooterText, gettingStartedFooterText, featuresFooterText]">Careers</p>
                <p :class="['text-xs hover:cursor-pointer', indexFooterText, aboutFooterText, gettingStartedFooterText, featuresFooterText]">Privacy & Policy</p>
            </div>
            <div class="flex flex-col pl-10 max-xl:p-0">
                <p style="font-size:15px">Contacts</p>
                <p class="text-xs text-neutral-500 pt-1">Monday - Friday</p>
                <p class="text-xs text-neutral-500">08 AM - 19 PM UTC+02:00</p>
                <p class="text-xs text-neutral-500">+359 123456789</p>
                <p class="text-xs text-neutral-500">tasky@gmail.com</p>
            </div>
        </div>
        <div class="flex pr-8 items-center gap-4 max-xl:py-4">
            <a href="google.com">
                <img src="../public/footerPictures/linkedin.png"></a>
            <a href="google.com">
                <img src="../public/footerPictures/youtube.png"></a>
            <a href="google.com">
                <img src="../public/footerPictures/pinterest.png"></a>
            <a href="google.com">
                <img src="../public/footerPictures/instagram.png"></a>
            <a href="google.com">
                <img src="../public/footerPictures/facebook.png"></a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

//index
const indexFooterText = computed(()=>{
    return route.name === 'index'
    ? 'hover:text-index-200'
    : ''
})
const indexFooter = computed(()=>{
    return route.name === 'index'
    ? 'border-index-200 bg-index-50'
    : ''
})

//about
const aboutFooterText = computed(()=>{
    return route.name === 'about'
    ? 'hover:text-about-100'
    : ''
})
const aboutFooter = computed(()=> {
    return route.name === 'about'
    ? 'border-about-200 bg-about-50'
    : ''
})

//getting-started
const gettingStartedFooterText = computed(()=>{
    return route.name === 'getting-started'
    ? 'hover:text-gettingStarted-100'
    : ''
})
const gettingStartedFooter = computed(()=> {
    return route.name === 'getting-started'
    ? 'border-gettingStarted-200 bg-gettingStarted-50'
    : ''
})

//features
const featuresFooterText = computed(()=>{
    return route.name === 'features'
    ? 'hover:text-features-100'
    : ''
})
const featuresFooter = computed(()=> {
    return route.name === 'features'
    ? 'border-features-200 bg-features-50'
    : ''
})
</script>