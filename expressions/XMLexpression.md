---
layout: default
title: XML expression
parent: Expressions
tags: command expressions
comments: true
---


### Description
XML Expression provides transformational operations on a XML document.


### Operations
#### **`append(xpath,content)`**
search against specified `xml` via `xpath`, and append `content` to all matching instances. 

**Example**

**Input XML file**:<br/>
![](image/XMLexpression_01.png)

**Script**: Append the string `" US dollars "` to the `price` in each node<br/>
![](image/XMLexpression_02.png)

**Output file**:<br/>
![](image/XMLexpression_03.png)

-----

#### **`attribute(xpath,name)`**
Retrieves the value of `name` attribute from the element(s) that matched the specified `xpath`. If exactly one match is 
found, this operation returns a [`TEXT`](TEXTexpression) data type. If more than one matches are found, a 
[`LIST`](LISTexpression) data type is returned instead.

**Example**

**Input XML file**: bookstore.xml<br/>
![](image/XMLexpression_04.png)

**Script**: List all titles with price > 30.00<br/>
![](image/XMLexpression_05.png)

**Output**:<br/>
![](image/XMLexpression_06.png)

-----

#### **`beautify`**
"Pretty" formatting on current XML document to improve readability.

**Input XML file**: books.xml<br/>
![](image/XMLexpression_09.png)

**Script**: Beautify the above xml<br/>
![](image/XMLexpression_10.png)

**Output file**<br/>
![](image/XMLexpression_11.png)

-----

#### **`clear(xpath)`**
Search against specified `xml` via `xpath` and clear content of all matching instances. As seen above, `clear(xpath)` 
clears the element's content. This is different from [`delete(xpath)`](#deletexpath) which removes the matching element 
itself. 

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Clear all instances where `genre` is `Fantasy`.<br/>
![](image/XMLexpression_12.png)

**Output file**: <br/>
![](image/XMLexpression_13.png)

-----

#### **`content(xpath)`**
Retrieves the content of the element(s) that matched the specified `xpath`. If exactly one match is found, this 
operation returns a [`TEXT`](TEXTexpression) data type. If more than one matches are found, a [`LIST`](LISTexpression) 
data type is returned instead.

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: List all the titles.<br/>
![](image/XMLexpression_07.png)

**Output**:<br/>
![](image/XMLexpression_08.png)

-----

#### **`count(xpath)`**
Counts the number of elements present at the specified `xpath`.

**Example**

**Input XML file**: bookstore.xml<br/>
![](image/XMLexpression_04.png)

**Script**: Count all the books from year 2003.<br/>
![](image/XMLexpression_14.png)

**Output**:<br/>
![](image/XMLexpression_15.png)

-----

#### **`delete(xpath)`**
Search against specified `xml` via `xpath` and delete xml node of all matching instances.`delete(xpath)` removes the 
matching element(s) itself. This is different from [`clear(xpath)`](#clearxpath) which only clears the content of the 
matching element(s). This operation is the same as [`remove(xpath)`](#removexpath).

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Clear the nodes where `genre` is `Fantasy`.<br/>
![](image/XMLexpression_16.png)

**Output File**: <br/>
![](image/XMLexpression_17.png)

-----

#### **`extract(xpath)`**
Extract a portion of the XML document based on the specified `xpath`. Based on the XML document in question and the `xpath`
specified, the result could either be `null` (none matched), text (matched to a textual value), XML node or an XML array.
`extracted` is added as the root tag if the specified `xpath` matches with multiple nodes in order to make it a valid XML.

**Example**

**1. Extracting XML nodes**<br/>
**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Extract all the books published in the year 2000.<br/>
![](image/XMLexpression_18.png)

**Output File**:<br/>
![](image/XMLexpression_19.png)

**2. Extracting text and arrays from XML**<br/>
**Input XML file**: desserts.xml<br/>
![](image/XMLexpression_46.png)

**Script**:<br/>
![](image/XMLexpression_44.png)

**Output**:<br/>
![](image/XMLexpression_45.png)

-----

#### **`insertAfter(xpath,content)`**
Search against specified `xml` via `xpath`, and insert `content` after all matching instances. 

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Insert new tag `description` after `publish_date`.<br/>
![](image/XMLexpression_20.png)

**Output File**:<br/>
![](image/XMLexpression_21.png)

-----

#### **`insertBefore(xpath,content)`**
Search against specified `xml` via `xpath`, and insert `content` before all matching instances. 

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Insert new tag `description` before `publish_date`.<br/>
![](image/XMLexpression_22.png)

**Output File**:<br/>
![](image/XMLexpression_23.png)

-----

#### **`minify`**
Compressed current XML document which are suitable for effecient data transfer.

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Minify the above XML.<br/>
![](image/XMLexpression_24.png)

**Output File**:<br/>
![](image/XMLexpression_25.png)

-----

#### **`prepend(xpath,content)`**
Search against specified `xml` via `xpath`, and prepend `content` to all matching instances. 

**Example**

**Input XML file**: bookstore.xml<br/>
![](image/XMLexpression_04.png)

**Script**: Prepend the string `"publishing year = "` to each `publish_year`.<br/>
![](image/XMLexpression_26.png)

**Output File**:<br/>
![](image/XMLexpression_27.png)

-----

#### **`remove(xpath)`**
Remove from the source XML the element(s) that matches the specified `xpath`. This operation is the same as 
[`delete(xpath)`](#deletexpath).

**Example**

**Input XML file**: bookstore.xml<br/>
![](image/XMLexpression_04.png)

**Script**: Remove `author` from each book in `Web` category.<br/>
![](image/XMLexpression_28.png)

**Output File**:<br/>
![](image/XMLexpression_29.png)

-----

#### **`replace(xpath,content)`**
Search against specified `xml` via `xpath`, and replace `content` against all matching instances. This command 
is different from [`replaceIn(xpath,content)`](#replaceinxpathcontent) in that it replaces the tags as well as the 
content of the matching elements while [`replaceIn(xpath,content)`](#replaceinxpathcontent) only replaces the content 
of the matching elements. 

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Replace the `publish_date` in each node with `current_dateTime` containing the current date and time.<br/>
![](image/XMLexpression_30.png)

**Output File**: As seen below, the entire line containing the `publish_date` tag along with its content was 
replaced by the `current_dateTime` tag and its content.<br/>
![](image/XMLexpression_31.png)

-----

#### **`replaceIn(xpath,content)`**
Search against specified `xml` via `xpath`, and replace inside content of all matching instances. This command 
is different from [`replace(xpath,content)`](#replacexpathcontent) in that it only replaces the content of the 
matching elements while [`replace(xpath,content)`](#replacexpathcontent) replaces the tags as well as the content 
of the matching elements. 

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Replace the `price` of each book in the `Fantasy` genre with `35.50 USD`.<br/>
![](image/XMLexpression_32.png)

**Output**: As seen below. only the content of the `price` tag was replaced, the tag itself remains unmodified.<br/>
![](image/XMLexpression_33.png)

**Note:** `replaceIn(xpath,content)` and [`updateContent(xpath,content)`](#updatecontentxpathcontent) are the same when 
the specified xpath points to an XML node.

-----

#### **`save(path,append)`**
Save current expression content to `path`. If `path` resolves to an existing file, `append` set as `true` will append 
current expression content to the said file. `append` is optional and defaults to `false`.

**Example**

**Input XML file**: books.xml<br/>
![](image/XMLexpression_01.png)

**Script**: Save all the books published in the year 2000 to another XML.<br/>
![](image/XMLexpression_34.png)

**Output File**:<br/>
![](image/XMLexpression_35.png)

-----

#### **`store(var)`**
Save current XML expression to a data variable.  If the specified `var` exists, its value will be overwritten. Using 
this operation, one can put an expression on pause and resume it at a later time.

**Example**

**Input XML file**: bookstore.xml<br/>
![](image/XMLexpression_04.png)

**Script**: `newXml` contains the expression to extract all the books from the year 2005. We then use this variable to
extract the books belonging to the `Cooking` category.<br/>
![](image/XMLexpression_36.png)

**Output**:<br/>
![](image/XMLexpression_37.png)

-----

#### **`text`**
Transform current XML document into its textual representation.

**Example**

**Input XML file**: bookstore.xml<br/>
![](image/XMLexpression_04.png)

**Script**: Transform above XML to text.<br/>
![](image/XMLexpression_38.png)

**Output File**:<br/>
![](image/XMLexpression_39.png)

-----

#### **`updateAttribute(xpath,name,value)`**
Also known as **`update-attribute(xpath,name,value)`**. This operation updates the attribute of all matched elements 
based on `name` and `value`. If `value` is empty, then the target attributes are effectively removed. 

**Example**

**Input XML file**: bookstore.xml<br/>
![](image/XMLexpression_04.png)

**Script**: Update the title of every book to `new Title`.<br/>
![](image/XMLexpression_40.png)

**Output File**:<br/>
![](image/XMLexpression_41.png)

-----

#### **`updateContent(xpath,content)`**
Also known as **`update-content(xpath,content)`**. This operation updates (technically speaking, replace) the content 
of the matched elements with the specified `content`. `content` may be text or XML nodes. If `content` is empty, then 
the content of the target elements are effectively removed. 

**Example**

**Input XML file**: bookstore.xml<br/>
![](image/XMLexpression_04.png)

**Script**: Update the price of each book from the year 2005 to `50.00`.<br/>
![](image/XMLexpression_42.png)

**Output File**:<br/>
![](image/XMLexpression_43.png)

**Note:** `updateContent(xpath,content)` and [`replaceIn(xpath,content)`](#replaceinxpathcontent) are the same when the 
specified xpath points to a XML node.

-----

<Script>jQuery(document).ready(function () { newOperationSelect(); });</Script>

