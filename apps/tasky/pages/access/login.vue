<template>
  <div class="flex w-full flex-col bg-index-150/20 items-center justify-center h-screen">
    <div class="bg-index-250 text-index-50 w-80 rounded-md pl-8 z-10">
      <h1 class="pt-9 text-3xl">Login</h1>
      <form @submit.prevent="loginUser" class="flex flex-col gap-6">
        <div class="flex flex-col w-56 gap-2">
          <label for="email" class="text-md">E-mail</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="rounded-lg h-7 text-index-300 pl-2"
            required
          />
        </div>
        <div class="flex flex-col w-56 gap-2">
          <label for="password" class="text-md">Password</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            class="rounded-lg h-7 text-index-300 pl-2"
            required
          />
        </div>
        <div class="flex flex-col w-fit pt-4">
          <button type="submit" class="bg-index-150 text-index-250 rounded px-5 text-xl pb-1">
            Login
          </button>
        </div>
      </form>
    </div>
    <img src="../../public/AccessImages/Access1.jpg" class="absolute z-0 rounded-xl w-72 left-16 top-2/3 max-xl:w-52 max-lg:hidden">
    <img src="../../public/AccessImages/Access2.jpg" class="absolute z-0 rounded-xl w-72 left-1/4 top-1/4 max-xl:w-52 max-lg:hidden">
    <img src="../../public/AccessImages/Access3.jpg" class="absolute z-0 rounded-xl w-72 right-1/4 top-2/3 max-xl:w-52 max-lg:hidden">
    <img src="../../public/AccessImages/Access4.jpg" class="absolute z-0 rounded-xl w-72 right-16 top-1/4 max-xl:w-52 max-lg:hidden">
  </div>
</template>
  
<script lang="ts" setup>
  import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref({
  email: '',
  password: '',
});

const router = useRouter();

const loginUser = async () => {
  try {
    const response = await fetch('http://localhost:3030/users');
    if (!response.ok) throw new Error('Failed to fetch users.');

    const users = await response.json();
    const user = users.find(
      (u: { email: string; password: string }) =>
        u.email === formData.value.email && u.password === formData.value.password
    );

    if (user) {
      alert('Login successful!');
      router.push('/tasks');
    } else {
      alert('Invalid email or password.');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred during login.');
  }
};
</script>