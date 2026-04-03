---
title: Installing Linux Mint
description: Step-by-step guide to installing Linux Mint — the most beginner-friendly Linux distribution for Windows switchers.
---

# Installing Linux Mint

Linux Mint is the most recommended distribution for users coming from Windows. It has a familiar taskbar, start menu, and file manager, and it works out of the box without much configuration.

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

1. Go to [linuxmint.com/download.php](https://www.linuxmint.com/download.php)
2. Choose the **Cinnamon** edition — it's the most polished and Windows-like
3. Click the download link and wait for the `.iso` file to finish downloading

::: tip Which edition to pick?
- **Cinnamon** — recommended, modern and Windows-like
- **MATE** — lighter on resources, slightly more traditional
- **Xfce** — best for older or low-spec hardware
:::

## Step 2 — Flash the USB with Rufus

[image:62]

1. Download [Rufus](https://rufus.ie) and open it (no installation needed)
2. Under **Device**, select your USB drive
3. Under **Boot selection**, click **SELECT** and choose the downloaded Mint ISO
4. Leave all other settings as default
5. Click **START** — Rufus may warn you that all data on the USB will be deleted, confirm with **OK**
6. Wait for the progress bar to reach 100% and show **READY**

::: info Rufus vs. other tools
Rufus is the simplest option for Windows users. You can also use **balenaEtcher** if you prefer a more visual interface — both work perfectly.
:::

## Step 3 — Boot from the USB

1. Plug the USB into the computer you want to install Linux on
2. Restart the PC
3. As it boots, press the **boot menu key** repeatedly — usually **F12**, **F11**, or **F8** (depends on your motherboard brand)

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

::: details What if I can't boot from USB?
You may need to disable **Secure Boot** in your BIOS settings. Restart, press **F2** or **DEL** to enter BIOS, find the Secure Boot option and set it to **Disabled**, then save and try again.
:::

## Step 4 — Try Linux Mint Live

[image:58]

You'll land on a fully working Linux Mint desktop straight from the USB — nothing is installed yet. This is the **Live session**.

Take a moment to:
- Test your Wi-Fi, sound, and keyboard
- Browse the desktop and get a feel for it
- Make sure everything works before committing to install

When you're ready, double-click the **Install Linux Mint** icon on the desktop.

## Step 5 — Run the Installer

[image:60]

Follow the installer steps:

1. **Language** — select your language and click Continue
2. **Keyboard layout** — select your layout, test it in the text box, click Continue
3. **Multimedia codecs** — check **Install multimedia codecs** ✅ (enables MP3, video playback, etc.)
4. **Installation type** — for most users, choose **Erase disk and install Linux Mint**

::: details Want to keep Windows? Choose dual boot instead.
On the Installation type screen, select **Install Linux Mint alongside Windows**. The installer will let you drag a divider to split disk space between the two systems. After install, you'll see a menu at startup where you can choose which OS to boot.
:::

5. **Timezone** — click your location on the map or type your city
6. **User account** — enter your name, computer name, username, and password
7. Click **Install Now** and confirm — installation takes about 10–15 minutes

## Step 6 — First Boot

Once installation is complete, the installer will ask you to restart. Remove the USB when prompted and press **Enter**.

After logging in, the system will greet you with a **Welcome Screen**. We recommend:
- Clicking **System Snapshots** — lets you take backups before making big changes
- Opening **Driver Manager** — installs the best GPU drivers for your hardware
- Opening **Update Manager** and clicking **Refresh** → **Install Updates**

::: tip You're done! 🎉
Linux Mint is now installed. Head over to the [App Alternatives](/linux/alternatives) page to find replacements for your favourite Windows apps.
:::
