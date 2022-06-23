<template>
<Title view-title="Tatooine diorama (Lars homestead)" />
  <canvas class="tatooine__canvas"></canvas>
</template>

<script setup>
import { onMounted } from 'vue'
import { createCanvas } from '../three/Tatooine'

onMounted(() => createCanvas())
</script>

<style lang="scss" scoped>

</style>