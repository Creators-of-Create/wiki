// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "vitepress";
import { readFileSync, utimesSync } from "fs";
import { parse } from "yaml";
import { fileURLToPath } from "url";
import githubLinks from "./github-links";

const pagesFile = fileURLToPath(new URL('../pages.yml', import.meta.url));

const configFile = fileURLToPath(new URL('./config.ts', import.meta.url));

function loadPages() {
  return parse(readFileSync(pagesFile, 'utf8'))
}

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
      height: 24
    },

    search: {
      provider: "algolia",
      options: {
        appId: "O356MVE57L",
        apiKey: "a15318635c598eb4366b704d06801027",
        indexName: "createmod"
      }
    },

    sidebar: {
      '/wiki/': { base: '/wiki/', items: loadPages() }
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Creators-of-Create/wiki"
      },
      { icon: "discord", link: "https://r.createmod.net/d" }
    ],

    editLink: {
      pattern: "https://github.com/Creators-of-Create/wiki/edit/main/src/:path",
      text: "Edit this page on GitHub"
    }
  },

  sitemap: {
    hostname: "https://wiki.createmod.net"
  },

  markdown: {
    config: (md) => {
      md.use(githubLinks);
    }
  },
  
  vite: {
    plugins: [
      {
        name: 'watch-pages-yaml',
        
        configureServer(server) {
          server.watcher.add(pagesFile);
          
          let timer: ReturnType<typeof setTimeout> | undefined;
          
          server.watcher.on('change', changed => {
            if (changed !== pagesFile) return;
            
            clearTimeout(timer);
            
            timer = setTimeout(() => {
              const now = new Date();
              
              utimesSync(configFile, now, now);
            }, 50);
            
          });
        }
      }
    ]
  }
});
