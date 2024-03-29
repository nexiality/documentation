---
layout: default
title: desktop
tags: desktop command
comments: true
---


Nexial supports the automation of desktop application both in terms of performing actions by simulating keystrokes and
mouse events. It uses <a href="https://github.com/2gis/Winium" class="external-link" target="_nexial_link">Winium</a> as
the underlying automation engine. As such, Nexial currently does not support the automation of Java Swing applications
or non-Windows applications.

To see a quick demo on Desktop Automation and to see Nexial in Action, check out the 
[Nexial Desktop Automation on Notepad](../../videos/Nexial_Desktop_Automation) video.

If you are new to desktop automation via Nexial, please first familiarize yourself with the 
[Basic Concept and Configuration](configureDesktopApplication).


### Available Commands
- [`assertAttribute(locator,attribute,expected)`](assertAttribute(locator,attribute,expected))
- [`assertChecked(name)`](assertChecked(name))
- [`assertDisabled(name)`](assertDisabled(name))
- [`assertElementNotPresent(name)`](assertElementNotPresent(name))
- [`assertElementPresent(name)`](assertElementPresent(name))
- [`assertEnabled(name)`](assertEnabled(name))
- [`assertHierCells(matchBy,column,expected,nestedOnly)`](assertHierCells(matchBy,column,expected,nestedOnly))
- [`assertHierRow(matchBy,expected)`](assertHierRow(matchBy,expected))
- [`assertListCount(count)`](assertListCount(count))
- [`assertLocatorNotPresent(locator)`](assertLocatorNotPresent(locator))
- [`assertLocatorPresent(locator)`](assertLocatorPresent(locator))
- [`assertMenuEnabled(menu)`](assertMenuEnabled(menu))
- [`assertModalDialogNotPresent()`](assertModalDialogNotPresent())
- [`assertModalDialogPresent()`](assertModalDialogPresent())
- [`assertModalDialogTitle(title)`](assertModalDialogTitle(title))
- ~~[`assertModalDialogTitleByLocator(locator,title)`](assertModalDialogTitleByLocator(locator,title))~~
- [`assertNotChecked(name)`](assertNotChecked(name))
- [`assertSelected(name,text)`](assertSelected(name,text))
- [`assertTableCell(row,column,contains)`](assertTableCell(row,column,contains))
- [`assertTableColumnContains(column,contains)`](assertTableColumnContains(column,contains))
- [`assertTableContains(contains)`](assertTableContains(contains))
- [`assertTableRowContains(row,contains)`](assertTableRowContains(row,contains))
- [`assertText(name,expected)`](assertText(name,expected))
- [`assertWindowTitleContains(contains)`](assertWindowTitleContains(contains))
- [`check(name)`](check(name))
- [`checkByLocator(locator)`](checkByLocator(locator))
- [`clear(locator)`](clear(locator))
- [`clearCombo(name)`](clearCombo(name))
- [`clearModalDialog(var,button)`](clearModalDialog(var,button))
- [`clearTextArea(name)`](clearTextArea(name))
- [`clearTextBox(name)`](clearTextBox(name))
- [`clickButton(name)`](clickButton(name))
- [`clickByLocator(locator)`](clickByLocator(locator))
- [`clickCheckBox(name)`](clickCheckbox(name))
- [`clickElementOffset(name,xOffset,yOffset)`](clickElementOffset(name,xOffset,yOffset))
- [`clickExplorerBar(group,item)`](clickExplorerBar(group,item))
- [`clickFirstMatchRow(nameValues)`](clickFirstMatchRow(nameValues))
- [`clickFirstMatchedList(contains)`](clickFirstMatchedList(contains))
- [`clickIcon(label)`](clickIcon(label))
- [`clickList(row)`](clickList(row))
- [`clickMenu(menu)`](clickMenu(menu))
- [`clickMenuByLocator(locator,menu)`](clickMenuByLocator(locator,menu))
- [`clickOffset(locator,xOffset,yOffset)`](clickOffset(locator,xOffset,yOffset))
- [`clickRadio(name)`](clickRadio(name))
- [`clickScreen(button,modifiers,x,y)`](clickScreen(button,modifiers,x,y))
- [`clickTab(group,name)`](clickTab(group,name))
- [`clickTableCell(row,column)`](clickTableCell(row,column))
- [`clickTableRow(row)`](clickTableRow(row))
- [`clickTextPane(name,criteria)`](clickTextPane(name,criteria))
- [`clickTextPaneRow(var,index)`](clickTextPaneRow(var,index))
- [`closeApplication()`](closeApplication())
- [`collapseHierTable()`](collapseHierTable())
- [`contextMenu(name,menu,xOffset,yOffset)`](contextMenu(name,menu,xOffset,yOffset))
- [`contextMenuByLocator(locator,menu,xOffset,yOffset)`](contextMenuByLocator(locator,menu,xOffset,yOffset))
- [`doubleClick(name)`](doubleClick(name))
- [`doubleClickByLocator(locator)`](doubleClickByLocator(locator))
- ~~[`editCurrentRow(nameValues)`](editCurrentRow(nameValues))~~
- [`editHierCells(var,matchBy,nameValues)`](editHierCells(var,matchBy,nameValues))
- [`editTableCells(row,nameValues)`](editTableCells(row,nameValues))
- [`focusFirstTableRow`](focusFirstTableRow)
- [`focusLastTableRow`](focusLastTableRow)
- [`hideExplorerBar()`](hideExplorerBar)
- [`login(form,username,password)`](login(form,username,password))
- [`maximize()`](maximize())
- [`minimize()`](minimize())
- [`mouseWheel(amount,modifiers,x,y)`](mouseWheel(amount,modifiers,x,y))
- [`resize(width,height)`](resize(width,height))
- [`rightClickElementOffset(name,xOffset,yOffset)`](rightClickElementOffset(name,xOffset,yOffset))
- [`rightClickOffset(locator,xOffset,yOffset)`](rightClickOffset(locator,xOffset,yOffset))
- [`saveAllTableRows(var,csv)`](saveAllTableRows(var,csv))
- [`saveAttributeByLocator(var,locator,attribute)`](saveAttributeByLocator(var,locator,attribute))
- [`saveComboOptions(var,name)`](saveComboOptions(var,name))
- [`saveComboOptionsByLocator(var,locator)`](saveComboOptionsByLocator(var,locator))
- [`saveElementCount(var,name)`](saveElementCount(var,name))
- [`saveFirstListData(var,contains)`](saveFirstListData(var,contains))
- [`saveFirstMatchedListIndex(var,contains)`](saveFirstMatchedListIndex(var,contains))
- [`saveHierCells(var,matchBy,column,nestedOnly)`](saveHierCells(var,matchBy,column,nestedOnly))
- [`saveHierRow(var,matchBy)`](saveHierRow(var,matchBy))
- [`saveListData(var,contains)`](saveFirstListData(var,contains))
- [`saveLocatorCount(var,locator)`](saveLocatorCount(var,locator))
- [`saveModalDialogText(var)`](saveModalDialogText(var))
- [`saveModalDialogTextByLocator(var,locator)`](saveModalDialogTextByLocator(var,locator))
- [`saveProcessId(var,locator)`](saveProcessId(var,locator))
- [`saveRowCount(var)`](saveRowCount(var))
- [`saveTableRows(var,contains,csv)`](saveTableRows(var,contains,csv))
- [`saveTableRowsRange(var,beginRow,endRow,csv)`](saveTableRowsRange(var,beginRow,endRow,csv))
- [`saveText(var,name)`](saveText(var,name))
- [`saveTextByLocator(var,locator)`](saveTextByLocator(var,locator))
- [`saveTextPane(var,name,criteria)`](saveTextPane(var,name,criteria))
- [`saveWindowTitle(var)`](saveWindowTitle(var))
- [`screenshot(name,file)`](screenshot(name,file))
- [`screenshotByLocator(locator,file)`](screenshotByLocator(locator,file))
- [`selectCombo(name,text)`](selectCombo(name,text))
- [`sendKeysToTextBox(name,text1,text2,text3,text4)`](sendKeysToTextBox(name,text1,text2,text3,text4))
- [`showExplorerBar()`](showExplorerBar())
- [`toggleExplorerBar()`](toggleExplorerBar())
- [`typeAppendTextArea(name,text1,text2,text3,text4)`](typeAppendTextArea(name,text1,text2,text3,text4))
- [`typeAppendTextBox(name,text1,text2,text3,text4)`](typeAppendTextBox(name,text1,text2,text3,text4))
- [`typeByLocator(locator,text)`](typeByLocator(locator,text))
- [`typeKeys(os,keystrokes)`](typeKeys(os,keystrokes))
- [`typeTextArea(name,text1,text2,text3,text4)`](typeTextArea(name,text1,text2,text3,text4))
- [`typeTextBox(name,text1,text2,text3,text4)`](typeTextBox(name,text1,text2,text3,text4))
- [`uncheck(name)`](uncheck(name))
- [`uncheckByLocator(locator)`](uncheckByLocator(locator))
- [`useApp(appId)`](useApp(appId))
- [`useForm(formName)`](useForm(formName))
- [`useHierTable(var,name)`](useHierTable(var,name))
- [`useList(var,name)`](useList(var,name))
- [`useTable(var,name)`](useTable(var,name))
- [`useTableRow(var,row)`](useTableRow(var,row))
- [`waitFor(name,maxWaitMs)`](waitFor(name,maxWaitMs))
- [`waitForLocator(locator,maxWaitMs)`](waitForLocator(locator,maxWaitMs))
