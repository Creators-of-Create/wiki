<template>
  <td>
    <Component :is="getRowType().component" v-bind="getRowType().props" />
  </td>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ItemData, Entry } from "../types";
import ToolRow from "./ToolRow.vue";

interface Props {
  value: Entry<ItemData>;
}

const props = defineProps<Props>();

const getRowType = () => {
  const [type, value] = props.value;

  if (type === "tools") {
    return {
      component: ToolRow,
      props: {
        tools: value as ItemData["tools"],
      },
    };
  }

  if (type === "stackable") {
    const isStackable = value[0] ? "Yes" : "No";
    const stackSize = value[0] ? ` (${value[1]})` : "";
    return {
      component: "span",
      props: {
        innerText: isStackable + stackSize,
      },
    };
  }

  if (typeof value === "boolean") {
    return {
      component: "span",
      props: {
        innerText: value ? "Yes" : "No",
      },
    };
  }

  return {
    component: "span",
    props: {
      innerText: value,
    },
  };
};
</script>

<style scoped></style>
