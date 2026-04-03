---
title: Installing Ubuntu
description: Step-by-step guide to installing Ubuntu — a solid, beginner-friendly Linux distribution backed by Canonical.
---

# Installing Ubuntu

Ubuntu is one of the most widely used Linux distributions in the world. It's polished, well-documented, and has a massive community — making it easy to find help for almost any issue.

[[toc]]

## Before You Start

Make sure you have:
- A USB drive with at least **8 GB** of free space (everything on it will be erased)
- A stable internet connection for downloading the ISO
- About **20–30 minutes** of free time

::: warning Back up your data first
If you're installing on a real machine, back up any important files to an external drive or cloud storage before proceeding. Installation can overwrite existing data if you're not careful.
:::

## Step 1 — Download the ISO

1. Go to [ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)
2. Download the latest **LTS** (Long Term Support) version — supported for 5 years, much more stable than regular releases
3. Wait for the `.iso` file to finish downloading

::: tip LTS vs. regular release
Always pick the **LTS** version unless you specifically need the latest features. Non-LTS releases are only supported for **9 months** — after that you stop receiving security updates unless you upgrade.
:::

## Step 2 — Flash the USB with Rufus

1. Download [Rufus](https://rufus.ie) and open it (no installation needed)
2. Under **Device**, select your USB drive
3. Under **Boot selection**, click **SELECT** and choose the downloaded Ubuntu ISO
4. Leave all other settings as default
5. Click **START** and confirm the warning — Rufus will erase the USB and write the ISO
6. Wait until it shows **READY**

::: info Rufus vs. other tools
You can also use **balenaEtcher** for a simpler visual experience. Both work perfectly fine with Ubuntu ISOs.
:::

## Step 3 — Boot from the USB

1. Plug the USB into the target computer and restart it
2. Press the **boot menu key** repeatedly as it starts up

| Manufacturer | Boot menu key |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Select your USB drive from the boot menu
4. Choose **Try or Install Ubuntu** from the grub menu

::: details Can't boot from USB? Disable Secure Boot.
Some PCs block booting from USB due to **Secure Boot**:
1. Restart and press **F2**, **DEL**, or **F10** to enter BIOS
2. Navigate to the **Security** or **Boot** tab
3. Find **Secure Boot** and set it to **Disabled**
4. Save & Exit (usually F10) and try again

Unlike Fedora, Ubuntu does not officially support Secure Boot on all hardware configurations, so disabling it is often the easiest fix.
:::

## Step 4 — Try Ubuntu Live

Ubuntu will boot into a live GNOME desktop. Before installing, spend a moment testing your hardware:
- Connect to Wi-Fi and browse a website
- Play a YouTube video to test sound
- Check keyboard, mouse, and display resolution

::: warning NVIDIA GPU in Live session
If the screen looks wrong or is stuck at low resolution, this is a common NVIDIA issue in Live mode. The installer will offer proprietary drivers — install them and the issue will be resolved after first boot.
:::

When ready, click **Install Ubuntu** from the welcome screen or the desktop icon.

## Step 5 — Installation Type

### Option A: Replace everything (full switch)

On the disk setup screen, choose **Erase disk and install Ubuntu**.

- ✅ Simplest option
- ✅ Best performance, full disk for Linux
- ❌ Windows will be completely removed

::: danger Make sure you've backed up Windows data
Once you choose this and confirm, all data on the selected disk is permanently erased. There is no undo.
:::

### Option B: Keep Windows (dual boot)

Choose **Install Ubuntu alongside Windows Boot Manager**.

- ✅ Both systems available, selectable at startup via GRUB
- ✅ Great way to try Ubuntu without losing Windows
- ⚠️ Requires at least **30 GB** of free unallocated space

The installer will show a slider to split disk space between Windows and Ubuntu. Drag it to your preference — **50 GB or more** for Ubuntu is recommended if you plan to install apps and games.

::: details Not enough free space for dual boot?
Shrink your Windows partition first:
1. In Windows, press **Win + X** → **Disk Management**
2. Right-click your C: drive → **Shrink Volume**
3. Enter the amount in MB (e.g. `51200` for 50 GB)
4. Click **Shrink** — the freed space will appear as "Unallocated"
5. The Ubuntu installer will automatically use that space
:::

::: tip Accessing Windows files from Ubuntu
Your Windows `C:` drive will be visible in Ubuntu's file manager as a mountable drive. You can read and write files freely between both systems.
:::

### Option C: Manual partitioning (advanced)

Choose **Manual installation** only if you know what you're doing — full control over partition layout, not recommended for beginners.

## Step 6 — Complete the Installer

1. **Language & keyboard** — select your language and layout, test it in the text field
2. **Connect to Wi-Fi** — optional but recommended to download updates during install
3. **Type of installation:**
   - Choose **Interactive installation**
   - Select **Default selection** for a standard app set
4. **Optimise your computer:**
   - ✅ Check **Install third-party software for graphics and Wi-Fi hardware**
   - ✅ Check **Download and install support for additional media formats**
5. **Account setup** — enter your name, computer name, username, and a strong password
6. Click **Install** → wait **10–15 minutes**

## Step 7 — First Boot

Remove the USB when prompted, press Enter, and Ubuntu will reboot into your new system.

After logging in, open the **Welcome** app and do the following:

### 1. Install Updates
```bash
sudo apt update && sudo apt upgrade -y
```
Or open **Software Updater** from the app menu and install all pending updates.

### 2. Install GPU Drivers
Open **Software & Updates** → **Additional Drivers** tab. If you have an NVIDIA or AMD GPU, Ubuntu will detect and offer the recommended proprietary driver. Select it and click **Apply Changes**, then restart.

::: warning NVIDIA users — do this before gaming
Without the correct NVIDIA driver you'll have poor performance, screen tearing, and broken gaming. Always install it via Additional Drivers before launching Steam.
:::

### 3. Enable Ubuntu Pro (optional)
Ubuntu offers free **Ubuntu Pro** for personal use — it provides extended security updates for an additional 5 years beyond the standard LTS period. Activate it with:
```bash
sudo pro attach
```
Or through **Software & Updates → Ubuntu Pro** tab.

## Common Problems & Fixes

### Boot menu doesn't show GRUB after dual boot install
If PC boots straight into Windows after install:
1. Open **CMD as Administrator** in Windows
2. Run: `bcdedit /set {bootmgr} path \EFI\ubuntu\grubx64.efi`
3. Restart — GRUB should now appear

Alternatively, enter BIOS and set **Ubuntu** as the first boot option.

### Wi-Fi not working after install
Most common with Broadcom cards. Connect via ethernet and run:
```bash
sudo apt update
sudo apt install bcmwl-kernel-source
```
Restart after installing.

### Black screen after install (NVIDIA)
At the GRUB menu, press **E**, find the line starting with `linux`, and add `nomodeset` before `quiet splash`. Press **F10** to boot. Then install the NVIDIA driver via **Additional Drivers** and restart.

### Ubuntu boots to a purple/black screen and freezes
This is a known issue on some hardware with the default Wayland display server. At the login screen, click the gear icon ⚙️ next to the Sign In button and select **Ubuntu on Xorg** instead. This will be remembered on next login.

### Screen resolution stuck at 1024×768
GPU driver not installed. Open **Software & Updates → Additional Drivers**, install the recommended driver and restart.

### Clock shows wrong time when switching between Windows and Linux (dual boot)
Run this in Ubuntu terminal:
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Snap apps feel slow to launch
Ubuntu uses Snap packages for some apps (Firefox, Thunderbird) which can have slower startup times. You can replace them with native `.deb` versions:
```bash
# Example: replace Snap Firefox with native Firefox
sudo snap remove firefox
sudo add-apt-repository ppa:mozillateam/ppa
sudo apt install firefox
```

::: tip You're done! 🎉
Ubuntu is installed and ready. Head over to the [App Alternatives](/linux/alternatives) page to find replacements for your favourite Windows apps.
:::
