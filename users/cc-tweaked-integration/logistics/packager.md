| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getAddress()`](#getAddress)            | Gets the packager's address |
| [`setAddress([address])`](#setAddress)            | Sets the packager's address |
| [`getItemCount()`](#getItemCount) | Counts the number of items in the connected inventory |
| [`list()`](#list)  | Lists all items in the connected inventory |
| [`listDetailed()`](#listDetailed)  | Lists all items in the connected inventory with details (slower) |
| [`makePackage()`](#makePackage)            | Makes a package |
| [`getPackageItems()`](#getPackageItems)            | Checks the contents of the currently held package |

---


### `getAddress()` {#getAddress}

Gets the Packager's address.

**Returns**

- `string` With the address currently in use. 

---

### `setAddress([address])` {#setAddress}

Sets the Packager's address to the given variable until it tries to make a package with no computer attached, at which point it forgets about it and goes back to normal behavior.
If you want to programatically assign it an address every time, it's a good idea to put .setAddress in a startup.lua file, so it applies the address you want on chunkload.

If the address arg is nil, it'll go back to the default sign-based behavior again.

**Parameters**

- _address?:_ `string = nil` Force every package to be addressed to `address`. Goes back to default if address is `nil`.

---

### `getItemCount()` {#getItemCount}

Counts the number of items in the connected inventory.

**Returns**

- `number` The number of items in the connected inventory.

---

### `list()` {#list}

Lists basic information about all items in the connected inventory.

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

Lists detailed information about all items in the connected inventory.

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

### `makePackage()` {#makePackage}

Activates the packager like if it was powered by redstone. It operates by the same rule as a button press, but unlike a redstone signal, returns a value on if it actually succeeded at making a package.

**Returns**
- `boolean` whether a new package was made successfuly.

---

### `getPackageItems()` {#getPackageItems}

**Returns**
- `table` with detailed item information or `nil` if there's no package.
