<template>
  <table>
    <tbody>
      <tr v-for="[k, v] in tableData">
        <TableRowName :name="k" />
        <TableRowValue :value="v" />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ItemData } from "../types";
import { formatTableData } from "../helpers";
import TableRowName from "./TableRowName.vue";
import TableRowValue from "./TableRowValue.vue";

interface Props {
  info: ItemData;
}

const props = defineProps<Props>();
const tableData = computed(() => formatTableData(props.info));
</script>

<style scoped>
table {
  width: 100%;
  display: table;
}
</style>
