---
title: web
tags: command web
comments: true
---

For effective automation of Web application, there are a number of critical technical knowledge and techniques to 
apply.  In general, it is about applying the right technique of writing locators.  Locators are a collections of ways 
(8 in total) to identify elements of a web page.  Here's a quick summary of the various locators:<br/>
![](image/web_01.png)

There are quite a bit of excellent information on the Web regarding locators.  So rather than writing about it, 
I'll simply point you to them.  Here they are:

_**Note: Most of the information on the Web about locators are not created from the standpoint 
of a scriptless or hybrid framework like Nexial.  Reader's discretion is advised...**_

- <a href="https://www.tutorialspoint.com/selenium/selenium_locators.htm" class="external-link" target="_nexial_target">https://www.tutorialspoint.com/selenium/selenium_locators.htm</a>
- <a href="http://www.seleniumeasy.com/selenium-tutorials/selenium-locators" class="external-link" target="_nexial_target">http://www.seleniumeasy.com/selenium-tutorials/selenium-locators</a>
- <a href="http://www.techbeamers.com/use-locators-selenium/" class="external-link" target="_nexial_target">http://www.techbeamers.com/use-locators-selenium/</a>
- <a href="http://artoftesting.com/automationTesting/locators-in-selenium-webdriver.html" class="external-link" target="_nexial_target">http://artoftesting.com/automationTesting/locators-in-selenium-webdriver.html</a>
- <a href="http://screenster.io/selenium-locators-tutorial-types-best-practices-and-many-more/" class="external-link" target="_nexial_target">http://screenster.io/selenium-locators-tutorial-types-best-practices-and-many-more/</a>

Those who are familiar with locators know the most expressive and powerful type is XPath.  XPath provides the ability 
to identify a specific web element (or a group of web elements) via its ID, attributes, relative or absolute position 
and its hierarchy.  However with great power comes great responsibility as well.  Without careful use, one often end 
up with very convoluted and unmaintainable XPaths.  Such XPaths are not only hard to read, hard to maintain and 
brittle by nature, they are so slower to execute.  Simplifying XPath and applying right techniques takes a fair bit 
of knowledge on XPath itself. Here are some online resources that might be helpful:<br/>

- <a href="https://www.w3schools.com/xml/xpath_syntax.asp" class="external-link" target="_nexial_target">https://www.w3schools.com/xml/xpath_syntax.asp</a>
- <a href="https://automatetheplanet.com/underrated-webdriver-locator-xpath/" class="external-link" target="_nexial_target">https://automatetheplanet.com/underrated-webdriver-locator-xpath/</a>

Alternatively one might consider converting XPaths to CSS locators.  To learn more, here's a well known article on 
this subject:<br/>

- <a href="https://saucelabs.com/blog/why-css-locators-are-the-way-to-go-vs-xpath" class="external-link" target="_nexial_target">https://saucelabs.com/blog/why-css-locators-are-the-way-to-go-vs-xpath</a>

Here's an online app to help converting XPath to CSS locator:<br/>

- <a href="http://cssify.appspot.com/" class="external-link" target="_nexial_target">http://cssify.appspot.com/</a>
  
  ![](image/web_02.png)

The "web" command type represents a series of automation commands regarding web operations.

### Available Commands
- [`assertAndClick(locator,label)`](assertAndClick(locator,label))
- [`assertAttribute(locator,attrName,value)`](assertAttribute(locator,attrName,value))
- [`assertAttributeContains(locator,attrName,contains)`](assertAttributeContains(locator,attrName,contains))
- [`assertAttributeNotContains(locator,attrName,contains)`](assertAttributeNotContains(locator,attrName,contains))
- [`assertAttributeNotPresent(locator,attrName)`](assertAttributeNotPresent(locator,attrName))
- [`assertAttributePresent(locator,attrName)`](assertAttributePresent(locator,attrName))
- [`assertChecked(locator)`](assertChecked(locator))
- [`assertContainCount(locator,text,count)`](assertContainCount(locator,text,count))
- [`assertCssNotPresent(locator,property)`](assertCssNotPresent(locator,property))
- [`assertCssPresent(locator,property,value)`](assertCssPresent(locator,property,value))
- [`assertElementByAttributes(nameValues)`](assertElementByAttributes(nameValues))
- [`assertElementByText(locator,text)`](assertElementByText(locator,text))
- [`assertElementCount(locator,count)`](assertElementCount(locator,count))
- [`assertElementNotPresent(locator)`](assertElementNotPresent(locator))
- [`assertElementPresent(locator)`](assertElementPresent(locator))
- [`assertFocus(locator)`](assertFocus(locator))
- [`assertFrameCount(count)`](assertFrameCount(count))
- [`assertFramePresent(frameName)`](assertFramePresent(frameName))
- [`assertIECompatMode()`](assertIECompatMode())
- [`assertIENavtiveMode()`](assertIENavtiveMode())
- [`assertLinkByLabel(label)`](assertLinkByLabel(label))
- [`assertNotChecked(locator)`](assertNotChecked(locator))
- [`assertNotFocus(locator)`](assertNotFocus(locator))
- [`assertNotText(locator,text)`](assertNotText(locator,text))
- [`assertNotVisible(locator)`](assertNotVisible(locator))
- [`assertOneMatch(locator)`](assertOneMatch(locator))
- [`assertScrollbarHNotPresent(locator)`](assertScrollbarHNotPresent(locator)) 
- [`assertScrollbarHPresent(locator)`](assertScrollbarHPresent(locator))
- [`assertScrollbarVNotPresent(locator)`](assertScrollbarVNotPresent(locator)) 
- [`assertScrollbarVPresent(locator)`](assertScrollbarVPresent(locator))
- [`assertTable(locator,row,column,text)`](assertTable(locator,row,column,text))
- [`assertText(locator,text)`](assertText(locator,text))
- [`assertTextContains(locator,text)`](assertTextContains(locator,text))
- [`assertTextCount(locator,text,count)`](assertTextCount(locator,text,count))
- [`assertTextList(locator,list,ignoreOrder)`](assertTextList(locator,list,ignoreOrder))
- [`assertTextOrder(locator,descending)`](assertTextOrder(locator,descending))
- [`assertTextPresent(text)`](assertTextPresent(text))
- [`assertTitle(text)`](assertTitle(text))
- [`assertValue(locator,value)`](assertValue(locator,value))
- [`assertValueOrder(locator,descending)`](assertValueOrder(locator,descending))
- [`assertVisible(locator)`](assertVisible(locator))
- [`clearLocalStorage()`](clearLocalStorage())
- [`click(locator)`](click(locator))
- [`clickAndWait(locator,waitMs)`](clickAndWait(locator,waitMs)) 
- [`clickByLabel(label)`](clickByLabel(label)) 
- [`clickByLabelAndWait(label,waitMs)`](clickByLabelAndWait(label,waitMs)) 
- [`close()`](close())
- [`closeAll()`](closeAll())
- [`deselectMulti(locator,array)`](deselectMulti(locator,array))
- [`dismissInvalidCert()`](dismissInvalidCert())
- [`dismissInvalidCertPopup()`](dismissInvalidCertPopup())
- [`doubleClick(locator)`](doubleClick(locator))
- [`doubleClickAndWait(locator,waitMs)`](doubleClickAndWait(locator,waitMs))
- [`doubleClickByLabel(label)`](doubleClickByLabel(label))
- [`doubleClickByLabelAndWait(label,waitMs)`](doubleClickByLabelAndWait(label,waitMs))
- [`editLocalStorage(key,value)`](editLocalStorage(key,value))
- [`executeScript(var,script)`](executeScript(var,script))
- [`goBack()`](goBack())
- [`goBackAndWait()`](goBackAndWait())
- [`maximizeWindow()`](maximizeWindow())
- [`mouseOver(locator)`](mouseOver(locator))
- [`open(url)`](open(url))
- [`openAndWait(url,waitMs)`](openAndWait(url,waitMs))
- [`refresh()`](refresh())
- [`refreshAndWait()`](refreshAndWait())
- [`resizeWindow(width,height)`](resizeWindow(width,height))
- [`saveAllWindowIds(var)`](saveAllWindowIds(var))
- [`saveAllWindowNames(var)`](saveAllWindowNames(var))
- [`saveAttribute(var,locator,attrName)`](saveAttribute(var,locator,attrName))
- [`saveCount(var,locator)`](saveCount(var,locator))
- [`saveElement(var,locator)`](saveElement(var,locator))
- [`saveElements(var,locator)`](saveElements(var,locator))
- [`saveLocalStorage(var,key)`](saveLocalStorage(var,key))
- [`saveLocation(var)`](saveLocation(var))
- [`savePageAs(var,sessionIdName,url)`](savePageAs(var,sessionIdName,url))
- [`savePageAsFile(sessionIdName,url,fileName)`](savePageAsFile(sessionIdName,url,fileName))
- [`saveText(var,locator)`](saveText(var,locator))
- [`saveTextArray(var,locator)`](saveTextArray(var,locator))
- [`saveTextSubstringAfter(var,locator,delim)`](saveTextSubstringAfter(var,locator,delim))
- [`saveTextSubstringBefore(var,locator,delim)`](saveTextSubstringBefore(var,locator,delim))
- [`saveTextSubstringBetween(var,locator,start,end)`](saveTextSubstringBetween(var,locator,start,end))
- [`saveValue(var,locator)`](saveValue(var,locator))
- [`scrollLeft(locator,pixel)`](scrollLeft(locator,pixel))
- [`scrollRight(locator,pixel)`](scrollRight(locator,pixel))
- [`scrollTo(locator)`](scrollTo(locator))
- [`select(locator,text)`](select(locator,text))
- [`selectFrame(locator)`](selectFrame(locator))
- [`selectMulti(locator,array)`](selectMulti(locator,array))
- [`selectMultiOptions(locator)`](selectMultiOptions(locator))
- [`selectText(locator)`](selectText(locator))
- [`selectWindow(winId)`](selectWindow(winId))
- [`selectWindowAndWait(winId,waitMs)`](selectWindowAndWait(winId,waitMs))
- [`selectWindowByIndex(index)`](selectWindowByIndex(index))
- [`selectWindowByIndexAndWait(index,waitMs)`](selectWindowByIndexAndWait(index,waitMs))
- [`toggleSelections(locator)`](toggleSelections(locator))
- [`type(locator,value)`](type(locator,value))
- [`typeKeys(locator,value)`](typeKeys(locator,value))
- [`unselectAllText()`](unselectAllText())
- [`upload(fieldLocator,file)`](upload(fieldLocator,file))
- [`verifyContainText(locator,text)`](verifyContainText(locator,text))
- [`verifyText(locator,text)`](verifyText(locator,text))
- [`wait(waitMs)`](wait(waitMs))
- [`waitForElementPresent(locator)`](waitForElementPresent(locator)) 
- [`waitForPopUp(winId,waitMs)`](waitForPopUp(winId,waitMs))
- [`waitForTextPresent(text)`](waitForTextPresent(text))
- [`waitForTitle(text)`](waitForTitle(text))

