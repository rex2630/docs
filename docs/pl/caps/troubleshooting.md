---
title: Troubleshooting CAPsMAN
description: Najczęstsze problemy podczas wdrażania CAPsMAN w RouterOS 7+ oraz szybkie kontrole, jak je rozwiązać.
---

# Troubleshooting

Większość problemów podczas wdrażania CAPsMAN wynika z discovery, reguł provisioning, VLAN-ów albo z użycia niewłaściwego stosu Wi‑Fi.

## 1. CAP nie łączy się z kontrolerem

Sprawdź:
- czy CAP jest w trybie CAP,
- czy ma poprawny adres IP i łączność,
- czy discovery interface jest ustawiony poprawnie,
- czy firewall nie blokuje komunikacji,
- czy kontroler i CAP używają tego samego systemu Wi‑Fi.

## 2. SSID się nie rozgłasza

Zwykle problem leży w regułach provisioning albo w konfiguracji radia.

Sprawdź:
- czy provisioning odpowiada pasmu,
- czy przypisana jest master configuration,
- czy radio rzeczywiście obsługuje dany band,
- czy konfiguracja jest aktywna i tworzona dynamicznie.

## 3. Klienci łączą się, ale nie dostają IP

To zazwyczaj oznacza problem z bridge, VLAN albo datapath.

Sprawdź:
- czy datapath wskazuje na właściwy bridge,
- czy bridge VLAN filtering jest ustawiony poprawnie,
- czy trunk port jest dozwolony,
- czy serwer DHCP działa w odpowiednim VLAN-ie.

## 4. Roaming działa słabo

Pomaga:
- jednolite SSID,
- takie samo zabezpieczenie,
- rozsądnie ustawione kanały,
- niezbyt wysoka moc nadawania,
- naturalne nakładanie się zasięgu.

## 5. VLAN nie działa

Sprawdź:
- tagged i untagged porty,
- bridge VLAN filtering,
- poprawny VLAN ID w datapath,
- management VLAN dla CAP.

## 6. Urządzenie nie chce wrócić pod CAPsMAN

Pomaga:
- reset do trybu CAP,
- usunięcie starej konfiguracji,
- ponowne ustawienie reguł discovery i provisioning.

## Checklist przed debugowaniem

Zanim zaczniesz szukać skomplikowanego problemu, sprawdź:
- czy kontroler i CAP działają na RouterOS 7+,
- czy używasz właściwego stosu Wi‑Fi,
- czy CAP jest w trybie CAP,
- czy discovery działa przez właściwy interfejs,
- czy provisioning pasuje do radia,
- czy datapath jest poprawnie podłączony,
- czy DHCP i firewall działają we właściwej sieci.
