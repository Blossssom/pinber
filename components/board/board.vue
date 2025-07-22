<template>
  <div>
    <div class="grid">
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: images } = useFetch("/api/board", {
  method: "GET",
  key: "boardData",
  lazy: true,
});
</script>
