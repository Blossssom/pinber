<template>
  <div class="masonry-container" style="padding: 0">
    <masonry-infinite-grid
      class="masonry-grid"
      @request-append="requestAppend"
      @render-complete="onRenderComplete"
      @change-scroll="onScroll"
    >
      <div
        v-for="image in imageList"
        :class="['masonry-item', itemClass, 'p-2']"
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
    </masonry-infinite-grid>
  </div>
</template>

<script lang="ts" setup>
import { MasonryInfiniteGrid } from "@egjs/vue3-infinitegrid";

const { data: imageList } = useFetch("/api/board", {
  lazy: true,
});

const itemClass = ref("w-1/6 p-2");

const updateColumnCount = () => {
  const width = window.innerWidth;
  switch (true) {
    case width >= 1536:
      itemClass.value = "w-1/6"; // 6 columns
      break;
    case width >= 1280:
      itemClass.value = "w-1/5"; // 5 columns
      break;
    case width >= 1024:
      itemClass.value = "w-1/4"; // 4 columns
      break;
    case width >= 768:
      itemClass.value = "w-1/3"; // 3 columns
      break;
    case width >= 640:
      itemClass.value = "w-1/2"; // 2 columns
      break;
    default:
      itemClass.value = "w-full"; // 1 column
  }
};

onMounted(() => {
  updateColumnCount();
  window.addEventListener("resize", updateColumnCount);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateColumnCount);
});

const requestAppend = (e: any) => {
  console.log(e);
};

const onRenderComplete = () => {
  console.log("Render complete");
};

const onScroll = (e: any) => {
  console.log("Scroll event", e);
};
</script>

<style scoped></style>
