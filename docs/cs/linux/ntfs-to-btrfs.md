---
title: Převod NTFS na Btrfs
description: Průvodce bezpečným převodem NTFS oddílu na Btrfs pomocí ntfs2btrfs pro Linux Mint, Ubuntu, Fedora a CachyOS.
---

# Převod NTFS na Btrfs

`ntfs2btrfs` je nástroj pro **in-place** převod souborového systému NTFS na Btrfs, podobně jako `btrfs-convert` převádí ext2/3/4. Při převodu ukládá původní obraz NTFS jako reflink kopii do `image/ntfs.img`, takže je možné provést rollback, pokud po konverzi neprovedeš operace, které původní rozložení dat rozbijí, například balance [web:34][web:51][web:53].

Tento návod je určený hlavně pro datové disky a oddíly, které nejsou právě aktivně používané systémem. Upstream uvádí pro Linux základní použití přímo nad blokovým zařízením, například `ntfs2btrfs /dev/sda1` [web:34][web:51].

## Než začneš

Připrav si:
- Kompletní zálohu důležitých dat, i když nástroj podporuje rollback [web:34][web:51]
- Volný čas na kontrolu disku, převod a následnou kontrolu Btrfs
- Live USB nebo druhý systém pro případ, že převádíš disk, který běžně používáš

::: warning Záloha je pořád povinná
Autor nástroje výslovně upozorňuje, že nenese odpovědnost, pokud se něco pokazí. Rollback image je užitečný, ale není náhrada za skutečnou zálohu [web:34].
:::

## Kdy má tenhle postup smysl

Použij ho hlavně tehdy, když chceš zachovat data na existujícím NTFS oddílu a přejít na Btrfs bez ručního kopírování všeho na jiný disk. Upstream uvádí zachování běžných souborů, adresářů, symlinků, security descriptorů, alternate data streams i možnost návratu na původní NTFS image [web:34].

Naopak se mu radši vyhni, pokud máš šifrované soubory v NTFS, netypickou velikost clusteru nebo chceš převádět kritický systémový disk bez ověřené zálohy. Upstream mezi nepodporovanými věcmi uvádí encrypted files a unusual cluster sizes, konkrétně jiné než 4 KB [web:34].

## Co zkontrolovat před převodem

Než spustíš samotný převod:
1. Ujisti se, že je NTFS oddíl čistě odpojený.
2. Pokud jde o disk z Windows, vypni ve Windows rychlé spuštění a disk korektně vypni.
3. Ověř název zařízení pomocí `lsblk -f`.
4. Zkontroluj NTFS konzistenci z Windows přes `chkdsk /f`.

::: tip Převáděj odpojený oddíl
`ntfs2btrfs` pracuje přímo nad blokovým zařízením. Nejbezpečnější je provádět převod na oddílu, který není přimountovaný a který zrovna nepoužívá běžící systém [web:34][web:51].
:::

## Společný postup převodu

Debian man page uvádí syntaxi `ntfs2btrfs [options] device` a upstream README dává na Linuxu příklad `ntfs2btrfs /dev/sda1` [web:51][web:34].

1. Najdi správný oddíl:

```bash
lsblk -f
```

2. Pokud je přimountovaný, odpoj ho:

```bash
sudo umount /dev/sdX1
```

3. Spusť převod:

```bash
sudo ntfs2btrfs /dev/sdX1
```

4. Po dokončení ověř výsledek:

```bash
sudo btrfs filesystem show
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
```

5. Pokud je vše v pořádku, nech si rollback image nějakou dobu jako pojistku.

::: info Kde je uložený rollback obraz
Původní NTFS stav se ukládá jako `image/ntfs.img` v reflink podobě. Man page uvádí, že návrat můžeš provést přes `--rollback`, dokud jsi nerozbil původní rozložení dat například pomocí balance [web:51].
:::

## Volitelné parametry

Debian man page uvádí mimo jiné `--compress`, `--hash`, `--rollback` a `--no-datasum`. Výchozí hash je `crc32c` a pro recompresi NTFS-komprimovaných souborů se bez explicitní volby použije `zstd`, pokud byl při buildu dostupný [web:51].

### Komprese

```bash
sudo ntfs2btrfs --compress zstd /dev/sdX1
```

### Jiný hash algoritmus

```bash
sudo ntfs2btrfs --hash xxhash /dev/sdX1
```

### Rollback na původní NTFS

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

::: warning Rollback vrací starý stav
Rollback vrátí oddíl do stavu, v jakém byl při konverzi. Všechny změny provedené po převodu tím ztratíš [web:51].
:::

## Linux Mint

Linux Mint není v upstream README vyjmenovaný samostatně, ale protože vychází z Ubuntu, dává smysl nejdřív ověřit, jestli je balík dostupný v repozitářích konkrétní verze, kterou používáš. Upstream mezi přímo uvedenými linuxovými distribucemi jmenuje Debian a Ubuntu, ne Mint [web:34].

Nejdřív zkus:

```bash
sudo apt update
apt search ntfs2btrfs
```

Pokud balík existuje, nainstaluj ho:

```bash
sudo apt install ntfs2btrfs
```

Pokud v repozitáři není, použij build ze source:

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

Pak spusť převod standardně:

```bash
sudo ntfs2btrfs /dev/sdX1
```

## Ubuntu

Ubuntu je upstreamem uvedené mezi zdokumentovanými Linux distribucemi a Debian man page potvrzuje dostupnost balíku i syntaxe použití [web:34][web:51].

Instalace přes APT:

```bash
sudo apt update
sudo apt install ntfs2btrfs
```

Převod pak proběhne stejně:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

Po převodu doporučená kontrola:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
sudo btrfs filesystem df /mnt
```

## Fedora

Fedora je upstreamem uvedená přímo v seznamu Linux distribucí a zároveň má `ntfs2btrfs` v oficiálních Fedora package repositories [web:34][web:44].

Instalace:

```bash
sudo dnf install ntfs2btrfs
```

Převod:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

Kontrola po převodu:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs filesystem show /mnt
sudo btrfs subvolume list /mnt
```

## CachyOS

CachyOS není upstreamem uvedený jménem, ale jako Arch-based distribuce obvykle používá AUR. Upstream uvádí Arch mezi podporovanými Linux distribucemi a `ntfs2btrfs` existuje v AUR [web:34][web:41].

Na CachyOS tak nejčastěji použiješ AUR helper:

```bash
yay -S ntfs2btrfs
```

Nebo ručně přes AUR workflow:

```bash
git clone https://aur.archlinux.org/ntfs2btrfs.git
cd ntfs2btrfs
makepkg -si
```

Převod je pak stejný:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

## Co udělat po převodu

Po úspěšné konverzi je dobré filesystem zkontrolovat a rollback image nemazat hned. Man page uvádí, že pokud se rozhodneš převod ponechat, můžeš `image` subvolume později odstranit a tím uvolnit místo [web:51].

Doporučené kroky:
- Přimountovat oddíl a ověřit, že soubory vypadají správně
- Zkontrolovat `btrfs subvolume list` a `btrfs filesystem df`
- Nechat si rollback image, dokud neověříš integritu dat
- Teprve potom případně smazat `image` subvolume

Příklad smazání rollback image až po ověření:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume delete /mnt/image
```

## Známá omezení

Upstream uvádí zachování files, directories, symlinks, security descriptors, alternate data streams i LXSS metadata. Naopak nejsou podporované encrypted files, preservation of the case-sensitivity flag, unusual cluster sizes a velké ADS větší než 16 KB [web:34].

To je důležité hlavně u disků, které dřív sloužily pro specifické Windows workflow, vývojové sandboxy nebo starší datové archivy. Pokud si nejsi jistý strukturou dat, je bezpečnější udělat test na méně důležitém oddílu jako první.

## Časté problémy a řešení

### Nástroj hlásí, že NTFS není čisté

Tohle bývá typicky důsledek nekorektního vypnutí Windows nebo zapnutého Fast Startup. Nejprve disk připoj zpět do Windows, spusť `chkdsk /f`, vypni rychlé spuštění a systém normálně vypni.

### Oddíl nejde odpojit

Zjisti, co ho drží otevřený:

```bash
sudo fuser -vm /dev/sdX1
```

Případně zkontroluj mountpointy:

```bash
mount | grep sdX1
```

### Po převodu chci zpět NTFS

Dokud jsi nesmazal `image` subvolume a neprovedl operace, které znemožní rollback, můžeš použít:

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

## Poznámka k systémovým diskům

Technicky existují scénáře, kdy lze s výsledným Btrfs bootovat i Windows, upstream ale tuto část neprezentuje jako běžný desktopový workflow a zmiňuje ji jen okrajově. Pro běžnou dokumentaci je rozumné držet tenhle návod primárně pro datové disky, sekundární oddíly a migrační scénáře mimo aktivní produkční systém [web:34].

::: tip Hotovo! 🎉
Pokud převod proběhl bez chyb a data sedí, máš NTFS oddíl převedený na Btrfs bez nutnosti klasického kopírování dat na jiný filesystem. Rollback image nemaž hned — nech si ji jako pojistku, dokud nemáš jistotu, že je vše v pořádku [web:51][web:34].
:::
