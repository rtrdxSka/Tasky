<template>
  <TaskDisplay
    :displayed-tasks="displayedTasks"
    :expanded-task-id="expandedTaskId"
    :selected-filter="selectedFilter"
    :has-more-tasks="hasMoreTasks"
    @filter-change="handleFilterChange"
    @expand-task="handleExpandTask"
    @delete-task="handleDeleteTask"
    @show-more="handleShowMore"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Router setup
const router = useRouter()

// Types
interface Task {
  id: string
  date: string
  time: string
  header: string
  description: string
}

// State management
const allTasks = ref<Task[]>([])
const displayedTasks = ref<Task[]>([])
const expandedTaskId = ref<string | null>(null)
const selectedFilter = ref<string>('today')
const tasksPerPage = 8

// Computed property to check if there are more tasks to show
const hasMoreTasks = computed(() => {
  return displayedTasks.value.length < allTasks.value.length
})

// Filter tasks based on selected time period
const filterTasks = (tasks: Task[], filter: string): Task[] => {
  const now = new Date()
  
  return tasks.filter(task => {
    const taskDate = new Date(task.date)
    
    if (filter === 'today') {
      return taskDate.toDateString() === now.toDateString()
    }
    
    if (filter === 'week') {
      const oneWeekLater = new Date(now)
      oneWeekLater.setDate(now.getDate() + 7)
      return taskDate >= now && taskDate <= oneWeekLater
    }
    
    if (filter === 'month') {
      const oneMonthLater = new Date(now)
      oneMonthLater.setMonth(now.getMonth() + 1)
      return taskDate >= now && taskDate <= oneMonthLater
    }
    
    return true // 'all' case
  })
}

// Fetch tasks from API
const fetchTasks = async () => {
  const userId = localStorage.getItem('userId')
  if (!userId) {
    router.push('/')
    return
  }

  try {
    const response = await fetch(`http://localhost:3030/tasks?userId=${userId}`)
    if (!response.ok) throw new Error('Failed to fetch tasks')
    
    const tasks = await response.json()
    allTasks.value = tasks
    
    // Apply initial filter and display first page
    const filteredTasks = filterTasks(tasks, selectedFilter.value)
    displayedTasks.value = filteredTasks.slice(0, tasksPerPage)
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
}

// Event Handlers
const handleFilterChange = (filterId: string) => {
  selectedFilter.value = filterId
  const filteredTasks = filterTasks(allTasks.value, filterId)
  displayedTasks.value = filteredTasks.slice(0, tasksPerPage)
}

const handleExpandTask = (taskId: string) => {
  expandedTaskId.value = expandedTaskId.value === taskId ? null : taskId
}

const handleDeleteTask = async (taskId: string) => {
  try {
    const response = await fetch(`http://localhost:3030/tasks/${taskId}`, {
      method: 'DELETE'
    })
    
    if (!response.ok) throw new Error('Failed to delete task')
    
    // Update local state
    allTasks.value = allTasks.value.filter(task => task.id !== taskId)
    displayedTasks.value = displayedTasks.value.filter(task => task.id !== taskId)
  } catch (error) {
    console.error('Error deleting task:', error)
  }
}

const handleShowMore = () => {
  const currentLength = displayedTasks.value.length
  const filteredTasks = filterTasks(allTasks.value, selectedFilter.value)
  const nextTasks = filteredTasks.slice(currentLength, currentLength + tasksPerPage)
  displayedTasks.value = [...displayedTasks.value, ...nextTasks]
}

// Initialize component
onMounted(() => {
  fetchTasks()
})
</script>