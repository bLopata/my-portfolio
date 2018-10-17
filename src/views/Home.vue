<template>
  <div class="home main-content">
    <div class="left-content">
      <h1> Polyglot intermediate programmer </h1>

      <p class="subtxt">Ben has been passionate about programming since I first encountered it in undergrad.</p>
      <p class="subtxt">I have worked with python, Javascript, node.js, MongoDB, and Vue.js</p>
    </div>

    <div class="right-content img1">
      <button><router-link to="/portfolio/one">Browse Work </router-link></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.img1 {
  background: url("../assets/home.jpg");
}
</style>