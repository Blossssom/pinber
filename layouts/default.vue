<template>
  <main class="flex h-full">
    <SideBar />
    <div class="flex-1 w-(calc(100% - 72px)) ml-[72px]">
      <div class="p-2 fixed top-0 z-10 w-full bg-amber-100 -h-[40px]">
        <UInput
          icon="i-lucide-search"
          :model-value="searchText"
          @update:model-value="updateSearchText"
          placeholder="Search..."
        />
      </div>
      <div class="pt-[52px] px-2">
        <slot />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const searchText = ref("");

const updateSearchText = (value: string) => {
  searchText.value = value;
};
</script>
