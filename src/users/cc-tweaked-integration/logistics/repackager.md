| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getAddress()`](#getAddress)            | Gets the Re-Packager's address |
| [`getItemDetail(slot)`](#getItemDetail) | Gets detailed information about an item in an attached inventory's given slot |
| [`getPackage()`](#getPackage)            | Gets the [`package`](./package-object.md) object of the currently hald package |
| [`list()`](#list)  | Lists all items in the connected inventory |
| [`makePackage()`](#makePackage)            | Makes a package |
| [`setAddress([address])`](#setAddress)            | Sets the Re-Packager's address |

---


### `getAddress()` {#getAddress}

Gets the Re-Packager's address.

**Returns**

- `string` With the address currently in use. 

---


### `getItemDetail(slot)` {#getItemDetail}

Get detailed information about an item in the connected inventory.

The returned information contains the same information as each item in [`list`](#list), as well as additional details like the display name (`displayName`), and item durability (`damage`, `maxDamage`, `durability`).

Some items include more information (such as enchantments) - it is recommended to print it out using [`textutils.serialize`](https://tweaked.cc/module/textutils.html#v:serialize) in the Lua REPL, to explore what is available.

**Parameters**

- _slot:_ `number` The slot to get information about.

**Throws**

- If the slot is out of range.

**Returns**

- `table?` Information about the item in this slot, or `nil` if it is empty, like:
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

### `getPackage()` {#getPackage}

Get an interactive [`package`](./package-object.md) object for the package currently held by the re-packager.

Package objects return `true` on their respective [`isValid`](./package-object.md#isValid) function, and allow for the usage of [`setAddress`](./package-object.md#setAddress) while held inside a re-packager/re-packager.

**Returns**
- `table` of a [`package`](./package-object.md) object or `nil` if there is none.

---

### `list()` {#list}

List all items in the connected inventory. This returns a table, with an entry for each slot.

Each item in the inventory is represented by a table containing some basic information. More information can be fetched with [`getItemDetail`](#getItemDetail). The table contains the item `name`, the `count` and a (potentially `nil`) hash of the item's `nbt`. This NBT data doesn't contain anything useful, but allows you to distinguish identical items.

The returned table is sparse, so empty slots will be `nil` - it is recommended to loop over using [`pairs`](https://www.lua.org/manual/5.1/manual.html#pdf-pairs) rather than [`ipairs`](https://www.lua.org/manual/5.1/manual.html#pdf-ipairs).


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
  [ 10 ] = {
    nbt = "ce5c752cf2df5cf4ffb17d7b7bfacad7",
    count = 1,
    name = "minecraft:enchanted_book",
  },
}
```


---

### `makePackage()` {#makePackage}

Activates the re-packager like if it was powered by redstone. It operates by the same rule as a button press, but unlike a redstone signal, returns a value on if it actually succeeded at making a package.

**Returns**
- `boolean` whether a new package was made successfuly.


---


### `setAddress([address])` {#setAddress}

Sets the Re-Packager's address to the given variable until it tries to make a package with no computer attached, at which point it forgets about it and goes back to normal behavior.
If you want to programatically assign it an address every time, it's a good idea to put .setAddress in a startup.lua file, so it applies the address you want on chunkload.

If the address arg is `nil`, it'll go back to the default sign-based behavior again.

::: warning Warning
Repackagers only force-assign their address to non-encoded packages (the ones that don't craft into specific items).
:::

**Parameters**

- _address?:_ `string = nil` Force every package to be addressed to `address`. Goes back to default if address is `nil`.
