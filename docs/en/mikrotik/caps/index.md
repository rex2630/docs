---
title: MikroTik CAPsMAN on RouterOS 7+
description: An introductory hub and overview of a complete CAPsMAN guide for RouterOS 7+.
---

# MikroTik CAPsMAN on RouterOS 7+

This guide describes the complete CAPsMAN setup in RouterOS 7+ for modern MikroTik Wi‑Fi devices. It is written simply, but it covers all the important technical steps you need for deployment.

> This document is based on the current WiFi CAPsMAN model in RouterOS 7+. Legacy CAPsMAN (`/caps-man`) is mentioned only where it helps explain the difference.

## Contents

- [Frequency and channel planning](./preparation.md)
- [Basic configuration](./config.md)
- [VLANs and multiple SSIDs](./vlan.md)
- [Managed device upgrades](./upgrade.md)
- [Troubleshooting](./troubleshooting.md)

## What CAPsMAN is

CAPsMAN is a system for centralized management of Wi‑Fi access points in a MikroTik network. Instead of configuring each AP manually, you define the configuration in one place and it gets distributed to the individual CAPs.

Use it mainly when:
- you have multiple access points,
- you want the same SSID and the same security settings everywhere,
- you need VLAN segmentation,
- you want Wi‑Fi management to be simpler.

## When to use CAPsMAN

CAPsMAN makes sense when you want to control Wi‑Fi from one place and keep a unified configuration across multiple APs. It is suitable for both home and business networks where you need roaming, multiple SSIDs, or traffic separation with VLANs.

On the other hand, it is often unnecessary if you only have one AP and do not want centralized management.

## Device compatibility

Before you begin, make sure that:
- both the controller and the CAP device are running RouterOS 7+,
- they use a compatible Wi‑Fi package,
- there is connectivity between the CAP and the controller,
- you know whether you are using the modern WiFi stack or the older wireless environment.

Not all MikroTik devices behave the same way. If you are mixing different models or architectures, keep that in mind from the design stage.
