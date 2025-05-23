| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getAddress()`](#getAddress)            | Gets the Redstone Requester's address |
| [`setAddress([address])`](#setAddress)            | Sets the Redstone Requester's address |
| [`getConfiguration()`](#getConfiguration)            | Gets the Redstone Requester's configuration |
| [`configure([{[name = string], [count = number]}...])`](#configure)            | Sets the Redstone Requester's configuration |
| [`configureCraft([{[name = string], [count = number]}...])`](#configureCraft)            | Sets the Redstone Requester's configuration as a crafting package |
| [`request()`](#request)            | Requests a package for the network |

---


### `getAddress()` {#getAddress}

Gets the Redstone Requester's address.

**Returns**

- `string` With the address currently in use. 

---

### `setAddress([address])` {#setAddress}

Sets the Redstone Requester's address to the given variable.

If the address arg is nil, it'll unset the address.

**Parameters**

- _address?:_ `string = nil`  Addresses requested packages to `address`. Unsets if address is `nil`.


---

### `getConfiguration()` {#getConfiguration}

Gets the Redstone Requester's configuration.

**Returns**

- `table` Table of itemDetails.

---

### `configure([{[name = string], [count = number]}]...)` {#configure}

Sets the packagers configuration, the same one as the one available in the GUI - maximum of 9 arguments.
- Each argument represents a slot of the configuration and is a table of the item `name`, like `create:wrench` or `apple` and the `count`, between `1` and `256`.
- a nil argument or a table with an unspecified `name` are allowed but serve no purpose
- Unspecified `count` equates to `1`


**Parameters**

- _item:_ `table` Table of `name = string` and `count = number`.

**Usage**
```lua
redstoneRequester = peripheral.find("Create_RedstoneRequester")
redstoneRequester.configure(
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
redstoneRequester.configure()
```
will clear the configuration.

---

### `configureCraft([{[name = string], [count = number]}]...)` {#configureCraft}

Sets the packagers configuration with up to 9 slots for autocrafting.
- Each argument represents a slot of the configuration and is a table of the item `name`, like `create:wrench` or `apple` and the `count`, between `1` and `256`.
    - those items get re-packaged as one order, and unpacked in an autocrafter in the order given
- a nil argument or a table with an unspecified `name` equates to an empty slot.
- Unspecified `count` equates to `1`


**Parameters**

- _item:_ `table` Table of `name = string` and `count = number`.

**Usage**
```lua
redstoneRequester = peripheral.find("Create_RedstoneRequester")
redstoneRequester.configureCraft(
    { name = "minecraft:diamond", count = nil }, -- defaults to 1
    -- "diamond", -- this would error
    { name = "minecraft:diamond", count = "yay" }, -- defaults to 1
    { name = "diamond", count = 1 }, -- skipping "minecraft:" works for vanilla items
    { name = "minecraft:air" },             -- sets an empty slot
    { name = "minecraft:stick" },
    nil,                                    -- also sets an empty slot
    {},                                     -- also also sets an empty slot
    { name = "minecraft:stick" }
      -- not providing args at the end also sets an empty slot
)
redstoneRequester.setAddress("crafter")
redstoneRequester.request()
```
Will request a package that crafts into a Diamond Pickaxe when provided to properly set up auto-crafters. 

While:
```lua
redstoneRequester.configureCraft()
```
will clear the configuration.

---

### `request()` {#request}

Requests for a package in the network using the Redstone Requester's configuration. 

