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
    text: "Tabpanel1",
    lists: [
      {
        text: "Tabpanel1-list1",
      },
      {
        text: "Tabpanel1-list2",
      },
      {
        text: "Tabpanel1-list3",
      },
    ]
  },
  {
    text: "Tabpanel2",
    lists: [
      {
        text: "Tabpanel2-list1",
      },
      {
        text: "Tabpanel2-list2",
      },
      {
        text: "Tabpanel2-list3",
      },
    ]
  },
  {
    text: "Tabpanel3",
    lists: [
      {
        text: "Tabpanel3-list1",
      },
      {
        text: "Tabpanel3-list2",
      },
      {
        text: "Tabpanel3-list3",
      },
    ]
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
    <h1 class="title">Tab UI Example - After</h1>
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
        class="tabpanel"
        :aria-hidden="select !== index"
        :class="{ 'is-open': select === index }"
      >
        <p class="headings">{{ panel.text }}</p>
        <ul>
          <li class="list" v-for="list in panel.lists">{{ list.text }}</li>
        </ul>
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
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
}
.button:hover {
  background-color: azure;
}
.button:first-of-type {
  margin-left: 0;
}

.tabpanel {
  display: none;
  width: 500px;
  height: 200px;
  margin-top: -1px;
  border: 1px solid #000;
  padding: 20px;
}

.headings {
  font-weight: bold;
  font-size: 20px;
}

.title {
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 80px;
}

.list {
  margin-bottom: 8px;
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

