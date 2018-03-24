{% include_relative _breadcrumb.html current="writeFile(file,content,append)" %}


### Description
- This command writes and update the file as per the content provided
- This command will be useful if a file need to be updated with the desired values, with the option to append or ignore.
- If append is set to true it will overwrite the content if already exist in the file or else otherwise.


### Parameter(s)
- **file**\- this parameter if the full path of the file along with file name to which the content has to be written.
- **content**\- this parameter is the content which need to written to the file
- **append**\- this parameter is a boolean value  if you want to append the existing value or ignore it.


### Example
Script:<br/>
![script](image/writeFile_01.png)

Output:<br/>
![output](image/writeFile_02.png)
