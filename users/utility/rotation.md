# Rotational Force

Rotational Force is what powers the various machines and the contraptions in the Create mod.

## Speed

Speed refers to how quickly a rotational component is spinning; it is measured in Rotations Per Minute (RPM) and can be seen with a Speedometer. The maximum rotation speed of a component is 256 RPM by default (configurable). Any component added to step up speed further, such as a cogwheel on a large cogwheel, will break off.

Speed can be controlled through several means:

- A Cogwheel and a Large Cogwheel can be connected together diagonally. One rotation of the large cogwheel is equivalent to 2 rotations of the small one, so the small one will always rotate twice as fast as the large one.
- A Rotation Speed Controller with a large cogwheel can easily change the speed and direction of any input.
- An Adjustable Chain Gearshift can change the speed of Encased Chain Drives connected to it based on redstone signal.

Higher speeds proportionally raise the stress requirement of a mechanical component. Twice the RPM produces twice the stress.

## Kinetic Stress

Stress networks can be combined as long as they rotate in the same direction and speed where they meet.

Stress is the amount of energy mechanical components need to run and is shared across all components that are connected together in a network; it is measured in Stress Units (SU). The stress requirement or production of a certain component can be seen by looking at it wearing Engineer's Goggles and the total stress of a network can be measured with a Stressometer.

Each network has a total amount of stress units available to work with, which can be produced by Generators such as:

- Hand Crank
- Water Wheel
- Windmill Bearing
- Steam Engine

Mechanical components utilize a certain amount of the SU available to the network depending on their type and the speed they're working at. If more Stress Units are used than are available to the network, it will become overstressed and stop entirely until more stress capacity is added or stress-generating components are removed.

## Transfer

There are several ways to transfer rotational energy:

- Shaft - Transfers rotational force in a straight line. Some components have Shafts built in.
- Cogwheel - Inverts force, doubles or halves speed, can rotate axis 90 degrees. Some components have small cogwheels built in.
- Mechanical Belt - Relay rotation between 2 or more Shafts.
- Encased Chain Drive - Relays rotation, can rotate axis 90 degrees.
- Adjustable Chain Gearshift - When used with an Analog Lever, can manipulate speed between doubling or halving it.
- Gearbox - A miniature version of four connected Large Cogwheels.
- Clutch - Stops outgoing rotation when powered with Redstone.
- Gearshift - Inverts outgoing rotation when powered with Redstone.
- Gantry Carriage - Can move along a line of Gantry Shafts and outputs the rotational force when the shaft is powered with Redstone.
- Sequenced Gearshift - Allows for sequences of specific amounts of rotation.
- Rotation Speed Controller - Outputs a specified speed and direction of rotation.
