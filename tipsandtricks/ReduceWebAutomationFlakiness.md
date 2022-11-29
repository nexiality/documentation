---
layout: default
title: Reduce web automation flakiness with wait strategies
parent: Tips and Tricks
tags: web selenium locator
comments: true
---

<style>
table.data {
	width: 500px;
	border: none;
}

table.data th, table.data td {
	border: none;
	background-color: transparent;
}

table.data pre {
	margin-bottom: 0;
	padding: 10px;
}

.data-variable {
	width:350px;
	margin-top:0;
}

.data-variable th, .data-variable td {
	border: 1px #aaa solid !important;
}

.data-variable th {
	background-color: #333 !important;
	color: #fff;
	font-family: monospace;
	font-size: 12pt;
	text-align: left;
	vertical-align: middle;
	width: 200px;
	padding-left: 8px;
}

image {
	box-shadow: none;
}
</style>


**Note: This page reference two [System variables](../systemvars/index): 
[`nexial.pollWaitMs`](../systemvars/index#nexial.pollWaitMs) and 
[`nexial.web.alwaysWait`](../systemvars/index#nexial.web.alwaysWait)**

### Problem

As with most web applications, a web page takes a certain amount of time to load all its elements and resources. The 
amount of time required to completely load all the referenced elements and resources - known as "total page load time" -
is often unpredictable and inconsistent. Much of such phenomenon can be attributed to both the network latency and the 
asynchronous nature of the modern web architecture and web application framework. However, for web automation, it is 
often desirable, if not necessary, to wait for the target web page and its resources (again, the total page load time) 
before proceeding to further page interaction such as clicking a button. Without the proper wait time, our web 
automation script could fail or produce undesirable results, leading to something commonly known as **test flakiness**.

This article describes two possible wait strategies to help overcome **test flakiness** in your web automation.


### Understanding the use of `nexial.pollWaitMs`

Nexial uses Selenium behind the scene. As such Selenium locators (XPath, id, CSS, etc.) are used to reference web
elements. In addition, one could use labels or HTML attributes with certain Nexial commands (Nexial derives the 
appropriate locators behind the scene). Nexial allows one to reference a web element through many ways like 
locator, label, attributes, text content, etc. Refer to the following commands for more information:
- [`waitForElementPresent(locator)`](../commands/web/waitForElementPresent(locator))
- [`assertElementPresent(locator)`](../commands/web/assertElementPresent(locator))
- [`assertElementNotPresent(locator,maxWaitMs)`](../commands/web/assertElementNotPresent(locator,maxWaitMs))
- [`assertElementByAttributes(nameValues)`](../commands/web/assertElementByAttributes(nameValues))
- [`assertLinkByLabel(label)`](../commands/web/assertLinkByLabel(label))
- [`assertTextPresent(text)`](../commands/web/assertTextPresent(text))

By default, Nexial will query for the specified locator, attribute, label, etc. until the time as specified by 
[`nexial.pollWaitMs`](../systemvars/index#nexial.pollWaitMs) has passed. The default value for `nexial.pollWaitMs` 
is **30000ms** or 30 seconds). One could modify this [`nexial.pollWaitMs`](../systemvars/index#nexial.pollWaitMs) System 
variable for a shorter "polling" time. In most cases, this should work fairly well for Intranet web applications or 
web applications that are not too data-intensive and do not heavily rely on AJAX (most modern web frameworks do).


### Understanding the use of `nexial.web.alwaysWait`

To accommodate for fluctuation of response time throughout the user interaction, one would likely need to set 
[`nexial.pollWaitMs`](../systemvars/index#nexial.pollWaitMs) to fit the "likely slowest" time needed for the target web 
application (or keep adjusting it throughout the automation). This can be time-consuming, error-prone, and inefficient. 
Instead, one can use another System variable called [`nexial.web.alwaysWait`](../systemvars/index#nexial.web.alwaysWait) 
to tackle this total page load time problem. When this System variable is set to `true`, Nexial will activate 
<a href="https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/support/ui/FluentWait.html" class="external-link" target="_nexial_link">Selenium 3' FluentWait</a>
as a strategy to poll the target web element _until_ a specified time. In other words, we can instruct Nexial to 
"return _that_element as soon as it is available, but not more than x amount of time". This is much more efficient and 
flexible as we can specify a "max" wait for the entire application but not impose that same "max" wait uniformly and 
implicitly for each element. Here are the steps to enable this "*wait*" strategy:
- Set [`nexial.web.alwaysWait`](../systemvars/index#nexial.web.alwaysWait) to `true`
- Set [`nexial.pollWaitMs`](../systemvars/index#nexial.pollWaitMs) to the maximum tolerable wait time (in milliseconds), 
  like 30000 (30 seconds).
- Nexial will poll for the target locator every 10ms, until the specified value of 
  [`nexial.pollWaitMs`](../systemvars/index#nexial.pollWaitMs). As soon as the web element is found, Nexial will 
  proceed with the rest of the command so there’s very little time wasted here.


### Example
<table class="data">
<tr>
<th><a href="../userguide/UnderstandingProjectStructure.html#artifactprojectproperties"><code>project.properties</code></a></th>
<th>&nbsp;OR&nbsp;</th>
<th><a href="../userguide/UnderstandingProjectStructure.html#artifactdata"><code>data file</code></a></th>
</tr>
<tr>
<td>
<pre>
nexial.pollWaitMs=10000
nexial.web.alwaysWait=true
</pre>
</td>
<td>&nbsp;</td>
<td>
<table border="1" cellpadding="5" class="data-variable">
<tr><th class="data-variable">nexial.pollWaitMs</th><td>10000</td></tr>
<tr><th class="data-variable">nexial.web.alwaysWait</th><td>true</td></tr>
</table>
</td>
</tr>
</table>
<br/>

**Execution**:<br/>
![](image/NexialWebAlwaysWaitOutput.png)


## Additional Notes 
The use of [`nexial.pollWaitMs`](../systemvars/index#nexial.pollWaitMs) can be considered as a simplistic way to check 
for application responsiveness. One might want to consider the cases where a web element was not loaded within the 
specified time as a form of "violation". Thus incidents of slow responses can be captured for further investigation.

Another technique is to set [`nexial.elapsedTimeSLA`](../systemvars/index#nexial.elapsedTimeSLA) to the desired 
tolerable time (in millisecond). However, this would apply to every step, not just those associated with web automation.

These are rudimentary approaches for slowness detection that more suited for in-sprint automation. This does not replace 
the need for performance testing.
