---
title: Installing Linux Mint
description: Step-by-step guide to installing Linux Mint — the most beginner-friendly Linux distribution for Windows switchers.
---

# Installing Linux Mint

Linux Mint is the most recommended distribution for users coming from Windows. It has a familiar taskbar, start menu, and file manager, and it works out of the box without much configuration.

## Before You Start

Make sure you have:
- A USB drive with at least **8 GB** of free space (everything on it will be erased)
- A stable internet connection for downloading the ISO
- About **20–30 minutes** of free time

::: warning Back up your data first
If you're installing on a real machine, back up any important files to an external drive or cloud storage before proceeding. Installation can overwrite existing data if you're not careful.
:::

## Step 1 — Download the ISO

1. Go to [linuxmint.com/download.php](https://www.linuxmint.com/download.php)
2. Choose the **Cinnamon** edition — it's the most polished and Windows-like
3. Click the download link and wait for the `.iso` file to finish downloading

::: tip Which edition to pick?
- **Cinnamon** — recommended, modern and Windows-like feel
- **MATE** — lighter on resources, slightly more traditional
- **Xfce** — best for older or low-spec hardware (4 GB RAM or less)
:::

## Step 2 — Flash the USB with Rufus

1. Download [Rufus](https://rufus.ie) and open it (no installation needed)
2. Under **Device**, select your USB drive
3. Under **Boot selection**, click **SELECT** and choose the downloaded Mint ISO
4. Leave all other settings as default
5. Click **START** — confirm the warning that USB data will be erased
6. Wait for the progress bar to reach 100% and show **READY**

::: info Rufus vs. other tools
Rufus is the simplest option for Windows users. You can also use **balenaEtcher** if you prefer a more visual interface — both work perfectly.
:::

## Step 3 — Boot from the USB

1. Plug the USB into the computer you want to install Linux on
2. Restart the PC
3. Press the **boot menu key** repeatedly as it starts up

| Manufacturer | Boot menu key |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

4. Select your USB drive from the boot menu
5. Choose **Start Linux Mint** from the grub menu

::: details Can't boot from USB? Disable Secure Boot.
Some PCs block booting from USB due to **Secure Boot**. To disable it:
1. Restart and press **F2**, **DEL**, or **F10** to enter BIOS (key varies by manufacturer)
2. Navigate to **Security** or **Boot** tab
3. Find **Secure Boot** and set it to **Disabled**
4. Save & Exit (usually F10)
5. Try booting from USB again

Linux Mint works fine without Secure Boot. You can re-enable it after install if needed, but it's not required.
:::

## Step 4 — Try Linux Mint Live

You'll land on a fully working Linux Mint desktop straight from the USB — nothing is installed yet. This is the **Live session**.

**Before clicking Install, test your hardware:**
- Connect to Wi-Fi and browse a website
- Play a YouTube video to test sound
- Check that your keyboard and mouse work correctly
- If you have an NVIDIA GPU, check that the display looks correct

::: warning NVIDIA GPU issues in Live session
If your screen looks wrong, has artifacts, or is stuck at low resolution, don't panic — this is common with NVIDIA cards in Live mode. The installer will offer to install the proper drivers. This usually resolves itself after install.
:::

When everything looks good, double-click the **Install Linux Mint** icon on the desktop.

## Step 5 — Installation Type

This is the most important step — choose carefully.

### Option A: Replace everything (full switch)

Choose **Erase disk and install Linux Mint**.

- ✅ Simplest option
- ✅ Best performance, full disk for Linux
- ❌ Windows will be completely removed

::: danger Make sure you've backed up Windows data
Once you choose this option and click Install, all data on the disk is gone. There's no going back without reinstalling Windows from scratch.
:::

### Option B: Keep Windows (dual boot)

Choose **Install Linux Mint alongside Windows**.

- ✅ Both systems available, pick at startup
- ✅ Great way to ease into Linux without commitment
- ⚠️ Requires enough free disk space (at least **30 GB** recommended for Linux)

**How dual boot works:**
1. The installer shows a slider — drag it to split space between Windows and Linux Mint
2. After install, every time you start your PC you'll see the **GRUB bootloader** — a menu where you can choose Windows or Linux Mint
3. Both systems are completely separate — files are not shared by default

::: tip Accessing Windows files from Linux
Even in a dual boot setup, you can browse your Windows partition from Linux Mint's file manager. Your Windows `C:` drive will appear as a mountable drive. You can read and write files to it freely.
:::

::: details Not enough free space for dual boot?
You'll need to shrink your Windows partition first:
1. In Windows, press **Win + X** → **Disk Management**
2. Right-click your C: drive → **Shrink Volume**
3. Enter the amount to shrink in MB (e.g. `40960` for 40 GB)
4. Click **Shrink** — the freed space will appear as "Unallocated"
5. Now run the Linux Mint installer — it will use that unallocated space automatically
:::

### Option C: Manual partitioning (advanced)

Choose **Something else** only if you know what you're doing — this gives you full control over partition layout but is not recommended for beginners.

## Step 6 — Complete the Installer

After choosing your installation type, the rest is straightforward:

1. **Timezone** — click your location on the map or type your city name
2. **User account:**
   - Enter your name and a computer name (e.g. `martin-pc`)
   - Set a username (lowercase, no spaces)
   - Set a strong password
   - Choose whether to require password on login (recommended ✅)
3. Click **Install Now** → confirm the partition changes → wait **10–15 minutes**

## Step 7 — First Boot

Once installation finishes, the installer will ask you to restart. **Remove the USB when prompted** and press Enter.

After logging in, the **Welcome Screen** will open automatically. Do these things first:

### 1. Install Updates
Open **Update Manager** from the taskbar → click **Refresh** → **Install Updates**.

::: tip Always update first
Fresh installs often have weeks of updates pending. Installing them first prevents security issues and ensures all drivers work correctly.
:::

### 2. Install GPU Drivers
Open **Driver Manager** (search in the menu). If you have an NVIDIA or AMD GPU, it will detect and offer the recommended proprietary driver. Click **Apply Changes**.

::: warning NVIDIA users — do this before anything else
Without the proper NVIDIA driver, you may experience screen tearing, poor performance, and broken gaming. Always install it via Driver Manager before launching Steam or any games.
:::

### 3. Set Up Snapshots
Open **Timeshift** from the menu. This creates system snapshots — basically restore points, like System Restore in Windows. Set it up to run weekly so you can roll back if something goes wrong.

## Common Problems & Fixes

### Boot menu doesn't show GRUB after dual boot install
If your PC boots straight into Windows after install:
1. Boot into Windows → open **CMD as Administrator**
2. Run: `bcdedit /set {bootmgr} path \EFI\linuxmint\grubx64.efi`
3. Restart — GRUB should now appear

Alternatively, enter BIOS and change the boot order so **Linux Mint** is first.

### Wi-Fi not working after install
This is most common with Broadcom Wi-Fi cards.
1. Connect via ethernet cable temporarily
2. Open **Driver Manager** — it should detect and offer a Broadcom driver
3. Install it, restart — Wi-Fi should now work

If no ethernet is available, the Mint ISO includes offline Broadcom drivers:
```bash
sudo apt install bcmwl-kernel-source
```

### Screen resolution stuck at 1024×768
This usually means the GPU driver isn't installed yet. Open **Driver Manager**, install the recommended driver, and restart.

### Black screen after install (NVIDIA)
At the GRUB menu, press **E** to edit the boot entry, find the line starting with `linux`, and add `nomodeset` before `quiet splash`. Press **F10** to boot. Then install the NVIDIA driver via Driver Manager and restart — the issue won't occur again.

### Touchpad not working on laptop
```bash
sudo apt install xserver-xorg-input-synaptics
```
Restart after installing.

### Clock shows wrong time when switching between Windows and Linux (dual boot)
Windows and Linux handle the hardware clock differently by default. Fix it in Linux with:
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

::: tip You're done! 🎉
Linux Mint is installed and ready. Head over to the [App Alternatives](/en/linux/alternatives) page to find replacements for your favourite Windows apps.
:::
