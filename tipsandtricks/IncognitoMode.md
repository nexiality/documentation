---
layout: default
title: Execute Scripts in Incognito Mode
parent: Tips and Tricks
tags: command tipsandtricks web incognito private
comments: true
---

## Description
*(excerpt from [Computer Hope](https://www.computerhope.com/jargon/i/incognito.htm))*
> Alternatively referred to as private browsing, InPrivate Browsing, or a private window, Incognito mode is an 
> Internet browser setting that prevents browsing history from being stored. Normally, when you visit any web page, 
> any text, pictures, and cookies required by the page are stored locally on your computer. Additionally, any searches 
> or forms that are filled out may be stored in autocomplete fields. Incognito mode forgets this data when you close 
> the browser window, or doesn't store it at all.

Executing your Web automation in Incognito Mode has a few significant impact, including:
1. Cookies, cache, site data or history from your browser profile (from the normal browser mode) will not be considered 
   during Incognito Mode, and hence will not impact the automation thereof.
2. Any web data such as cookies, cache, site data, etc. will not be stored in your browser profile. Any web history 
   incurred during Incognito Mode will not be added to your browser profile either. At the end of the incognito 
   session (i.e. when the incognito browser is closed), such information will be deleted and hence will not impact the 
   subsequent Incognito sessions.
3. One may configure certain browser plugins or extensions to be disabled during Incognito mode, further limit or alter
   the behavior of the browsing experience.

The above points to the Incognito Mode as a great strategy to execute your Web automation within a pristine (in terms 
of browser) test harness. Such automation would more likely yield more consistent, more predictable behaviors and 
outcomes. Another way of describing the benefit is the reduction (or the eradication) of 
[flaky tests](https://hackernoon.com/flaky-tests-a-war-that-never-ends-9aa32fdef359). If you are interested, here
are a few more links on flaky tests:

- [Flaky tests, and how to reduce them](https://testinium.com/blog/flaky-tests-and-how-to-reduce-them/)
- [Specific tips on how to reduce Selenium flaky tests](https://www.shield34.com/blog/specific-tips-on-how-to-reduce-selenium-flaky-tests-that-every-coder-should-know/)
- [Flaky Selenium tests](https://ultimateqa.com/selenium-tests-flaky/)

-----

## How to...
To turn on Incognito Mode in Nexial, simply 
1. set your target browser via the [`nexial.browser`](../systemvars/index#nexial.browser) 
   System variable, and 
2. set [`nexial.browser.incognito`](../systemvars/index#nexial.browser.incognito) System variable to 
   `true`. 
   
That's it!

-----

## Selenium-speak
For those of you interested in how setting the `nexial.browser.incognito` affects the underlying Selenium-related code,
here's the low-down:

### Chrome
This is equivalent to adding a `--incognito` flag to the underlying chromedriver.

### Firefox
This is equivalent to adding `browser.privatebrowsing.autostart` as `true` to underlying firefox profile, which in turn
instructs the target Firefox binary to run in private mode.

### Safari
**(Not applicable)**
Like a private browsing session, an automation session always starts from a clean slate. It can’t access Safari’s 
browsing history, AutoFill data, or other sensitive information available in a normal browsing session. These 
isolated sessions also help to ensure that tests are unaffected by a previous test session’s persistent state.

More information available from [Apple Developer site](https://developer.apple.com/documentation/webkit/about_webdriver_for_safari)

### Internet Explorer
This is equivalent to adding the following webdriver options:
- `ie.browserCommandLineSwitches=-private`
- `ie.forceCreateProcessApi=true`

**Note**: For private/incognito mode to work properly and without increment new process per each open tab, one
must make a one-time adjustment to the Windows Registry on target test harness:

1. Open `regedit`
2. Point to `HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main`
3. Edit or create a key named `TabProcGrowth` (dword) with a value of `0`.

For more information, visit [MSDN:: Opening a New Tab may launch a New Process with Internet Explorer 8.0](https://blogs.msdn.microsoft.com/askie/2009/03/09/opening-a-new-tab-may-launch-a-new-process-with-internet-explorer-8-0/)

### Edge
This is equivalent to adding `InPrivate=true` to underlying EdgeDriver.  More details available 
[here](https://docs.microsoft.com/en-us/microsoft-edge/webdriver).

Some had reported that this does not work with specific (possibly older) Edge browser. As an alternative, one can 
achieve the "InPrivate" mode via the following steps 
(reference: [https://github.com/florentbr/SeleniumBasic/issues/89](https://github.com/florentbr/SeleniumBasic/issues/89)):

1. Set your target browser to Edge by setting [`nexial.browser`](../systemvars/index#nexial.browser) to `edge`.
2. From your script, [open](../commands/web/open(url)) to `about:InPrivate` **PRIOR** to your target website.
3. After that, proceed with your automation as planned.
