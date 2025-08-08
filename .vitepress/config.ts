// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "vitepress";
import users from "./sidebars/users";
import developers from "./sidebars/developers";
import githubLinks from "./github-links";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Create Wiki",
  description: "Building Tools and Aesthetic Technology",

  cleanUrls: true,
  lastUpdated: true,

  srcDir: "src",
  srcExclude: ["**/README.md"],

  head: [["link", { rel: "icon", href: "/assets/create-icon-small.webp" }]],

  themeConfig: {
    logo: {
      src: "/assets/create-icon-small.webp",
      width: 24,
      height: 24,
    },

    search: {
      provider: "algolia",
      options: {
        appId: "O356MVE57L",
        apiKey: "a15318635c598eb4366b704d06801027",
        indexName: "createmod",
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: "Home", link: "/" }],

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

  sitemap: {
    hostname: "https://wiki.createmod.net",
  },

  markdown: {
    config: (md) => {
      md.use(githubLinks);
    },
  },
});