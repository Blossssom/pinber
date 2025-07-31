<template>
  <div class="flex w-full">
    <div class="flex-1 p-4">
      <div
        class="flex flex-col gap-4 px-10 py-4 border border-gray-400 rounded-xl bg-amber-200"
      >
        <div class="flex items-center justify-between">
          <span class="text-xl">{{ detailImage?.filename }}</span>
          <div class="flex items-center gap-2">
            <UButton
              icon="i-lucide-download"
              variant="outline"
              color="neutral"
            />
            <UButton
              icon="i-lucide-forward"
              variant="outline"
              color="neutral"
            />
          </div>
        </div>

        <NuxtImg
          v-if="detailImage"
          class="w-full rounded-xl"
          :src="detailImage?.url"
          :alt="detailImage?.filename"
        />
      </div>
    </div>
    <div class="flex-1 bg-amber-300">dec</div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const detailId = computed(() => route.params.id as string);

if (!detailId.value || detailId.value === "undefined") {
  throw createError({
    statusCode: 404,
    statusMessage: "Invalid pin ID",
  });
}

const { data: imageInfo } = useFetch(() => `/api/board/detail`, {
  server: true,
  key: () => `image-detail-${detailId.value}`,
  query: {
    id: detailId.value,
  },
  default: () => ({
    data: null,
    success: false,
  }),
});

const detailImage = computed(() => imageInfo.value?.data || null);

console.log("Detail Image:", detailImage.value);
</script>
