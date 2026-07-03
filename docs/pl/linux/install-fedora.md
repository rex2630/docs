---
title: Instalacja Fedory KDE
description: Przewodnik instalacji Fedory KDE Plasma — nowoczesnej dystrybucji Linuksa idealnej dla graczy i deweloperów.
---

# Instalacja Fedory KDE

Fedora to nowoczesna, szybko rozwijająca się dystrybucja sponsorowana przez Red Hat. Dostarcza najnowsze oprogramowanie — aktualne sterowniki GPU, aktualizacje Protona i usprawnienia jądra trafiają tutaj zwykle jako pierwsze. Edycja KDE Plasma oferuje czyste, zbliżone do Windows środowisko z dużymi możliwościami personalizacji i około 20–30% niższym użyciem RAM niż wersja GNOME Workstation. To sprawia, że jest popularnym wyborem dla graczy i deweloperów, którzy chcą nowości bez utraty stabilności.

## Zanim zaczniesz

Przygotuj:
- Pendrive USB z co najmniej **8 GB** wolnego miejsca (wszystko na nim zostanie usunięte)
- Stabilne połączenie z internetem
- Około **20–30 minut** wolnego czasu

::: warning Najpierw zrób kopię zapasową
Jeśli instalujesz na fizycznym komputerze, przenieś wszystkie ważne pliki na dysk zewnętrzny lub do chmury przed rozpoczęciem instalacji.
:::

## Krok 1 — Pobieranie ISO

Fedora ma własne narzędzie do tworzenia bootowalnego USB — **Fedora Media Writer** — to najłatwiejsza opcja dla użytkowników Windowsa.

**Opcja A — Fedora Media Writer (zalecane):**
1. Wejdź na [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/)
2. Kliknij **Download Fedora Media Writer** i zainstaluj go
3. Otwórz go, wybierz **Fedora KDE Plasma Desktop**, a następnie kliknij **Download and Write** — narzędzie automatycznie pobierze ISO i zapisze je na pendrive

**Opcja B — Ręczne ISO + Rufus:**
1. Pobierz ISO z [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/) → kliknij **For x86_64**
2. Otwórz [Rufus](https://rufus.ie), wybierz pendrive i plik ISO, a następnie kliknij **START**

::: tip Fedora Media Writer oszczędza czas
Pobiera najnowsze ISO i od razu zapisuje je na pendrive — nie trzeba ręcznie zarządzać plikiem ISO.
:::

## Krok 2 — Uruchamianie z USB

1. Podłącz pendrive i uruchom ponownie komputer
2. Podczas startu naciśnij klawisz menu bootowania

| Producent | Klawisz menu bootowania |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Wybierz USB i uruchom **Start Fedora KDE Plasma Desktop Live**

::: info Secure Boot w Fedorze
W przeciwieństwie do wielu innych dystrybucji **Fedora w pełni obsługuje Secure Boot** — nie powinno być potrzeby go wyłączać. Jeśli pojawią się problemy z uruchomieniem, najpierw sprawdź, czy USB zostało zapisane poprawnie.
:::

## Krok 3 — Testowanie środowiska live

Fedora uruchomi się do live desktopa KDE Plasma. Przetestuj sprzęt — Wi‑Fi, dźwięk, ekran — zanim zaczniesz instalację. Gdy będziesz gotowy, dwukrotnie kliknij **Install to Hard Drive** na pulpicie albo znajdź go w menu aplikacji.

::: warning GPU NVIDIA w sesji live
Fedora domyślnie zawiera otwarty sterownik Nouveau z ograniczonym wsparciem dla NVIDIA. Ekran może utknąć na niskiej rozdzielczości albo wydajność może być słaba. To normalne — właściwe sterowniki NVIDIA zainstalujesz po zakończeniu instalacji.
:::

## Krok 4 — Typ instalacji (instalator Anaconda)

Fedora używa instalatora **Anaconda**. Główny ekran pokazuje wszystkie opcje naraz — pozycje oznaczone ikoną ostrzeżenia ⚠️ muszą zostać uzupełnione przed kontynuowaniem.

### Opcja A: Zastąp wszystko (czysta instalacja)

Kliknij **Installation Destination**, wybierz dysk, ustaw **Automatic** partycjonowanie, a następnie kliknij **Done**.

- ✅ Najprostsza opcja, zalecana dla większości użytkowników
- ✅ Cały dysk będzie dostępny dla Fedory
- ❌ Wszystkie istniejące dane zostaną usunięte

::: danger Upewnij się, że masz kopię danych z Windowsa
Wybór automatycznego partycjonowania na jednym dysku usunie wszystko, co się na nim znajduje. Dwa razy sprawdź, który dysk jest zaznaczony.
:::

### Opcja B: Zachowaj Windowsa (dual boot)

Kliknij **Installation Destination**, wybierz dysk, a następnie ustaw partycjonowanie **Custom** i kliknij **Done**.

Na ekranie ręcznego partycjonowania:
1. Kliknij **Click here to create them automatically** jako punkt wyjścia
2. Upewnij się, że partycja Windows (zwykle `ntfs`) znajduje się na liście i **nie** jest zaznaczona do formatowania
3. Dostosuj rozmiar partycji głównej Fedory (`/`) — zalecane **40 GB lub więcej**
4. Kliknij **Done** → **Accept Changes**

- ✅ Oba systemy będą dostępne przy starcie przez GRUB
- ⚠️ Wymaga co najmniej **40 GB** wolnego, nieprzydzielonego miejsca

::: details Nie masz wystarczająco dużo miejsca na dual boot?
Najpierw zmniejsz partycję Windows:
1. W Windows naciśnij **Win + X** → **Disk Management**
2. Kliknij prawym przyciskiem na dysk C: → **Shrink Volume**
3. Wpisz ilość w MB (na przykład `51200` dla 50 GB)
4. Kliknij **Shrink** — zwolnione miejsce pojawi się jako nieprzydzielone
5. W Anacondzie to miejsce będzie dostępne dla Fedory
:::

::: tip Dostęp do plików Windowsa z Fedory
Partycja Windows pojawi się w menedżerze plików **Dolphin**. Możesz ją normalnie zamontować i przeglądać. Pamiętaj, że jeśli Windows nie został zamknięty poprawnie (na przykład przy włączonym Fast Startup), partycja może być zamontowana tylko do odczytu ze względów bezpieczeństwa.

Jak wyłączyć Fast Startup w Windowsie (zalecane przy dual boot):
**Control Panel → Power Options → Choose what the power buttons do → Turn on fast startup → odznacz**
:::

## Krok 5 — Dokończenie instalatora

1. **Keyboard** — kliknij i ustaw układ klawiatury
2. **Time and Date** — wybierz strefę czasową i włącz **Network Time**
3. **Root account** — zostaw wyłączone (Fedora używa zamiast tego `sudo`)
4. **Tworzenie użytkownika** — nastąpi po pierwszym uruchomieniu w kreatorze konfiguracji
5. Kliknij **Begin Installation** → poczekaj **10–15 minut**

## Krok 6 — Pierwsze uruchomienie i kreator konfiguracji

Po restarcie Fedora KDE uruchomi krótki **kreator konfiguracji**:

1. Połącz się z Wi‑Fi
2. Ustaw preferencje prywatności
3. Utwórz konto użytkownika i hasło

Po zalogowaniu otwórz **Konsole** i od razu wykonaj pełną aktualizację systemu:

```bash
sudo dnf upgrade --refresh -y
```

### Instalacja RPM Fusion

Domyślne repozytoria Fedory nie zawierają oprogramowania własnościowego. **RPM Fusion** dodaje sterowniki NVIDIA, kodeki multimedialne, Steam i inne pakiety:

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Instalacja kodeków multimedialnych

Po dodaniu RPM Fusion zainstaluj grupy kodeków i pakietów multimedialnych:

```bash
sudo dnf groupupdate multimedia --setop=install_weak_deps=False -y
sudo dnf groupupdate sound-and-video -y
```

::: tip Dlaczego to ważne
Bez tych pakietów Fedora może nie odtwarzać wszystkich popularnych formatów audio i wideo. Po instalacji zyskasz lepszą obsługę multimediów i wygodniejsze środowisko „od razu po uruchomieniu”.
:::

### Instalacja sterowników NVIDIA (jeśli potrzebne)

Po włączeniu RPM Fusion:

```bash
sudo dnf install akmod-nvidia
```

Po zakończeniu zrestartuj komputer. Kompilacja modułu trwa kilka minut — **nie restartuj od razu**, poczekaj, aż terminal wróci do promptu.

::: warning NVIDIA w Fedorze — cierpliwość
Pakiet `akmod-nvidia` buduje moduł sterownika dla aktualnego jądra. Zajmuje to **2–5 minut** po instalacji. Jeśli zrestartujesz zbyt wcześnie, możesz uruchomić system bez sterownika i zobaczyć czarny ekran. Poczekaj, aż terminal w pełni wróci do promptu.
:::

### Ustawienia do grania

1. Zainstaluj **Steam** z **Discover** (sklepu KDE) albo przez terminal:
```bash
sudo dnf install steam
```
2. Otwórz Steam → **Settings → Compatibility**
3. Włącz **Enable Steam Play for all titles**
4. Wybierz najnowszą wersję **Protona**

::: tip Najpierw sprawdź swoje gry
Przed przejściem sprawdź na [ProtonDB](https://www.protondb.com), jak dobrze działają twoje gry. Większość tytułów AAA i popularnych gier działa na Fedorze świetnie — szczególnie z najnowszym jądrem i sterownikami Mesa/NVIDIA.
:::

## Najczęstsze problemy i rozwiązania

### Po instalacji w dual boot nie pokazuje się GRUB
Jeśli komputer uruchamia się prosto do Windowsa:
1. Otwórz **CMD jako administrator** w Windowsie
2. Wpisz: `bcdedit /set {bootmgr} path \EFI\fedora\grubx64.efi`
3. Zrestartuj komputer — GRUB powinien się teraz pojawić

Albo wejdź do BIOS/UEFI i ustaw **Fedorę** jako pierwszą opcję bootowania.

### Po instalacji nie działa Wi‑Fi
Najczęściej dotyczy kart Broadcom albo niektórych Intel. Połącz się przez Ethernet i uruchom:
```bash
sudo dnf install akmod-wl        # Broadcom
# albo
sudo dnf install iwlwifi-dkms    # niektóre karty Intel
```

### Czarny ekran po instalacji (NVIDIA, RPM Fusion jeszcze nie zostało zainstalowane)
W menu GRUB naciśnij **E**, znajdź linię `linux`, dodaj `nomodeset` przed `rhgb quiet`, a następnie naciśnij **F10**, aby uruchomić system. Potem włącz RPM Fusion i zainstaluj `akmod-nvidia` według kroków powyżej.

### Problemy z Waylandem i NVIDIA (przycinanie obrazu, crashe aplikacji)
W przeciwieństwie do Fedory GNOME (która jest teraz wyłącznie Wayland), **Fedora KDE nadal obsługuje X11**. Na ekranie logowania kliknij wybór sesji w lewym dolnym rogu i wybierz **Plasma (X11)** zamiast **Plasma (Wayland)**.

### SELinux blokuje aplikację
Fedora używa SELinux do bezpieczeństwa, ale czasem może on blokować aplikacje. Sprawdź powiadomienia SELinux i zastosuj sugerowaną poprawkę albo tymczasowo przełącz go do trybu permissive:
```bash
sudo setenforce 0
```
::: warning
Przełączenie SELinux do permissive obniża bezpieczeństwo systemu. Używaj tego tylko do diagnostyki — po wszystkim włącz go ponownie:
```bash
sudo setenforce 1
```
:::

### dnf jest wolny podczas aktualizacji
Menedżer pakietów `dnf` sprawdza metadane przy każdym uruchomieniu. Możesz go przyspieszyć, dodając do `/etc/dnf/dnf.conf`:
```ini
max_parallel_downloads=10
fastestmirror=True
```

### Zły czas przy przełączaniu między Windows i Linuksem (dual boot)
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Partycja Windows jest zamontowana tylko do odczytu
To efekt Fast Startup w Windowsie. W Windowsie:
**Control Panel → Power Options → Choose what the power buttons do → odznacz Turn on fast startup**

::: tip Gotowe! 🎉
Fedora KDE jest już zainstalowana i gotowa do użycia. Przejdź na stronę [Application Alternatives](/en/linux/alternatives) i znajdź zamienniki swoich ulubionych aplikacji z Windowsa.
:::
