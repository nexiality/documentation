{% include_relative _breadcrumb.html current="saveAsPages(pdf,destination)" %}


### Description
This command saves `pdf` in text file, into individual pages.  Each page in pdf document will be saved as 
a seperated text file in `destination`.


### Parameters
- **pdf** \- is the file path of the pdf document
- **destination** \- is the destination path where the text files will be stored


### Example
In the given pdf document, it has 94 pages. All 94 pages will be saved as 94 text files in the destination folder.

**Script**:<br/>
![script](image/saveAsPages_01.png)

**Result**:<br/>
![output](image/saveAsPages_02.png)

Text file names are appended with page number as shown:<br/>
![](image/saveAsPages_03.png)
