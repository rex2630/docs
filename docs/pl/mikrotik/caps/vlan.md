---
title: VLAN-y i wiele SSID
description: Konfiguracja VLAN-ów, wielu SSID i management VLAN dla CAPsMAN w RouterOS 7+.
---

# VLAN-y i wiele SSID

Jeśli chcesz oddzielić ruch, użyj VLAN-ów. Najczęściej chodzi o sieć główną, sieć gościną, sieć IoT oraz VLAN zarządzający dla samych AP.

## Podstawowy projekt

Przykładowy prosty podział:
- VLAN 100 – zarządzanie AP i infrastruktura,
- VLAN 200 – główna sieć LAN,
- VLAN 300 – gościnne Wi‑Fi,
- VLAN 310 – Wi‑Fi dla IoT.

## Ważna uwaga

W aktualnym WiFi CAPsMAN zwykle używa się **local forwarding**. Oznacza to, że dane przechodzą przez CAP dalej do VLAN-u zgodnie z ustawionym datapath.

Z tego wynika:
- projekt VLAN musi mieć sens również po stronie CAP,
- porty trunk muszą być skonfigurowane poprawnie,
- bridge VLAN filtering musi być włączony tam, gdzie jest potrzebny.

## 1. Interfejsy VLAN na routerze

Na routerze utwórz interfejsy VLAN nad bridge:

```bash
/interface vlan
add interface=bridge1 name=vlan100-mgmt vlan-id=100
add interface=bridge1 name=vlan200-lan vlan-id=200
add interface=bridge1 name=vlan300-guest vlan-id=300
add interface=bridge1 name=vlan310-iot vlan-id=310
```

## 2. Bridge VLAN filtering

Na bridge włącz VLAN filtering:

```bash
/interface bridge
set bridge1 vlan-filtering=yes
```

Następnie uzupełnij tabelę VLAN zgodnie z topologią sieci.

## 3. Datapath dla SSID

Dla każdego SSID utwórz własny datapath:

```bash
/interface wifi datapath
add name=dp-lan vlan-id=200 bridge=bridge1
add name=dp-guest vlan-id=300 bridge=bridge1
add name=dp-iot vlan-id=310 bridge=bridge1
```

## 4. Konfiguracja SSID

Następnie utwórz konfiguracje dla poszczególnych sieci:

```bash
/interface wifi configuration
add name=cfg-lan ssid="MojaSiec" security=sec-main datapath=dp-lan
add name=cfg-guest ssid="MojaSiec-Guest" security=sec-guest datapath=dp-guest
add name=cfg-iot ssid="MojaSiec-IoT" security=sec-iot datapath=dp-iot
```

## 5. Profile security

Każde SSID może mieć własne zabezpieczenia:

```bash
/interface wifi security
add name=sec-main authentication-types=wpa2-psk,wpa3-psk passphrase="GlowneHaslo123"
add name=sec-guest authentication-types=wpa2-psk passphrase="GuestHaslo123"
add name=sec-iot authentication-types=wpa2-psk passphrase="IotHaslo123"
```

## 6. Provisioning dla wielu SSID

Provisioning może automatycznie tworzyć wiele interfejsów bezprzewodowych.

Przykład:

```bash
/interface wifi provisioning
add action=create-dynamic-enabled name=prov-main supported-bands=2ghz-n,5ghz-ac master-configuration=cfg-lan slave-configurations=cfg-guest,cfg-iot
```

## 7. Management VLAN dla CAP

Management VLAN jest bardzo zalecany. Oddziela zarządzanie AP od zwykłego ruchu użytkowników.

Podstawowa zasada:
- CAP dostaje adres management w osobnym VLAN-ie,
- przez ten VLAN łączy się z kontrolerem,
- przez niego działa zarządzanie i discovery.

## 8. Praktyczny model topologii

Dobry, działający model wygląda zwykle tak:
- router/kontroler w centrum,
- trunk do switchy,
- AP jako CAP przez trunk,
- oddzielona management VLAN,
- SSID mapowane do konkretnych VLAN-ów.

## 9. Najczęstsze błędy

- VLAN jest skonfigurowany tylko na kontrolerze, ale nie na CAP albo trunku.
- Bridge VLAN filtering jest wyłączony.
- Datapath nie wskazuje na właściwy VLAN.
- SSID zostało utworzone, ale nie jest poprawnie powiązane z provisioning.
- Management VLAN nie przepuszcza ruchu między CAP a kontrolerem.

## 10. Rekomendacja na start

Zacznij prosto:
- jedna VLAN dla LAN,
- jedna VLAN dla guest,
- jedna VLAN dla management,
- jedno SSID dla main i jedno dla guest,
- IoT dodaj dopiero po sprawdzeniu podstaw.
