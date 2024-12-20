<template>
    <div :class="[
        'relative flex justify-between border-b-2 lg:flex-row max-lg:flex-col max-lg:items-center max-lg:text-center',
        defaultNavbar,
    ]">
        <div class="flex items-center justify-between w-full lg:w-auto px-4 lg:px-10">
            <div class="flex items-center">
                <NuxtLink to="/">
                    <img src="../public/navbarPictures/Tasky.jpg"
                        class="w-20 p-4 transition ease-in-out delay-150 duration-300 hover:scale-110"
                        style="border-radius:32px">
                </NuxtLink>
                <button :class="[
                    'text-3xl self-center font-roboto text-about-150',
                    defaultDefaultText
                ]">
                    Tasky
                </button>
            </div>
            <!-- Burger Menu Button -->
            <button class="lg:hidden p-2 hover:bg-gray-100 rounded-lg" aria-label="Toggle Menu"
                @click="isMenuOpen = !isMenuOpen">
                <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Navigation Links -->
        <div :class="[
            'text-lg py-3 lg:pr-4 w-full lg:w-auto',
            { 'hidden lg:block': !isMenuOpen }
        ]">
            <div class="flex lg:flex-row flex-col items-center">
                <NuxtLink to="/tasks">
                    <button :class="[
                        'p-4 hover:rounded-xl w-full',
                        defaultNavbarButtons
                    ]">
                        Tasks
                    </button>
                </NuxtLink>
                <NuxtLink to="/create-task">
                    <button :class="[
                        'p-4 hover:rounded-xl w-full',
                        defaultNavbarButtons
                    ]">
                        Create Task
                    </button>
                </NuxtLink>
                <NuxtLink to="/access/login">
                    <button @click="logout" :class="[
                        'p-4 hover:rounded-xl w-full',
                        defaultNavbarButtons
                    ]">
                        Logout
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);

onMounted(() => {
    window.addEventListener('click', (e: MouseEvent) => {
        const nav = document.querySelector('nav');
        const target = e.target as Node;
        if (nav && !nav.contains(target)) {
            isMenuOpen.value = false;
        }
    });
});

const logout = () => {
    // Clear localStorage
    localStorage.removeItem('userId')
    localStorage.removeItem('otherData') // Remove any other relevant data if needed

    // Optionally, you can redirect to the login page or any other page
    router.push('/').then(() => {
        location.reload(); // Refresh the page after navigation
    });
}
//default
const defaultNavbar = computed(() => 'border-index-200 bg-index-50');

const defaultNavbarButtons = computed(() => 'text-index-250 hover:text-index-150 hover:bg-index-200');

const defaultDefaultText = computed(() => 'text-index-250');
</script>