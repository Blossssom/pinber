<template>
  <div class="masonry-container">
    <MasonryInfiniteGrid class="masonry-grid" :useFit="true" :autoResize="true">
      <div
        v-for="image in imageList"
        :class="['masonry-item', itemClass]"
        :key="image.id"
      >
        <div class="image-wrapper">
          <NuxtImg
            class="masonry-image"
            :src="image.url"
            :alt="image.filename"
            placeholder
          />
        </div>
      </div>
    </MasonryInfiniteGrid>
  </div>
</template>

<script lang="ts" setup>
import { MasonryInfiniteGrid } from "@egjs/vue3-infinitegrid";

const { data: imageList, pending } = useFetch("/api/board", {
  lazy: true,
});

const itemClass = ref("w-1/6 p-2");

const updateColumnCount = () => {
  const width = window.innerWidth;
  switch (true) {
    case width >= 1536:
      itemClass.value = "w-1/6 p-2"; // 6 columns
      break;
    case width >= 1280:
      itemClass.value = "w-1/5 p-2"; // 5 columns
      break;
    case width >= 1024:
      itemClass.value = "w-1/4 p-2"; // 4 columns
      break;
    case width >= 768:
      itemClass.value = "w-1/3 p-2"; // 3 columns
      break;
    case width >= 640:
      itemClass.value = "w-1/2 p-2"; // 2 columns
      break;
    default:
      itemClass.value = "w-full p-2"; // 1 column
  }
  // if (width >= 1536) {
  //   columnCount.value = 6;
  // } else if (width >= 1280) {
  //   columnCount.value = 5;
  // } else if (width >= 1024) {
  //   columnCount.value = 4;
  // } else if (width >= 768) {
  //   columnCount.value = 3;
  // } else if (width >= 640) {
  //   columnCount.value = 2;
  // } else {
  //   columnCount.value = 1;
  // }
};

onMounted(() => {
  updateColumnCount();
  window.addEventListener("resize", updateColumnCount);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateColumnCount);
});
</script>

<style scoped></style>
