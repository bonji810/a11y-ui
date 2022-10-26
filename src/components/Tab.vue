<script setup lang="ts">
import { ref, watch } from "vue";

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

const onKeydown = (event: KeyboardEvent) => {
  let flag = false;

  switch (event.key) {
    case "ArrowLeft":
      select.value = select.value - 1;
      if (select.value < 0) {
        select.value = buttons.length - 1;
      }
      flag = true;
      break;

    case "ArrowRight":
      select.value = select.value + 1;
      if (select.value > buttons.length -1) {
        select.value = 0;
      }
      flag = true;
      break;

    default:
      break;
  }
  console.log(select.value);

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

watch(select,() => {
  const tab = document.getElementById(`tab-${select.value}`);
  if (tab) {
    tab.focus();
  }
});

</script>

<template>
  <div>
    <div class="tab-buttons" role="tablist">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :id="`tab-${index}`"
        :aria-selected="select === index ? 'true' : 'false'"
        class="button"
        role="tab"
        :tabindex="select === index ? '0' : '-1'"
        :aria-controls="`tabpanel-${index}`"
        @click="onClick(index)"
        @keydown="onKeydown"
        :class="{ 'is-select': select === index }"
      >
        {{ button.label }}
      </button>
    </div>
    <div>
      <div
        v-for="(panel, index) in panels"
        :id="`tabpanel-${index}`"
        :aria-labelledby="`tab-${index}`"
        role="tabpanel"
        tabindex="0"
        class="tab"
        :aria-hidden="select !== index"
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

