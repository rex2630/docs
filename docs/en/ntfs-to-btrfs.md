---
title: Converting NTFS to Btrfs
description: A guide to safely converting an NTFS partition to Btrfs with ntfs2btrfs on Linux Mint, Ubuntu, Fedora, and CachyOS.
---

# Converting NTFS to Btrfs

`ntfs2btrfs` is a tool for **in-place** conversion of the NTFS filesystem to Btrfs, much like `btrfs-convert` converts ext2/3/4. During conversion, it stores the original NTFS image as a reflink copy in `image/ntfs.img`, which makes rollback possible as long as you do not perform operations that destroy the original layout, such as balance [web:34][web:45][web:37].

This guide is mainly intended for data drives and partitions that are not currently being used by the running system. Upstream documents the basic Linux usage directly against a block device, for example `ntfs2btrfs /dev/sda1` [web:34][web:45].

## Before you start

Prepare:
- A complete backup of important data, even though the tool supports rollback [web:34][web:45]
- Enough time for disk checks, conversion, and post-conversion verification
- A live USB or secondary system if you are converting a disk you normally use

::: warning A backup is still mandatory
The author explicitly states that no responsibility is accepted if something goes wrong. The rollback image is useful, but it is not a replacement for a real backup [web:34].
:::

## When this makes sense

Use this mainly when you want to keep the data on an existing NTFS partition and move to Btrfs without manually copying everything to another disk. Upstream says it preserves regular files, directories, symlinks, security descriptors, alternate data streams, and a path back to the original NTFS image [web:34].

On the other hand, avoid this approach if you have encrypted files in NTFS, unusual cluster sizes, or a critical system disk without a verified backup. Upstream lists encrypted files and unusual cluster sizes other than 4 KB among the unsupported cases [web:34].

## What to check first

Before starting the conversion:
1. Make sure the NTFS partition is cleanly unmounted.
2. If it came from Windows, disable Fast Startup in Windows and shut the system down properly.
3. Confirm the correct device name with `lsblk -f`.
4. Check NTFS consistency from Windows with `chkdsk /f`.

::: tip Convert an unmounted partition
`ntfs2btrfs` works directly on the block device. The safest approach is to run it on a partition that is not mounted and is not being used by the current system [web:34][web:45].
:::

## Shared conversion steps

The Debian man page documents the syntax as `ntfs2btrfs [options] device`, and the upstream README shows the Linux example `ntfs2btrfs /dev/sda1` [web:45][web:34].

1. Find the correct partition:

```bash
lsblk -f
```

2. If it is mounted, unmount it:

```bash
sudo umount /dev/sdX1
```

3. Run the conversion:

```bash
sudo ntfs2btrfs /dev/sdX1
```

4. After it finishes, verify the result:

```bash
sudo btrfs filesystem show
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
```

5. If everything looks correct, keep the rollback image for a while as a safety net.

::: info Where the rollback image is stored
The original NTFS state is stored as `image/ntfs.img` in reflink form. The man page says you can revert using `--rollback` as long as you have not destroyed the original layout with operations such as balance [web:45].
:::

## Optional parameters

The Debian man page documents useful options including `--compress`, `--hash`, `--rollback`, and `--no-datasum`. The default hash is `crc32c`, and recompression of NTFS-compressed files uses `zstd` by default if it was available at build time [web:45].

### Compression

```bash
sudo ntfs2btrfs --compress zstd /dev/sdX1
```

### Different hash algorithm

```bash
sudo ntfs2btrfs --hash xxhash /dev/sdX1
```

### Rolling back to the original NTFS

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

::: warning Rollback restores the old state
Rollback returns the partition to the state it had at conversion time. Any changes made after the conversion will be lost [web:45].
:::

## Linux Mint

Linux Mint is not listed separately in the upstream README, but since it is Ubuntu-based, it makes sense to first check whether the package is available in the repositories for the version you are running. Upstream explicitly lists Debian and Ubuntu, but not Mint [web:34].

First try:

```bash
sudo apt update
apt search ntfs2btrfs
```

If the package exists, install it:

```bash
sudo apt install ntfs2btrfs
```

If it is not available in the repository, build it from source:

```bash
sudo apt install build-essential cmake libfmt-dev zlib1g-dev liblzo2-dev libzstd-dev
mkdir -p ~/src && cd ~/src
git clone https://github.com/maharmstone/ntfs2btrfs.git
cd ntfs2btrfs
mkdir build && cd build
cmake ..
make -j"$(nproc)"
sudo make install
```

Then run the conversion as usual:

```bash
sudo ntfs2btrfs /dev/sdX1
```

## Ubuntu

Ubuntu is listed upstream among the documented Linux distributions, and the Debian/Ubuntu man page confirms the package and command syntax [web:34][web:45].

Install it with APT:

```bash
sudo apt update
sudo apt install ntfs2btrfs
```

Then run the conversion:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

Recommended post-conversion checks:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
sudo btrfs filesystem df /mnt
```

## Fedora

Fedora is explicitly listed upstream and also has an official package entry in Fedora package repositories [web:34][web:44].

Install it with DNF:

```bash
sudo dnf install ntfs2btrfs
```

Run the conversion:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

Verify the result:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs filesystem show /mnt
sudo btrfs subvolume list /mnt
```

## CachyOS

CachyOS is not named directly upstream, but as an Arch-based distribution it typically relies on the AUR ecosystem. Upstream lists Arch among the Linux distributions, and `ntfs2btrfs` is available in AUR [web:34][web:41].

On CachyOS, the usual method is an AUR helper:

```bash
yay -S ntfs2btrfs
```

Or a manual AUR build:

```bash
git clone https://aur.archlinux.org/ntfs2btrfs.git
cd ntfs2btrfs
makepkg -si
```

Then run the same conversion command:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

## What to do after conversion

After a successful conversion, verify the filesystem and do not immediately delete the rollback image. The man page and package documentation note that if you decide to keep the conversion, you can later remove the `image` subvolume to free space [web:45][web:44].

Recommended steps:
- Mount the partition and confirm that the files look correct
- Check `btrfs subvolume list` and `btrfs filesystem df`
- Keep the rollback image until you verify data integrity
- Only then consider deleting the `image` subvolume

Example removal of the rollback image after verification:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume delete /mnt/image
```

## Known limitations

Upstream says it preserves files, directories, symlinks, security descriptors, alternate data streams, and LXSS metadata. On the other hand, encrypted files, preservation of the case-sensitivity flag, unusual cluster sizes, and large ADS over 16 KB are listed as unsupported [web:34].

This matters especially for disks that previously served special Windows workflows, development sandboxes, or older archived datasets. If you are unsure about the data layout, test on a less important partition first.

## Common problems

### The tool says the NTFS volume is not clean

This is usually caused by an improper Windows shutdown or Fast Startup being enabled. Connect the disk back to Windows, run `chkdsk /f`, disable Fast Startup, and shut Windows down properly.

### The partition will not unmount

Find out what is holding it open:

```bash
sudo fuser -vm /dev/sdX1
```

You can also check current mount points:

```bash
mount | grep sdX1
```

### I want NTFS back after conversion

As long as you have not deleted the `image` subvolume and have not run operations that make rollback impossible, you can use:

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

## Note about system disks

There are technical scenarios where Windows can boot from the resulting Btrfs layout, but upstream does not present that as a normal desktop workflow and only mentions it in passing. For practical documentation, it makes more sense to keep this guide focused on data disks, secondary partitions, and migration scenarios outside an active production system [web:34].

::: tip Done
If the conversion finished without errors and the data looks correct, your NTFS partition has been converted to Btrfs without the usual copy-everything-elsewhere workflow. Do not delete the rollback image immediately — keep it until you are sure everything is correct [web:45][web:34].
:::
