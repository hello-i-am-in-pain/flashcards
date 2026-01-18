<script setup>
  const prop = defineProps({
    progress: Number
  })
</script>

<template>
  <header>
    <meter id="progress-bar" min="0" max="100" low="33" high="66" optimum="90" :value="progress * 33"></meter>
  </header>
</template>

<style scoped>
/* Header (index.html structure) */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  z-index: 10;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent);
  backdrop-filter: blur(4px);
}
</style>
