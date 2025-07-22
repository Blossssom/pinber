<template>
  <div>
    <div class="board-container">
      <div v-for="image in imageList" class="">
        {{ image.id }}
        <NuxtImg
          class="w-full h-auto"
          :key="image.id"
          :src="image.url"
          :alt="image.filename"
          width="600"
          :height="image.height"
          placeholder
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: imageList } = await useFetch("/api/board", {
  lazy: true,
});
</script>
