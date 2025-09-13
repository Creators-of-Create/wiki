
::: danger Important!
The Table Cloth is only available as a peripheral if it's a store or if there's items on it. It will remain a peripheral as long as there is a computer/modem/turtle attached to it, even if it is emptied.
:::

| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getAddress()`](#getAddress)            | Gets the Table Cloth's address |
| [`getPriceTagCount()`](#getPriceTagCount)            | Gets the pricetag item count|
| [`getPriceTagItem()`](#getPriceTagItem)            | Gets the pricetag item |
| [`getWares()`](#getWares)            | Gets the items being sold |
| [`isShop()`](#isShop)            | Returns true if it's a store |
| [`setAddress(address)`](#setAddress)            | Sets the Table Cloth's address |
| [`setPriceTagCount([count])`](#setPriceTagCount)            | Sets the pricetag item count|
| [`setPriceTagItem([name])`](#setPriceTagItem)            | Sets the pricetag item |
| [`setWares([item], ...)`](#setWares)            | Sets the items being sold with their counts |

---

### `getAddress()` {#getAddress}

Gets the Table Cloth's address.

**Returns**

- `string` With the address currently in use. 

---

### `getPriceTagCount()` {#getPriceTagCount}

Gets the Table Cloth's Pricetag item count.

**Returns**

- `number` Number of items.

---

### `getPriceTagItem()` {#getPriceTagItem}

Gets the Item used for the Table Cloth's price tag.

**Returns**

- `table` Table of itemDetails.

---

### `getWares()` {#getWares}

Gets the list of items requested on purchase.

**Returns**

- `table` Table of itemDetails.

---

### `isShop()` {#isShop}

Checks if the Table Cloth is a shop or not.

**Returns**

- `boolean`, True if it's a shop. 

---

### `setAddress(address)` {#setAddress}

Sets the Table Cloth's address to the given variable.

If the address arg is nil, it'll unset the address.

**Parameters**

- _address:_ `string` Addresses processed pruchases to _address_.

---

### `setPriceTagCount([count])` {#setPriceTagCount}

Sets the Table Cloth's Pricetag item count.

**Parameters**

- count?:_ `count = 1`  Sets the count to `count`.

---

### `setPriceTagItem([name])` {#setPriceTagItem}

Sets the Item used for the Table Cloth's price tag.

**Parameters**

- name?:_ `string = nil`  Sets the Item to `name`. Unsets if name is `nil`.


---

### `setWares(item, ...)` {#setWares}

Sets the Table Cloth's wares that get requested on purchase.
- Each argument represents an item to be requested and is a table of the item `name`, like `create:wrench` or `apple` and the `count`, between `1` and `256`.
- nil argument or a table with an unspecified `name` equates to an empty slot.
- Unspecified `count` equates to `1`
- If no items are provided, the tablecloth stops being a shop, and goes back to normal behaviour.

**Parameters**

- _item:_ `table` Table of `name = string` and `count = number`. You can have up to 9 `item` args.

**Usage**
```lua
tableCloth = peripheral.find("Create_TableCloth")
if tableCloth then -- makes sure the tablecloth exists, in case it was wrapped while it wasn't a store/inventory
tableCloth.setWares(
    { name = "minecraft:diamond"}, -- defaults to 1
    { name = "redstone", count = 30 }
)
tableCloth.setPriceTagItem("gold_ingot")
tableCloth.setPriceTagCount(2)
end
```

