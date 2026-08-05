# CAPsMAN řízený upgrade zařízení

Tento návod popisuje jednoduchý a bezpečný postup, jak hromadně nebo řízeně aktualizovat MikroTik zařízení spravovaná přes CAPsMAN. Cílem je minimalizovat výpadky, zachovat kontrolu nad pořadím a mít možnost rychle ověřit stav každého zařízení po upgradu.

## Kdy se to hodí

Tento postup je vhodný, když:

- spravuješ více CAP zařízení z jednoho centra,
- chceš upgrade provádět postupně, ne naráz,
- potřebuješ mít jistotu, že po aktualizaci zařízení znovu naběhne a připojí se ke CAPsMAN,
- chceš předem ověřit verze firmware i RouterOS.

## Co budeš potřebovat

- MikroTik router s CAPsMAN nebo WiFi managementem.
- Přístup do CLI přes WinBox, SSH nebo terminál v RouterOS.
- Seznam zařízení, která chceš upgradovat.
- Dostatek času na kontrolu každého kroku.

## Doporučený postup

### 1. Zjisti aktuální stav

Než začneš cokoliv měnit, podívej se na verze RouterOS a firmware na controlleru i na CAP zařízeních.

```routeros
/system resource print
/system package print
/interface wireless cap print
```

Pokud používáš novější WiFi stack nebo CAPsMAN verzi, zkontroluj i příslušné WiFi konfigurace a stav provisioning pravidel.

### 2. Zálohuj konfiguraci

Před upgradem si ulož zálohu konfigurace.

```routeros
/export file=before-capsman-upgrade
/system backup save name=before-capsman-upgrade
```

Ulož si i export do externího úložiště, pokud máš možnost. To je užitečné hlavně tehdy, když upgraduješ více zařízení najednou.

### 3. Otestuj jeden kus

Nikdy nezačínej hromadně. Vyber jedno zařízení, které je nejméně kritické, a proveď nejdřív upgrade tam.

Důležité je sledovat:

- jestli se zařízení po rebootu přihlásí zpět,
- jestli CAPsMAN znovu nabídne správný profil,
- jestli běží SSID a klienti se připojují,
- jestli se neztratí provisioning.

### 4. Naplánuj pořadí

Ideálně upgraduj zařízení v tomto pořadí:

1. nejdřív controller,
2. pak nejdůležitější CAPy s dohledem,
3. nakonec méně důležitá nebo vzdálená zařízení.

Pokud máš více AP v jedné lokalitě, nech vždy aspoň jedno funkční zařízení jako rezervu.

### 5. Proveď upgrade RouterOS

Na RouterOS obvykle použiješ běžný update balíčků.

```routeros
/system package update check-for-updates
/system package update install
```

Po instalaci se zařízení rebootuje.

```routeros
/system reboot
```

Po restartu znovu ověř stav.

### 6. Aktualizuj firmware po RouterOS

Po aktualizaci RouterOS často dává smysl dorovnat i firmware.

```routeros
/system routerboard print
/system routerboard upgrade
/system reboot
```

U některých zařízení je potřeba rebootovat ještě jednou, aby se firmware skutečně aplikoval.

### 7. Ověř CAPsMAN připojení

Po upgradu zkontroluj, že CAPy jsou zpět online a CAPsMAN je vidí.

```routeros
/interface wireless registration-table print
/interface wireless cap print
```

Pokud používáš CAPsMAN v nové architektuře WiFi, zkontroluj odpovídající sekce pro WiFi provisioning a konfigurace.

## Bezpečný řízený upgrade

Pokud nechceš, aby se všechno aktualizovalo najednou, dělej upgrade postupně ručně po jednom zařízení.

Příklad doporučeného workflow:

1. vypnout nebo odpojit jedno CAP zařízení,
2. provést upgrade,
3. nechat ho naběhnout,
4. ověřit připojení ke controlleru,
5. pokračovat dalším kusem.

Tímto způsobem se vyhneš situaci, kdy se po hromadném restartu všechno rozbije najednou.

## Co zkontrolovat po upgradu

Po každém zařízení zkontroluj:

- verzi RouterOS,
- verzi firmware,
- stav CAP připojení,
- SSID a připojené klienty,
- logy na chyby.

```routeros
/log print
/interface wireless print
/ip neighbor print
```

## Když se zařízení nepřipojí zpět

Když se CAP po upgradu nevrátí do CAPsMAN:

- ověř IP konektivitu,
- zkontroluj konfiguraci CAP režimu,
- podívej se do logu,
- zkontroluj, jestli se nezměnila WiFi/CAPsMAN konfigurace po update,
- případně vrať zálohu.

Nejčastější problém bývá nesoulad mezi starou konfigurací a novou verzí RouterOS nebo WiFi balíčků.

## Doporučení z praxe

- Neupgraduj všechna zařízení najednou.
- Zálohuj před každým větším zásahem.
- Po každém upgradu ověř funkčnost ručně.
- Měj připravený přístup na konzoli nebo přes LAN.
- Pokud jde o produkční síť, dělej upgrade mimo špičku.

## Shrnutí

Řízený upgrade CAPsMAN zařízení je hlavně o pořadí, záloze a průběžné kontrole. Když půjdeš po jednom zařízení a po každém kroku ověříš stav, výrazně snížíš riziko výpadku celé WiFi sítě.
