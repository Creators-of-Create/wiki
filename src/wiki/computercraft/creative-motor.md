
| Method                                     | Description                            |
| ------------------------------------------ | -------------------------------------- |
| [`setGeneratedSpeed(speed)`](#setGeneratedSpeed) | Sets the generated rotation speed         |
| [`getGeneratedSpeed()`](#getGeneratedSpeed)      | Gets the current generated rotation speed |

---

### `setGeneratedSpeed(speed)` {#setGeneratedSpeed}

Sets the creative motor's generated speed.

**Parameters**

- _speed:_ `number` The generated speed in RPM. Must be an integer within the range of [-256..256]. Values outside this
  range will be clamped.

---

### `getGeneratedSpeed()`

Gets the creative motor's current generated speed.

**Returns**

- `number` The current generated rotation speed in RPM.
