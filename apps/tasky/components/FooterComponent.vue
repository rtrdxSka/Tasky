<template>
    <div :class="['flex  h-28 w-full border-t-2 justify-between z-10', indexFooter, aboutFooter]">
        <div class="flex pt-3 pl-4 gap-2">
            <img src="../public/navbarPictures/Tasky.jpg" class="w-20 h-20 p-4 self-center" style="border-radius:32px">
            <div class="flex flex-col pl-10 ">
                <p style="font-size:15px">Useful Information</p>
                <p :class="['text-xs hover:cursor-pointer pt-1', indexFooterText, aboutFooterText]">Support</p>
                <p :class="['text-xs hover:cursor-pointer', indexFooterText, aboutFooterText]">Often asked questions</p>
            </div>
            <div class="flex flex-col pl-10">
                <p style="font-size:15px">About us</p>
                <p :class="['text-xs hover:cursor-pointer pt-1', indexFooterText, aboutFooterText]">About Tasky</p>
                <p :class="['text-xs hover:cursor-pointer', indexFooterText, aboutFooterText]">Careers</p>
                <p :class="['text-xs hover:cursor-pointer', indexFooterText, aboutFooterText]">Privacy & Policy</p>
            </div>
            <div class="flex flex-col pl-10">
                <p style="font-size:15px">Contacts</p>
                <p class="text-xs text-neutral-500 pt-1">Monday - Friday</p>
                <p class="text-xs text-neutral-500">08 AM - 19 PM UTC+02:00</p>
                <p class="text-xs text-neutral-500">+359 123456789</p>
                <p class="text-xs text-neutral-500">tasky@gmail.com</p>
            </div>
        </div>
        <div class="flex pr-8 items-center gap-4">
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
</script>