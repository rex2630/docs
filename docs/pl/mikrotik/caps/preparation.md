---
title: Planowanie częstotliwości i kanałów
description: Praktyczny przegląd, jak rozsądnie ustawić 2.4 GHz i 5 GHz dla sieci CAPsMAN.
---

# Planowanie częstotliwości i kanałów

Prawidłowe planowanie kanałów jest kluczowe przy większej liczbie AP. CAPsMAN co prawda potrafi automatycznie sterować częścią ustawień, ale w stabilnej sieci lepiej mieć jasny plan.

## Podstawowe zasady

- **2.4 GHz** używaj głównie ze względu na zasięg i kompatybilność.
- **5 GHz** używaj jako głównego pasma dla większości klientów.
- Jeśli sprzęt to obsługuje, z czasem możesz uwzględnić też **6 GHz**.
- Przy większej liczbie AP staraj się minimalizować nakładanie się kanałów.

## 2.4 GHz

Na 2.4 GHz pasmo jest małe i silnie zakłócane. W praktyce prawie zawsze używa się układu **1 / 6 / 11**, ponieważ są to kanały niepokrywające się w trybie 20 MHz.

Zalecenia:
- używaj **20 MHz**,
- trzymaj się kanałów **1, 6, 11**,
- nie poszerzaj kanału bez potrzeby,
- licz się z tym, że przy wielu AP 2.4 GHz zawsze będzie kompromisem.

## 5 GHz

Na 5 GHz jest więcej miejsca i mniej zakłóceń, więc zwykle jest to główne pasmo dla klientów.

Dobra praktyka:
- używaj **20 MHz** lub **40 MHz** zależnie od środowiska,
- **80 MHz** tylko tam, gdzie naprawdę ma to sens,
- jeśli nie chcesz zajmować się DFS, trzymaj się kanałów non-DFS.

Typowe kanały non-DFS to:
- **36 / 40 / 44 / 48**,
- **149 / 153 / 157 / 161 / 165**.

## DFS

Kanały DFS mają sens, gdy potrzebujesz więcej wolnego spektrum i nie przeszkadza Ci to, że AP może po uruchomieniu czekać na potwierdzenie kanału. Jeśli chcesz prostego i przewidywalnego działania, zacznij raczej od kanałów non-DFS.

## Praktyczny start

Dla większości małych i typowych sieci zacznij tak:
- 2.4 GHz: **20 MHz**, kanały **1 / 6 / 11**,
- 5 GHz: **20 lub 40 MHz**, kanały non-DFS,
- głównych klientów kieruj na 5 GHz,
- nie przesadzaj z mocą nadawania.
