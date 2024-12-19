<template>
    <div 
    :class="[
        'relative flex justify-between border-b-2 lg:flex-row max-lg:flex-col max-lg:items-center max-lg:text-center',
        indexNavbar,
        aboutNavbar,
        gettingStartedNavbar,
        featuresNavbar,
        defaultNavbar,
    ]">
        <div class="flex items-center justify-between w-full lg:w-auto px-4 lg:px-10">
            <div class="flex items-center">
                <NuxtLink to="/">
                    <img 
                        src="../public/navbarPictures/Tasky.jpg"
                        class="w-20 p-4 transition ease-in-out delay-150 duration-300 hover:scale-110"
                        style="border-radius:32px">
                </NuxtLink>
                <button 
                :class="[
                    'text-3xl self-center font-roboto text-about-150',
                    indexDefaultText,
                    aboutDefaultText,
                    defaultDefaultText
                ]">
                    Tasky
                </button>
            </div>
            <!-- Burger Menu Button -->
            <button 
                class="lg:hidden p-2 hover:bg-gray-100 rounded-lg" aria-label="Toggle Menu"
                @click="isMenuOpen = !isMenuOpen">
                <svg 
                    v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                    v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Navigation Links -->
        <div 
        :class="[
            'text-lg py-3 lg:pr-4 w-full lg:w-auto',
            { 'hidden lg:block': !isMenuOpen }
        ]">
            <div class="flex lg:flex-row flex-col items-center">
                <NuxtLink to="/features">
                    <button 
                    :class="[
                        'p-4 hover:rounded-xl w-full',
                        indexNavbarButtons,
                        aboutNavbarButtons,
                        gettingStartedNavbarButtons,
                        featuresNavbarButtons,
                        defaultNavbarButtons
                    ]">
                        Features
                    </button>
                </NuxtLink>
                <NuxtLink to="/getting-started">
                    <button 
                    :class="[
                        'p-4 hover:rounded-xl w-full',
                        indexNavbarButtons,
                        aboutNavbarButtons,
                        gettingStartedNavbarButtons,
                        featuresNavbarButtons,
                        defaultNavbarButtons
                    ]">
                        Getting started
                    </button>
                </NuxtLink>
                <NuxtLink to="/about">
                    <button 
                    :class="[
                        'p-4 hover:rounded-xl w-full',
                        indexNavbarButtons,
                        aboutNavbarButtons,
                        gettingStartedNavbarButtons,
                        featuresNavbarButtons,
                        defaultNavbarButtons
                    ]">
                        About
                    </button>
                </NuxtLink>
                <NuxtLink to="/access/login">
                    <button 
                    :class="[
                        'p-4 hover:rounded-xl w-full',
                        indexNavbarButtons,
                        aboutNavbarButtons,
                        gettingStartedNavbarButtons,
                        featuresNavbarButtons,
                        defaultNavbarButtons
                    ]">
                        Login
                    </button>
                </NuxtLink>
                <NuxtLink to="/tasks">
                    <button 
                    :class="[
                        'p-4 hover:rounded-xl w-full',
                        indexNavbarButtons,
                        aboutNavbarButtons,
                        gettingStartedNavbarButtons,
                        featuresNavbarButtons,
                        defaultNavbarButtons
                    ]">
                        Tasks
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const routes = ['index', 'about', 'getting-started', 'features','tasks'] 

onMounted(() => {
    window.addEventListener('click', (e: MouseEvent) => {
        const nav = document.querySelector('nav');
        const target = e.target as Node;
        if (nav && !nav.contains(target)) {
            isMenuOpen.value = false;
        }
    });
});

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
});
const indexDefaultText = computed(() => {
    return route.name === 'index'
    ? 'text-index-250'
    : '';
});

//about
const aboutNavbar = computed(() => {
    return route.name === 'about'
    ? 'border-about-150 bg-about-50'
    : '';
});
const aboutNavbarButtons = computed(() => {
    return route.name === 'about'
    ? `${aboutDefaultText.value} hover:text-about-50 hover:bg-about-150`
    : '';
});
const aboutDefaultText = computed(() => {
    return route.name === 'about'
    ? 'text-about-150'
    : '';
});

//getting-started
const gettingStartedNavbar = computed(() => {
    return route.name === 'getting-started'
    ? 'border-gettingStarted-150 bg-gettingStarted-50'
    : '';
});
const gettingStartedNavbarButtons = computed(() => {
    return route.name === 'getting-started'
    ? `${gettingStartedDefaultText.value} hover:text-gettingStarted-50 hover:bg-gettingStarted-150`
    : '';
});
const gettingStartedDefaultText = computed(() => {
    return route.name === 'getting-started'
    ? 'text-gettingStarted-150'
    : '';
});

//features
const featuresNavbar = computed(() => {
    return route.name === 'features'
    ? 'border-features-150 bg-features-50'
    : '';
});
const featuresNavbarButtons = computed(() => {
    return route.name === 'features'
    ? `${featuresDefaultText.value} hover:text-features-50 hover:bg-features-150`
    : '';
});
const featuresDefaultText = computed(() => {
    return route.name === 'features'
    ? 'text-features-150'
    : '';
});

//default
const defaultNavbar = computed(() => {
    return routes.some((r) => r === route.name)
    ? ''
    : 'border-index-200 bg-index-50';
});
const defaultNavbarButtons = computed(() => {
    return routes.some((r) => r === route.name)
    ? ``
    : `${indexDefaultText.value} hover:text-index-150 hover:bg-index-200`;
});
const defaultDefaultText = computed(() => {
    return routes.some((r) => r === route.name)
    ? ''
    : 'text-index-250';
});

</script>