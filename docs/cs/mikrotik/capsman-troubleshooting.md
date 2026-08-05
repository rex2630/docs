## Troubleshooting a best practices

Tahleta část shrnuje nejčastější problémy při nasazení CAPsMAN v RouterOS 7+ a doporučení, jak se jim vyhnout. V praxi bývá většina problémů způsobená jednou z těchto věcí: špatný discovery, nesprávný provisioning, chybějící bridge, chybné VLANy nebo použití nesprávného Wi‑Fi stacku.

### 1. CAP se nepřipojí ke controlleru

Pokud CAP nevidí controller nebo hlásí problém s připojením, zkontroluj:

- jestli je CAP skutečně v CAP režimu,
- jestli má správnou IP adresu a konektivitu,
- jestli je nastavený správný discovery interface,
- jestli firewall neblokuje komunikaci,
- jestli controller i CAP používají stejný typ Wi‑Fi systému.

Doporučení:
- na CAPu použij čistý CAP režim,
- pro discovery používej bridge nebo správné management rozhraní,
- neomezuj provisioning zbytečně přes MAC, pokud to není nutné,
- když je potřeba, resetuj CAP do CAP režimu a nastav ho znovu.

### 2. SSID se nevysílá

Když CAP je připojený, ale SSID nevidíš, typicky je problém v provisioning pravidlech nebo v konfiguraci rádia.

Zkontroluj:
- zda provisioning odpovídá správnému pásmu,
- zda je přiřazená master konfigurace,
- zda je rádio opravdu podporované,
- zda je konfigurace aktivní a dynamicky vytvořená.

Častá chyba:
- provisioning je nastavený jen na 5 GHz, ale očekáváš i 2.4 GHz,
- nebo naopak konfigurace neodpovídá tomu, jaký band má dané rádio.

### 3. Klienti se připojí, ale nedostanou IP adresu

Tohle většinou znamená problém s bridge, VLAN nebo datapath.

Zkontroluj:
- zda datapath ukazuje na správný bridge,
- zda je bridge VLAN filtering nastavený správně,
- zda je trunk port na switchi i na AP správně povolený,
- zda DHCP server běží ve správné VLAN.

Praktické pravidlo:
- pokud klient nemá IP, nejprve kontroluj bridge a VLAN,
- až potom řeš Wi‑Fi samotnou.

### 4. Vidím stav „managed locally“

To znamená, že rádio není řízené CAPsMANem, ale lokálně.

To bývá normální:
- u zařízení, která běží jako hlavní router a zároveň mají vlastní Wi‑Fi,
- u konfigurací, kde nechceš centrálně spravovat lokální rádio,
- nebo když daný interface nebyl předán do CAPsMAN provisioning systému.

Důležité:
- lokální radio na controlleru obvykle neřešíš jako CAP,
- nastavíš ho ručně podle stejné logiky jako CAP, ale lokálně.

### 5. CAP funguje, ale roaming je špatný

Roaming bývá problém hlavně tehdy, když:
- jsou AP příliš daleko od sebe,
- Tx power je moc vysoký,
- používáš různá SSID,
- klienti mají velmi odlišnou kvalitu signálu mezi AP.

Co pomáhá:
- jednotné SSID,
- stejné bezpečnostní nastavení,
- rozumné kanály,
- nepřehánět výkon,
- překryv signálu jen tam, kde je opravdu potřeba.

### 6. Problémy s VLAN

Pokud Wi‑Fi funguje, ale VLAN ne:
- zkontroluj tagged/untagged porty,
- ověř bridge VLAN filtering,
- ujisti se, že management VLAN je přístupná i pro CAP,
- zkontroluj, zda datapath používá správnou VLAN ID.

Velmi častá chyba je, že:
- VLAN je vytvořená na routeru,
- ale není povolená na trunku,
- nebo CAP nedostává management VLAN vůbec.

### 7. Problémy s frekvencí nebo nekompatibilními klienty

Někdy je AP funkční, ale některé klienty ho nevidí nebo se nepřipojí.

Možné důvody:
- zvolená frekvence není kompatibilní s klientem,
- používáš DFS kanál a klient nebo prostředí je citlivé,
- šířka kanálu je moc široká,
- krajové nastavení nebo regulace nesedí.

Doporučení:
- začni s ne-DFS kanály,
- 2.4 GHz drž na 20 MHz,
- 5 GHz začni na 20 nebo 40 MHz,
- až potom zkoušej širší kanály.

### 8. Zařízení nelze přepnout zpět pod CAPsMAN

Když experimentuješ a zařízení se „zasekne“ v nesprávném režimu, pomůže:
- reset do CAP režimu,
- odstranění staré konfigurace,
- vymazání certifikátů, pokud je problém s opětovným připojením,
- znovunastavení discovery a provisioning pravidel.

### 9. Nejdůležitější checklist před laděním

Než začneš hledat složitý problém, ověř toto:

- controller i CAP jsou na RouterOS 7+,
- používáš správný Wi‑Fi stack,
- CAP je v CAP režimu,
- discovery funguje přes správný bridge nebo VLAN,
- provisioning odpovídá pásmu rádia,
- datapath je navázaný na správný bridge nebo VLAN,
- DHCP a firewall fungují ve správné síti.

### 10. Doporučený přístup k nasazení

Nejlepší postup je:
1. nejdřív rozběhnout jednu jednoduchou SSID,
2. potom ověřit připojení CAP,
3. následně otestovat DHCP a přístup do sítě,
4. teprve potom přidat VLANy,
5. nakonec ladit frekvence, roaming a výkon.

Tím výrazně snížíš šanci, že budeš debugovat více problémů najednou.
