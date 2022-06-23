<template>
  <router-link to="/" v-if="route.path !== '/'">
    <button id="home-icon"><i class="fa-solid fa-house"></i></button>
  </router-link>
  <router-view></router-view>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  color: #303030;
  font-family: 'Titillium Web', sans-serif;
}

a {
  text-decoration: none;
  color: #303030;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: rgb(240, 240, 240);
}

#home-icon {
  transition: all 0.5s ease-out;
  padding: 10px;
  position: absolute;
  left: 2vw;
  top: 2vh;
  width: 60px;
  height: 60px;
  font-size: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    border-radius: 50px;
    background: rgba(20, 20, 20, 0.216);
    
    .fa-house {
      transition: all 0.5s ease-out;
      color: white;
    }
  }
}

*:not(canvas) {
  z-index: 1;
}

canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    z-index: 0;
}
</style>
