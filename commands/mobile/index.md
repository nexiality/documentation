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
the communication and data transport between your scripts and the target devices. Unless of urgent or critical matter 
(such as a high priority security patch), Nexial will only ship with the last official stable release of Appium.

In order to perform mobile automation, here are the steps to follow:
1. [Install and Configure Appium](install_appium)
2. [Install Android SDK and Emulators](android_setup) - if you are targeting Android devices
3. [Install XCode and iOS Emulators] - if you are targeting iOS devices **_COMING SOON!_**
4. [Configure Mobile Device Profile](mobile_device_profile)
5. [Scripting with Emulator](script_with_emulator)
6. [Run your Mobile Automation on BrowserStack] - if you are planning to run your test via BrowserStack **_COMING SOON!_**

Click on each of the links above to get started.


### Locators
Those who are familiar with [web Automation](../web) knows that there are multiple types of 
[locators](../web/index#locators) (also known as selectors) to identify Web elements and to interact with them. For 
mobile automation, the use of locator is equally critical. However, there are some differences between these two types 
of automation. For one, not all the locators are available in mobile automation due to the underlying implementation 
mismatch (CSS, for example). Mobile automation also brings about a few new/unique locators as well.

For more details about using Appium Desktop to inspect elements and find locator, please visit Appium documentation on 
<a href="http://appium.io/docs/en/writing-running-appium/finding-elements/" class="external-link" target="_nexial_link">
Finding and interacting with elements</a>.

{% include_relative _locators.html %}

-----

### Available Commands
In almost all cases, one would start with the [`use(profile)`](use(profile)) command to establish connectivity between
Nexial, Appium server and the target device. Without proper connectivity, none of these commands would run correctly. 
When finished, use the [`closeApp()`](closeApp()) command to close down the application configured for a `profile`.
One then can switch to another profile via the same [`use(profile)`](use(profile)) command -- potentially to connect to
another device or another Appium server.

If Appium server is configured to start internally within Nexial, one can also terminate it via the 
[`shutdown(profile)`](shutdown(profile)) command.

Click on one of the links below to learn about each command.

- [`assertCount(locator,count)`](assertCount(locator,count))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertElementsPresent(prefix)`](assertElementsPresent(prefix))
- [`assertElementVisible(locator)`](assertElementVisible(locator))
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
- [`saveText(var,locator)`](saveText(var,locator))
- [`saveTextArray(var,locator)`](saveTextArray(var,locator))
- [`screenshot(file,locator)`](screenshot(file,locator))
- [`scroll(locator,direction)`](scroll(locator,direction))
- [`select(locator,item)`](select(locator,item))
- [`sendSms(phone,message)`](sendSms(phone,message))
- [`shake()`](shake())
- [`shutdown(profile)`](shutdown(profile))
- [`slide(start,end)`](slide(start,end))
- [`type(locator,text)`](type(locator,text))
- [`unlock()`](unlock())
- [`use(profile)`](use(profile))
- [`waitForElementPresent(locator,waitMs)`](waitForElementPresent(locator,waitMs))
- [`zoom(start1,end1,start2,end2)`](zoom(start1,end1,start2,end2))
