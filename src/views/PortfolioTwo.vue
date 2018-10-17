<template>
  <div class="two main-content">
    <div class="left-content slideUp">
      <router-link to="/portfolio/one"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>
      <h1> MOBILE UI </h1>
      <p class="subtxt">Lorem ipsum dolor latin stuff.</p>
      <p class="subtxt">Quantos codiches platus inferitus sanctus.</p>
      <router-link to="/portfolio/three"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
    </div>

    <div class="right-content img2">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "two"
};
</script>

<style lang="scss" scoped>
$page_color: #48b882;

h1 {
  color: $page_color !important;
}

.img2 {
  background: url("../assets/phone.jpg");
  // background-size: cover;
  background-position: 50%;
  img {
    width: 50%;
  }
}
</style>