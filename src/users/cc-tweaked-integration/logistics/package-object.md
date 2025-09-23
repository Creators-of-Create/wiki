| Method                                 | Description                        |
| -------------------------------------- | ---------------------------------- |
| [`getAddress()`](#getAddress)            | Gets the package's address |
| [`getItemDetail(slot)`](#getItemDetail) | Gets detailed information about an item in the package |
| [`getOrderData()`](#getOrderData) | Gets the [`orderData`](./order-data-object.md) object associated with the package |
| [`isEditable()`](#isEditable)  | Checks if the package is editable |
| [`list()`](#list)  | Lists all items in the package |
| [`setAddress(address)`](#setAddress)            | Sets the package's address |
::: tip Mutability

Package Objects are snapshots of the package in the moment.

You can get your packageObject by either using `.getItemDetail` on a package (it'll expose a `package` field, which is this object), or by using a packager/re-packager's [`getPackage`](./packager.md#getPackage).

If by any means the package has its data changed, be it by an addon or by another computer using the [`setAddress`](#setAddress) function, the snapshot will not be notified, and it'll be outdated.

When a package is held within a packager/re-packager, if you call it using [`getPackage`](./packager.md#getPackage), it's `isEditable` function should return true until it leaves the (re)packager. In this state you change it's address with `setAddress` on the fly.

:::

---

### `getAddress()` {#getAddress}

Gets the package's address.

If the package [`isEditable`](#isEditable), then it'll also update the snapshot's address, in case it has changed.

**Returns**

- `string` With the address currently in use. 

---

### `getItemDetail(slot)` {#getItemDetail}

Get detailed information about an item in the package.

The returned information contains the same information as each item in [`list`](#list), as well as additional details like the display name (`displayName`), and item durability (`damage`, `maxDamage`, `durability`).

Some items include more information (such as enchantments) - it is recommended to print it out using [`textutils.serialize`](https://tweaked.cc/module/textutils.html#v:serialize) or in the Lua REPL, to explore what is available.

**Parameters**

- _slot_: `number` The slot to get information about.

**Throws**

- If the slot is not between 1 and 9.

**Returns**

- `table` Information about the item in this slot, or `nil` if it is empty, like:
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

### `getOrderData()` {#getOrderData}

Gets the [`orderData`](./order-data-object.md) object of the package if it's an encoded package.

**Returns**
- [`orderData`](./order-data-object.md) of the package, or `nil` if none is present, like:
```lua
{
    getCrafts(), -- function: 52d1c058
    getIndex(), -- function: 1f03a979
    getItemDetail(), -- function: 4782ee89
    getLinkIndex(), -- function: 3dfc0241
    getOrderID(), -- function: 625c4b8e
    isFinal(), -- function: 4953530c
    isFinalLink(), -- function: 19750a09
    list(), -- function: 4446fd6c
}
```

---

### `isEditable()` {#isEditable}

Tells you if the package is sitting inside a packager/repackager you called this object from, if you called it via [`getPackage`](./repackager.md#getPackage).

otherwise returns `false`.

**Returns**
- `boolean` that's `true` if the package is editable, `false` otherwise.

---

### `list()` {#list}

List all items inside the package. This returns a table, with an entry for each slot.

Each item in the inventory is represented by a table containing some basic information. More information can be fetched with [`getItemDetail`](#getItemDetail). The table contains the item `name`, the `count` and a (potentially `nil`) hash of the item's `nbt`. This NBT data doesn't contain anything useful, but allows you to distinguish identical items.

The returned table is never sparse, so you can iterate over it with [`ipairs`](https://www.lua.org/manual/5.1/manual.html#pdf-ipairs) just fine.

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
  {
    nbt = "ce5c752cf2df5cf4ffb17d7b7bfacad7",
    count = 1,
    name = "minecraft:enchanted_book",
  },
}
```

---

### `setAddress(address)` {#setAddress}

Sets the package's address to the given value if it [`isEditable`](#isEditable) (so, inside the packager/repackager it was called from using specifically [`getPackage`](./packager.md#getPackage))

This also updates the package object's `getAddress` to the return the new `address`.

**Parameters**

- _address:_ `string` Will change the package's address to `address`.

**Throws**

- If [`isEditable`](#isEditable) is `false`.
