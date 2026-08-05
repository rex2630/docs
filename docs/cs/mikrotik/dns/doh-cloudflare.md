---
title: MikroTik DoH s Cloudflare
description: Nastavení DNS over HTTPS na MikroTik RouterOS s Cloudflare
---

# MikroTik DoH s Cloudflare

Tento návod ukazuje, jak nastavit **DNS over HTTPS (DoH)** na MikroTik routeru s použitím **Cloudflare** jako DNS resolveru. DoH šifruje DNS dotazy mezi routerem a Cloudflare, takže je hůř vidí poskytovatel připojení nebo jiný provozovatel sítě.

## Požadavky

- MikroTik s RouterOS **v7**.
- Přístup do Winboxu, WebFig nebo terminálu.
- Správně nastavený čas na routeru.
- Router by měl sloužit jako DNS server pro vaši LAN.

> Poznámka: DoH je dostupné už od RouterOS v6.47, ale v praxi je lepší použít RouterOS v7.

## 1. Import certifikátu

Router potřebuje důvěryhodný CA certifikát, aby mohl ověřit HTTPS spojení s Cloudflare.

V terminálu MikroTiku stáhni CA bundle:

```bash
/tool fetch url="https://curl.se/ca/cacert.pem"
```

A potom ho importuj:

```bash
/certificate import file-name=cacert.pem passphrase=""
```

Pokud chceš použít konkrétní certifikát od DigiCertu, můžeš místo toho stáhnout:

```bash
/tool fetch url="https://cacerts.digicert.com/DigiCertGlobalRootG2.crt.pem"
/certificate import file-name=DigiCertGlobalRootG2.crt.pem passphrase=""
```

## 2. Nastavení DoH

Nejjednodušší varianta je použít Cloudflare endpoint `1.1.1.1`:

```bash
/ip dns set \
    use-doh-server="https://1.1.1.1/dns-query" \
    verify-doh-cert=yes
```

Pokud chceš používat router jen přes DoH, vypni klasické DNS servery:

```bash
/ip dns set servers=""
```

Můžeš také nastavit Cloudflare Family nebo security endpoint:

```bash
/ip dns set \
    use-doh-server="https://security.cloudflare-dns.com/dns-query" \
    verify-doh-cert=yes \
    servers=""
```

## 3. DNS pro LAN

Aby klienti v LAN využívali router jako DNS server:

```bash
/ip dns set allow-remote-requests=yes
```

V DHCP serveru nastav router jako DNS server pro klienty. Typicky to bude IP routeru v LAN, například `192.168.88.1`.

Zkontrolovat to můžeš takto:

```bash
/ip dhcp-server network print
```

Na WAN DHCP klientovi vypni přebírání DNS od ISP:

```bash
/ip dhcp-client set [find interface=<WAN>] use-peer-dns=no
```

Nahraď `<WAN>` názvem své WAN rozhraní.

## 4. Vynucení DNS přes router

Pokud chceš zabránit klientům, aby používali vlastní DNS mimo router, přidej NAT redirect pravidla:

```bash
/ip firewall nat
add chain=dstnat protocol=udp dst-port=53 action=redirect to-ports=53
add chain=dstnat protocol=tcp dst-port=53 action=redirect to-ports=53
```

Tím přesměruješ veškerý DNS provoz na router, který ho pak řeší přes DoH.

## 5. Test

Na klientovi otevři:

```text
https://1.1.1.1/help
```

Pokud vše funguje správně, mělo by být vidět, že DNS funguje přes DoH.

Na routeru můžeš zkusit třeba:

```bash
/ping cloudflare.com
```

Pokud ping neprojde na doménu, DNS nefunguje správně.

## Troubleshooting

### Certifikát nefunguje
- Zkontroluj, že byl certifikát skutečně importován.
- Ověř správný čas na routeru.
- Zkus jiný CA bundle nebo konkrétní DigiCert root.

### DoH timeoutuje
- Zkus dočasně klasické DNS:
  ```bash
  /ip dns set servers=1.1.1.1 use-doh-server=""
  ```
- Zkontroluj firewall a WAN konektivitu.
- Ověř, že router umí správně resolvovat název DoH endpointu, pokud používáš hostname.

### Klienti nepoužívají router jako DNS
- Zkontroluj DHCP nastavení.
- Ověř, že `allow-remote-requests=yes`.
- Pokud je potřeba, přidej NAT redirect pravidla.

## Doporučená konfigurace

Toto je rozumný základ pro domácí síť:

```bash
/tool fetch url="https://curl.se/ca/cacert.pem"
/certificate import file-name=cacert.pem passphrase=""

/ip dns set \
    allow-remote-requests=yes \
    servers="" \
    use-doh-server="https://1.1.1.1/dns-query" \
    verify-doh-cert=yes

/ip dhcp-client set [find interface=<WAN>] use-peer-dns=no

/ip firewall nat
add chain=dstnat protocol=udp dst-port=53 action=redirect to-ports=53
add chain=dstnat protocol=tcp dst-port=53 action=redirect to-ports=53
```

## Poznámka

DoH chrání jen DNS dotazy mezi routerem a Cloudflare. Nezastaví jiný dohled nad provozem a neznamená anonymitu. Pokud chceš víc soukromí, můžeš zvážit i VPN nebo lokální DNS filtr.
