---
layout: default
title: Todo List
---
# Todo List

**Last updated: Tue Mar  4 12:36:32 UTC 2025**

## Features
====================
- [ ]      adhoc ping
- [ ]      canned message
- [ ]      map scale indicator 
- 🛠 **(WIP)**   eink drivers for other devices
- [ ]      mini-compass on nodelist
- [ ]      additional user applets
- [ ]      GPS stats in menu
- [ ]      GPS & Bluetooth toggle in menu
- 🛠 **(WIP)**   add extended ascii / foreign language chars - Fonts for Windows-1250, Windows-1251 (Windows-1252?)

## Critical Tasks

## Improvements
====================
- [ ]      Better detection of position changes in PositionsApplet
- [ ]      NodeListApplets should only requestUpdate for changed signal strength if node 0-hops (showing signal bars)
- [ ]      Descriptive headers for some settings in menu
- [ ]      Re-render applets when RTC is set. Some UI elements change (e.g. "Recents" applet counts)
- [ ]      Don't save on shutdown / reboot within N seconds of boot. Protect flash against weird boot loops.
- [ ]      Applet to display critical faults
- [ ]      OEM Bootscreen
- [ ]      Aux button: exit menu without switching tile focus,
- [ ]      InkHUD::Inputs::TwoButton should support INPUT_PULLUP

## Known Bugs
=====================
- [ ]      Timestamps don't update. Needs to happen once a day. "6PM -> Yesterday". Make the WindowManager do it.
- [ ]      Root menu: header breaks spacing if rtc set while menu open
- [ ]      Applets don't re-render when node is removed via admin command
- [ ]      Tile highlight rendered below header for threaded message applets
- [ ]      NodeListApplets: *very* large distances spill over the divider
- [ ]      Menu cursor does not always return to top when exited

## Chores
==========
- [ ]      Make runOnce methods private
- [ ]      Helper method in InkHUD::Drivers::EInk to simplify framebuffer arithmetic, for anyone else using NicheGraphics
- [ ]      Remove parentheses from methods mentioned in comments, to make code search easier
- [ ]      Decouple the original Screen class from bluetooth code: observe "BluetoothStatus" instead
- [ ]      Honor userprefs / config gpio overrides
- [ ]      Make rotation default to 0 instead of 1, if not specified
- [ ]      Use class enums?


## Completed
- [ ]      (Rare) Menu stuck after changing tile using aux button
- [ ]      (Rare) Recents List: count in header label may not match number of items shown
- [ ]      Aux button: exit menu without switching tile focus
- [ ]      ChronoList applets: *very* large distances spill over the divider
- [ ]      ChronoList applets: no event raised on nodeinfo rx
- [ ]      ChronoListApplet should only requestUpdate for changed signal strength if node 0-hops (showing signal bars)
- [ ]      Don't repeat logs from Applet::getTimeString
- [ ]      Don't show signal strength in ChronoListApplets if hops unknown
- [ ]      Make setting-persistence more intuitive
- [ ]      Nodelist applet should fill new space from NodeDB when layout changes and applet size increases, or when recents duration increases
- [ ]      Refactor ChronoList applets
- [ ]      SNR from NodeDB, maybe? Not sure if RSSI is stored; not sure if we can determinal signal strength without RSSI.
- [ ]      Test
- [ ]      ThreadedMessageApplet: text wrapping issues with very long words (i.e. URLs)
- [ ]      Tips at first boot (set region, how to use menu, etc). Could also catch common mistakes (not shutting down correctly, attempt to rotate via app, etc)
