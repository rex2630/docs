---
title: MikroTik DoH z Cloudflare
description: Konfiguracja DNS over HTTPS na MikroTik RouterOS z Cloudflare
---

# MikroTik DoH z Cloudflare

Ten poradnik pokazuje, jak skonfigurować **DNS over HTTPS (DoH)** na routerze MikroTik z użyciem **Cloudflare** jako resolvera DNS. DoH szyfruje zapytania DNS między routerem a Cloudflare, dzięki czemu trudniej je podejrzeć dostawcy internetu lub innym operatorom sieci.

## Wymagania

- MikroTik z **RouterOS v7**.
- Dostęp do Winboxa, WebFig albo terminala.
- Poprawnie ustawiony czas na routerze.
- Router powinien obsługiwać DNS dla sieci LAN.

> Uwaga: DoH jest dostępne od RouterOS v6.47, ale zalecany jest RouterOS v7.

## 1. Import certyfikatu

Router potrzebuje zaufanego certyfikatu CA, aby zweryfikować połączenie HTTPS z Cloudflare.

Pobierz pakiet CA na MikroTiku:

```bash
/tool fetch url="https://curl.se/ca/cacert.pem"
```

Następnie zaimportuj go:

```bash
/certificate import file-name=cacert.pem passphrase=""
```

Jeśli wolisz użyć konkretnego certyfikatu root DigiCert, możesz pobrać:

```bash
/tool fetch url="https://cacerts.digicert.com/DigiCertGlobalRootG2.crt.pem"
/certificate import file-name=DigiCertGlobalRootG2.crt.pem passphrase=""
```

## 2. Konfiguracja DoH

Najprostsza opcja to użycie endpointu Cloudflare `1.1.1.1`:

```bash
/ip dns set \
    use-doh-server="https://1.1.1.1/dns-query" \
    verify-doh-cert=yes
```

Jeśli chcesz używać wyłącznie DoH, wyczyść zwykłe serwery DNS:

```bash
/ip dns set servers=""
```

Możesz też użyć endpointu Cloudflare Security lub Family:

```bash
/ip dns set \
    use-doh-server="https://security.cloudflare-dns.com/dns-query" \
    verify-doh-cert=yes \
    servers=""
```

## 3. DNS dla LAN

Aby klienci w LAN używali routera jako serwera DNS:

```bash
/ip dns set allow-remote-requests=yes
```

Ustaw adres LAN routera jako DNS w konfiguracji DHCP, zwykle coś w stylu `192.168.88.1`.

Konfigurację DHCP możesz sprawdzić poleceniem:

```bash
/ip dhcp-server network print
```

Na kliencie DHCP po stronie WAN wyłącz pobieranie DNS od ISP:

```bash
/ip dhcp-client set [find interface=<WAN>] use-peer-dns=no
```

Zamień `<WAN>` na nazwę swojego interfejsu WAN.

## 4. Wymuszenie DNS przez router

Jeśli chcesz uniemożliwić klientom używanie zewnętrznych serwerów DNS bezpośrednio, dodaj reguły NAT redirect:

```bash
/ip firewall nat
add chain=dstnat protocol=udp dst-port=53 action=redirect to-ports=53
add chain=dstnat protocol=tcp dst-port=53 action=redirect to-ports=53
```

To przekieruje cały ruch DNS do routera, a router rozwiąże go przez DoH.

## 5. Test

Na kliencie otwórz:

```text
https://1.1.1.1/help
```

Jeśli wszystko działa poprawnie, powinno pokazać, że DNS działa przez DoH.

Na routerze możesz sprawdzić rozwiązywanie nazw poleceniem:

```bash
/ping cloudflare.com
```

Jeśli domena nie daje się rozwiązać, DNS nie działa poprawnie.

## Rozwiązywanie problemów

### Problemy z certyfikatem
- Upewnij się, że certyfikat został poprawnie zaimportowany.
- Sprawdź czas na routerze.
- Spróbuj innego pakietu CA albo konkretnego root certyfikatu DigiCert.

### Timeout DoH
- Tymczasowo przetestuj zwykły DNS:
  ```bash
  /ip dns set servers=1.1.1.1 use-doh-server=""
  ```
- Sprawdź firewall i łączność z WAN.
- Upewnij się, że router potrafi rozwiązać nazwę hosta endpointu DoH, jeśli używasz nazwy domenowej.

### Klienci nie używają routera jako DNS
- Sprawdź ustawienia DHCP.
- Upewnij się, że `allow-remote-requests=yes`.
- W razie potrzeby dodaj reguły NAT redirect.

## Zalecana konfiguracja

Dobry punkt wyjścia dla sieci domowej:

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

## Uwaga

DoH chroni tylko zapytania DNS między routerem a Cloudflare. Nie zapewnia anonimowości całego ruchu. Jeśli chcesz większej prywatności, rozważ VPN albo lokalne filtrowanie DNS.
