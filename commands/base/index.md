---
layout: default
title: base
tags: command base
comments: true
---


The "base" command type represents a series of common automation commands:


### Available Commands
- [`appendText(var,appendWith)`](appendText(var,appendWith))
- [`assertArrayContain(array,expected)`](assertArrayContain(array,expected))
- [`assertArrayEqual(array1,array2,exactOrder)`](assertArrayEqual(array1,array2,exactOrder))
- [`assertArrayNotContain(array,unexpected)`](assertArrayNotContain(array,unexpected))
- [`assertContains(text,substring)`](assertContains(text,substring))
- [`assertCount(text,regex,expects)`](assertCount(text,regex,expects))
- [`assertEmpty(text)`](assertEmpty(text))
- [`assertEndsWith(text,suffix)`](assertEndsWith(text,suffix))
- [`assertEqual(expected,actual)`](assertEqual(expected,actual))
- [`assertMatch(text,regex)`](assertMatch(text,regex))
- [`assertNotContain(text,substring)`](assertNotContain(text,substring))
- [`assertNotEmpty(text)`](assertNotEmpty(text))
- [`assertNotEqual(value1,value2)`](assertNotEqual(value1,value2))
- [`assertStartsWith(text,prefix)`](assertStartsWith(text,prefix))
- [`assertTextOrder(var,descending)`](assertTextOrder(var,descending))
- [`assertVarNotPresent(var)`](assertVarNotPresent(var))
- [`assertVarPresent(var)`](assertVarPresent(var))
- [`clear(vars)`](clear(vars))
- [`clearClipboard()`](clearClipboard())
- [`copyFromClipboard(var)`](copyFromClipboard(var))
- [`copyIntoClipboard(text)`](copyIntoClipboard(text))
- [`failImmediate(text)`](failImmediate(text))
- [`incrementChar(var,amount,config)`](incrementChar(var,amount,config))
- [`macro(file,sheet,name)`](macro(file,sheet,name))
- [`macroFlex(macro,input,output)`](macroFlex(macro,input,output))
- [`outputToCloud(resource)`](outputToCloud(resource))
- [`prependText(var,prependWith)`](prependText(var,prependWith))
- [`repeatUntil(steps,maxWaitMs)`](repeatUntil(steps,maxWaitMs))
- [`save(var,value)`](save(var,value))
- [`saveCount(text,regex,saveVar)`](saveCount(text,regex,saveVar))
- [`saveMatches(text,regex,saveVar)`](saveMatches(text,regex,saveVar))
- [`saveReplace(text,regex,replace,resultVar)`](saveReplace(text,regex,replace,resultVar))
- [`saveVariablesByPrefix(var,prefix)`](saveVariablesByPrefix(var,prefix))
- [`saveVariablesByRegex(var,regex)`](saveVariablesByRegex(var,regex))
- [`split(text,delim,saveVar)`](split(text,delim,saveVar))
- [`startRecording()`](startRecording())
- [`stopRecording()`](stopRecording())
- [`substringAfter(text,delim,saveVar)`](substringAfter(text,delim,saveVar))
- [`substringBefore(text,delim,saveVar)`](substringBefore(text,delim,saveVar))
- [`substringBetween(text,start,end,saveVar)`](substringBetween(text,start,end,saveVar))
- [`verbose(text)`](verbose(text))
- [`waitFor(waitMs)`](waitFor(waitMs))
- [`waitForCondition(conditions,maxWaitMs)`](waitForCondition(conditions,maxWaitMs))
