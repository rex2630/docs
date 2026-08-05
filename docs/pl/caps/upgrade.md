# CAPsMAN zarządzany upgrade urządzeń

Ta procedura służy do zbiorczej aktualizacji urządzeń MikroTik CAP zarządzanych przez CAPsMAN. Celem jest doprowadzenie wszystkich urządzeń CAP do tej samej wersji RouterOS przy jak najmniejszym wpływie na działanie sieci.

## Kiedy ta procedura ma sens

Użyj jej, gdy:

- zarządzasz wieloma urządzeniami CAP z jednego kontrolera CAPsMAN,
- chcesz przeprowadzić upgrade centralnie,
- potrzebujesz kontroli nad wersjami RouterOS,
- nie chcesz aktualizować każdego AP ręcznie.

## Co jest potrzebne

- Kontroler MikroTik CAPsMAN.
- Dostęp do CLI przez WinBox, SSH lub terminal.
- Odpowiednie pakiety RouterOS `.npk` dla wszystkich urządzeń w sieci.
- Kopia zapasowa konfiguracji.
- Krótkie okno serwisowe, ponieważ urządzenia podczas aktualizacji restartują się.

## Przygotowanie

Zanim zaczniesz, sprawdź:

- wersję RouterOS na kontrolerze,
- wersję RouterOS na urządzeniach CAP,
- architekturę poszczególnych urządzeń,
- stan reguł provisioning CAPsMAN.

Wykonaj kopię konfiguracji:

```routeros
/export file=before-capsman-upgrade
/system backup save name=before-capsman-upgrade
```

## Procedura upgrade

### 1. Wgraj pakiety na CAPsMAN

Na kontroler CAPsMAN wgraj pakiety RouterOS do osobnego katalogu, na przykład `/upgrade`.

Ważne jest, aby znajdowały się tam właściwe pakiety dla wszystkich urządzeń, które chcesz zaktualizować.

### 2. Ustaw ścieżkę do pakietów

Na CAPsMAN ustaw `package-path` na katalog, w którym znajdują się pakiety aktualizacji.

```routeros
/caps-man manager set package-path=/upgrade
```

### 3. Ustaw politykę upgrade

Wybierz, jak restrykcyjnie CAPsMAN ma kontrolować wersje:

- `suggest-same-version` — CAP spróbuje się zaktualizować.
- `require-same-version` — CAP musi mieć tę samą wersję, inaczej nie połączy się.
- `none` — CAPsMAN nie zajmuje się aktualizacją.

Przykład:

```routeros
/caps-man manager set package-path=/upgrade upgrade-policy=suggest-same-version
```

### 4. Pozwól CAP-om połączyć się ponownie

Po wprowadzeniu ustawień CAP-y po reconnectcie zaktualizują się i zrestartują. Następnie połączą się ponownie z kontrolerem.

### 5. Sprawdź stan

Po aktualizacji zweryfikuj:

```routeros
/system resource print
/system package print
/log print
```

Zwróć uwagę przede wszystkim na:

- wersję RouterOS,
- stan połączenia CAP,
- błędy w logu,
- dostępność Wi‑Fi i klientów.

## Bezpieczniejsza metoda

Najlepiej nie aktualizować wszystkiego naraz. Zalecany sposób to:

1. kontroler,
2. jeden testowy CAP,
3. kolejne CAP-y w mniejszych grupach.

Dzięki temu zmniejszasz ryzyko, że po aktualizacji coś przestanie działać w całej sieci.

## Gdy CAP nie łączy się ponownie

Jeśli któreś urządzenie nie wróci po aktualizacji:

- sprawdź łączność IP,
- zajrzyj do logów,
- zweryfikuj poprawność `package-path`,
- sprawdź, czy masz właściwy pakiet dla danej architektury,
- spróbuj zmniejszyć restrykcyjność `upgrade-policy`.

Najczęstszy problem to brakujący albo nieprawidłowy pakiet `.npk`.

## Firmware po aktualizacji

Po aktualizacji RouterOS często warto też sprawdzić firmware routerboarda:

```routeros
/system routerboard print
/system routerboard upgrade
/system reboot
```

W niektórych urządzeniach może być potrzebny jeszcze jeden restart.

## Podsumowanie

Zbiorczy upgrade przez CAPsMAN działa najlepiej, gdy:

- masz właściwe pakiety,
- ustawisz poprawny `package-path`,
- wybierzesz odpowiednią `upgrade-policy`,
- sprawdzisz stan po każdym kroku.

Najbezpieczniej jest działać małymi grupami i mieć przygotowaną kopię zapasową.
