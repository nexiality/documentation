---
layout: default
title: mobile
tags: command mobile
comments: true
---


### Description
As the name suggests, this is a collection of commands to support mobile automation, with mobile testing as the common 
form. Generally speaking, there are 3 strategies for mobile testing:
- via emulators
- via real devices connected to the automation host
- via cloud testing provider (such as BrowserStack or CrossBrowserTesting)

Nexial intends to support all 3 types of mobile testing for both iOS and Android devices. However, the availability of 
these capabilities will be rolled out over time.

Nexial internally uses <a href="https://appium.io/" class="external-link" target="_nexial_link">Appium</a> to perform
the communication and data transport between your scripts and the target devices. Unless of urgent or critical matter 
(such as a high priority security patch), Nexial will only ship with the last official stable release of Appium.

To perform mobile automation, here are the steps to follow:
1. [Install and Configure Appium](install_appium)
2. [Install Android SDK and Emulators](android_setup) - if you are targeting Android devices
3. [Install Xcode and iOS Emulators](ios_setup) - if you are targeting iOS devices
4. [Configure Mobile Device Profile](mobile_device_profile)
5. [Scripting with Emulator](script_with_emulator)
6. [Run your Mobile Automation on BrowserStack] - if you are planning to run your test via BrowserStack **_COMING SOON!_**

Click on each of the links above to get started.


### Locators
Those who are familiar with [Web Automation](../web) know that there are multiple types of 
[locators](../web/index#locators) (also known as selectors) to identify Web elements and interact with them. For 
mobile automation, the use of locators is equally critical. However, there are some differences between these two types 
of automation. For one, not all the locators are available in mobile automation due to the underlying implementation 
mismatch (CSS, for example). Mobile automation also brings about a few new/unique locators as well.

For more details about using Appium Desktop to inspect elements and find locator, please visit Appium documentation on 
<a href="http://appium.io/docs/en/writing-running-appium/finding-elements/" class="external-link" target="_nexial_link">
Finding and interacting with elements</a>.

{% include_relative _locators.html %}

-----

### Available Commands
In almost all cases, one would start with the [`use(profile)`](use(profile)) command to establish connectivity between
Nexial, Appium server, and the target device. Without proper connectivity, none of the "mobile" commands would run 
correctly. When finished, use the [`closeApp()`](closeApp()) command or [`shutdown(profile)`](shutdown(profile)) to 
close down the application configured for a `profile`. One then can switch to another profile via the 
[`use(profile)`](use(profile)) command -- potentially to connect to another device or another Appium server.

If the Appium server is configured to start internally within Nexial, one can also terminate it via the 
[`shutdown(profile)`](shutdown(profile)) command.

Click on one of the links below to learn about each command.
- [`assertAlertPresent(text)`](assertAlertPresent(text))
- [`assertCount(locator,count)`](assertCount(locator,count))
- [`assertElementDisabled(locator)`](assertElementDisabled(locator))
- [`assertElementEnabled(locator)`](assertElementEnabled(locator))
- [`assertElementNotPresent(locator)`](assertElementNotPresent(locator))
- [`assertElementNotVisible(locator)`](assertElementNotVisible(locator))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertElementVisible(locator)`](assertElementVisible(locator))
- [`assertElementsPresent(prefix)`](assertElementsPresent(prefix))
- [`assertLocked()`](assertLocked())
- [`assertTextPresent(locator,text)`](assertTextPresent(locator,text))
- [`back()`](back())
- [`clearAlert(option)`](clearAlert(option))
- [`clearNotification()`](clearNotification())
- [`click(locator)`](click(locator))
- [`clickByDisplayText(text)`](clickByDisplayText(text))
- [`clickUntilNotFound(locator,waitMs,max)`](clickUntilNotFound(locator,waitMs,max))
- [`closeApp()`](closeApp())
- [`copyToLocal(file,folder)`](copyToLocal(file,folder))
- [`doubleClick(locator,xOffset,yOffset)`](doubleClick(locator,xOffset,yOffset))
- [`forward()`](forward())
- [`hideKeyboard()`](hideKeyboard())
- [`home()`](home())
- [`launchApp(app)`](launchApp(app))
- [`lock()`](lock())
- [`longClick(locator,waitMs)`](longClick(locator,waitMs))
- [`orientation(mode)`](orientation(mode))
- [`recentApps`](recentApps())
- [`saveAlertText(var)`](saveAlertText(var))
- [`saveAttributes(var,locator,attribute)`](saveAttributes(var,locator,attribute))
- [`saveCount(var,locator)`](saveCount(var,locator))
- [`saveLockStatus(var)`](saveLockStatus(var))
- [`saveText(var,locator)`](saveText(var,locator))
- [`saveTextArray(var,locator)`](saveTextArray(var,locator))
- [`screenshot(file,locator)`](screenshot(file,locator))
- [`scroll(locator,direction)`](scroll(locator,direction))
- [`scrollUntilFound(scrollTarget,direction,searchFor,maxWaitMs)`](scrollUntilFound(scrollTarget,direction,searchFor,maxWaitMs))
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
