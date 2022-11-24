<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Tab from './components/Tab.vue'
import TabUnAccessible from './components/TabUnAccessible.vue'

</script>

<template>
  <div>
  <div>
    <div class="tab">
      <Tab />
    </div>
    <a class="link" href="#">リンク</a>
    <!-- <TabUnAccessible /> -->
  </div>
  </div>
</template>

<style scoped>
.tab {
  margin-bottom: 40px;
}

.link {
  display: block;
  width: 140px;
  margin: auto;
  height: 50px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  background-color: azure;
}
</style>
