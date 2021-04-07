---
layout: default
title: Wait Strategies for Web Automation
parent: Tips and Tricks
tags: command tipsandtricks web wait timeout
comments: true
---

<style>
table {
	width: 950px;
	margin: 15px 0;
	font-size: 10pt;
	font-family: Tahoma, serif;
}

table th {
	font-weight: bold;
}

table td code {
	background-color: transparent;
	border: none;
	font-family: Consolas, monospace;
}

</style>

### Description
Web applications are getting fancier by the minute; web designers and developers everywhere seem to be constantly 
outdoing each other on pushing the boundaries of web development and breaking the conventions of the Internet. Of 
course, that translates to more work and more challenges for the automation folks...

To achieve effective web automation, different strategies should be considered for different web applications (or 
frameworks). This article will list out a few of such strategies, with a focus on the "wait"-related techniques. While 
not an exhaustive list, some of these strategies should be a good starting point towards effective web automation.

Since Nexial uses Selenium and WebDriver behind the scene, many of these "wait" strategies come directly from Selenium.
Note that, while Selenium provides various time units, Nexial uses **milliseconds** throughout for consistency's sake.


### Fixed Wait
Perhaps the most almost direct form of wait, the fixed wait is easy to understand and to implement. One simply adds a 
"wait" step, allowing the target web application to "_catch up_", and then proceed to the intended automation step. For
example,

| description	                  | cmd type   | command               | param 1            |
|:------------------------------|-----------:|:----------------------|:-------------------|
| click to submit login request	| `web`	     | `click(locator)`      | `css=.loginSubmit` |
| wait for page to load	        | **`base`** | **`waitFor(waitMs)`** | **`5000`**         |
| click on My Orders link	      | `web`	     | `clickByLabel(label)` | `My Orders`        |
|-------------------------------|:----------:|-----------------------|--------------------|

The second step (above) instructs Nexial to wait for 5 seconds (5000 milliseconds), during which the target website 
(AUT) would complete the login process and load the subsequent page. 5 seconds later, the third step proceeds to click
on the "My Orders" link - presumably, such link is rendered and available for interaction at such time.

The commands one can use to implement fixed wait are:
- [base &raquo; `waitFor(waitMs)`](../commands/base/waitFor(waitMs))
- [web &raquo; `wait(waitMs)`](../commands/web/wait(waitMs))

The fixed wait strategy is simple to implement. But it is not without shortfalls:
- This consistency of the fixed "wait" time has a double-edged effect. While it is predictable, it also means that there 
  is no drift in timing. If there should be any slowness - whether it is due to network latency, or website, or the test
  harness - the wait time remains the same. This could lead to flaky tests and unnecessary rework. Similarly, if there
  should be any improvement in response time or website performance, the fixed wait strategy provides no opportunity to
  cut down the total execution time.
- The fixed wait strategy also adds an extra step to the execution, thus unnecessarily inflating the total number of 
  execution steps.

It is generally discouraged to use this strategy. One good reason to use fixed wait, however, is when a fixed delay 
interval is desired. For example, if we want to forcefully refresh the current web page every 2 seconds 10 times: 

| description	                         | cmd type  | command                           | param 1    | param 2 |
|:-------------------------------------|----------:|:----------------------------------|:-----------|---------|
|	                                     | `base`    | `save(var,value)`	               | `try`	    | `0`     |
| LOOP START:	                         | `base`	   | `repeatUntil(steps,maxWaitMs)`	   | `4`	      | `-1`    |
| &nbsp;&nbsp;try for 10 times	       | `number`  | `assertGreaterOrEqual(num1,num2)` |	`${try}`  | `10`    |
| &nbsp;&nbsp;refresh current web page | `web`	   | `refresh()`                       |            |         |
| &nbsp;&nbsp;try again in 2 second    | **`web`** | **`wait(waitMs)`**                | **`2000`** |         |
| LOOP END: increment "try"            | `number`  | `increment(var,amount)`	         | `try`	    | `1`     |
|:-------------------------------------|----------:|:----------------------------------|:-----------|---------|

... or suppose we want to click on the "Check Status" link 10 times with some randomized wait time: 

| description	                     | cmd type  | command                           | param 1                           | param 2 |
|:---------------------------------|----------:|:----------------------------------|:----------------------------------|---------|
|	                                 | `base`    | `save(var,value)`	               | `try`	                           | `0`     |
| LOOP START:	                     | `base`	   | `repeatUntil(steps,maxWaitMs)`	   | `4`	                             | `-1`    |
| &nbsp;&nbsp;try for 10 times	   | `number`  | `assertGreaterOrEqual(num1,num2)` |	`${try}`                         | `10`    |
| &nbsp;&nbsp;click "Check Status" | `web`	   | `click(locator)`                  | `//*[string()='Check Status']`    |         |
| &nbsp;&nbsp;wait and try again	 | **`web`** | **`wait(waitMs)`**                | **`$(random|numeric|2000|8000)`** |	       |
| LOOP END: increment "try"        | `number`  | `increment(var,amount)`	         | `try`	                           | `1`     |
|:---------------------------------|----------:|:----------------------------------|:----------------------------------|---------|


### Page Load Timeout
When an URL is requested to load on the target browser, there is an implicit timeout value to determine if such action
should deem complete or not. This timeout value is known as the "Page Load Timeout", or, in Selenium-speak, 
`pageLoadTimeout`. If the requested URL is not loaded after this timeout value, the corresponding step is considered as 
FAIL. In Nexial, this value is represented via the System variable 
[`nexial.web.pageLoadWaitMs`](../systemvars/index.html#nexial.web.pageLoadWaitMs). By default, its value is 15000 
(milliseconds), or 15 seconds. This System variable has a direct impact on the following commands:
- [web &raquo; `open(url)`](../commands/web/open(url))
- [web &raquo; `openAndWait(url,waitMs)`](../commands/web/openAndWait(url,waitMs))
- [web &raquo; `openHttpBasic(url,username,password)`](../commands/web/openHttpBasic(url,username,password))
- [web &raquo; `openHttpBasic(url,username,password)`](../commands/web/goBack())

#### Note:
- Setting this System value to a negative value will effectively result in an infinite time out (meaning: never time out).
- For simple or older websites, this System variable generally provides effective control on the page load timeout.
  But for modern websites or web applications with a good amount of AJAX interaction or JavaScript DOM manipulation,
  one should consider other techniques (below) to ensure the timely availability of the page elements.
- Page load timeout is not applicable when the user clicks a link to open a page.


### Implicit Wait
When locating a web element, Nexial allows for a certain amount of time before considering such element as unavailable 
or absent. This in fact is the behavior of the underlying Selenium as used internally by Nexial. This wait, or time 
tolerance, is known as the implicit wait.

Nexial represents this wait via its System variable [`nexial.pollWaitMs`](../systemvars/index.html#nexial.pollWaitMs).
The default value of this System variable is 30000 milliseconds (or 30 seconds). When attempting to locate a web element,
Nexial polls the corresponding web page until the target element is located or the `nexial.pollWaitMs` is reached. 

Ideally one would predefine the value of `nexial.pollWaitMs` in either the `project.properties` file or the data file. 
Nexial will such for such System variable and set up the appropriate WebDriver with the specified implicit wait time. 
It is important to note that while it is possible to change the value of this System variable to accommodate slower or 
unpredictable websites, increasing the value of this System variable will likely impact the overall performance of one's
automation. This is especially true when slower locator strategies like XPath are in use.

Example of Nexial's [`web`](../commands/web/) commands affected by the implicit wait (via `nexial.pollWaitMs`) are 
(not complete list):

| types     | [`web`](../commands/web/) commands                                                                       |
|:---------:|----------------------------------------------------------------------------------------------------------|
| assert... | &nbsp;[`assertAttribute(locator,attrName,value)`](../commands/web/assertAttribute(locator,attrName,value)) &nbsp;[`assertCssNotPresent(locator,property)`](../commands/web/assertCssNotPresent(locator,property)) &nbsp;[`assertCssPresent(locator,property,value)`](../commands/web/assertCssPresent(locator,property,value)) &nbsp;[`assertElementByText(locator,text)`](../commands/web/assertElementByText(locator,text)) &nbsp;[`assertElementDisabled(locator)`](../commands/web/assertElementDisabled(locator)) &nbsp;[`assertElementEnabled(locator)`](../commands/web/assertElementEnabled(locator)) &nbsp;[`assertElementPresent(locator)`](../commands/web/assertElementPresent(locator)) &nbsp;[`assertNotVisible(locator)`](../commands/web/assertNotVisible(locator)) &nbsp;[`assertVisible(locator)`](../commands/web/assertVisible(locator)) | 
| save...   | &nbsp;[`saveAttributeList(var,locator,attrName)`](../commands/web/saveAttributeList(var,locator,attrName)) &nbsp;[`saveAttribute(var,locator,attrName)`](../commands/web/saveAttribute(var,locator,attrName)) &nbsp;[`saveElement(var,locator)`](../commands/web/saveElement(var,locator)) &nbsp;[`saveElements(var,locator)`](../commands/web/saveElements(var,locator)) &nbsp;[`saveValues(var,locator)`](../commands/web/saveValues(var,locator)) |
| interact  | &nbsp;[`clickAll(locator)`](../commands/web/clickAll(locator)) &nbsp;[`clickByLabel(label)`](../commands/web/clickByLabel(label)) &nbsp;[`clickOffset(locator,x,y)`](../commands/web/clickOffset(locator,x,y)) &nbsp;[`deselect(locator,text)`](../commands/web/deselect(locator,text)) &nbsp;[`dragAndDrop(fromLocator,toLocator)`](../commands/web/dragAndDrop(fromLocator,toLocator)) &nbsp;[`selectMultiByValue(locator,array)`](../commands/web/selectMultiByValue(locator,array)) &nbsp;[`selectMulti(locator,array)`](../commands/web/selectMulti(locator,array)) &nbsp;[`select(locator,text)`](../commands/web/select(locator,text)) &nbsp;[`toggleSelections(locator)`](../commands/web/toggleSelections(locator)) &nbsp;[`type(locator,value)`](../commands/web/type(locator,value)) &nbsp;[`upload(fieldLocator,file)`](../commands/web/upload(fieldLocator,file)) |
|:---------:|----------------------------------------------------------------------------------------------------------|

#### Note
Note that when the specified wait time has expired but the target element is not present, Nexial will consider the 
corresponding step as FAIL. However, if multiple elements are expected to be found via the specified locator, then 
Nexial will poll the current web page until at least 1 element is found or the specified timeout has expired. This is in
line with the runtime behavior of Selenium as well.

It is generally not advisable to rely on implicit wait as the only wait strategy. The implicit wait cannot be disabled
but it can work very nicely with other wait strategies like [Explicit Wait](#explicit-wait).


### Explicit Wait
Certainly an improvement over the [implicit wait](#implicit-wait) strategy, this strategy extends the concept of 
"conditional wait" from the presence of web elements to a sleuth of conditions related to web elements. With explicit 
wait, we can, for example, delay automation until a certain text is found with a specific web element. Of course, such 
checks implicitly include the presence of said web element as well. When using this strategy, Nexial instructs the 
underlying WebDriver to poll and wait until a specific condition is met before proceeding with the intended automation.
Nexial implements the explicit wait strategy in 3 different ways:

#### A. Specific Nexial Commands 
Some Nexial commands are implemented to use explicit wait behind the scene. These are the [`web`](../commands/web/) 
commands where explicit wait should be used in _almost_ all scenarios:

&nbsp;[`goBackAndWait()`](../commands/web/goBackAndWait()) 
&nbsp;[`refreshAndWait()`](../commands/web/refreshAndWait()) 
&nbsp;[`selectWindow(winId)`](../commands/web/selectWindow(winId)) 
&nbsp;[`selectWindowAndWait(winId,waitMs)`](../commands/web/selectWindowAndWait(winId,waitMs)) 
&nbsp;[`selectWindowByIndex(index)`](../commands/web/selectWindowByIndex(index)) 
&nbsp;[`selectWindowByIndexAndWait(index,waitMs)`](../commands/web/selectWindowByIndexAndWait(index,waitMs)) 
&nbsp;[`waitForPopUp(winId,waitMs)`](../commands/web/waitForPopUp(winId,waitMs)) 
&nbsp;[`waitForTitle(text)`](../commands/web/waitForTitle(text)) 

For the list of commands above, the explicit wait is built into the commands themselves. With the commands with a 
`waitMs` parameter, one can specify the maximum amount of wait time. For the commands without the additional `waitMs` 
parameter, Nexial would use the value of [`nexial.pollWaitMs`](../systemvars/index.html#nexial.pollWaitMs) as the 
maximum wait time.  

#### B. Configurable Explicit Wait
Some Nexial commands are configurable to employ either implicit or explicit wait. This potentially gives its users to
most flexible way to approach inconsistent or unreliable web applications. Two System variables are at play here:

1. [`nexial.pollWaitMs`](../systemvars/index.html#nexial.pollWaitMs): specify the maximum amount of time to wait. 
   The default value is `30000` (or 30 seconds).
2. [`nexial.web.alwaysWait`](../systemvars/index.html#nexial.web.alwaysWait): if set to `true` then the value of 
   `nexial.pollWaitMs` would be considered as the maximum amount of time for an explicit wait to expire (and the 
   corresponding step to FAIL). If it is set to `false` then the value of `nexial.pollWaitMs` would be considered the 
   maximum amount of time for an implicit wait.

With the setting of a single System variable, many Nexial commands would switch to using explicit wait. This can be an 
efficient way towards thwarting flaky tests. Some of the commands that are affected by this `nexial.web.alwaysWait` 
System variable is shown below (not complete list):

| types     | [`web`](../commands/web/) commands                                                                       |
|:---------:|----------------------------------------------------------------------------------------------------------|
| assert... | &nbsp;[`assertAttribute(locator,attrName,value)`](../commands/web/assertAttribute(locator,attrName,value)) &nbsp;[`assertChecked(locator)`](../commands/web/assertChecked(locator)) &nbsp;[`assertCssPresent(locator,property,value)`](../commands/web/assertCssPresent(locator,property,value)) &nbsp;[`assertElementByAttributes(nameValues)`](../commands/web/assertElementByAttributes(nameValues)) &nbsp;[`assertElementByText(locator,text)`](../commands/web/assertElementByText(locator,text)) &nbsp;[`assertElementDisabled(locator)`](../commands/web/assertElementDisabled(locator)) &nbsp;[`assertElementEnabled(locator)`](../commands/web/assertElementEnabled(locator)) &nbsp;[`assertElementNotPresent(locator)`](../commands/web/assertElementNotPresent(locator)) &nbsp;[`assertElementPresent(locator)`](../commands/web/assertElementPresent(locator)) &nbsp;[`assertElementsPresent(prefix)`](../commands/web/assertElementsPresent(prefix)) &nbsp;[`assertFocus(locator)`](../commands/web/assertFocus(locator)) &nbsp;[`assertLinkByLabel(label)`](../commands/web/assertLinkByLabel(label)) &nbsp;[`assertMultiSelect(locator)`](../commands/web/assertMultiSelect(locator)) &nbsp;[`assertNotChecked(locator)`](../commands/web/assertNotChecked(locator)) &nbsp;[`assertNotFocus(locator)`](../commands/web/assertNotFocus(locator)) &nbsp;[`assertNotText(locator,text)`](../commands/web/assertNotText(locator,text)) &nbsp;[`assertNotVisible(locator)`](../commands/web/assertNotVisible(locator)) &nbsp;[`assertSingleSelect(locator)`](../commands/web/assertSingleSelect(locator)) &nbsp;[`assertText(locator,text)`](../commands/web/assertText(locator,text)) &nbsp;[`assertTextList(locator,list,ignoreOrder)`](../commands/web/assertTextList(locator,list,ignoreOrder)) &nbsp;[`assertTextMatches(text,minMatch,scrollTo)`](../commands/web/assertTextMatches(text,minMatch,scrollTo)) &nbsp;[`assertTextPresent(text)`](../commands/web/assertTextPresent(text)) &nbsp;[`assertValue(locator,value)`](../commands/web/assertValue(locator,value)) &nbsp;[`assertVisible(locator)`](../commands/web/assertVisible(locator)) | 
| save...   | &nbsp;[`saveAttribute(var,locator,attrName)`](../commands/web/saveAttribute(var,locator,attrName)) &nbsp;[`saveSelectedText(var,locator)`](../commands/web/saveSelectedText(var,locator)) &nbsp;[`saveSelectedValue(var,locator)`](../commands/web/saveSelectedValue(var,locator)) &nbsp;[`saveText(var,locator)`](../commands/web/saveText(var,locator)) &nbsp;[`saveValue(var,locator)`](../commands/web/saveValue(var,locator)) &nbsp;[`saveValues(var,locator)`](../commands/web/saveValues(var,locator)) |
| interact  | &nbsp;[`clickAll(locator)`](../commands/web/clickAll(locator)) &nbsp;[`clickOffset(locator,x,y)`](../commands/web/clickOffset(locator,x,y)) &nbsp;[`deselect(locator,text)`](../commands/web/deselect(locator,text)) &nbsp;[`deselectMulti(locator,array)`](../commands/web/deselectMulti(locator,array)) &nbsp;[`dragAndDrop(fromLocator,toLocator)`](../commands/web/dragAndDrop(fromLocator,toLocator)) &nbsp;[`dragTo(fromLocator,xOffset,yOffset)`](../commands/web/dragTo(fromLocator,xOffset,yOffset)) &nbsp;[`focus(locator)`](../commands/web/focus(locator)) &nbsp;[`mouseOver(locator)`](../commands/web/mouseOver(locator)) &nbsp;[`rightClick(locator)`](../commands/web/rightClick(locator)) &nbsp;[`scrollTo(locator)`](../commands/web/scrollTo(locator)) &nbsp;[`select(locator,text)`](../commands/web/select(locator,text)) &nbsp;[`selectAllOptions(locator)`](../commands/web/selectAllOptions(locator)) &nbsp;[`selectFrame(locator)`](../commands/web/selectFrame(locator)) &nbsp;[`selectMultiByValue(locator,array)`](../commands/web/selectMultiByValue(locator,array)) &nbsp;[`selectMultiOptions(locator)`](../commands/web/selectMultiOptions(locator)) &nbsp;[`selectText(locator)`](../commands/web/selectText(locator)) &nbsp;[`toggleSelections(locator)`](../commands/web/toggleSelections(locator)) &nbsp;[`type(locator,value)`](../commands/web/type(locator,value)) &nbsp;[`typeKeys(locator,value)`](../commands/web/typeKeys(locator,value)) &nbsp;[`updateAttribute(locator,attrName,value)`](../commands/web/updateAttribute(locator,attrName,value)) &nbsp;[`upload(fieldLocator,file)`](../commands/web/upload(fieldLocator,file)) |
|:---------:|----------------------------------------------------------------------------------------------------------|

One can also consider turning on the explicit wait for a few steps - perhaps in areas that exhibit most of the test
flakiness - and then turn it back to default (`nexial.web.alwaysWait` set to `false`).

#### C. Fluent Wait / Wait-Until Commands
In this category, Nexial implements what is known in Selenium as the Fluent Wait across a set of "waitFor" or "waitUntil" 
commands. The design of these commands is to poll for the desired condition to be met before proceeding further with the
automation. As such, this "condition polling" creates a delay effect that allows for the target web application to 
"catch up". The "waitFor" commands use the value of `nexial.pollWaitMs` as the maximum amount of time to wait, while 
the "waitUntil" commands allow for a time of one's choosing.

##### "waitFor" commands:
- [web &raquo; `waitForElementPresent(locator)`](../commands/web/waitForElementPresent(locator))
- [web &raquo; `waitForElementsPresent(locators)`](../commands/web/waitForElementsPresent(locators))
- [web &raquo; `waitForTextPresent(text)`](../commands/web/waitForTextPresent(text))
- [web &raquo; `waitForTitle(text)`](../commands/web/waitForTitle(text))

##### "waitUntil" commands:
- [web &raquo; `waitUntilDisabled(locator,waitMs)`](../commands/web/waitUntilDisabled(locator,waitMs))
- [web &raquo; `waitUntilEnabled(locator,waitMs)`](../commands/web/waitUntilEnabled(locator,waitMs))
- [web &raquo; `waitUntilHidden(locator,waitMs)`](../commands/web/waitUntilHidden(locator,waitMs))
- [web &raquo; `waitUntilVisible(locator,waitMs)`](../commands/web/waitUntilVisible(locator,waitMs))

We will be adding more "waitFor" and "waitUntil" commands from time to time.


-----

### Conclusion
Different wait strategy serves a different purpose, thus all these wait strategies have its place. While there is no 
"one-size-fits-all", the generally accepted best practice regarding wait strategy can be summarized as follows:
1. Specify a fairly generous value for [`nexial.web.pageLoadWaitMs`](../systemvars/index.html#nexial.web.pageLoadWaitMs)
   to avoid timeout failure when opening an URL. This System variable has no impact on other commands except
   - [web &raquo; `open(url)`](../commands/web/open(url))
   - [web &raquo; `openAndWait(url,waitMs)`](../commands/web/openAndWait(url,waitMs))
   - [web &raquo; `openHttpBasic(url,username,password)`](../commands/web/openHttpBasic(url,username,password))
   - [web &raquo; `openHttpBasic(url,username,password)`](../commands/web/goBack())
2. Specify `true` for [`nexial.web.alwaysWait`](../systemvars/index.html#nexial.web.alwaysWait) to enable explicit
   wait. When invoking commands without the `waitMs` parameter, the value of `nexial.pollWaitMs` will be used.
3. Specify a fairly high value for [`nexial.pollMs`](../systemvars/index.html#nexial.pollWaitMs) to avoid timeout 
   failure during automation. In the context of explicit wait, setting this System variable with a high value is 
   generally a good idea. For Intranet websites or simple websites, one may start with `15000` (15 seconds). For 
   complex or data-intensive websites, try starting with `30000` (30 seconds).
4. Avoid the use of [Fixed Wait](#fixed-wait) as a delay tactic for the target website to "catch up". Instead, consider
   one of the "waitFor" or "waitUntil" commands mentioned in the [Fluent Wait](#c-fluent-wait--wait-until-commands) 
   section.
