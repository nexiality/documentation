{% include_relative _breadcrumb.html current="assertTextPresent(pdf,text)" %}


### Description
This command asserts the given text is present in `pdf`.


### Parameters
- **pdf** \- is the pdf document file path
- **text** \- is the expected text value to be asserted


### Example
**Script**:<br/>
![script](image/assertTextPresent_01.png)

**Result:**<br/>
![output](image/assertTextPresent_02.png)


### See Also
- [`assertPatternPresent(pdf,regex)`](assertPatternPresent(pdf,regex))
- [`assertPatternNotPresent(pdf,regex)`](assertPatternNotPresent(pdf,regex))
- [`assertTextNotPresent(pdf,text)`](assertTextNotPresent(pdf,text))
