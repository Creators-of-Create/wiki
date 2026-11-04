<template>
  <article>
    <h2>{{ name }}</h2>
    <TabbedImages :images />
    <Miniatures :images />
    <InfoTable :info />
  </article>
</template>

<script setup lang="ts">
import TabbedImages from "./TabbedImages.vue";
import Miniatures from "./Miniatures.vue";
import InfoTable from "./info-table/InfoTable.vue";
import { ItemData, Image } from "./types";

interface Props {
  name: string;
  images: Image[];
  info: ItemData;
}

defineProps<Props>();
</script>

<style scoped>
article {
  padding: 0.5rem;
  width: 300px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
}

h2 {
  margin: 0;
  padding: 0;
  border: none;

  width: 100%;
  text-align: center;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: var(--vp-c-default-soft);
}
</style>
