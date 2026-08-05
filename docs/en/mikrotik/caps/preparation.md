---
title: Frequency and Channel Planning
description: Practical overview of how to set up 2.4 GHz and 5 GHz sensibly for a CAPsMAN network.
---

# Frequency and Channel Planning

Proper channel planning is essential when you have multiple APs. CAPsMAN can automate part of it, but for a stable network it is better to have a clear plan.

## Basic rules

- **2.4 GHz** should be used mainly for range and compatibility.
- **5 GHz** should be used as the primary band for most clients.
- If your hardware supports it, you can eventually also use **6 GHz**.
- With multiple APs, try to minimize channel overlap.

## 2.4 GHz

On 2.4 GHz, the band is small and heavily congested. In practice, the **1 / 6 / 11** scheme is almost always used, because these are the non-overlapping channels in 20 MHz mode.

Recommendations:
- use **20 MHz**,
- stick to channels **1, 6, 11**,
- do not widen the channel unnecessarily,
- expect 2.4 GHz to always be a compromise when you have more than one AP.

## 5 GHz

On 5 GHz, there is more space and less interference, so it is usually the main band for clients.

Good practice:
- use **20 MHz** or **40 MHz** depending on the environment,
- use **80 MHz** only where it really makes sense,
- if you do not want to deal with DFS, stay on non-DFS channels.

Typical non-DFS channels are:
- **36 / 40 / 44 / 48**,
- **149 / 153 / 157 / 161 / 165**.

## DFS

DFS channels make sense when you need more free spectrum and do not mind the AP possibly waiting after startup before it can use the channel. If you want simple and predictable operation, start with non-DFS channels instead.

## Practical starting point

For most small and normal networks, start like this:
- 2.4 GHz: **20 MHz**, channels **1 / 6 / 11**,
- 5 GHz: **20 or 40 MHz**, non-DFS channels,
- push main clients to 5 GHz,
- do not overdo transmit power.
