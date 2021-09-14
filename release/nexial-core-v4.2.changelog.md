---
layout: default
title: nexial-core 4.2 (2021-09-13)
parent: release
tags: release nexial-core 4.2
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v4.2_1321" class="external-link" target="_nexial_link">Release 4.2</a>
2021-09-13


### General

#### Fixes
- fixed `.commons.sh` for Linux environment where `JAVA_HOME` is not set
- better handling of logic to determine Java version and subsequently construct the appropriate `JAVA_OPT`

#### Improvements
- allow priority overrides (specified via `-override`) to take effect prior to loading project artifacts. As such, 
  these overrides can be specified via the `-override` command line argument. Previous requirement of using 
  `JAVA_OPT=-D...` is still supported so no script/batch file changes are required


### [Batch Files](../userguide/BatchFiles)
- [`nexial-project`](../userguide/BatchFiles#nexial-project): fixed minor edge condition during project creation


### [external commands](../commands/external)
- fixed runtime error when running external program without environment variable


### [javaui commands](../commands/javaui)
- First draft release of the **NEW** `javaui` commands. These commands are designed to support automation for Java 
  desktop application - Swing, SWT, RCP for now. Future release aim to support GEF and JavaFX. Underlying automation
  capability is based on jubula
- Commands currently implemented:
  - [`startLocalAgent(port)`](../commands/javaui/startLocalAgent(port))
  - [`stopLocalAgent(port)`](../commands/javaui/stopLocalAgent(port))
  - [`startApp(profile)`](../commands/javaui/startApp(profile))
  - [`stopApp(profile)`](../commands/javaui/stopApp(profile))
  - [`clickMenu(menus)`](../commands/javaui/clickMenu(menus))
  - [`waitForWindowTitle(title)`](../commands/javaui/waitForWindowTitle(title))
  - [`assertText(name,text)`](../commands/javaui/assertText(name,text))
  - [`assertEditable(name)`](../commands/javaui/assertEditable(name))
  - [`assertPresence(name)`](../commands/javaui/assertPresence(name))
  - [`assertEnabled(name)`](../commands/javaui/assertEnabled(name))
  - [`assertDisabled(name)`](../commands/javaui/assertDisabled(name))
  - [`typeText(name,text)`](../commands/javaui/typeText(name,text))
  - [`clickButton(name)`](../commands/javaui/clickButton(name))
- [`nexial-javaui-mapping`](../userguide/BatchFiles#nexial-javaui-mapping): batch file to start company mapping for 
  target Java application


### [mobile commands](../commands/mobile)
- [`assertAlertPresent(text)`](../commands/mobile/assertAlertPresent(text)): **NEW** command to alert that an alert
  dialog is present. iOS only
- [`clearAlert(option)`](../commands/mobile/clearAlert(option)): **NEW** command to clear/dismiss existing alert
  dialog. iOS only
- [`saveAlertText(var)`](../commands/mobile/saveAlertText(var)): **NEW** command to save the text content of an
  existing alert dialog. iOS only
- [`clearNotification()`](../commands/mobile/clearNotification()): **NEW** command to clear off all push notifications.
  Android only
- [`assertAttribute(locator,attribute,text)`](assertAttribute(locator,attribute,text)): **NEW** Command to assert
  attribute value for the first element that matched specified `locator`. PolyMatcher enabled
- [`saveAttributes(var,locator,attribute)`](../commands/mobile/saveAttributes(var,locator,attribute)): *NEW* command to
  collect the attribute values from a list of elements matching `locator`
- [`assertElementEnabled(locator)`](../commands/mobile/assertElementEnabled(locator)): **NEW** command to assert the
  presence and readiness (for interaction) of an element
- [`assertElementDisabled(locator)`](../commands/mobile/assertElementDisabled(locator)): **NEW** command to assert that
  an element is disabled for interaction
- [`assertElementNotVisible(locator)`](../commands/mobile/assertElementNotVisible(locator)): **NEW** command to assert
  that an element is either not present or not visible
- [`assertElementNotPresent(locator)`](../commands/mobile/assertElementNotPresent(locator)): **NEW** command to assert
  the absence of element(s)
- [`clickByDisplayText(text)`](clickByDisplayText(text)): fixed for iOS device
- [`click(locator)`](../commands/mobile/click(locator)): updated to improve stability
- [`longClick(locator,waitMs)`](../commands/mobile/longClick(locator,waitMs)): updated to improve stability
- [`scrollUntilFound(scrollTarget,direction,searchFor,maxWaitMs)`](../commands/mobile/scrollUntilFound(scrollTarget,direction,searchFor,maxWaitMs)):
  **NEW** command to scroll until a specific element is present
  - fix scrolling issue that cause UI to hang at times
- [`select(locator,item)`](../commands/mobile/select(locator,item)): 
  - performance and accuracy improvements
  - supports PolyMatcher on `item`
  - supports iOS automation
  - supports multi-dropdown components, such as Date Picker. Use pipe to separate values. For example, `Aug|26|2021`
  - implemented retry logic to improve stability
  - skip automation if the target `item` is already selected (optimization)
  - selects a dropdown item based on index via prefix `index:`
- [`copyToLocal(file,folder)`](../commands/mobile/copyToLocal(file,folder)): **NEW** command to copy file from host to 
  connected device
- [`selectLocalFile(device,folder,filename)`]: **NEW** command to select file from device's local storage
- [`type(locator,text)`](../commands/mobile/type(locator,text)):
  - code fix to clear off existing text before typing
  - clear text via BACKSPACE if the target element contains only spaces, to improve iOS compatibility
  - skip automation if target element already contains `text` (optimization)
- [`recentApps()`](recentApps()): fixed for iOS device
- [`launchApp(app)`](../commands/mobile/launchApp(app)): **NEW** command to launch or focus on an installed app based 
  on `appId` or `bundleId`
- [`use(profile)`](../commands/mobile/use(profile)): automatically relaunched the app that was previously closed via
  the [`closeApp`] command
- [`closeApp`](../commands/mobile/closeApp()): for Android platform, this command also reset the app since underlying
  driver is not _really_ shutting down the app
- [locator `text=`](../commands/mobile/index#locators): 
  - text locator now supports PolyMatcher (except for `REGEX:` and `NUMERIC:`)
  - allows for text to contain leading and trailing spaces
  - code fix to handle `text=...` locator for iOS automation (automatically convert to using `label` attribute)
- [locator `nearby=`](../commands/mobile/index#locators): 
  - nearby locator now supports `above` and `below` as well
  - support PolyMatcher on attribute values as well as text
  - support item priority via `{item:#}` where user can specify exactly the occurrence (of multiple matches) to use
  - support "container" (or parent) reference via `container:` and `scroll-container:`
  - implemented iOS support
  - optimizing locator generation
- [`one-of` locator](../commands/mobile/index.html#locators): **NEW** locator as a wrapper for device-specific locators.
- [android setup]:
  - fixed path references in `bin/mobile/android-setup.sh`
  - fixed shell script permission issues
  - [`bin/mobile/update-android-sdk`](../commands/mobile/android_setup#updating-android-sdk): utility script to update
    Android SDK.
- fixed executable reference in shell script:
  - `restart-adb.sh`
  - `run-android-emulator.sh`
  - `show-android-devices.sh`
- [`bin/mobile/nexial-apk-manifest`](../commands/mobile/mobile_device_profile#approach-1-use-nexials-nexial-apk-manifest-utility-script): 
  utility script to manifest `appId`, `appPackage` and `appActivity` of an Android app (`apk`)
- [`bin/mobile/run-appium-server`]: 
  - helper script to start appium server locally
  - updated to display appium server log in local time
- [`bin/mobile/copy-to-android.cmd|sh`](../commands/mobile/mobile_device_profile#copy-files-to-device): **NEW** utility 
  script to copy file from host to connected Android device
- [`bin/mobile/copy-to-ios.sh`](../commands/mobile/mobile_device_profile#copy-files-to-device): **NEW** utility script 
  to copy file from host to connected iOS device


### [web commands](../commands/web)
- update to latest geckodriver (firefox)
- [`click(locator)`](../commands/web/click(locator)): ensure target element is visible before performing click


### [webmail commands](../commands/webmail)
- reduce dependency on web command and webdriver


### [ws commands](../commands/ws)
- code fix to correctly treat text-based payload as such (instead of as binary stream)
- [`assertReturnCode(var,returnCode)`](../commands/ws/assertReturnCode(var,returnCode)): allows `returnCode` to be
  expressed as a list or range
- [`clearHeaders(headers)`](../commands/ws/clearHeaders(headers)): **NEW** command to clear HTTP request headers 
  previously set
 