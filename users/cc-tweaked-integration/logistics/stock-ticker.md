| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getItemCount()`](#getItemCount) | Counts the number of items in the network |
| [`list()`](#list)  | Lists all items in the storage |
| [`listDetailed()`](#listDetailed)  | Lists all items in the storage with details (slower) |
| [`request(filter, [address])`](#request)            | Requests a package for the network |

---

### `getItemCount()` {#getItemCount}

Counts the number of items in the network.

**Returns**

- `number` The number of items in the system.

---

### `list()` {#list}

Lists basic information about all items in the network.

**Returns**

- `table` with basic item information like: 
```lua
{
  {
    name = "minecraft:apple",
    count = 1,
  },
  {
    name = "minecraft:stick",
    count = 1,
  },
}
```

---


### `listDetailed()` {#listDetailed}

Lists detailed information about all items in the network.

**Returns**

- `table` with detailed item information like: 
```lua
  {
    count = 1,
    itemGroups = {
      {
        id = "minecraft:food_and_drinks",
        displayName = "Food & Drinks",
      },
    },
    tags = {
      [ "c:foods/fruit" ] = true,
      [ "c:animal_foods" ] = true,
      [ "minecraft:horse_food" ] = true,
      [ "c:foods" ] = true,
    },
    name = "minecraft:apple",
    maxCount = 64,
    displayName = "Apple",
  },
  {
    enchantments = {
      {
        level = 2,
        name = "minecraft:knockback",
        displayName = "Knockback II",
      },
    },
    name = "minecraft:stick",
    itemGroups = {},
    tags = {
      [ "c:rods/wooden" ] = true,
      [ "c:rods" ] = true,
    },
    count = 1,
    maxCount = 64,
    displayName = "Stick",
  },
}
```

---


### `request(filter, [address])` {#request}

Requests for a package in the network with the given filter. The filter is a table of item traits that's evaluated as follows:

for all items in the network (until the `count` parameter is reached):
- If a string under `name`/`nbt` is provided, it will only pick an item with a matching `name`/`nbt`.
- If a number under `damage`/`durability`/`maxDamage`/`maxCount` is provided, it will only pick an item with a matching `damage`/`durability`/`maxDamage`/`maxCount`.
- If a table under `tags` is provied, it will only pick items that have **at least** all of the given tags
- If a table under `enchantments` is provied, it will only pick items that have **exactly** one enchantment per set of `name`, `displayName` and/or `level`. The filters are executed in order.

The candidates that pass the filter are then passed on to be requested manually by the network, like if you opened the Stock Keeper's ui.

**Parameters**

- _filter:_ `table`  Table of values to filter items by, similar to that of [Inventory.getItemDetail()](https://tweaked.cc/generic_peripheral/inventory.html#v:getItemDetail).
- _address?:_ `string = ""` Target address given to the package.

**Returns**
- `number` Number of items requested with the given filter.

**Usage**
```lua
stockTicker = peripheral.find("Create_StockTicker")
stockTicker.request(
	{
		name = "minecraft:enchanted_book", -- name of the item. fills in "minecraft:" at the start if mod name isn't provided
		tags = { -- required tags for the item to pass
			["minecraft:bookshelf_books"] = true, -- any item that doesn't have this tag gets excluded
		},
		enchantments = { -- the item has exactly: 
			{ -- 1 enchant that:
				name = "minecraft:unbreaking", -- has this name (Doesn't need to be specified) 
				level = 1, -- and has this level (Doesn't need to be specified)
                --displayName = "Unbreaking I" -- has this display name (Doesn't need to be specified)
			}, -- 1 other enchant that:
            {
                --is any enchant
            }
		},
		--damage = 0, -- how much damage has the item's durability taken
        --durability = 1, -- how hard is it for the item to take durability damage
		--maxDamage = 64, -- how much durability damage the item can take before breaking
		maxCount = 1, -- max stack size
		--nbt = "dbe2b6a18b578d3118ebc849409d46f5", -- hashed nbt of the item.
		count = 3 -- how many items you want to request
	}, "MyAddress" -- shipping address
)
```
Should request up to three Unbreaking I enchantment books that also have another enchant, like Unbreaking I+Soul Speed II, Unreaking I+Protection I and Sharpness I+Unbreaking I. 

While:
```lua
stockTicker.request({})
```
Would request all items in the network, because all items would pass the empty filter.
