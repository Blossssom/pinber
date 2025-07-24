<template>
  <main class="flex h-full">
    <SideBar />
    <div class="flex-1 w-(calc(100% - 62px)) ml-[62px]">
      <slot />
    </div>
  </main>
</template>

<script lang="ts" setup></script>
