---
title: Converting NTFS to Btrfs
description: How to safely convert an NTFS partition to Btrfs using ntfs2btrfs on Ubuntu, Linux Mint, Fedora, and Arch-based distributions.
---

# Converting NTFS to Btrfs

`ntfs2btrfs` allows **in-place conversion** of an NTFS filesystem to Btrfs without manual data copying. The original NTFS state is stored as a rollback image in `image/ntfs.img`, so you can revert as long as no operations break the original layout.

::: warning Backup is required
The rollback image is not a replacement for a real backup. Always create a full backup before conversion.
:::

This process is mainly suitable for **data partitions** that are not actively used by the running system. Upstream shows usage directly on a block device, e.g. `ntfs2btrfs /dev/sda1`.

## Installation

### Debian / Ubuntu / Linux Mint

The package exists in Debian, and Ubuntu is listed as supported. Linux Mint can be treated the same as Ubuntu.

```bash
sudo apt update
sudo apt install ntfs2btrfs
```

### Fedora

Fedora provides `ntfs2btrfs` in its repositories.

```bash
sudo dnf install ntfs2btrfs
```

### Arch / CachyOS

On Arch-based distributions, the package is available via AUR.

```bash
yay -S ntfs2btrfs
```

### If the package is not available

Upstream supports building with CMake and `make`, requiring at least `libfmt`, with compression via `zlib`, `lzo`, and `zstd`.

```bash
git clone https://github.com/maharmstone/ntfs2btrfs.git
cd ntfs2btrfs
mkdir build
cd build
cmake ..
make -j"$(nproc)"
sudo make install
```

## Preparation before conversion

The source filesystem must be clean. `ntfs2btrfs` works on block devices, so the partition must not be mounted.

1. Disable Fast Startup in Windows if the disk is shared.
2. Run in Windows:
   ```bash
   chkdsk /f
   ```
3. In Linux, identify the partition:
   ```bash
   lsblk -f
   ```
4. If mounted, unmount it:
   ```bash
   sudo umount /dev/sdX1
   ```

::: tip Convert an unmounted partition
Always convert a partition that is not in use.
:::

## Conversion

```bash
sudo ntfs2btrfs /dev/sdX1
```

With compression:

```bash
sudo ntfs2btrfs --compress zstd /dev/sdX1
```

## Post-conversion check

Mount the partition and verify data. The original NTFS image remains in `image/ntfs.img`.

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
sudo btrfs filesystem df /mnt
```

::: info Do not delete rollback image immediately
Keep the `image` subvolume for some time as a safety measure.
:::

## Rollback

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

::: warning Rollback removes post-conversion changes
It restores the state at the time of conversion.
:::

## Limitations

Avoid this approach if:
- converting a critical disk without backup,
- unsure about NTFS state,
- no recovery option available,
- disk is actively used by the system.

## Common issues

### NTFS is not clean

Usually caused by Fast Startup or improper shutdown. Run `chkdsk /f`.

### Cannot unmount

```bash
sudo fuser -vm /dev/sdX1
```

### Free space after verification

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume delete /mnt/image
```
