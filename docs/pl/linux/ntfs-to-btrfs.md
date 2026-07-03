---
title: Konwersja NTFS do Btrfs
description: Przewodnik bezpiecznej konwersji partycji NTFS do Btrfs przy użyciu ntfs2btrfs dla Linux Mint, Ubuntu, Fedory i CachyOS.
---

# Konwersja NTFS do Btrfs

`ntfs2btrfs` to narzędzie do **in-place** konwersji systemu plików NTFS do Btrfs, podobnie jak `btrfs-convert` konwertuje ext2/3/4. Podczas konwersji zapisuje oryginalny obraz NTFS jako reflink copy w `image/ntfs.img`, dzięki czemu rollback jest możliwy, o ile po konwersji nie wykonasz operacji niszczących pierwotny układ danych, takich jak balance [web:34][web:45][web:37].

Ten poradnik jest przeznaczony głównie dla dysków danych i partycji, które nie są aktualnie używane przez działający system. Upstream pokazuje podstawowe użycie w Linuksie bezpośrednio na urządzeniu blokowym, na przykład `ntfs2btrfs /dev/sda1` [web:34][web:45].

## Zanim zaczniesz

Przygotuj:
- Pełną kopię zapasową ważnych danych, nawet jeśli narzędzie obsługuje rollback [web:34][web:45]
- Wystarczająco dużo czasu na sprawdzenie dysku, konwersję i weryfikację po zakończeniu
- Live USB albo drugi system, jeśli konwertujesz dysk, którego normalnie używasz

::: warning Kopia zapasowa nadal jest obowiązkowa
Autor wyraźnie zaznacza, że nie bierze odpowiedzialności, jeśli coś pójdzie nie tak. Obraz rollbacku jest przydatny, ale nie zastępuje prawdziwego backupu [web:34].
:::

## Kiedy ten sposób ma sens

Użyj tego rozwiązania przede wszystkim wtedy, gdy chcesz zachować dane na istniejącej partycji NTFS i przejść na Btrfs bez ręcznego kopiowania wszystkiego na inny dysk. Upstream podaje, że zachowywane są zwykłe pliki, katalogi, symlinki, security descriptors, alternate data streams oraz możliwość powrotu do oryginalnego obrazu NTFS [web:34].

Z drugiej strony lepiej unikać tej metody, jeśli masz zaszyfrowane pliki w NTFS, nietypowy rozmiar klastra albo krytyczny dysk systemowy bez zweryfikowanej kopii zapasowej. Upstream wymienia encrypted files i unusual cluster sizes inne niż 4 KB jako przypadki nieobsługiwane [web:34].

## Co sprawdzić przed konwersją

Zanim uruchomisz konwersję:
1. Upewnij się, że partycja NTFS jest poprawnie odmontowana.
2. Jeśli pochodzi z Windows, wyłącz Fast Startup w Windows i zamknij system poprawnie.
3. Potwierdź nazwę urządzenia poleceniem `lsblk -f`.
4. Sprawdź spójność NTFS z poziomu Windows przez `chkdsk /f`.

::: tip Konwertuj odmontowaną partycję
`ntfs2btrfs` działa bezpośrednio na urządzeniu blokowym. Najbezpieczniej uruchamiać je na partycji, która nie jest zamontowana i nie jest używana przez aktualny system [web:34][web:45].
:::

## Wspólne kroki konwersji

Debian man page podaje składnię `ntfs2btrfs [options] device`, a upstream README pokazuje linuksowy przykład `ntfs2btrfs /dev/sda1` [web:45][web:34].

1. Znajdź właściwą partycję:

```bash
lsblk -f
```

2. Jeśli jest zamontowana, odmontuj ją:

```bash
sudo umount /dev/sdX1
```

3. Uruchom konwersję:

```bash
sudo ntfs2btrfs /dev/sdX1
```

4. Po zakończeniu zweryfikuj wynik:

```bash
sudo btrfs filesystem show
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
```

5. Jeśli wszystko wygląda poprawnie, zostaw obraz rollbacku przez jakiś czas jako zabezpieczenie.

::: info Gdzie zapisany jest obraz rollbacku
Oryginalny stan NTFS jest zapisywany jako `image/ntfs.img` w formie reflink. Man page podaje, że powrót można wykonać przez `--rollback`, o ile nie zniszczyłeś pierwotnego układu danych operacjami takimi jak balance [web:45].
:::

## Parametry opcjonalne

Debian man page opisuje przydatne opcje, w tym `--compress`, `--hash`, `--rollback` i `--no-datasum`. Domyślny hash to `crc32c`, a rekompresja plików skompresowanych wcześniej w NTFS używa domyślnie `zstd`, jeśli było dostępne podczas kompilacji [web:45].

### Kompresja

```bash
sudo ntfs2btrfs --compress zstd /dev/sdX1
```

### Inny algorytm haszujący

```bash
sudo ntfs2btrfs --hash xxhash /dev/sdX1
```

### Powrót do oryginalnego NTFS

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

::: warning Rollback przywraca poprzedni stan
Rollback przywraca partycję do stanu z momentu konwersji. Wszystkie zmiany wykonane po konwersji zostaną utracone [web:45].
:::

## Linux Mint

Linux Mint nie jest wymieniony osobno w upstream README, ale ponieważ bazuje na Ubuntu, ma sens najpierw sprawdzić, czy pakiet jest dostępny w repozytoriach używanej wersji. Upstream wymienia bezpośrednio Debian i Ubuntu, ale nie Mint [web:34].

Najpierw spróbuj:

```bash
sudo apt update
apt search ntfs2btrfs
```

Jeśli pakiet istnieje, zainstaluj go:

```bash
sudo apt install ntfs2btrfs
```

Jeśli nie ma go w repozytorium, zbuduj go ze źródeł:

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

Następnie uruchom konwersję jak zwykle:

```bash
sudo ntfs2btrfs /dev/sdX1
```

## Ubuntu

Ubuntu jest wymienione upstreamem wśród zdokumentowanych dystrybucji Linuksa, a Debian/Ubuntu man page potwierdza dostępność pakietu oraz składnię polecenia [web:34][web:45].

Instalacja przez APT:

```bash
sudo apt update
sudo apt install ntfs2btrfs
```

Potem uruchom konwersję:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

Zalecane sprawdzenie po konwersji:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume list /mnt
sudo btrfs filesystem df /mnt
```

## Fedora

Fedora jest wyraźnie wymieniona upstreamem i ma też oficjalny wpis pakietu w repozytoriach Fedory [web:34][web:44].

Instalacja przez DNF:

```bash
sudo dnf install ntfs2btrfs
```

Konwersja:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

Weryfikacja wyniku:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs filesystem show /mnt
sudo btrfs subvolume list /mnt
```

## CachyOS

CachyOS nie jest nazwany bezpośrednio przez upstream, ale jako dystrybucja oparta na Arch zwykle korzysta z ekosystemu AUR. Upstream wymienia Arch wśród dystrybucji Linuksa, a `ntfs2btrfs` jest dostępne w AUR [web:34][web:41].

W CachyOS najczęściej użyjesz helpera AUR:

```bash
yay -S ntfs2btrfs
```

Albo ręcznego buildu z AUR:

```bash
git clone https://aur.archlinux.org/ntfs2btrfs.git
cd ntfs2btrfs
makepkg -si
```

Następnie uruchom to samo polecenie konwersji:

```bash
sudo umount /dev/sdX1
sudo ntfs2btrfs /dev/sdX1
```

## Co zrobić po konwersji

Po udanej konwersji sprawdź filesystem i nie usuwaj od razu obrazu rollbacku. Man page i dokumentacja pakietu podają, że jeśli zdecydujesz się zostawić konwersję, możesz później usunąć subvolume `image`, aby odzyskać miejsce [web:45][web:44].

Zalecane kroki:
- Zamontować partycję i sprawdzić, czy pliki wyglądają poprawnie
- Sprawdzić `btrfs subvolume list` i `btrfs filesystem df`
- Zachować obraz rollbacku do czasu potwierdzenia integralności danych
- Dopiero potem rozważyć usunięcie subvolume `image`

Przykład usunięcia obrazu rollbacku po weryfikacji:

```bash
sudo mount /dev/sdX1 /mnt
sudo btrfs subvolume delete /mnt/image
```

## Znane ograniczenia

Upstream podaje, że zachowywane są files, directories, symlinks, security descriptors, alternate data streams oraz LXSS metadata. Z drugiej strony encrypted files, zachowanie case-sensitivity flag, unusual cluster sizes i duże ADS powyżej 16 KB są wymienione jako nieobsługiwane [web:34].

Ma to znaczenie szczególnie dla dysków używanych wcześniej w specyficznych workflow Windows, środowiskach developerskich albo starszych archiwach danych. Jeśli nie masz pewności co do układu danych, najbezpieczniej przetestować wszystko najpierw na mniej ważnej partycji.

## Typowe problemy

### Narzędzie zgłasza, że wolumin NTFS nie jest czysty

Najczęściej jest to efekt niepoprawnego zamknięcia Windows albo włączonego Fast Startup. Podłącz dysk z powrotem do Windows, uruchom `chkdsk /f`, wyłącz Fast Startup i zamknij system poprawnie.

### Partycji nie da się odmontować

Sprawdź, co ją trzyma otwartą:

```bash
sudo fuser -vm /dev/sdX1
```

Możesz też sprawdzić aktualne mount pointy:

```bash
mount | grep sdX1
```

### Chcę wrócić do NTFS po konwersji

Dopóki nie usunąłeś subvolume `image` i nie wykonałeś operacji uniemożliwiających rollback, możesz użyć:

```bash
sudo ntfs2btrfs --rollback /dev/sdX1
```

## Uwaga o dyskach systemowych

Istnieją techniczne scenariusze, w których Windows może bootować z wynikowego układu Btrfs, ale upstream nie przedstawia tego jako normalnego desktopowego workflow i wspomina o tym jedynie marginalnie. Dla praktycznej dokumentacji rozsądniej jest skupić ten poradnik na dyskach danych, partycjach dodatkowych i scenariuszach migracyjnych poza aktywnym systemem produkcyjnym [web:34].

::: tip Gotowe
Jeśli konwersja zakończyła się bez błędów i dane wyglądają poprawnie, twoja partycja NTFS została przekonwertowana do Btrfs bez klasycznego kopiowania wszystkiego gdzie indziej. Nie usuwaj od razu obrazu rollbacku — zachowaj go, dopóki nie upewnisz się, że wszystko działa poprawnie [web:45][web:34].
:::
