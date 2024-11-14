<template>
    <div>
    <p class="text-xl pl-5 pt-2">
      {{ isExpanded ? fullText : truncatedText }}
    </p>
    <button
      v-if="fullText.length > maxChars"
      class="text-about-150 underline text-sm"
      @click="toggleText"
    >
      {{ isExpanded ? "Show Less" : "Show More" }}
    </button>
  </div>
</template>
<script setup>
import {ref, computed, defineProps} from 'vue'

const props = defineProps({
    fullText:{
        type: String,
        required: true,
    },
    maxChars:{
        type: Number,
        default:90,
    }
})
const isExpanded = ref(false);

const truncatedText = computed(()=> props.fullText.slice(0, props.maxChars) + '...')

function toggleText(){
    isExpanded.value = !isExpanded.value
}
</script>