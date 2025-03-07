# Mechanical Press

The Mechanical Press is a mechanical component that applies Pressing, Packing, and Compacting recipes to items below it. It is an important early-game item, as it is used to press Ingots into Sheets, which are important ingredients for higher-level components.

The Mechanical Press is powered by an internal Shaft, accessed from two opposite sides. Much like Shafts, Presses will relay rotation along their axis. It processes items faster when it receives faster rotational power.

<img src="../assets/blocks/mechanical_press.png" alt="Mechanical Press" width="256"/>

## Crafting

---

## Usage

---

### Pressing

By default, the Mechanical Press will apply Pressing recipes to items underneath it. This can be set up in two ways:

- When placed one space above any block, it will process all valid items on the block when given rotational power. Items with no pressing recipe are unaffected.
- When placed one space above a Mechanical Belt, it will automatically press incoming items, stalling the belt until each operation is done.

Items with no pressing recipe are ignored. Pressing recipes cannot be applied in bulk (unless you change the config.)

### Used with a Basin

<img src="../assets/blocks/basin.png" alt="Mechanical Press" width="256"/>

When a Mechanical Press is placed above a Basin, it will apply Packing or Compacting recipes to ingredients in the Basin. Packing and Compacting recipes are applied one at a time and cannot be applied in bulk.

### Compacting

The Press will automatically process any valid recipe it detects inside the Basin, regardless if there are leftovers inside, as long as the Basin has inventory space remaining. To follow a specific recipe, place a filter on the filter slot and choose your wanted output.

### Packing

Packing recipes are any `2x2` or `3x3` crafting recipe that uses the same item in every slot. The Mechanical Press will begin packing items as soon as there are enough of the same item.

## Speed

The Press takes a certain amount of time to process each item. The only parameter that affects the processing speed is the input rotational speed.

### Formula

The speed at which the Mechanical Press processes items can be calculated with the following formula:

```math
{\displaystyle t_{p}={\frac {240}{\left\lfloor 1+\max(0,\min(1,{\frac {\left|k\right|}{512}}))\times 59\right\rfloor }}}
```

where ${\displaystyle k}$ is the input RPM (rotations per minute) and ${\displaystyle t_{p}}$ is the amount of ticks it takes to process an item. Since the game runs at 20 ticks per second, the formula to get the number of seconds can be rewritten as

```math
{\displaystyle t_{p}={\frac {12}{\left\lfloor 1+\max(0,\min(1,{\frac {\left|k\right|}{512}}))\times 59\right\rfloor }}}
```

### Common Speeds

| RPM | Processing Time (sec/item) | Throughput (items/sec) |
| --- | -------------------------- | ---------------------- |
| 1   | 12                         | 0.083                  |
| 16  | 6                          | 0.167                  |
| 32  | 3                          | 0.333                  |
| 64  | 1.5                        | 0.667                  |
| 128 | 0.8                        | 1.25                   |
| 256 | 0.4                        | 2.5                    |
