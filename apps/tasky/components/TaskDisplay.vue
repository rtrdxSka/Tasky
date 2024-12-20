<template>
    <div class="h-[calc(100vh-64px)] w-full relative bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: 'url(/your-background-image.jpg)' }">
        <div class="relative h-full w-full flex">
            <!-- Left Sidebar -->
            <div class="w-48 h-full bg-white/80 backdrop-blur-sm border-r">
                <div class="space-y-2 p-4">
                    <button v-for="option in sidebarOptions" :key="option.id" :class="[
                        'w-full text-left px-4 py-2 rounded-lg transition-colors',
                        props.selectedFilter === option.id
                            ? 'bg-emerald-600 text-white'
                            : 'text-gray-700 hover:bg-emerald-50'
                    ]" @click="handleFilterClick(option.id)">
                        {{ option.label }}
                    </button>
                </div>
            </div>

            <!-- Main Content -->
            <div class="flex-1 p-6 overflow-auto">
                <div class="grid grid-cols-4 gap-4">
                    <div v-for="task in props.displayedTasks" :key="task.id" :class="[
                        'relative bg-emerald-400/30 rounded-lg p-3 shadow-sm transition-all cursor-pointer',
                        props.expandedTaskId === task.id ? 'h-auto' : 'h-24',
                        'hover:shadow-md'
                    ]" @click="handleTaskClick(task.id)">

                        <button class="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            @click.stop="handleDeleteClick(task.id)">
                            ✖
                        </button>

                        <div class="text-gray-800 font-semibold text-lg">
                            {{ task.time + '|' + task.date }}
                        </div>

                        <div v-if="props.expandedTaskId === task.id" class="mt-2 space-y-1 text-sm text-gray-700">
                            <p><strong>Header:</strong> {{ task.header }}</p>
                            <p><strong>Description:</strong> {{ task.description }}</p>
                            <p><strong>Date:</strong> {{ task.date }}</p>
                        </div>
                    </div>
                </div>

                <div v-if="props.hasMoreTasks" class="mt-6 text-center">
                    <button class="text-gray-500 hover:text-gray-700" @click="handleShowMoreClick">
                        Show more
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Task {
    id: string
    date: string
    time: string
    header: string
    description: string
}

interface SidebarOption {
    id: string
    label: string
}

const props = defineProps<{
    displayedTasks: Task[]
    expandedTaskId: string | null
    selectedFilter: string
    hasMoreTasks: boolean
}>()

const emit = defineEmits<{
    'filter-change': [filterId: string]
    'expand-task': [taskId: string]
    'delete-task': [taskId: string]
    'show-more': []
}>()

const sidebarOptions: SidebarOption[] = [
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'Next 7 days' },
    { id: 'month', label: 'Next 1 month' },
    { id: 'all', label: 'All my tasks' }
]

const handleFilterClick = (filterId: string) => {
    emit('filter-change', filterId)
}

const handleTaskClick = (taskId: string) => {
    emit('expand-task', taskId)
}

const handleDeleteClick = (taskId: string) => {
    emit('delete-task', taskId)
}

const handleShowMoreClick = () => {
    emit('show-more')
}
</script>