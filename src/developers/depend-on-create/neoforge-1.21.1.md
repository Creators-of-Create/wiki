---
minecraft_version: 1.21.1
create_version: 6.0.11-283

next: false
---

::: danger Updating from 6.0.10 and earlier
The instructions for depending on create have changed, you no longer need to have transitive set to false and you
no longer need to use the jar with the slim classifier, see the updated instructions below.
:::

<!--@include: ./template.md-->

::: code-group

```groovy [build.gradle]
repositories {
    maven { url = "https://maven.createmod.net" } // Create, Ponder, Flywheel
    maven { url = "https://maven.ithundxr.dev/snapshots" } // Registrate
}

dependencies {
    api("com.simibubi.create:create-${minecraft_version}:${create_version}")
}
```

```kotlin [build.gradle.kts]
repositories {
    maven("https://maven.createmod.net") // Create, Ponder, Flywheel
    maven("https://maven.ithundxr.dev/snapshots") // Registrate
}

dependencies {
    api("com.simibubi.create:create-${property("minecraft_version")}:${property("create_version")}")
}
```

:::

And in your `gradle.properties` file:

```properties-vue [gradle.properties]
minecraft_version = {{ $frontmatter.minecraft_version }}
create_version = {{ $frontmatter.create_version }}
```

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
    versionRange="[{{ create_version_no_build_number }},{{ next_minor_version }})"
    ordering="NONE"
    side="BOTH"
```
