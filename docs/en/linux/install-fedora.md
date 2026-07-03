---
title: Installing Fedora KDE
description: A guide to installing Fedora KDE Plasma — a modern Linux distribution ideal for gamers and developers.
---

# Installing Fedora KDE

Fedora is a modern, fast-moving distribution sponsored by Red Hat. It brings the latest software first — current GPU drivers, Proton updates, and kernel improvements usually arrive here before other mainstream distros. The KDE Plasma edition offers a clean, Windows-like desktop with a high degree of customization, making it a popular choice for gamers and developers who want up-to-date software without overly complicated system management. Fedora’s official documentation recommends Fedora Media Writer for boot media creation, and Fedora provides separate guidance for KDE Plasma and RPM Fusion setup [web:1][web:2][web:11].

## Before you start

Prepare:
- A USB flash drive with at least **8 GB** of free space. All data on it will be erased.
- A stable internet connection.
- About **20–30 minutes** of free time.

::: warning Back up your data first
If you are installing on a physical machine, move all important files to an external drive or cloud storage before starting the installation.
:::

## Step 1 — Downloading the ISO

Fedora has its own tool for creating a bootable USB — **Fedora Media Writer** — which is the easiest option for Windows users. Fedora’s documentation explicitly recommends it for writing Fedora images correctly to USB media [web:1][web:9].

**Option A — Fedora Media Writer (recommended):**
1. Go to [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/)
2. Click **Download Fedora Media Writer** and install it
3. Open it, select **Fedora KDE Plasma Desktop**, then click **Download and write** — it will automatically download the ISO and write it to the USB drive

**Option B — Manual ISO + Rufus:**
1. Download the ISO from [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/) and choose the **x86_64** build
2. Open [Rufus](https://rufus.ie), select your USB drive and the ISO file, then click **START**

::: tip Fedora Media Writer saves time
It downloads the latest ISO and writes it directly to the USB drive, so you do not need to manage the ISO file manually.
:::

## Step 2 — Booting from USB

1. Plug in the USB drive and restart your computer.
2. Press the boot-menu key during startup.

| Manufacturer | Boot menu key |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Select your USB drive and choose **Start Fedora KDE Plasma Desktop Live**.

::: info Secure Boot on Fedora
Fedora supports Secure Boot, so in most cases you do not need to disable it. If booting fails, first verify that the USB was written correctly.
:::

## Step 3 — Trying the live environment

Fedora boots into a live KDE Plasma desktop. Test your hardware — Wi‑Fi, sound, display — before installing. When you are ready, double-click **Install to Hard Drive** on the desktop or find it in the application launcher.

::: warning NVIDIA GPU in live session
Fedora ships with the open-source Nouveau driver by default, which has limited NVIDIA support. You may see low resolution or reduced performance in the live session. That is normal — the proper NVIDIA driver can be installed after the installation is complete.
:::

## Step 4 — Installation type

Fedora uses the **Anaconda** installer. The main screen shows all required items at once, and entries marked with a warning icon must be completed before you can continue. Fedora’s KDE documentation also points users to the KDE Plasma desktop or Kinoite options for KDE on Fedora [web:2].

### Option A: Replace everything

Click **Installation Destination**, select the disk, choose **Automatic** partitioning, then click **Done**.

- ✅ Easiest option, recommended for most users
- ✅ Entire disk available for Fedora
- ❌ All existing data will be erased

::: danger Make sure your Windows data is backed up
Automatic partitioning on a single disk will erase everything on it. Double-check which disk is selected.
:::

### Option B: Keep Windows (dual boot)

Click **Installation Destination**, choose the disk, then select **Custom** partitioning and click **Done**.

On the manual partitioning screen:
1. Click **Click here to create them automatically** as a starting point.
2. Verify that the Windows partition (usually `ntfs`) is listed and is **not** set to format.
3. Adjust the Fedora root partition (`/`) size — **40 GB or more** is recommended.
4. Click **Done** → **Accept Changes**.

- ✅ Both systems available at boot through GRUB
- ⚠️ Requires at least **40 GB** of unallocated space

::: details Not enough free space for dual boot?
First shrink the Windows partition:
1. In Windows, press **Win + X** → **Disk Management**
2. Right-click drive C: → **Shrink Volume**
3. Enter the amount in MB (for example `51200` for 50 GB)
4. Click **Shrink** — the freed space will appear as unallocated
5. In Anaconda, that space will be available for Fedora
:::

::: tip Accessing Windows files from Fedora
The Windows partition will appear in **Dolphin** and can usually be mounted and browsed freely. If Windows was not fully shut down, the partition may be mounted read-only as a safety measure.

To disable Windows Fast Startup:
**Control Panel → Power Options → Choose what the power buttons do → Turn on fast startup → uncheck**
:::

## Step 5 — Finishing the installer

1. **Keyboard** — set your layout
2. **Time and date** — choose your time zone and enable **Network Time**
3. **Root account** — leave it disabled; Fedora uses `sudo` instead
4. **User creation** — this is done after the first boot in the setup wizard
5. Click **Begin Installation** → wait **10–15 minutes**

## Step 6 — First boot and setup wizard

After reboot, Fedora KDE launches a short **welcome/setup wizard**:

1. Connect to Wi‑Fi.
2. Set privacy preferences.
3. Create your user account and password.

After logging in, open **Konsole** and run a full system update immediately:

```bash
sudo dnf upgrade --refresh -y
```

### Installing RPM Fusion

Fedora’s default repositories do not include proprietary software. **RPM Fusion** adds NVIDIA drivers, full FFmpeg, multimedia codecs, Steam, and other packages. Fedora’s RPM Fusion setup guide provides the official repository release packages [web:11].

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Installing multimedia codecs

RPM Fusion recommends replacing `ffmpeg-free` with the full RPM Fusion `ffmpeg`, because Fedora’s variant may not cover all common multimedia needs. RPM Fusion’s multimedia guide documents this setup [web:13].

```bash
sudo dnf swap ffmpeg-free ffmpeg --allowerasing
```

Then install the multimedia group for GStreamer and other apps that use common audio/video formats:

```bash
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
```

::: tip Why this matters
Without this step, a fresh Fedora install may miss support for some common audio and video formats. Full FFmpeg and the multimedia set improve playback compatibility for video, music, and many desktop apps.
:::

### Hardware acceleration codecs

For better video playback with GPU acceleration, install the packages appropriate for your graphics stack.

**AMD (Mesa):**
```bash
sudo dnf swap mesa-va-drivers mesa-va-drivers-freeworld
sudo dnf swap mesa-vdpau-drivers mesa-vdpau-drivers-freeworld
```

**Intel (newer generations):**
```bash
sudo dnf install intel-media-driver
```

**Intel (older generations):**
```bash
sudo dnf install libva-intel-driver
```

**NVIDIA:**
```bash
sudo dnf install libva-nvidia-driver
```

### NVIDIA drivers

For most newer NVIDIA cards on Fedora, installing `akmod-nvidia` from RPM Fusion is the standard approach. Fedora and community guidance commonly use RPM Fusion for proprietary NVIDIA support [web:11][web:14][web:16].

```bash
sudo dnf install akmod-nvidia xorg-x11-drv-nvidia-cuda
```

After installation, **do not reboot immediately**. `akmod-nvidia` first builds the kernel module for your current kernel, which can take several minutes.

::: warning NVIDIA on Fedora — be patient
Wait until the terminal returns to the prompt. Restarting too early can leave you with an unbuilt driver and a black screen.
:::

If Secure Boot is enabled and the proprietary NVIDIA driver does not load, you may need to sign the akmods module using the MOK workflow.

### Gaming setup

1. Install **Steam** from Discover or via terminal:
```bash
sudo dnf install steam
```
2. Open Steam → **Settings → Compatibility**
3. Enable **Enable Steam Play for all titles**
4. Select the latest **Proton**

::: tip Check your games first
Before switching, check [ProtonDB](https://www.protondb.com) to see how well your games work. Fedora with a current kernel, Mesa stack, and RPM Fusion packages is a strong gaming base.
:::

## Common problems and solutions

### GRUB does not appear after dual boot installation
If the PC boots directly into Windows:
1. Open **Command Prompt as Administrator** in Windows.
2. Run: `bcdedit /set {bootmgr} path \EFI\fedora\grubx64.efi`
3. Restart — GRUB should now appear.

Or enter BIOS/UEFI setup and set Fedora as the first boot option.

### Wi‑Fi does not work after installation
Most often this happens with Broadcom cards or some Intel cards. Connect via Ethernet and run:
```bash
sudo dnf install akmod-wl        # Broadcom
# or
sudo dnf install iwlwifi-dkms    # some Intel cards
```

### Black screen after installing NVIDIA drivers
In the GRUB menu, press **E**, find the `linux` line, and add `nomodeset` before `rhgb quiet`. Press **F10** to boot. Then verify that RPM Fusion is enabled, the driver is installed, and the akmods build completed successfully.

### Wayland and NVIDIA issues
Fedora KDE still supports **X11** sessions. On the login screen, choose the session selector in the lower-left corner and pick **Plasma (X11)** instead of **Plasma (Wayland)** if you hit tearing, crashes, or graphical glitches.

### SELinux blocks an app
Fedora uses SELinux for security, and it can occasionally block applications. Check the SELinux notification area and follow the suggested fix, or temporarily switch to permissive mode:

```bash
sudo setenforce 0
```

::: warning
Switching SELinux to permissive lowers system security. Use it only for debugging, then turn it back on:
```bash
sudo setenforce 1
```
:::

### dnf is slow during updates
`dnf` checks metadata on each run. You can speed it up by adding this to `/etc/dnf/dnf.conf`:

```ini
max_parallel_downloads=10
fastestmirror=True
```

### Clock is wrong in dual boot
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Windows partition mounts read-only
This is usually caused by Windows Fast Startup. In Windows, disable it here:
**Control Panel → Power Options → Choose what the power buttons do → uncheck Turn on fast startup**

::: tip Done
Fedora KDE is now installed and ready to use. Consider checking app alternatives for your workflow and gaming setup.
:::
