<script setup lang="ts">
import { InfoBarLabel, InfoBoxProps } from "../../.vitepress/types";

const p = defineProps<InfoBoxProps>();

function b(
  bool: boolean,
  yesText: string = "Yes",
  noText: string = "No"
): string {
  return bool ? yesText : noText;
}

const infoBarLabels: InfoBarLabel[] = [
  ["Renewable", b(p.renewable), "https://minecraft.wiki/w/Renewable_resource"],
  ["Stackable", b(p.stackable != false, `Yes (${p.stackable})`)],
  ["Tool", "TODO"], // TODO
  [
    "Blast Resistance",
    p.blastResistance,
    "https://minecraft.wiki/w/Explosion#Blast_resistance",
  ],
  [
    "Hardness",
    p.hardness,
    "https://minecraft.wiki/w/Breaking#Blocks_by_hardness",
  ],
  ["Luminous", b(p.luminous), "https://minecraft.wiki/w/Light"],
  ["Transparent", b(p.transparent), "https://minecraft.wiki/w/Opacity"],
  [
    "Waterloggable",
    b(p.waterloggable),
    "https://minecraft.wiki/w/Waterlogging",
  ],
  ["Flammable", b(p.flammable), "https://minecraft.wiki/w/Flammable"],
  [
    [
      "Catches fire from ",
      { text: "lava", href: "https://minecraft.wiki/w/Lava" },
    ],
    b(p.catchesFireFromLava),
  ],
];
</script>

<template>
  <aside class="bg-[var(--vp-c-bg-alt)] border w-full rounded-lg p-3 mb-4">
    <h1 class="text-center !text-2xl !font-bold pb-3 pl-3 pr-3 pt-1">
      {{ title }}
    </h1>

    <div class="p-3 border-t border-b flex items-center justify-center w-full">
      <img :src="image" :alt="`Infobox image for ${title}`" height="128" />
    </div>

    <template v-for="label in infoBarLabels" :key="label">
      <div class="p-2 border-b flex justify-between">
        <h3 class="text-left !text-sm m-0 whitespace-pre-line">
          <template v-if="Array.isArray(label[0])">
            <span v-for="(part, i) in label[0]" :key="i">
              <template v-if="typeof part == 'string'">
                {{ part }}
              </template>
              <template v-else>
                <a
                  :href="part.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="vp-doc-link"
                >
                  {{ part.text }}
                </a>
              </template>
            </span>
          </template>

          <template v-else-if="label[2]">
            <a
              :href="label[2]"
              target="_blank"
              rel="noopener noreferrer"
              class="vp-doc-link"
            >
              {{ label[0] }}
            </a>
          </template>

          <template v-else>
            {{ label[0] }}
          </template>
        </h3>

        <h3 class="text-right !text-sm m-0">{{ String(label[1]) }}</h3>
      </div>
    </template>
  </aside>
</template>

<style scoped>
/* Copied from vp-doc.css */
a.vp-doc-link {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition:
    color 0.25s,
    opacity 0.25s;
}

a.vp-doc-link:hover {
  color: var(--vp-c-brand-2);
}

/* Remove border bottom on last item */
div.p-2.border-b:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
</style>