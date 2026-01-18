<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

const questionDetails = ref([
  {
    title: 'Math Questions',
    question: 'What is 1 + 1?',
    answer: '2',
    meterValue: 33,
  },

  {
    title: 'Math Questions',
    question: 'What is 2 + 1?',
    answer: '3',
    meterValue: 66,
  },

  {
    title: 'Math Questions',
    question: 'What is 3 + 1?',
    answer: '4',
    meterValue: 100,
  },
])

let currentCardIndex = ref(0)

const cardRight = () => {
  if (currentCardIndex.value < questionDetails.value.length - 1) {
    currentCardIndex.value++
  } else {
    currentCardIndex.value = 0 // Loop back
  }
}

const cardLeft = () => {
  if (currentCardIndex.value > 0) {
    currentCardIndex.value--
  } else {
    currentCardIndex.value = questionDetails.value.length - 1 // Loop back
  }
}
</script>

<template>
  <div>
    <Header :progress="currentCardIndex" />
    <Main :card="questionDetails[currentCardIndex]" @card-right="cardRight" @cardLeft="cardLeft" />
  </div>
</template>

<style scoped></style>
