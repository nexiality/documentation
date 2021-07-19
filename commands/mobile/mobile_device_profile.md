---
layout: default
title: Configure mobile device profile
parent: mobile
tags: command mobile android batch ios
comments: true
---


### Introduction
Nexial uses the concept of "profile" to configure your target mobile device, much like how a profile is used in
- [`aws.ses`](../aws.ses)
- [`aws.s3`](../aws.s3)
- [`aws.sqs`](../aws.sqs)
- [`ssh`](../ssh)
- [`web`](../web)
- [`webmail`](../webmail)
- [`mail`](../mail)

Using a "profile", one configure a set of settings for a specific device target. This also means that one could create
multiple profiles, each for a specific device target, and toggle amongst them as needed. Nexial extends of the idea of
data-driven automation via this "profile" concept so that the corresponding script would be resilient against 
configuration changes cause by device target.

A profile contains a set of configurations. These configurations share the same prefix (aka profile name) and can be
defined in a datasheet or [`project.properties`](../../userguide/UnderstandingProjectStructure#artifactprojectproperties).
Here are the common configurations for any device target:

(assuming profile name as `MY_MOBILE`)

| configuration                            | value                    | notes                                          |
|+----------------------------------------+|+------------------------+|+----------------------------------------------+|
|`MY_MOBILE.type`	                         | `android` or `ios`       | **(REQUIRED)**                                 |       
|`MY_MOBILE.server.url`	                   | `(empty)`or `http://...` | specify an externally managed Appium server URL |
|`MY_MOBILE.server.logging`	               | `true` or `false`        | if `true` an `appium.log` will be created in `<OUTPUT>/logs` | 
|`MY_MOBILE.nexial.mobile.postActionWaitMs`| (default) 1200           | override System default of the time (ms) to wait after each action |
|`MY_MOBILE.nexial.mobile.explicitWaitMs`	 | (default) 5000           | override System default of maximum wait time (ms) for explicit waits |
|`MY_MOBILE.nexial.mobile.implicitWaitMs`	 | (default) 2000           | override System default of implicit wait time (ms); Note that explicit wait takes precedence |
|`MY_MOBILE.geoLocation`	                 | (Emulator only)          | simulate another location via (longitude,latitude). For example `46.457398,-119.407305` |
|+----------------------------------------+|+------------------------+|+----------------------------------------------+|

<br/>Nexial supports all the <a href="https://appium.io/docs/en/writing-running-appium/caps/" class="external-link"
target="_nexial_link">Appium Desired Capabilities</a>. Simply prefix the capability name in question with the profile
name. For example,

| configuration                            | value                    | notes                                          |
|+----------------------------------------+|+------------------------+|+----------------------------------------------+|
|`MY_MOBILE.deviceName`	                   | The target device name   | equivalent to Appium Desired Capabilities / General Capabilities / `deviceName` |
|`MY_MOBILE.platformVersion`	             | Mobile OS version        | equivalent to Appium Desired Capabilities / General Capabilities / `platformVersion` |
|`MY_MOBILE.udid`	                         | **U**nique **D**evice **Id**entifier | equivalent to Appium Desired Capabilities / General Capabilities / `udid` |
|`MY_MOBILE.app`	                         | Location of target app   | equivalent to Appium Desired Capabilities / General Capabilities / `app` |
|`MY_MOBILE.orientation`	                 | (Emulator only) start application is a certain orientation | equivalent to Appium Desired Capabilities / General Capabilities / `orientation` |
|`MY_MOBILE.appPackage`                    | (Android only) package of the target app | equivalent to Appium Desired Capabilities / Android Only / `appPackage` |
|`MY_MOBILE.appActivity`	                 | (Android only) the activity name to wait for | equivalent to Appium Desired Capabilities / Android Only / `appPackage` |
|+----------------------------------------+|+-----------------------+|+-----------------------------------------------+|

