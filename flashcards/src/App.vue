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
    isCorrect: false,
  },

  {
    title: 'Math Questions',
    question: 'What is 2 + 1?',
    answer: '3',
    meterValue: 66,
    isCorrect: false,
  },

  {
    title: 'Math Questions',
    question: 'What is 3 + 1?',
    answer: '4',
    meterValue: 100,
    isCorrect: false,
  },
])

let currentCardIndex = ref(0)
const totalCorrect = ref(0)
const pendingPoint = ref(false)

const handleCorrect = () => {
  if (!questionDetails.value[currentCardIndex.value].isCorrect) {
    pendingPoint.value = true
    questionDetails.value[currentCardIndex.value].isCorrect = true
  }
}

const handleWrong = () => {
  if (questionDetails.value[currentCardIndex.value].isCorrect) {
    pendingPoint.value = false
    questionDetails.value[currentCardIndex.value].isCorrect = false
  }
}

const cardRight = () => {
  if (pendingPoint.value) {
    totalCorrect.value++
    pendingPoint.value = false
  } else {
    totalCorrect.value = 0
  }

  if (currentCardIndex.value < questionDetails.value.length - 1) {
    currentCardIndex.value++
  } else {
    currentCardIndex.value = 0 // Loop back
  }
}

const cardLeft = () => {
  if (pendingPoint.value) {
    totalCorrect.value++
    pendingPoint.value = false
  } else {
    totalCorrect.value = 0
  }

  if (currentCardIndex.value > 0) {
    currentCardIndex.value--
  } else {
    currentCardIndex.value = questionDetails.value.length - 1 // Loop back
  }
}

const restart = () => {
  currentCardIndex.value = 0
  totalCorrect.value = 0
  pendingPoint.value = false

  questionDetails.value.forEach((isCorrectValue) => {
    isCorrectValue.isCorrect = false
  })
}
</script>

<template>
  <div>
    <Header :progress="totalCorrect" />
    <Main
      :card="questionDetails[currentCardIndex]"
      @cardRight="cardRight"
      @cardLeft="cardLeft"
      @answer-correct="handleCorrect"
      @answer-wrong="handleWrong"
      @restart="restart"
    />
  </div>
</template>

<style scoped></style>
