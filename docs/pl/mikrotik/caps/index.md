---
title: MikroTik CAPsMAN na RouterOS 7+
description: Wprowadzenie i przegląd kompletnego przewodnika po CAPsMAN w RouterOS 7+.
---

# MikroTik CAPsMAN na RouterOS 7+

Ten przewodnik opisuje pełną konfigurację CAPsMAN w RouterOS 7+ dla nowoczesnych urządzeń MikroTik Wi‑Fi. Jest napisany prosto, ale obejmuje wszystkie ważne kroki techniczne, które są potrzebne podczas wdrożenia.

> Dokument opiera się na aktualnym modelu WiFi CAPsMAN w RouterOS 7+. Legacy CAPsMAN (`/caps-man`) jest wspomniany tylko tam, gdzie pomaga zrozumieć różnice.

## Spis treści

- [Planowanie częstotliwości i kanałów](./preparation.md)
- [Podstawowa konfiguracja](./config.md)
- [VLAN-y i wiele SSID](./vlan.md)
- [Kontrolowany upgrade urządzeń](./upgrade.md)
- [Troubleshooting](./troubleshooting.md)

## Czym jest CAPsMAN

CAPsMAN to system centralnego zarządzania punktami dostępowymi Wi‑Fi w sieci MikroTik. Zamiast konfigurować każde AP osobno, definiujesz ustawienia w jednym miejscu, a następnie są one rozsyłane do poszczególnych CAP-ów.

Używaj go przede wszystkim wtedy, gdy:
- masz więcej niż jeden access point,
- chcesz wszędzie takie samo SSID i takie same ustawienia bezpieczeństwa,
- potrzebujesz segmentacji VLAN,
- chcesz uprościć zarządzanie siecią Wi‑Fi.

## Kiedy używać CAPsMAN

CAPsMAN ma sens, gdy chcesz zarządzać Wi‑Fi z jednego miejsca i mieć spójną konfigurację na wielu AP. Jest dobrym wyborem dla sieci domowych i firmowych, gdzie liczy się roaming, wiele SSID albo rozdzielenie ruchu do VLAN-ów.

Z drugiej strony jest często zbędny, jeśli masz tylko jeden AP i nie potrzebujesz centralnego zarządzania.

## Zgodność urządzeń

Zanim zaczniesz, sprawdź:
- czy kontroler i urządzenia CAP działają na RouterOS 7+,
- czy używają kompatybilnego pakietu Wi‑Fi,
- czy między CAP a kontrolerem jest łączność,
- czy wiesz, czy używasz nowoczesnego stosu WiFi, czy starszego środowiska wireless.

Nie wszystkie urządzenia MikroTik zachowują się tak samo. Jeśli mieszasz różne modele lub architektury, uwzględnij to już na etapie projektu.
