{% include_relative _breadcrumb.html current="assertPatternPresent(pdf,regex)" %}


### Description
This command asserts the text with the given pattern (`regex`) is present in `pdf`.


### Parameters
- **pdf** \- is the file path of the PDF document
- **regex** \- is the regular expression to define the text pattern


### Example
Use regular expression to define the pattern. With the given pattern, search for text that matches with text in the 
pdf document.

**Script**:<br/>
![script](image/assertPatternPresent_01.png)

**Result**:<br/>
![output](image/assertPatternPresent_02.png)


### See Also
- [`assertPatternNotPresent(pdf,regex)`](assertPatternNotPresent(pdf,regex))
- [`assertTextPresent(pdf,text)`](assertTextPresent(pdf,text))
- [`assertTextNotPresent(pdf,text)`](assertTextNotPresent(pdf,text))
