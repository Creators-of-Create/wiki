| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getAddress()`](#getAddress)            | Gets the Postbox's address |
| [`setAddress([address])`](#setAddress)            | Sets the Postbox's address |

---


### `getAddress()` {#getAddress}

Gets the Postbox's address.

**Returns**

- `string` With the address currently in use. 

---

### `setAddress([address])` {#setAddress}

Sets the Postbox's address to the given variable.

If the address arg is nil, it'll unset the address.

**Parameters**

- _address?:_ `string = nil`  Will receive packages addressed to `address`. Unsets if address is `nil`.


---
