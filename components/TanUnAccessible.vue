<script setup lang="ts">
const currentNumber = ref(0);
const tabButtons = [
  {
    label: "果物",
  },
  {
    label: "野菜",
  },
  {
    label: "飲み物",
  },
];

const tabPanels = [
  {
    title: "果物",
    lists: [
      {
        text: "みかん",
      },
      {
        text: "りんご",
      },
      {
        text: "ぶどう",
      },
    ]
  },
  {
    title: "野菜",
    lists: [
      {
        text: "たまねぎ",
      },
      {
        text: "にんじん",
      },
      {
        text: "じゃがいも",
      },
    ]
  },
  {
    title: "飲み物",
    lists: [
      {
        text: "コーヒー",
      },
      {
        text: "紅茶",
      },
      {
        text: "オレンジジュース",
      },
    ]
  },
];

const onClick = (index: number) => {
  currentNumber.value = index;
};
</script>

<template>
  <div>
    <h1 class="title">Tab UI Example - Before</h1>
    <div class="tablist" role="tablist">
      <div
        v-for="(button, index) in tabButtons"
        :key="index"
        :id="`tab-${index}`"
        class="button"
        @click="onClick(index)"
        :class="{ 'is-select': currentNumber === index }"
      >
        {{ button.label }}
    </div>
    </div>
    <div>
      <div
        v-for="(panel, index) in tabPanels"
        :id="`tabpanel-${index}`"     
        class="tabpanel"
        :class="{ 'is-open': currentNumber === index }"
      >
      <p class="headings">{{ panel.title }}</p>
      <ul>
          <li class="list" v-for="list in panel.lists">{{ list.text }}</li>
        </ul>
      </div>
    </div>
    <NuxtLink class="link" to="/after">After</NuxtLink>
  </div>
</template>

<style scoped>
.tablist {
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
  background-color: #ffebfc;
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
  background-color: #fbd2f4;
}

.button.is-select:hover {
  background-color: #fbd2f4;
}
.is-open {
  display: block;
}
.link {
  width: 130px;
  height: 48px;
  margin: 40px auto 0 auto;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #242424;
  color: #242424;
  background-color: #ffebfc;
}
</style>