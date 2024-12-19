<template>
  <div class="task-create-container min-h-screen w-full flex items-center justify-center p-8">
    <div class="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
      <!-- Task Creation Form -->
      <div class="flex-1">
        <div class="task-form bg-emerald-500 rounded-xl p-8">
          <div class="text-white text-lg mb-8">
            {{ currentDateTime }}
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="text-white block mb-2 text-lg">Header:</label>
              <input 
                v-model="taskForm.header"
                type="text"
                class="form-input w-full px-4 py-3 rounded-lg bg-white/90 
                       focus:ring-2 focus:ring-white/50 focus:outline-none"
              >
            </div>

            <div>
              <label class="text-white block mb-2 text-lg">Description:</label>
              <textarea 
                v-model="taskForm.description"
                rows="6"
                class="form-textarea w-full px-4 py-3 rounded-lg bg-white/90 
                       focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
            </div>

            <div>
              <label class="text-white block mb-2 text-lg">Select Time:</label>
              <div class="flex gap-4">
                <select 
                  v-model="selectedHour"
                  class="form-select bg-white/90 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none"
                >
                  <option v-for="hour in 12" :key="hour" :value="hour">
                    {{ hour.toString().padStart(2, '0') }}
                  </option>
                </select>
                <select 
                  v-model="selectedMinute"
                  class="form-select bg-white/90 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none"
                >
                  <option v-for="minute in [0, 15, 30, 45]" :key="minute" :value="minute">
                    {{ minute.toString().padStart(2, '0') }}
                  </option>
                </select>
                <select 
                  v-model="selectedPeriod"
                  class="form-select bg-white/90 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              class="w-full bg-emerald-700 text-white px-6 py-3 rounded-lg 
                     hover:bg-emerald-800 transition-colors text-lg font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <!-- Calendar Section -->
      <div class="flex-1">
        <div class="calendar-container bg-gray-900 rounded-xl p-8">
          <div class="flex justify-between items-center mb-8">
            <button 
              class="text-white hover:bg-gray-700 p-3 rounded-full"
              @click="changeMonth(-1)"
            >
              &lt;
            </button>
            <span class="text-white text-xl font-medium">
              {{ currentMonthYear }}
            </span>
            <button 
              class="text-white hover:bg-gray-700 p-3 rounded-full"
              @click="changeMonth(1)"
            >
              &gt;
            </button>
          </div>

          <div class="calendar-grid grid grid-cols-7 gap-2">
            <!-- Week days -->
            <template v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day">
              <div class="text-gray-400 text-center py-2 text-sm font-medium">{{ day }}</div>
            </template>

            <!-- Empty cells for days of the previous month -->
            <template v-for="n in firstDayOfWeek" :key="'empty-' + n">
              <div class="text-gray-600"></div>
            </template>

            <!-- Calendar days -->
            <template v-for="date in daysInMonth" :key="date">
              <button 
                :class="[
                  'calendar-day w-full aspect-square rounded-full flex items-center justify-center',
                  isSelectedDate(date)
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                    : 'text-white hover:bg-gray-700'
                ]"
                @click="selectDate(date)"
              >
                {{ date }}
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const taskForm = ref({
  header: '',
  description: ''
})

const selectedDate = ref(dayjs().date())
const selectedMonth = ref(dayjs().month())
const selectedYear = ref(dayjs().year())
const selectedHour = ref(12)
const selectedMinute = ref(0)
const selectedPeriod = ref('AM')

const currentDateTime = computed(() => {
  return dayjs().format('MM/DD/YYYY hh:mm A')
})

const currentMonthYear = computed(() => {
  return dayjs().year(selectedYear.value).month(selectedMonth.value).format('MMMM YYYY')
})

const daysInMonth = computed(() => {
  return dayjs().year(selectedYear.value).month(selectedMonth.value).daysInMonth()
})

const firstDayOfWeek = computed(() => {
  return dayjs().year(selectedYear.value).month(selectedMonth.value).startOf('month').day()
})

const isSelectedDate = (date) => {
  return (
    date === selectedDate.value &&
    selectedMonth.value === dayjs().month(selectedMonth.value).month() &&
    selectedYear.value === dayjs().year(selectedYear.value).year()
  )
}

const selectDate = (date) => {
  selectedDate.value = date
}

const changeMonth = (direction) => {
  const newDate = dayjs().year(selectedYear.value).month(selectedMonth.value).add(direction, 'month')
  selectedMonth.value = newDate.month()
  selectedYear.value = newDate.year()
}

const handleSubmit = () => {
  const formattedTime = `${selectedHour.value}:${selectedMinute.value.toString().padStart(2, '0')} ${selectedPeriod.value}`
  console.log('Form submitted:', {
    ...taskForm.value,
    date: `${selectedYear.value}-${selectedMonth.value + 1}-${selectedDate.value}`,
    time: formattedTime,
  })
}
</script>

<style scoped>
.task-create-container {
  min-height: calc(100vh - 64px);
  background-color: rgb(236 253 245 / 0.05);
}

.form-input,
.form-textarea,
.form-select {
  border: none;
  color: #1f2937;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #6b7280;
}

.calendar-day {
  transition: background-color 0.2s ease;
}
</style>
