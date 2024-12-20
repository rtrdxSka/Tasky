<template>
  <div class="flex flex-col justify-between min-h-screen">
    <NavbarComponent v-if="!userId" />
    <LoggedInNavbarComponent v-else />
    <div class="flex">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, type Ref } from 'vue';
const userId: Ref<string | null> = ref(null);
onMounted(() => {
  userId.value = localStorage.getItem('userId');
});
</script>