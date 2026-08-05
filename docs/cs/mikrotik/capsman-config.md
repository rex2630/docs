## Základní konfigurace CAPsMAN

Tato část ukazuje základní nastavení CAPsMAN v RouterOS 7+ pro moderní WiFi stack. Cílem je vytvořit funkční základ, na kterém pak můžeš stavět více SSID, VLANy a další pravidla.

### Předpoklady

Než začneš:
- controller i CAP zařízení musí být na RouterOS 7+,
- zařízení musí používat kompatibilní WiFi balíček,
- mezi CAP a controllerem musí být konektivita,
- čas na zařízeních by měl být správně nastavený,
- je dobré mít připravený management bridge nebo VLAN.

### 1. Zapnutí CAPsMAN managera

Na controlleru zapni CAPsMAN:

```bash
/interface wifi capsman
set enabled=yes
```

V některých scénářích můžeš chtít nastavit i certifikát nebo upgrade politiku, ale pro první funkční konfiguraci je důležité hlavně samotné zapnutí managera.

### 2. Vytvoření security profilu

Nejdřív si vytvoř bezpečnostní profil pro Wi-Fi síť:

```bash
/interface wifi security
add name=sec-main authentication-types=wpa2-psk,wpa3-psk passphrase="SilneHeslo123"
```

Pokud chceš vyšší kompatibilitu, můžeš začít jen s WPA2-PSK. Pokud máš moderní klienty, je vhodné přidat i WPA3.

### 3. Vytvoření konfigurace

Pak vytvoř základní konfiguraci pro jednotlivá pásma:

```bash
/interface wifi configuration
add name=cfg-2ghz ssid="MojeSit" country=CzechRepublic security=sec-main
add name=cfg-5ghz ssid="MojeSit" country=CzechRepublic security=sec-main
```

Pokud chceš zvlášť identifikovat 2.4 a 5 GHz, můžeš použít i různé názvy SSID, ale pro roaming bývá jednodušší držet jedno SSID na obou pásmech.

### 4. Vytvoření datapathu

Datapath určuje, kam se provoz z Wi-Fi posílá. V jednodušším scénáři se provoz připojí do bridge na controlleru nebo do VLAN podle návrhu sítě.

Příklad pro běžný bridge:

```bash
/interface wifi datapath
add name=dp-main bridge=bridge1
```

Pokud používáš VLANy, datapath bude navázaný na konkrétní VLAN design a často bude součástí další části dokumentace.

### 5. Provisioning pravidla

Provisioning řekne CAPsMANu, jak má přiřazovat konfigurace jednotlivým rádiím.

Příklad pro 2.4 GHz a 5 GHz:

```bash
/interface wifi provisioning
add action=create-dynamic-enabled name=prov-2ghz supported-bands=2ghz-n master-configuration=cfg-2ghz
add action=create-dynamic-enabled name=prov-5ghz supported-bands=5ghz-ac master-configuration=cfg-5ghz
```

Pokud tvoje zařízení podporují AX, budeš chtít přizpůsobit `supported-bands` podle konkrétního hardware.

### 6. Zapnutí CAP režimu na AP

Na CAP zařízení nastav, aby se připojilo ke controlleru:

```bash
/interface wifi cap
set enabled=yes caps-man-addresses=192.168.88.1 discovery-interfaces=bridge1
```

Hodnota `caps-man-addresses` může být IP controlleru. `discovery-interfaces` použij tam, kde chceš, aby AP hledal controller na konkrétním rozhraní nebo bridge.

### 7. Co se stane po připojení

Jakmile se CAP připojí:
- controller mu přiřadí konfiguraci,
- vzniknou dynamické Wi-Fi rozhraní,
- AP začne vysílat SSID podle provisioning pravidel,
- provoz se bude směrovat podle datapathu.

### 8. Základní kontrola

Zkontroluj:
- zda je CAP vidět v CAPsMAN,
- zda jsou přidělené správné konfigurace,
- zda se vysílá SSID,
- zda klient dostane IP adresu,
- zda funguje přístup k internetu.

### 9. Nejčastější problémy v této fázi

- CAP se nepřipojí ke controlleru.
- SSID se nevysílá, protože provisioning pravidlo neodpovídá rádiu.
- Klienti se připojí, ale nedostanou IP.
- Datapath není správně napojený na bridge nebo VLAN.
- Controller a CAP jsou na různých sítích bez správného routingu nebo discovery.

### 10. Doporučený startovní model

Pro první funkční verzi doporučuji:
- jedno SSID,
- jedno heslo,
- 2.4 GHz a 5 GHz odděleně jen na úrovni provisioning,
- bez VLANů,
- bez složitých filtrů,
- s jednoduchým bridge datapathem.

Až to poběží, přidáš VLANy, guest síť a pokročilé řízení frekvencí.
