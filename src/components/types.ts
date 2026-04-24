// #region Utility types

export type Entry<T> = [k: keyof T, v: T[keyof T]];
export type ValueOf<T> = T[keyof T];

// #endregion
// #region Types

export type Tool = { type: ToolType; quality: ToolQuality };
export type ToolType = "axe" | "pickaxe" | "shovel" | "hoe";
export type ToolQuality =
  | "any"
  | "wooden"
  | "stone"
  | "copper"
  | "iron"
  | "golden"
  | "diamond"
  | "netherite";

export type ItemDataTableRowName =
  | { isLink: false; text: string }
  | { isLink: true; text: string; href: string };
export type TableData = [name: ItemDataTableRowName, value: Entry<ItemData>];

// #endregion
// #region Interfaces

export interface ItemData {
  renewable: boolean;
  stackable: [boolean, number];
  tools: Tool[];
  blastResistance: number;
  hardness: number;
  isSolid: boolean;
  isFull: boolean;
  isTransparent: boolean;
  isLuminous: boolean;
  isFlammable: boolean;
  isLavaFlammable: boolean;
}

export interface Image {
  displayName: string;
  variantName: string;
  srcUrl: string;
}

// #endregion
