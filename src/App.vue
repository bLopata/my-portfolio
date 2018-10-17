<template>
  <div id="app">
    <div class="container">
      <div class="inner">
      <router-link to="/" id="logo">Ben Lopata</router-link>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./global.scss">
</style>
