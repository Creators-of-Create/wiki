// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "vitepress";
import users from "./sidebars/users";
import developers from "./sidebars/developers";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Create Wiki",
  description: "Building Tools and Aesthetic Technology",

  cleanUrls: true,
  lastUpdated: true,

  head: [["link", { rel: "icon", href: "/create-icon-small.webp" }]],

  themeConfig: {
    logo: {
      src: "/create-icon-small.webp",
      width: 24,
      height: 24,
    },

    search: {
      // TODO - Switch to Algolia Search post deployment
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: {
      ...users,
      ...developers,
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Creators-of-Create/wiki",
      },
      { icon: "discord", link: "https://r.createmod.net/d" },
    ],

    editLink: {
      pattern: "https://github.com/Creators-of-Create/wiki/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },

  srcExclude: ["**/README.md"],
});