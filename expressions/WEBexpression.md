---
layout: default
title: WEB expression
parent: Expressions
tags: command expressions
comments: true
---

### Description
WEB expression allows one to express the processing of one or more Web automation operations in a pipeline-like format.
A Web expression must be in following format:<br/>
`[WEB(webResult) => type(locator,value) click(locator)]`<br/>

In the above example, `webResult` is the variable to capture the outcome of each web operation.


### Working with Execution Result
Executing series of Web automated operation will result in series of outcomes. So Nexial is designed to capture entire 
result into a "wrapper" or "object". This wrapper consists of following fields, which one can access via the dot (`.`) 
notation:
- **allPass** - `true` means all the executed web operations were successful, or `false` means one or more web 
  operations had failed.
- **results** - a list of web operation results, in the order of the their execution:
  - **operation** - the web operation performed.
  - **result** - the result of the web operation performed which is `PASS` or `FAIL`.
  - **error** - the error, if any, ocurred to a failed web operation.

Following is the JSON-like sample of the Web Execution result:
```text
{
  allPass=false,
  results=[{
    operation=type(//*[@id="txtUsername"],Admin),
    result=PASS,
    error=null
  }, {
    operation=type(//*[@id="txtPassword"],admin123),
    result=PASS,
    error=null
  }, {
    operation=click(//*[@id="btnLogi"]),
    result=FAIL,
    error=No element via locator '//*[@id="btnLogin"]'
  }]
}
```

To reference the specific execution result, one would use the dot notation (`.`) like this: `${result}.allPass`. 
This would retrieve end execution result for a series of operations. In contrast, the `${result}.results[0].result` will 
return first operation result as `PASS` or `FAIL`. One can use a different variable name other than `result`.


### Operations
- **`click(locator)`** - This clicks on element specified via locator. If one wants to perform operation `clickByLabel`, 
  provided label as input must be with prefix `text=`. So for example, if locator is `text=LOGIN`, this clicks on the 
  element having label `LOGIN`.    
- **`deselect(locator,option1,option2,option3...)`** - This automates deselection of one or multiple `OPTION` elements 
  from `select` element identified via locator. If multiple `OPTION` elements specified, it deselects multiple options 
  from the list-box (i.e. `<select multiple ...>`).
- **`fetchAsCsv(locator1,locator2,locator3...)`** - This stores the values of web elements specified via locators 
  to [CSV](CSVexpression) format with the headers `locator` and `value`.
- **`select(locator,option1,option2,option3...)`** - This automates selection of one or multiple `OPTION` elements 
  from `select` element identified via locator. If multiple `OPTION` elements specified, it selects multiple options 
  from the list-box (i.e. `<select multiple ...>`).
- **`selectWindow(locator,winId)`** - This selects the open tab/window as per the `windows id` or by `index` 
  determined by the order when corresponding tab/window is opened.
- **`text`** - transforms the associated Web statement(s) result into plain text.
- **`type(locator,value)`** - This enters the specified `value` into the first element that matches the specified 
 `locator`. 
- **`typeKeys(locator,value)`** - This issues keystroke on the element specified via `locator`. For more information,
  go through [web &raquo; `typeKeys(locator,value)`](../commands/web/typeKeys(locator,value)) 
- **`wait(waitMs)`** - This waits till the desired time(in milli seconds) passed as input parameter `waitMs`.


### Example
Script:<br/>
![script](image/WebExpression_01.png)

Output:<br/>
![](image/WebExpression_02.png)

![](image/WebExpression_03.png)

![](image/WebExpression_04.png)

![](image/WebExpression_05.png)
