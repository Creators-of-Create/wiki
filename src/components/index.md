# Testing grounds

## Infobox

<Infobox name="Cogwheel" :images :info />

<script setup lang="ts">
import { itemImage } from "./helpers";
import Infobox from "./Infobox.vue";
import { ItemData } from "./types";

const images = [
  {
    displayName: "Small Cogwheel",
    variantName: "Small",
    srcUrl: itemImage('cogwheel')
  },
  {
    displayName: "Large Cogwheel",
    variantName: "Large",
    srcUrl: itemImage('large_cogwheel')
  },
]

const info: ItemData = {
  renewable: true,
  stackable: [true, 64],
  tools: [{type: 'pickaxe', quality: 'wooden'}, {type: 'axe', quality: 'wooden'}],
  blastResistance: 6,
  hardness: 1.5,
  isSolid: false,
  isFull: false,
  isTransparent: true,
  isLuminous: false,
  isFlammable: false,
  isLavaFlammable: false,
}
</script>
