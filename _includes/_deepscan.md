#### DeepScan

There are a number of System variables that may affect how grid data is collected into CSV. Some HTML table represents
its data via the HTML form input constructs with the likes of radio buttons, checkboxes, text boxes, dropdowns, etc. 
Some even include images as part of its grid content. In order to capture such content, Nexial provides several System
variables from which one can configure the grid data collection:
- [**`nexial.web.saveGrid.deepScan`**](../../systemvars/index#nexial.web.saveGrid.deepScan) - if this System variable is 
  set to `false` (default is `false`), then "deep scan" is turned off and all grid cells with HTML form element or 
  image would likely rendered as empty text. Consequently, the grid data collection routine will run faster without 
  "deep scan", so set this System variable to `true` only if HTML input or image is expected in the target HTML table.

- [**`nexial.web.saveGrid.header.input`**](../../systemvars/index#nexial.web.saveGrid.header.input) - this System 
  variable indicates what to capture for any of the grid header that contains HTML form element such as:
  - check box
  - radio button
  - text box
  - text area (for multi-line editing)
  - button
  - dropdown list(aka pick list)

  Depending on the value assigned to this System variable, Nexial will capture the corresponding metadata as the
  corresponding CSV value. The default value is `name`. The possible choices are:
    <table>
        <thead>
        <tr>
            <th nowrap="nowrap">configured value</th>
            <th>explanation</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>name</td>
            <td>
                Capture the value to the <a href="https://www.w3schools.com/tags/att_name.asp" class="external-link" target="_nexial_external">"name"</a>
                attribute of the web element in question. If this web element does have "name" attribute
                defined, an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>type</td>
            <td>
                Capture the type of web element in question. For HTML form input:
                <li>check box - <code>checkbox</code></li>
                <li>radio button - <code>radio</code></li>
                <li>text box - <code>text</code></li>
                <li>text area (for multi-line editing) - <code>textarea</code></li>
                <li>button - <code>button</code> or <code>submit</code> or <code>reset</code></li>
                <li>dropdown list (a.k.a. pick list) - <code>select-single</code> or <code>select-multiple</code></li>
                <li>file upload - <code>file</code></li>
            </td>
        </tr>
        <tr>
            <td>value</td>
            <td>
                Capture the value of the <a href="https://www.w3schools.com/tags/att_input_value.asp" class="external-link" target="_nexial_external">"value"</a>
                attribute of the web element in question. If this web element does have "value" attribute
                defined, an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>id</td>
            <td>
                Capture the value of the <a href="https://www.w3schools.com/tags/att_id.asp" class="external-link" target="_nexial_external">"id"</a>
                attribute of the web element in question. If this web element does have "id" attribute defined,
                an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>state</td>
            <td>
                Capture the "state" of the web element in question, as close to its visual presentation as
                possible.
                <li>check box - either <code>checked</code> or <code>unchecked</code></li>
                <li>radio button - either <code>selected</code> or <code>unselected</code></li>
                <li>text box - same as "value"</li>
                <li>text area (for multi-line editing) - same as "value"</li>
                <li>button - same as "value"</li>
                <li>dropdown list (a.k.a. pick list) - a list of selected options separated by <a href="../../systemvars/index#nexial.textDelim"><code>nexial.textDelim</code></a></li>
                <li>file upload - empty string</li>
            </td>
        </tr>
        </tbody>
    </table>
    <br/>
- [**`nexial.web.saveGrid.header.image`**](../../systemvars/index#nexial.web.saveGrid.header.image) - this System 
  variable indicates what to capture for any of the grid header that contains an image. The default value `type`, which 
  will have the value `image`. Possible choices are:
    <table>
        <thead>
        <tr>
            <th nowrap="nowrap">configured value</th>
            <th>explanation</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>name</td>
            <td>
                Capture the value to the <a href="https://www.w3schools.com/tags/att_name.asp" class="external-link" target="_nexial_external">"name"</a>
                attribute of the web element in question. If this web element does have "name" attribute
                defined, an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>type</td>
            <td><code>image</code></td>
        </tr>
        <tr>
            <td>alt</td>
            <td>
                Capture the value of the <a href="https://www.w3schools.com/tags/att_img_alt.asp" class="external-link" target="_nexial_external">"alt"</a>
                attribute of the image element in question. If this image element does have "alt" attribute
                defined, an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>id</td>
            <td>
                Capture the value of the <a href="https://www.w3schools.com/tags/att_id.asp" class="external-link" target="_nexial_external">"id"</a>
                attribute of the image element in question. If this image element does have "id" attribute
                defined, an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>filename</td>
            <td>
                Capture the file name of the image element in question. Note that this is not the fully
                qualified resource locator (i.e. URL), but simply the file name with extension.
            </td>
        </tr>
        </tbody>
    </table>
    <br/>
- [**`nexial.web.saveGrid.data.input`**](../../systemvars/index#nexial.web.saveGrid.data.input) - this System variable 
  indicates what to capture for any of the grid cell that contains HTML form element such as:
  - check box
  - radio button
  - text box
  - text area (for multi-line editing)
  - button
  - dropdown list(aka pick list)

  Depending on the value assigned to this System variable, Nexial will capture the corresponding metadata as the 
  corresponding CSV value. The default value is `name`. The possible choices are:
   <table>
       <thead>
       <tr>
           <th nowrap="nowrap">configured value</th>
           <th>explanation</th>
       </tr>
       </thead>
       <tbody>
       <tr>
           <td>name</td>
           <td>
               Capture the value to the <a href="https://www.w3schools.com/tags/att_name.asp" class="external-link" target="_nexial_external">"name"</a>
               attribute of the web element in question. If this web element does have "name" attribute defined, an 
               empty string will be used instead.
           </td>
       </tr>
       <tr>
           <td>type</td>
           <td>
               Capture the type of web element in question. For HTML form input:
               <li>check box - <code>checkbox</code></li>
               <li>radio button - <code>radio</code></li>
               <li>text box - <code>text</code></li>
               <li>text area (for multi-line editing) - <code>textarea</code></li>
               <li>button - <code>button</code> or <code>submit</code> or <code>reset</code></li>
               <li>dropdown list (a.k.a. pick list) - <code>select-single</code> or <code>select-multiple</code></li>
               <li>file upload - <code>file</code></li>
           </td>
       </tr>
       <tr>
           <td>value</td>
           <td>
               Capture the value of the <a href="https://www.w3schools.com/tags/att_input_value.asp" class="external-link" target="_nexial_external">"value"</a>
               attribute of the web element in question. If this web element does have "value" attribute defined, an 
               empty string will be used instead.
           </td>
       </tr>
       <tr>
           <td>id</td>
           <td>
               Capture the value of the <a href="https://www.w3schools.com/tags/att_id.asp" class="external-link" target="_nexial_external">"id"</a>
               attribute of the web element in question. If this web element does have "id" attribute defined, an 
               empty string will be used instead.
           </td>
       </tr>
       <tr>
           <td>state</td>
           <td>
               Capture the "state" of the web element in question, as close to its visual presentation as
               possible.
               <li>check box - either <code>checked</code> or <code>unchecked</code></li>
               <li>radio button - either <code>selected</code> or <code>unselected</code></li>
               <li>text box - same as "value"</li>
               <li>text area (for multi-line editing) - same as "value"</li>
               <li>button - same as "value"</li>
               <li>dropdown list (a.k.a. pick list) - a list of selected options separated by <a href="../../systemvars/ndex#nexial.textDelim"><code>nexial.textDelim</code></a></li>
               <li>file upload - empty string</li>
           </td>
       </tr>
       </tbody>
   </table>
   <br/>
- [**`nexial.web.saveGrid.data.image`**](../../systemvars/index#nexial.web.saveGrid.data.image) - this System variable 
  indicates what to capture for any of the grid cell that contains an image. The default value `type`, which will have 
  the value `image`. Possible choices are:
    <table>
        <thead>
        <tr>
            <th nowrap="nowrap">configured value</th>
            <th>explanation</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>name</td>
            <td>
                Capture the value to the <a href="https://www.w3schools.com/tags/att_name.asp" class="external-link" target="_nexial_external">"name"</a>
                attribute of the web element in question. If this web element does have "name" attribute
                defined, an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>type</td>
            <td><code>image</code></td>
        </tr>
        <tr>
            <td>alt</td>
            <td>
                Capture the value of the <a href="https://www.w3schools.com/tags/att_img_alt.asp" class="external-link" target="_nexial_external">"alt"</a>
                attribute of the image element in question. If this image element does have "alt" attribute
                defined, an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>id</td>
            <td>
                Capture the value of the <a href="https://www.w3schools.com/tags/att_id.asp" class="external-link" target="_nexial_external">"id"</a>
                attribute of the image element in question. If this image element does have "id" attribute
                defined, an empty string will be used instead.
            </td>
        </tr>
        <tr>
            <td>filename</td>
            <td>
                Capture the file name of the image element in question. Note that this is not the fully
                qualified resource locator (i.e. URL), but simply the file name with extension.
            </td>
        </tr>
        </tbody>
    </table>
    <br/>
- [**`nexial.web.saveGrid.data.trim`**](../../systemvars/index#nexial.web.saveGrid.data.trim) - this System variable
  determines if the captured data should be trimmed before saving to CSV file. Default is `true`. Note that this 
  System variable is NOT affected by `nexial.web.saveGrid.deepScan` System variable.

- [**`nexial.web.saveGrid.end.trim`**](../../systemvars/index#nexial.web.saveGrid.end.trim) - this System variable
  dtermines if the generated CSV file should be ended with a line feed or not. This can ease the analytical or 
  comparison work to follow. The default is `false`, which means that a line feed will be added to the end of the CSV 
  file. Note that this System variable is NOT affected by `nexial.web.saveGrid.deepScan` System variable.
