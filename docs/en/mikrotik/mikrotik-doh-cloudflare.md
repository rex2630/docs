---
title: MikroTik DoH with Cloudflare
description: Configure DNS over HTTPS on MikroTik RouterOS with Cloudflare
---

# MikroTik DoH with Cloudflare

This guide shows how to set up **DNS over HTTPS (DoH)** on a MikroTik router using **Cloudflare** as the DNS resolver. DoH encrypts DNS queries between the router and Cloudflare, making them harder to inspect by your ISP or other network operators.

## Requirements

- MikroTik running **RouterOS v7**.
- Access to Winbox, WebFig, or the terminal.
- Correct time configured on the router.
- The router should serve DNS for your LAN.

> Note: DoH has been available since RouterOS v6.47, but RouterOS v7 is recommended.

## 1. Import the certificate

The router needs a trusted CA certificate to verify the HTTPS connection to Cloudflare.

Download the CA bundle on MikroTik:

```bash
/tool fetch url="https://curl.se/ca/cacert.pem"
```

Then import it:

```bash
/certificate import file-name=cacert.pem passphrase=""
```

If you prefer a specific DigiCert root certificate, you can download:

```bash
/tool fetch url="https://cacerts.digicert.com/DigiCertGlobalRootG2.crt.pem"
/certificate import file-name=DigiCertGlobalRootG2.crt.pem passphrase=""
```

## 2. Configure DoH

The simplest option is to use Cloudflare’s `1.1.1.1` endpoint:

```bash
/ip dns set \
    use-doh-server="https://1.1.1.1/dns-query" \
    verify-doh-cert=yes
```

If you want the router to use only DoH, clear the regular DNS servers:

```bash
/ip dns set servers=""
```

You can also use Cloudflare Family or security endpoints:

```bash
/ip dns set \
    use-doh-server="https://security.cloudflare-dns.com/dns-query" \
    verify-doh-cert=yes \
    servers=""
```

## 3. DNS for LAN

To make LAN clients use the router as their DNS server:

```bash
/ip dns set allow-remote-requests=yes
```

Set the router’s LAN IP as DNS in your DHCP network settings, usually something like `192.168.88.1`.

You can check the DHCP network configuration with:

```bash
/ip dhcp-server network print
```

On the WAN DHCP client, disable DNS provided by the ISP:

```bash
/ip dhcp-client set [find interface=<WAN>] use-peer-dns=no
```

Replace `<WAN>` with the name of your WAN interface.

## 4. Force DNS through the router

If you want to prevent clients from using external DNS servers directly, add NAT redirect rules:

```bash
/ip firewall nat
add chain=dstnat protocol=udp dst-port=53 action=redirect to-ports=53
add chain=dstnat protocol=tcp dst-port=53 action=redirect to-ports=53
```

This redirects all DNS traffic to the router, which then resolves it over DoH.

## 5. Test

On a client, open:

```text
https://1.1.1.1/help
```

If everything works correctly, it should show that DNS is using DoH.

On the router, you can test name resolution with:

```bash
/ping cloudflare.com
```

If the domain cannot be resolved, DNS is not working correctly.

## Troubleshooting

### Certificate problems
- Make sure the certificate was imported successfully.
- Check the router time.
- Try a different CA bundle or a specific DigiCert root.

### DoH timeout
- Temporarily test plain DNS:
  ```bash
  /ip dns set servers=1.1.1.1 use-doh-server=""
  ```
- Check firewall rules and WAN connectivity.
- Make sure the router can resolve the DoH endpoint hostname if you are using one.

### Clients do not use the router as DNS
- Check DHCP settings.
- Make sure `allow-remote-requests=yes`.
- Add NAT redirect rules if needed.

## Recommended configuration

A good baseline setup for a home network:

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

## Note

DoH protects only DNS queries between the router and Cloudflare. It does not make your traffic anonymous. If you want more privacy, consider using a VPN or a local DNS filtering solution.
