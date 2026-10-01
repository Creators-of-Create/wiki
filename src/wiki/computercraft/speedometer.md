| Method                    | Description                     |
| ------------------------- | ------------------------------- |
| [`getSpeed()`](#getSpeed) | Gets the current rotation speed |


| Event                     | Description                   |
|---------------------------|-------------------------------|
| [`speed`](#speed_change)  | Triggers when speed changes   |

---

### `getSpeed()`{#getSpeed}

Gets the current rotation speed of the attached components.

**Returns**

- `number` The current rotation speed in RPM.

---

::: tip Events
The following are events that can be accessed with [`os.pullEvent(filter)`](https://tweaked.cc/module/os.html#v:pullEvent).
:::

### Event: `speed_change`{#speed_change}

Triggers whenever the network's speed changes.

**Returns**

- `number` The current rotation speed in RPM.

