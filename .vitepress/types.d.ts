export interface InfoBoxProps {
  title: string;
  image: string;
  imageAlt: string;

  // TODO - Rethink
  renewable: boolean;
  stackable: number | false;
  tools: object; // TODO - This needs something better
  blastResistance: number;
  hardness: number;
  luminous: boolean;
  transparent: boolean;
  waterloggable: boolean;
  flammable: boolean;
  catchesFireFromLava: boolean;
}

export type LabelPart = string | { text: string; href: string };

export type InfoBarLabel = [
  leftText: string | LabelPart[],
  rightText: unknown,
  globalLink?: string,
];