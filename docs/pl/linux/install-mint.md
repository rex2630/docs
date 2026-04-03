---
title: Instalacja Linux Mint
description: Przewodnik krok po kroku dotyczący instalacji Linux Mint — najbardziej przyjazna dla początkujących dystrybucja Linuxa dla osób przechodzących z Windows.
---

# Instalacja Linux Mint

Linux Mint to najbardziej polecana dystrybucja dla użytkowników przechodzących z Windows. Ma znajomy pasek zadań, menu Start i menedżer plików, i działa od razu bez większej konfiguracji.

## Zanim zaczniesz

Upewnij się, że masz:
- Pendrive z co najmniej **8 GB** wolnego miejsca (wszystko na nim zostanie usunięte)
- Stabilne połączenie internetowe do pobrania ISO
- Około **20–30 minut** wolnego czasu

::: warning Najpierw zrób kopię zapasową danych
Jeśli instalujesz na prawdziwym komputerze, przed kontynuowaniem wykonaj kopię zapasową ważnych plików na zewnętrzny dysk lub w chmurze. Instalacja może nadpisać istniejące dane, jeśli nie będziesz ostrożny.
:::

## Krok 1 — Pobierz ISO

1. Przejdź na [linuxmint.com/download.php](https://www.linuxmint.com/download.php)
2. Wybierz edycję **Cinnamon** — jest najbardziej dopracowana i przypomina Windows
3. Kliknij link do pobrania i poczekaj na zakończenie pobierania pliku `.iso`

::: tip Którą edycję wybrać?
- **Cinnamon** — zalecana, nowoczesna i przypominająca Windows
- **MATE** — lżejsza zasobowo, nieco bardziej tradycyjna
- **Xfce** — najlepsza dla starszego lub słabszego sprzętu (4 GB RAM lub mniej)
:::

## Krok 2 — Nagraj USB w Rufusie

1. Pobierz [Rufus](https://rufus.ie) i otwórz go (instalacja nie jest wymagana)
2. W sekcji **Device** wybierz swój pendrive
3. W sekcji **Boot selection** kliknij **SELECT** i wybierz pobrany plik ISO Minta
4. Pozostaw wszystkie inne ustawienia domyślne
5. Kliknij **START** — potwierdź ostrzeżenie o usunięciu danych z USB
6. Poczekaj aż pasek postępu osiągnie 100% i pokaże **READY**

::: info Rufus vs. inne narzędzia
Rufus to najprostsza opcja dla użytkowników Windows. Możesz też użyć **balenaEtcher**, jeśli wolisz bardziej wizualny interfejs — oba działają doskonale.
:::

## Krok 3 — Uruchom z USB

1. Podłącz USB do komputera, na którym chcesz zainstalować Linuxa
2. Uruchom ponownie komputer
3. Naciśnij **klawisz menu rozruchowego** wielokrotnie podczas uruchamiania

| Producent | Klawisz menu rozruchowego |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

4. Wybierz swój pendrive z menu rozruchowego
5. Wybierz **Start Linux Mint** z menu grub

::: details Nie możesz uruchomić z USB? Wyłącz Secure Boot.
Niektóre komputery blokują uruchamianie z USB z powodu **Secure Boot**. Aby go wyłączyć:
1. Uruchom ponownie i naciśnij **F2**, **DEL** lub **F10**, aby wejść do BIOS (klawisz różni się zależnie od producenta)
2. Przejdź do zakładki **Security** lub **Boot**
3. Znajdź **Secure Boot** i ustaw na **Disabled**
4. Zapisz i wyjdź (zazwyczaj F10)
5. Spróbuj ponownie uruchomić z USB

Linux Mint działa dobrze bez Secure Boot. Możesz go ponownie włączyć po instalacji, jeśli chcesz, ale nie jest to wymagane.
:::

## Krok 4 — Wypróbuj Linux Mint Live

Wylądowujesz na w pełni działającym pulpicie Linux Mint prosto z USB — nic nie jest jeszcze zainstalowane. To jest **sesja live**.

**Przed kliknięciem Zainstaluj przetestuj sprzęt:**
- Połącz się z Wi-Fi i przeglądaj stronę internetową
- Odtwórz film na YouTube, aby przetestować dźwięk
- Sprawdź, czy klawiatura i mysz działają poprawnie
- Jeśli masz kartę NVIDIA, sprawdź, czy wyświetlacz wygląda prawidłowo

::: warning Problemy z kartą NVIDIA w sesji live
Jeśli ekran wygląda źle, ma artefakty lub jest zablokowany na niskiej rozdzielczości, nie panikuj — to często zdarza się z kartami NVIDIA w trybie live. Instalator zaproponuje instalację właściwych sterowników. Zazwyczaj rozwiązuje się to samo po instalacji.
:::

Gdy wszystko wygląda dobrze, kliknij dwukrotnie ikonę **Install Linux Mint** na pulpicie.

## Krok 5 — Typ instalacji

To najważniejszy krok — wybieraj ostrożnie.

### Opcja A: Zastąp wszystko (pełne przejście)

Wybierz **Erase disk and install Linux Mint**.

- ✅ Najprostsza opcja
- ✅ Najlepsza wydajność, cały dysk dla Linuxa
- ❌ Windows zostanie całkowicie usunięty

::: danger Upewnij się, że masz kopię zapasową danych z Windows
Po wybraniu tej opcji i kliknięciu Zainstaluj, wszystkie dane na dysku znikają. Nie ma odwrotu bez ponownej instalacji Windows od zera.
:::

### Opcja B: Zachowaj Windows (dual boot)

Wybierz **Install Linux Mint alongside Windows**.

- ✅ Oba systemy dostępne, wybieraj przy starcie
- ✅ Świetny sposób na oswojenie się z Linuxem bez zobowiązań
- ⚠️ Wymaga wystarczająco wolnego miejsca na dysku (zalecane co najmniej **30 GB** dla Linuxa)

**Jak działa dual boot:**
1. Instalator pokazuje suwak — przeciągnij go, aby podzielić miejsce między Windows a Linux Mint
2. Po instalacji za każdym razem, gdy uruchamiasz komputer, zobaczysz **bootloader GRUB** — menu, w którym możesz wybrać Windows lub Linux Mint
3. Oba systemy są całkowicie oddzielone — pliki nie są domyślnie współdzielone

::: tip Dostęp do plików Windows z Linuxa
Nawet w konfiguracji dual boot możesz przeglądać partycję Windows z menedżera plików Linux Mint. Dysk `C:` z Windows pojawi się jako dysk do zamontowania. Możesz swobodnie czytać i zapisywać pliki na nim.
:::

::: details Za mało wolnego miejsca na dual boot?
Najpierw musisz zmniejszyć partycję Windows:
1. W Windows naciśnij **Win + X** → **Zarządzanie dyskami**
2. Kliknij prawym przyciskiem myszy dysk C: → **Zmniejsz wolumin**
3. Wprowadź ilość do zmniejszenia w MB (np. `40960` dla 40 GB)
4. Kliknij **Zmniejsz** — zwolnione miejsce pojawi się jako „Nieprzydzielone"
5. Teraz uruchom instalator Linux Mint — automatycznie użyje tego nieprzydzielonego miejsca
:::

### Opcja C: Ręczne partycjonowanie (zaawansowane)

Wybierz **Something else** tylko jeśli wiesz co robisz — daje pełną kontrolę nad układem partycji, ale nie jest zalecane dla początkujących.

## Krok 6 — Zakończ instalator

Po wybraniu typu instalacji reszta jest prosta:

1. **Strefa czasowa** — kliknij swoją lokalizację na mapie lub wpisz nazwę miasta
2. **Konto użytkownika:**
   - Wpisz swoje imię i nazwę komputera (np. `marcin-pc`)
   - Ustaw nazwę użytkownika (małymi literami, bez spacji)
   - Ustaw silne hasło
   - Wybierz czy wymagać hasła przy logowaniu (zalecane ✅)
3. Kliknij **Install Now** → potwierdź zmiany partycji → poczekaj **10–15 minut**

## Krok 7 — Pierwsze uruchomienie

Po zakończeniu instalacji instalator poprosi o restart. **Wyjmij USB gdy zostaniesz o to poproszony** i naciśnij Enter.

Po zalogowaniu automatycznie otworzy się **Ekran powitalny**. Zrób najpierw te rzeczy:

### 1. Zainstaluj aktualizacje
Otwórz **Menedżer aktualizacji** z paska zadań → kliknij **Odśwież** → **Zainstaluj aktualizacje**.

::: tip Zawsze najpierw aktualizuj
Świeże instalacje często mają tygodnie oczekujących aktualizacji. Zainstalowanie ich najpierw zapobiega problemom z bezpieczeństwem i zapewnia poprawne działanie wszystkich sterowników.
:::

### 2. Zainstaluj sterowniki GPU
Otwórz **Menedżer sterowników** (wyszukaj w menu). Jeśli masz kartę NVIDIA lub AMD, wykryje i zaproponuje zalecany sterownik własnościowy. Kliknij **Zastosuj zmiany**.

::: warning Użytkownicy NVIDIA — zrób to przed wszystkim innym
Bez właściwego sterownika NVIDIA możesz doświadczyć rozrywania obrazu, słabej wydajności i zepsutego grania. Zawsze instaluj go przez Menedżera sterowników przed uruchomieniem Steama lub jakichkolwiek gier.
:::

### 3. Skonfiguruj migawki
Otwórz **Timeshift** z menu. Tworzy migawki systemu — w zasadzie punkty przywracania, jak Przywracanie systemu w Windows. Skonfiguruj go do uruchamiania co tydzień, żebyś mógł cofnąć zmiany jeśli coś pójdzie nie tak.

## Typowe problemy i rozwiązania

### Menu rozruchowe nie pokazuje GRUB po instalacji dual boot
Jeśli komputer uruchamia się prosto do Windows po instalacji:
1. Uruchom Windows → otwórz **CMD jako Administrator**
2. Uruchom: `bcdedit /set {bootmgr} path \EFI\linuxmint\grubx64.efi`
3. Uruchom ponownie — GRUB powinien teraz się pojawić

Alternatywnie wejdź do BIOS i zmień kolejność rozruchu tak, żeby **Linux Mint** był pierwszy.

### Wi-Fi nie działa po instalacji
Najczęstsze z kartami Wi-Fi Broadcom.
1. Tymczasowo podłącz przez kabel ethernet
2. Otwórz **Menedżer sterowników** — powinien wykryć i zaproponować sterownik Broadcom
3. Zainstaluj go, uruchom ponownie — Wi-Fi powinno teraz działać

Jeśli ethernet nie jest dostępny, Mint ISO zawiera sterowniki Broadcom offline:
```bash
sudo apt install bcmwl-kernel-source
```

### Rozdzielczość ekranu zablokowana na 1024×768
Zazwyczaj oznacza to, że sterownik GPU nie jest jeszcze zainstalowany. Otwórz **Menedżer sterowników**, zainstaluj zalecany sterownik i uruchom ponownie.

### Czarny ekran po instalacji (NVIDIA)
W menu GRUB naciśnij **E**, aby edytować wpis rozruchowy, znajdź linię zaczynającą się od `linux` i dodaj `nomodeset` przed `quiet splash`. Naciśnij **F10** aby uruchomić. Następnie zainstaluj sterownik NVIDIA przez Menedżera sterowników i uruchom ponownie — problem już nie wystąpi.

### Touchpad nie działa na laptopie
```bash
sudo apt install xserver-xorg-input-synaptics
```
Uruchom ponownie po instalacji.

### Zegar pokazuje złą godzinę przy przełączaniu między Windows i Linuxem (dual boot)
Windows i Linux domyślnie inaczej obsługują zegar sprzętowy. Napraw to w Linuxie poleceniem:
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

::: tip Gotowe! 🎉
Linux Mint jest zainstalowany i gotowy. Przejdź na stronę [Alternatywy aplikacji](/linux/alternatives), aby znaleźć zamienniki dla swoich ulubionych aplikacji Windows.
:::
