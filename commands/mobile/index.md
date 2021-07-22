---
layout: default
title: mobile
tags: command mobile
comments: true
---


### Description
As the name suggests, this is a collection of commands to support mobile automation, with mobile testing as the common 
form. Generally speaking, there are 3 strategies towards mobile testing:
- via emulators
- via real devices connected to the automation host
- via cloud testing provider (such as BrowserStack or CrossBrowserTesting)

Nexial intends to support all 3 types of mobile testing for both iOS and Android devices. However, the availability on 
these capabilities will be rolled out over time.

Nexial internally uses <a href="https://appium.io/" class="external-link" target="_nexial_link">Appium</a> to perform
the communication and data transport between your automation scripts and the target devices. Unless of urgent or 
critical matter (such as a high priority security patch), Nexial will only ship with the last official stable release 
of Appium.

In order to perform mobile automation, here are the steps to follow:
1. [Install and Configure Appium](install_appium)
2. [Install Android SDK and Emulators](android_setup) - if you are targeting Android devices
3. [Install XCode and iOS Emulators] - if you are targeting iOS devices **_COMING SOON!_**
4. [Configure Mobile Device Profile](mobile_device_profile)
5. [Scripting with Emulator](script_with_emulator)
6. [Run your Mobile Automation on BrowserStack] - if you are planning to run your test via BrowserStack **_COMING SOON!_**

Click on each of the links above to get started.

The "mobile" command type represents a series of automation commands regarding mobile automation:

### Available Commands
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertLocked()`](assertLocked())
- [`assertTextPresent(locator,text)`](assertTextPresent(locator,text))
- [`back()`](back())
- [`click(locator)`](click(locator))
- [`clickByDisplayText(text)`](clickByDisplayText(text))
- [`clickUntilNotFound(locator,waitMs,max)`](clickUntilNotFound(locator,waitMs,max))
- [`closeApp()`](closeApp())
- [`doubleClick(locator,xOffset,yOffset)`](doubleClick(locator,xOffset,yOffset))
- [`forward()`](forward())
- [`hideKeyboard()`](hideKeyboard())
- [`home()`](home())
- [`lock()`](lock())
- [`longClick(locator,waitMs)`](longClick(locator,waitMs))
- [`orientation(mode)`](orientation(mode))
- [`recentApps`](recentApps())
- [`saveCount(var,locator)`](saveCount(var,locator))
- [`saveLockStatus(var)`](saveLockStatus(var))
- [`screenshot(file,locator)`](screenshot(file,locator))
- [`scroll(locator,direction)`](scroll(locator,direction))
- [`sendSms(phone,message)`](sendSms(phone,message))
- [`shake()`](shake())
- [`shutdown(profile)`](shutdown(profile))
- [`slide(start,end)`](slide(start,end))
- [`type(locator,text)`](type(locator,text))
- [`unlock()`](unlock())
- [`use(profile)`](use(profile))
- [`waitForElementPresent(locator,waitMs)`](waitForElementPresent(locator,waitMs))
- [`zoom(start1,end1,start2,end2)`](zoom(start1,end1,start2,end2))