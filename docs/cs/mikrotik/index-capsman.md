---
title: MikroTik CAPsMAN na RouterOS 7+
description: Komplexní průvodce pro nastavení CAPsMAN v RouterOS 7+, včetně architektury, kompatibility a plánování Wi-Fi
---

# MikroTik CAPsMAN na RouterOS 7+

Tento průvodce je zaměřený na **aktuální CAPsMAN v RouterOS 7+** a na moderní MikroTik Wi‑Fi zařízení. Cílem je pokrýt nejen základní zapnutí a připojení AP, ale i architekturu, kompatibilitu, plánování frekvencí, VLANy, více SSID a troubleshooting.

> Tento dokument vychází z aktuálního MikroTik WiFi CAPsMAN modelu pro RouterOS 7+. Legacy CAPsMAN (`/caps-man`) je zde zmíněn jen okrajově, pokud je to potřeba pro pochopení rozdílů.

## Obsah

- [Co je CAPsMAN](#co-je-capsman)
- [Legacy vs. aktuální WiFi CAPsMAN](#legacy-vs-aktuální-wifi-capsman)
- [Kdy CAPsMAN použít](#kdy-capsman-použít)
- [Kompatibilita zařízení](#kompatibilita-zařízení)
- [Základní architektura](#základní-architektura)
- [Jak přemýšlet o Wi-Fi návrhu](#jak-přemýšlet-o-wi-fi-návrhu)
- [Co bude v dalších částech](#co-bude-v-dalších-částech)

## Co je CAPsMAN

CAPsMAN je systém pro **centrální správu Wi-Fi access pointů** v síti MikroTik. Místo toho, aby se každý AP nastavoval zvlášť, definují se profily, pravidla a konfigurace na jednom místě a ty se pak automaticky rozesílají na jednotlivé CAP zařízení.

To je užitečné hlavně tehdy, když máš:
- více access pointů,
- více SSID,
- VLAN segmentaci,
- požadavek na jednotnou konfiguraci,
- potřebu snadné správy a změn.

## Legacy vs. aktuální WiFi CAPsMAN

V MikroTiku existují dva hlavní přístupy:

### Legacy CAPsMAN
- používá starší menu `/caps-man`,
- je navázaný na starší wireless stack,
- hodí se pro starší zařízení a starší konfigurace,
- není to směr, na který bych dnes stavěl novou dokumentaci.

### Aktuální WiFi CAPsMAN
- používá moderní WiFi balíčky a nové menu,
- je určený pro RouterOS 7+,
- lépe odpovídá současnému směřování MikroTiku,
- je vhodný pro moderní AP a nové instalace.

Pro tento guide budeme primárně používat **aktuální WiFi CAPsMAN v RouterOS 7+**.

## Kdy CAPsMAN použít

CAPsMAN dává největší smysl, když chceš:

- spravovat více AP z jednoho místa,
- mít stejná SSID a bezpečnostní profily na všech bodech,
- jednoduše rozdělit síť na více segmentů,
- řešit roaming mezi AP,
- mít konzistentní konfiguraci i po výměně hardware.

Naopak může být zbytečný, pokud:
- máš jen jeden AP a nepotřebuješ centrální správu,
- chceš úplně minimalistickou síť bez složitější správy,
- používáš hardware nebo scénář, kde CAPsMAN nepřináší praktickou výhodu.

## Kompatibilita zařízení

Důležité je rozlišovat, na jakém Wi-Fi stacku zařízení běží. U RouterOS 7+ se dnes nejčastěji řeší moderní WiFi balíčky, ale v praxi můžeš narazit i na starší konfigurace nebo zařízení se starším wireless prostředím.

Obecně je dobré si před návrhem ověřit:
- jestli zařízení umí fungovat jako CAP,
- jestli podporuje aktuální WiFi CAPsMAN,
- jaký používá Wi-Fi balíček,
- zda je možné provozovat více typů zařízení v jedné správě,
- zda všechny AP podporují stejné režimy, pásma a šířky kanálů.

Ne všechny MikroTik modely se chovají stejně. U některých zařízení budeš mít moderní Wi‑Fi stack s lepší podporou, u jiných starší možnosti, které mohou omezit roaming, 5 GHz konfiguraci nebo některé advanced funkce.

## Základní architektura

Typická CAPsMAN topologie vypadá takto:

- jeden router nebo zařízení funguje jako **CAPsMAN controller**,
- ostatní routery nebo AP fungují jako **CAP**,
- controller drží konfiguraci, profily a provisioning pravidla,
- CAP se po připojení zaregistruje a převezme nastavení.

V ideálním návrhu je controller dostupný v síti spolehlivě a CAP zařízení se k němu umí připojit přes:
- L2 discovery,
- DHCP option,
- nebo jiné formy discovery podle konfigurace.

Pokud máš management VLAN nebo oddělenou správní síť, je potřeba tomu přizpůsobit i discovery a routování.

## Jak přemýšlet o Wi-Fi návrhu

Před samotnou konfigurací je dobré ujasnit si několik věcí:

### 1. Kolik pásiem budeš používat
- 2.4 GHz: lepší dosah, horší rušení, menší kapacita.
- 5 GHz: vyšší výkon a kapacita, menší dosah.
- 6 GHz: pokud ho tvoje hardware podporuje, může být velmi zajímavé, ale vyžaduje kompatibilní zařízení.

### 2. Jak budeš dělit frekvence
- nechceš, aby sousední AP používala stejný kanál,
- chceš minimalizovat překryv,
- chceš rozumnou šířku kanálu podle prostředí.

### 3. Jak bude fungovat roaming
- jednotné SSID a bezpečnost na všech AP,
- podobná síla signálu,
- rozumně nastavený výkon,
- žádné zbytečné rušení mezi AP.

### 4. Jak rozdělíš sítě
- hlavní síť,
- guest síť,
- IoT síť,
- management síť pro samotná zařízení.

## Co bude v dalších částech

V dalších částech pokryjeme:

1. **Plánování frekvencí a kanálů**  
   Jak rozumně rozdělit 2.4 GHz a 5 GHz, jak přemýšlet o šířce kanálů a jak se vyhnout rušení.

2. **Kompletní základní konfiguraci**  
   Jak nastavit CAPsMAN manager, profily, security, datapath a provisioning.

3. **Více SSID a VLANy**  
   Jak oddělit guest, IoT a management provoz.

4. **Troubleshooting**  
   Co dělat, když se CAP nepřipojí, SSID se nezobrazí nebo roaming nefunguje dobře.
