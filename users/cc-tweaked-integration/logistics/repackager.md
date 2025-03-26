| Method                                 | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [`getAddress()`](#getAddress)            | Sets the Re-Packager's address |
| [`setAddress([address])`](#setAddress)            | Sets the Re-Packager's address |
| [`makePackage()`](#makePackage)            | Makes a package |
| [`getPackageItems()`](#getPackageItems)            | Checks the contents of the currently held package |
| [`getPackageAddress()`](#getPackageAddress)            | Checks the address of the currently held package |

---

### `getAddress()` {#getAddress}

Gets the Re-Packager's address.

**Returns**

- `string` With the address currently in use. 

---

### `setAddress([address])` {#setAddress}

Sets the Re-Packager's address to the given variable until it tries to make a package with no computer attached, at which point it forgets about it and goes back to normal behavior.
If you want to programatically assign it an address every time, it's a good idea to put .setAddress in a startup.lua file, so it applies the address you want on chunkload.

If the address arg is nil, it'll go back to the default sign-based behavior again.

**Parameters**

- _address?:_ `string = nil` Force every package to be addressed to `address`. Goes back to default if address is `nil`.

---

### `makePackage()` {#makePackage}

Activates the Re-Packager like if it was powered by redstone. It operates by the same rule as a button press, but unlike a redstone signal, returns a value on if it actually succeeded at making a package.

**Returns**
- `boolean` whether a new package was made successfuly.

---

### `getPackageItems()` {#getPackageItems}

**Returns**
- `table` with detailed item information or `nil` if there's no package.

---

### `getPackageAddress()` {#getPackageAddress}

**Returns**
- `string` with the package's address or `nil` if there's no package.
