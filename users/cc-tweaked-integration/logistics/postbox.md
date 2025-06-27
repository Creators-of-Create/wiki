| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getAddress()`](#getAddress)            | Gets the PostBox's address |
| [`getConfiguration()`](#getConfiguration)            | Gets the PostBox's configuration |
| [`getItemDetail()`](#getItemDetail)            | Gets detailed information about an item in the PostBox's given slot |
| [`list()`](#list)            | Lists all items in the PostBox's inventory |
| [`setAddress(address)`](#setAddress)            | Sets the PostBox's address |
| [`setConfiguration(configuration)`](#setConfiguration)            | Sets the FrogPort's configuration |


---


### `getAddress()` {#getAddress}

Gets the PostBox's address.

**Returns**

- `string` With the address currently in use. 

---

### `getConfiguration()` {#getConfiguration}

Gets the PostBox's configuration.

**Returns**

- `string` With either `"send_recieve"` or `"send"` as the configuration. 

---

### `getItemDetail(slot)` {#getItemDetail}

Get detailed information about an item in the PostBox's inventory.

The returned information contains the same information as each item in [`list`](#list), as well as additional details like the display name (`displayName`), and item and item durability (`damage`, `maxDamage`, `durability`).

Some items include more information (such as enchantments) - it is recommended to print it out using [`textutils.serialize`](https://tweaked.cc/module/textutils.html#v:serialize) or in the Lua REPL, to explore what is available.

**Parameters**

- _slot:_ `number` The slot to get information about.

**Throws**

- If the slot is out of range.

**Returns**

- `table` Information about the item in this slot, or `nil` if it is empty, like:
```lua
{
  tags = {
    [ "create:packages" ] = true,
  },
  maxCount = 1,
  name = "create:cardboard_package_12x10",
  itemGroups = {},
  count = 1,
  nbt = "ceed8ad969b49055bc14042fc07b6892",
  displayName = "Cardboard Package",
  package = { -- Packages come with this field, which points to the Package Object
        getAddress(), --function: 38260b86
        getItemDetail(), -- function: 7de9d189
        getOrderData(), -- function: 6d149c07
        isValid(), -- function: 3a6300d3
        list(), -- function: 1c7bc70
        setAddresS(), -- function: 1c7bc70
  }
}
```

---

### `list()` {#list}

List all items in the PostBox's inventory. This returns a table, with an entry for each slot.

Each item in the inventory is represented by a table containing some basic information. More information can be fetched with [`getItemDetail`](#getItemDetail). The table contains the item `name`, the `count` and a (potentially `nil`) hash of the item's `nbt`. This NBT data doesn't contain anything useful, but allows you to distinguish identical items.

The returned table is sparse, so empty slots will be `nil` - it is recommended to loop over using [`pairs`](https://www.lua.org/manual/5.1/manual.html#pdf-pairs) rather than [`ipairs`](https://www.lua.org/manual/5.1/manual.html#pdf-ipairs).


**Returns**

- `table` with basic item information like: 
```lua
{
  {
    nbt = "ceed8ad969b49055bc14042fc07b6892",
    count = 1,
    name = "create:cardboard_package_12x10",
  },
  {
    nbt = "c04232dbe75de33196e9d261136f7a27",
    count = 1,
    name = "create:cardboard_package_10x8",
  },
},
```
---

### `setAddress(address)` {#setAddress}

Sets the PostBox's address to the given variable.

If the address arg is nil, it'll unset the address.

**Parameters**

- _address:_ `string` Will grab packages addressed to `address`.

---

### `setConfiguration(configuration)` {#setConfiguration}

Sets the PostBox's configuration to either `"send_recieve"` or `"send"`, represented by the bottoms on the bottom left of it's gui.
- `"send_recieve"` will only send out packages that don't match the PostBox's address, and it will recieve packages that match it's address.
- `"send"` will send out all packages and not recieve any packages.

**Parameters**

- _address:_ `string` The desired configuration, either `"send_recieve"` or `"send"`.

