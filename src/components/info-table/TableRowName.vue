<template>
  <td v-if="name.isLink">
    <a :href="name.href" target="_blank">{{ name.text }}</a>
  </td>
  <td v-else>{{ name.text }}</td>
</template>

<script setup lang="ts">
import { ItemDataTableRowName } from "../types";

interface Props {
  name: ItemDataTableRowName;
}

defineProps<Props>();
</script>

<style scoped></style>
