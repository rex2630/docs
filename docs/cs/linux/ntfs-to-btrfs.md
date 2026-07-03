---
title: Převod NTFS na Btrfs
description: Jak bezpečně převést NTFS oddíl na Btrfs pomocí ntfs2btrfs v Ubuntu, Linux Mint, Fedoře a Arch-based distribucích.
---

# Převod NTFS na Btrfs

`ntfs2btrfs` umožňuje **in-place převod** souborového systému NTFS na Btrfs bez nutnosti ručního kopírování dat. Původní NTFS stav se při převodu uloží jako rollback image do `image/ntfs.img`, takže se můžeš vrátit zpět, dokud neprovedeš operace, které původní rozložení dat rozbijí.

::: warning Záloha je povinná
Rollback image není náhrada za skutečný backup. Před převodem si vždy udělej plnou zálohu důležitých dat.
:::

Tento postup je vhodný hlavně pro **datové oddíly**, které nejsou aktivně používané běžícím systémem. Upstream na Linuxu ukazuje použití přímo nad blokovým zařízením, například `ntfs2btrfs /dev/sda1`.

## Instalace

### Debian / Ubuntu / Linux Mint

V Debianu balík existuje a Ubuntu je upstreamem uváděné mezi podporovanými linuxovými distribucemi. Linux Mint můžeš prakticky brát stejně jako Ubuntu, protože používá APT ekosystém.

```bash
sudo apt update
sudo apt install ntfs2btrfs
```

### Fedora

Fedora má `ntfs2btrfs` v balíčkovacím systému a eviduje ho i oficiální Fedora package page.

```bash
sudo dnf install ntfs2btrfs
```

### Arch / CachyOS

Na Arch-based distribucích je balík dostupný přes AUR, takže CachyOS je rozumné vést stejnou cestou.

```bash
yay -S ntfs2btrfs
```

### Když balík není v repozitáři

Upstream uvádí build na Linuxu přes CMake a `make`, přičemž je potřeba mít alespoň `libfmt`; podporu komprese pak řeší `zlib`, `lzo` a `zstd` podle buildu.

```bash
git clone https://github.com/maharmstone/ntfs2btrfs.git
cd ntfs2btrfs
mkdir build
cd build
cmake ..
make -j"$(nproc)"
sudo make install
```

## Příprava před převodem

Před převodem musí být zdrojový filesystem čistý; i dokumentace k Btrfs konverzím obecně zdůrazňuje, že zdrojový FS má být zkontrolovaný a bez nutnosti oprav. `ntfs2btrfs` se navíc spouští nad zařízením, takže oddíl nemá být přimountovaný.

1. Ve Windows vypni Fast Startup, pokud jde o disk používaný i ve Windows.
2. Ve Windows spusť kontrolu:
   ```bash
   chkdsk /f
   ```
3. V Linuxu najdi správný oddíl:
   ```bash
   lsblk -f
   ```
4. Pokud je oddíl připojený, odpoj ho:
   ```bash
   sudo umount /dev/sdX1
   ```

::: tip Převáděj odpojený oddíl
Nejbezpečnější je převádět oddíl, který právě nepoužívá běžící systém a není přimountovaný.
:::

## Převod

Man page používá syntaxi `ntfs2btrfs [options] device` a upstream jako příklad na Linuxu uvádí `ntfs2btrfs /dev/sda1`.

```bash
sudo ntfs2btrfs /dev/sdX1
```

Pokud chceš rovnou zapnout kompresi, můžeš použít například:

```bash
sudo ntfs2btrfs --compress zstd /dev/sdX1
```

## Kontrola po převodu

Po dokončení převodu připoj nový Btrfs oddíl a zkontroluj, že je filesystem čitelný a data vypadají správně. Původní NTFS obraz zůstane uložený v `image/ntfs.img`, dokud se nerozhodneš ho odstranit.

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
sudo btrfs filesystem df /mnt
```

::: info Rollback image nemaž hned
Pokud je všechno v pořádku, nech si `image` subvolume ještě nějakou dobu jako pojistku. Upstream výslovně uvádí, že ho můžeš smazat až ve chvíli, kdy si chceš převod definitivně nechat.
:::

## Návrat zpět na NTFS

Man page podporuje rollback pomocí přepínače `--rollback`, ale platí to jen dokud zůstává původní image použitelná.

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

::: warning Rollback smaže změny po převodu
Návrat vrátí oddíl do stavu z okamžiku konverze, takže přijdeš o změny provedené po převodu.
:::

## Omezení

Upstream uvádí, že nástroj ukládá původní NTFS image a je určený pro in-place převod NTFS na Btrfs, ale zároveň není rozumné ho prezentovat jako bezrizikový postup pro kritické systémové disky. Prakticky dává největší smysl pro datové oddíly a migrační scénáře, kde máš ověřenou zálohu.

Tomuhle postupu se radši vyhni, pokud:
- převádíš kritický disk bez zálohy,
- si nejsi jistý stavem NTFS,
- nemáš možnost rollbacku nebo obnovy dat,
- jde o disk aktivně používaný běžícím systémem.

## Časté problémy

### NTFS není čisté

Nejčastější příčina bývá nekorektní vypnutí Windows nebo zapnutý Fast Startup. Vrať disk do Windows, spusť `chkdsk /f` a systém korektně vypni.

### Oddíl nejde odpojit

Zjisti, co zařízení drží otevřené:

```bash
sudo fuser -vm /dev/sdX1
```

### Chceš uvolnit místo po ověření

Jakmile máš jistotu, že je převod v pořádku a rollback už nepotřebuješ, můžeš odstranit `image` subvolume, které obsahuje původní NTFS image. Upstream to zmiňuje jako standardní způsob uvolnění místa po definitivním ponechání konverze.

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume delete /mnt/image
```
