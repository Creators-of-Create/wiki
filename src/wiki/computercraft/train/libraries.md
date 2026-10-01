Community-written libraries exist for interacting with schedules. These are not
made by or affiliated with the Create team. The ones below stem from the
[Minecraft Computer Mods Discord Server](https://discord.computercraft.cc/), and
can be used to contact the developers!

## trainlib

A pseudo-OOP library for building train schedules.

In this example, we will assign a schedule to drive to Station 1, then wait for
a player (or more) to mount, after which it will drive to Station 2 and wait for
them to dismount.

```lua
local tl = require("trainlib")

local schedule = tl.schedule(true) -- cyclic / looping!
local conditions = tl.condition_set_or():addCondition(tl.conditions.player_count(1, false))
local conditions_destination = tl.condition_set_or():addCondition(tl.conditions.player_count(0, true))

schedule
    :addEntry(tl.entry(tl.instructions.destination("Station 1"), conditions))
    :addEntry(tl.entry(tl.instructions.destination("Station 2"), conditions_destination))

station.setSchedule(schedule)
```

[Download](https://github.com/scmcgowen/trainlib) (MIT license) &bull;
[View in Discord](https://canary.discord.com/channels/477910221872824320/1292217740416778240/1292217740416778240)

## Scheduler

A minimalistic "it just works" library for magically building train schedules.
Also supports Steam 'n' Rails, Crafts & Additions, and Railways Navigator, and
is easily extensible. Full LuaLS documentation is included in the library.

In this example, we will assign a schedule to drive to Station 1, then wait for
5 seconds, and then wait for the station to be powered, or until the time hits
14:00 (every day), then drive to Station 2 and wait for a second.

```lua
local Scheduler = require("scheduler")

local schedule = Scheduler.new(true) -- cyclic / looping!
    :to("Station 1")
        :wait(5):powered()
        :OR():time(14, 0, "daily")
    :to("Station 2")
        :wait(1)

station.setSchedule(schedule)
```

[Download](https://github.com/tizu69/cclibs/tree/main/scheduler) (MIT license) &bull;
[View in Discord](https://canary.discord.com/channels/477910221872824320/1299066980581773353/1299066980581773353)

## Create Scheduler / DSL for Create Train Schedules

A domain-specific language for writing schedules.

In this example, we will assign a schedule to drive to Station 1, then wait 5
minutes, and then wait for the station to be powered, or until the time hits
14:00, then drive to Station 2 and wait for a minute, use this DSL code:

```scheduler
cyclic
to "Station 1" {
  wait 5m, powered
  time = 14:00 daily
}
to "Station 2" { wait 1m }
```

Then, turn it into a schedule like so:

```lua
local mksched = require "create-scheduler"
local schedule = mksched("cyclic to ...")
station.setSchedule(schedule)
```

[Download](https://gist.github.com/MCJack123/94071c7724045dc048777395afc04eb1) (CC0 license) &bull;
[View in Discord](https://discord.com/channels/477910221872824320/1299074371540746310/1299074371540746310)
