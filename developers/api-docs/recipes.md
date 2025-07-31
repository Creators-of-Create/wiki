---
title: Custom Recipes
description: How to write recipes for Create using datapacks, modpack tools, and setup Recipe Datagen.

next: false
---

# Custom Recipes
***Creating Custom, Creative Recipes with Create***

Create, like Vanilla and plenty of other mods, uses the Datapack JSON format introduced in 1.13. This lets you further customize Create for whatever modpack you're playing with it on. This article will describe how to [set up your datapack](#getting-started), [add recipes with JSON](#adding-a-recipe), [add recipes with other mods](#adding-recipes-with-other-mods), and [set up automatic recipe generation in your addon](#recipe-generation).

## What even *is* a Datapack?
Datapacks are a Vanilla-provided method to modify, add, and remove certain content from the game. This includes World Generation, Advancements, Command Functions, Block/Mob/Loot drops, and much more—more are added practically every Minecraft update.  
  
We will be modifying Recipes with datapacks here. You may also want to modify Tags so you can provide multiple different inputs for your Recipe.

If you want to learn more about Data Packs, we recommend reading up on the [Minecraft Wiki](https://minecraft.wiki/w/Data_pack).

## What do I need?
You will need basic knowledge on how to write JSON and how to create a Datapack in order to create your recipe. You can study the [Creating a Datapack](https://minecraft.wiki/w/Tutorial:Creating_a_data_pack) page on the Minecraft Wiki and getting the following tools:

### Applications
- Text Editor: Most operating systems nowdays usually provide this (Notepad on Windows, TextEdit on Mac, and it varies on Linux), but we recommend getting a fancier tool suited for code like this, like [VSCode](https://code.visualstudio.com/) and [Notepad++](https://notepad-plus-plus.org/). These will highlight your code and point out any *syntax* errors you have made in your JSON.

### Mods (Optional)
- [JEI](https://modrinth.com/mod/jei) **(Recommended)**: lets you quickly preview your recipes in-game without having to attempt making them.
- [Paxi](https://modrinth.com/mod/paxi) (Fabric+NeoForge): If you're a modpack creator or wish to test in multiple worlds at once, Paxi can let you load datapacks globally.
- [KubeJS](https://modrinth.com/mod/kubejs) (Neoforge): KubeJS lets you write JavaScript to add recipes with a bit more automation and ease than manually writing them. It also lets you add items for your recipes and functions as another global datapack loader.
    - [KubeJS Create](https://modrinth.com/mod/kubejs-create/versions) is an addon for Create and KubeJS that allows you to make recipes even quicker. Base KubeJS can still do this with custom recipes, however.

## Getting Started
Once again, you should check out the [Creating a Datapack](https://minecraft.wiki/w/Tutorial:Creating_a_data_pack) page on the Minecraft Wiki. This provides good information on how to set up your datapack. However, **the wiki always reflects the latest version of Minecraft**, and you may encounter differences in the format between Minecraft versions. 

This will be a basic recap for 1.21.1+.

![A screenshot of Finder, showing the basic structure of a datapack including the recipe and tags folder](/media/developers/api-docs/recipes/pack_blank.png?url)  
This will be the basic structure of your datapack. Remember that the `recipe` folder is named `recipes` **before 1.21**.

`my_datapack_id` is an Alphanumeric string, **including** `_`. Change it to fit the **datapack** you're making, not the **mod** your recipes are targeting.

You also need a `pack.mcmeta` for your datapack to load.
```json [pack.mcmeta]
{
	"pack": {
		"pack_format": 48,
		"description": "An example Create datapack"
	}
}
```
*On 1.20.1, the `pack_format` is `15`.*

When you have created your datapack, run `/reload` in chat.
This command requires Operator—it's a quick way to reload your recipes and tags without rejoining/restarting your server.

To confirm that your datapack has loaded, run `/datapack list`. If it doesn't show up on the list, check your setup; if it shows up red, run `/datapack enable "file/my_datapack_id"`.

[An example datapack setup with these recipes can be found here.](https://github.com/vercte/example_create_datapack)

## Adding a Recipe
This is where knowing JSON really comes in. For a guide on writing a Vanilla recipe, see the Minecraft Wiki for the [Vanilla Recipe Format](https://minecraft.wiki/w/Recipe).

To start, add a recipe to the Recipes folder, optionally inside a folder for organization:
![Almost the same Finder screenshot, now including recipe/deploying/enchanted_golden_apple.json](/media/developers/api-docs/recipes/pack_with_recipe.png?url)

This will be a **deploying** recipe.
```json [enchanted_golden_apple.json]
{
    "type": "create:deploying",
    "ingredients": [
        {
            "item": "minecraft:golden_apple"
        },
        {
            "item": "create:experience_block"
        }
    ],
    "results": [
        {
            "id": "minecraft:enchanted_golden_apple"
        }
    ]
}
```
Upon `/reload`, JEI will show this recipe:
![A deploying recipe, showing a Block of Experience being deployed on a Golden Apple to make an Enchanted Golden Apple.](/media/developers/api-docs/recipes/deploying_enchanted_golden_apple.png?url)
Note: on 1.20.1 Create and Vanilla, the `id` in `results` is named `item` instead.

Congratulations! That's your first recipe!  
Recipe types that use this format, with one input:
- Milling (millstone, crushing wheels) `create:milling`
- Crushing (crushing wheels) `create:crushing`
- Cutting (mechanical saw) `create:cutting`
- Deploying (deployer) `create:deploying`
- Haunting (soul fire, encased fan) `create:haunting`
- Splashing (water, encased fan) `create:splashing`
- Sandpaper Polishing (sandpaper) `create:sandpaper_polishing`
- Item Application (by hand; e.g. andesite casing) `create:item_application`

## Fluid Ingredients
Recipes that use a basin (compacting, mixing) and recipes that use a spout or item drain can have fluids in the recipe.
Recipes that take in **one** item and **one** fluid always include both in `ingredients`, in that order.

Another example recipe, for the Spout this time, in `recipe/filling/exposed_copper.json`:
```json [exposed_copper.json]
{
    "type": "create:filling",
    "ingredients": [
        {
            "item": "minecraft:copper_block"
        },
        {
            "type": "fluid_stack",
            "amount": 1000,
            "fluid": "minecraft:water"
        }
    ],
    "results": [
        {
            "id": "minecraft:exposed_copper"
        }
    ]
}
```

And the resulting recipe:
![A spouting recipe, showing a bucket of water being spouted on a Block of Copper to make Exposed Copper.](/media/developers/api-docs/recipes/filling_exposed_copper.png?url)

The key part here is the fluid ingredient:
```json [1.21.1]
{
    "type": "fluid_stack",
    "amount": 1000,
    "fluid": "minecraft:water"
}
```
`amount` is in Millibuckets, which means 1,000mb is a full bucket.  
**On Fabric**, this is in Droplets instead, where 81,000dr is a full bucket.

## Extra Arguments
`heat_requirement`: Basin Recipes have the `heat_requirement` (`heatRequirement` on 1.20.1). This can be `none`, `heated`, or `superheated`, and reflects blaze heating below it. This should be omitted on recipes that don't support it, and it can be omitted if `none`.

`processing_time`: Only applies to `create:milling`, `create:crushing`, and `create:cutting`. How long this duration really is in-game varies between recipe types and how fast the machines are running.

`chance` (inside a result): The chance, out of 100, that this result will be yielded.

## Sequenced Assembly
Sequenced Assembly is a much more complicated Create Recipe, involving a parent recipe and multiple processing recipes nested inside it.

They take in one ingredient (`ingredient`), turn it into a transitional item (`transitional_item`) during processing, and turn it into the results at the end.

A basic rundown of the arguments:
- `loops`: Required. How many times the sequence has to be done.
- `sequence`: Required. A list of compatible processing recipes to include in the sequence.
    - These recipes have to return the `transitional_item` as a result.
    - Valid recipes: `create:pressing`, `create:cutting`, `create:deploying`, `create:filling`
    - If you want to make your own custom recipe types compatible with this, implement `IAssemblyRecipe`.
- `transitional_item`: The item to use while the recipe is in-progress (like the Incomplete Precision Mechanism).
    - This can be any item, but if you want the custom progress bar, your item has to be a `SequencedAssemblyItem`.

Here's how Create uses it for the Sturdy Sheet:
```json [sturdy_sheet.json]
{
    "type": "create:sequenced_assembly",
    "ingredient": {
        "tag": "c:dusts/obsidian"
    },
    "loops": 1,
    "results": [
        {
            "id": "create:sturdy_sheet"
        }
    ],
    "sequence": [
        {
            "type": "create:filling",
            "ingredients": [
                {
                    "item": "create:unprocessed_obsidian_sheet"
                },
                {
                    "type": "fluid_stack",
                    "amount": 500,
                    "fluid": "minecraft:lava"
                }
            ],
            "results": [
                {
                    "id": "create:unprocessed_obsidian_sheet"
                }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [
                {
                    "item": "create:unprocessed_obsidian_sheet"
                }
            ],
            "results": [
                {
                    "id": "create:unprocessed_obsidian_sheet"
                }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [
                {
                    "item": "create:unprocessed_obsidian_sheet"
                }
            ],
            "results": [
                {
                    "id": "create:unprocessed_obsidian_sheet"
                }
            ]
        }
    ],
    "transitional_item": {
        "id": "create:unprocessed_obsidian_sheet"
    }
}
```
![A sequenced assembly recipe for the Sturdy sheet, showing Obsidian dust having lava being spouted on it and then pressed two times.](/media/developers/api-docs/recipes/sequenced_sturdy_sheet.png?url)

Writing Sequenced Assembly recipes can get quite tedious and prone to mistake, so it's advised to [set up Data Generation] for them if you're developing an addon.

## Modifying/Removing recipes with Datapacks
If you want to remove recipes with a datapack, you can use the `filter` section of your `pack.mcmeta`.  
This section allows you to specify the IDs of recipes you would like to remove.

```json
{
  "pack": {
    "pack_format": 48,
    "description": "An example Create datapack"
  },
  "filter": {
    "block": [
        {
            "namespace": "create",
            "path": "recipe/mixing/brass_ingot"
        },
        {
            "namespace": "create",
            "path": "recipe/mixing/andesite_alloy.*"
        }
    ]
  }
}
```
This example removes the recipes for the Brass Ingot and Andesite Alloy (from both Iron and Zinc nuggets) via mixing.  

`filter.block` is an array which accepts an object with two optional keys:
- `namespace`: The namespace (`create`) in which the resource you want to remove is included. If unspecified, it applies to every namespace.
- `path`: The path (`recipe/mixing/brass_ingot`) where the resource you want to remove is located. If unspecified, it applies to every resource.

*These can be [regular expressions](https://en.wikipedia.org/wiki/regular_expression), if you know what those are.*

If you wish to modify a recipe, remove it using this method and re-create the recipe in your datapack with
whatever modification you wish to apply.

## Managing Recipes with Other Mods
You can avoid datapack setup using mods like KubeJS and CraftTweaker to modify parts of the game.

### KubeJS
TBD

## Recipe Generation
TBD