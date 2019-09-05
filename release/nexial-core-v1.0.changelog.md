---
layout: default
title: nexial-core 1.0 (2018-03-30)
parent: release
tags: release nexial-core 1.0
comments: true
---


### <a href="https://github.com/nexiality/nexial-core/releases/tag/nexial-core-1.0" class="external-link" target="_nexial_link">Release 1.0</a>
2018-03-30

#### First release of Nexial Automation Platform.  

For those familiar with Sentry, this would be Sentry v1.6.  If you have
test scripts created in Sentry, be sure to `bin/sentry2nexial.cmd` script for your project **PRIOR** to executing
with Nexial.

If this is your first introduction to Nexial -- **WELCOME**!

### Supported commands
Here is the list of supported commands separated by their command type:

#### [aws.s3]
- [`assertNotPresent(profile,remotePath)`](../commands/aws.s3/assertNotPresent(profile,remotePath))
- [`assertPresent(profile,remotePath)`](../commands/aws.s3/assertPresent(profile,remotePath))
- [`copyFrom(var,profile,remote,local)`](../commands/aws.s3/copyFrom(var,profile,remote,local))
- [`copyTo(var,profile,local,target)`](../commands/aws.s3/copyTo(var,profile,local,target))
- [`delete(var,profile,remotePath)`](../commands/aws.s3/delete(var,profile,remotePath))
- [`list(var,profile,remotePath)`](../commands/aws.s3/list(var,profile,remotePath))
- [`moveFrom(var,profile,remote,local)`](../commands/aws.s3/moveFrom(var,profile,remote,local))
- [`moveTo(var,profile,local,target)`](../commands/aws.s3/moveTo(var,profile,local,target))
 
#### [base]
- [`appendText(var,appendWith)`](../commands/base/appendText(var,appendWith))
- [`assertArrayEqual(array1,array2,exactOrder)`](../commands/base/assertArrayEqual(array1,array2,exactOrder))
- [`assertContains(text,substring)`](../commands/base/assertContains(text,substring))
- [`assertCount(text,regex,expects)`](../commands/base/assertCount(text,regex,expects))
- [`assertEmpty(text)`](../commands/base/assertEmpty(text))
- [`assertEndsWith(text,suffix)`](../commands/base/assertEndsWith(text,suffix))
- [`assertEqual(expected,actual)`](../commands/base/assertEqual(expected,actual))
- [`assertNotContain(text,substring)`](../commands/base/assertNotContain(text,substring))
- [`assertNotEmpty(text)`](../commands/base/assertNotEmpty(text))
- [`assertNotEqual(value1,value2)`](../commands/base/assertNotEqual(value1,value2))
- [`assertStartsWith(text,prefix)`](../commands/base/assertStartsWith(text,prefix))
- [`assertTextOrder(var,descending)`](../commands/base/assertTextOrder(var,descending))
- [`assertVarNotPresent(var)`](../commands/base/assertVarNotPresent(var))
- [`assertVarPresent(var)`](../commands/base/assertVarPresent(var))
- [`failImmediate(text)`](../commands/base/failImmediate(text))
- [`incrementChar(var,amount,config)`](../commands/base/incrementChar(var,amount,config))
- [`macro(file,sheet,name)`](../commands/base/macro(file,sheet,name))
- [`prependText(var,prependWith)`](../commands/base/prependText(var,prependWith))
- [`repeatUntil(steps,maxWaitMs)`](../commands/base/repeatUntil(steps,maxWaitMs))
- [`save(var,value)`](../commands/base/save(var,value))
- [`saveMatches(text,regex,saveVar)`](../commands/base/saveMatches(text,regex,saveVar))
- [`saveReplace(text,regex,replace,resultVar)`](../commands/base/saveReplace(text,regex,replace,resultVar))
- [`split(text,delim,saveVar)`](../commands/base/split(text,delim,saveVar))
- [`startRecording()`](../commands/base/startRecording())
- [`stopRecording()`](../commands/base/stopRecording())
- [`substringAfter(text,delim,saveVar)`](../commands/base/substringAfter(text,delim,saveVar))
- [`substringBefore(text,delim,saveVar)`](../commands/base/substringBefore(text,delim,saveVar))
- [`substringBetween(text,start,end,saveVar)`](../commands/base/substringBetween(text,start,end,saveVar))
- [`verbose(text)`](../commands/base/verbose(text))
- [`waitFor(waitMs)`](../commands/base/waitFor(waitMs))
- fixed NPE when secret file is not found in classpath
- remove direct spring dependency from S3-support code
- support externally controlled "nexial.properties" to be loaded to control resource configuration (S3, email, etc.).  
  Not required unless `nexial.outputToCloud` is set to `true`

#### [csv]
- [`compare(expected,actual,failFast)`](../commands/csv/compare(expected,actual,failFast))
- [`compareExtended(var,profile,expected,actual)`](../commands/csv/compareExtended(var,profile,expected,actual))
- [`convertExcel(excel,worksheet,csvFile)`](../commands/csv/convertExcel(excel,worksheet,csvFile))

#### [desktop]
- [`assertAttribute(locator,attribute,expected)`](../commands/desktop/assertAttribute(locator,attribute,expected))
- [`assertChecked(name)`](../commands/desktop/assertChecked(name))
- [`assertDisabled(name)`](../commands/desktop/assertDisabled(name))
- [`assertElementPresent(name)`](../commands/desktop/assertElementPresent(name))
- [`assertEnabled(name)`](../commands/desktop/assertEnabled(name))
- [`assertHierCells(matchBy,column,expected,nestedOnly)`](../commands/desktop/assertHierCells(matchBy,column,expected,nestedOnly))
- [`assertHierRow(matchBy,expected)`](../commands/desktop/assertHierRow(matchBy,expected))
- [`assertListCount(count)`](../commands/desktop/assertListCount(count))
- [`assertLocatorNotPresent(locator)`](../commands/desktop/assertLocatorNotPresent(locator))
- [`assertLocatorPresent(locator)`](../commands/desktop/assertLocatorPresent(locator))
- [`assertMenuEnabled(menu)`](../commands/desktop/assertMenuEnabled(menu))
- [`assertModalDialogNotPresent()`](../commands/desktop/assertModalDialogNotPresent())
- [`assertModalDialogPresent()`](../commands/desktop/assertModalDialogPresent())
- [`assertModalDialogTitle(title)`](../commands/desktop/assertModalDialogTitle(title))
- [`assertModalDialogTitleByLocator(locator,title)`](../commands/desktop/assertModalDialogTitleByLocator(locator,title))
- [`assertNotChecked(name)`](../commands/desktop/assertNotChecked(name))
- [`assertSelected(name,text)`](../commands/desktop/assertSelected(name,text))
- [`assertTableCell(row,column,contains)`](../commands/desktop/assertTableCell(row,column,contains))
- [`assertTableColumnContains(column,contains)`](../commands/desktop/assertTableColumnContains(column,contains))
- [`assertTableContains(contains)`](../commands/desktop/assertTableContains(contains))
- [`assertTableRowContains(row,contains)`](../commands/desktop/assertTableRowContains(row,contains))
- [`assertText(name,expected)`](../commands/desktop/assertText(name,expected))
- [`assertWindowTitleContains(contains)`](../commands/desktop/assertWindowTitleContains(contains))
- [`clear(locator)`](../commands/desktop/clear(locator))
- [`clearCombo(name)`](../commands/desktop/clearCombo(name))
- [`clearModalDialog(var,button)`](../commands/desktop/clearModalDialog(var,button))
- [`clearTextArea(name)`](../commands/desktop/clearTextArea(name))
- [`clearTextBox(name)`](../commands/desktop/clearTextBox(name))
- [`clickButton(name)`](../commands/desktop/clickButton(name))
- [`clickByLocator(locator)`](../commands/desktop/clickByLocator(locator))
- [`clickCheckBox(name)`](../commands/desktop/clickCheckbox(name))
- [`clickExplorerBar(group,item)`](../commands/desktop/clickExplorerBar(group,item))
- [`clickFirstMatchRow(nameValues)`](../commands/desktop/clickFirstMatchRow(nameValues))
- [`clickFirstMatchedList(contains)`](../commands/desktop/clickFirstMatchedList(contains))
- [`clickIcon(label)`](../commands/desktop/clickIcon(label))
- [`clickList(row)`](../commands/desktop/clickList(row))
- [`clickMenu(menu)`](../commands/desktop/clickMenu(menu))
- [`clickOffset(locator,xOffset,yOffset)`](../commands/desktop/clickOffset(locator,xOffset,yOffset))
- [`clickRadio(name)`](../commands/desktop/clickRadio(name))
- [`clickTab(group,name)`](../commands/desktop/clickTab(group,name))
- [`clickTableCell(row,column)`](../commands/desktop/clickTableCell(row,column))
- [`clickTableRow(row)`](../commands/desktop/clickTableRow(row))
- [`clickTextPane(name,criteria)`](../commands/desktop/clickTextPane(name,criteria))
- [`clickTextPaneRow(var,index)`](../commands/desktop/clickTextPaneRow(var,index))
- [`closeApplication()`](../commands/desktop/closeApplication())
- [`collapseHierTable()`](../commands/desktop/collapseHierTable())
- [`editHierCells(var,matchBy,nameValues)`](../commands/desktop/editHierCells(var,matchBy,nameValues))
- [`editTableCells(row,nameValues)`](../commands/desktop/editTableCells(row,nameValues))
- [`hideExplorerBar()`](../commands/desktop/hideExplorerBar)
- [`login(form,username,password)`](../commands/desktop/login(form,username,password))
- [`maximize()`](../commands/desktop/maximize())
- [`minimize()`](../commands/desktop/minimize())
- [`resize(width,height)`](../commands/desktop/resize(width,height))
- [`saveAllTableRows(var)`](../commands/desktop/saveAllTableRows(var))
- [`saveAttributeByLocator(var,locator,attribute)`](../commands/desktop/saveAttributeByLocator(var,locator,attribute))
- [`saveElementCount(var,name)`](../commands/desktop/saveElementCount(var,name))
- [`saveFirstListData(var,contains)`](../commands/desktop/saveFirstListData(var,contains))
- [`saveFirstMatchedListIndex(var,contains)`](../commands/desktop/saveFirstMatchedListIndex(var,contains))
- [`saveHierCells(var,matchBy,column,nestedOnly)`](../commands/desktop/saveHierCells(var,matchBy,column,nestedOnly))
- [`saveHierRow(var,matchBy)`](../commands/desktop/saveHierRow(var,matchBy))
- [`saveListData(var,contains)`](../commands/desktop/saveFirstListData(var,contains))
- [`saveLocatorCount(var,locator)`](../commands/desktop/saveLocatorCount(var,locator))
- [`saveModalDialogText(var)`](../commands/desktop/saveModalDialogText(var))
- [`saveModalDialogTextByLocator(var,locater)`](../commands/desktop/saveModalDialogTextByLocator(var,locater))
- [`saveProcessId(var,locator)`](../commands/desktop/saveProcessId(var,locator))
- [`saveTableRows(var,contains)`](../commands/desktop/saveTableRows(var,contains))
- [`saveTableRowsRange(var,beginRow,endRow)`](../commands/desktop/saveTableRowsRange(var,beginRow,endRow))
- [`saveText(var,name)`](../commands/desktop/saveText(var,name))
- [`saveTextPane(var,name,criteria)`](../commands/desktop/saveTextPane(var,name,criteria))
- [`saveWindowTitle(var)`](../commands/desktop/saveWindowTitle(var))
- [`selectCombo(name,text)`](../commands/desktop/selectCombo(name,text))
- [`showExplorerBar()`](../commands/desktop/showExplorerBar())
- [`toggleExplorerBar()`](../commands/desktop/toggleExplorerBar())
- [`typeAppendTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextArea(name,text1,text2,text3,text4))
- [`typeAppendTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeAppendTextBox(name,text1,text2,text3,text4))
- [`typeByLocator(locator,text)`](../commands/desktop/typeByLocator(locator,text))
- [`typeTextArea(name,text1,text2,text3,text4)`](../commands/desktop/typeTextArea(name,text1,text2,text3,text4))
- [`typeTextBox(name,text1,text2,text3,text4)`](../commands/desktop/typeTextBox(name,text1,text2,text3,text4))
- [`useApp(appId)`](../commands/desktop/useApp(appId))
- [`useForm(formName)`](../commands/desktop/useForm(formName))
- [`useHierTable(var,name)`](../commands/desktop/useHierTable(var,name))
- [`useList(var,name)`](../commands/desktop/useList(var,name))
- [`useTable(var,name)`](../commands/desktop/useTable(var,name))
- [`waitFor(name,maxWaitMs)`](../commands/desktop/waitFor(name,maxWaitMs))
- [`waitForLocator(locator,maxWaitMs)`](../commands/desktop/waitForLocator(locator,maxWaitMs))

#### [excel]
- [`clear(file,worksheet,range)`](../commands/excel/clear(file,worksheet,range))
- [`read(file,worksheet,range,var) - to be deleted`](../commands/excel/read(file,worksheet,range,var))
- [`saveData(var,file,worksheet,range)`](../commands/excel/saveData(var,file,worksheet,range))
- [`saveRange(var,file,worksheet,range)`](../commands/excel/saveRange(var,file,worksheet,range))
- [`write(file,worksheet,startCell,data)`](../commands/excel/write(file,worksheet,startCell,data))
- [`writeAcross(file,worksheet,startCell,array)`](../commands/excel/writeAcross(file,worksheet,startCell,array))
- [`writeDown(file,worksheet,startCell,array)`](../commands/excel/writeDown(file,worksheet,startCell,array))
- [`writeVar(var,file,worksheet,startCell)`](../commands/excel/writeVar(var,file,worksheet,startCell))

#### [external]
- [`runJUnit(className)`](../commands/external/runJUnit(className))
- [`runProgram(programPathAndParams)`](../commands/external/runProgram(programPathAndParams))

#### [image]
- [`compare(baseline,actual)`](../commands/image/compare(baseline,actual))
- [`convert(source,format,saveTo)`](../commands/image/convert(source,format,saveTo))
- [`crop(image,dimension,saveTo)`](../commands/image/crop(image,dimension,saveTo))
- [`resize(image,width,height,saveTo)`](../commands/image/resize(image,width,height,saveTo))

#### [io]
- [`assertEqual(file1,file2)`](../commands/io/assertEqual(file1,file2))
- [`assertNotEqual(file1,file2)`](../commands/io/assertNotEqual(file1,file2))
- [`assertReadableFile(file,minByte)`](../commands/io/assertReadableFile(file,minByte))
- [`compare(expected,actual,failFast)`](../commands/io/compare(expected,actual,failFast)) 
- [`copyFiles(source,target)`](../commands/io/copyFiles(source,target))
- [`count(var,path,pattern)`](../commands/io/count(var,path,pattern))
- [`deleteFiles(location,recursive)`](../commands/io/deleteFiles(location,recursive))
- [`filter(source,target,matchPattern)`](../commands/io/filter(source,target,matchPattern))
- [`makeDirectory(source)`](../commands/io/makeDirectory(source))
- [`moveFiles(source,target)`](../commands/io/moveFiles(source,target))
- [`readFile(var,file)`](../commands/io/readFile(var,file))
- [`readProperty(var,file,property)`](../commands/io/readProperty(var,file,property))
- [`saveDiff(var,expected,actual)`](../commands/io/saveDiff(var,expected,actual))
- [`saveFileMeta(var,file)`](../commands/io/saveFileMeta(var,file))
- [`saveMatches(var,path,filePattern)`](../commands/io/saveMatches(var,path,filePattern))
- [`unzip(zipFile,target)`](../commands/io/unzip(zipFile,target))
- [`validate(var,profile,inputFile)`](../commands/io/validate(var,profile,inputFile))
- [`writeFile(file,content,append)`](../commands/io/writeFile(file,content,append))
- [`writeProperty(file,property,value)`](../commands/io/writeProperty(file,property,value))
- [`zip(filePattern,zipFile)`](../commands/io/zip(filePattern,zipFile))

#### [jms]
- [`receive(var,config,waitMs)`](../commands/jms/receive(var,config,waitMs))
- [`send(config,messageId,payload)`](../commands/jms/send(config,messageId,payload))
- added "missing client connection jar" logic so we can provide instruction for missing client jars
- remove vendor-specific code (use Java reflection instead)

#### [json]
- [`assertCorrectness(json,schema)`](../commands/json/assertCorrectness(json,schema))
- [`assertElementCount(json,jsonpath,count)`](../commands/json/assertElementCount(json,jsonpath,count))
- [`assertElementNotPresent(json,jsonpath)`](../commands/json/assertElementNotPresent(json,jsonpath))
- [`assertElementPresent(json,jsonpath)`](../commands/json/assertElementPresent(json,jsonpath))
- [`assertValue(json,jsonpath,expected)`](../commands/json/assertValue(json,jsonpath,expected))
- [`assertValues(json,jsonpath,array,exactOrder)`](../commands/json/assertValues(json,jsonpath,array,exactOrder))
- [`assertWellformed(json)`](../commands/json/assertWellformed(json))
- [`storeCount(json,jsonpath,var)`](../commands/json/storeCount(json,jsonpath,var))
- [`storeValue(json,jsonpath,var)`](../commands/json/storeValue(json,jsonpath,var))
- [`storeValues(json,jsonpath,var)`](../commands/json/storeValues(json,jsonpath,var))

#### [mail]
- [`send(profile,to,subject,body)`](../commands/mail/send(profile,to,subject,body))

#### [number]
- [`assertEqual(num1,num2)`](../commands/number/assertEqual(num1,num2))
- [`assertGreater(num1,num2)`](../commands/number/assertGreater(num1,num2))
- [`assertGreaterOrEqual(num1,num2)`](../commands/number/assertGreaterOrEqual(num1,num2))
- [`assertLesser(num1,num2)`](../commands/number/assertLesser(num1,num2))
- [`assertLesserOrEqual(num1,num2)`](../commands/number/assertLesserOrEqual(num1,num2))
- [`average(var,array)`](../commands/number/average(var,array))
- [`ceiling(var)`](../commands/number/ceiling(var))
- [`floor(var)`](../commands/number/floor(var))
- [`increment(var,amount)`](../commands/number/increment(var,amount))
- [`max(var,array)`](../commands/number/max(var,array))
- [`min(var,array)`](../commands/number/min(var,array))
- [`round(var,closestDigit)`](../commands/number/round(var,closestDigit))

#### [pdf]
- [`assertContentEqual(actualPdf,expectedPdf)`](../commands/pdf/assertContentEqual(actualPdf,expectedPdf))
- [`assertFormElementPresent(var,name)`](../commands/pdf/assertFormElementPresent(var,name))
- [`assertFormValue(var,name,expected)`](../commands/pdf/assertFormValue(var,name,expected))
- [`assertFormValues(var,name,expectedValues,exactOrder)`](../commands/pdf/assertFormValues(var,name,expectedValues,exactOrder))
- [`assertPatternNotPresent(pdf,regex)`](../commands/pdf/assertPatternNotPresent(pdf,regex))
- [`assertPatternPresent(pdf,regex)`](../commands/pdf/assertPatternPresent(pdf,regex))
- [`assertTextArray(pdf,textArray,ordered)`](../commands/pdf/assertTextArray(pdf,textArray,ordered))
- [`assertTextNotPresent(pdf,text)`](../commands/pdf/assertTextNotPresent(pdf,text))
- [`assertTextPresent(pdf,text)`](../commands/pdf/assertTextPresent(pdf,text))
- [`count(pdf,text,var)`](../commands/pdf/count(pdf,text,var))
- [`saveAsPages(pdf,destination)`](../commands/pdf/saveAsPages(pdf,destination))
- [`saveAsText(pdf,destination)`](../commands/pdf/saveAsText(pdf,destination))
- [`saveFormValues(pdf,var,pageAndLineStartEnd,strategy)`](../commands/pdf/saveFormValues(pdf,var,pageAndLineStartEnd,strategy))
- [`saveMetadata(pdf,var)`](../commands/pdf/saveMetadata(pdf,var))
- [`saveToVar(pdf,var)`](../commands/pdf/saveToVar(pdf,var))

#### [rdbms]
- [`resultToCSV(var,csvFile,delim,showHeader)`](../commands/rdbms/resultToCSV(var,csvFile,delim,showHeader))
- [`runFile(var,db,file)`](../commands/rdbms/runFile(var,db,file))
- [`runSQL(var,db,sql)`](../commands/rdbms/runSQL(var,db,sql))
- [`runSQLs(var,db,sqls)`](../commands/rdbms/runSQLs(var,db,sqls))
- [`saveResult(db,sql,output)`](../commands/rdbms/saveResult(db,sql,output))
- added "missing database driver" logic so we can provide instruction for missing database driver
- remove driver-specific code (use Java reflection instead)

#### [redis]
- basic redis support added. Initial support include:
- url based connection (ie. `redis://...`)
- `append(profile,key,value)`: append value to existing key
- `assertKeyExists(profile,key)`: assert if specified key exists
- `delete(profile,key)`: delete a key and the associated value
- `flushAll(profile)`:  flush all data of the connected redis server
- `flushDb(profile)`: flush all the data of the connected redis database
- `rename(profile,current,new)`: rename key name
- `set(profile,key,value)`: add/overwrite value of a key
- `store(var,profile,key)`: store the current value of a key in redis to nexial context
- `storeKeys(var,profile,keyPattern)`: store all matching keys - based on `keyPattern` - to nexial context

#### [ssh]
- [`scpCopyFrom(var,profile,remote,local)`](../commands/ssh/scpCopyFrom(var,profile,remote,local))
- [`scpCopyTo(var,profile,local,remote)`](../commands/ssh/scpCopyTo(var,profile,local,remote))
- [`sftpCopyFrom(var,profile,remote,local)`](../commands/ssh/sftpCopyFrom(var,profile,remote,local))
- [`sftpCopyTo(var,profile,local,remote)`](../commands/ssh/sftpCopyTo(var,profile,local,remote))
- [`sftpDelete(var,profile,remote)`](../commands/ssh/sftpDelete(var,profile,remote))
- [`sftpList(var,profile,remote)`](../commands/ssh/sftpList(var,profile,remote))
- [`sftpMoveFrom(var,profile,remote,local)`](../commands/ssh/sftpMoveFrom(var,profile,remote,local))
- [`sftpMoveTo(var,profile,local,remote)`](../commands/ssh/sftpMoveTo(var,profile,local,remote))

#### [web]
- shipped with <a href="https://chromedriver.storage.googleapis.com/2.37/notes.txt" class="external-link" target="_nexial_link">chromedriver v2.37</a>, this includes
	- Supports Chrome v63-65
	- Resolved issue 2221: Add command-line option to log INFO level to stderr [[Pri-2]]
	- Resolved issue  450: ChromeDriver hangs when switching to new window whose document is being overwritten [[Pri-2]]
- shipped with <a href="https://github.com/mozilla/geckodriver/releases/tag/v0.20.0" class="external-link" target="_nexial_link">geckodriver v0.20.0 (firefox)</a>, 
 this includes:
	- fixes to shut down firefox process _more_ cleanly.
	- keyDown and keyUp action now support more than single primitive characters
- shipped with <a href="https://raw.githubusercontent.com/SeleniumHQ/selenium/master/java/CHANGELOG" class="external-link" target="_nexial_link">selenium 3.11.0</a>,
 this includes:
  - Removed deprecated methods from `RemoteWebDriver`.
- [`assertAndClick(locator,label)`](../commands/web/assertAndClick(locator,label))
- [`assertAttribute(locator,attrName,value)`](../commands/web/assertAttribute(locator,attrName,value))
- [`assertAttributeContains(locator,attrName,contains)`](../commands/web/assertAttributeContains(locator,attrName,contains))
- [`assertAttributeNotContains(locator,attrName,contains)`](../commands/web/assertAttributeNotContains(locator,attrName,contains))
- [`assertAttributeNotPresent(locator,attrName)`](../commands/web/assertAttributeNotPresent(locator,attrName))
- [`assertAttributePresent(locator,attrName)`](../commands/web/assertAttributePresent(locator,attrName))
- [`assertChecked(locator)`](../commands/web/assertChecked(locator))
- [`assertContainCount(locator,text,count)`](../commands/web/assertContainCount(locator,text,count))
- [`assertCssNotPresent(locator,property)`](../commands/web/assertCssNotPresent(locator,property))
- [`assertCssPresent(locator,property,value)`](../commands/web/assertCssPresent(locator,property,value))
- [`assertElementByAttributes(nameValues)`](../commands/web/assertElementByAttributes(nameValues))
- [`assertElementByText(locator,text)`](../commands/web/assertElementByText(locator,text))
- [`assertElementCount(locator,count)`](../commands/web/assertElementCount(locator,count))
- [`assertElementNotPresent(locator)`](../commands/web/assertElementNotPresent(locator))
- [`assertElementPresent(locator)`](../commands/web/assertElementPresent(locator))
- [`assertFocus(locator)`](../commands/web/assertFocus(locator))
- [`assertFrameCount(count)`](../commands/web/assertFrameCount(count))
- [`assertFramePresent(frameName)`](../commands/web/assertFramePresent(frameName))
- [`assertIECompatMode()`](../commands/web/assertIECompatMode())
- [`assertIENavtiveMode()`](../commands/web/assertIENavtiveMode())
- [`assertLinkByLabel(label)`](../commands/web/assertLinkByLabel(label))
- [`assertNotChecked(locator)`](../commands/web/assertNotChecked(locator))
- [`assertNotFocus(locator)`](../commands/web/assertNotFocus(locator))
- [`assertNotText(locator,text)`](../commands/web/assertNotText(locator,text))
- [`assertNotVisible(locator)`](../commands/web/assertNotVisible(locator))
- [`assertOneMatch(locator)`](../commands/web/assertOneMatch(locator))
- [`assertScrollbarHNotPresent(locator)`](../commands/web/assertScrollbarHNotPresent(locator)) 
- [`assertScrollbarHPresent(locator)`](../commands/web/assertScrollbarHPresent(locator))
- [`assertScrollbarVNotPresent(locator)`](../commands/web/assertScrollbarVNotPresent(locator)) 
- [`assertScrollbarVPresent(locator)`](../commands/web/assertScrollbarVPresent(locator))
- [`assertTable(locator,row,column,text)`](../commands/web/assertTable(locator,row,column,text))
- [`assertText(locator,text)`](../commands/web/assertText(locator,text))
- [`assertTextContains(locator,text)`](../commands/web/assertTextContains(locator,text))
- [`assertTextCount(locator,text,count)`](../commands/web/assertTextCount(locator,text,count))
- [`assertTextList(locator,list,ignoreOrder)`](../commands/web/assertTextList(locator,list,ignoreOrder))
- [`assertTextOrder(locator,descending)`](../commands/web/assertTextOrder(locator,descending))
- [`assertTextPresent(text)`](../commands/web/assertTextPresent(text))
- [`assertTitle(text)`](../commands/web/assertTitle(text))
- [`assertValue(locator,value)`](../commands/web/assertValue(locator,value))
- [`assertValueOrder(locator,descending)`](../commands/web/assertValueOrder(locator,descending))
- [`assertVisible(locator)`](../commands/web/assertVisible(locator))
- [`clearLocalStorage()`](../commands/web/clearLocalStorage())
- [`click(locator)`](../commands/web/click(locator))
- [`clickAndWait(locator,waitMs)`](../commands/web/clickAndWait(locator,waitMs)) 
- [`clickByLabel(label)`](../commands/web/clickByLabel(label)) 
- [`clickByLabelAndWait(label,waitMs)`](../commands/web/clickByLabelAndWait(label,waitMs)) 
- [`close()`](../commands/web/close())
- [`closeAll()`](../commands/web/closeAll())
- [`deselectMulti(locator,array)`](../commands/web/deselectMulti(locator,array))
- [`dismissInvalidCert()`](../commands/web/dismissInvalidCert())
- [`dismissInvalidCertPopup()`](../commands/web/dismissInvalidCertPopup())
- [`doubleClick(locator)`](../commands/web/doubleClick(locator))
- [`doubleClickAndWait(locator,waitMs)`](../commands/web/doubleClickAndWait(locator,waitMs))
- [`doubleClickByLabel(label)`](../commands/web/doubleClickByLabel(label))
- [`doubleClickByLabelAndWait(label,waitMs)`](../commands/web/doubleClickByLabelAndWait(label,waitMs))
- [`editLocalStorage(key,value)`](../commands/web/editLocalStorage(key,value))
- [`executeScript(var,script)`](../commands/web/executeScript(var,script))
- [`goBack()`](../commands/web/goBack())
- [`goBackAndWait()`](../commands/web/goBackAndWait())
- [`maximizeWindow()`](../commands/web/maximizeWindow())
- [`mouseOver(locator)`](../commands/web/mouseOver(locator))
- [`open(url)`](../commands/web/open(url))
- [`openAndWait(url,waitMs)`](../commands/web/openAndWait(url,waitMs))
- [`refresh()`](../commands/web/refresh())
- [`refreshAndWait()`](../commands/web/refreshAndWait())
- [`resizeWindow(width,height)`](../commands/web/resizeWindow(width,height))
- [`saveAllWindowIds(var)`](../commands/web/saveAllWindowIds(var))
- [`saveAllWindowNames(var)`](../commands/web/saveAllWindowNames(var))
- [`saveAttribute(var,locator,attrName)`](../commands/web/saveAttribute(var,locator,attrName))
- [`saveCount(var,locator)`](../commands/web/saveCount(var,locator))
- [`saveElement(var,locator)`](../commands/web/saveElement(var,locator))
- [`saveElements(var,locator)`](../commands/web/saveElements(var,locator))
- [`saveLocalStorage(var,key)`](../commands/web/saveLocalStorage(var,key))
- [`saveLocation(var)`](../commands/web/saveLocation(var))
- [`savePageAs(var,sessionIdName,url)`](../commands/web/savePageAs(var,sessionIdName,url))
- [`savePageAsFile(sessionIdName,url,file)`](../commands/web/savePageAsFile(sessionIdName,url,file))
- [`saveText(var,locator)`](../commands/web/saveText(var,locator))
- [`saveTextArray(var,locator)`](../commands/web/saveTextArray(var,locator))
- [`saveTextSubstringAfter(var,locator,delim)`](../commands/web/saveTextSubstringAfter(var,locator,delim))
- [`saveTextSubstringBefore(var,locator,delim)`](../commands/web/saveTextSubstringBefore(var,locator,delim))
- [`saveTextSubstringBetween(var,locator,start,end)`](../commands/web/saveTextSubstringBetween(var,locator,start,end))
- [`saveValue(var,locator)`](../commands/web/saveValue(var,locator))
- [`scrollLeft(locator,pixel)`](../commands/web/scrollLeft(locator,pixel))
- [`scrollRight(locator,pixel)`](../commands/web/scrollRight(locator,pixel))
- [`scrollTo(locator)`](../commands/web/scrollTo(locator))
- [`select(locator,text)`](../commands/web/select(locator,text))
- [`selectFrame(locator)`](../commands/web/selectFrame(locator))
- [`selectMulti(locator,array)`](../commands/web/selectMulti(locator,array))
- [`selectMultiOptions(locator)`](../commands/web/selectMultiOptions(locator))
- [`selectText(locator)`](../commands/web/selectText(locator))
- [`selectWindow(winId)`](../commands/web/selectWindow(winId))
- [`selectWindowAndWait(winId,waitMs)`](../commands/web/selectWindowAndWait(winId,waitMs))
- [`selectWindowByIndex(index)`](../commands/web/selectWindowByIndex(index))
- [`selectWindowByIndexAndWait(index,waitMs)`](../commands/web/selectWindowByIndexAndWait(index,waitMs))
- [`toggleSelections(locator)`](../commands/web/toggleSelections(locator))
- [`type(locator,value)`](../commands/web/type(locator,value))
- [`typeKeys(locator,value)`](../commands/web/typeKeys(locator,value))
- [`unselectAllText()`](../commands/web/unselectAllText())
- [`upload(fieldLocator,file)`](../commands/web/upload(fieldLocator,file))
- [`verifyContainText(locator,text)`](../commands/web/verifyContainText(locator,text))
- [`verifyText(locator,text)`](../commands/web/verifyText(locator,text))
- [`wait(waitMs)`](../commands/web/wait(waitMs))
- [`waitForElementPresent(locator)`](../commands/web/waitForElementPresent(locator)) 
- [`waitForPopUp(winId,waitMs)`](../commands/web/waitForPopUp(winId,waitMs))
- [`waitForTextPresent(text)`](../commands/web/waitForTextPresent(text))
- [`waitForTitle(text)`](../commands/web/waitForTitle(text))

#### [webalert]
- [`accept()`](../commands/webalert/accept())
- [`assertPresent()`](../commands/webalert/assertPresent())
- [`assertText(text,matchBy)`](../commands/webalert/assertText(text,matchBy))
- [`dismiss()`](../commands/webalert/dismiss())
- [`storeText(var)`](../commands/webalert/storeText(var))

#### [webcookie]
- [`assertNotPresent(name)`](../commands/webcookie/assertNotPresent(name))
- [`assertPresent(name)`](../commands/webcookie/assertPresent(name))
- [`assertValue(name,value)`](../commands/webcookie/assertValue(name,value))
- [`delete(name)`](../commands/webcookie/delete(name))
- [`deleteAll()`](../commands/webcookie/deleteAll())
- [`save(var,name)`](../commands/webcookie/save(var,name))
- [`saveAll(var)`](../commands/webcookie/saveAll(var))

#### [ws]
- [`assertReturnCode(var,returnCode)`](../commands/ws/assertReturnCode(var,returnCode))
- [`delete(url,body,var)`](../commands/ws/delete(url,body,var))
- [`download(url,queryString,saveTo)`](../commands/ws/download(url,queryString,saveTo))
- [`get(url,queryString,var)`](../commands/ws/get(url,queryString,var))
- [`head(url,var)`](../commands/ws/head(url,var))
- [`header(name,value)`](../commands/ws/header(name,value))
- [`headerByVar(name,var)`](../commands/ws/headerByVar(name,var))
- [`jwtParse(var,token,key)`](../commands/ws/jwtParse(var,token,key))
- [`jwtSignHS256(var,payload,key)`](../commands/ws/jwtSignHS256(var,payload,key))
- [`oauth(var,url,auth)`](../commands/ws/oauth(var,url,auth))
- [`patch(url,body,var)`](../commands/ws/patch(url,body,var))
- [`post(url,body,var)`](../commands/ws/post(url,body,var))
- [`put(url,body,var)`](../commands/ws/put(url,body,var))
- [`saveResponsePayload(var,file,append)`](../commands/ws/saveResponsePayload(var,file,append))
- [`soap(action,url,payload,var)`](../commands/ws/soap(action,url,payload,var))

#### [xml]
- [`assertCorrectness(xml,schema)`](../commands/xml/assertCorrectness(xml,schema))
- [`assertElementCount(xml,xpath,count)`](../commands/xml/assertElementCount(xml,xpath,count))
- [`assertElementNotPresent(xml,xpath)`](../commands/xml/assertElementNotPresent(xml,xpath))
- [`assertElementPresent(xml,xpath)`](../commands/xml/assertElementPresent(xml,xpath))
- [`assertValue(xml,xpath,expected)`](../commands/xml/assertValue(xml,xpath,expected))
- [`assertValues(xml,xpath,array,exactOrder)`](../commands/xml/assertValues(xml,xpath,array,exactOrder))
- [`assertWellformed(xml)`](../commands/xml/assertWellformed(xml))
- [`storeCount(xml,xpath,var)`](../commands/xml/storeCount(xml,xpath,var))
- [`storeValue(xml,xpath,var)`](../commands/xml/storeValue(xml,xpath,var))
- [`storeValues(xml,xpath,var)`](../commands/xml/storeValues(xml,xpath,var))
- fixes: url query string encoding to properly ampersand

#### [nexial expression]
- fix rounding error with decimal numbers for [NUMBER expression](../expressions/NUMBERexpression).

