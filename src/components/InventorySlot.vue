<template>
  <div class="item">
      <img
        @mouseover="visibility = true"
        @mouseleave="visibility = false"
        :src="image.srcUrl"
        :alt="image.displayName"
        width="32"
        height="32"
      />
      <span
        :style="{
          left: `calc(${x}px + 1rem)`,
          top: `calc(${y}px - 1.5rem)`,
          display: visibility ? 'block' : 'none',
        }"
      >
        {{ image.displayName }}
      </span>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMouse } from "../composables/useMouse";

export interface Image {
  displayName: string;
  srcUrl: string;
}

defineProps<{ image: Image }>();
const visibility = ref(false);
const { x, y } = useMouse();
</script>

<style scoped>
span {
  margin: 0;
  display: block;
  position: fixed;
}

span {
  opacity: 1;
  color: #fbfbfb;
  text-shadow: 0.125em 0.125em 0 #3e3e3e;
  background-color: rgba(16, 0, 16, 0.94);
  padding: 0.375em;
  font-family: Minecraft, sans-serif;
  font-size: 16px;
  word-spacing: 4px;
  white-space: nowrap;
  line-height: 1.25em;
}

span::before {
  content: "";
  position: absolute;
  top: 0.125em;
  right: -0.125em;
  bottom: 0.125em;
  left: -0.125em;
  border: 0.15em solid #100010;
  border-style: none solid;
  border-color: rgba(16, 0, 16, 0.94);
}

span::after {
  content: "";
  position: absolute;
  top: 0.125em;
  right: 0;
  bottom: 0.125em;
  left: 0;
  border: 0.125em solid #2d0a63;
  border-image: -webkit-linear-gradient(
      rgba(80, 0, 255, 0.31),
      rgba(40, 0, 127, 0.31)
    )
    1;
  border-image: linear-gradient(rgba(80, 0, 255, 0.31), rgba(40, 0, 127, 0.31))
    1;
}

img {
  background-color: #8b8b8b;
  border: 2px solid;
  border-color: #373737 #fff #fff #373737;
  image-rendering: pixelated;
}
</style>
