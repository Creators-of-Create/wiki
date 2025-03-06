---
minecraft_version: 1.20.1
create_version: 6.0.2-52
ponder_version: 1.0.51
flywheel_version: 1.0.1
registrate_version: MC1.20-1.3.3

prev: false
---

<!--@include: ./template.md-->

::: code-group

```groovy [build.gradle [FG]]
repositories {
    maven { url = "https://maven.createmod.net" } // Create, Ponder, Flywheel
    maven { url = "https://maven.tterrag.com" } // Registrate
    maven { url = "https://raw.githubusercontent.com/Fuzss/modresources/main/maven/" } // ForgeConfigAPIPort
}

dependencies {
    implementation(fg.deobf("com.simibubi.create:create-${minecraft_version}:${create_version}:slim") { transitive = false })
    implementation(fg.deobf("net.createmod.ponder:Ponder-Forge-${minecraft_version}:${ponder_version}"))
    compileOnly(fg.deobf("dev.engine-room.flywheel:flywheel-forge-api-${minecraft_version}:${flywheel_version}"))
    runtimeOnly(fg.deobf("dev.engine-room.flywheel:flywheel-forge-${minecraft_version}:${flywheel_version}"))
    implementation(fg.deobf("com.tterrag.registrate:Registrate:${registrate_version}"))
    compileOnly(annotationProcessor("io.github.llamalad7:mixinextras-common:0.4.1"))
    implementation("io.github.llamalad7:mixinextras-forge:0.4.1")
}
```

```groovy [build.gradle [MDG]]
repositories {
    maven { url = "https://maven.createmod.net" } // Create, Ponder, Flywheel
    maven { url = "https://maven.tterrag.com" } // Registrate
    maven { url = "https://raw.githubusercontent.com/Fuzss/modresources/main/maven/" } // ForgeConfigAPIPort
}

dependencies {
    modImplementation("com.simibubi.create:create-${minecraft_version}:${create_version}:slim") { transitive = false }
    modImplementation("net.createmod.ponder:Ponder-Forge-${minecraft_version}:${ponder_version}")
    modCompileOnly("dev.engine-room.flywheel:flywheel-forge-api-${minecraft_version}:${flywheel_version}")
    modRuntimeOnly("dev.engine-room.flywheel:flywheel-forge-${minecraft_version}:${flywheel_version}")
    modImplementation("com.tterrag.registrate:Registrate:${registrate_version}")
    compileOnly(annotationProcessor("io.github.llamalad7:mixinextras-common:0.4.1"))
    implementation("io.github.llamalad7:mixinextras-forge:0.4.1")
}
```

```kotlin [build.gradle.kts [NG]]
repositories {
    maven("https://maven.createmod.net") // Create, Ponder, Flywheel
    maven("https://maven.tterrag.com") // Registrate
}

dependencies {
    implementation(fg.deobf("com.simibubi.create:create-${property("minecraft_version")}:${property("create_version")}:slim") { isTransitive = false }!!)
    implementation(fg.deobf("net.createmod.ponder:Ponder-Forge-${property("minecraft_version")}:${property("ponder_version")}")!!)
    compileOnly(fg.deobf("dev.engine-room.flywheel:flywheel-forge-api-${property("minecraft_version")}:${property("flywheel_version")}")!!)
    runtimeOnly(fg.deobf("dev.engine-room.flywheel:flywheel-forge-${property("minecraft_version")}:${property("flywheel_version")}")!!)
    implementation(fg.deobf("com.tterrag.registrate:Registrate:${property("registrate_version")}")!!)
    compileOnly(annotationProcessor("io.github.llamalad7:mixinextras-common:0.4.1")!!)
    implementation("io.github.llamalad7:mixinextras-forge:0.4.1")
}
```

```kotlin [build.gradle.kts [MDG]]
repositories {
    maven("https://maven.createmod.net") // Create, Ponder, Flywheel
    maven("https://maven.tterrag.com") // Registrate
}

dependencies {
    modImplementation("com.simibubi.create:create-${property("minecraft_version")}:${property("create_version")}:slim") { isTransitive = false }
    modImplementation("net.createmod.ponder:Ponder-Forge-${property("minecraft_version")}:${property("ponder_version")}")
    modCompileOnly("dev.engine-room.flywheel:flywheel-forge-api-${property("minecraft_version")}:${property("flywheel_version")}")
    modRuntimeOnly("dev.engine-room.flywheel:flywheel-forge-${property("minecraft_version")}:${property("flywheel_version")}")
    modImplementation("com.tterrag.registrate:Registrate:${property("registrate_version")}")
    compileOnly(annotationProcessor("io.github.llamalad7:mixinextras-common:0.4.1")!!)
    implementation("io.github.llamalad7:mixinextras-forge:0.4.1")
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

#### Mixin Refmap Remapping [FG]

If you encounter errors when trying
to start Minecraft from your development environment after adding a development environment dependency on Create,
it is necessary to remap Create's mixin refmap.
Add the following code to each Minecraft run configuration block.

```groovy
property("mixin.env.remapRefMap", "true")
property("mixin.env.refMapRemappingFile", "${projectDir}/build/createSrgToMcp/output.srg")
```

The following code shows a client run configuration with mixin refmap remapping and with unrelated code omitted.

```groovy{4-5}
minecraft {
    runs {
        client {
            property("mixin.env.remapRefMap", "true")
            property("mixin.env.refMapRemappingFile", "${projectDir}/build/createSrgToMcp/output.srg")
        }
    }
}
```

---

### Production Environment Dependency

This type of dependency is added to the `mods.toml` file so that Forge knows your mod will not work without a certain
version of Create. This type of dependency is only useful if a development environment dependency was also added. This
type of dependency should not be added if your mod is able to work in a production environment without Create.

#### Configuration

Add the following dependency definition to your `mods.toml` file,
replacing `${modid}` with your mod's ID. This tells Forge that your mod depends on Create.
If Create is not present or is outdated, Forge will display an error screen explaining this to the user.

```toml-vue
[[dependencies.${modid}]]
    modId="create"
    mandatory=true
    versionRange="[{{ create_version_no_build_number }},{{ next_minor_version }})"
    ordering="NONE"
    side="BOTH"
```
