<template>
  <div>
    <h1>Home</h1>
    <p>This is the home page</p>
    <h3>{{ name }}</h3>
    <h2>{{ student.name }}</h2>
    <h2>{{ student.school }}</h2>
    <button @click="changeName">Change Name</button>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const name = ref("Emmanuel");

const student = reactive({
  name: "Samuel",
  school: "AltSchool",
});

const changeName = () => {
  name.value = "Emmanuel Odedele";
};
// return {
//   name,
//   changeName,
// };
</script>
