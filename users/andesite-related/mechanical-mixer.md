# Mechanical Mixer

The Mechanical Mixer is a mechanical component that applies Mixing recipes and shapeless Crafting recipes to items in Basins.

<img src="../assets/blocks/mechanical_mixer.png" alt="Mechanical Mixer" width="256"/>

## Usage

The Mechanical Mixer is powered by an internal cogwheel, and will behave as one to any adjacent components, relaying and reversing rotation sideways.

The Mixer requires a minimum rotational speed of 30 RPM from its power source to work. Mixers will process ingredients faster the more speed it is given.

To work, a Mixer must be placed directly above a Basin, with a 1 block gap. When a valid recipe is inserted by throwing the ingredients in the Mixer, the Mixer will automatically combine the ingredients.

### Automating Shapeless Recipes

All shapeless crafting recipes can be made automatically using the Mechanical Mixer by inserting required items into the Basin under the mixer.

### Automating Brewing

All Brewing recipes can be made automatically using the Mechanical Mixer by inserting the required items and fluids into the Basin under the mixer. Brewing recipes require heating with a blaze burner.

## Throughput (Speed)

The only variable that effect the processing speed of the Mechanical Crafter is RPM. To calculate the exact number of game ticks it take to process one recipe $({\displaystyle t_{recipe}})$, use this formula, where $k$ is RPM:

```math
{\displaystyle t_{recipe}=\left\lfloor \min \left(15*\max \left(\left\lfloor \log _{2}\left({\frac {512}{\left|k\right|}}\right)\right\rfloor +1,\ 1\right),\ 512\right)\right\rfloor +1\quad {\text{ticks}}}
```

To calculate the exact number of recipes per tick $({\displaystyle f_{recipe}})$, take the inverse of ${\displaystyle t_{recipe}}$ :

```math
{\displaystyle f_{recipe}={\frac {1}{\left\lfloor \min \left(15*\max \left(\left\lfloor \log _{2}\left({\frac {512}{\left|k\right|}}\right)\right\rfloor +1,\ 1\right),\ 512\right)\right\rfloor +1}}\quad {\frac {\text{recipe}}{\text{tick}}}}
```

If recipes per second are desired instead, then simply multiply the value by 20:

```math
{\displaystyle f_{recipe}={\frac {20}{\left\lfloor \min \left(15*\max \left(\left\lfloor \log _{2}\left({\frac {512}{\left|k\right|}}\right)\right\rfloor +1,\ 1\right),\ 512\right)\right\rfloor +1}}\quad {\frac {\text{recipe}}{\text{second}}}}
```

Here are some precomputed values for common speeds:

| RPM | ${\displaystyle t_{recipe}}$ | r/s    | r/m   | r/h  |
| --- | ---------------------------- | ------ | ----- | ---- |
| 32  | 62                           | 0.3225 | 19.35 | 1161 |
| 64  | 47                           | 0.4255 | 25.53 | 1531 |
| 128 | 32                           | 0.625  | 37.5  | 2250 |
| 256 | 17                           | 1.176  | 70.58 | 4235 |
