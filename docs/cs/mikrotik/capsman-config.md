---
title: Základní konfigurace CAPsMAN
description: Základní nastavení CAPsMAN v RouterOS 7+ včetně managera, security, datapathu a provisioning.
---

# Základní konfigurace

Tahle část ukazuje funkční základ CAPsMAN v RouterOS 7+ pro moderní WiFi stack.

## 1. Zapni CAPsMAN managera

Na controlleru zapni CAPsMAN:

```bash
/interface wifi capsman
set enabled=yes
```

## 2. Vytvoř security profil

Nejdřív si připrav bezpečnostní profil pro Wi‑Fi síť:

```bash
/interface wifi security
add name=sec-main authentication-types=wpa2-psk,wpa3-psk passphrase="SilneHeslo123"
```

Pokud chceš vyšší kompatibilitu, můžeš začít jen s WPA2-PSK.

## 3. Vytvoř konfiguraci

Pak vytvoř konfiguraci pro pásma:

```bash
/interface wifi configuration
add name=cfg-2ghz ssid="MojeSit" country=CzechRepublic security=sec-main
add name=cfg-5ghz ssid="MojeSit" country=CzechRepublic security=sec-main
```

## 4. Vytvoř datapath

Datapath určuje, kam se provoz z Wi‑Fi posílá.

Příklad pro běžný bridge:

```bash
/interface wifi datapath
add name=dp-main bridge=bridge1
```

## 5. Nastav provisioning

Provisioning říká CAPsMANu, jak má přiřadit konfigurace jednotlivým rádiím.

Příklad:

```bash
/interface wifi provisioning
add action=create-dynamic-enabled name=prov-2ghz supported-bands=2ghz-n master-configuration=cfg-2ghz
add action=create-dynamic-enabled name=prov-5ghz supported-bands=5ghz-ac master-configuration=cfg-5ghz
```

## 6. Zapni CAP režim na AP

Na CAP zařízení nastav připojení ke controlleru:

```bash
/interface wifi cap
set enabled=yes caps-man-addresses=192.168.88.1 discovery-interfaces=bridge1
```

## 7. Co se stane po připojení

Po připojení CAP:
- controller mu přiřadí konfiguraci,
- vzniknou dynamická Wi‑Fi rozhraní,
- AP začne vysílat SSID podle provisioning pravidel,
- provoz půjde přes nastavený datapath.

## 8. Základní kontrola

Ověř si:
- že je CAP vidět v CAPsMAN,
- že má přidělené správné konfigurace,
- že vysílá SSID,
- že klient dostane IP adresu,
- že funguje přístup do sítě.
