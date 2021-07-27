---
layout: default
title: Configure mobile device profile
parent: mobile
tags: command mobile android batch ios
comments: true
---


### Introduction
Nexial uses the concept of "profile" to configure your target mobile device, much like how a profile is used in
[`aws.ses`](../aws.ses), [`aws.s3`](../aws.s3), [`aws.sqs`](../aws.sqs), [`ssh`](../ssh), [`web`](../web), 
[`webmail`](../webmail), [`mail`](../mail), etc. Using a "profile", one configure a set of settings for a specific 
device target. This also means that one could create multiple profiles, each for a specific device target, and toggle 
amongst them as needed. Nexial extends of the idea of data-driven automation via this "profile" concept so that the 
corresponding script would be resilient against configuration changes cause by device target.

A profile is essentially a set of configurations with a shared prefix (aka profile name). These configurations can be
defined in a datasheet or [`project.properties`](../../userguide/UnderstandingProjectStructure#artifactprojectproperties).
A profile is referenced by the [`use(profile)`](use(profile)) command to start a mobile automation session. Consequently
the same [`use(profile)`](use(profile)) command should be considered as the first command to invoke when perform mobile 
testing, so that the appropriate device context and appium runtime is instantiated.


### Configuration
Here are the common configurations for any device target:
(assuming profile name as `MY_MOBILE`)

| configuration                            | value                    | notes                                          |
|+----------------------------------------+|+------------------------+|+----------------------------------------------+|
|`MY_MOBILE.type`	                         | `android` or `ios`       | **(REQUIRED)**                                 |       
|`MY_MOBILE.server.url`	                   | `(empty)`or `http://...` | specify an externally managed Appium server URL. If none is specified, Nexial will start Appium server internally and terminate it when the execution is complete. |
|`MY_MOBILE.server.logging`	               | `true` or `false`        | if `true`, Appium-specific logs will be created under `<OUTPUT>/logs/appium.log`. | 
|`MY_MOBILE.nexial.mobile.sessionTimeoutMs`| (default) 300000         | override [`System variable of the same name`](../../systemvars/index.html#nexial.mobile.sessionTimeoutMs). |
|`MY_MOBILE.nexial.mobile.postActionWaitMs`| (default) 0              | override [`System variable of the same name`](../../systemvars/index.html#nexial.mobile.postActionWaitMs). |
|`MY_MOBILE.nexial.mobile.explicitWaitMs`	 | (default) 5000           | override [`System variable of the same name`](../../systemvars/index.html#nexial.mobile.explicitWaitMs). |
|`MY_MOBILE.nexial.mobile.implicitWaitMs`	 | (default) 0              | override [`System variable of the same name`](../../systemvars/index.html#nexial.mobile.implicitWaitMs). |
|`MY_MOBILE.nexial.mobile.hideKeyboard`	   | (default) true           | override [`System variable of the same name`](../../systemvars/index.html#nexial.mobile.hideKeyboard). |
|`MY_MOBILE.geoLocation`	                 | (Emulator only)          | simulate another location via (longitude,latitude). For example `46.457398,-119.407305`. |
|+----------------------------------------+|+------------------------+|+----------------------------------------------+|

<br/>Nexial supports all the <a href="https://appium.io/docs/en/writing-running-appium/caps/" class="external-link"
target="_nexial_link">Appium Desired Capabilities</a>. Simply prefix the capability name in question with the profile
name. For example,

| configuration              | purpose                              | reference under Appium Desired Capabilities    |
|+--------------------------+|+------------------------------------+|+----------------------------------------------+|
|`MY_MOBILE.deviceName`	     | The target device name               |  General Capabilities &raquo; `deviceName`     |
|`MY_MOBILE.platformVersion` | Mobile OS version                    | General Capabilities &raquo; `platformVersion` |
|`MY_MOBILE.udid`	           | **U**nique **D**evice **Id**entifier | General Capabilities &raquo; `udid`            |
|`MY_MOBILE.app`	           | Location of target app               | General Capabilities &raquo; `app`             |
|`MY_MOBILE.orientation`	   | (Emulator only) start application in a certain orientation | General Capabilities &raquo; `orientation` |
|`MY_MOBILE.appPackage`      | (Android only) package of the target app | Android Only &raquo; `appPackage`          |
|`MY_MOBILE.appActivity`	   | (Android only) the activity name to wait for | Android Only &raquo; `appPackage`      |
|+--------------------------+|+------------------------------------+|+----------------------------------------------+|

