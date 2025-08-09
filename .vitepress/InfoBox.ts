import { useData } from "vitepress";
import { InfoBoxProps } from "./types";
import { h } from "vue";
import InfoBoxComponent from "../src/components/InfoBoxComponent.vue";
import { z } from "zod";

const InfoBoxPropsSchema = z.object({
  title: z.string(),
  image: z.string(),
  imageAlt: z.string(),

  renewable: z.boolean(),
  stackable: z.union([z.number(), z.literal(false)]),
  tools: z.any(), // TODO: improve this later
  blastResistance: z.number(),
  hardness: z.number(),
  luminous: z.boolean(),
  transparent: z.boolean(),
  waterloggable: z.boolean().default(false),
  flammable: z.boolean(),
  catchesFireFromLava: z.boolean(),
});

export function tryToRenderInfoBox() {
  const { frontmatter } = useData();

  const infoBox: InfoBoxProps = frontmatter.value.infoBox;
  if (infoBox != null) {
    try {
      const props = InfoBoxPropsSchema.parse(infoBox) as InfoBoxProps;
      return h(InfoBoxComponent, props);
    } catch (e) {
      throw new Error(`[InfoBox] Invalid frontmatter: ${e}`);
    }
  }

  return null;
}