{% include_relative _breadcrumb.html current="assertTextArray(pdf,textArray,ordered)" %}


### Description
This command asserts the content in `pdf` contains each of the text element in `textArray`.  Use `ordered` to assert 
if the order of `textArray` must be followed.

Note that this **DOES NOT** mean that the text element specified in `textArray` must be strictly adjacent to each other
in the `pdf` content. In other words, it is permissible to other text between the elements specified in `textArray`.
Furthermore, if `ordered` is `false`, the order to each element of `textArray` is to be found need NOT be strictly 
enforced in `pdf` content.


### Parameters
- **pdf**\- this parameter is the file path of the pdf document
- **textArray** \- is the expected array of text elements
- **ordered** \- is the boolean value


### Example
If the ordered parameter in the command is set as **true**, expected and actual are asserted for the same order. 
If set as **false**, it will ignore the order.

**Script:**<br/>
![script](image/assertTextArray_01.png)

**Result:**<br/>
![output](image/assertTextArray_02.png)

