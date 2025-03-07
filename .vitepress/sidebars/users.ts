import { DefaultTheme } from "vitepress";

export default {
  "/users": [
    {
      text: "For Users",
      link: "/users",
      items: [
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
            { text: "View changelogs", link: "/users/changelogs/" },
          ]
        },

        //  Getting Started Section
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            {
              text: "Pondering",
              link: "/users/utility/pondering"
            },
            {
              text: "Engineer's Goggles",
              link: "/users/utility/engineers-goggles"
            },
            {
              text: "Andesite Alloy",
              link: "/users/materials/andesite-alloy" 
            },
            {
              text: "Shafts",
              link: "/users/andesite-related/shafts"
            },
            {
              text: "Cogwheels",
              link: "/users/andesite-related/cogwheels"
            },
            {
              text: "Waterwheels",
              link: "/users/andesite-related/waterwheels"
            },
            {
              text: "Belts",
              link: ""
            },

          ]
        },

        //  Materials
        {
          text: "Materials",
          collapsed: true,
          items: [
            {
              text: "Andesite Alloy",
              link: "/users/materials/andesite-alloy"
            },
            {
              text: "Copper",
              link: "/users/materials/copper"
            },
            {
              text: "Brass",
              link: "/users/materials/brass"
            },
            {
              text: "Zinc",
              link: "/users/materials/zinc"
            }
          ]
        },

        // //  SU Generation
        // {
        //   text: "Generating Stress",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Rotational Force",
        //       link: ""
        //     },
        //   ]
        // },

        //  Ponder categories as is in game (mostly)
        {
          text: "Kinetic Blocks",
          collapsed: true,
          items: [
            //  Done - Needs Review
            {
              text: "Shafts",
              link: "/users/andesite-related/shafts"
            },
            //  Done - Needs Review
            {
              text: "Cogwheels",
              link: "/users/andesite-related/cogwheels"
            },
            //  Done - Needs Review
            {
              text: "Belts",
              link: "/users/andesite-related/belts"
            },
            //  Done - Needs Review
            {
              text: "Gearboxes",
              link: "/users/andesite-related/gearboxes"
            },
            //  Done - Needs Review
            {
              text: "Clutch",
              link: "/users/andesite-related/clutch"
            },
            //  Done - Needs Review
            {
              text: "Gearshift",
              link: "/users/andesite-related/gearshift"
            },
            //  Done - Needs Review
            {
              text: "Encased Chain Drive",
              link: "/users/andesite-related/encased-chain-drive"
            },
            //  Done - Needs Review
            {
              text: "Adjustable Chain Gearshift",
              link: "/users/andesite-related/adjustable-chain-gearshift"
            },
            // {
            //   text: "Chain Conveyor",
            //   link: ""
            // },
            //  Done - Needs Review
            {
              text: "Sequenced Gear Shift",
              link: "/users/brass-related/sequenced-gearshift"
            },
            //  Done - Needs Review
            {
              text: "Rotation Speed Controller",
              link: "/users/brass-related/rotation-speed-controller"
            },
          ]
        },
        {
          text: "Kinetic Sources",
          collapsed: true,
          items: [
            {
              text: "Hand Crank",
              link: "/users/andesite-related/hand-crank"
            },
            // {
            //   text: "Waterwheels",
            //   link: ""
            // },
            {
              text: "Windmill Bearing",
              link: "/users/andesite-related/windmill-bearing"
            },
            {
              text: "Valve Handle",
              link: "/users/copper-related/valve-handle"
            },
            {
              text: "Steam Engine",
              link: "/users/copper-related/steam-engine"
            },
          ]
        },
        {
          text: "Kinetic Appliances",
          collapsed: true,
          items: [
            {
              text: "Millstone",
              link: "/users/andesite-related/millstone"
            },
            {
              text: "Encased Fan",
              link: "/users/andesite-related/encased-fan"
            },
            {
              text: "Mechanical Press",
              link: "/users/andesite-related/mechanical-press"
            },
            {
              text: "Mechanical Mixer",
              link: "/users/andesite-related/mechanical-mixer"
            },
            {
              text: "Mechanical Crafter",
              link: "/users/brass-related/mechanical-crafter"
            },
            // {
            //   text: "Mechanical Drill",
            //   link: ""
            // },
            // {
            //   text: "Mechanical Saw",
            //   link: ""
            // },
            // {
            //   text: "Deployer",
            //   link: ""
            // },
            // {
            //   text: "Mechanical Arm",
            //   link: ""
            // },
            // {
            //   text: "Mechanical Piston",
            //   link: ""
            // },
            // {
            //   text: "Rope Pulley",
            //   link: ""
            // },
            // {
            //   text: "Elevator Pulley",
            //   link: ""
            // },
            // {
            //   text: "Mechanical Bearing",
            //   link: ""
            // },
            // {
            //   text: "Gantry Shaft",
            //   link: ""
            // },
            // {
            //   text: "Gantry Carriage",
            //   link: ""
            // },
            // {
            //   text: "Clockwork Bearing",
            //   link: ""
            // },
            // {
            //   text: "Display Board",
            //   link: ""
            // },
            // {
            //   text: "Crushing Wheel",
            //   link: ""
            // },
          ]
        },

        // {
        //   text: "Fluid Manipulators",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Fluid Pipe",
        //       link: ""
        //     },
        //     {
        //       text: "Mechanical Pump",
        //       link: ""
        //     },
        //     {
        //       text: "Fluid Valve",
        //       link: ""
        //     },
        //     {
        //       text: "Smart Fluid Pipe",
        //       link: ""
        //     },
        //     {
        //       text: "Hose Pulley",
        //       link: ""
        //     },
        //     {
        //       text: "Item Drain",
        //       link: ""
        //     },
        //     {
        //       text: "Spout",
        //       link: ""
        //     },
        //     {
        //       text: "Portable Fluid Interface",
        //       link: ""
        //     },
        //     {
        //       text: "Fluid Tank",
        //       link: ""
        //     },
        //   ]
        // },
        // {
        //   text: "Item Transportation",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Belt",
        //       link: ""
        //     },
        //     {
        //       text: "List Filter",
        //       link: ""
        //     },
        //     {
        //       text: "Attribute Filter",
        //       link: ""
        //     },
        //     {
        //       text: "Chute",
        //       link: ""
        //     },
        //     {
        //       text: "Smart Chute",
        //       link: ""
        //     },
        //     {
        //       text: "Item Vault",
        //       link: ""
        //     },
        //     {
        //       text: "Depot",
        //       link: ""
        //     },
        //     {
        //       text: "Weighted Ejector",
        //       link: ""
        //     },
        //     {
        //       text: "Mechanical Arm",
        //       link: ""
        //     },
        //     {
        //       text: "Andesite Funnel",
        //       link: ""
        //     },
        //     {
        //       text: "Brass Funnel",
        //       link: ""
        //     },
        //     {
        //       text: "Andesite Tunnel",
        //       link: ""
        //     },
        //     {
        //       text: "Brass Tunnel",
        //       link: ""
        //     },
        //     {
        //       text: "Portable Storage Interface",
        //       link: ""
        //     },
        //   ]
        // },
        // {
        //   text: "High Logistics",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Packager",
        //       link: ""
        //     },
        //     {
        //       text: "Stock Link",
        //       link: ""
        //     },
        //     {
        //       text: "Stock Ticker",
        //       link: ""
        //     },
        //     {
        //       text: "Package Frogport",
        //       link: ""
        //     },
        //     {
        //       text: "White Postbox",
        //       link: ""
        //     },
        //     {
        //       text: "Redstone Requester",
        //       link: ""
        //     },
        //     {
        //       text: "Red Table Cloth",
        //       link: ""
        //     },
        //     {
        //       text: "Factory Gauge",
        //       link: ""
        //     },
        //     {
        //       text: "Re-Packager",
        //       link: ""
        //     },
        //     {
        //       text: "Package Filter",
        //       link: ""
        //     },
        //   ]
        // },
        // { 
        //   text: "Logic Components",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Smart Observer",
        //       link: ""
        //     },
        //     {
        //       text: "Threshold Switch",
        //       link: ""
        //     },
        //     {
        //       text: "Nixie Tube",
        //       link: ""
        //     },
        //     {
        //       text: "Redstone Contact",
        //       link: ""
        //     },
        //     {
        //       text: "Analog Lever",
        //       link: ""
        //     },
        //     {
        //       text: "Redstone Link",
        //       link: ""
        //     },
        //     {
        //       text: "Pulse Extender",
        //       link: ""
        //     },
        //     {
        //       text: "Pulse Repeater",
        //       link: ""
        //     },
        //     {
        //       text: "Pulse Timer",
        //       link: ""
        //     },
        //     {
        //       text: "Powereed Latch",
        //       link: ""
        //     },
        //     {
        //       text: "Powered Toggle Latch",
        //       link: ""
        //     },
        //     {
        //       text: "Rose Quartz Lamp",
        //       link: ""
        //     },
        //   ]
        // },
        // {
        //   text: "Movement Anchors",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "",
        //       link: ""
        //     }
        //   ]
        // },
        // {
        //   text: "Contraption Actors",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "",
        //       link: ""
        //     }
        //   ]
        // },
        // {
        //   text: "Block Attachment Utility",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "",
        //       link: ""
        //     }
        //   ]
        // },
        // {
        //   text: "Railway Equipment",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "",
        //       link: ""
        //     }
        //   ]
        // },
        // {
        //   text: "Aesthetics",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "",
        //       link: ""
        //     }
        //   ]
        // },
        // {
        //   text: "Creative Mode",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "",
        //       link: ""
        //     }
        //   ]
        // },
        
        // TODO - Finish this
        // { text: "Common Issues", link: "/users/common-issues" },

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

        //  Group integrations together for clearer organization
        {
          text: "Integrations",
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
            //  Other integrations here?
          ]
        },  
      ],
    },
  ],
} as DefaultTheme.SidebarMulti;
