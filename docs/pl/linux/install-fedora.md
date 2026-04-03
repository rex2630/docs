---
title: Instalacja Fedora KDE
description: Przewodnik krok po kroku dotyczący instalacji Fedora KDE Plasma — nowoczesna dystrybucja Linuxa idealna dla graczy i deweloperów.
---

# Instalacja Fedora KDE

Fedora to nowoczesna, szybko rozwijająca się dystrybucja sponsorowana przez Red Hat. Dostarcza najnowsze oprogramowanie — najnowsze sterowniki GPU, aktualizacje Proton i ulepszenia jądra trafiają tutaj jako pierwsze. Edycja KDE Plasma oferuje znajomy, przypominający Windows pulpit, który jest bardzo konfigurowalny i zużywa około 20–30% mniej RAM niż edycja GNOME Workstation. To sprawia, że jest ulubieńcem graczy i deweloperów, którzy chcą mieć to, co najnowsze, bez utraty stabilności.

## Zanim zaczniesz

Upewnij się, że masz:
- Pendrive z co najmniej **8 GB** wolnego miejsca (wszystko na nim zostanie usunięte)
- Stabilne połączenie internetowe
- Około **20–30 minut** wolnego czasu

::: warning Najpierw zrób kopię zapasową danych
Jeśli instalujesz na prawdziwym komputerze, przed kontynuowaniem wykonaj kopię zapasową ważnych plików na zewnętrzny dysk lub w chmurze.
:::

## Krok 1 — Pobierz ISO

Fedora ma własne narzędzie do nagrywania o nazwie **Fedora Media Writer** — najłatwiejsze podejście dla użytkowników Windows.

**Opcja A — Fedora Media Writer (zalecane):**
1. Przejdź na [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/)
2. Kliknij **Download Fedora Media Writer** i zainstaluj go
3. Otwórz go, wybierz **Fedora KDE Plasma Desktop**, kliknij **Download & Write** — pobiera ISO i nagrywa USB automatycznie

**Opcja B — Ręczne ISO + Rufus:**
1. Pobierz ISO z [fedoraproject.org/spins/kde](https://fedoraproject.org/spins/kde/) → kliknij **For x86_64**
2. Otwórz [Rufus](https://rufus.ie), wybierz USB i ISO, kliknij **START**

::: tip Fedora Media Writer oszczędza jeden krok
Pobiera najnowsze ISO i zapisuje je na USB za jednym razem — nie trzeba ręcznie zarządzać plikiem ISO.
:::

## Krok 2 — Uruchom z USB

1. Podłącz USB i uruchom ponownie komputer
2. Naciśnij klawisz menu rozruchowego podczas uruchamiania

| Producent | Klawisz menu rozruchowego |
|---|---|
| Lenovo | F12 |
| HP | F9 |
| Dell | F12 |
| ASUS | F8 |
| Acer | F12 |
| MSI | F11 |

3. Wybierz swój pendrive i wybierz **Start Fedora KDE Plasma Desktop Live**

::: info Secure Boot na Fedorze
W przeciwieństwie do innych dystrybucji, **Fedora w pełni obsługuje Secure Boot** — nie powinieneś musieć go wyłączać. Jeśli masz problemy z uruchamianiem, najpierw sprawdź, czy USB zostało poprawnie nagrane.
:::

## Krok 3 — Wypróbuj Fedora Live

Fedora uruchomi się w środowisku live KDE Plasma. Przetestuj sprzęt — Wi-Fi, dźwięk, wyświetlacz — przed instalacją. Gdy będziesz gotowy, kliknij dwukrotnie **Install to Hard Drive** na pulpicie lub znajdź to w programie uruchamiającym aplikacje.

::: warning Karta NVIDIA w sesji live
Fedora domyślnie dostarczana jest ze sterownikiem open-source Nouveau, który ma ograniczoną obsługę NVIDIA. Ekran może być zablokowany na niskiej rozdzielczości lub mieć słabą wydajność. To normalne — właściwe sterowniki NVIDIA zostaną zainstalowane po uruchomieniu systemu.
:::

## Krok 4 — Typ instalacji (instalator Anaconda)

Fedora używa instalatora o nazwie **Anaconda**. Główny ekran pokazuje wszystkie opcje naraz — elementy z ikoną ostrzeżenia ⚠️ muszą zostać uzupełnione przed kontynuowaniem.

### Opcja A: Zastąp wszystko (pełne przejście)

Kliknij **Installation Destination**, wybierz dysk, wybierz partycjonowanie **Automatic**, kliknij **Done**.

- ✅ Najprostsza opcja, zalecana dla większości użytkowników
- ✅ Cały dysk dostępny dla Fedory
- ❌ Wszystkie istniejące dane zostaną usunięte

::: danger Upewnij się, że masz kopię zapasową danych z Windows
Wybranie opcji Automatic na jedynym dysku usunie z niego wszystko. Sprawdź dwukrotnie, który dysk jest wybrany.
:::

### Opcja B: Zachowaj Windows (dual boot)

Kliknij **Installation Destination**, wybierz dysk, następnie wybierz partycjonowanie **Custom** i kliknij **Done**.

Na ekranie ręcznego partycjonowania:
1. Kliknij **Click here to create them automatically** jako punkt wyjścia
2. Sprawdź, czy partycja Windows (zazwyczaj `ntfs`) pojawia się na liście i **nie** jest oznaczona do formatowania
3. Dostosuj rozmiar partycji głównej Fedory (`/`) — zalecane **40 GB lub więcej**
4. Kliknij **Done** → **Accept Changes**

- ✅ Oba systemy dostępne przy starcie przez GRUB
- ⚠️ Wymaga co najmniej **40 GB** wolnego nieprzydzielonego miejsca

::: details Za mało wolnego miejsca na dual boot?
Najpierw zmniejsz partycję Windows:
1. W Windows naciśnij **Win + X** → **Zarządzanie dyskami**
2. Kliknij prawym przyciskiem myszy dysk C: → **Zmniejsz wolumin**
3. Wprowadź ilość w MB (np. `51200` dla 50 GB)
4. Kliknij **Zmniejsz** — zwolnione miejsce pojawi się jako „Nieprzydzielone"
5. W Anacondzie to miejsce będzie dostępne dla Fedory
:::

::: tip Dostęp do plików Windows z Fedory
Partycja Windows pojawi się w **Dolphin** (menedżer plików KDE). Możesz ją montować i przeglądać swobodnie. Pamiętaj, że jeśli Windows nie został zamknięty prawidłowo (np. włączone szybkie uruchamianie), partycja może być zamontowana tylko do odczytu jako środek bezpieczeństwa.

Aby wyłączyć szybkie uruchamianie Windows (zalecane przy dual boot):
**Panel sterowania → Opcje zasilania → Wybierz działanie przycisków zasilania → Włącz szybkie uruchamianie → odznacz**
:::

## Krok 5 — Zakończ instalator

1. **Klawiatura** — kliknij i ustaw układ
2. **Czas i data** — wybierz strefę czasową, włącz przełącznik **Network Time**
3. **Konto root** — pozostaw wyłączone (Fedora używa `sudo`)
4. **Tworzenie użytkownika** — zostanie wykonane po pierwszym uruchomieniu w Kreatorze konfiguracji
5. Kliknij **Begin Installation** → poczekaj **10–15 minut**

## Krok 6 — Pierwsze uruchomienie i Kreator konfiguracji

Po ponownym uruchomieniu Fedora KDE uruchamia krótki **Kreator konfiguracji**:

1. Połącz się z Wi-Fi
2. Ustaw preferencje prywatności
3. Utwórz konto użytkownika i hasło

Po zalogowaniu otwórz **Konsole** (terminal KDE) i natychmiast uruchom pełną aktualizację systemu:

```bash
sudo dnf upgrade --refresh -y
```

### Zainstaluj RPM Fusion (niezbędne do gier i multimediów)

Domyślne repozytoria Fedory nie zawierają oprogramowania własnościowego. **RPM Fusion** dodaje sterowniki NVIDIA, kodeki multimedialne, Steam i więcej:

```bash
sudo dnf install \
  https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
  https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### Zainstaluj sterowniki NVIDIA (jeśli dotyczy)

Po włączeniu RPM Fusion:

```bash
sudo dnf install akmod-nvidia
```

Po zakończeniu uruchom ponownie. Proces budowania trwa kilka minut — **nie restartuj od razu**, poczekaj aż terminal w pełni wróci do znaku zachęty.

::: warning NVIDIA na Fedorze — wymagana cierpliwość
Pakiet `akmod-nvidia` buduje moduł sterownika dla konkretnego jądra. Trwa to **2–5 minut** po instalacji. Jeśli zrestartujesz za wcześnie, uruchomisz się bez sterownika i pojawi się czarny ekran. Poczekaj aż terminal w pełni wróci do znaku zachęty.
:::

### Konfiguracja gier

1. Zainstaluj **Steam** z **Discover** (sklep KDE) lub przez terminal:
```bash
sudo dnf install steam
```
2. Otwórz Steam → **Ustawienia → Zgodność**
3. Włącz **Włącz Steam Play dla wszystkich tytułów**
4. Wybierz najnowszą wersję **Proton**

::: tip Najpierw sprawdź swoje gry
Przed przejściem sprawdź [ProtonDB](https://www.protondb.com), aby zobaczyć jak dobrze działają twoje gry. Większość tytułów AAA i popularnych gier działa świetnie na Fedorze — szczególnie z najnowszym jądrem i sterownikami Mesa/NVIDIA, które dostarcza.
:::

## Typowe problemy i rozwiązania

### Menu rozruchowe nie pokazuje GRUB po instalacji dual boot
Jeśli PC uruchamia się prosto do Windows:
1. Otwórz **CMD jako Administrator** w Windows
2. Uruchom: `bcdedit /set {bootmgr} path \EFI\fedora\grubx64.efi`
3. Uruchom ponownie — GRUB powinien teraz się pojawić

Lub wejdź do BIOS i ustaw **Fedora** jako pierwszy w kolejności rozruchu.

### Wi-Fi nie działa po instalacji
Najczęstszy problem z kartami Broadcom lub niektórymi Intel. Podłącz przez ethernet i uruchom:
```bash
sudo dnf install akmod-wl        # Broadcom
# lub
sudo dnf install iwlwifi-dkms    # niektóre karty Intel
```

### Czarny ekran po instalacji (NVIDIA, bez RPM Fusion)
W menu GRUB naciśnij **E**, znajdź linię `linux`, dodaj `nomodeset` przed `rhgb quiet`. Naciśnij **F10** aby uruchomić. Następnie włącz RPM Fusion i zainstaluj `akmod-nvidia` jak opisano powyżej.

### Problemy z Wayland i NVIDIA (rozrywanie obrazu, crashujące aplikacje)
W przeciwieństwie do Fedora GNOME (która jest teraz tylko Wayland), **Fedora KDE nadal obsługuje X11**. Na ekranie logowania kliknij selektor sesji w lewym dolnym rogu i wybierz **Plasma (X11)** zamiast **Plasma (Wayland)**.

### SELinux blokuje aplikację
Fedora używa SELinux do bezpieczeństwa, który sporadycznie blokuje aplikacje. Sprawdź alert SELinux w obszarze powiadomień i postępuj zgodnie z sugerowaną poprawką, lub tymczasowo ustaw tryb permisywny:
```bash
sudo setenforce 0
```
::: warning
Ustawienie SELinux w tryb permisywny zmniejsza bezpieczeństwo systemu. Rób to tylko w celach diagnostycznych — włącz ponownie po zakończeniu:
```bash
sudo setenforce 1
```
:::

### dnf wydaje się wolny podczas aktualizacji
Menedżer pakietów `dnf` Fedory sprawdza metadane przy każdym uruchomieniu. Przyspiesz go dodając to do `/etc/dnf/dnf.conf`:
```ini
max_parallel_downloads=10
fastestmirror=True
```

### Zegar pokazuje złą godzinę przy przełączaniu między Windows i Linuxem (dual boot)
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Partycja Windows zamontowana tylko do odczytu
Przyczyną jest szybkie uruchamianie Windows. W Windows:
**Panel sterowania → Opcje zasilania → Wybierz działanie przycisków zasilania → odznacz Włącz szybkie uruchamianie**

::: tip Gotowe! 🎉
Fedora KDE jest zainstalowana i gotowa. Przejdź na stronę [Alternatywy aplikacji](/linux/alternatives), aby znaleźć zamienniki dla swoich ulubionych aplikacji Windows.
:::
