<script setup>
import { ref, watch } from 'vue'

const prop = defineProps({
  card: Object,
  progress: Number,
})

const emit = defineEmits(['cardRight', 'cardLeft', 'answerCorrect', 'answerWrong', 'restart'])

const scrollBtnLeft = ref('Scroll Left')
const scrollBtnRight = ref('Scroll Right')
const modalClosedName = ref('Open Modal')
let selectedValue = ref('')

watch(
  () => prop.card,
  () => {
    selectedValue.value = ''
  },
)

modalClosedName.value = 'Answer'

function calculate() {
  if (selectedValue.value === '') {
    alert('NO VALUE INPUTTED!')
    return //eject button
  }

  if (selectedValue.value === prop.card.answer) {
    // meterId.value = questionDetails[currentCardIndex].meterValue
    alert(`✅ CORRECT!`)
    emit('answerCorrect')
  } else {
    alert(`❌ Try again!`)
    emit('answerWrong')
  }
}
</script>

<template>
  <main>
    <div id="main"></div>

    <div class="card">
      <div class="accent-strip"></div>
      <div class="card-inner">
        <div class="card-title">{{ prop.card.title }}</div>
        <div class="card-question">{{ prop.card.question }}</div>
        <div>
          <select name="math-answers" @change="calculate" v-model="selectedValue">
            <option value="">Select Your Answer</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <button popovertarget="my-popover">Click for Answer!</button>

          <div id="my-popover" popover>
            <p>{{ prop.card.answer }}</p>
          </div>
        </div>
      </div>
    </div>

    <button @click="emit('cardLeft')" class="js-scroll-left scroll-button">
      {{ scrollBtnLeft }}
    </button>

    <button @click="emit('cardRight')" class="js-scroll-right scroll-button">
      {{ scrollBtnRight }}
    </button>

    <button @click="emit('restart')">Restart</button>
  </main>
</template>

<style scoped>
/* style for the meter/progress bar inside header */
#progress-bar {
  width: min(700px, 90%);
  height: 14px;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
}

/* Main area below header */
main {
  padding-top: 96px; /* leave room for fixed header */
  padding-bottom: 120px; /* space for controls */
  min-height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

/* Card Container */
#main {
  width: min(500px, 90vw);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}

/* The Card - With Entry Animation */
.card {
  background: var(--card-white);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* This animation runs whenever the JS re-renders the div */
  animation: cardEnter 0.4s ease-out forwards;
}

@keyframes cardEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card-title {
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.card-question {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
}

/* Scroll Buttons */
.scroll-button {
  position: fixed;
  bottom: 40px;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  background: var(--card-white);
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: all 0.2s ease;
}

.scroll-button:hover {
  transform: translateY(-3px);
  background: #f9fafb;
}

.scroll-button:active {
  transform: translateY(-1px);
}

.js-scroll-left {
  left: 40px;
}
.js-scroll-right {
  right: 40px;
}

.progress-bar {
  transform: scale(2);
  transform-origin: left center;
}

/* ensure modal and overlay don't get hidden behind header */
/* z-index adjustments are handled in modal.css; see that file for stacking rules */

/* Small screens tweaks */
@media (max-width: 480px) {
  header {
    height: 64px;
  }
  main {
    padding-top: 80px;
    padding-bottom: 110px;
  }
  .card {
    padding: 24px;
    border-radius: 16px;
  }
  .scroll-button {
    padding: 10px 18px;
    bottom: 28px;
  }
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 200ms ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  z-index: 1001; /* sit above header/main content */
  background-color: #ffffff;
  width: 500px;
  max-width: 90%;
  max-height: 80vh;
  overflow: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.modal.active {
  transform: translate(-50%, -50%) scale(1);
}

.modal-header {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
}

/* keep modal header visible when content scrolls inside modal */
.modal-header {
  background: rgba(255, 255, 255, 0.98);
  position: sticky;
  top: 0;
  z-index: 1002;
}

.modal-header .title {
  font-size: 1.25rem;
  font-weight: bold;
}

.modal-header .close-button {
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 1.25rem;
  font-weight: bold;
}

.modal-body {
  padding: 10px 15px;
}

#overlay {
  position: fixed;
  opacity: 0;
  transition: 200ms ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

#overlay.active {
  opacity: 1;
  pointer-events: all;
}

/* ensure overlay sits below modal but above page content */
#overlay {
  z-index: 1000;
}
</style>
