| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getAddress()`](#getAddress)            | Gets the Redstone Requester's address |
| [`getConfiguration()`](#getConfiguration)            | Gets the Redstone Requester's configuration |
| [`getRequest()`](#getRequest)            |  Gets the Redstone Requester's request data |
| [`request()`](#request)            | Sends a package request to the network |
| [`setAddress(address)`](#setAddress)            | Sets the Redstone Requester's address |
| [`setConfiguration(configuration)`](#setConfiguration)            | Sets the Redstone Requester's configuration |
| [`setCratingRequest([itemName], ...)`](#setCraftingRequest)            | Sets the Redstone Requester's configuration as a crafting package |
| [`setRequest([item], ...)`](#setRequest)            | Sets the Redstone Requester's configuration |

---


### `getAddress()` {#getAddress}

Gets the Redstone Requester's address.

**Returns**

- `string` With the address currently in use. 

---

### `getConfiguration()` {#getConfiguration}

Gets the Redstone Requester's configuration.

**Returns**

- `string` With either `"allow_partial"` or `"strict"` as the configuration.

---

### `getRequest()` {#getRequest}

Gets the Redstone Requester's request data.

**Returns**

- `table` Table of `itemDetail`s.


---

### `request()` {#request}

Requests for a package in the network using the Redstone Requester's configuration, request data and address. 

---

### `setAddress(address)` {#setAddress}

Sets the Redstone Requester's address to the given variable.

If the address arg is nil, it'll unset the address.

**Parameters**

- _address:_ `string` Addresses requested packages to _address_.

---

### `setConfiguration(configuration)` {#setConfiguration}

Sets the Redstone Requester's configuration to either `"strict"` or `"allow_partial"`, represented by the bottoms on the bottom left of it's gui.
- `"strict"` will only let the request through if all the matching items are available.
- `"allow_partial"` will run the request no matter the avialability.

**Parameters**

- _address:_ `string` The desired configuration, either `"strict"` or `"allow_partial"`.

---

### `setCraftingRequest([itemName], ...)` {#configureCraft}

Sets the packagers configuration with up to 9 slots for autocrafting.
- The first argument tells how many "batches" you want to make in a single package
- Then, each argument after that represents a slot of the configuration and is a `string` of the item `name`, like `create:wrench` or `apple`.
    - those items get re-packaged as one order, and unpacked in an autocrafter in the order given.
- a nil argument equates to an empty slot.


::: warning Warning
Redstone requesters lose their craft-encoding capability once interacted with as a player, since by closing the ui you send the server a packet that makes the request in the menu a normal request, regardless if it was a crafting one or not.
:::

**Parameters**

- _itemName:_ `string` matching the name of the desired item. You can have up to 9 `itemName` args.

**Usage**
```lua
redstoneRequester = peripheral.find("Create_RedstoneRequester")
redstoneRequester.setCraftingRequest(
    1, -- number of crafts we want
    "minecraft:diamond",
    "minecraft:diamond",
    "diamond",          -- skipping "minecraft:" works for vanilla items
    "minecraft:air",    -- sets an empty slot
    "minecraft:stick",
    nil,                -- also sets an empty slot
    nil,
    "minecraft:stick",
      -- not providing args at the end also sets empty slots
)
redstoneRequester.setAddress("crafter"])
redstoneRequester.request()
```
Will request a package that crafts into a Diamond Pickaxe when provided to properly set up auto-crafters. 

While:
```lua
redstoneRequester.setCraftingRequest()
```
will clear the request and set it to 9 empty slots.

---

### `setRequest([item], ...)` {#setRequest}

Sets the packagers request, the same one as the one available in the GUI - maximum of 9 arguments.
- Each argument represents a slot of the configuration and is a table of the item `name`, like `create:wrench` or `apple` and the `count`, between `1` and `256`.
- a nil argument or a table with an unspecified `name` are allowed but serve no purpose
- Unspecified `count` equates to `1`


**Parameters**

- _item:_ `table` Table of `name = string` and `count = number`. You can have up to 9 `item` args.

**Usage**
```lua
redstoneRequester = peripheral.find("Create_RedstoneRequester")
redstoneRequester.setRequest(
    { name = "minecraft:dirt", count = nil }, -- defaults to 1
    -- "diamond", -- this would error
    { name = "minecraft:sand", count = "yay" }, -- defaults to 1
    { name = "cobblestone", count = 21 }, -- skipping "minecraft:" works for vanilla items
    { name = "create:wrench" },
)
redstoneRequester.setAddress("crafter")
redstoneRequester.request()
```
Will request a package that contains (if available) 1 dirt, 1 sand, 21 cobblestone and a create wrench. 

While:
```lua
redstoneRequester.setRequest()
```
will clear the request and set it to 9 empty slots.
