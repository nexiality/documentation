{% include_relative _breadcrumb.html current="read(file,worksheet,range,var)" %}


### Description
This command reads the data from the cells of the given worksheet from the excel file with the given range 
and will be saved in the given variable.


### Parameters
- **file** - is the path of the source excel file
- **worksheet** \- name of the worksheet
- **range** \- range of the cells separated by **:**
- **var** \- variable name. Output is stored with this variable name


### Example
**Script:**<br/>
![script](image/read_01.png)

**Output:**<br/>
![output](image/read_02.png)


### See Also
- [`write(file,worksheet,startCell,var)`](write(file,worksheet,startCell,data))