// noinspection JSUnusedGlobalSymbols

// https://vitepress.dev/guide/custom-theme
import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { h } from "vue";
import { tryToRenderInfoBox } from "../InfoBox";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "aside-outline-before": () => tryToRenderInfoBox(),
    });
  },
} satisfies Theme;