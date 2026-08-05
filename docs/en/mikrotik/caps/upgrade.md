# CAPsMAN Managed Device Upgrade

This procedure is used for bulk updating MikroTik CAP devices managed through CAPsMAN. The goal is to bring all CAP devices to the same RouterOS version with as little disruption as possible.

## When this procedure is useful

Use it when:

- you manage multiple CAP devices from one CAPsMAN controller,
- you want to perform the upgrade centrally,
- you need control over RouterOS versions,
- you do not want to upgrade each AP manually.

## What you need

- MikroTik CAPsMAN controller.
- Access to the CLI via WinBox, SSH, or terminal.
- Correct RouterOS `.npk` packages for all devices in the network.
- A configuration backup.
- A short maintenance window, because devices reboot during the upgrade.

## Preparation

Before you start, verify:

- the RouterOS version on the controller,
- the RouterOS version on the CAP devices,
- the architecture of each device,
- the state of CAPsMAN provisioning rules.

Back up the configuration:

```routeros
/export file=before-capsman-upgrade
/system backup save name=before-capsman-upgrade
```

## Upgrade procedure

### 1. Upload packages to CAPsMAN

On the CAPsMAN controller, upload the RouterOS packages into a separate folder, for example `/upgrade`.

It is important that the folder contains the correct packages for all devices you want to upgrade.

### 2. Set the package path

On CAPsMAN, set `package-path` to the folder where the upgrade packages are stored.

```routeros
/caps-man manager set package-path=/upgrade
```

### 3. Set the upgrade policy

Choose how strictly CAPsMAN should enforce versions:

- `suggest-same-version` — the CAP will try to upgrade.
- `require-same-version` — the CAP must match the version, otherwise it will not connect.
- `none` — CAPsMAN does not handle upgrades.

Example:

```routeros
/caps-man manager set package-path=/upgrade upgrade-policy=suggest-same-version
```

### 4. Let the CAPs reconnect

After the setting is applied, the CAPs will upgrade on reconnect and reboot. After that, they will connect to the controller again.

### 5. Verify the status

After the upgrade, check:

```routeros
/system resource print
/system package print
/log print
```

Pay special attention to:

- the RouterOS version,
- the CAP connection status,
- errors in the log,
- Wi‑Fi and client availability.

## Safer approach

It is best not to upgrade everything at once. The recommended approach is:

1. the controller,
2. one test CAP,
3. the remaining CAPs in smaller groups.

This reduces the risk of something breaking across the whole network after the upgrade.

## If the CAP does not reconnect

If a device does not come back after the upgrade:

- check IP connectivity,
- inspect the log,
- verify the `package-path`,
- check whether you have the correct package for the architecture,
- try lowering the strictness of `upgrade-policy`.

The most common problem is a missing or incorrect `.npk` package.

## Firmware after upgrade

After a RouterOS upgrade, it is often worth checking the routerboard firmware too:

```routeros
/system routerboard print
/system routerboard upgrade
/system reboot
```

On some devices, one more reboot may be needed.

## Summary

Bulk upgrade through CAPsMAN works best when:

- you have the correct packages,
- you set the right `package-path`,
- you choose a suitable `upgrade-policy`,
- you verify the status after each step.

The safest approach is to proceed in smaller groups and keep a backup ready.
