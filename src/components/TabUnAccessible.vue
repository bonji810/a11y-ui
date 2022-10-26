<script setup lang="ts">
import { ref } from "vue";

const select = ref(0);
const buttons = [
  {
    label: "Tab1",
  },
  {
    label: "Tab2",
  },
  {
    label: "Tab3",
  },
];

const panels = [
  {
    text: "tabpanel1",
  },
  {
    text: "tabpanel2",
  },
  {
    text: "tabpanel3",
  },
];

const onClick = (val: number) => {
  select.value = val;
};
</script>

<template>
  <div>
    <div class="tab-buttons" role="tablist">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        :id="`tab-${index}`"
        class="button"
        @click="onClick(index)"
        :class="{ 'is-select': select === index }"
      >
        {{ button.label }}
    </div>
    </div>
    <div>
      <div
        v-for="(panel, index) in panels"
        :id="`tabpanel-${index}`"     
        class="tab"
        :class="{ 'is-open': select === index }"
      >
        <p>{{ panel.text }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.tab-buttons {
  display: flex;
}

.button {
  padding: 10px 40px;
  border: 1px solid #000;
  background: transparent;
  margin-left: -1px;
  border-radius: 0px;
}
.button:hover {
  background-color: azure;
}
.button:first-of-type {
  margin-left: 0;
}

.tab {
  display: none;
  width: 500px;
  height: 200px;
  margin-top: -1px;
  border: 1px solid #000;
}

.is-select {
  color: #fff;
  background-color: cadetblue;
}

.button.is-select:hover {
  background-color: cadetblue;
  opacity: 0.7;
}
.is-open {
  display: block;
}
</style>
