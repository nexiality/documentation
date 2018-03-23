{% include_relative _breadcrumb.html current="compare(expected,actual,failFast)" %}


### Description
This command is used to compare two CSV files. It compares the file size (in bytes) and the content of the files. 

**NOTE THAT THIS COMMAND IS FUNCTIONALLY THE SAME AS 
[io &raquo;`compare(expected,actual,failFast)`](../io/compare(expected,actual,failFast).html).   Check its 
[documentation](../io/compare(expected,actual,failFast).html) for more details.**


### Parameter(s)
- **expected**\- is the expected csv file path.
- **actual** \- is the actual csv file path
- **failFast** \-  boolean value. If set as `true`, it will fail the test when it detects the first mismatch and stop 
  further comparison of the content. If `false`, it will continue comparing all the content.


### Example
Test Data:
![data](image/compare_01.png)

Script:
![script](image/compare_02.png)

Output: failure on first line and fourth string
![output](image/compare_03.png)


### See Also
- [io &raquo;`compare(expected,actual,failFast)`](../io/compare(expected,actual,failFast).html)
