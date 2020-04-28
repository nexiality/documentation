---
title: web
layout: default
tags: command web browser firefox chrome ie edge safari electron
comments: true
---

Nexial supports browser automation via the popular 
<a href="https://en.wikipedia.org/wiki/Selenium_(software)" class="external-link" target="_nexial_link">Selenium<a/>/
<a href="https://www.seleniumhq.org/docs/03_webdriver.jsp" class="external-link" target="_nexial_link">WebDriver</a>
automation framework. In effect, Nexial translates the commands in the Nexial script (spreadsheet) to Selenium- or 
WebDriver- specific API calls, along with other automation work such as error handling and browser lifecycle management.
Similar to [web cookie](../webcookie/) and [JavaScript alert](../webalert) automation, Nexial acts as the translator
to mediate between the automation script and the underlying Selenium/WebDriver framework. As part of the overall 
approach to building an automation platform, the Nexial development team tries to keep up the latest official releases 
of its third-party libraries. Selenium is no exception. As of July 2018 Nexial uses Selenium 3.1.13 and the latest 
releases of related webdrivers.

-----

### Locators
For effective automation of Web application, there are several critical technical knowledge and techniques to apply. 
The most important of which is the right technique of writing locators. Locators are a collections of ways (7 in total) 
to identify elements of a web page. It is by such mechanism one can effectively identify elements on a web page, 
interact with them and perform automation upon them. 

_**Note: Most of the information on the Web about locators are not created from the standpoint 
of a codeless or hybrid framework like Nexial. This applies to the links in this page. Reader's discretion is 
advised...**_

Here's a summary of the various locators (click on tab to view):<br/>
{% include_relative _locators.html %}

-----

### Browser Support
{% include_relative _browsers.html %}

-----

### WebDriver Support
Nexial automatically downloads required webdriver, during runtime as needed. Webdrivers are downloaded to the user's 
home directory, under the `.nexial` folder. For example, `C:\Users\MY_USER_ID\.nexial\chrome` or 
`/Users/USERID/.nexial/firefox`. Also, a `.manifest` file with the driver details is maintained in the same directory. 
The `.manifest` file is used to check and download the latest version available based on the current OS. If there should 
be any reason not to update to the newer/latest webdriver (e.g. due to compatibility with older browser), one can 
disable the automatic webdriver update by setting `"neverCheck": true` in `.manifest` file.

See [Forcefully update or omit webdriver updates](../../tipsandtricks/HOWTOForcefullyUpdateWebDriver) for more details.

-----

### Browser Performance Metrics
As of [v2.7](../../release/nexial-core-v2.7.changelog), Nexial supports the collection of browser performance metrics
during execution. One can configure an execution to collect browser performance metrics without the need to modify
automation script. The collected metrics will be presented as a web page at the end of the execution. To read more
about this, visit [Browser Performance Metrics](browsermetrics).

-----

### Browser Metadata
{% include_relative _meta.md %}

-----

The "web" command type represents a series of automation commands regarding web operations. See below for a list of 
available commands.

### Available Commands
- [`assertAndClick(locator,label)`](assertAndClick(locator,label))
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value))
- [`assertAttributeContain(locator,attrName,contains)`](assertAttributeContain(locator,attrName,contains))
- [`assertAttributeNotContain(locator,attrName,contains)`](assertAttributeNotContain(locator,attrName,contains))
- [`assertAttributeNotPresent(locator,attrName)`](assertAttributeNotPresent(locator,attrName))
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))
- [`assertChecked(locator)`](assertChecked(locator))
- [`assertContainCount(locator,text,count)`](assertContainCount(locator,text,count))
- [`assertCssNotPresent(locator,property)`](assertCssNotPresent(locator,property))
- [`assertCssPresent(locator,property,value)`](assertCssPresent(locator,property,value))
- [`assertElementByAttributes(nameValues)`](assertElementByAttributes(nameValues))
- [`assertElementByText(locator,text)`](assertElementByText(locator,text))
- [`assertElementCount(locator,count)`](assertElementCount(locator,count))
- [`assertElementEnabled(locator)`](assertElementEnabled(locator))
- [`assertElementNotPresent(locator)`](assertElementNotPresent(locator))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertElementsPresent(prefix)`](assertElementsPresent(prefix))
- [`assertFocus(locator)`](assertFocus(locator))
- [`assertFrameCount(count)`](assertFrameCount(count))
- [`assertFramePresent(frameName)`](assertFramePresent(frameName))
- [`assertIECompatMode()`](assertIECompatMode())
- [`assertIENavtiveMode()`](assertIENavtiveMode())
- [`assertLinkByLabel(label)`](assertLinkByLabel(label))
- [`assertMultiSelect(locator)`](assertMultiSelect(locator))
- [`assertNotChecked(locator)`](assertNotChecked(locator))
- [`assertNotFocus(locator)`](assertNotFocus(locator))
- [`assertNotText(locator,text)`](assertNotText(locator,text))
- [`assertNotVisible(locator)`](assertNotVisible(locator))
- [`assertOneMatch(locator)`](assertOneMatch(locator))
- [`assertScrollbarHNotPresent(locator)`](assertScrollbarHNotPresent(locator)) 
- [`assertScrollbarHPresent(locator)`](assertScrollbarHPresent(locator))
- [`assertScrollbarVNotPresent(locator)`](assertScrollbarVNotPresent(locator)) 
- [`assertScrollbarVPresent(locator)`](assertScrollbarVPresent(locator))
- [`assertSingleSelect(locator)`](assertSingleSelect(locator))
- [`assertTable(locator,row,column,text)`](assertTable(locator,row,column,text))
- [`assertText(locator,text)`](assertText(locator,text))
- [`assertTextContains(locator,text)`](assertTextContains(locator,text))
- [`assertTextCount(locator,text,count)`](assertTextCount(locator,text,count))
- [`assertTextList(locator,list,ignoreOrder)`](assertTextList(locator,list,ignoreOrder))
- [`assertTextMatches(text,minMatch,scrollTo)`](assertTextMatches(text,minMatch,scrollTo))
- [`assertTextNotPresent(text)`](assertTextNotPresent(text))
- [`assertTextOrder(locator,descending)`](assertTextOrder(locator,descending))
- [`assertTextPresent(text)`](assertTextPresent(text))
- [`assertTitle(text)`](assertTitle(text))
- [`assertValue(locator,value)`](assertValue(locator,value))
- [`assertValueOrder(locator,descending)`](assertValueOrder(locator,descending))
- [`assertVisible(locator)`](assertVisible(locator))
- [`checkAll(locator)`](checkAll(locator))
- [`clearLocalStorage()`](clearLocalStorage())
- [`click(locator)`](click(locator))
- [`clickAll(locator)`](clickAll(locator))
- [`clickAndWait(locator,waitMs)`](clickAndWait(locator,waitMs)) 
- [`clickByLabel(label)`](clickByLabel(label)) 
- [`clickByLabelAndWait(label,waitMs)`](clickByLabelAndWait(label,waitMs)) 
- [`clickOffset(locator,x,y)`](clickOffset(locator,x,y))
- [`clickWithKeys(locator,keys)`](clickWithKeys(locator,keys)) 
- [`close()`](close())
- [`closeAll()`](closeAll())
- [`deselectMulti(locator,array)`](deselectMulti(locator,array))
- [`dismissInvalidCert()`](dismissInvalidCert())
- [`dismissInvalidCertPopup()`](dismissInvalidCertPopup())
- [`doubleClick(locator)`](doubleClick(locator))
- [`doubleClickAndWait(locator,waitMs)`](doubleClickAndWait(locator,waitMs))
- [`doubleClickByLabel(label)`](doubleClickByLabel(label))
- [`doubleClickByLabelAndWait(label,waitMs)`](doubleClickByLabelAndWait(label,waitMs))
- [`dragAndDrop(fromLocator,toLocator)`](dragAndDrop(fromLocator,toLocator))
- [`dragTo(fromLocator,xOffset,yOffset)`](dragTo(fromLocator,xOffset,yOffset))
- [`editLocalStorage(key,value)`](editLocalStorage(key,value))
- [`executeScript(var,script)`](executeScript(var,script))
- [`focus(locator)`](focus(locator))
- [`goBack()`](goBack())
- [`goBackAndWait()`](goBackAndWait())
- [`maximizeWindow()`](maximizeWindow())
- [`mouseOver(locator)`](mouseOver(locator))
- [`open(url)`](open(url))
- [`openAndWait(url,waitMs)`](openAndWait(url,waitMs))
- [`openHttpBasic(url,username,password)`](openHttpBasic(url,username,password))
- [`openIgnoreTimeout(url)`](openIgnoreTimeout(url))
- [`refresh()`](refresh())
- [`refreshAndWait()`](refreshAndWait())
- [`resizeWindow(width,height)`](resizeWindow(width,height))
- [`rightClick(locator)`](rightClick(locator))
- [`saveAllWindowIds(var)`](saveAllWindowIds(var))
- [`saveAllWindowNames(var)`](saveAllWindowNames(var))
- [`saveAttribute(var,locator,attrName)`](saveAttribute(var,locator,attrName))
- [`saveAttributeList(var,locator,attrName)`](saveAttributeList(var,locator,attrName))
- [`saveBrowserVersion(var)`](saveBrowserVersion(var))
- [`saveCount(var,locator)`](saveCount(var,locator))
- [`saveDivsAsCsv(headers,rows,cells,nextPage,file)`](saveDivsAsCsv(headers,rows,cells,nextPage,file))
- [`saveElement(var,locator)`](saveElement(var,locator))
- [`saveElements(var,locator)`](saveElements(var,locator))
- [`saveInfiniteDivsAsCsv(config,file)`](saveInfiniteDivsAsCsv(config,file))
- [`saveInfiniteTableAsCsv(config,file)`](saveInfiniteTableAsCsv(config,file))
- [`saveLocalStorage(var,key)`](saveLocalStorage(var,key))
- [`saveLocation(var)`](saveLocation(var))
- [`savePageAs(var,sessionIdName,url)`](savePageAs(var,sessionIdName,url))
- [`savePageAsFile(sessionIdName,url,file)`](savePageAsFile(sessionIdName,url,file))
- [`saveSelectedText(var,locator)`](saveSelectedText(var,locator))
- [`saveSelectedValue(var,locator)`](saveSelectedValue(var,locator))
- [`saveTableAsCsv(locator,nextPageLocator,file)`](saveTableAsCsv(locator,nextPageLocator,file))
- [`saveText(var,locator)`](saveText(var,locator))
- [`saveTextArray(var,locator)`](saveTextArray(var,locator))
- [`saveTextSubstringAfter(var,locator,delim)`](saveTextSubstringAfter(var,locator,delim))
- [`saveTextSubstringBefore(var,locator,delim)`](saveTextSubstringBefore(var,locator,delim))
- [`saveTextSubstringBetween(var,locator,start,end)`](saveTextSubstringBetween(var,locator,start,end))
- [`saveValue(var,locator)`](saveValue(var,locator))
- [`saveValues(var,locator)`](saveValues(var,locator))
- [`screenshot(file,locator)`](screenshot(file,locator))
- [`scrollElement(locator,xOffset,yOffset)`](scrollElement(locator,xOffset,yOffset))
- [`scrollLeft(locator,pixel)`](scrollLeft(locator,pixel))
- [`scrollPage(xOffset,yOffset)`](scrollPage(xOffset,yOffset))
- [`scrollRight(locator,pixel)`](scrollRight(locator,pixel))
- [`scrollTo(locator)`](scrollTo(locator))
- [`select(locator,text)`](select(locator,text))
- [`selectAllOptions(locator)`](selectAllOptions(locator))
- [`selectFrame(locator)`](selectFrame(locator))
- [`selectMulti(locator,array)`](selectMulti(locator,array))
- [`selectMultiByValue(locator,array)`](selectMultiByValue(locator,array))
- (deprecated) ~~[`selectMultiOptions(locator)`](selectMultiOptions(locator))~~
- [`selectText(locator)`](selectText(locator))
- [`selectWindow(winId)`](selectWindow(winId))
- [`selectWindowAndWait(winId,waitMs)`](selectWindowAndWait(winId,waitMs))
- [`selectWindowByIndex(index)`](selectWindowByIndex(index))
- [`selectWindowByIndexAndWait(index,waitMs)`](selectWindowByIndexAndWait(index,waitMs))
- [`switchBrowser(profile,config)`](switchBrowser(profile,config))
- [`toggleSelections(locator)`](toggleSelections(locator))
- [`type(locator,value)`](type(locator,value))
- [`typeKeys(locator,value)`](typeKeys(locator,value))
- [`uncheckAll(locator)`](uncheckAll(locator))
- [`unselectAllText()`](unselectAllText())
- [`updateAttribute(locator,attrName,value)`](updateAttribute(locator,attrName,value))
- [`upload(fieldLocator,file)`](upload(fieldLocator,file))
- [`verifyContainText(locator,text)`](verifyContainText(locator,text))
- [`verifyText(locator,text)`](verifyText(locator,text))
- [`wait(waitMs)`](wait(waitMs))
- [`waitForElementPresent(locator)`](waitForElementPresent(locator)) 
- [`waitForPopUp(winId,waitMs)`](waitForPopUp(winId,waitMs))
- [`waitForTextPresent(text)`](waitForTextPresent(text))
- [`waitForTitle(text)`](waitForTitle(text))


