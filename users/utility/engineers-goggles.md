# Engineer's Goggles

Engineer's Goggles are a wearable item that allow the user to see more details about Create machines and contraptions.

![Engineer's Goggles](../assets/items/goggles.png)

## Usage

While worn in the helmet slot, the Engineer's Goggles will show the stress impact of the viewed machine while it is running. They will also give numbers and highlight the current rotation when looking at a Stressometer or Speedometer. Additionally, they show how much fluid is in a tank along with the total storage capacity of the tank.

### Detecting Speed

Upon attaching any rotating component to a network while wearing the Engineer's Goggles, a particle effect will briefly appear rotating around the component, demonstrating the direction of rotation through it's motion and demonstrating the speed of rotation through it's color.

This particle effect only appears when placing a component, and cannot be used to analyze existing components.

### Reading Gauges

Looking at a Speedometer while wearing the Engineer's Goggles will display the exact speed of the system in Rotations Per Minute (RPM), as well as the color coded speed of the system.

![Speed](https://camo.githubusercontent.com/ec9a8b66ca9cc8eb717d1fe0a56ed85a1fcb66f49f393d1b1ea07aca1bcaa438/68747470733a2f2f692e696d6775722e636f6d2f566e4f417653442e706e67)

Stressometers can be read the same way, but will instead display the percentage of stress capacity being utilized by the system, the remaining base stress capacity of the system, and the remaining stress capacity of the system at the current RPM.

![Stress](https://camo.githubusercontent.com/86cdd6610c0cf1e23982494f82b785fa9b9c6be8482d9f40f37c9a8a118cd851/68747470733a2f2f692e696d6775722e636f6d2f6144394530466c2e706e67)

### Speed Color Code

🟩 Green represents slow rotation less than `30 RPM`.

🟦 Blue represents moderate rotation greater than or equal to `30 RPM - 99 RPM`.

🟪 Purple represents fast rotation greater than or equal to `100 RPM`.

### Generator Stats

Looking at a kinetic component which produces rotational force will display the base stress capacity produced by that generator and the stress capacity produced by that generator at the current RPM.

![Generators](https://camo.githubusercontent.com/807618a032e72481327cd36afae0b1708f9afa0543f4b327ce64a63f07c34fef/68747470733a2f2f692e696d6775722e636f6d2f4f5833317668552e706e67)

### Kinetic Stats

Looking at a kinetic component which consumes rotational force will display the base stress impact of that component and the stress impact of that component at the current RPM.

![Kinetic Stats](https://camo.githubusercontent.com/1be7480639896d9e4547e5fa12eb80d462dfdecaf2748edff582305671f4beb3/68747470733a2f2f692e696d6775722e636f6d2f7247346a4749592e706e67)
