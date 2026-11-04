<template>
  <div class="miniatures">
    <InventorySlot v-for="img in images" :image="img" />
  </div>
</template>

<script setup lang="ts">
import InventorySlot from "./InventorySlot.vue";

export interface Image {
  displayName: string;
  srcUrl: string;
}

defineProps<{ images: Image[] }>();
</script>

<style scoped>
div.miniatures {
  display: flex;
}
</style>
