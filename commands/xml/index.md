---
layout: default
title: xml
tags: command xml
comments: true
---


The "xml" command type represents a series of automation commands regarding XML file and XML content. There are also a
few command specifically targeted towards <a href="https://en.wikipedia.org/wiki/SOAP" class="external-link" target="_nexial_link">SOAP</a>.

There are lots of tutorial and learning material on the 'Net regarding XPath. Here are some that might
be helpful:
- <a href="https://www.w3.org/TR/1999/REC-xpath-19991116/" class="external-link" target="_nexial_link">W3C - XML Path Language (XPath) 1.0</a>
- <a href="https://www.guru99.com/xpath-selenium.html" class="external-link" target="_nexial_link">gugu99 - XPath in Selenium WebDriver: Complete Tutorial</a>
- <a href="https://www.w3schools.com/xml/xpath_intro.asp" class="external-link" target="_nexial_link">w3schools - XPath Tutorial</a>
- <a href="https://en.wikipedia.org/wiki/XPath" class="external-link" target="_nexial_link">wikipedia - XPath</a>
- <a href="https://automatetheplanet.com/underrated-webdriver-locator-xpath/" class="external-link" target="_nexial_target">automatetheplanet - Most Underated WebDriver Locator - XPath</a>
- <a href="http://toolsqa.com/selenium-webdriver/choosing-effective-xpath/" class="external-link" target="_nexial_target">toolsqa - Choosing Effective XPaths</a>
- <a href="https://devhints.io/xpath" class="external-link" target="_nexial_target">devhints - XPath cheatsheet</a>
- <a href="http://xpath.alephzarro.com/content/cheatsheet.html" class="external-link" target="_nexial_target">http://xpath.alephzarro.com/content/cheatsheet.html</a>
- <a href="http://scraping.pro/res/xpath-cheat/xpath_css_dom_recipes.pdf" class="external-link" target="_nexial_target">http://scraping.pro/res/xpath-cheat/xpath_css_dom_recipes.pdf</a>
- <a href="http://scraping.pro/res/xpath-cheat/xpath_css_dom_ref.pdf" class="external-link" target="_nexial_target">http://scraping.pro/res/xpath-cheat/xpath_css_dom_ref.pdf</a>

Also consider the following online resources for trying out XPath:
- <a href="https://www.webtoolkitonline.com/xml-xpath-tester.html" class="external-link" target="_nexial_target">https://www.webtoolkitonline.com/xml-xpath-tester.html</a>
- <a href="http://xpather.com/" class="external-link" target="_nexial_target">http://xpather.com/</a>
- <a href="https://extendsclass.com/xpath-tester.html" class="external-link" target="_nexial_target">https://extendsclass.com/xpath-tester.html</a>


### Available Commands
- [`append(xml,xpath,content,var)`](append(xml,xpath,content,var))
- [`assertCorrectness(xml,schema)`](assertCorrectness(xml,schema))
- [`assertElementCount(xml,xpath,count)`](assertElementCount(xml,xpath,count))
- [`assertElementNotPresent(xml,xpath)`](assertElementNotPresent(xml,xpath))
- [`assertElementPresent(xml,xpath)`](assertElementPresent(xml,xpath))
- [`assertSoap(wsdl,xml)`](assertSoap(wsdl,xml))
- [`assertSoapFaultCode(expected,xml)`](assertSoapFaultCode(expected,xml))
- [`assertSoapFaultString(expected,xml)`](assertSoapFaultString(expected,xml))
- [`assertValue(xml,xpath,expected)`](assertValue(xml,xpath,expected))
- [`assertValues(xml,xpath,array,exactOrder)`](assertValues(xml,xpath,array,exactOrder))
- [`assertWellformed(xml)`](assertWellformed(xml))
- [`beautify(xml,var)`](beautify(xml,var))
- [`clear(xml,xpath,var)`](clear(xml,xpath,var))
- [`delete(xml,xpath,var)`](delete(xml,xpath,var))
- [`insertAfter(xml,xpath,content,var)`](insertAfter(xml,xpath,content,var))
- [`insertBefore(xml,xpath,content,var)`](insertBefore(xml,xpath,content,var))
- [`minify(xml,var)`](minify(xml,var))
- [`prepend(xml,xpath,content,var)`](prepend(xml,xpath,content,var))
- [`replace(xml,xpath,content,var)`](replace(xml,xpath,content,var))
- [`replaceIn(xml,xpath,content,var)`](replaceIn(xml,xpath,content,var))
- [`storeCount(xml,xpath,var)`](storeCount(xml,xpath,var))
- [`storeSoapFaultCode(var,xml)`](storeSoapFaultCode(var,xml))
- [`storeSoapFaultString(var,xml)`](storeSoapFaultString(var,xml))
- [`storeValue(xml,xpath,var)`](storeValue(xml,xpath,var))
- [`storeValues(xml,xpath,var)`](storeValues(xml,xpath,var))
