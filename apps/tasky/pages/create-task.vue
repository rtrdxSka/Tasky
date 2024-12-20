<template>
  <div class="task-create-container min-h-screen w-full flex items-center justify-center p-8">
    <div class="flex flex-col md:flex-row gap-8 max-w-6xl w-full z-10 items-center">
      <!-- Task Creation Form -->
      <div class="flex-1">
        <div class="task-form bg-emerald-500 rounded-xl p-8">
          <div class="text-white text-lg">
            {{ currentDateTime }}
          </div>

          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label class="text-white block text-lg">Header:</label>
              <input 
                v-model="taskForm.header"
                type="text"
                class="form-input w-full px-4 py-3 rounded-lg bg-white/90 
                       focus:ring-2 focus:ring-white/50 focus:outline-none"
              >
            </div>

            <div>
              <label class="text-white block text-lg">Description:</label>
              <textarea 
                v-model="taskForm.description"
                rows="6"
                class="form-textarea w-full px-4 rounded-lg bg-white/90 
                       focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
            </div>

            <div>
              <label class="text-white block text-lg">Select Time:</label>
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
        <div class="calendar-container bg-gray-900 rounded-xl p-10">
          <div class="flex justify-between items-center">
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
    <img src="../public/AccessImages/Access1.jpg" class="absolute z-0 rounded-xl w-72 left-16 top-2/3 max-xl:w-52 max-lg:hidden">
    <img src="../public/AccessImages/Access2.jpg" class="absolute z-0 rounded-xl w-72 left-1/4 top-1/4 max-xl:w-52 max-lg:hidden">
    <img src="../public/AccessImages/Access3.jpg" class="absolute z-0 rounded-xl w-72 right-1/4 top-2/3 max-xl:w-52 max-lg:hidden">
    <img src="../public/AccessImages/Access4.jpg" class="absolute z-0 rounded-xl w-72 right-16 top-1/4 max-xl:w-52 max-lg:hidden">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import dayjs from 'dayjs';

const taskForm = ref({
  header: '',
  description: ''
});

const selectedDate = ref(dayjs().date());
const selectedMonth = ref(dayjs().month());
const selectedYear = ref(dayjs().year());
const selectedHour = ref(12);
const selectedMinute = ref(0);
const selectedPeriod = ref('AM');

const currentDateTime = computed(() => {
  return dayjs().format('MM/DD/YYYY hh:mm A');
});

const currentMonthYear = computed(() => {
  return dayjs().year(selectedYear.value).month(selectedMonth.value).format('MMMM YYYY');
});

const daysInMonth = computed(() => {
  return Array.from({ length: dayjs().year(selectedYear.value).month(selectedMonth.value).daysInMonth() }, (_, i) => i + 1);
});

const firstDayOfWeek = computed(() => {
  return dayjs().year(selectedYear.value).month(selectedMonth.value).startOf('month').day();
});

const isSelectedDate = (date) => {
  return (
    date === selectedDate.value &&
    selectedMonth.value === dayjs().month(selectedMonth.value).month() &&
    selectedYear.value === dayjs().year(selectedYear.value).year()
  );
};

const selectDate = (date) => {
  selectedDate.value = date;
};

const changeMonth = (direction) => {
  const newDate = dayjs().year(selectedYear.value).month(selectedMonth.value).add(direction, 'month');
  selectedMonth.value = newDate.month();
  selectedYear.value = newDate.year();
};

const handleSubmit = async () => {
  const userId = localStorage.getItem('userId');
  const formattedTime = `${selectedHour.value}:${selectedMinute.value.toString().padStart(2, '0')} ${selectedPeriod.value}`;
  const newTask = {
    header: taskForm.value.header,
    description: taskForm.value.description,
    date: `${selectedYear.value}-${(selectedMonth.value + 1).toString().padStart(2, '0')}-${selectedDate.value.toString().padStart(2, '0')}`,
    time: formattedTime,
    userId: userId // Include user ID
  };

  try {
    const response = await fetch('http://localhost:3030/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    if (!response.ok) {
      throw new Error(`Failed to add task: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Task successfully added:', data);

    // Reset form after successful submission
    taskForm.value.header = '';
    taskForm.value.description = '';
  } catch (error) {
    console.error('Error adding task:', error);
  }
};
onMounted(() => {
  const userId = localStorage.getItem('userId');
  const router = useRouter();
  if (!userId) {
    router.push('/');
  return
}})
</script>
