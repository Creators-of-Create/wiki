import { DefaultTheme } from "vitepress";

export default {
  "/developers": [
    {
      text: "For Developers",
      link: "/developers",
      items: [
        {
          text: "Depend on Create",
          collapsed: true,
          items: [
            {
              text: "Forge",
              items: [
                {
                  text: "1.20.1",
                  link: "/developers/depend-on-create/forge-1.20.1",
                },
              ],
            },
            {
              text: "NeoForge",
              items: [
                {
                  text: "1.21.1",
                  link: "/developers/depend-on-create/neoforge-1.21.1",
                },
              ],
            },
            {
              text: "Fabric",
              link: "https://github.com/Fabricators-of-Create/create-fabric-addon-template",
            },
            {
              text: "Multiloader",
              link: "https://github.com/Fabricators-of-Create/create-multiloader-addon-template",
            },
          ],
        },
        {
          text: "API Documentation",
          // TODO: Write the API Docs page
          // link: "/developers/api-docs",
          collapsed: true,
          items: [
            {
              text: "Custom Recipes",
              link: "/developers/api-docs/recipes",
            },
          ]
        },
        {
          text: "Useful Tags",
          collapsed: true,
          items: [
            {
              text: "Block Tags",
              link: "/developers/tags#block-tags",
            },
            {
              text: "Item Tags",
              link: "/developers/tags#item-tags",
            },
            {
              text: "Fluid Tags",
              link: "/developers/tags#fluid-tags",
            },
          ],
        },
      ],
    },
  ],
} as DefaultTheme.SidebarMulti;
