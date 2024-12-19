<template>
  <div 
    class="h-[calc(100vh-64px)] w-full relative bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/your-background-image.jpg)' }"
  >
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
            @click="setFilter(option.id)">
            {{ option.label }}
          </button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-6 overflow-auto">
        <!-- Task Grid -->
        <div class="grid grid-cols-4 gap-4">
          <div
            v-for="task in displayedTasks" 
            :key="task.id"
            :class="[
              'bg-emerald-400/30 rounded-lg p-3 shadow-sm transition-all cursor-pointer',
              expandedTaskId === task.id ? 'h-auto' : 'h-24',
              'hover:shadow-md'
            ]"
            @click="toggleExpandTask(task.id)"
          >
            <!-- Task Hour -->
            <div class="text-gray-800 font-semibold text-lg">
              {{ task.time + '|' + task.date }}
            </div>

            <!-- Expanded Details -->
            <div 
              v-if="expandedTaskId === task.id" 
              class="mt-2 space-y-1 text-sm text-gray-700">
              <p><strong>Header:</strong> {{ task.header }}</p>
              <p><strong>Description:</strong> {{ task.description }}</p>
              <p><strong>Date:</strong> {{ task.date }}</p>
            </div>
          </div>
        </div>

        <!-- Show more button -->
        <div v-if="displayedTasks.length < tasks.length" class="mt-6 text-center" >
          <button 
            class="text-gray-500 hover:text-gray-700"
            @click="showMoreTasks">
            Show more
          </button>
        </div>
      </div>
    </div>
    <img src="../public/AccessImages/Access1.jpg" class="absolute z-0 rounded-xl w-72 left-16 top-2/3 max-xl:w-52 max-lg:hidden">
    <img src="../public/AccessImages/Access2.jpg" class="absolute z-0 rounded-xl w-72 left-1/4 top-1/4 max-xl:w-52 max-lg:hidden">
    <img src="../public/AccessImages/Access3.jpg" class="absolute z-0 rounded-xl w-72 right-1/4 top-2/3 max-xl:w-52 max-lg:hidden">
    <img src="../public/AccessImages/Access4.jpg" class="absolute z-0 rounded-xl w-72 right-16 top-1/4 max-xl:w-52 max-lg:hidden">
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'

const sidebarOptions = [
  { id: 'today', label: 'Today' },
  { id: 'week', label: 'Next 7 days' },
  { id: 'month', label: 'Next 1 month' },
  { id: 'all', label: 'All my tasks' }
]

const selectedOption = ref('today')
const tasks = ref([])
const displayedTasks = ref([])
const tasksToShow = ref(8) // Number of tasks to display initially
const expandedTaskId = ref(null) // To track which task is expanded
const router = useRouter()

const fetchTasks = async (filter) => {
  const userId = localStorage.getItem('userId')
  if (!userId) {
    router.push('/')
  return
}

  try {
    const response = await fetch(`http://localhost:3030/tasks?userId=${userId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch tasks')
    }
    const allTasks = await response.json()

    // Apply filtering logic
    const now = new Date()
    tasks.value = allTasks.filter(task => {
      const taskDate = new Date(task.date)

      if (filter === 'today') {
        return taskDate.toDateString() === now.toDateString()
      } else if (filter === 'week') {
        const oneWeekLater = new Date(now)
        oneWeekLater.setDate(now.getDate() + 7)
        return taskDate >= now && taskDate <= oneWeekLater
      } else if (filter === 'month') {
        const oneMonthLater = new Date(now)
        oneMonthLater.setMonth(now.getMonth() + 1)
        return taskDate >= now && taskDate <= oneMonthLater
      } else {
        return true // Show all tasks for 'all'
      }
    })

    // Reset displayed tasks
    displayedTasks.value = tasks.value.slice(0, tasksToShow.value)
  } catch (error) {
    console.error(error)
  }
}

const setFilter = (filter) => {
  selectedOption.value = filter
  fetchTasks(filter)
}

const toggleExpandTask = (taskId) => {
  expandedTaskId.value = expandedTaskId.value === taskId ? null : taskId
}

const showMoreTasks = () => {
  const nextTasks = tasks.value.slice(displayedTasks.value.length, displayedTasks.value.length + tasksToShow.value)
  displayedTasks.value.push(...nextTasks)
}

// Fetch tasks for the default filter on component mount
onMounted(() => {
  fetchTasks(selectedOption.value)
})
</script>
