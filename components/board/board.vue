<template>
  <div class="masonry-container" style="padding: 0">
    <MasonryWall
      class="masonry-grid"
      :items="imageList || []"
      :max-columns="MAX_COLUMNS"
      :column-width="200"
      :ssr-columns="MAX_COLUMNS"
      :min-columns="MIN_COLUMNS"
      :gap="16"
      :loading="pending"
    >
      <template #default="{ item, index }">
        <div class="image-wrapper" @click="() => pinItemClickHandler(item.id)">
          <NuxtImg class="masonry-image" :src="item.url" :alt="item.filename" />
        </div>
      </template>
    </MasonryWall>
  </div>
</template>

<script lang="ts" setup>
const { data: imageList, pending } = useFetch("/api/board", {
  lazy: true,
});

const MAX_COLUMNS = 6;
const MIN_COLUMNS = 2;

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

const pinItemClickHandler = async (id: number) => {
  console.log("Pin item clicked:", id, typeof id);
  if (!id || id === undefined || id === null || pending.value || isNaN(id)) {
    return;
  }
  await navigateTo(`/pin/${id}`);
};
</script>

<style scoped></style>
