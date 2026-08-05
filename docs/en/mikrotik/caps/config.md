---
title: Basic CAPsMAN Configuration
description: Basic CAPsMAN setup in RouterOS 7+ including the manager, security, datapath, and provisioning.
---

# Basic Configuration

This section shows a working CAPsMAN baseline for RouterOS 7+ with the modern WiFi stack.

## 1. Enable the CAPsMAN manager

On the controller, enable CAPsMAN:

```bash
/interface wifi capsman
set enabled=yes
```

## 2. Create a security profile

First, prepare a security profile for the Wi‑Fi network:

```bash
/interface wifi security
add name=sec-main authentication-types=wpa2-psk,wpa3-psk passphrase="StrongPassword123"
```

If you want better compatibility, you can start with WPA2-PSK only.

## 3. Create the configuration

Then create configurations for the bands:

```bash
/interface wifi configuration
add name=cfg-2ghz ssid="MyNetwork" country=CzechRepublic security=sec-main
add name=cfg-5ghz ssid="MyNetwork" country=CzechRepublic security=sec-main
```

## 4. Create the datapath

The datapath defines where Wi‑Fi traffic is forwarded.

Example for a standard bridge:

```bash
/interface wifi datapath
add name=dp-main bridge=bridge1
```

## 5. Set up provisioning

Provisioning tells CAPsMAN how to assign configurations to individual radios.

Example:

```bash
/interface wifi provisioning
add action=create-dynamic-enabled name=prov-2ghz supported-bands=2ghz-n master-configuration=cfg-2ghz
add action=create-dynamic-enabled name=prov-5ghz supported-bands=5ghz-ac master-configuration=cfg-5ghz
```

## 6. Enable CAP mode on the AP

On the CAP device, configure the connection to the controller:

```bash
/interface wifi cap
set enabled=yes caps-man-addresses=192.168.88.1 discovery-interfaces=bridge1
```

## 7. What happens after connecting

After the CAP connects:

- the controller assigns it a configuration,
- dynamic Wi‑Fi interfaces are created,
- the AP starts broadcasting the SSID according to the provisioning rules,
- traffic is forwarded through the configured datapath.

## 8. Basic verification

Check that:

- the CAP is visible in CAPsMAN,
- it has the correct configuration assigned,
- the SSID is being broadcast,
- clients receive an IP address,
- network access works properly.
