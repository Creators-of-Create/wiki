| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getItemDetail(slot)`](#getItemDetail) |Gets detailed information about an item in the payment inventory's given slot |
| [`getStockItemDetail(index)`](#getStockItemDetail) | Gets detailed information about an item in the stock's given index |
| [`list()`](#list) | Lists all items in the payment inventory |
| [`requestFiltered(address, [filter1], [filter2], ...)`](#requestFiltered) | Requests a package from the network |
| [`stock([detailed])`](#stock) | Lists all items in the network |

---

### `getItemDetail(slot)` {#getItemDetail}

Get detailed information about an item in the payment inventory.

The returned information contains the same information as each item in [`list`](#list), as well as additional details like the display name (`displayName`), and item durability (`damage`, `maxDamage`, `durability`).

Some items include more information (such as enchantments) - it is recommended to print it out using [`textutils.serialize`](https://tweaked.cc/module/textutils.html#v:serialize) or in the Lua REPL, to explore what is available.

**Parameters**

- _slot:_ `number` The slot to get information about.

**Throws**

- If the slot is out of range.

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

### `getStockItemDetail(slot)` {#getStockItemDetail}

Get detailed information about an item in the network stock.

The returned information contains the same information as each item in [`list`](#list), as well as additional details like the display name (`displayName`), and item durability (`damage`, `maxDamage`, `durability`).

Some items include more information (such as enchantments) - it is recommended to print it out using [`textutils.serialize`](https://tweaked.cc/module/textutils.html#v:serialize) or in the Lua REPL, to explore what is available.

::: tip Hint
The order of indexes changes whenever the network gets reloaded, make sure to use [`stock`](#stock) to check what item to look for.

You can also avoid using this function by using [`stock(true)`](#stock), which already includes the detailed information of all items.
:::

**Parameters**

- _index:_ `number` The index to get information from.

**Throws**

- If the slot is out of range.

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

### `list()` {#list}

List all items in the payment inventory. This returns a table, with an entry for each slot.

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

### `requestFiltered(address, [filter1], [filter2], ...)` {#requestFiltered}

Requests for a package in the network with the given `address` attached.

The request is made of any number of `filter` arguments, which are tables used to match against detailed item data, like [`stock(true)`](#stock) or [`.getStockItemDetail`](#getStockItemDetail).

Each `filter` follows these rules:
for all items in the network (or until it has matched items equal to `_requestCount = number` at the base of the table):
- It will compare all keys in the `filter` given to the `itemDetail` of the item. If `itemDetail` has all the keys present in `filter`, and the values match, it's added to the request.
    - If the table has `_mode = "exact"`, it will instead make sure that the key and value pairs between both the `itemDetail` and `filter` match 1:1 on this level. This is not recursive and for each nested table `_mode` needs to be assigned again.
    - If the table has `_mode = "contained"`, it will instead compare all the `itemDetail` keys against things in `filter`. the opposite of the default mode. Just like `_mode = "exact"` this is not recursive.
    - `_mode = "contains"` does nothing as it is the default.
    - If the `filter` value is a table with `_op = operator` set to anything but `nil`, it'll instead run the rest of the logic with that `operator` in mind on this table's `value` key.
        - `_op = ">"` checks if the `value` is greater than the number given by `itemDetail`
        - `_op = ">="` checks if the `value` is greater than or equal to the one given by `itemDetail`.
        - `_op = "<"` checks if the `value` is less than the one given by `itemDetail`.
        - `_op = "<="` checks if the `value` is less than or equal to the one given by `itemDetail`.
        - `_op = "=="` checks if the `value` is equal to the one given by `itemDetail`.
        - `_op = "~="` checks if the `value` is not equal to the one given by `itemDetail`.
        - `_op = "type"` checks the type of `itemDetail`. The `value` must be one of:
            - `"nil"` matches if the value is `nil` 
            - `"number"` matches if the value is a `number`
            - `"string"` matches if the value is a `string`
            - `"boolean"` matches if the value is a `boolean`
            - `"table"` matches if the value is a `table`
            - `"list"` matches if it's a numbered non-sparse `table`
            - `"map"` matches if it's a (possibly) sparse `table`
            - `"object"` matches if the value is an object, like the [`package`](./packager.md) object
        - `_op = "not"` inverts the result of the comparison on `value`.
        - `_op = "any"` checks if **any** of the values in `value` match the value in `itemDetail`. `value` must be a non-sparse `table`.
        - `_op = "all"` checks if **all** of the values in `value` match the value in `itemDetail`. `value` must be a non-sparse `table`.
        - `_op = "regex"` checks if the `itemDetail` string matches the regex pattern provided in `value`.
        - `_op = "glob"` checks if the `itemDetail` string matches the glob pattern provided in `value`.
    - If `both` the values are tables, it'll go inside the table and run this check again on the values inside, checking for `_mode` and `_op`.


The candidates that pass the filter(s) are then passed on to be requested by the network, like if you opened the Stock Keeper's ui and requested something with it.

**Parameters**

- _address:_ `string` Address given to the requested package(s).
- _filter:_ `table`  Table of values to filter items by, similar to that of [`.getStockItemDetail`](#getStockItemDetail). The request can be made of any number of `filter` args.

**Returns**e
- `number` Number of items requested with the given filter.

**Usage**

::: tip Understanding how a `filter` works
This is by far the most complicated feature provided with create's cc compatiblity. Consider looking at the examples below to get a better idea of how this is used.

Or, just stick to the basics. A simple filter like this:
```lua
.requestfiltered("address", {name = "apple", _requestCount = 10})
```
will get you up to 10 apples just fine.
:::

```lua
stockTicker = peripheral.find("Create_StockTicker")
stockTicker.requestFiltered("givenAddress", {
  -- Get up to 5 items
  _requestCount = 5,
  -- whose names are either:
  --  - a crushing wheel
  --  - from minecraft
  --  - don't contain an "e"
  name = { _op = "any", value =
    {
      "create:crushing_wheel",
      {_op = "glob", value = "minecraft:*"},
      {_op = "not", value =
        {_op = "glob", value = "*e*"}
      },
    }
  },
  -- Those items must also, in the stock network, have a count between 2 and 100 to be included
  count = { _op = "all", value =
    {
      { _op = ">", value = 2 },
      { _op = "<", value = 100 }
    }
  },
},
-- , as the second filter for this same order, request the following:
{
    -- any number of items (no _requestCount) present
    -- that has the `tags` key. Note that **all** items have a `tags` key, even if it's empty.
    tags = {
      [ "forge:rods/wooden" ] = true,
      [ "forge:rods" ] = true,
      [ "forge:tools" ] = true,
      -- that can't have any tags other than forge:rods, forge:rods/wooden or forge:tools
      _mode = "contained",
    },
    -- that have an `nbt` key, which doesn't appear unless the item has nbt data.
    nbt = {},
}
)
```

the given function will request up to 5 items with the first filter, then any number of items with the second filter. If the items from both filters are present in the same inventory and can fit into the same pacakged, they will be packaged together as one request.

While:
```lua
stockTicker.request("givenAddress", {})
```
Would request all items in the network, because all items would pass the empty filter.

---

### `stock([detailed])` {#stock}

List all items in the stock. This returns a table, with an entry for each item.

Each item in the inventory is represented by a table containing some basic information (or detailed information if `detailed = true`). 

The returned table is never sparse, so you can iterate over it with [`ipairs`](https://www.lua.org/manual/5.1/manual.html#pdf-ipairs) just fine.

**Parameters**

- _detailed:_ `boolean = false` Whether the item information should be detailed.

**Returns**

- `table` with basic item information like: 
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
```
or, with `detailed = true`:
```lua
{
  {
    name = "minecraft:stick",
    itemGroups = {},
    tags = {
      [ "forge:rods/wooden" ] = true,
      [ "forge:rods" ] = true,
    },
    count = 1,
    maxCount = 64,
    displayName = "Stick",
  },
  {
    enchantments = {
      {
        level = 1,
        name = "minecraft:unbreaking",
        displayName = "Unbreaking I",
      },
    },
    tags = {
      [ "minecraft:bookshelf_books" ] = true,
    },
    name = "minecraft:enchanted_book",
    itemGroups = {},
    maxCount = 1,
    count = 1,
    nbt = "ce5c752cf2df5cf4ffb17d7b7bfacad7",
    displayName = "Enchanted Book",
  },
}
```



