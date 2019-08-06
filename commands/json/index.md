---
layout: default
title: json
tags: command json jsonpath
comments: true
---


This set of commands is designed to support 
<a href="http://www.json.org/" class="external-link" target="_nexial_link">JSON</a> validation and manipulation 
as part of a test automation. For basic validation, [`assertWellformed(json)`](assertCorrectness(json,schema)) 
and [`assertCorrectness(json,schema)`](assertCorrectness(json,schema)) might suffice. These two commands provide 
validation at the document level. For more fine-grained assertion and manipulation, we need a descriptive and 
structure-aware specification to communicate the intent - something akins to XPath for XML. Please read 
[`Nexial jsonpath`](../../jsonpath/index) for more details on how to accomplish this.


### Available Commands
- [`addOrReplace(json,jsonpath,input,var)`](addOrReplace(json,jsonpath,input,var))
- [`assertCorrectness(json,schema)`](assertCorrectness(json,schema))
- [`assertElementCount(json,jsonpath,count)`](assertElementCount(json,jsonpath,count))
- [`assertElementNotPresent(json,jsonpath)`](assertElementNotPresent(json,jsonpath))
- [`assertElementPresent(json,jsonpath)`](assertElementPresent(json,jsonpath))
- [`assertEqual(expected,actual)`](assertEqual(expected,actual))
- [`assertValue(json,jsonpath,expected)`](assertValue(json,jsonpath,expected))
- [`assertValues(json,jsonpath,array,exactOrder)`](assertValues(json,jsonpath,array,exactOrder))
- [`assertWellformed(json)`](assertWellformed(json))
- [`beautify(json,var)`](beautify(json,var))
- [`compact(var,json,removeEmpty)`](compact(var,json,removeEmpty))
- [`minify(json,var)`](minify(json,var))
- [`storeCount(json,jsonpath,var)`](storeCount(json,jsonpath,var))
- [`storeKeys(json,jsonpath,var)`](storeKeys(json,jsonpath,var))
- [`storeValue(json,jsonpath,var)`](storeValue(json,jsonpath,var))
- [`storeValues(json,jsonpath,var)`](storeValues(json,jsonpath,var))
