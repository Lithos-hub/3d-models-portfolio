<template>
<Title view-title="Tatooine diorama (Lars homestead)" />
  <canvas class="tatooine__canvas"></canvas>
</template>

<script setup>
import { onMounted } from 'vue'
import { createCanvas } from '../three/Tatooine'

onMounted(() => createCanvas("tatooine-elements.gltf", "tatooine-floor.gltf"))
</script>

<style lang="scss" scoped>

</style>