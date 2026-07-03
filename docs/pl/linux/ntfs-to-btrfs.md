---
title: Konwersja NTFS na Btrfs
description: Jak bezpiecznie przekonwertować partycję NTFS na Btrfs przy użyciu ntfs2btrfs w Ubuntu, Linux Mint, Fedorze i dystrybucjach opartych na Archu.
---

# Konwersja NTFS na Btrfs

`ntfs2btrfs` umożliwia **konwersję in-place** systemu plików NTFS na Btrfs bez konieczności ręcznego kopiowania danych. Oryginalny stan NTFS podczas konwersji zapisywany jest jako obraz rollback w `image/ntfs.img`, dzięki czemu możesz wrócić do poprzedniego stanu, dopóki nie wykonasz operacji, które zmienią układ danych.

::: warning Kopia zapasowa jest obowiązkowa
Obraz rollback nie zastępuje prawdziwej kopii zapasowej. Przed konwersją zawsze wykonaj pełny backup ważnych danych.
:::

Ten proces jest najbardziej odpowiedni dla **partycji danych**, które nie są aktywnie używane przez działający system. Upstream pokazuje użycie bezpośrednio na urządzeniu blokowym, np. `ntfs2btrfs /dev/sda1`.

## Instalacja

### Debian / Ubuntu / Linux Mint

W Debianie pakiet istnieje, a Ubuntu jest wymieniane jako wspierana dystrybucja. Linux Mint można traktować tak samo jak Ubuntu, ponieważ korzysta z ekosystemu APT.

```bash
sudo apt update
sudo apt install ntfs2btrfs
```

### Fedora

Fedora posiada `ntfs2btrfs` w repozytoriach.

```bash
sudo dnf install ntfs2btrfs
```

### Arch / CachyOS

W dystrybucjach opartych na Archu pakiet dostępny jest przez AUR.

```bash
yay -S ntfs2btrfs
```

### Gdy pakiet nie jest dostępny

Upstream opisuje build przy użyciu CMake i `make`, wymagany jest przynajmniej `libfmt`, a kompresję zapewniają `zlib`, `lzo` i `zstd`.

```bash
git clone https://github.com/maharmstone/ntfs2btrfs.git
cd ntfs2btrfs
mkdir build
cd build
cmake ..
make -j"$(nproc)"
sudo make install
```

## Przygotowanie przed konwersją

System plików musi być czysty; dokumentacja podkreśla, że źródłowy FS powinien być sprawdzony i bez błędów. `ntfs2btrfs` działa na urządzeniu blokowym, więc partycja nie może być zamontowana.

1. Wyłącz Fast Startup w Windows, jeśli dysk jest współdzielony.
2. W Windows uruchom:
   ```bash
   chkdsk /f
   ```
3. W Linuxie znajdź partycję:
   ```bash
   lsblk -f
   ```
4. Jeśli jest zamontowana, odmontuj:
   ```bash
   sudo umount /dev/sdX1
   ```

::: tip Konwertuj odmontowaną partycję
Najbezpieczniej konwertować partycję, która nie jest używana.
:::

## Konwersja

```bash
sudo ntfs2btrfs /dev/sdX1
```

Z kompresją:

```bash
sudo ntfs2btrfs --compress zstd /dev/sdX1
```

## Kontrola po konwersji

Po zakończeniu zamontuj partycję i sprawdź dane. Oryginalny obraz NTFS pozostaje w `image/ntfs.img`.

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
sudo btrfs filesystem df /mnt
```

::: info Nie usuwaj od razu obrazu rollback
Zachowaj `image` jako zabezpieczenie przez jakiś czas.
:::

## Powrót do NTFS

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

::: warning Rollback usuwa zmiany po konwersji
Przywrócenie cofnie stan do momentu konwersji.
:::

## Ograniczenia

Unikaj tej metody, jeśli:
- konwertujesz krytyczny dysk bez backupu,
- nie jesteś pewien stanu NTFS,
- nie masz możliwości odzyskania danych,
- dysk jest aktywnie używany przez system.

## Częste problemy

### NTFS nie jest czysty

Najczęściej winny jest Fast Startup lub niepoprawne zamknięcie Windows. Uruchom `chkdsk /f`.

### Nie można odmontować

```bash
sudo fuser -vm /dev/sdX1
```

### Zwolnienie miejsca po weryfikacji

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume delete /mnt/image
```
