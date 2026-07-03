---
title: Instalacja Fedory KDE
description: Przewodnik po instalacji Fedory KDE Plasma — nowoczesnej dystrybucji Linux idealnej dla graczy i programistów.
---

# Instalacja Fedory KDE

Fedora to nowoczesna, szybko rozwijająca się dystrybucja sponsorowana przez Red Hat. Dostarcza najnowsze oprogramowanie jako jedna z pierwszych — aktualne sterowniki GPU, aktualizacje Protona i usprawnienia jądra zwykle trafiają tutaj wcześniej niż do wielu innych popularnych dystrybucji. Edycja KDE Plasma oferuje przejrzyste środowisko przypominające Windows i wysoki poziom personalizacji, dlatego jest częstym wyborem graczy i programistów, którzy chcą aktualnego systemu bez nadmiernie skomplikowanej administracji. Oficjalna dokumentacja Fedory zaleca Fedora Media Writer do tworzenia bootowalnego nośnika, a osobne sekcje opisują KDE Plasma oraz konfigurację RPM Fusion po instalacji.

## Zanim zaczniesz

Przygotuj:
- Pendrive USB z co najmniej **8 GB** wolnego miejsca. Wszystkie dane zostaną z niego usunięte.
- Stabilne połączenie z internetem.
- Około **20–30 minut** wolnego czasu.

::: warning Najpierw wykonaj kopię zapasową danych
Jeśli instalujesz system na fizycznym komputerze, przenieś ważne pliki na dysk zewnętrzny albo do chmury jeszcze przed rozpoczęciem instalacji.
:::

## Krok 1 — Pobranie ISO

Fedora ma własne narzędzie do tworzenia bootowalnego USB — **Fedora Media Writer** — i jest to najprostsza oraz oficjalnie zalecana opcja dla użytkowników Windows. Dokumentacja Fedory wskazuje Fedora Media Writer jako zalecany sposób poprawnego zapisu obrazu na USB.

**Opcja A — Fedora Media Writer (zalecane):**
1. Wejdź na [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/)
2. Kliknij **Download Fedora Media Writer** i zainstaluj program
3. Uruchom go, wybierz **Fedora KDE Plasma Desktop**, a następnie kliknij **Download and write** — program automatycznie pobierze ISO i zapisze je na pendrive

**Opcja B — Ręczne ISO + Rufus:**
1. Pobierz ISO z [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/) i wybierz wydanie **x86_64**
2. Otwórz [Rufus](https://rufus.ie), wybierz pendrive i plik ISO, a potem kliknij **START**

::: tip Fedora Media Writer oszczędza czas
Pobiera najnowsze ISO i od razu zapisuje je na pendrive, więc nie musisz ręcznie zarządzać plikiem ISO.
:::

## Krok 2 — Uruchomienie z USB

1. Podłącz pendrive i uruchom komputer ponownie.
2. W czasie startu naciśnij klawisz menu bootowania.

| Producent | Klawisz boot menu |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Wybierz swój pendrive i opcję **Start Fedora KDE Plasma Desktop Live**.

::: info Secure Boot w Fedorze
Fedora obsługuje Secure Boot, więc w większości przypadków nie trzeba go wyłączać. Jeśli komputer nie uruchamia się poprawnie, najpierw sprawdź, czy USB zostało poprawnie nagrane.
:::

## Krok 3 — Test środowiska live

Fedora uruchomi środowisko live KDE Plasma. Przed instalacją przetestuj sprzęt — Wi‑Fi, dźwięk i ekran. Gdy będziesz gotowy, kliknij dwukrotnie ikonę **Install to Hard Drive** na pulpicie albo znajdź ją w menu aplikacji.

::: warning NVIDIA GPU w sesji live
Fedora domyślnie zawiera otwarty sterownik Nouveau, który ma ograniczoną obsługę kart NVIDIA. Obraz może mieć niską rozdzielczość albo słabszą wydajność. To normalne — właściwy sterownik NVIDIA zainstalujesz po ukończeniu instalacji.
:::

## Krok 4 — Typ instalacji

Fedora używa instalatora **Anaconda**. Główny ekran pokazuje wszystkie wymagane opcje naraz, a elementy oznaczone ikoną ostrzeżenia trzeba uzupełnić przed kontynuacją. Dokumentacja Fedory wskazuje również KDE Plasma Desktop lub Kinoite jako zalecane opcje KDE na Fedorze.

### Opcja A: Zastąp wszystko

Kliknij **Cíl instalace**, wybierz dysk, ustaw **Automatyczne** partycjonowanie, a potem kliknij **Gotowe**.

- ✅ Najprostsza opcja, zalecana dla większości użytkowników
- ✅ Cały dysk będzie dostępny dla Fedory
- ❌ Wszystkie istniejące dane zostaną usunięte

::: danger Upewnij się, że masz kopię zapasową danych z Windows
Automatyczne partycjonowanie na jednym dysku usunie wszystko, co się na nim znajduje. Dwa razy sprawdź, który dysk został wybrany.
:::

### Opcja B: Zachowaj Windows (dual boot)

Kliknij **Cíl instalace**, wybierz dysk, a następnie wybierz **Własne** partycjonowanie i kliknij **Gotowe**.

Na ekranie ręcznego partycjonowania:
1. Kliknij **Kliknij tutaj, aby utworzyć je automatycznie** jako punkt wyjścia.
2. Sprawdź, czy partycja Windows (zwykle `ntfs`) jest na liście i **nie** jest oznaczona do formatowania.
3. Dostosuj rozmiar partycji głównej Fedory (`/`) — zalecane **40 GB lub więcej**.
4. Kliknij **Gotowe** → **Zaakceptuj zmiany**.

- ✅ Oba systemy dostępne przy starcie przez GRUB
- ⚠️ Wymaga co najmniej **40 GB** nieprzydzielonego miejsca

::: details Nie masz dość wolnego miejsca na dual boot?
Najpierw zmniejsz partycję Windows:
1. W Windows naciśnij **Win + X** → **Zarządzanie dyskami**
2. Kliknij prawym przyciskiem na dysk C: → **Zmniejsz wolumin**
3. Wpisz ilość w MB (np. `51200` dla 50 GB)
4. Kliknij **Zmniejsz** — zwolnione miejsce pojawi się jako nieprzydzielone
5. W Anacondzie to miejsce będzie dostępne dla Fedory
:::

::: tip Dostęp do plików Windows z Fedory
Partycja Windows pojawi się w menedżerze plików **Dolphin** i zwykle można ją zamontować oraz przeglądać. Jeśli Windows nie został całkowicie zamknięty, partycja może zostać zamontowana tylko do odczytu jako zabezpieczenie.

Aby wyłączyć szybkie uruchamianie Windows:
**Panel sterowania → Opcje zasilania → Wybierz działanie przycisków zasilania → Włącz szybkie uruchamianie → odznacz**
:::

## Krok 5 — Zakończenie instalatora

1. **Klawiatura** — ustaw układ
2. **Data i godzina** — wybierz strefę czasową i włącz **Czas sieciowy**
3. **Konto root** — pozostaw wyłączone, Fedora używa zamiast tego `sudo`
4. **Tworzenie użytkownika** — odbywa się po pierwszym uruchomieniu w kreatorze konfiguracji
5. Kliknij **Rozpocznij instalację** → czekaj **10–15 minut**

## Krok 6 — Pierwsze uruchomienie i kreator

Po restarcie Fedora KDE uruchomi krótki **kreator konfiguracji**:

1. Połącz się z Wi‑Fi
2. Ustaw preferencje prywatności
3. Utwórz konto użytkownika i hasło

Po zalogowaniu otwórz **Konsole** i od razu wykonaj pełną aktualizację systemu:

```bash
sudo dnf upgrade --refresh -y
```

### Instalacja RPM Fusion

Domyślne repozytoria Fedory nie zawierają oprogramowania własnościowego. **RPM Fusion** dodaje sterowniki NVIDIA, pełny FFmpeg, kodeki multimedialne, Steam i inne pakiety. Oficjalna dokumentacja Fedory zawiera pakiety do włączenia repozytoriów free i nonfree RPM Fusion.

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Instalacja kodeków multimedialnych

RPM Fusion zaleca zastąpienie `ffmpeg-free` pełną wersją `ffmpeg` z RPM Fusion, ponieważ wariant Fedory może nie pokrywać wszystkich typowych potrzeb multimedialnych. Dokumentacja RPM Fusion dotycząca multimediów opisuje tę konfigurację.

```bash
sudo dnf swap ffmpeg-free ffmpeg --allowerasing
```

Następnie doinstaluj grupę multimedialną dla GStreamera i innych aplikacji korzystających ze standardowych formatów audio i wideo:

```bash
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
```

::: tip Dlaczego to ważne
Bez tego świeża instalacja Fedory może nie obsługiwać części popularnych formatów audio i wideo. Pełny FFmpeg i pakiet multimedialny poprawiają odtwarzanie filmów, muzyki i zgodność wielu aplikacji.
:::

### Kodeki z akceleracją sprzętową

Jeśli chcesz lepszego odtwarzania wideo z akceleracją GPU, zainstaluj pakiety odpowiednie dla twojego stosu graficznego.

**AMD (Mesa):**
```bash
sudo dnf swap mesa-va-drivers mesa-va-drivers-freeworld
sudo dnf swap mesa-vdpau-drivers mesa-vdpau-drivers-freeworld
```

**Intel (nowsze generacje):**
```bash
sudo dnf install intel-media-driver
```

**Intel (starsze generacje):**
```bash
sudo dnf install libva-intel-driver
```

**NVIDIA:**
```bash
sudo dnf install libva-nvidia-driver
```

### Sterowniki NVIDIA

Dla większości nowszych kart NVIDIA na Fedorze standardowym rozwiązaniem jest instalacja `akmod-nvidia` z RPM Fusion. Fedora i poradniki społecznościowe używają RPM Fusion jako głównej ścieżki dla własnościowej obsługi NVIDIA.

```bash
sudo dnf install akmod-nvidia xorg-x11-drv-nvidia-cuda
```

Po instalacji **nie uruchamiaj od razu ponownie systemu**. Pakiet `akmod-nvidia` najpierw buduje moduł jądra dla aktualnego kernela, co może potrwać kilka minut.

::: warning NVIDIA w Fedorze — cierpliwość
Poczekaj, aż terminal wróci do promptu. Zbyt szybki restart może skończyć się brakiem zbudowanego sterownika i czarnym ekranem.
:::

Jeśli masz włączony Secure Boot i własnościowy sterownik NVIDIA się nie ładuje, może być potrzebne podpisanie modułu akmods przez workflow MOK.

### Konfiguracja do grania

1. Zainstaluj **Steam** z **Discover** albo z terminala:
```bash
sudo dnf install steam
```
2. Otwórz Steam → **Ustawienia → Zgodność**
3. Włącz **Włącz Steam Play dla wszystkich tytułów**
4. Wybierz najnowszy **Proton**

::: tip Najpierw sprawdź swoje gry
Przed przejściem zobacz na [ProtonDB](https://www.protondb.com), jak dobrze działają twoje gry. Fedora z aktualnym kernelem, stosem Mesa i pakietami RPM Fusion to bardzo dobry fundament pod granie.
:::

## Częste problemy i rozwiązania

### Po instalacji dual boot nie widać GRUB
Jeśli komputer uruchamia się bezpośrednio do Windows:
1. Otwórz **CMD jako administrator** w Windows
2. Wpisz: `bcdedit /set {bootmgr} path \EFI\fedora\grubx64.efi`
3. Uruchom ponownie — GRUB powinien się pojawić

Albo wejdź do BIOS/UEFI i ustaw Fedorę jako pierwszy system bootowania.

### Wi‑Fi nie działa po instalacji
Najczęściej dotyczy kart Broadcom lub niektórych kart Intel. Połącz się przez Ethernet i uruchom:
```bash
sudo dnf install akmod-wl        # Broadcom
# albo
sudo dnf install iwlwifi-dkms    # niektóre karty Intel
```

### Czarny ekran po instalacji sterowników NVIDIA
W menu GRUB naciśnij **E**, znajdź linię `linux` i dodaj `nomodeset` przed `rhgb quiet`. Naciśnij **F10**, aby uruchomić system. Następnie sprawdź, czy RPM Fusion jest aktywne, sterownik jest zainstalowany i budowa akmods zakończyła się poprawnie.

### Problemy z Waylandem i NVIDIA
Fedora KDE nadal obsługuje sesję **X11**. Na ekranie logowania kliknij wybór sesji w lewym dolnym rogu i wybierz **Plasma (X11)** zamiast **Plasma (Wayland)**, jeśli pojawiają się tearing, awarie lub artefakty graficzne.

### SELinux blokuje aplikację
Fedora używa SELinux dla bezpieczeństwa, a czasem może on blokować aplikacje. Sprawdź powiadomienia SELinux i zastosuj sugerowane rozwiązanie albo tymczasowo przełącz tryb na permissive:

```bash
sudo setenforce 0
```

::: warning
Przełączenie SELinux do trybu permissive obniża bezpieczeństwo systemu. Używaj tego tylko do diagnostyki, a potem włącz go ponownie:
```bash
sudo setenforce 1
```
:::

### dnf działa wolno podczas aktualizacji
`dnf` sprawdza metadane przy każdym uruchomieniu. Możesz to przyspieszyć, dodając do `/etc/dnf/dnf.conf`:

```ini
max_parallel_downloads=10
fastestmirror=True
```

### Zły czas po przełączaniu między Windows i Linux
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Partycja Windows montuje się tylko do odczytu
Najczęściej powoduje to szybkie uruchamianie Windows. W Windows wyłącz je tutaj:
**Panel sterowania → Opcje zasilania → Wybierz działanie przycisków zasilania → odznacz Włącz szybkie uruchamianie**

::: tip Gotowe! 🎉
Fedora KDE jest zainstalowana i gotowa do użycia. Sprawdź alternatywy aplikacji, które mogą pasować do twojego workflow i konfiguracji gamingowej.
:::
