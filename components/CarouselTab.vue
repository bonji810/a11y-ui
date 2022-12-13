<script setup lang="ts">
const carouselItems = [
  {
    title: "すいか",
    src: "image_1.jpg",
    alt: "すいかの画像",
  },
  {
    title: "キウイ",
    src: "image_2.jpg",
    alt: "キウイの画像"
  },
  {
    title: "オレンジ",
    src: "image_3.jpg",
    alt:"オレンジの画像"
  },
  {
    title: "いちご",
    src: "image_4.jpg",
    alt:"いちごの画像"
  },
  {
    title: "りんご",
    src: "image_5.jpg",
    alt:"りんごの画像"
  },
  {
    title: "レモン",
    src: "image_6.jpg",
    alt:"レモンの画像"
  }
]
const currentNumber = ref(0)
const tabButtonRefs = ref<HTMLButtonElement[]>([]);

const setTabButtonRef = (el: any) => {
  if (el) {
    tabButtonRefs.value.push(el)
  }
}
const generateImgPath = (fileName: string): string => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}

const clickTab = (index: number) => {
  currentNumber.value = index
}

const onKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case "ArrowLeft":
      currentNumber.value = currentNumber.value - 1;
      if (currentNumber.value < 0) {
        currentNumber.value = carouselItems.length - 1;
      }
      break;

    case "ArrowRight":
      currentNumber.value = currentNumber.value + 1;
      if (currentNumber.value > carouselItems.length -1) {
        currentNumber.value = 0;
      }
      break;

    default:
      break;
  }
};

const translate = computed(() => {
  return `transform: translateX(${-800 * currentNumber.value}px)`
})

watch(currentNumber,() => {
  tabButtonRefs.value[currentNumber.value].focus();
});
</script>

<template>
  <div>
    <div class="carousel" aria-roledescription="carousel" aria-label="果物一覧">
      <div class="carousel-items" aria-live="polite">
        <div class="controls">
          <button
            class="button"
            :class="{'active': currentNumber === index}"
            :ref="setTabButtonRef" @keydown="onKeydown"
            v-for="(_,index) in carouselItems"
            @click="clickTab(index)"
            :tabindex="currentNumber === index ? 0 : -1">
          </button>
        </div>
        <div
          v-for="(item, index) in carouselItems"
          class="carousel-item"
          :style="translate"
          role="group"
          :aria-label="`${index + 1} of ${carouselItems.length}`"
          aria-roledescription="slide"
          :aria-hidden="currentNumber !== index"
          :tabindex="currentNumber === index ? 0 : -1"
        >
          <div class="image" :class="`image-${index}`">
            <img :src="generateImgPath(item.src)" :alt="item.alt">
            <p class="title">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.carousel {
  position: relative;
  overflow-x: hidden;
}

.controls {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5px;
  width: 300px;
  height: 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  z-index: 1;
}

.button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #777;
  z-index: 1;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
}

.button.active {
  background-color: #777;
}

.next {
  right: 10px;
}

.prev {
  left: 10px;
}
.title {
  min-width: 80px;
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
}
.carousel-items {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  width: 800px;
  overflow-x: hidden;
}

.carousel-item {
  box-sizing: border-box;
  flex-shrink: 0;
  text-align: center;
  transition: transform 0.5s;
}

.image {
  width: 800px;
  height: 500px;
  background-color: aquamarine;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>