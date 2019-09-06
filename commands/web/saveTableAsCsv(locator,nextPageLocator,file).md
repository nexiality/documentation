---
layout: default
title: saveTableAsCsv(locator,nextPageLocator,file)
parent: web
tags: command web
comments: true
---

### Description
This command automatically collects cell data found a HTML table, as represented by `locator`, and save them as CSV 
into `file`. If the target table contains a header row, which is usually composed through the 
`<thead><tr><th>...</th></tr></thead>` or `<tr><th>...</th></tr>` construct, it will be collected as the header of the 
CSV file as well. As with most CSV-related features in Nexial, the field delimiter is determined via the 
[`nexial.textDelim`](../../systemvars/index#nexial.textDelim) System variable.

It is not uncommon for a HTML table to contain more than one "page" worth of data, and additional "pages" of data are 
accessed via a designated web element (button, anchor, etc.). This technique is commonly known as pagination.  By 
default, this command will collect only the data that are displayed at the time of execution. However, this command has 
an optional feature to automatically visit all the pages of a HTML table and collect all the data presented on each 
page. This can be a great help when the gathering of the entire data set is desired, such as comparing such data set
against the result of a SQL query or a CSV data file.

To enable the auto-pagination, specify the appropriate locator for the web component that would forward the HTML data
to the next page as `nextPageLocator`. For example, consider the following HTML table built with pagination control:<br/>

![](image/saveTableAsCsv_01.png)

In this case, the highlighted control (`>`) would be the `nextPageLocator`, which can be defined as 
`//button[contains(@class,'mat-paginator-navigation-next')]` or `class=mat-paginator-navigation-next`.

By specifying the appropriate `nextPageLocator`, this command will automatically forward through the subsequent pages to
collect all the data. Nexial will auto-forward through all the pages until the specified `nextPageLocator` no longer 
resolve to a Web element, or the resolved Web element is no longer active (i.e. disabled). Below is a sample of the CSV 
file generated via this command - note that all 20 rows are collected through a single command:<br/>

![](image/saveTableAsCsv_02.png)

Note that:
- The `nextPageLocator` is optional. Specifying it as `(empty)` or `(blank)` would disable any pagination automation.
- Nexial will not attempt to "rewind" the pagination back to the initial or first page.

{% include _deepscan.md %}


### Parameters
- **locator** - locator of the target table component.
- **nextPageLocator** - locator of component that would forward the pagination
- **file** - the location of the CSV file


### Example
See above


### See Also
- [`saveDivsAsCsv(headers,rows,cells,nextPage,file)`](saveDivsAsCsv(headers,rows,cells,nextPage,file))
- [`saveInfiniteDivsAsCsv(config,file)`](saveInfiniteDivsAsCsv(config,file))
- [`saveInfiniteTableAsCsv(config,file)`](saveInfiniteTableAsCsv(config,file))
