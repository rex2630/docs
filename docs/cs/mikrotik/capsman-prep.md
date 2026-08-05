## Plánování frekvencí a kanálů

Správné plánování kanálů je u více access pointů zásadní. CAPsMAN sice umí část věcí řídit automaticky, ale pokud chceš stabilní síť s dobrým roamingem a rozumným pokrytím, je lepší frekvence plánovat vědomě.

### Základní pravidlo

- **2.4 GHz** používej hlavně tam, kde potřebuješ dosah nebo kompatibilitu.
- **5 GHz** používej jako hlavní pásmo pro většinu moderních zařízení.
- Pokud to hardware podporuje, můžeš časem doplnit i **6 GHz**.
- Pokud máš více AP, snaž se minimalizovat překryv kanálů.

### 2.4 GHz

Na 2.4 GHz je pásmo malé a silně rušené. V praxi se nejčastěji používá schéma **1 / 6 / 11**, protože to jsou v 20 MHz režimu ne-překrývající se kanály.

Doporučení:

- používej **20 MHz**,
- drž se kanálů **1, 6, 11**,
- vyhýbej se zbytečnému rozšiřování kanálu,
- pokud máš víc než 3 AP v dosahu, počítej s tím, že 2.4 GHz bude vždy kompromis.

Na 2.4 GHz platí, že širší kanál většinou neznamená lepší síť, ale spíš víc rušení. Pokud je kolem hodně cizích sítí, 20 MHz je skoro vždy správná volba.

### 5 GHz

Na 5 GHz je situace lepší, protože je tam víc prostoru a méně rušení. Pro menší a střední instalace je to obvykle hlavní pásmo pro klienty.

Dobrá praxe:

- používej **20 MHz** nebo **40 MHz** podle hustoty okolí,
- pro vyšší kapacitu můžeš použít **80 MHz**, ale jen pokud máš dost prostoru a málo rušení,
- pokud nechceš řešit DFS, drž se non-DFS kanálů.

Typické non-DFS kanály jsou:

- **36 / 40 / 44 / 48**
- **149 / 153 / 157 / 161 / 165**

DFS kanály mohou nabídnout víc prostoru, ale přidávají čekání při startu a někdy komplikace při změně kanálu. Pro domácí nebo menší firemní síť často dává větší smysl začít s non-DFS pásmem.

### Kdy použít DFS

DFS kanály jsou užitečné, pokud:

- je kolem hodně AP,
- potřebuješ více volného spektra,
- nevadí ti, že AP může po startu chvíli čekat na potvrzení kanálu,
- víš, že tvé prostředí je s DFS kompatibilní.

Naopak je lepší se DFS vyhnout, pokud:

- chceš co nejjednodušší provoz,
- máš citlivé klienty,
- nechceš řešit dočasné výpadky při změně kanálu.

### Šířka kanálu

Šířka kanálu má obrovský vliv na stabilitu i kapacitu.

Doporučení:

- **2.4 GHz:** 20 MHz
- **5 GHz:** 20 MHz nebo 40 MHz pro rušné prostředí, 80 MHz jen tam, kde to dává smysl
- **160 MHz:** používej jen výjimečně, většinou v laboratoři nebo velmi specifickém prostředí

Obecně platí:
- širší kanál = vyšší teoretická rychlost,
- užší kanál = lepší odolnost vůči rušení a lepší plánování více AP.

### Rozdělení AP

Pokud máš více access pointů, je dobré je rozdělit tak, aby si navzájem co nejméně rušily.

Příklad rozumného přístupu:

- AP1: 2.4 GHz na kanálu 1, 5 GHz na 36
- AP2: 2.4 GHz na kanálu 6, 5 GHz na 44
- AP3: 2.4 GHz na kanálu 11, 5 GHz na 149

Tím vytvoříš základní rozložení bez zbytečného překryvu.

### Roaming

Cílem není, aby všechna AP vysílala co nejsilněji. Cílem je, aby klient přecházel mezi AP přirozeně a bez výpadků.

Pomáhá:
- jednotné SSID,
- stejné zabezpečení,
- podobná úroveň signálu mezi AP,
- ne přehnaný Tx power,
- rozumně nastavené kanály.

Příliš vysoký výkon často roaming zhoršuje, protože klient se drží vzdáleného AP déle, než by měl.

### Automatika vs ruční plán

CAPsMAN může některé kanály vybrat automaticky, ale u více AP je často lepší ručně definovat strategii.

Automatika je vhodná, když:
- máš jen pár AP,
- prostředí je jednoduché,
- nechceš nic ladit ručně.

Ruční plán je lepší, když:
- máš více AP,
- chceš stabilní roaming,
- máš rušné prostředí,
- chceš přesně řídit 2.4 a 5 GHz.

### Praktické doporučení pro start

Pro většinu domácích a menších firemních sítí bych začal takto:

- 2.4 GHz: **20 MHz**, kanály **1 / 6 / 11**
- 5 GHz: **20 nebo 40 MHz**, non-DFS kanály
- hlavní klienty tlačit na 5 GHz
- 2.4 GHz ponechat hlavně pro kompatibilitu a dosah
- výkon nepřehánět
