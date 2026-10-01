Having prepared a Schematic for placement, you are now ready to consult the Schematicannon for the construction.  
For this Workflow, you will need:

- A deployed Schematic
- A Schematicannon
- Chests or other Inventories
- Gunpowder
- A Book (Optional)

**Note**: Blocks replaced by the Schematicannon will **not drop** any items. This thing is not a Quarry, folks!

---

### Setting up

Place the **Schematicannon** near but outside the boundaries of your **Schematic**. It is important that the target
area is loaded and not too far away from the cannon.  
Open the cannon's interface to start configuring the construction parameters.

![](https://i.imgur.com/tdxuraF.png)

_Top-Left: **Schematic** input, Top-Right: Material List printer, Center: Play/Pause/Stop, Bottom: Gunpowder Input._

- Start by putting your **Schematic** into the Schematic input slot.
- Insert the **Gunpowder** into the Gunpowder input slot. If you hover over the indicator, it will show the number of
  blocks that can be placed with the given amount.
- Adjust the [Placement Settings](#placement-settings) as needed.
- To find out which blocks will be necessary to print the structure, place the **Book** into the Material List printer
  slot.  
  You can also overwrite a written book at any point during the printing process.

Find out what blocks you will need by reading the printed Book and put them into inventories placed adjacent to the \*
\*Schematicannon\*\*:

![](https://i.imgur.com/kKXT9ST.png)

Once you insert some Blocks, you can refresh the **Material List** by running it through the printer again.  
Gathering all materials is not a requirement for the building process to begin. The cannon will simply stall when the
next block to place is not available.

- To begin building the structure, click the **Play** Button in the **Schematicannon**'s interface.

---

### Maintenance

![](https://i.imgur.com/enDy5EY.png)

During the process, the status text in the interface will show the progress and potential issues:

- **Stopped** - Red Indicator; No Schematic is in the process of being built.
  - **"Idle"** - Initial state of the cannon. Press **Play** to start the build.
  - **"Invalid Blueprint"** - You inserted a Schematic with no data. Better get rid of that item.
  - **"Schematic Expired"** - The Schematic file was lost on the server. This could be due to two different reasons:
    - The server operators removed the schematic files from the folder.
    - You uploaded at least 10 other Schematics after this one, causing it to be overwritten.

- **Paused** - Yellow Indicator, Schematic is present but not being worked on.
  - **"Ready"** - Paused step before printing. You can re-assure that materials are present and the settings are as
    desired.
  - **"Out of Gunpowder"** - Speaks for itself, doesn't it? Press **Play** after refueling to unpause.
  - **"Missing Block"** - The cannon is waiting to receive a block it requires. It will continue automatically when
    said block has been found in the adjacent inventories.
  - **"Paused"** - The cannon has been paused manually by a player or has been in unloaded chunks.
  - **"Block is not loaded"** - The cannon wants to replace at a position that is too far away. Move the cannon closer
    to the action or load the chunk through other means.

- **Running** - Green Indicator, The cannon is running.

---

### Placement Settings

![](https://i.imgur.com/4acToDo.png)

When configuring the **Schematicannon**, you can adjust some of its behavior using the options in the interface.  
Hold **Shift** to get in-game descriptions of the options.

- **Replacement Behavior** - four Buttons on the left  
  These options indicate at what conditions the **Schematicannon** replaces a given block in the World.  
  The four buttons correspond to levels of leniency and usually imply the conditions to their left. (Except _Don't
  replace_)
  1. **Don't Replace Solid Blocks** - Lowest level of leniency. The cannon will simply skip a position if there is a
     solid Block in the world already. This will mask the schematic into the world, not placing anything below and
     into the surface.
  2. **Replace Solid with Solid** - The cannon will consider replacing solid blocks in the world, but only if the
     block in the Schematic is solid as well. This will still prevent _transparent_ blocks such as fences or plants
     from being placed below or into the surface.
  3. **Replace Solid with Any** (Default) - Implies _Replace Solid with Solid_, and will also Replace solid blocks in
     the World as long as they are not being replaced by Air.
  4. **Replace Solid with Empty** - Implies the last two options, and will replace all blocks within the boundaries
     even if there isn't a Block in the Schematic at that position. This will clear out interiors of a schematic
     placed in the ground, but will also cause terrain to be cut away around the structure.

- **Skip Missing Blocks** - First button in the second group.  
  If this option is enabled, the **Schematicannon** will not pause when a block is not found in any of the
  inventories.  
  Instead, it will continue at the next position, leaving parts of the structure unfinished.  
  This can have a couple advantages:
  - **Filtering** - If you would like to leave out certain blocks of a structure, don't include the Materials near the
    cannon and enable the _Skip Missing Blocks_ option. Make sure none of the desired materials is missing.
  - **Splitting the Workload** - If you want multiple cannons working on a large Schematic, enable skip missing blocks
    on each and spread the required materials across the cannons grouped by type. If the cannons have different
    materials, they will complete the structure more quickly.
    Make sure none of the desired materials are missing, no cannons share a block type, and all cannons have their
    Schematic deployed at the same Position.

- **Protect Block Entities** - Second button in the second group.  
  If this option is enabled, the cannon will **not** replace any data holder blocks such as **Chests**, **Furnaces**,
  etc.  
  Disable this option if your terrain happens to be made out of barrels or something.
