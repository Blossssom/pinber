<template>
  <aside
    class="h-full w-[72px] bg-(var(--background)) py-4 fixed left-0 border-r border-(var(--border-color-01)) flex flex-col items-center gap-2"
  >
    <UNavigationMenu
      :items="items"
      collapsed
      orientation="vertical"
      tooltip
      :ui="{
        list: 'flex flex-col items-center justify-center gap-2',
        link: 'flex items-center justify-center size-10',
      }"
    />
  </aside>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  { label: "Home", icon: "i-lucide-house", to: "/" },
  { label: "Dashboard", icon: "i-lucide-layout-dashboard" },
]);
</script>
