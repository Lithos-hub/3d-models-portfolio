<template>
  <h1>3D models and dioramas using Three.js and Blender</h1>

  <ul>
    <router-link v-for="link of links" :key="link" :to="link.path">
      <li :style="`background-image: url(${link.image})`">{{ link.name }}</li>
    </router-link>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const links = ref([
  {
    name: "Tatooine diorama",
    path: "/tatooine",
    image: "src/assets/img/tatooine.jpg",
  },
  {
    name: "Option 2",
    path: "/option2",
    image: "",
  },
  {
    name: "Option 3",
    path: "/option2",
    image: "",
  },
  {
    name: "Option 4",
    path: "/option2",
    image: "",
  },
]);
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-auto-rows: 20rem;
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 10vh;
}

li {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  list-style: none;
  font-size: 25px;
  border: 1px solid gray;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  padding: 70px 70px;
  background-position: center;
  background-size: 120%;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 50px;
  text-shadow: 3px 3px 2px black;

  &:hover {
    transform: scale(1.1);
    border-radius: 20px;
    background-size: 100%;
    filter: brightness(1.2);
    box-shadow: 0px 20px 30px rgb(65, 65, 65);
  }
}
</style>
