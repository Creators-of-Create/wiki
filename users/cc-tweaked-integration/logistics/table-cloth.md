| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`isShop()`](#isShop)            | Returns true if the Table Cloth is a store |
| [`getAddress()`](#getAddress)            | Sets the Redstone Requester's address |
| [`setAddress([address])`](#setAddress)            | Sets the Redstone Requester's address |
| [`getPriceTagItem()`](#getPriceTagItem)            | Gets the Table Cloth's Pricetag item|
| [`setPriceTagItem([name])`](#setPriceTagItem)            | Sets the Table Cloth's Pricetag item|
| [`getPriceTagCount()`](#getPriceTagCount)            | Gets the Table Cloth's Pricetag item count|
| [`setPriceTagCount([count])`](#setPriceTagCount)            | Sets the Table Cloth's Pricetag item count|
| [`getWares()`](#getWares)            | Gets the Table Cloth's items on sale|
<<<<<<< HEAD
| [`setWares([{[name = string], [count = number]}...])`](#setWares)            | Sets the Table Cloth's items on sale |

---

### `isShop()` {#isShop}

Checks if the Table Cloth is a shop or not.

**Returns**

- `boolean`, True if it's a shop. 

---
=======
| [`setWares([{[name = string], [count = number]}...])`](#configure)            | Sets the Table Cloth's items on sale |

---

>>>>>>> 6d03dbf (First attempt at updating the wiki)

### `getAddress()` {#getAddress}

Gets the Table Cloth's address.

**Returns**

- `string` With the address currently in use. 

---

### `setAddress([address])` {#setAddress}

Sets the Table Cloth's address to the given variable.

If the address arg is nil, it'll unset the address.

**Parameters**

- _address?:_ `string = nil`  Addresses processed pruchases to `address`. Unsets if address is `nil`.


---

### `getPriceTagItem()` {#getPriceTagItem}

Gets the Item used for the Table Cloth's price tag.

**Returns**

- `table` Table of itemDetails.

---


### `setPriceTagItem([name])` {#setPriceTagItem}

Sets the Item used for the Table Cloth's price tag.

**Parameters**

- name?:_ `string = nil`  Sets the Item to `name`. Unsets if name is `nil`.

---

### `getPriceTagCount()` {#getPriceTagCount}

Gets the Table Cloth's Pricetag item count.

**Returns**

- `number` Number of items.

---


### `setPriceTagCount([count])` {#setPriceTagCount}

Sets the Table Cloth's Pricetag item count.

**Parameters**

- count?:_ `count = 1`  Sets the count to `count`.


---

### `getWares()` {#getWares}

Gets the list of items requested on purchase.

**Returns**

- `table` Table of itemDetails.

---

### `setWares([{[name = string], [count = number]}]...)` {#setWares}

Sets the Table Cloth's wares that get requested on purchase.
- Each argument represents an item to be requested and is a table of the item `name`, like `create:wrench` or `apple` and the `count`, between `1` and `256`.
- nil argument or a table with an unspecified `name` equates to an empty slot.
- Unspecified `count` equates to `1`
- If no items are provided, the tablecloth stops being a shop, and goes back to normal behaviour.

**Parameters**

- _item:_ `table` Table of `name = string` and `count = number`.

**Usage**
```lua
tableCloth = peripheral.find("Create_TableCloth")
if tableCloth.isShop() then
tableCloth.setWares(
    { name = "minecraft:diamond"}, -- defaults to 1
    { name = "redstone", count = 30 }
)
tableCloth.setPriceTagItem("gold_ingot")
tableCloth.setPriceTagCount(2)
end
```
