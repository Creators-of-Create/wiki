Using the Schematic module, you can load Structures of the `.nbt` format and bring them into the world.
Loaded and positioned Schematics can then be placed directly or via the Schematicannon.  
For this workflow, you will need:

- Empty Schematic  
  _(Schematic and Quill works as well)_
- Schematic Table

### Loading

Craft yourself a **Schematic Table** and place it in your workshop.  
Open it up and place the **Empty Schematic** in the input slot on the left.

![](https://i.imgur.com/FOuoprd.png)

The checkered area shows the schematic file to be loaded onto the item.  
You can change it to any of the files available in the `/schematics` folder.

- **Scroll** on the text to select the Schematic you would like to load.
- Press the check-mark Button to confirm your choice. The Table will now start to write the schematic onto the item.

The processing time of this table depends on the size of the schematic you chose.  
On the technical side - the schematic is being uploaded onto the server to be place-able by server side
actors.  
If your structure is huge, you can leave the Table interface while the upload is happening, and come back later.

- Once it is finished, take the Schematic from the output slot and hold it in your main hand.

### Initial Placement

![](https://i.imgur.com/QWV0Zus.png)

For initial positioning, you have two options: Using the **Deploy** Mode, or to input coordinates directly.

- For positioning the Schematic without coordinates, **Right-click** with the **Schematic** when the bounding-box is
  near the desired location. _(Can be moved later)_
- For positioning in the Air, Hold **Ctrl** to lock the selected position at a fixed distance.  
  Modify the distance by **Scrolling** while **Ctrl** is being held. **Right-click** to confirm.
- [Skip the coordinate section](#fine-tuning)

If you have specific coordinates saved from other Tools, earlier sessions, or your friend -  
you can open the Schematic's interface using **Right-click** while **Sneaking**.

![](https://i.imgur.com/qomz806.png)

The Coordinates are number inputs, the other options can be cycled with the **Mouse Wheel**.

- Put your desired coordinates in the respective inputs and press **E** or **ESC** to close & confirm.
- If you have comma-separated coordinates `x,y,z` saved on your clipboard, just hit **Ctrl-V** anywhere in the GUI to
  insert them directly.

### Fine-tuning

Once the initial Position is set, a Hologram of the structure will appear (unless the Schematic is owned by another
player).  
**Note**: No blocks have been placed yet, it is merely a preview. You can walk through the hologram, and it is invisible
to other players.  
From here, you can use the tools to further adjust the positioning.

![](https://i.imgur.com/XjIAW97.png)

**Scrolling** while [**Left-Alt**] is held will let you cycle between the options and show a little explanation on how
to control them.

- The **Move**, **Rotate** and **Flip** tools are used by pointing at a side of the Schematic, holding down **Ctrl** and
  then using the **Mouse Wheel**.  
  It takes some getting used to, but it allows you to cycle your **Hotbar** in emergencies.
- The **Deploy** tool allows you to repeat the initial positioning with the cursor.  
  You can also tweak the coordinates with **Sneak**+**Right-click** at any point.
- In **Creative Mode**, there is an additional option called **Print**, which will proceed to instantly place the actual
  blocks of the Structure in the world at the currently shown position and orientation.  
  After printing, the blueprint persists and can be Deployed again if needed.

In **Survival Mode**, you are now ready to have this Schematic built by a Schematicannon.  
Follow the [Printing workflow](./printing-schematic.md) to learn how to use the cannon effectively.
