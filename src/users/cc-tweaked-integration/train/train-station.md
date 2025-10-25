
| Method                                              | Description                                        |
| --------------------------------------------------- | -------------------------------------------------- |
| [`assemble()`](#assemble)                           | Assembles a new train at the station               |
| [`disassemble()`](#disassemble)                     | Disassembles the currently present train           |
| [`setAssemblyMode(assemblyMode)`](#setAssemblyMode) | Sets the station's assembly mode                   |
| [`isInAssemblyMode()`](#isInAssemblyMode)           | Whether the station is in assembly mode            |
| [`getStationName()`](#getStationName)               | Gets the station's current name                    |
| [`setStationName(name)`](#setStationName)           | Sets the station's name                            |
| [`isTrainPresent()`](#isTrainPresent)               | Whether a train is present at the station          |
| [`isTrainImminent()`](#isTrainImminent)             | Whether a train is imminent to the station         |
| [`isTrainEnroute()`](#isTrainEnroute)               | Whether a train is enroute to the station          |
| [`getTrainName()`](#getTrainName)                   | Gets the currently present train's name            |
| [`setTrainName(name)`](#setTrainName)               | Sets the currently present train's name            |
| [`hasSchedule()`](#hasSchedule)                     | Whether the currently present train has a schedule |
| [`getSchedule()`](#getSchedule)                     | Gets the currently present train's schedule        |
| [`setSchedule(schedule)`](#setSchedule)             | Sets the currently present train's schedule        |
| [`canTrainReach(destination)`](#canTrainReach)      | Checks if a route to a given station is possible   |
| [`distanceTo(destination)`](#distanceTo)            | Measures the distance to a given station           |


| Event                                               | Description                                        |
|-----------------------------------------------------|----------------------------------------------------|
| [`train_imminent`](#train_imminent)                 | Triggers when a train is imminent                  |
| [`train_arrival`](#train_arrival)                   | Triggers when a train arrives to station           |
| [`train_departure`](#train_departure)               | Triggers when a train departs from station         |

---

### `assemble()` {#assemble}

Assembles a new train at the station. The station must be in assembly mode before calling this function.

This function also causes the station to exit assembly mode after the train is done assembling.

**Throws**

- If the station is not in assembly mode.
- If the station is not connected to a track.
- If the train failed to assemble.
- If the station failed to exit assembly mode.

**See also**

- [`setAssemblyMode(assemblyMode)`](#setAssemblyMode) To set the assembly mode of the station.

---

### `disassemble()`{#disassemble}

Disassembles the station's currently present train. The station must not be in assembly mode.

**Throws**

- If the station is in assembly mode.
- If the station is not connected to a track.
- If there is currently no train present at the station.
- If the train failed to disassemble.

**See also**

- [`setAssemblyMode(assemblyMode)`](#setAssemblyMode) To set the assembly mode of the station.

---

### `setAssemblyMode(assemblyMode)` {#setAssemblyMode}

Sets the station's assembly mode.

**Parameters**

- _assemblyMode:_ `boolean` Whether the station should be in assembly mode.

**Throws**

- If the station fails to enter or exit assembly mode.
- If the station is not connected to a track.

---

### `isInAssemblyMode()`{#isInAssemblyMode}

Checks whether the station is in assembly mode.

**Returns**

- `boolean` Whether the station is in assembly mode.

---

### `getStationName()`{#getStationName}

Gets the station's current name.

**Returns**

- `string` The station's current name.

**Throws**

- If the station is not connected to a track.

---

### `setStationName(name)` {#setStationName}

Sets the station's name.

**Parameters**

- _name:_ `string` What to set the station's name to.

**Throws**

- If the station name fails to be set.
- If the station is not connected to a track.

---

### `isTrainPresent()` {#isTrainPresent}

Checks whether a train is currently present at the station.

**Returns**

- `boolean` Whether a train is present at the station.

**Throws**

- If the station is not connected to a track.

---

### `isTrainImminent()`{#isTrainImminent}

Checks whether a train is imminently arriving at the station.

Imminent is defined as being within 30 blocks of the station.

This will not be true if the train has arrived and stopped at the station.

**Returns**

- `boolean` Whether a train is imminent to the station.

**Throws**

- If the station is not connected to a track.

**See also**

- [`isTrainPresent()`](#isTrainPresent) To check if a train is present at the station.

---

### `isTrainEnroute()`{#isTrainEnroute}

Checks whether a train is enroute and navigating to the station.

**Returns**

- `boolean` Whether a train is enroute to the station.

**Throws**

- If the station is not connected to a track.

---

### `getTrainName()`{#getTrainName}


Gets the currently present train's name.

**Returns**

- `string` The currently present train's name.

**Throws**

- If the station is not connected to a track.
- If there is currently no train present at the station.

---

### `setTrainName(name)` {#setTrainName}

Sets the currently present train's name.

**Parameters**

- _name:_ `string` What to set the currently present train's name to.

**Throws**

- If the station is not connected to a track.
- If there is currently no train present at the station.

---

### `hasSchedule()`{#hasSchedule}

Checks whether the currently present train has a schedule.

**Returns**

- `boolean` Whether the currently present train has a schedule.

**Throws**

- If the station is not connected to a track.
- If there is currently no train present at the station.

---

### `getSchedule()`{#getSchedule}

Gets the currently present train's schedule.

**Returns**

- `table` The train's schedule

**Throws**

- If the station is not connected to a track.
- If there is currently no train present at the station.
- If the present train doesn't have a schedule.

**See also**

- [Lua Train Schedules](./train-schedule.md) How train schedules are represented in Lua.

---

### `setSchedule(schedule)` {#setSchedule}

Sets the currently present train's schedule. This will overwrite the currently set schedule.

**Parameters**

- _schedule:_ `table` The schedule to set the present train to.

**Throws**

- If the station is not connected to a track.
- If there is currently no train present at the station.

**See also**

- [Lua Train Schedules](./train-schedule.md) How train schedules are represented in Lua.

---

### `canTrainReach(destination)` {#canTrainReach}

Tests if a route to the station named `destination` is possible from this station.

Parameters
- destination: `string` The name of the station to test the route to.

**Returns**

- `boolean` true if the route is possible, false if not.
- `string` Reason why the route isn't possible if applicable. "no-target" if no path is found, "cannot-reach" if there's something in the way.

**Throws**

- If the station is not connected to a track.

---


### `distanceTo(destination)` {#distanceTo}

Measures the distance between the station named `destination` and this station.

Parameters
- destination: `string` The name of the station to measure the route to.

**Returns**

- `number` the distance to the target station in meters (blocks) or nil if impossible.
- `string` Reason why the route isn't possible if applicable. "no-target" if no path is found, "cannot-reach" if there's something in the way.

**Throws**

- If the station is not connected to a track.

---

::: tip Events
The following are events that can be accessed with [`os.pullEvent(filter)`](https://tweaked.cc/module/os.html#v:pullEvent).
:::

### Event: `train_imminent`{#train_imminent}

Triggers whenever a train's arrival is imminent.

Imminent is defined as being within 30 blocks of the station.

**Returns**

- `string` Name of train.

---

### Event: `train_arrival` {#train_arrival}

Triggers whenever a train arrives at the station.

**Returns**

- `string` Name of train.

---

### Event: `train_departure` {#train_departure}

Triggers whenever a train departs from the station.

**Returns**

- `string` Name of train.
