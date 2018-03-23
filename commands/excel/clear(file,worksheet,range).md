{% include_relative _breadcrumb.html current="clear(file,worksheet,range)" %}


### Description
This command is used to clear the text from the cells in the given worksheet from an excel file in the given range.


### Parameter(s)
- **file** \- is the path of the source Excel File
- **worksheet** \- name of the worksheet
- **range** \- range of the cells


### Example
**Script**:
![script](image/clear_01.png)

**Output**:
![output](image/clear_02.png)


### See Also
- [`write(file,worksheet,startCell,var)`](write(file,worksheet,startCell,data))
- [`read(file,worksheet,range,var)`](read(file,worksheet,range,var))
