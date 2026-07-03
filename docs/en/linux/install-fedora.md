---
title: Fedora KDE Installation
description: A guide to installing Fedora KDE Plasma — a modern Linux distribution ideal for gamers and developers.
---

# Fedora KDE Installation

Fedora is a modern, fast-moving distribution sponsored by Red Hat. It brings in the latest software — current GPU drivers, Proton updates, and kernel improvements usually land here first. The KDE Plasma edition offers a clean, Windows-like environment with a high level of customization and roughly 20–30% lower RAM usage compared to the GNOME Workstation version. That makes it a popular choice for gamers and developers who want the newest software without giving up stability.

## Before you start

Prepare:
- A USB flash drive with at least **8 GB** of free space (everything on it will be erased)
- A stable internet connection
- About **20–30 minutes** of free time

::: warning Back up your data first
If you are installing on a physical PC, move all important files to an external drive or cloud storage before starting the installation.
:::

## Step 1 — Downloading the ISO

Fedora has its own tool for creating a bootable USB — **Fedora Media Writer** — the easiest option for Windows users.

**Option A — Fedora Media Writer (recommended):**
1. Go to [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/)
2. Click **Download Fedora Media Writer** and install it
3. Open it, choose **Fedora KDE Plasma Desktop**, then click **Download and Write** — it will automatically download the ISO and write it to the USB drive

**Option B — Manual ISO + Rufus:**
1. Download the ISO from [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/) → click **For x86_64**
2. Open [Rufus](https://rufus.ie), select your USB drive and ISO file, then click **START**

::: tip Fedora Media Writer saves time
It downloads the latest ISO and writes it directly to the USB drive — no need to manage the ISO file manually.
:::

## Step 2 — Booting from USB

1. Plug in the USB drive and restart your PC
2. Press the boot menu key during startup

| Manufacturer | Boot menu key |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Select your USB drive and choose **Start Fedora KDE Plasma Desktop Live**

::: info Secure Boot on Fedora
Unlike many other distributions, **Fedora fully supports Secure Boot** — you should not need to disable it. If you run into boot issues, first make sure the USB was written correctly.
:::

## Step 3 — Trying the live environment

Fedora will boot into the live KDE Plasma desktop. Test your hardware — Wi‑Fi, audio, display — before installing. When you are ready, double-click **Install to Hard Drive** on the desktop or find it in the application launcher.

::: warning NVIDIA GPU in the live session
Fedora includes the open-source Nouveau driver by default, with limited NVIDIA support. Your screen may be stuck at a low resolution or performance may be weak. That is normal — you will install the proper NVIDIA drivers after installation.
:::

## Step 4 — Installation type (Anaconda installer)

Fedora uses the **Anaconda** installer. The main screen shows all options at once — items marked with a warning icon ⚠️ must be completed before you can continue.

### Option A: Replace everything (clean install)

Click **Installation Destination**, select the disk, choose **Automatic** partitioning, then click **Done**.

- ✅ Easiest option, recommended for most users
- ✅ Entire disk available for Fedora
- ❌ All existing data will be erased

::: danger Make sure your Windows data is backed up
Choosing automatic partitioning on a single disk will erase everything on it. Double-check which disk is selected.
:::

### Option B: Keep Windows (dual boot)

Click **Installation Destination**, select the disk, then choose **Custom** partitioning and click **Done**.

On the manual partitioning screen:
1. Click **Click here to create them automatically** as a starting point
2. Make sure the Windows partition (usually `ntfs`) is listed and **not** marked for formatting
3. Adjust the Fedora root partition (`/`) size — **40 GB or more** is recommended
4. Click **Done** → **Accept Changes**

- ✅ Both systems available at boot through GRUB
- ⚠️ Requires at least **40 GB** of free unallocated space

::: details Not enough free space for dual boot?
First shrink the Windows partition:
1. In Windows, press **Win + X** → **Disk Management**
2. Right-click drive C: → **Shrink Volume**
3. Enter the amount in MB (for example, `51200` for 50 GB)
4. Click **Shrink** — the freed space will appear as unallocated
5. In Anaconda, that space will be available for Fedora
:::

::: tip Accessing Windows files from Fedora
The Windows partition will appear in **Dolphin**. You can mount and browse it normally. Note that if Windows was not shut down cleanly (for example, if Fast Startup is enabled), the partition may be mounted read-only for safety.

How to disable Fast Startup in Windows (recommended for dual boot):
**Control Panel → Power Options → Choose what the power buttons do → Turn on fast startup → uncheck**
:::

## Step 5 — Completing the installer

1. **Keyboard** — click and set your layout
2. **Time and Date** — choose your time zone and enable **Network Time**
3. **Root account** — leave it disabled (Fedora uses `sudo` instead)
4. **User creation** — this happens after the first boot in the setup wizard
5. Click **Begin Installation** → wait **10–15 minutes**

## Step 6 — First boot and setup wizard

After reboot, Fedora KDE will launch a short **setup wizard**:

1. Connect to Wi‑Fi
2. Set your privacy preferences
3. Create your user account and password

After logging in, open **Konsole** and immediately run a full system update:

```bash
sudo dnf upgrade --refresh -y
```

### Installing RPM Fusion

Fedora’s default repositories do not include proprietary software. **RPM Fusion** adds NVIDIA drivers, multimedia codecs, Steam, and more:

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Installing multimedia codecs

After adding RPM Fusion, install the multimedia codec groups:

```bash
sudo dnf groupupdate multimedia --setop=install_weak_deps=False -y
sudo dnf groupupdate sound-and-video -y
```

::: tip Why this matters
Without these packages, Fedora may not play all common audio and video formats. After installation, you will have smoother multimedia support and a better out-of-the-box desktop experience.
:::

### Installing NVIDIA drivers (if needed)

After enabling RPM Fusion:

```bash
sudo dnf install akmod-nvidia
```

Once it finishes, reboot. Building the module takes a few minutes — **do not reboot immediately**, wait until the terminal returns to the prompt.

::: warning NVIDIA on Fedora — be patient
The `akmod-nvidia` package builds the driver module for your current kernel. This takes **2–5 minutes** after installation. If you reboot too early, you may boot without the driver and end up with a black screen. Wait until the terminal fully returns to the prompt.
:::

### Gaming setup

1. Install **Steam** from **Discover** (KDE’s software store) or via terminal:
```bash
sudo dnf install steam
```
2. Open Steam → **Settings → Compatibility**
3. Enable **Enable Steam Play for all titles**
4. Select the latest **Proton** version

::: tip Check your games first
Before switching, check [ProtonDB](https://www.protondb.com) to see how well your games run. Most AAA titles and popular games work great on Fedora — especially with the latest kernel and Mesa/NVIDIA drivers.
:::

## Common issues and fixes

### GRUB does not appear after a dual boot install
If the PC boots straight into Windows:
1. Open **Command Prompt as Administrator** in Windows
2. Run: `bcdedit /set {bootmgr} path \EFI\fedora\grubx64.efi`
3. Restart — GRUB should appear now

Or enter BIOS and set **Fedora** as the first boot option.

### Wi‑Fi does not work after installation
Most commonly with Broadcom or some Intel cards. Connect via Ethernet and run:
```bash
sudo dnf install akmod-wl        # Broadcom
# or
sudo dnf install iwlwifi-dkms    # some Intel cards
```

### Black screen after installation (NVIDIA, RPM Fusion not installed yet)
In the GRUB menu, press **E**, find the `linux` line, add `nomodeset` before `rhgb quiet`, then press **F10** to boot. After that, enable RPM Fusion and install `akmod-nvidia` using the steps above.

### Wayland and NVIDIA issues (screen tearing, app crashes)
Unlike Fedora GNOME (which is now Wayland-only), **Fedora KDE still supports X11**. On the login screen, click the session selector in the lower-left corner and choose **Plasma (X11)** instead of **Plasma (Wayland)**.

### SELinux blocks an application
Fedora uses SELinux for security, and it can sometimes block apps. Check for SELinux notifications and follow the suggested fix, or temporarily switch it to permissive mode:
```bash
sudo setenforce 0
```
::: warning
Switching SELinux to permissive lowers system security. Use it only for debugging — enable it again when you are done:
```bash
sudo setenforce 1
```
:::

### dnf is slow during updates
The `dnf` package manager checks metadata every time it runs. Speed it up by adding this to `/etc/dnf/dnf.conf`:
```ini
max_parallel_downloads=10
fastestmirror=True
```

### Time is wrong when switching between Windows and Linux (dual boot)
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Windows partition is mounted read-only
This is caused by Windows Fast Startup. In Windows:
**Control Panel → Power Options → Choose what the power buttons do → uncheck Turn on fast startup**

::: tip Done! 🎉
Fedora KDE is now installed and ready to use. Go to the [Application Alternatives](/en/linux/alternatives) page and find replacements for your favorite Windows apps.
:::
