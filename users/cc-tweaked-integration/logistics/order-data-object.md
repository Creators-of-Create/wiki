| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getCrafts()`](#getCrafts)            | Lists the crafting recipes associated with the order |
| [`getIndex()`](#getIndex)            |  Gets the fragment index of the package |
| [`getItemDetail()`](#getItemDetail)            | Gets detailed information about an item in the complete order |
| [`getLinkIndex()`](#getLinkIndex)            |  Gets the Link index for this package |
| [`getOrderID()`](#getOrderID)            |  Gets the order's unique ID this package is part of |
| [`isFinal()`](#isFinal)            | Checks if this is the final package fragment for its index. |
| [`isFinalLink()`](#isFinalLink)            | Checks if the package is fully assembled and ready to craft |
| [`list()`](#list)            | Lists all items required for the complete Encoded Order |

::: tip What is Order Data?

Whenever you request a package in any way, other than by applying redstone signal to a packager, it will have Order Data attached. 

The Order Data features a couple values:
- Crafts – a list of crafting recipes the package will craft into on a 3x3 grid. This list can be empty (for example, from a redstone requester).
- Index - indicates the n\`th package that came from the same packager.
    - If you request 10 stacks of diamonds from one barrel. the first package would have 9 stacks and `index = 1`, while the second would have 1 stack and `index = 2`
- Link Index - indicates the n\'th packager that fulfills the order. 
    - If you request two stacks of diamonds, and you have a stack in each chest, the first packager's package's `linkIndex` would equal `1` and the second packager's package's `linkIndex` would equal `2`.
- OrderID - the unique ID of the order, shared between all packages split accross indexes/link indexes.
- Item List - the list of items that make the full order.

Packages can't tell how many more packages are ahead of them in Indexes/Link Indexes, but they know how many are before them, and can check if they're the final one (using [`isFinal`](#isFinal) or [`isFinalLink`](#isFinal)).

This is the data repackagers use to reassemble packages, and can help you make your own package sorting system. The data provided is **not** mutable and never changes.

:::

---


### `getCrafts()` {#getCrafts}

Gets the crafting recipes associated with the order.

**Returns**

- `table` of crafting recipes, like:
```lua
{
  {
    count = 5, -- Number of times this recipe needs to be crafted
    recipe = { -- Corresponds to crafting grid
      "minecraft:iron_nugget", "minecraft:iron_nugget", "minecraft:iron_nugget",
      "minecraft:iron_nugget", "create:cogwheel",       "minecraft:iron_nugget",
      "minecraft:iron_nugget", "minecraft:iron_nugget", "minecraft:iron_nugget"
    }
  },
  {
    count = 10,
    recipe = {
      nil, "minecraft:redstone_torch", nil, 
      nil, "minecraft:iron_ingot",     nil, 
      nil, "minecraft:glass_pane",     nil
    }
  }
}
```

---

### `getIndex()` {#getIndex}

Gets the index of the package.

**Returns**

- `number` The package index.

---

### `getItemDetail(slot)` {#getItemDetail}

Gets detailed information for a specific item stack in the order. The slot is the index of the item in `list()`.

**Only valid for packages with a link index of 1**. If the package is not the first in a linked order, this will return `nil`.

The returned information contains the same information as each item in [`list`](#list), as well as additional details like the display name (`displayName`), and item durability (`damage`, `maxDamage`, `durability`).

Some items include more information (such as enchantments) - it is recommended to print it out using [`textutils.serialize`](https://tweaked.cc/module/textutils.html#v:serialize) or in the Lua REPL, to explore what is available.

**Parameters**

- _slot_: `number` The slot to get information about.

**Throws**

- If the slot is out of range.

**Returns**

- `table` Information about the item in this slot, or `nil` if it is empty/it's `linkIndex` isn't equal to `1`, like:
```lua
{
  name = "minecraft:apple",
  itemGroups = {},
  tags = {},
  count = 1,
  maxCount = 64,
  displayName = "Apple",
}
```

---

### `getLinkIndex()` {#getLinkIndex}

Gets the Link Index of the package.

**Returns**

- `number` The link index of the package.
---

### `getOrderID()` {#getOrderID}

Gets the Order ID of the package.

**Returns**

- `number` The Order ID.

---

### `isFinal()` {#isFinal}

Indicates if this is the final package from the same packager.

**Returns**

- `boolean` `true` if this is the final package from the packager, `false` otherwise.
---

### `isFinalLink()` {#isFinalLink}

Indicates if this package is part of the last link in the order.

**Returns**

- `boolean` `true` if this is part of the final linked package in a chain, `false` otherwise.

---

### `list()` {#list}

Lists basic information about all items in the complete order, even if they are not in the package. 

The returned table is empty after re-packaging for individual crafts.

**Only valid for packages with a link index of 1**. If the package is not the first in a linked order, this will return `nil`.

Each item in the inventory is represented by a table containing basic information. More information can be fetched with [`getItemDetail`](#getItemDetail). The table contains the item `name`, the `count` and a (potentially `nil`) hash of the item's `nbt`. This NBT data doesn't contain anything useful, but allows you to distinguish identical items.

The returned table is never sparse, so you can iterate over it with [`ipairs`](https://www.lua.org/manual/5.1/manual.html#pdf-ipairs) just fine.


**Returns**

- `table` with basic item informatio, or `nil` if it's `linkIndex` isn't equal to `1`, like: 
```lua
{
  {
    name = "minecraft:apple",
    count = 1,
  },
  {
    nbt = "ce5c752cf2df5cf4ffb17d7b7bfacad7",
    count = 1,
    name = "minecraft:enchanted_book",
  },
}
