---
layout: default
title: nexial-core 1.3 (2018-07-06)
parent: release
tags: release nexial-core 1.3
comments: true
---

### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-v1.3_0110" class="external-link" target="_nexial_link">Release 1.3</a>
2018-07-06

### General
- upgraded to Kotlin 1.2.50.
- improved log file information, to be in sync with almost ALL console output messages.
- fixed logic when [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud) is set to `true`, but 
  `Nexial Cloud Integration` is not properly set up.
- when [`nexial.outputToCloud`](../systemvars/index#nexial.outputToCloud) is set to `true`, Nexial will re-upload log 
  files to S3 at the end of the execution. So that the log file will have the complete log information.
- fixed logic to determine chrome log location and file name.
- output spreadsheet now includes link to multiple log files for completeness.
- fixed error that was preventing execution summary (JSON) to upload to cloud storage.
- [Nexial Installer](https://github.com/nexiality/nexial-installer/releases) for Linux, Mac and Windows is now available.
  For the usage, read [Nexial Installer README](https://github.com/nexiality/nexial-installer/blob/master/README.md) 
- [PR #6])(https://github.com/nexiality/nexial-core/pull/6) `bin/nexial.cmd` exits with the actual exit code from Nexial.
- fix for linux to use `which` instead of `which --read-alias` when resolving location of browser execution. This 
  should resolve problem when running Nexial in TTY.
- fixed `commons.sh` to properly handle situation where a browser can be found in multiple locations.

#### Built-in Function
- fixed parsing logic to honor escaping conflicting characters such as `$`, `(`, `)` and `|`.  These characters are 
  considered as conflict since they are used to define built-in functions.

#### Event Notification
- due to the close in time between start of an execution, the first script and the first scenario, the TTS notification
  has been modified to opt for speak-and-wait (previously speak-no-wait) strategy.

#### Nexial Expression

###### [CSV expression]
- added  **`maxColumns`** as an optional configuration during `parse()` to instruct Nexial to allocate beyond the 
  default max columns (512) in order to process very wide CSV file. Note that changing this value will have both memory 
  footprint and performance implication. This setting is usually not needed.
- fixed [`CSV expression`](../expressions/CSVexpression) to accurately parse the match items in a "is" or "in" filter.
  For example, `filter(Name in [Johnny|Sammy|Manny])`.
  Refer [Documentation for Nexial filter](https://nexiality.github.io/documentation/flowcontrols/filter) for details.

#### System variables
- added new System variable - [`nexial.web.preemptiveAlertCheck`](../systemvars/index#nexial.web.preemptiveAlertCheck)
  to opt out for pre-emptive checks of `alert`,`confirm` or `prompt` (JavaScript) dialogs during web automation.
  This pre-emptive checks are turned on by default for convenience.  However for performance reason one might opt to
  turn off this check (which DOES take time), esp. when automating a web app that does not generate JavaScript dialog
  (`alert`, `confirm` or `prompt`). Our simple tests show that switching this System variable to `false` (default is `true`)
  yields about 15-20% time improvement.
  - note that if this System variable is set to `true` or undefined, any harvested alert text would be available via the
    [`nexial.lastAlertText`](../systemvars/index.md#nexial.lastAlertText) System variable.
- System variable [`nexial.safari.cleanSession`](../systemvars/index#nexial.safari.cleanSession) removed since safari now
  ALWAYS open clean session.    

#### [web commands](../commands/web)
- shipped with <a href="https://raw.githubusercontent.com/SeleniumHQ/selenium/master/java/CHANGELOG" class="external-link" target="_nexial_link">Selenium v3.13.0</a>.
  Significant changes include:
  - Exposing a `RemoteWebDriverBuilder` which can be used to construct instances of selenium when talking to servers 
    that speak the w3c protocol.
  - Fixed loading of Grid hub and node config files.
  - Fixed `noProxy` handling in Grid.
  - Added bindings for custom ChromeDriver commands (GET_NETWORK_CONDITIONS, SET_NETWORK_CONDITIONS and 
    DELETE_NETWORK_CONDITIONS) that allows client code to utilize built-in throttling functionality. (#3479)
  - Minimised data being encoded as JSON when serialising Java objects.
  - EventFiringWebDriver now fires events before and after `getText` and implements `HasCapabilities`.
- shipped with <a href="https://github.com/mozilla/geckodriver/releases/tag/v0.21.0" class="external-link" target="_nexial_link">geckodriver 0.21.0</a> 
  for Firefox browser. Significant changes include:
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
- shipped with <a href="https://raw.githubusercontent.com/SeleniumHQ/selenium/master/cpp/iedriverserver/CHANGELOG" class="external-link" target="nexial_external">IE Driver 3.12.0.4</a> 
  for Internet Explorer browser. Most significant changes (since 3.9) - there are **A LOT** - are:
  - (v3.12.0.4) Use elementFromPoint for IE driver in determining obscured elements. This is in direct violation of the 
    algorithm specified in the W3C WebDriver Specification, but it fixes a class of IE-specific bugs that present 
    themselves when using elementsFromPoint. This is used to shortcut the use of elementsFromPoint if it is not necessary.
  - (v3.12.0.4) Added additional logging to IE driver for setting window focus.
  - (v3.12.0.4) Updated IE driver to use SendInput for a single input at a time. The IE driver uses the Windows 
    `SendInput` API when a session is initiated with the `requireWindowFocus` capability. 
  - (v3.12.0.3) Refactored IE waiting for page load on click. This commit restores some previously lost functionality 
    for waiting for a page to load on click of an element. The race condition for detecting when a navigation is started 
    is mitigated by a short wait (50ms) on the click.
  - (v3.12.0.3) Made "eager" page load strategy not wait for frame navigation to be completed before returning.
  - (v3.12.0.2) Updated to better support using CreateProcess API for launching IE.
  - (v3.12.0.1) Update close window command to return list of remaining window handles, for consistency with the W3C 
    WebDriver Specification. Unfortunately this change incurred a performance hit due to wait time required to collect
    the proper list of window handles.
  - (v3.12.0.0) Added alert text to error response for unexpected alerts. This is to maintain consistency with other 
    implementations.
  - (v3.12.0.0) Added checking of variant type for returns from JavaScript execution.
  - (v3.11.1.6) Updated find element by link text atom to handle non-breaking spaces. The WebDriver W3C Specification 
    states that when finding by link text, the text of a link element (<a>) should be trimmed of leading and trailing
    whitespace after calling getVisibleText on the element before comparison. Links with text that contains leading or 
    trailing non-breaking spaces (&nbsp) were having the non-breaking spaces converted to regular spaces, but not 
    trimmed after the fact. This commit corrects that oversight.
  - (v3.11.1.6) Made IE cookie expiration times integer values, as dictated by the W3C WebDriver Specification.
  - (v3.11.1.6) Modified to throw exception clicking on file upload elements in IE. The WebDriver W3C Specification 
    states that if a user attempts to click a file upload element (<input type="file">), an error should be returned. 
    **This is consistent with the intended behavior of WebDriver from the start, which is that to upload a file, one 
    should use sendKeys, not click() on the input element. This now codifies that behavior with returning an error.**
  - (v3.11.1.5) Initial implementation of taking element screenshots.
  - (v3.11.1.4) Fixed finding child elements to return proper error if parent element is stale. Fixes issue #5700.
  - (v3.11.1.3) Fixed detection of obscured elements when top element is not displayed. Fixes issue #5668.
  - (v3.11.1.1) Separated out detection of focusable elements for sendKeys in IE. Allows separate error messages for 
    attempting to send keys to a non-focusable element. Also fixes sending keystrokes to `<option>` elements by 
    forwarding the detections to the parent <select> element.
  - (v3.11.1.1) Fixed obscured element detection in IE for elements in frames.
  - (v3.11.1.1) Added IsFocusable method to IE driver Element class.
  - (v3.11.1.1) Added Protected Mode boundary crossing detection mechanism in IE. When a Protected Mode boundary is 
    crossed by navigation (entering or exiting Protected Mode), the existing browser instance is destroyed and a new one 
    created in its place by Interent Explorer. This commit adds detection for when a browser instance is being closed,
    but without an explicit call to the WebDriver close() or quit() methods.  
  - (v3.11.1.0) Updated all C++ projects for the IE driver to use the Windows 8.1 SDK. No longer compatible with XP.
  - (v3.11.0.0) Added additional logging to new session command.
  - (v3.11.0.0) Added detection of intercepted element clicks to IE. This brings the IE driver into alignment with the 
    Chrome and Firefox (geckodriver) drivers, in that it detects when an element attempting to be clicked on is covered
    in the z-order by another element.
  - (v3.10.0.2) Fixed clear element command to handle cases where the element's parent document is undefined.
  - (v3.10.0.2) Fixed sending keystrokes with native events disabled.
  - (v3.10.0.1) Updated clear element command handler to return W3C compliant errors for IE.
  - (v3.10.0.1) Updated IE error response to be spec compliant for sendKeys
  - (v3.10.0.1) Fixed IE cookie retrieval for IE 10 and 11.
  - (v3.10.0.1) Revamped handling of modifier keys. The IE driver is now able to distinguish between the left and right 
    modifier keys (Shift, Control, Alt) on the keyboard.
  - (v3.10.0.1) Modified mouse event handling to match W3C Specification.<br/> 
    **THIS IS A POTENTIAL BREAKING CHANGE.**<br/>
    The simulation of mouse movement for the actions command now conforms to the W3C WebDriver Specification for 
    mouse movement. This means that offsets in elements are now measured from the center of the element instead of 
    the top-left, which was the previous behavior. Additionally, attempting to move the mouse pointer outside the 
    browser view port will result in a "mouse movement out of bounds" error. 
  - (v3.10.0.1) Modified processing of pause actions in keyboard action sequences. The vast majority of use of pause 
    actions in a keyboard action sequence are used to synchronize the entire action chain with other (mouse) action 
    sequences. To allow the driver to properly synchronize the input sequences, the driver will now ignore the duration 
    property of pause events in keyboard action sequences.
  - (v3.10.0.1) Fixed sending keystrokes outside the Basic Multilingual Plane. This allows emoji and other Unicode 
    characters that are represented by surrogate pairs in UTF-16 to be sent to IE.
  - (v3.10.0.1) Fixed getElementProperty to return proper data type. Previously, the getElementProperty command would 
    coerce the property value to a string. This is not correct behavior as specified in the W3C spec.
  - (v3.9.0.4) Updated get active element command in IE to handle missing body element. This change is required to make 
    the driver compliant with the W3C WebDriver Specification.
  - (v3.9.0.4) Changed new session command in IE to allow empty timeouts list. This change is required to make the 
    driver compliant with the W3C WebDriver Specification.
  - (v3.9.0.4) Fixed IE driver element detection for user-executed JavaScript. This commit fixes a corner case where 
    elements added to the known element repository via non-JavaScript means were not being properly detected when the 
    same element was located via user-executed JavaScript.
  - (v3.9.0.3) Refactored user input simulation code in IE driver. This commit breaks out the three modes of user 
    input simulation (native events using SendMessage, native events using SendInput, simulated events using 
    JavaScript) into separate classes, making it easier to debug. Additionally, this commit removes the code for 
    enabling persistent hovers.
  - (v3.9.0.3) Added support allowing binding to IPv6 loopback in IE driver. When no host and no list of whitelisted IP 
    addresses are specified, IEDriverServer.exe now bind to both the IPv4 & IPv6 loopback adapters.
  - (v3.9.0.2) Reduced overall wait interval time.
  - (v3.9.0.2) Shortened IE sleep interval looping for JavaScript execution completion. This prevents excessively long 
    delays for Selenium commands executed via executeScript, like submit(), isDisplayed(), or getAttribute().
  - (v3.9.0.2) Moved double-click detection logic inside InputManager for IE. This also will prevents unnecessary 
    expensive sleeps in the click command handler.
  - (v3.9.0.2) Updated to better handle non-US keyboards in sendKeys. In the transition to support the W3C 
    specification, using sendKeys on non-US keyboard layouts got broken.
  - (v3.9.0.1) Made JavaScript execution asynchronous for executeScript in IE. Prior to this change, the execution of 
    JavaScript via the executeScript method was synchronous. This would mean that if the script passed into the driver 
    called the JavaScript `alert()`, `confirm()`, or `prompt()` functions, the WebDriver code would hang until the 
    dialog was manually dismissed. Moving this to asynchronous execution allows the driver to be compliant with the 
    W3C WebDriver Specification, that mandates that user prompts triggered by executeScript should be able to be 
    handled by the WebDriver alert handling functions. However, this spec compliance comes at several costs.<br/>
    - The first cost is complexity. The IE driver uses COM interfaces to communicate with Internet Explorer. COM is 
      inherently single-threaded, and requires a fair amount of manipulation to allow accessing the objects on separate 
      threads. This leads to requiring a fairly complex system of communication and synchronization between the threads 
      to give the illusion of a synchronous script execution.
    - The second cost is performance. Because of the need for synchronization, this change **may** introduce a 
      performance hit in the IE driver. This is unfortunate, but unavoidable. The benefit of having user-initiated 
      JavaScript not block and hang WebDriver code far outweighs the relatively small performance hit introduced.
    - Finally, there is every chance that, despite all efforts to the contrary, it's possible that there are new 
      regressions introduced by this change. Multiple test suites have been run using this change, and none have 
      failed thus far due to the changes herein. Claims that this change is causing a specific failure should be 
      accompanied by a full test case, or issues reported against this change will be summarily closed.
  - (v3.9.0.0) Removed clearing of known element cache on document navigation. This was causing incorrect 
    NoSuchElementException when StaleElementReferenceException was expected.
  - (v3.9.0.0) Updated IE driver alert detection to get alert text from "repeat" alerts. This commit should allow the 
    proper retrieval of alert text from IE alerts that happen "repeatedly." That is, those that have the checkbox 
    stating "Do not let this page create any more alerts." Unlike standard Windows alerts, these use controls that are 
    only available via Active Accessibility to retrieve the text. The driver now is able to detect and retrieve text 
    from these types of alerts.
- code fix to avoid exception in [web &raquo; `selectWindowByIndex(index)`](../commands/web/selectWindowByIndex(index))
- preliminary support for Electron app automation. To use this, 
  1. set `nexial.browser` to `electron`.
  2. set `nexial.browser.electron.appLocation` to the path of the target Electron application binary/executable.
  - most web commands should work. The following commands are currently not supported (by either Electron or the 
    underlying WebDriver):
    - [web &raquo; `maximizeWindow()`](../commands/web/maximizeWindow())
    - [web &raquo; `resizeWindow(width,height)`](../commands/web/resizeWindow(width,height))
    - [web &raquo; `goBack()`](../commands/web/goBack())
    - [web &raquo; `goBackAndWait()`](../commands/web/goBackAndWait())
- update to [latest version of chromedriver built for electron app](https://github.com/electron/electron/releases/tag/v2.0.4).
- update Edge WebDriver to version: 6.17134
  - Edge version supported: 17.17134
- update code to initialize firefox and geckodriver; no more deprecated calls.
  - when checking for browser and webdriver readiness, treat "unexpected end of stream on Connection" and "Software 
    caused connection abort: recv failed" NOT as fatal so that Nexial can avoid opening new browser (as attempts to 
    revive from webdriver crash).
  - added settings to firefox to favor tab over windows.
  - added settings to firefox to allow windows to be closed via JavaScript.