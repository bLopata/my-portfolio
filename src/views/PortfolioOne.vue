<template>
  <div class="one main-content">
    <div class="left-content slideUp">
      <h1> CRYPTO LOGO </h1>

      <p class="subtxt">Lorem ipsum dolor latin stuff.</p>
      <p class="subtxt">Quantos codiches platus inferitus sanctus.</p>
      <router-link to="/portfolio/two"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
    </div>

    <div class="right-content img2">
      <img src="../assets/logo.svg">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "one",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
$page_color: #625b7e;

h1 {
  color: $page_color !important;
}

img2 {
  background-color: $page_color;
  img {
    width: 50%;
  }
}
</style>