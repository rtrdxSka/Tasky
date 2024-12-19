<template>
  <div 
    class="h-[calc(100vh-64px)] w-full relative bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/your-background-image.jpg)' }"
  >
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

    <!-- Content Container -->
    <div class="relative h-full w-full flex">
      <!-- Left Sidebar -->
      <div class="w-48 h-full bg-white/80 backdrop-blur-sm border-r">
        <div class="space-y-2 p-4">
          <button 
            v-for="option in sidebarOptions" 
            :key="option.id"
            :class="[
              'w-full text-left px-4 py-2 rounded-lg transition-colors',
              selectedOption === option.id 
                ? 'bg-emerald-600 text-white' 
                : 'text-gray-700 hover:bg-emerald-50'
            ]"
            @click="selectedOption = option.id">
            {{ option.label }}
          </button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-6 overflow-auto">
        <!-- Time slots -->
        <div class="flex space-x-4 mb-6">
          <div
v-for="time in ['08:00', '08:15', '08:20', '08:25']" 
               :key="time"
               class="min-w-48 h-16 bg-emerald-400/30 rounded-lg shadow-sm 
                      flex items-center justify-center text-emerald-800 font-medium
                      backdrop-blur-sm">
            {{ time }}
          </div>
        </div>

        <!-- Task Grid -->
        <div class="grid grid-cols-4 gap-4">
          <div
v-for="i in 16" 
               :key="i"
               class="min-h-24 bg-emerald-400/30 rounded-lg p-3 shadow-sm 
                      hover:shadow-md transition-shadow cursor-pointer
                      backdrop-blur-sm"/>
        </div>

        <!-- Show more button -->
        <div class="mt-6 text-center">
          <button class="text-gray-500 hover:text-gray-700">
            Show more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sidebarOptions = [
  { id: 'today', label: 'Today' },
  { id: 'week', label: 'Next 7 days' },
  { id: 'month', label: 'Next 1 month' },
  { id: 'all', label: 'All my tasks' }
]

const selectedOption = ref('today')
</script>