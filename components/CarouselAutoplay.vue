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
    alt: "キウイの画像",
  },
  {
    title: "オレンジ",
    src: "image_3.jpg",
    alt: "オレンジの画像",
  },
  {
    title: "いちご",
    src: "image_4.jpg",
    alt: "いちごの画像",
  },
  {
    title: "りんご",
    src: "image_5.jpg",
    alt: "りんごの画像",
  },
  {
    title: "レモン",
    src: "image_6.jpg",
    alt: "レモンの画像",
  },
];
const currentNumber = ref(0);
const generateImgPath = (fileName: string): string => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href;
};

const isAutoplay = ref(true);
const isAutoplayButton = ref(true);

const next = () => {
  currentNumber.value = currentNumber.value + 1;
  if (currentNumber.value > carouselItems.length - 1) {
    currentNumber.value = 0;
  }
};

const prev = () => {
  currentNumber.value = currentNumber.value - 1;
  if (currentNumber.value < 0) {
    currentNumber.value = carouselItems.length - 1;
  }
};

const translate = computed(() => {
  return `transform: translateX(${-800 * currentNumber.value}px)`;
});

setInterval(() => {
  if (isAutoplay.value && isAutoplayButton.value) {
    next();
  }
}, 4000);
</script>

<template>
  <div>
    <div class="carousel" aria-roledescription="carousel" aria-label="果物一覧">
      <div class="carousel-items" aria-live="polite">
        <div class="controls">
          <button
            class="button stop"
            @click="isAutoplayButton = !isAutoplayButton"
            @focus="isAutoplay = false"
            @blur="isAutoplay = true"
          >
            <img
              v-if="isAutoplayButton"
              aria-hidden="true"
              src="@/assets/images/icons/stop.svg"
            />
            <img v-else aria-hidden="true" src="@/assets/images/icons/play.svg" />
          </button>
          <button
            class="button prev"
            @click="prev"
            @focus="isAutoplay = false"
            @blur="isAutoplay = true"
            aria-label="Prev Slide"
          >
            <img aria-hidden="true" src="@/assets/images/icons/arrow.svg" />
          </button>
          <button
            class="button next"
            @click="next"
            @focus="isAutoplay = false"
            @blur="isAutoplay = true"
            aria-label="Next Slide"
          >
            <img aria-hidden="true" src="@/assets/images/icons/arrow.svg" />
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
          @mouseenter="isAutoplay = false"
          @mouseleave="isAutoplay = true"
        >
          <div class="image" :class="`image-${index}`">
            <img :src="generateImgPath(item.src)" :alt="item.alt" />
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
  overflow: hidden;
}

.cotrols {
  position: relative;
  z-index: 1;
}

.button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #000;
  z-index: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button.stop {
  top: 20px;
  left: 10px;
  transform: none;
  width: 50px;
  height: 30px;
  border-radius: 4px;
  background-color: #fff;
}

.next {
  right: 10px;
}

.prev {
  left: 10px;
}

.prev img {
  transform: rotate(180deg);
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
  overflow: hidden;
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
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
