
| Method                                  | Description                 |
|---------------------------------------- |-----------------------------|
| [`setText(text, colour)`](#setText)     | Sets the text               |
| [`setTextColour()`](#setTextColour)     | Sets the text's colour      |
| [`setTextColor()`](#setTextColour)      | alias for `setTextColour()` |
| [`setSignal(firstSignal,secondSignal)`](#setSignal) | Displays custom shapes      |

---


### `setText(text, colour)` {#setText}

Sets the text on the nixie tubes.

**Parameters**

- _text:_ `string` New text to be displayed by the tubes.
- _colour?_: `string = nil` Name of the colour (dye) to display the text. Doesn't change the color if nil.
---

### `setTextColour(colour)` {#setTextColour}

Sets the nixie tube's colour.

**Parameters**

- _colour:_ `string` Name of the colour (dye) to display the text.

---

### `setSignal(firstSignal, secondSignal)` {#setSignal}

Sets a custom signal for the nixie tubes.

This one is unique, as it only lets you control up to two nixie tubes at once, while the other functions let you control entire arrays.

The `signal` table is built like so:
```lua
{
    r = 0, -- red color value between 0 and 255
    g = 0, -- green color value between 0 and 255
    b = 0, -- blue color value between 0 and 255
    glowWidth, -- width of the glow shape between 1 and 4
    glowHeight = , -- height of the glow shape between 1 and 4
    blinkPeriod = 40, -- time between blinks in ticks
    blinkOffTime = 20, -- downtime between blinks in ticks
}
```
All the fields are optional, but also have no default values, so if you first set {r=255} and then {b=255}, the color will be purple. You'd have to set {r=0, b=255} to reset the red value.

In this example, the node will blink ever 2 seconds for 1 second (which means it'll be on for a second, then off for a second in a loop.

**Parameters**

- _firstSignal:_ `table` descrtibing the color, size and blink rate of the glow in the first tube.
- _secondSignal:_ `table` descrtibing the color, size and blink rate of the glow in the second tube.

---
