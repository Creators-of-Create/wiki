import { ItemData, Entry, TableData, ItemDataTableRowName } from "./types";

const itemDataDisplayNames: Record<keyof ItemData, string> = {
  renewable: "[Renewable](https://minecraft.wiki/w/Renewable_resource)",
  stackable: "Stackable",
  tools: "Tool",
  blastResistance:
    "[Blast Resistance](https://minecraft.wiki/w/Explosion#Blast_resistance)",
  hardness: "[Hardness](https://minecraft.wiki/w/Breaking#Blocks_by_hardness)",
  isSolid: "[Solid Block](https://minecraft.wiki/w/Solid_block)",
  isFull: "Full Block",
  isTransparent: "[Transparent](https://minecraft.wiki/w/Opacity)",
  isLuminous: "[Luminous](https://minecraft.wiki/w/Light)",
  isFlammable: "[Flammable](https://minecraft.wiki/w/Flammable)",
  isLavaFlammable: "Catches fire from lava",
};

export const typedEntries = <T>(obj: T) => Object.entries(obj) as Entry<T>[];
export const itemImage = (item: string) => `/assets/items/webp/${item}.webp`;

// TODO this should be refactored to provide autocomplete, which inevitably involves a huge file somewhere.
// As a tradeoff, it will be MUCH easier to refer to items in the future, anywhere in the wiki

// TODO this should also return more than just an image. Probably be renamed to item() and return more info.

export const getDataDisplayName = (k: keyof ItemData): ItemDataTableRowName => {
  const LINK_RE = /\[(.+)\]\((.+)\)/;
  const text = itemDataDisplayNames[k];
  if (LINK_RE.test(text)) {
    const matches = text.match(LINK_RE);
    return { isLink: true, text: matches[1], href: matches[2] };
  } else {
    return { isLink: false, text };
  }
};

export const formatTableData = (itemData: ItemData) =>
  typedEntries(itemData).map(
    ([k, v]) => [getDataDisplayName(k), [k, v]] as TableData
  );
