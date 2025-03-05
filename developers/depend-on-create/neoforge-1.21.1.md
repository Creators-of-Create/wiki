---
minecraft_version: 1.21.1
create_version: 6.0.1-15
ponder_version: 1.0.39
flywheel_version: 1.0.1-11
registrate_version: MC1.21-1.3.0+62

next: false
---

<!--@include: ./template.md-->

::: code-group

```groovy [build.gradle]
repositories {
    maven { url = "https://maven.createmod.net" } // Create, Ponder, Flywheel
    maven { url = "https://mvn.devos.one/snapshots" } // Registrate
    maven { url = "https://raw.githubusercontent.com/Fuzss/modresources/main/maven/" } // ForgeConfigAPIPort
}

dependencies {
    implementation("com.simibubi.create:create-${minecraft_version}:${create_version}:slim") { transitive = false }
    implementation("net.createmod.ponder:Ponder-NeoForge-${minecraft_version}:${ponder_version}")
    compileOnly("dev.engine-room.flywheel:flywheel-neoforge-api-${minecraft_version}:${flywheel_version}")
    runtimeOnly("dev.engine-room.flywheel:flywheel-neoforge-${minecraft_version}:${flywheel_version}")
    implementation("com.tterrag.registrate:Registrate:${registrate_version}")
}
```

```kotlin [build.gradle.kts]
repositories {
    maven("https://maven.createmod.net") // Create, Ponder, Flywheel
    maven("https://mvn.devos.one/snapshots") // Registrate
    maven("https://raw.githubusercontent.com/Fuzss/modresources/main/maven/") // ForgeConfigAPIPort
}

dependencies {
    implementation("com.simibubi.create:create-${property("minecraft_version")}:${property("create_version")}:slim") { isTransitive = false }
    implementation("net.createmod.ponder:Ponder-NeoForge-${property("minecraft_version")}:${property("ponder_version")}")
    compileOnly("dev.engine-room.flywheel:flywheel-neoforge-api-${property("minecraft_version")}:${property("flywheel_version")}")
    runtimeOnly("dev.engine-room.flywheel:flywheel-neoforge-${property("minecraft_version")}:${property("flywheel_version")}")
    implementation("com.tterrag.registrate:Registrate:${property("registrate_version")}")
}
```

```properties-vue [gradle.properties]
minecraft_version = {{ $frontmatter.minecraft_version }}
create_version = {{ $frontmatter.create_version }}
ponder_version = {{ $frontmatter.ponder_version }}
flywheel_version = {{ $frontmatter.flywheel_version }}
registrate_version = {{ $frontmatter.registrate_version }}
```

:::

#### Setting the mixin config

If you encounter errors when trying
to start Minecraft from your development environment after adding a development environment dependency on Create,
it is necessary to add Create's mixin config to the program arguments.
Add the following code to each Minecraft run configuration block.

::: code-group

```groovy [build.gradle(.kts) [NG]]
arg("-mixin.config=create.mixins.json")
```

```groovy [build.gradle(.kts) [MDG]]
programArgument("-mixin.config=create.mixins.json")
```

:::

The following code shows a client run configuration with mixin refmap remapping and with unrelated code omitted.

::: code-group

```groovy{3-4,6} [build.gradle(.kts) [FG]]
runs {
    client {
        property("mixin.env.remapRefMap", "true")
        property("mixin.env.refMapRemappingFile", "${projectDir}/build/createSrgToMcp/output.srg")

        arg("-mixin.config=create.mixins.json")
    }
}
```

```groovy{4-5,7} [build.gradle(.kts) [MDG]]
neoForge {
    runs {
        configureEach {
            property("mixin.env.remapRefMap", "true")
            property("mixin.env.refMapRemappingFile", "${projectDir}/build/createSrgToMcp/output.srg")

            programArgument("-mixin.config=create.mixins.json")
        }
    }
}
```

:::

### Production Environment Dependency

This type of dependency is added to the `neoforge.mods.toml` file so that NeoForge knows your mod will not work without
a certain
version of Create. This type of dependency is only useful if a development environment dependency was also added. This
type of dependency should not be added if your mod is able to work in a production environment without Create.

#### Configuration

Add the following dependency definition to your `neoforge.mods.toml` file,
replacing `${modid}` with your mod's ID. This tells Forge that your mod depends on Create.
If Create is not present or is outdated, NeoForge will display an error screen explaining this to the user.

```toml-vue
[[dependencies.${mod_id}]]
    modId="create"
    type="required"
    versionRange="[{{ create_version_no_build_number }},)"
    ordering="NONE"
    side="BOTH"
```
