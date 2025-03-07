# Mechanical Crafter

Mechanical Crafters are machines that can automatically craft items.

<img src="../assets/blocks/mechanical_crafter.png" alt="Mechanical Crafter" width="256"/>

## Usage

### Setup

Right click the front of a Mechanical Crafter with a Wrench to change the direction it sends items during crafting. The Mechanical Crafters are only connected by this path.
Arrangment

Mechanical Crafters can be automatically filled by Funnels or Hoppers.

On the back and sides of Mechanical Crafters, a Wrench can be used to connect or disconnect the inventory of two adjacent crafters. Crafters can share inventories while not participating in the same crafting recipe.

Items can also be inserted or removed by hand.

### Power

Each Mechanical Crafter has an internal gear that can only be powered by adjacent Mechanical Crafters or any size Cogwheel. This means only 1 Mechanical Crafter in a setup needs to be powered by a Cogwheel.

### Auto-Crafting

When powered by rotational force and either powered with Redstone or all crafter slots are filled, Mechanical Crafters will send their items to adjacent crafters. For a successful recipe, the items must eventually meet in one crafter. Once all of the items reach the final Crafter, they will turn into the product. Crafters with Crafter Slot Covers act as empty spaces in a recipe; they can also be used to connect the inventory of otherwise separate crafters. Crafter Slot Covers will not move as recipe items will.

Powered Mechanical Crafters will start crafting once every Mechanical Crafter has been filled, or when they receive a redstone signal.

Mechanical Crafters are able to assemble invalid crafting recipes, but will eject the items once they are together instead of turning them into the crafting product.

### Automating Crafting

Directly adjacent slots can be merged. This means that recipes that involve a block or ring of one material, such as andesite alloy, will hold only that one item type. The material can then be fed in via a hopper from the side.

### Output

Once a recipe is assembled in the final Crafter, the item will either be placed into the inventory of the block the Crafter's path sends items to, or will be ejected into the world at that side of the Crafter if no such block exists.

If the final Crafter directs the finished product back into the recipe, the item must be manually removed from the Crafters by a player.

### Throughput (Speed)

There are 2 variables that effect the crafting speed of the Mechanical Crafter: RPM and the length of the longest chain/chains of connected crafters in the crafting setup. A chain of connected crafters is a chain of crafters targeting each other with the next crafter in the chain being the crafter targeted

To calculate the exact number of game ticks it take to craft one recipe (gt/1), use this formula:

${\displaystyle s=min(max(RPM,4),250)}$

```math
{\displaystyle gt/1 = floor(2000/s+1)+floor(500/s+1)+floor(Max(100, s+1)/speed+1)*(longestchain-1)+floor(1000/s+1)*(longestchain-1)}
```

To calculate the exact number of recipes per second (r/s), divide the number of game ticks by 20:

${\displaystyle s=min(max(RPM,4),250)}$

```math
{\displaystyle r/s = {\frac {floor(2000/s+1)+floor(500/s+1)+floor(Max(100, s+1)/speed+1)*(longestcrafterschain-1)+floor(1000/s+1)*(longestcrafterschain-1)}{20}}}
```
