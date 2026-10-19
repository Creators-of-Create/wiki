<template>
  <div>
    <nav v-if="images.length > 1">
      <button
        v-for="variant in images"
        :class="{ active: active.variantName === variant.variantName }"
        type="button"
        @click="active = variant"
      >
        {{ variant.variantName }}
      </button>
    </nav>
    <img
      :src="active.srcUrl"
      :alt="active.variantName"
      width="128"
      height="128"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

export interface TabbedImage {
  variantName: string;
  srcUrl: string;
}

const props = defineProps<{ images: TabbedImage[] }>();
const active = ref<TabbedImage>(props.images[0]);
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
  justify-content: center;
}

button {
  padding: 0 0.5rem;
  border-bottom: 3px solid var(--vp-c-border);
}

button.active {
  font-weight: 900;
  border-bottom-color: var(--vp-c-brand-1);
}
</style>
