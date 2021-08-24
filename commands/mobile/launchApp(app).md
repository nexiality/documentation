---
layout: default
title: launchApp(app)
parent: mobile
tags: command mobile profile bundle-id
comments: true
---


### Description
This command instructs Nexial to launch or activate an app on the current device. The `app` parameter would be either
the `bundleId` for iOS platform or the `appId` for Android platform. The target app should be installed on the device 
prior to the invocation of this command. If the target app is already running in the background, this command will 
bring it to the foreground. 

Using this command, one can launch both custom apps, common apps and System apps. Here are some common ones to try:

##### common Android `appId`
- Calculator: `com.android.calculator2`
- Youtube: `com.google.android.youtube`

Wanna find `appId` for other apps? Try 
<a href="https://www.techmesto.com/find-android-app-package-name/" class="external-link" target="_nexial_link">this</a>


##### common iOS `bundleId`
- Home Screen/Application Launcher: `com.apple.springboard`

- AirPort Utility: `com.apple.airport.mobileairportutility`
- App Store: `com.apple.AppStore `
- Apple Maps:  `com.apple.Maps`
- Calculator: `com.apple.calculator`
- Calendar: `com.apple.mobilecal`
- Camera: `com.apple.camera`
- Clock: `com.apple.mobiletimer`
- Compass: `com.apple.compass`
- Contacts: `com.apple.MobileAddressBook`
- FaceTime: `com.apple.facetime`
- Find Friends: `com.apple.mobileme.fmf1`
- Find iPhone: `com.apple.mobileme.fmip1`
- Game Center: `com.apple.gamecenter`
- GarageBand: `com.apple.mobilegarageband`
- Health: `com.apple.Health`
- Keynote: `com.apple.Keynote`
- Mail: `com.apple.mobilemail`
- Maps: `com.apple.Maps`
- Messages: `com.apple.MobileSMS`
- Music Memos: `com.apple.musicmemos`
- Music: `com.apple.Music`
- News: `com.apple.news`
- Notes: `com.apple.mobilenotes`
- Passbook: `com.apple.Passbook`
- Phone: `com.apple.mobilephone`
- Photos: `com.apple.mobileslideshow`
- Podcasts: `com.apple.podcasts`
- Reminders: `com.apple.reminders`
- Safari: `com.apple.mobilesafari`
- Settings: `com.apple.Preferences`
- Stocks: `com.apple.stocks`
- Tips: `com.apple.tips`
- Videos: `com.apple.videos`
- Voice Memos: `com.apple.VoiceMemos`
- Wallet: `com.apple.Passbook`
- Watch: `com.apple.Bridge`
- Weather: `com.apple.weather`
- iBooks: `com.apple.iBooks`
- iMovie: `com.apple.iMovie`
- iTunes Store: `com.apple.MobileStore`
- iTunes U: `com.apple.itunesu`


### Parameters
- **app** - The `appID` (Android) or `bundleId` (iOS) of the target app.


### Example
`mobile` | `launchApp(app)` | `com.apple.Preferences`


### See Also
- [`closeApp()`](closeApp())
- [`recentApps()`](recentApps())
