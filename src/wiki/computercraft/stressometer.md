---
next: false
---

| Method                                      | Description                    |
| ------------------------------------------- | ------------------------------ |
| [`getStress()`](#getStress)                 | Gets the current stress level  |
| [`getStressCapacity()`](#getStressCapacity) | Gets the total stress capacity |


| Event                                       | Description                    |
|---------------------------------------------|--------------------------------|
| [`overstressed`](#overstressed)             | Triggers when overstressed     |
| [`stress_change`](#stress_change)           | Triggers when stress changes   |

---

### `getStress()`{#getStress}

Gets the connected network's current stress level.

**Returns**

- `number` The current stress level in SU.

---

### `getStressCapacity()`{#getStressCapacity}

Gets the connected network's total stress capacity.

**Returns**

- `number` The total stress capacity in SU.

---
::: tip Events
The following are events that can be accessed with [`os.pullEvent(filter)`](https://tweaked.cc/module/os.html#v:pullEvent).
:::

### Event: `overstressed` {#overstressed}

Triggers whenever the network becomes overstressed.

---

### Event: `stress_change` {#stress_change}

Triggers whenever the network's stress changes.

**Returns**

- `number` The total stress level in SU.
- `number` The total stress capacity in SU.
