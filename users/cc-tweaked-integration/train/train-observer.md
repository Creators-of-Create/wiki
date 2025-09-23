
| Method                                                | Description                    |
|-------------------------------------------------------|--------------------------------|
| [`isTrainPassing()`](#isTrainPassing)                 | Checks if a train is detected  |
| [`getPassingTrainName()`](#getPassingTrainName)       | Gets the detected train's name |

| Event                             | Description                                        |
|-----------------------------------|----------------------------------------------------|
| [`train_passing`](#train_passing) | Triggers when the observer detects a train         |
| [`train_passed`](#train_passed)   | Triggers when the observer stops detecting a train |

---

### `isTrainPassing()` {#isTrainPassing}

Checks if a train is currently within the train observer's range.

**Returns**

- `boolean` The state of the observer. `true` means it's outputting redstone signal.


### `getPassingTrainName()` {#getPassingTrainName}

Gets the name of a train within the train observer's range.

**Returns**

- `string` The name of the train detected, or `nil` if none is found.

---

::: tip Events
The following are events that can be accessed with [`os.pullEvent(filter)`](https://tweaked.cc/module/os.html#v:pullEvent).
:::

### Event: `train_passing`{#train_passing}

Triggers whenever a train enters the observer's range.

**Returns**

- `string` Name of train.

---

### Event: `train_passed`{#train_passed}

Triggers whenever a train leaves the observer's range.

**Returns**

- `string` Name of train.
