| Method                                                | Description                        |
|-------------------------------------------------------|------------------------------------|
| [`getState()`](#getState)                             | Gets the signal state              |
| [`isForcedRed()`](#isForcedRed)                       | Checks if the red signal is locked |
| [`setForcedRed(forced)`](#setForcedRed)               | Locks/Unlocks the red signal       |
| [`getSignalType()`](#getSignalType)                   | Gets the signal type               |
| [`cycleSignalType()`](#cycleSignalType)               | Switches the signal type           |
| [`listBlockingTrainNames()`](#listBlockingTrainNames) | Lists trains triggering the signal |


| Event                                                     | Description                          |
|-----------------------------------------------------------|--------------------------------------|
| [`train_signal_state_change`](#train_signal_state_change) | Triggers whenever the signal changes |

---

### `getState()` {#getState}

Gets the train signal's currently displayed signal, as how the trains see it.

**Returns**

- `string` The color of the signal currently displayed - either "GREEN" or "RED".


### `isForcedRed()` {#isForcedRed}

Checks if the signal is forced red by the computer.

**Returns**

- `boolean` The state of the computer-controlled red light.

### `setForcedRed(forced)` {#setForcedRed}

Forces the signal to be red regardless of redstone and free space ahead.

Goes back to default behaviour when losing connection with the computer.

**Parameters**
- _forced_: `boolean` enable/disable forced red mode.

### `getSignalType()` {#getSignalType}

Gets the train signal's signal type (Normally toggled witha  wrench) as how the trains see it.

**Returns**
- `string` The signal type - either "ENTRY_SIGNAL" or "CROSS_SIGNAL".

### `cycleSignalType()` {#cycleSignalType}

Cycles through the train signal's signal types like if you used a wrench on it.


| [`listBlockingTrainNames()`](#listBlockingTrainNames) | Lists trains triggering the signal |

Retrurns
- `table` List of train name `string`s occupying the track.

---

::: tip Events
The following are events that can be accessed with [`os.pullEvent(filter)`](https://tweaked.cc/module/os.html#v:pullEvent).
:::

### Event: `train_signal_state_change`{#train_signal_state_change}


Triggers whenever the signal changes.

**Returns**

- `string` Name of the signal it switched to, either "RED" or "GREEN".

