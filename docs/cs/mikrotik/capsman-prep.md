---
title: Plánování frekvencí a kanálů
description: Praktický přehled, jak rozumně nastavit 2.4 GHz a 5 GHz pro CAPsMAN síť.
---

# Plánování frekvencí a kanálů

Správné plánování kanálů je u více AP zásadní. CAPsMAN sice umí část věcí řídit automaticky, ale u stabilní sítě je lepší mít jasný plán.

## Základní pravidla

- **2.4 GHz** používej hlavně pro dosah a kompatibilitu.
- **5 GHz** používej jako hlavní pásmo pro většinu klientů.
- Pokud to hardware podporuje, můžeš časem řešit i **6 GHz**.
- U více AP se snaž minimalizovat překryv kanálů.

## 2.4 GHz

Na 2.4 GHz je pásmo malé a silně rušené. V praxi se skoro vždy používá schéma **1 / 6 / 11**, protože jde o ne-překrývající se kanály v 20 MHz režimu.

Doporučení:
- používej **20 MHz**,
- drž se kanálů **1, 6, 11**,
- nešiř kanál zbytečně,
- počítej s tím, že při více AP je 2.4 GHz vždy kompromis.

## 5 GHz

Na 5 GHz je víc prostoru a méně rušení, takže je to obvykle hlavní pásmo pro klienty.

Dobrá praxe:
- používej **20 MHz** nebo **40 MHz** podle prostředí,
- **80 MHz** jen tam, kde to opravdu dává smysl,
- pokud nechceš řešit DFS, drž se non-DFS kanálů.

Typické non-DFS kanály jsou:
- **36 / 40 / 44 / 48**,
- **149 / 153 / 157 / 161 / 165**.

## DFS

DFS kanály mají smysl, když potřebuješ víc volného spektra a nevadí ti, že AP může po startu čekat na potvrzení kanálu. Pokud chceš jednoduchý a předvídatelný provoz, začni raději s non-DFS kanály.

## Praktický start

Pro většinu menších a běžných sítí začni takto:
- 2.4 GHz: **20 MHz**, kanály **1 / 6 / 11**,
- 5 GHz: **20 nebo 40 MHz**, non-DFS kanály,
- hlavní klienty tlač na 5 GHz,
- výkon nepřeháněj.
