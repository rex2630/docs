---
title: How to Install CachyOS
description: A simple CachyOS installation guide for people switching from Windows.
---

# How to Install CachyOS

CachyOS is an Arch Linux-based distribution focused on performance, fresh software, and a much easier installation process than plain Arch. If you want a fast, up-to-date system and are comfortable with a rolling release, it is a very interesting option.

[[toc]]

## Why CachyOS?

CachyOS is a good fit for people who want a middle ground between control and convenience. It ships with modern packages, performance-oriented defaults, and an installer that is much friendlier than installing Arch Linux by hand.

It works especially well for:
- gamers,
- developers,
- users with newer hardware,
- people who want a modern system with fewer manual steps.

## What you need

Before you begin, prepare:

- a USB drive with at least **8 GB** of space,
- the CachyOS ISO image,
- [Rufus](https://rufus.ie) or another ISO writing tool,
- a working internet connection.

::: info Downloading the ISO
Download the installer from the official CachyOS website:
[https://cachyos.org/download/](https://cachyos.org/download/)
:::

## Preparing the USB drive

The easiest method is Rufus.

1. Plug in your USB drive.
2. Open Rufus.
3. Select your USB drive.
4. Choose the downloaded CachyOS ISO file.
5. Click **START** and wait for the process to finish.

If you prefer, you can also use Ventoy or balenaEtcher.

## Booting the installer

After the USB drive is ready:

1. Restart your computer.
2. Open the boot menu, usually with **F12**, **F11**, or **Esc**.
3. Select the USB drive.
4. Boot into the CachyOS live environment.
5. Click **Install CachyOS** or the similar desktop shortcut.

::: tip Live session
Try the live session first. It lets you check whether Wi‑Fi, audio, graphics, and keyboard input work correctly before installing anything.
:::

## Installation steps

The CachyOS installer guides you through the whole process. You will usually go through these steps:

1. Choose language and time zone.
2. Set the keyboard layout.
3. Select the disk and partitions.
4. Choose the desktop environment.
5. Set up your user account and password.
6. Review the summary and start the installation.

If you are new to Linux, a full-disk install is usually the easiest option. If you want dual boot, double-check the partitions before continuing.

::: warning Partition caution
When installing on an existing drive, it is easy to select the wrong partition by mistake. If you are unsure, back up your important data first.
:::

## Dual boot with Windows

If you want to keep Windows:

- create free space on the disk inside Windows first,
- turn off **Fast Startup**,
- ideally disable **hibernation** too,
- if you use BitLocker, make sure you understand the impact before continuing.

CachyOS can be installed alongside Windows, but you need to be careful when selecting the drive and partitions.

## After installation

After the first boot, do a few basic things:

1. Update the system.
2. Check your graphics drivers.
3. Install Steam if you want to game.
4. Enable Proton in Steam settings.
5. Browse the apps available in your package manager.

::: tip Gaming on Linux
CachyOS is often chosen by people who want a strong gaming setup. Thanks to Proton, many Windows games run very well on Linux.
:::

## Common questions

### Is CachyOS hard to use?

Not as hard as plain Arch, but it is still better suited to people who like having more control over their system.

### Is it good for beginners?

It can be, but it is a better first step for a somewhat technical user than for a total beginner.

### Is it good for gaming?

Yes — that is one of the main reasons people choose it.
