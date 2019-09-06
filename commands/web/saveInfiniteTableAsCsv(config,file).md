---
layout: default
title: saveInfiniteTableAsCsv(config,file)
parent: web
tags: command web
comments: true
---


### Description
This command automates the collection of grid data found in an 
<a href="https://www.nngroup.com/articles/infinite-scrolling/" class="external-link" target="_nexial_external">"infinite scrolling"</a> 
table into a CSV `file`. This command assumes that the data grid is constructed via the HTML `<TABLE>` construct.  As 
with most CSV-related features in Nexial, the field delimiter is determined via the 
[`nexial.textDelim`](../../systemvars/index#nexial.textDelim) System variable.

Example of an infinite scrolling table:<br/>
![](image/saveInfiniteTableAsCsv_01.png)

For infinite scrolling grid constructed via `<DIV>`, see 
[`saveInfiniteDivsAsCsv(config,file)`](saveInfiniteDivsAsCsv(config,file)) command.

{% include _ist_config.md %}

{% include _deepscan.md %}


### Parameters
- **`config`** - the configuration to use when collect grid data from an Infinite Scrolling table.
- **`file`** - the CSV file location to capture the grid data.


### Example
Suppose we want to capture the grid data in this Infinite Scrolling table (contains 57 rows):<br/>
![](image/saveInfiniteTableAsCsv_04.png)

**Script**:<br/>
![](image/saveInfiniteTableAsCsv_03.png)

**`output.csv`**:<br/>
![](image/saveInfiniteTableAsCsv_05.png)


### See Also
- [`saveDivsAsCsv(headers,rows,cells,nextPage,file)`](saveDivsAsCsv(headers,rows,cells,nextPage,file))
- [`saveInfiniteDivsAsCsv(config,file)`](saveInfiniteDivsAsCsv(config,file))
- [`saveTableAsCsv(locator,nextPageLocator,file)`](saveTableAsCsv(locator,nextPageLocator,file))
