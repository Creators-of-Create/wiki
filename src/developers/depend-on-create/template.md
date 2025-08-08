<script setup>
{/* prettier-ignore */}
import {useData} from "vitepress";

const create_version = useData().frontmatter.value.create_version ?? "0.0.0";
const create_version_no_build_number = create_version.split("-")[0];

const _split = create_version_no_build_number.split(".");
const next_minor_version = `${_split[0]}.${Number(_split[1]) + 1}.0`;
</script>

# Depending on Create

### Create version: **{{ create_version_no_build_number }}**

### Minecraft version: **{{ $frontmatter.minecraft_version }}**

This page describes how a mod developer can add a dependency on Create.

## Preliminary Information

Release jars of Create...

- are built and published manually.
- are published to CurseForge and Modrinth.
- are published when the developers feel that enough features have been added since the previous release.
- do not have a build number.

Non-release jars of Create...

- are built and published automatically by the CI.
- are published to the Maven.
- are published every time there is a new commit.
- do have a build number.

Even though release jars do not have a build number, they were still built from a commit, which also has a corresponding
non-release jar. This is to say that each release jar is associated with a unique, near identical non-release jar on the
Maven.

It is not advisable to depend on a non-release jar that does not have a corresponding release jar as it may contain code
that does not exist in a release jar. Your mod may not work in production if it uses such code since users will be using
a release jar as opposed to the non-release jar you depended on during development.

The intended way to access Create jars to depend on them is through the Maven.

For ease of use, this page will always contain the build numbers that exactly correspond to the release jar of the
version at the top of the page.

## Quick Access

**If you are an add-on developer**, you will need both
a [development environment dependency](#development-environment-dependency) and
a [production environment dependency](#production-environment-dependency).

**If you are not an add-on developer**, you will only need
a [development environment dependency](#development-environment-dependency).

## Types of Dependencies

### Development Environment Dependency

This type of dependency is added to the Gradle buildscript so that Gradle and your IDE can find Create"s code.

#### Configuration

The following code defines the maven where Create, Flywheel,
and Registrate jars are hosted and defines dependencies on those.