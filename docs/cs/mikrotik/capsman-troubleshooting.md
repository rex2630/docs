---
title: Troubleshooting CAPsMAN
description: Nejčastější problémy při nasazení CAPsMAN v RouterOS 7+ a rychlé kontroly, jak je vyřešit.
---

# Troubleshooting

Většina problémů při nasazení CAPsMAN bývá v discovery, provisioning pravidlech, VLANách nebo v nesprávném Wi‑Fi stacku.

## 1. CAP se nepřipojí ke controlleru

Zkontroluj:
- jestli je CAP v CAP režimu,
- jestli má správnou IP a konektivitu,
- jestli je správně nastavený discovery interface,
- jestli firewall neblokuje komunikaci,
- jestli controller i CAP používají stejný Wi‑Fi systém.

## 2. SSID se nevysílá

Typicky je problém v provisioning pravidlech nebo v konfiguraci rádia.

Zkontroluj:
- zda provisioning odpovídá pásmu,
- zda je přiřazená master konfigurace,
- zda rádio opravdu podporuje daný band,
- zda je konfigurace aktivní a dynamicky vytvořená.

## 3. Klienti se připojí, ale nemají IP

To většinou znamená problém s bridge, VLAN nebo datapath.

Zkontroluj:
- zda datapath ukazuje na správný bridge,
- zda je bridge VLAN filtering nastavený správně,
- zda je trunk port povolený,
- zda DHCP server běží ve správné VLAN.

## 4. Roaming funguje špatně

Pomáhá:
- jednotné SSID,
- stejné zabezpečení,
- rozumné kanály,
- nepřehnaný výkon,
- přirozený překryv signálu.

## 5. VLAN nefunguje

Zkontroluj:
- tagged a untagged porty,
- bridge VLAN filtering,
- správné VLAN ID v datapathu,
- management VLAN pro CAP.

## 6. Zařízení nechce zpět pod CAPsMAN

Pomůže:
- reset do CAP režimu,
- odstranění staré konfigurace,
- znovunastavení discovery a provisioning pravidel.

## Checklist před laděním

Než začneš hledat složitý problém, ověř:
- controller i CAP jsou na RouterOS 7+,
- používáš správný Wi‑Fi stack,
- CAP je v CAP režimu,
- discovery funguje přes správné rozhraní,
- provisioning odpovídá rádiu,
- datapath je napojený správně,
- DHCP a firewall fungují ve správné síti.
