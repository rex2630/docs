---
title: VLANs and Multiple SSIDs
description: VLAN, multiple SSIDs, and management VLAN setup for CAPsMAN in RouterOS 7+.
---

# VLANs and Multiple SSIDs

If you want to separate traffic, use VLANs. Typical examples are the main network, guest network, IoT network, and a management VLAN for the APs themselves.

## Basic design

Example of a simple layout:
- VLAN 100 – AP and infrastructure management,
- VLAN 200 – main LAN,
- VLAN 300 – guest Wi‑Fi,
- VLAN 310 – IoT Wi‑Fi.

## Important note

With the current WiFi CAPsMAN, **local forwarding** is commonly used. This means data goes through the CAP and then into the VLAN according to the configured datapath.

This implies:
- the VLAN design must make sense on the CAP side as well,
- trunk ports must be configured correctly,
- bridge VLAN filtering must be enabled where needed.

## 1. VLAN interfaces on the router

On the router, create VLAN interfaces on top of the bridge:

```bash
/interface vlan
add interface=bridge1 name=vlan100-mgmt vlan-id=100
add interface=bridge1 name=vlan200-lan vlan-id=200
add interface=bridge1 name=vlan300-guest vlan-id=300
add interface=bridge1 name=vlan310-iot vlan-id=310
```

## 2. Bridge VLAN filtering

Enable VLAN filtering on the bridge:

```bash
/interface bridge
set bridge1 vlan-filtering=yes
```

Then complete the VLAN table according to your network topology.

## 3. Datapath for SSIDs

Create a datapath for each SSID:

```bash
/interface wifi datapath
add name=dp-lan vlan-id=200 bridge=bridge1
add name=dp-guest vlan-id=300 bridge=bridge1
add name=dp-iot vlan-id=310 bridge=bridge1
```

## 4. SSID configuration

Then create configurations for the individual networks:

```bash
/interface wifi configuration
add name=cfg-lan ssid="MyNetwork" security=sec-main datapath=dp-lan
add name=cfg-guest ssid="MyNetwork-Guest" security=sec-guest datapath=dp-guest
add name=cfg-iot ssid="MyNetwork-IoT" security=sec-iot datapath=dp-iot
```

## 5. Security profiles

Each SSID can have its own security:

```bash
/interface wifi security
add name=sec-main authentication-types=wpa2-psk,wpa3-psk passphrase="MainPassword123"
add name=sec-guest authentication-types=wpa2-psk passphrase="GuestPassword123"
add name=sec-iot authentication-types=wpa2-psk passphrase="IotPassword123"
```

## 6. Provisioning for multiple SSIDs

Provisioning can automatically create multiple wireless interfaces.

Example:

```bash
/interface wifi provisioning
add action=create-dynamic-enabled name=prov-main supported-bands=2ghz-n,5ghz-ac master-configuration=cfg-lan slave-configurations=cfg-guest,cfg-iot
```

## 7. Management VLAN for the CAP

A management VLAN is highly recommended. It separates AP administration from regular user traffic.

Basic principle:
- the CAP gets a management IP in a separate VLAN,
- it connects to the controller through that VLAN,
- management and discovery run over it.

## 8. Practical topology model

A well-working model is usually:
- router/controller in the center,
- trunk links to switches,
- APs as CAPs over trunk,
- management VLAN separated,
- SSIDs mapped to specific VLANs.

## 9. Most common mistakes

- The VLAN is configured only on the controller, but not on the CAP or trunk.
- Bridge VLAN filtering is disabled.
- The datapath does not point to the correct VLAN.
- The SSID is created, but not correctly tied to provisioning.
- The management VLAN does not allow traffic between the CAP and the controller.

## 10. Recommended starting point

Start simple:
- one LAN VLAN,
- one guest VLAN,
- one management VLAN,
- one main SSID and one guest SSID,
- add IoT only after the basics are confirmed.
