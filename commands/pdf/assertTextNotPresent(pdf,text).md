{% include_relative _breadcrumb.html current="assertTextNotPresent(pdf,text)" %}


### Description
This command asserts the given text is not present in `pdf`.


### Parameters
- **pdf** \- is the pdf document file path
- **text** \- is the expected text to be asserted that is not present


### Example
**Script**:<br/>
![script](image/assertTextNotPresent_01.png)

**Result:**<br/>
![output](image/assertTextNotPresent_02.png)


### See Also
- [`assertPatternPresent(pdf,regex)`](assertPatternPresent(pdf,regex))
- [`assertPatternNotPresent(pdf,regex)`](assertPatternNotPresent(pdf,regex))
- [`assertTextPresent(pdf,text)`](assertTextPresent(pdf,text))
