<template>
  <aside class="h-full w-[62px] bg-amber-300 p-4 fixed left-0">
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
