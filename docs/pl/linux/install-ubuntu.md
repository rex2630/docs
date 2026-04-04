---
title: Instalacja Ubuntu
description: Przewodnik krok po kroku dotyczący instalacji Ubuntu — solidna, przyjazna dla początkujących dystrybucja Linuxa wspierana przez Canonical.
---

# Instalacja Ubuntu

Ubuntu to jedna z najszerzej stosowanych dystrybucji Linuxa na świecie. Jest dopracowana, dobrze udokumentowana i ma ogromną społeczność — dzięki czemu łatwo znaleźć pomoc w niemal każdym problemie.

## Zanim zaczniesz

Upewnij się, że masz:
- Pendrive z co najmniej **8 GB** wolnego miejsca (wszystko na nim zostanie usunięte)
- Stabilne połączenie internetowe do pobrania ISO
- Około **20–30 minut** wolnego czasu

::: warning Najpierw zrób kopię zapasową danych
Jeśli instalujesz na prawdziwym komputerze, przed kontynuowaniem wykonaj kopię zapasową ważnych plików na zewnętrzny dysk lub w chmurze. Instalacja może nadpisać istniejące dane, jeśli nie będziesz ostrożny.
:::

## Krok 1 — Pobierz ISO

1. Przejdź na [ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)
2. Pobierz najnowszą wersję **LTS** (Long Term Support) — wspierana przez 5 lat, znacznie bardziej stabilna niż zwykłe wydania
3. Poczekaj na zakończenie pobierania pliku `.iso`

::: tip LTS vs. zwykłe wydanie
Zawsze wybieraj wersję **LTS**, chyba że konkretnie potrzebujesz najnowszych funkcji. Wydania inne niż LTS są wspierane tylko przez **9 miesięcy** — po tym czasie przestajesz otrzymywać aktualizacje bezpieczeństwa, chyba że zaktualizujesz system.
:::

## Krok 2 — Nagraj USB w Rufusie

1. Pobierz [Rufus](https://rufus.ie) i otwórz go (instalacja nie jest wymagana)
2. W sekcji **Device** wybierz swój pendrive
3. W sekcji **Boot selection** kliknij **SELECT** i wybierz pobrany plik ISO Ubuntu
4. Pozostaw wszystkie inne ustawienia domyślne
5. Kliknij **START** i potwierdź ostrzeżenie — Rufus usunie dane z USB i nagra ISO
6. Poczekaj aż pokaże **READY**

::: info Rufus vs. inne narzędzia
Możesz też użyć **balenaEtcher** dla prostszego wizualnego doświadczenia. Oba działają doskonale z plikami ISO Ubuntu.
:::

## Krok 3 — Uruchom z USB

1. Podłącz USB do docelowego komputera i uruchom go ponownie
2. Naciśnij **klawisz menu rozruchowego** wielokrotnie podczas uruchamiania

| Producent | Klawisz menu rozruchowego |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Wybierz swój pendrive z menu rozruchowego
4. Wybierz **Try or Install Ubuntu** z menu grub

::: details Nie możesz uruchomić z USB? Wyłącz Secure Boot.
Niektóre komputery blokują uruchamianie z USB z powodu **Secure Boot**:
1. Uruchom ponownie i naciśnij **F2**, **DEL** lub **F10**, aby wejść do BIOS
2. Przejdź do zakładki **Security** lub **Boot**
3. Znajdź **Secure Boot** i ustaw na **Disabled**
4. Zapisz i wyjdź (zazwyczaj F10) i spróbuj ponownie

W przeciwieństwie do Fedory, Ubuntu nie obsługuje oficjalnie Secure Boot na wszystkich konfiguracjach sprzętowych, więc wyłączenie go jest często najprostszym rozwiązaniem.
:::

## Krok 4 — Wypróbuj Ubuntu Live

Ubuntu uruchomi się w środowisku live z pulpitem GNOME. Przed instalacją poświęć chwilę na przetestowanie sprzętu:
- Połącz się z Wi-Fi i przeglądaj stronę internetową
- Odtwórz film na YouTube, aby przetestować dźwięk
- Sprawdź klawiaturę, mysz i rozdzielczość ekranu

::: warning Karta NVIDIA w sesji live
Jeśli ekran wygląda źle lub jest zablokowany na niskiej rozdzielczości, to częsty problem NVIDIA w trybie live. Instalator zaproponuje sterowniki własnościowe — zainstaluj je, a problem zostanie rozwiązany po pierwszym uruchomieniu.
:::

Gdy będziesz gotowy, kliknij **Install Ubuntu** na ekranie powitalnym lub ikonie na pulpicie.

## Krok 5 — Typ instalacji

### Opcja A: Zastąp wszystko (pełne przejście)

Na ekranie konfiguracji dysku wybierz **Erase disk and install Ubuntu**.

- ✅ Najprostsza opcja
- ✅ Najlepsza wydajność, cały dysk dla Linuxa
- ❌ Windows zostanie całkowicie usunięty

::: danger Upewnij się, że masz kopię zapasową danych z Windows
Po wybraniu tej opcji i potwierdzeniu, wszystkie dane na wybranym dysku zostaną trwale usunięte. Nie ma możliwości cofnięcia.
:::

### Opcja B: Zachowaj Windows (dual boot)

Wybierz **Install Ubuntu alongside Windows Boot Manager**.

- ✅ Oba systemy dostępne, wybierane przy starcie przez GRUB
- ✅ Świetny sposób na wypróbowanie Ubuntu bez utraty Windows
- ⚠️ Wymaga co najmniej **30 GB** wolnego nieprzydzielonego miejsca

Instalator pokaże suwak do podziału miejsca na dysku między Windows a Ubuntu. Przeciągnij go według preferencji — zalecane **50 GB lub więcej** dla Ubuntu, jeśli planujesz instalować aplikacje i gry.

::: details Za mało wolnego miejsca na dual boot?
Najpierw zmniejsz partycję Windows:
1. W Windows naciśnij **Win + X** → **Zarządzanie dyskami**
2. Kliknij prawym przyciskiem myszy dysk C: → **Zmniejsz wolumin**
3. Wprowadź ilość w MB (np. `51200` dla 50 GB)
4. Kliknij **Zmniejsz** — zwolnione miejsce pojawi się jako „Nieprzydzielone"
5. Instalator Ubuntu automatycznie użyje tego miejsca
:::

::: tip Dostęp do plików Windows z Ubuntu
Dysk `C:` z Windows będzie widoczny w menedżerze plików Ubuntu jako dysk do zamontowania. Możesz swobodnie czytać i zapisywać pliki między oboma systemami.
:::

### Opcja C: Ręczne partycjonowanie (zaawansowane)

Wybierz **Manual installation** tylko jeśli wiesz co robisz — pełna kontrola nad układem partycji, nie zalecane dla początkujących.

## Krok 6 — Zakończ instalator

1. **Język i klawiatura** — wybierz język i układ, przetestuj go w polu tekstowym
2. **Połącz z Wi-Fi** — opcjonalne, ale zalecane do pobrania aktualizacji podczas instalacji
3. **Typ instalacji:**
   - Wybierz **Interactive installation**
   - Wybierz **Default selection** dla standardowego zestawu aplikacji
4. **Optymalizuj komputer:**
   - ✅ Zaznacz **Install third-party software for graphics and Wi-Fi hardware**
   - ✅ Zaznacz **Download and install support for additional media formats**
5. **Konfiguracja konta** — wpisz swoje imię, nazwę komputera, nazwę użytkownika i silne hasło
6. Kliknij **Install** → poczekaj **10–15 minut**

## Krok 7 — Pierwsze uruchomienie

Wyjmij USB gdy zostaniesz o to poproszony, naciśnij Enter i Ubuntu uruchomi się ponownie w nowym systemie.

Po zalogowaniu otwórz aplikację **Welcome** i wykonaj następujące czynności:

### 1. Zainstaluj aktualizacje
```bash
sudo apt update && sudo apt upgrade -y
```
Lub otwórz **Aktualizator oprogramowania** z menu aplikacji i zainstaluj wszystkie oczekujące aktualizacje.

### 2. Zainstaluj sterowniki GPU
Otwórz **Oprogramowanie i aktualizacje** → zakładka **Dodatkowe sterowniki**. Jeśli masz kartę NVIDIA lub AMD, Ubuntu wykryje i zaproponuje zalecany sterownik własnościowy. Wybierz go i kliknij **Zastosuj zmiany**, następnie uruchom ponownie.

::: warning Użytkownicy NVIDIA — zrób to przed graniem
Bez właściwego sterownika NVIDIA będziesz miał słabą wydajność, rozrywanie obrazu i zepsute granie. Zawsze instaluj go przez Dodatkowe sterowniki przed uruchomieniem Steama.
:::

### 3. Włącz Ubuntu Pro (opcjonalne)
Ubuntu oferuje bezpłatny **Ubuntu Pro** do użytku osobistego — zapewnia rozszerzone aktualizacje bezpieczeństwa przez dodatkowe 5 lat poza standardowym okresem LTS. Aktywuj przez:
```bash
sudo pro attach
```
Lub przez **Oprogramowanie i aktualizacje → zakładka Ubuntu Pro**.

## Typowe problemy i rozwiązania

### Menu rozruchowe nie pokazuje GRUB po instalacji dual boot
Jeśli komputer uruchamia się prosto do Windows po instalacji:
1. Otwórz **CMD jako Administrator** w Windows
2. Uruchom: `bcdedit /set {bootmgr} path \EFI\ubuntu\grubx64.efi`
3. Uruchom ponownie — GRUB powinien teraz się pojawić

Alternatywnie wejdź do BIOS i ustaw **Ubuntu** jako pierwszy w kolejności rozruchu.

### Wi-Fi nie działa po instalacji
Najczęstsze z kartami Broadcom. Podłącz przez ethernet i uruchom:
```bash
sudo apt update
sudo apt install bcmwl-kernel-source
```
Uruchom ponownie po instalacji.

### Czarny ekran po instalacji (NVIDIA)
W menu GRUB naciśnij **E**, znajdź linię zaczynającą się od `linux` i dodaj `nomodeset` przed `quiet splash`. Naciśnij **F10** aby uruchomić. Następnie zainstaluj sterownik NVIDIA przez **Dodatkowe sterowniki** i uruchom ponownie.

### Ubuntu uruchamia się do fioletowego/czarnego ekranu i zawiesza się
To znany problem na niektórym sprzęcie z domyślnym serwerem wyświetlania Wayland. Na ekranie logowania kliknij ikonę koła zębatego ⚙️ obok przycisku Zaloguj i wybierz **Ubuntu on Xorg**. Zostanie to zapamiętane przy następnym logowaniu.

### Rozdzielczość ekranu zablokowana na 1024×768
Sterownik GPU nie jest zainstalowany. Otwórz **Oprogramowanie i aktualizacje → Dodatkowe sterowniki**, zainstaluj zalecany sterownik i uruchom ponownie.

### Zegar pokazuje złą godzinę przy przełączaniu między Windows i Linuxem (dual boot)
Uruchom w terminalu Ubuntu:
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Aplikacje Snap wolno się uruchamiają
Ubuntu używa pakietów Snap dla niektórych aplikacji (Firefox, Thunderbird), które mogą mieć wolniejszy czas uruchamiania. Możesz zastąpić je natywnymi wersjami `.deb`:
```bash
# Przykład: zastąp Snap Firefox natywnym Firefox
sudo snap remove firefox
sudo add-apt-repository ppa:mozillateam/ppa
sudo apt install firefox
```

::: tip Gotowe! 🎉
Ubuntu jest zainstalowane i gotowe. Przejdź na stronę [Alternatywy aplikacji](/pl/linux/alternatives), aby znaleźć zamienniki dla swoich ulubionych aplikacji Windows.
:::
