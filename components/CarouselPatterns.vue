<template>
  <div class="box">
    <nuxt-link class="link" to="/carousel-before">Before</nuxt-link>
    <nuxt-link class="link" to="/carousel">Normal</nuxt-link>
    <nuxt-link class="link" to="/carousel-autoplay">Autoplay</nuxt-link>
    <nuxt-link class="link" to="/carousel-tab">Tab</nuxt-link>
  </div>
</template>

<style>
.box {
  margin-bottom: 40px;
}
.link {
  min-width: 80px;
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid #000;
  border-radius: 4px;
  margin-right: 10px;
  text-align: center;
}
</style>