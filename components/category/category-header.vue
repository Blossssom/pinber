<template>
  <div class="flex bg-blue-200">
    <div v-for="category in categories">
      {{ category }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThrottle } from "~/composable/useThrottle";

const categories = ["test1", "test2", "test3"];

const isHide = ref(false);
const { throttle } = useThrottle();
let lastScrollTop = 0;
let isScrolling = false;

onMounted(() => {
  window.addEventListener("scroll", () => throttle(handleScroll, 100));
});

const handleScroll = () => {
  console.log("scrolling");
  //   const scrollTop: number =
  //     window.pageYOffset || document.documentElement.scrollTop;

  //   console.log("scrollTop", scrollTop);
  //   if (scrollTop > lastScrollTop && scrollTop > 100) {
  //     isHide.value = true;
  //   } else {
  //     isHide.value = false;
  //   }

  //   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};
</script>
