| Method                                      | Description              |
|---------------------------------------------|------------------------------------------|
| [`isExtended()`](#isExtended)               | Gets the sticker's state                 |
| [`isAttachedToBlock()`](#isAttachedToBlock) | Checks if the sticker's holding anything |
| [`extend()`](#extend)                       | Extends the sticker                      |
| [`retract()`](#retract)                     | Retracts the sticker                     |
| [`toggle()`](#toggle)                       | Toggles the sticker                      |


---

### `isExtended()`{#isExtended}

Checks if the sticker is extended.

**Returns**

- `boolean` The state of the sticker, `true` if it's extended.

---

### `isAttachedToBlock()`{#isAttachedToBlock}

Checks if the sticker is sticking to a block.

**Returns**

- `boolean` The state of the sticker, `true` if it's sticking to a block.

---

### `extend()`{#extend}

Extends the sticker.

**Returns**

- `boolean` Will only return `true` if the sticker went from retracted to extended.

---

### `retract()`{#retract}

Retracts the sticker.

**Returns**

- `boolean` Will only return `true` if the sticker went from extended to retracted.

---

### `toggle()`{#toggle}

Toggles between the sticker being retracted and extended, regardless of it's previous state

**Returns**

- `boolean` Will return `true` if it succeeds.
