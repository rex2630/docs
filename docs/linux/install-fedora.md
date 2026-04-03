---
title: Installing Fedora
description: Step-by-step guide to installing Fedora — a cutting-edge Linux distribution perfect for gamers and developers.
---

# Installing Fedora

Fedora is a modern, fast-moving distribution sponsored by Red Hat. It ships the very latest software — newest GPU drivers, Proton updates, and kernel improvements land here first. This makes it a favourite among gamers and developers who want the latest without sacrificing stability.

## Before You Start

Make sure you have:
- A USB drive with at least **8 GB** of free space (everything on it will be erased)
- A stable internet connection
- About **20–30 minutes** of free time

::: warning Back up your data first
If you're installing on a real machine, back up any important files to an external drive or cloud storage before proceeding.
:::

## Step 1 — Download the ISO

Fedora has its own flashing tool called **Fedora Media Writer** — the easiest approach for Windows users.

**Option A — Fedora Media Writer (recommended):**
1. Go to [fedoraproject.org/workstation](https://fedoraproject.org/workstation/)
2. Click **Download Fedora Media Writer** and install it
3. Open it, select **Fedora Workstation**, click **Download & Write** — it downloads the ISO and flashes your USB automatically

**Option B — Manual ISO + Rufus:**
1. Download the ISO from [fedoraproject.org/workstation](https://fedoraproject.org/workstation/) → click **For x86_64**
2. Open [Rufus](https://rufus.ie), select your USB and the ISO, click **START**

::: tip Fedora Media Writer saves a step
It downloads the latest ISO and writes it to USB in one go — no need to manage the ISO file manually.
:::

## Step 2 — Boot from the USB

1. Plug the USB in and restart your PC
2. Press the boot menu key as it starts up

| Manufacturer | Boot menu key |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Select your USB drive and choose **Start Fedora Workstation Live**

::: info Secure Boot on Fedora
Unlike other distros, **Fedora fully supports Secure Boot** — you should not need to disable it. If you do have boot issues, verify your USB was written correctly first.
:::

## Step 3 — Try Fedora Live

Fedora will boot into a live GNOME desktop. Test your hardware — Wi-Fi, sound, display — before installing. When ready, click **Install to Hard Drive** from the **Activities** overview or the welcome dialog.

::: warning NVIDIA GPU in Live session
Fedora ships with the open-source Nouveau driver by default, which has limited NVIDIA support. The screen may be stuck at low resolution or have poor performance. This is expected — proper NVIDIA drivers will be installed after the system is up.
:::

## Step 4 — Installation Type (Anaconda Installer)

Fedora uses an installer called **Anaconda**. The main screen shows all options at once — items with a warning icon ⚠️ must be completed before you can proceed.

### Option A: Replace everything (full switch)

Click **Installation Destination**, select your disk, choose **Automatic** partitioning, click **Done**.

- ✅ Simplest option, recommended for most users
- ✅ Full disk available for Fedora
- ❌ All existing data will be erased

::: danger Make sure you've backed up Windows data
Choosing Automatic on your only disk will erase everything on it. Double-check which disk is selected.
:::

### Option B: Keep Windows (dual boot)

Click **Installation Destination**, select your disk, then choose **Custom** partitioning and click **Done**.

On the manual partitioning screen:
1. Click **Click here to create them automatically** as a starting point
2. Verify your Windows partition (usually `ntfs`) appears in the list and is **not** marked for formatting
3. Adjust the size of the Fedora root partition (`/`) — **40 GB or more** recommended
4. Click **Done** → **Accept Changes**

- ✅ Both systems available at startup via GRUB
- ⚠️ Requires at least **40 GB** of free unallocated space (Fedora benefits from more space than Mint/Ubuntu due to larger package sizes)

::: details Not enough free space for dual boot?
Shrink your Windows partition first:
1. In Windows, press **Win + X** → **Disk Management**
2. Right-click your C: drive → **Shrink Volume**
3. Enter the amount in MB (e.g. `51200` for 50 GB)
4. Click **Shrink** — the freed space appears as "Unallocated"
5. In Anaconda, this space will be available for Fedora
:::

::: tip Accessing Windows files from Fedora
Your Windows partition will appear in Fedora's file manager (Nautilus). You can mount and browse it freely. Note that if Windows was not shut down cleanly (e.g. fast startup enabled), the partition may be mounted read-only as a safety measure.

To disable Windows Fast Startup (recommended for dual boot):
**Control Panel → Power Options → Choose what the power buttons do → Turn on fast startup → uncheck it**
:::

## Step 5 — Complete the Installer

1. **Keyboard** — click and set your layout
2. **Time & Date** — select your timezone, enable **Network Time** toggle
3. **Root Account** — leave disabled (Fedora uses `sudo` instead)
4. **User Creation** — will be done after first boot in the Setup Wizard
5. Click **Begin Installation** → wait **10–15 minutes**

## Step 6 — First Boot & Setup Wizard

After reboot, Fedora runs a **Setup Wizard (GNOME Initial Setup)**:

1. Connect to Wi-Fi
2. Set privacy preferences
3. Create your user account and password

After logging in, open the **Terminal** and run a full system update immediately:

```bash
sudo dnf upgrade --refresh -y
```

### Install RPM Fusion (essential for gaming & media)

Fedora's default repositories don't include proprietary software. **RPM Fusion** adds NVIDIA drivers, multimedia codecs, Steam, and more:

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Install NVIDIA Drivers (if applicable)

After enabling RPM Fusion:

```bash
sudo dnf install akmod-nvidia
```

Restart after it finishes. The build process takes a few minutes — **do not restart immediately**, wait for the terminal to fully return to prompt.

::: warning NVIDIA on Fedora — patience required
The `akmod-nvidia` package builds the driver module for your specific kernel. This takes **2–5 minutes** after install. If you restart too early, you'll boot without a driver and get a black screen. Wait for the terminal prompt to return fully.
:::

### Gaming Setup

1. Install **Steam** from the Software store or terminal:
```bash
sudo dnf install steam
```
2. Open Steam → **Settings → Compatibility**
3. Enable **Enable Steam Play for all titles**
4. Select the latest **Proton** version

::: tip Check your games first
Before switching, check [ProtonDB](https://www.protondb.com) to see how well your games run. Most AAA titles and popular games work great on Fedora — especially with the latest kernel and Mesa/NVIDIA drivers it ships.
:::

## Common Problems & Fixes

### Boot menu doesn't show GRUB after dual boot install
If PC boots straight into Windows:
1. Open **CMD as Administrator** in Windows
2. Run: `bcdedit /set {bootmgr} path \EFI\fedora\grubx64.efi`
3. Restart — GRUB should now appear

Or enter BIOS and set **Fedora** as the first boot option.

### Wi-Fi not working after install
Most common with Broadcom or some Intel cards. Connect via ethernet and run:
```bash
sudo dnf install akmod-wl        # Broadcom
# or
sudo dnf install iwlwifi-dkms    # some Intel cards
```

### Black screen after install (NVIDIA, no RPM Fusion yet)
At the GRUB menu, press **E**, find the `linux` line, add `nomodeset` before `rhgb quiet`. Press **F10** to boot. Then enable RPM Fusion and install `akmod-nvidia` as described above.

### Wayland issues with NVIDIA (screen tearing, apps crashing)
Older NVIDIA cards have limited Wayland support. Switch to Xorg at the login screen by clicking the gear icon ⚙️ and selecting **GNOME on Xorg**.

### SELinux blocking an application
Fedora uses SELinux for security, which occasionally blocks apps. Check the SELinux alert in the notification area and follow the suggested fix, or temporarily set it to permissive mode:
```bash
sudo setenforce 0
```
::: warning
Setting SELinux to permissive reduces system security. Only do this for debugging — re-enable it after:
```bash
sudo setenforce 1
```
:::

### dnf feels slow when updating
Fedora's `dnf` package manager checks metadata on every run. Speed it up by adding this to `/etc/dnf/dnf.conf`:
```ini
max_parallel_downloads=10
fastestmirror=True
```

### Clock shows wrong time when switching between Windows and Linux (dual boot)
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Windows partition mounted read-only
This is caused by Windows Fast Startup. In Windows:
**Control Panel → Power Options → Choose what the power buttons do → uncheck Turn on fast startup**

::: tip You're done! 🎉
Fedora is installed and ready. Head over to the [App Alternatives](/linux/alternatives) page to find replacements for your favourite Windows apps.
:::
