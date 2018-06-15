---
layout: default
title: nexial-core 1.3 (2018-07-??)
parent: release
tags: release nexial-core 1.3
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.3" class="external-link" target="_nexial_target">Release 1.3</a>
2018-07-??


### General

<!--
todo: discuss with team
#### Event Notification
nexial.notifyOnWebOpen
nexial.notifyOnDesktopUseApp
nexial.notifyOnDesktopUseForm
nexial.notifyOnDesktopUseTable
nexial.notifyOnDesktopUseList
nexial.notifyOnWsStart
nexial.notifyOnWsComplete
nexial.notifyOnRdbmsStart
nexial.notifyOnRdbmsComplete
-->

#### Built-in Function
- fixed parsing logic to honor escaping conflicting characters such as `$`, `(`, `)` and `|`.  These characters are 
  considered as conflict since they are used to define built-in functions.

#### Event Notification
- due to the close in time between start of an execution, the first script and the first scenario, the TTS notification
  has been modified to opt for speak-and-wait (previously speak-no-wait) strategy.

#### [web commands](../commands/web)
- shipped with <a href="https://github.com/mozilla/geckodriver/releases/tag/v0.21.0" class="external-link" target="nexial_external">geckodriver 0.21.0</a> 
  for Firefox browser.  Significant changes include:
  - minimum recommended Firefox changed: **Firefox 57 (or greater)**
  - (added) Support for the chrome element identifier from Firefox.
  - (added) The unhandledPromptBehavior capability now accepts accept and notify, dismiss and notify, and ignore options.
  - (changed) Firefox will now be started with the `-foreground` and `-no-remote` flags if they have not already been 
    specified by the user in `moz:firefoxOptions`.
    - `-foreground` will ensure the application window gets focus when Firefox is started, and `-no-remote` will 
      prevent remote commands to this instance of Firefox and also ensure we always start a new instance.
  - (changed) WebDriver commands that do not have a return value now correctly return `{value: null}` instead of an 
    empty dictionary.
  - (changed) The HTTP server now accepts Keep-Alive connections.
  - (changed) Firefox remote protocol command mappings updated.
  - (changed) Overhaul of Firefox preferences. Preferences marked as deprecated in before Firefox v57 are now removed.
  - (fixed) Force use of IPv4 network stack (even when `localhost` resolves to IPv6 address).
  - (fixed) geckodriver failed to locate the correct Firefox binary due to directory names.
  - (fixed) When stdout and stderr is redirected by geckodriver, a bug prevented the redirections from taking effect.
