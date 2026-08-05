---
title: VLANy a více SSID
description: Nastavení VLAN, více SSID a management VLAN pro CAPsMAN v RouterOS 7+.
---

# VLANy a více SSID

Pokud chceš oddělit provoz, použij VLANy. Typicky jde o hlavní síť, guest síť, IoT síť a management VLAN pro samotná AP.

## Základní návrh

Příklad jednoduchého rozdělení:
- VLAN 100 – management AP a infrastruktura,
- VLAN 200 – hlavní LAN,
- VLAN 300 – guest Wi‑Fi,
- VLAN 310 – IoT Wi‑Fi.

## Důležitá poznámka

U aktuálního WiFi CAPsMAN se běžně používá **local forwarding**. To znamená, že data jdou přes CAP dál do VLAN podle nastaveného datapathu.

Z toho plyne:
- VLAN návrh musí dávat smysl i na CAP straně,
- trunk porty musí být správně nastavené,
- bridge VLAN filtering musí být zapnutý tam, kde je potřeba.

## 1. VLAN rozhraní na routeru

Na routeru vytvoř VLAN rozhraní nad bridge:

```bash
/interface vlan
add interface=bridge1 name=vlan100-mgmt vlan-id=100
add interface=bridge1 name=vlan200-lan vlan-id=200
add interface=bridge1 name=vlan300-guest vlan-id=300
add interface=bridge1 name=vlan310-iot vlan-id=310
```

## 2. Bridge VLAN filtering

Na bridge nastav VLAN filtering:

```bash
/interface bridge
set bridge1 vlan-filtering=yes
```

Pak doplň VLAN tabulku podle topologie sítě.

## 3. Datapath pro SSID

Pro každé SSID si vytvoř datapath:

```bash
/interface wifi datapath
add name=dp-lan vlan-id=200 bridge=bridge1
add name=dp-guest vlan-id=300 bridge=bridge1
add name=dp-iot vlan-id=310 bridge=bridge1
```

## 4. Konfigurace SSID

Pak vytvoř konfigurace pro jednotlivé sítě:

```bash
/interface wifi configuration
add name=cfg-lan ssid="MojeSit" security=sec-main datapath=dp-lan
add name=cfg-guest ssid="MojeSit-Guest" security=sec-guest datapath=dp-guest
add name=cfg-iot ssid="MojeSit-IoT" security=sec-iot datapath=dp-iot
```

## 5. Security profily

Každé SSID může mít vlastní zabezpečení:

```bash
/interface wifi security
add name=sec-main authentication-types=wpa2-psk,wpa3-psk passphrase="HlavniHeslo123"
add name=sec-guest authentication-types=wpa2-psk passphrase="GuestHeslo123"
add name=sec-iot authentication-types=wpa2-psk passphrase="IotHeslo123"
```

## 6. Provisioning pro více SSID

Provisioning může vytvářet více bezdrátových rozhraní automaticky.

Příklad:

```bash
/interface wifi provisioning
add action=create-dynamic-enabled name=prov-main supported-bands=2ghz-n,5ghz-ac master-configuration=cfg-lan slave-configurations=cfg-guest,cfg-iot
```

## 7. Management VLAN pro CAP

Management VLAN je velmi doporučená. Oddělí správu AP od běžného uživatelského provozu.

Základní princip:
- CAP dostane management IP v samostatné VLAN,
- přes tuto VLAN se připojuje k controlleru,
- přes ni běží správa i discovery.

## 8. Praktický model topologie

Dobře fungující model bývá:
- router/controller uprostřed,
- trunk do switchů,
- AP jako CAP přes trunk,
- management VLAN oddělená,
- SSID mapovaná do konkrétních VLAN.

## 9. Nejčastější chyby

- VLAN je nastavená jen na controlleru, ale ne na CAP nebo trunku.
- Bridge VLAN filtering je vypnutý.
- Datapath neukazuje na správnou VLAN.
- SSID je vytvořené, ale není správně provázané s provisioningem.
- Management VLAN nepropouští provoz mezi CAP a controllerem.

## 10. Doporučení pro start

Začni jednoduše:
- jedna LAN VLAN,
- jedna guest VLAN,
- jedna management VLAN,
- jedno SSID pro main a jedno pro guest,
- IoT přidej až po ověření základu.
