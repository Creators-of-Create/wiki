<template>
  <img
    v-for="tool in tools"
    :src="toolImage(tool)"
    :alt="formatToolName(tool)"
    width="32"
    height="32"
  />
</template>

<script setup lang="ts">
import { Tool } from "../types";

interface Props {
  tools: Tool[];
}

defineProps<Props>();

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const formatToolName = ({ type, quality }: Tool) =>
  capitalize(quality) + " " + type;

const toolImage = (t: Tool) => {
  const image = (item: string) => `https://minecraft.wiki/images/${item}.png`;

  if (t.quality === "any") {
    switch (t.type) {
      case "axe":
        return image("SlotSprite_Axe_Required");
      case "pickaxe":
        return image("SlotSprite_Pickaxe_Required");
      case "shovel":
        return image("SlotSprite_Shovel_Required");
      case "hoe":
        return image("SlotSprite_Hoe_Required");
    }
  }

  switch (t.type) {
    case "axe":
      return image(`Invicon_${capitalize(t.quality)}_Axe`);
    case "pickaxe":
      return image(`Invicon_${capitalize(t.quality)}_Pickaxe`);
    case "shovel":
      return image(`Invicon_${capitalize(t.quality)}_Shovel`);
    case "hoe":
      return image(`Invicon_${capitalize(t.quality)}_Hoe`);
  }
};
</script>

<style scoped>
img{
  image-rendering: pixelated;
}
</style>
