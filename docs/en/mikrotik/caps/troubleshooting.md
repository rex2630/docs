---
title: Troubleshooting CAPsMAN
description: The most common issues when deploying CAPsMAN in RouterOS 7+ and quick checks to solve them.
---

# Troubleshooting

Most CAPsMAN deployment issues come from discovery, provisioning rules, VLANs, or using the wrong Wi‑Fi stack.

## 1. The CAP does not connect to the controller

Check:
- whether the CAP is in CAP mode,
- whether it has the correct IP address and connectivity,
- whether the discovery interface is set correctly,
- whether the firewall is blocking communication,
- whether the controller and CAP use the same Wi‑Fi system.

## 2. The SSID is not being broadcast

This is usually a problem in the provisioning rules or in the radio configuration.

Check:
- whether provisioning matches the band,
- whether the master configuration is assigned,
- whether the radio actually supports the band,
- whether the configuration is active and dynamically created.

## 3. Clients connect but do not get an IP address

This usually means there is a problem with the bridge, VLAN, or datapath.

Check:
- whether the datapath points to the correct bridge,
- whether bridge VLAN filtering is configured correctly,
- whether the trunk port is allowed,
- whether the DHCP server is running in the correct VLAN.

## 4. Roaming does not work well

Helps:
- a unified SSID,
- the same security settings,
- reasonable channels,
- not too much transmit power,
- natural signal overlap.

## 5. VLAN does not work

Check:
- tagged and untagged ports,
- bridge VLAN filtering,
- the correct VLAN ID in the datapath,
- the management VLAN for the CAP.

## 6. The device does not want to return under CAPsMAN

Try:
- resetting it into CAP mode,
- removing the old configuration,
- setting up discovery and provisioning rules again.

## Checklist before debugging

Before you look for a complex problem, verify:
- both the controller and the CAP are running RouterOS 7+,
- you are using the correct Wi‑Fi stack,
- the CAP is in CAP mode,
- discovery works over the correct interface,
- provisioning matches the radio,
- the datapath is connected properly,
- DHCP and firewall work in the correct network.
