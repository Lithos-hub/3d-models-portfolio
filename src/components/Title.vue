<template>
  <h1>{{ viewTitle }}</h1>
</template>

<script setup>

const props = defineProps({
  viewTitle: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>

h1 {
    background: rgb(38, 36, 36);
    color: white;
    font-weight: lighter;
    width: auto;
    position: fixed;
    right: 0;
    top: 0;
    margin: 0;
    padding: 15px 50px;
    font-size: 20px;
    border-radius: 0px 0px 0px 20px
}

</style>