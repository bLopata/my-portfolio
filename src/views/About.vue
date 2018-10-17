<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt"> I design and code things and work as an Engineer for Southwest Power Pool.</p>

      <button><router-link to="/portfolio/one"> Look at my work </router-link></button>
      <button><a href="http://github.com/bLopata"> See my GitHub </a></button>
  </div>

  <div class="right-content">
    <p>Qui do id commodo eu labore dolore consectetur tempor excepteur ad culpa.</p>
    <p>Commodo eu enim eiusmod reprehenderit.</p>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.left-content {
  background-color: #ffe476;
}
.right-content {
  background: #fff;
  padding: 50px;
  margin-top: 80px;
  display: block;
}

button {
  font-size: 1.5em;
  margin-top: 100px;
}

.subtxt {
  font-size: 1.5em;
  margin-top: 100px;
}
</style>