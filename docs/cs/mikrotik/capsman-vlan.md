## VLANy, více SSID a management VLAN

Tahle část pokrývá praktický návrh sítě, kde máš více SSID a chceš oddělit provoz do různých VLAN. Typicky jde o hlavní síť, guest síť, IoT síť a management síť pro samotné AP.

### Proč VLANy používat

VLANy jsou vhodné tehdy, když chceš:
- oddělit hosty od interní sítě,
- oddělit IoT zařízení,
- dát Wi‑Fi AP vlastní management segment,
- mít čistou a lépe spravovatelnou topologii.

### Základní návrh

Typický příklad může vypadat takto:
- VLAN 100 – management AP a infrastruktura
- VLAN 200 – hlavní LAN
- VLAN 300 – guest Wi‑Fi
- VLAN 310 – IoT Wi‑Fi

Takový návrh je přehledný a dobře se rozšiřuje.

### Důležitá poznámka k RouterOS 7+

U aktuálního WiFi CAPsMAN je důležité počítat s tím, že se běžně používá **local forwarding**. To znamená, že data jdou přes CAP a dál do VLAN podle nastavení datapathu, místo aby je controller centrálně přeposílal.

To má několik důsledků:
- VLAN návrh musí dávat smysl i na CAP straně,
- trunk porty a bridge VLAN filtering musí být správně nastavené,
- controller většinou jen řídí konfiguraci, ne data samotná.

### 1. Vytvoření VLAN rozhraní na routeru

Na routeru si vytvoř VLAN rozhraní nad bridge:

```bash
/interface vlan
add interface=bridge1 name=vlan100-mgmt vlan-id=100
add interface=bridge1 name=vlan200-lan vlan-id=200
add interface=bridge1 name=vlan300-guest vlan-id=300
add interface=bridge1 name=vlan310-iot vlan-id=310
```

Tato VLAN rozhraní pak můžeš použít pro IP adresy, DHCP server, firewall a další služby.

### 2. Bridge VLAN filtering

Na bridge musí být správně nastavený VLAN filtering. Základní princip je:
- trunk porty nesou více VLAN,
- access porty patří do jedné VLAN,
- bridge musí vědět, které VLANy jsou tagged a které untagged.

Příklad:

```bash
/interface bridge
set bridge1 vlan-filtering=yes
```

A pak doplnit VLAN tabulku podle topologie sítě.

### 3. Datapath pro SSID

Pro každé SSID si vytvoř datapath nebo profile, který určí VLAN.

Příklad pro hlavní síť:

```bash
/interface wifi datapath
add name=dp-lan vlan-id=200 bridge=bridge1
```

Pro guest síť:

```bash
/interface wifi datapath
add name=dp-guest vlan-id=300 bridge=bridge1
```

Pro IoT síť:

```bash
/interface wifi datapath
add name=dp-iot vlan-id=310 bridge=bridge1
```

### 4. Konfigurace SSID

Pak vytvoř konfigurace pro jednotlivé sítě:

```bash
/interface wifi configuration
add name=cfg-lan ssid="MojeSit" security=sec-main datapath=dp-lan
add name=cfg-guest ssid="MojeSit-Guest" security=sec-guest datapath=dp-guest
add name=cfg-iot ssid="MojeSit-IoT" security=sec-iot datapath=dp-iot
```

Tím získáš více oddělených sítí s vlastním směrováním i bezpečností.

### 5. Security profily pro jednotlivé sítě

Každé SSID může mít vlastní zabezpečení:

```bash
/interface wifi security
add name=sec-main authentication-types=wpa2-psk,wpa3-psk passphrase="HlavniHeslo123"
add name=sec-guest authentication-types=wpa2-psk passphrase="GuestHeslo123"
add name=sec-iot authentication-types=wpa2-psk passphrase="IotHeslo123"
```

U guest sítě bývá rozumné použít jednodušší a kompatibilní nastavení. U hlavní sítě můžeš být přísnější.

### 6. Provisioning pro více SSID

Provisioning může vytvářet více bezdrátových rozhraní automaticky.

Příklad:

```bash
/interface wifi provisioning
add action=create-dynamic-enabled name=prov-main supported-bands=2ghz-n,5ghz-ac master-configuration=cfg-lan slave-configurations=cfg-guest,cfg-iot
```

V praxi je potřeba přizpůsobit provisioning konkrétnímu hardware a tomu, zda chceš, aby všechna AP vysílala všechna SSID nebo jen vybraná.

### 7. Management VLAN pro CAP

Management VLAN je velmi doporučená, protože ti oddělí správu AP od běžného uživatelského provozu.

Základní princip:
- CAP dostane management IP v samostatné VLAN,
- přes tuto VLAN se připojuje k controlleru,
- přes ni běží správa, discovery a případně i provisioning.

Na CAP zařízení pak obvykle:
- nastavíš bridge,
- přidáš trunk port,
- nastavíš VLAN pro management,
- zapneš CAP režim.

### 8. Praktický model topologie

Dobře fungující model bývá:

- router/controller v centru,
- trunk do switchů,
- AP připojené jako CAP přes trunk,
- management VLAN oddělená,
- Wi‑Fi SSID mapovaná do konkrétních VLAN.

To je čisté, škálovatelné a dobře se to debugguje.

### 9. Nejčastější chyby

- VLAN je nastavená jen na controlleru, ale ne na CAP nebo trunku.
- Bridge VLAN filtering je vypnutý.
- Datapath neukazuje na správnou VLAN.
- SSID je správně vytvořené, ale není správně provázané s provisioningem.
- Management VLAN nepropouští provoz mezi CAP a controllerem.

### 10. Doporučení pro první funkční verzi

Začni jednoduše:
- jedna hlavní LAN VLAN,
- jedna guest VLAN,
- jedna management VLAN,
- jedno SSID pro main a jedno pro guest,
- IoT přidej až po ověření, že základ funguje.

Tím si výrazně zjednodušíš první nasazení i pozdější ladění.
