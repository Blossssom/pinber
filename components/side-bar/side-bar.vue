<template>
  <aside class="h-full min-w-[60px] bg-amber-300 p-4">
    <UNavigationMenu :items="items" collapsed orientation="vertical" tooltip />
  </aside>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    { label: "Home", icon: "i-lucide-house", to: "/" },
    { label: "Dashboard", icon: "i-lucide-layout-dashboard" },
  ],
]);
</script>
