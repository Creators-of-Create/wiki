import { DefaultTheme } from "vitepress";

export default {
  "/users": [
    {
      text: "For Users",
      link: "/users",
      items: [
        // TODO - Finish this
        // { text: "Common Issues", link: "/users/common-issues" },

        //  Begin Wiki
        // {
        //   text: "Pondering",
        //   link: "/users/pondering"
        // },
        
        // TODO - Redo this, it's really old and needs a update
        // {
        //   text: "How to use Create Schematics",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Saving schematics",
        //       link: "/users/schematics/saving-schematic",
        //     },
        //     {
        //       text: "Loading schematics",
        //       link: "/users/schematics/loading-and-positioning-schematics",
        //     },
        //     {
        //       text: "Printing schematics",
        //       link: "/users/schematics/printing-schematic",
        //     },
        //   ],
        // },

        //  Group addons/integrations together for clearer organization
        {
          text: "Addons & Integrations",
          collapsed: true,
          items: [
            //  Computer Craft (might need to restructure nesting)
            {
              text: "Create's Computercraft Integration",
              collapsed: true,
              items: [
                {
                  //  Combine into one page?
                  text: "Trains",
                  items: [
                    {
                      text: "Train station",
                      link: "/users/cc-tweaked-integration/train/train-station",
                    },
                    {
                      text: "Train schedule",
                      link: "/users/cc-tweaked-integration/train/train-schedule",
                    },
                  ],
                },
                {
                  text: "Display Link",
                  link: "/users/cc-tweaked-integration/display-link",
                },
                {
                  text: "Rotational Speed Controller",
                  link: "/users/cc-tweaked-integration/rotational-speed-controller",
                },
                {
                  text: "Sequenced Gearshift",
                  link: "/users/cc-tweaked-integration/sequenced-gearshift",
                },
                {
                  text: "Speedometer",
                  link: "/users/cc-tweaked-integration/speedometer",
                },
                {
                  text: "Stressometer",
                  link: "/users/cc-tweaked-integration/stressometer",
                },
              ],
            },
            //  Other addons here
          ]
        },

        //  Everything not related to mod guidance
        {
          text: "About Create",
          collapsed: true,
          items: [
            {
              text: "Development Status",
              link: "/users/about/development-status",
            },
            { text: "Supporting Create", link: "/users/about/support-create" },
            { text: "View changelogs", link: "/users/about/changelogs/" },
          ]
        },        
      ],
    },
  ],
} as DefaultTheme.SidebarMulti;
