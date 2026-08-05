---
title: MikroTik CAPsMAN na RouterOS 7+
description: Úvodní rozcestník a přehled kompletního průvodce CAPsMAN v RouterOS 7+.
---

# MikroTik CAPsMAN na RouterOS 7+

Tento průvodce popisuje kompletní nastavení CAPsMAN v RouterOS 7+ pro moderní MikroTik Wi‑Fi zařízení. Je napsaný jednoduše, ale pokrývá všechny důležité technické kroky, které při nasazení potřebuješ.

> Dokument vychází z aktuálního WiFi CAPsMAN modelu v RouterOS 7+. Legacy CAPsMAN (`/caps-man`) je zmíněný jen tam, kde pomáhá pochopit rozdíl.

## Obsah

- [Plánování frekvencí a kanálů](./preparation.md)
- [Základní konfigurace](./config.md)
- [VLANy a více SSID](./vlan.md)
- [Řízený upgrade zařízení](./upgrade.md)
- [Troubleshooting](./troubleshooting.md)

## Co je CAPsMAN

CAPsMAN je systém pro centrální správu Wi‑Fi access pointů v síti MikroTik. Místo ručního nastavování každého AP zvlášť definuješ konfiguraci na jednom místě a ta se pak rozesílá na jednotlivé CAPy.

Použij ho hlavně tehdy, když:
- máš více access pointů,
- chceš stejné SSID a stejné bezpečnostní nastavení všude,
- potřebuješ VLAN segmentaci,
- chceš mít Wi‑Fi síť jednodušší na správu.

## Kdy CAPsMAN použít

CAPsMAN dává smysl, když chceš řídit Wi‑Fi z jednoho místa a mít jednotnou konfiguraci na více AP. Je vhodný pro domácí i firemní síť, kde řešíš roaming, více SSID nebo oddělení provozu do VLAN.

Naopak je často zbytečný, pokud máš jen jedno AP a nechceš centrální správu.

## Kompatibilita zařízení

Než začneš, ověř si:
- že controller i CAP zařízení běží na RouterOS 7+,
- že používají kompatibilní Wi‑Fi balíček,
- že mezi CAP a controllerem je konektivita,
- že víš, jestli používáš moderní WiFi stack, nebo starší wireless prostředí.

Ne všechna MikroTik zařízení se chovají stejně. Pokud mícháš různé modely nebo architektury, počítej s tím už při návrhu.
