---
infoBox:
  title: Shaft
  image: /assets/items/webp/shaft.webp
  imageAlt: Image of a shaft

  renewable: true
  stackable: 64
  tools: whatever # TODO
  blastResistance: 6
  hardness: 1.5
  luminous: false
  transparent: true
  waterloggable: true
  flammable: false
  catchesFireFromLava: false

#    imageAlt: z.string(),
#
#    renewable: z.boolean(),
#    stackable: z.union([z.number(), z.literal(false)]),
#    tools: z.any(), // TODO: improve this later
#    blastResistance: z.number(),
#    hardness: z.number(),
#    luminous: z.boolean(),
#    transparent: z.boolean(),
#    waterloggable: z.boolean(),
#    flammable: z.boolean(),
#    catchesFireFromLava: z.boolean(),
---

# Shafts

The shaft is a basic mechanical component in Create. A shaft can be used to connect two mechanical components such that the rotation of one rotates the other. Shafts also serve as the only blocks upon which Mechanical Belts can be placed.

<img src="/assets/items/webp/shaft.webp" alt="Shaft" height="256"/>

An Encased Shaft is created by right-clicking a shaft with an Andesite Casing or a Brass Casing, taking up an entire block to allow shafts to cleanly pass through walls. This still allows the shaft to relay rotation but prevents belts from being placed on the shaft.

## Usage

### Connecting Components

When two mechanical components are connected by a shaft, any rotational force provided to either component will also be provided to the other component at the same speed. As such, if both components provide stress, this can cause the machine to become overstressed.

### Mechanical Belts

A Mechanical Belt must be placed between two shafts. The shafts must be horizontal, parallel to each other, and perpendicular to the belt itself, and they must be aligned horizontally, vertically, or diagonally\*. No obstruction can exist between the two endpoints with the exception of other shafts. An Andesite/Brass Casing can be placed over any segment of a mechanical belt, including segments that contain shafts, to encase it.

> [!IMPORTANT]
> You cannot have any other diagonal angles other than 45°.