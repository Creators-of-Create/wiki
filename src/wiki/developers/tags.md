---
prev: false
---

Create registers new [Tags](https://minecraft.wiki/w/Tag) which can be added to blocks, items or fluids using datapacks
or packdev tools like KubeJS.  
Some of them expose special behavior within and/or outside the mod.

## Block Tags

- `create:brittle`\
  Blocks that are connected to others\
  Example: Doors, bells, value handles
- `create:copycat_allow`\
  Blocks which players should be able to use in copycat blocks
- `create:copycat_deny`\
  Blocks which players should not be able to use in copycat blocks
- `create:fan_transparent`\
  Blocks which will not stop air flows from fans, no matter the voxel shape\
  Example: Iron Bars
- `create:girdable_track`\
  Track blocks that support having girders at under them via the offhand placement system
- `create:movable_empty_collider`\
  Blocks which should be able to move on contraptions, but would otherwise be ignored due to their empty collision
  shape\
  Example: Cobweb
- `create:non_movable` (`forge:relocation_not_supported` also works)\
  Blocks which cannot be moved by contraptions
- `create:non_breakable`\
  Blocks which cannot be broken by drills and saws
- `create:passive_boiler_heaters`\
  Blocks which can provide passive heat to the steam engine multiblock. Not as strong as active Blaze Burners\
  Example: Campfire
- `create:safe_nbt`\
  Blocks tagged safe_nbt will keep their nbt data when printed by a Schematicannon\
  Example: Banners, Signs
- `create:tree_attachments`\
  Blocks which should be harvested as part of a tree when cut by a Mechanical Saw\
  Example: Mangrove Propagule
- `create:windmill_sails`\
  Blocks which can count toward a functional windmill structure\
  Example: Wool
- `create:wrench_pickup`\
  Blocks which can be broken and collected very quickly using a Wrench (Sneak-Right-Click)\
  Example: Rails, Various Redstone components
- `#create:chest_mounted_storage` and `#create:simple_mounted_storage`\
  For simple mounted storages
- `#create:fallback_mounted_storage_blacklist`\
  Blocks which shouldn't fallback to the fallback mounted storage handler
- `create:roots`\
  Tree root blocks which should be harvested as part of a tree when cut by a Mechanical Saw\
  Example: Mangrove Roots
- `create:sugar_cane_variants`\
  Sugar-cane like blocks that can be harvested by the harvester
- `create:non_harvestable`\
  Blocks that should not be harvested by the harvester

#### Fan processing block tags:

- `create:fan_processing_catalysts/blasting`\
  Blocks which fans will consider as catalysts for blasting via fan processing.
- `create:fan_processing_catalysts/haunting`\
  Blocks which fans will consider as catalysts for haunting via fan processing.
- `create:fan_processing_catalysts/smoking`\
  Blocks which fans will consider as catalysts for smoking via fan processing.
- `create:fan_processing_catalysts/splashing`\
  Blocks which fans will consider as catalysts for splashing via fan processing.

## Item Tags

- `create:blaze_burner_fuel/regular`\
  Items which do not have "burn time" for furnaces, but should act as food for the blaze burner (same value as coal)
- `create:blaze_burner_fuel/special`\
  Items which upon being fed to blaze burners should cause them to be superheated (same value as blaze cakes)
- `create:upright_on_belt`\
  Items which should render standing up on belts or depots, much like fluid container items\
  Example: Blaze Cake
- `create:pressurized_air_sources`\
  Items which can provide air much like a Copper Backtank. Uses the "Air" value in its nbt data to operate

Other Tags are added and used primarily for crafting recipes and or advancements:

- `create:casing`
- `create:create_ingots`
- `create:crushed_ores`
- `create:modded_stripped_logs`
- `create:modded_stripped_wood`
- `create:vanilla_stripped_logs`
- `create:vanilla_stripped_wood`
- `create:sandpaper`
- `create:seats`
- `create:sleepers`
- `create:toolboxes`
- `create:valve_handles`
- `create:tracks`

## Fluid Tags

#### Bottomless tags:

- `create:bottomless/allow`\
  Fluids which **can** be drained infinitely using a hose pulley. Requires config to be in allowlist mode
- `create:bottomless/deny`\
  Fluids which **cannot** be drained infinitely using a hose pulley. Requires config to be in deny-list mode

By default, configs are set to allowlist mode, and only water and lava are tagged bottomless/allow

#### Fan processing fluid tags:

- `create:fan_processing_catalysts/blasting`\
  Fluids which fans will consider as catalysts for blasting via fan processing.
- `create:fan_processing_catalysts/haunting`\
  Fluids which fans will consider as catalysts for haunting via fan processing.
- `create:fan_processing_catalysts/smoking`\
  Fluids which fans will consider as catalysts for smoking via fan processing.
- `create:fan_processing_catalysts/splashing`\
  Fluids which fans will consider as catalysts for splashing via fan processing.

## Entity Tags

- `create:blaze_burner_capturable`\
  Entities which can be captured by blaze burner cages
- `create:ignore_seat`\
  Entities which should not sit in seats
