### Description

This command is used to compare two CSV files. It compares the file size (in bytes) and the content of the files. 

**NOTE THAT THIS COMMAND IS FUNCTIONALLY THE SAME AS `[io.compare(expected,actual,failFast)](https://confluence.ep.com/display/QA/compare%28expected%2Cactual%2CfailFast%29+-+io)`.  Check its [documentation](https://confluence.ep.com/display/QA/compare%28expected%2Cactual%2CfailFast%29+-+io)**** for more details.  **

### Parameter(s)

- **expected**\- is the expected .csv file path.
- **actual** \- is the actual .csv file path
- **failFast** \-  boolean value. If set as true, it will fail the test  when it detects the first mismatch and stop further comparison of the content. If false, it will continue comparing all the content.

### Example

**Test Data**:

![](image/compare_01.png)

**Script**:

![](image/compare_02.png)

**Result**: It was failed on first line and fourth string

![](image/compare_03.png)

### See Also