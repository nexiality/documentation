This command encapsulates a variety of configuration via the `config` parameter to control how data is captured from an
infinite scrolling table. The `config` parameter consists of one or more configurations, one per line:

- `header-cell`: locator to identify individual header cells. The captured text of these header cells will be the header 
  of the CSV file.
  
- `data-viewport`: (**REQUIRED**) the locator to the portion of the grid that scrolls. <br/>
   For example, the highlighted element is where the scrolling occurs for a `<TABLE>`:<br/>
   ![](image/saveInfiniteTableAsCsv_02.png)<br/>
   The locator `css=.dataTables_scrollBody` is thus the one to use in this case.
   
   Similarly, if ths target data grid is a `<DIV>`:<br/>
   ![](image/saveInfiniteDivAsCsv_01.png)<br/>
   The locator `css=.ui-grid-viewport` is the one to use.

- `data-row-xpath`: (**REQUIRED**) relative XPATH to each row from its parent grid. In most cases for `<TABLE>` grid, 
  this configuration would usually be `.//tbody/tr`. Note that XPATH is the only supported locator form in this case. 
  The leading `.` is significant: it means "relative to" current element, which is the scrolling viewport.

- `data-cell-xpath`: (**REQUIRED**) relative XPATH to each cell from its parent row. In most cases for `<TABLE>` grid, 
  this would be `./td`. Note that XPATH is the only supported locator form in this case. The leading `.` is significant: 
  it means "relative to" current element, which is the parent row.

- `limit`: maximum number of rows to collect. -1 (default) means unlimited.

- `waitBetweenScroll`: milliseconds to wait between each scroll action. This gives the underlying application time to
  retrieve new records to display. The default value is 600 milliseconds.

- `nexial.web.saveGrid.deepScan`: override any existing System variable of the same name (see below).

- `nexial.web.saveGrid.header.input`: override any existing System variable of the same name (see below).

- `nexial.web.saveGrid.header.image`: override any existing System variable of the same name (see below).

- `nexial.web.saveGrid.data.input`: override any existing System variable of the same name (see below).

- `nexial.web.saveGrid.data.image`: override any existing System variable of the same name (see below).

- `nexial.web.saveGrid.end.trim`: override any existing System variable of the same name (see below).

