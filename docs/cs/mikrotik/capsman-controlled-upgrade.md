# CAPsMAN řízený upgrade zařízení

Tento postup slouží k hromadné aktualizaci MikroTik CAP zařízení spravovaných přes CAPsMAN. Cílem je dostat všechna CAP zařízení na stejnou verzi RouterOS s co nejmenším rušením provozu.

## Kdy se tento postup hodí

Použij ho, když:

- spravuješ více CAP zařízení z jednoho CAPsMAN controlleru,
- chceš upgrade provést centrálně,
- potřebuješ mít kontrolu nad verzemi RouterOS,
- nechceš upgradovat každé AP ručně zvlášť.

## Co je potřeba

- MikroTik CAPsMAN controller.
- Přístup do CLI přes WinBox, SSH nebo terminál.
- Správné RouterOS `.npk` balíčky pro všechna zařízení v síti.
- Záloha konfigurace.
- Krátké servisní okno, protože zařízení se při upgradu restartují.

## Příprava

Než začneš, ověř:

- verzi RouterOS na controlleru,
- verzi RouterOS na CAP zařízeních,
- architekturu jednotlivých zařízení,
- stav CAPsMAN provisioning pravidel.

Zálohuj konfiguraci:

```routeros
/export file=before-capsman-upgrade
/system backup save name=before-capsman-upgrade
```

## Postup upgradu

### 1. Nahraj balíčky na CAPsMAN

Na CAPsMAN controller nahraj RouterOS balíčky do samostatné složky, například `/upgrade`.

Důležité je, aby zde byly správné balíčky pro všechna zařízení, která chceš upgradovat.

### 2. Nastav cestu k balíčkům

Na CAPsMANu nastav `package-path` na složku, kde jsou uložené upgrade balíčky.

```routeros
/caps-man manager set package-path=/upgrade
```

### 3. Nastav upgrade policy

Vyber, jak přísně má CAPsMAN hlídat verze:

- `suggest-same-version` — CAP se pokusí aktualizovat.
- `require-same-version` — CAP musí mít stejnou verzi, jinak se nepřipojí.
- `none` — CAPsMAN upgrade neřeší.

Příklad:

```routeros
/caps-man manager set package-path=/upgrade upgrade-policy=suggest-same-version
```

### 4. Nech CAPy připojit znovu

Po nastavení se CAPy po reconnectu aktualizují a rebootují. Potom se znovu připojí ke controlleru.

### 5. Ověř stav

Po upgradu zkontroluj:

```routeros
/system resource print
/system package print
/log print
```

Sleduj hlavně:

- verzi RouterOS,
- stav CAP připojení,
- chyby v logu,
- dostupnost Wi-Fi a klientů.

## Bezpečnější způsob

Nejlepší je neupgradovat všechno najednou. Doporučený postup je:

1. controller,
2. jeden testovací CAP,
3. další CAPy po menších skupinách.

Tím snížíš riziko, že se po upgrade něco rozbije na celé síti.

## Když se CAP nepřipojí zpět

Pokud se některé zařízení po upgradu nevrátí:

- zkontroluj IP konektivitu,
- podívej se do logu,
- ověř správnost `package-path`,
- zkontroluj, zda máš správný balíček pro danou architekturu,
- zkus přísnost `upgrade-policy` snížit.

Nejčastější problém bývá chybějící nebo špatný `.npk` balíček.

## Firmware po upgradu

Po RouterOS upgradu se často vyplatí zkontrolovat i firmware routerboardu:

```routeros
/system routerboard print
/system routerboard upgrade
/system reboot
```

U některých zařízení může být potřeba ještě jeden reboot.

## Shrnutí

Hromadný upgrade přes CAPsMAN funguje nejlépe, když:

- máš správné balíčky,
- nastavíš správný `package-path`,
- zvolíš vhodnou `upgrade-policy`,
- ověříš stav po každém kroku.

Nejbezpečnější je postupovat po menších skupinách a mít připravenou zálohu.
