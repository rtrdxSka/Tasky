<template>
    <div :class="['flex justify-between border-b-2', indexNavbar,]">
        <div class="flex pl-10">
            <a href="/">
                <img src="../public/navbarPictures/Tasky.jpg" class="w-20 p-4 transition ease-in-out delay-150 duration-300 hover:scale-110" style="border-radius:32px">
            </a>
            <button :class="['text-3xl self-center text-primary-200 font-roboto', indexDefaultText]">Tasky</button>
        </div>
        <div class="text-lg py-3 pr-4">
            <a href="/features">
                <button :class="['p-4 hover:rounded-xl', indexNavbarButtons]">
                    Features
                </button>
            </a>
            <a href="/getting-started">
                <button :class="['p-4 hover:rounded-xl', indexNavbarButtons]">
                    Getting started
                </button>
            </a>
            <a href="/about">
                <button :class="['p-4 hover:rounded-xl', indexNavbarButtons]">
                    About
                </button>
            </a>
            <a href="/access/login">
                <button :class="['p-4 hover:rounded-xl', indexNavbarButtons]">
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
        ? 'border-primary-150 bg-primary-50'
        : '';
});
const indexNavbarButtons = computed(() => {
    return route.name === 'index'
        ? `${indexDefaultText.value} hover:text-primary-100 hover:bg-primary-150`
        : '';
})
const indexDefaultText = computed(() => {
    return route.name === 'index'
        ? 'text-primary-200'
        : '';
})
</script>