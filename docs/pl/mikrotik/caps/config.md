---
title: Podstawowa konfiguracja CAPsMAN
description: Podstawowe ustawienie CAPsMAN w RouterOS 7+ obejmujące managera, security, datapath i provisioning.
---

# Podstawowa konfiguracja

Ta część pokazuje działającą podstawę CAPsMAN w RouterOS 7+ dla nowoczesnego stosu Wi‑Fi.

## 1. Włącz managera CAPsMAN

Na kontrolerze włącz CAPsMAN:

```bash
/interface wifi capsman
set enabled=yes
```

## 2. Utwórz profil security

Najpierw przygotuj profil bezpieczeństwa dla sieci Wi‑Fi:

```bash
/interface wifi security
add name=sec-main authentication-types=wpa2-psk,wpa3-psk passphrase="SilneHaslo123"
```

Jeśli chcesz lepszą kompatybilność, możesz zacząć tylko od WPA2-PSK.

## 3. Utwórz konfigurację

Następnie utwórz konfiguracje dla pasm:

```bash
/interface wifi configuration
add name=cfg-2ghz ssid="MojaSiec" country=Poland security=sec-main
add name=cfg-5ghz ssid="MojaSiec" country=Poland security=sec-main
```

## 4. Utwórz datapath

Datapath określa, dokąd ma trafiać ruch z Wi‑Fi.

Przykład dla zwykłego bridge:

```bash
/interface wifi datapath
add name=dp-main bridge=bridge1
```

## 5. Skonfiguruj provisioning

Provisioning mówi CAPsMAN-owi, jak ma przypisywać konfiguracje do poszczególnych radii.

Przykład:

```bash
/interface wifi provisioning
add action=create-dynamic-enabled name=prov-2ghz supported-bands=2ghz-n master-configuration=cfg-2ghz
add action=create-dynamic-enabled name=prov-5ghz supported-bands=5ghz-ac master-configuration=cfg-5ghz
```

## 6. Włącz tryb CAP na AP

Na urządzeniu CAP ustaw połączenie z kontrolerem:

```bash
/interface wifi cap
set enabled=yes caps-man-addresses=192.168.88.1 discovery-interfaces=bridge1
```

## 7. Co się stanie po połączeniu

Po podłączeniu CAP:
- kontroler przypisze mu konfigurację,
- powstaną dynamiczne interfejsy Wi‑Fi,
- AP zacznie nadawać SSID zgodnie z regułami provisioning,
- ruch będzie przechodził przez ustawiony datapath.

## 8. Podstawowa kontrola

Sprawdź:
- czy CAP jest widoczny w CAPsMAN,
- czy ma przypisane właściwe konfiguracje,
- czy nadaje SSID,
- czy klient dostaje adres IP,
- czy działa dostęp do sieci.
