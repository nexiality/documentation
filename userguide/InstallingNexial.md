---
title: Installing Nexial
 parent: user guide
tags: installation install nexial userguide
comments: true
---


## Install Java
1.  Check if Java is installed - **Java 1.8 or above required**
	   1.  Open console via:  
        **Windows**:  Start | Run | `cmd <ENTER>`  
        **MacOSX**: Open Spotlight or type `CMD-Space` | `terminal <ENTER>`
    1.  `java -version <ENTER>`
    1.  If you get something like the following, please following Step 2 (below):
    
        ![no_java](image/InstallingNexial_01.png)
    1.  If you are not getting the above message, check that the version of Java installed is 1.8 
        or above.  For example,  
        ![java_18](image/InstallingNexial_02.png)
        
        ![java_16](image/InstallingNexial_02a.png)
    1.  If the version of Java installed is **1.8** or above, process to next section (Check 
        Excel Version).  if the version of Java installed is less than 1.8, proceed to Step 2 
        (below).

1.  Download Java  
    1.  Java can be downloaded from Oracle website.
    1.  Open your browser and point to <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" class="external-link" target="_nexial_external">http://www.oracle.com/technetwork/java/javase/downloads/index.html</a>
    1.  Click on the Download button just below JDK.  
        ![download_jdk](image/InstallingNexial_03.png)
    1.  Click on Accept License Agreement.  
        ![accept_license](image/InstallingNexial_04.png)
    1.  Select the appropriate download file suitable for your workstation/VDI.  When possible, 
        select the 64bit version for better performance.
    1.  **ALWAYS SELECT 64bit version FOR BETTER PERFORMANCE**

1.  Installing Java
    1.  **For Windows only: HIGHLY PREFERRED TO INSTALL JAVA IN A DIRECTORY THAT DOES NOT CONTAIN 
        ANY SPACE**  
        **Windows**: double-click on the downloaded installer. Follow the instructions of the 
        installer.  It is _**highly recommended**_ to install Java in a directory that does not 
        contain any spaces.  For example, `C:\tools\jdk1.8`.  
        
        - By default, Java is installed to either `C:\Program Files\Java\jdk...` or 
          `C:\Program Files (x86)\Java\jdk...`.   
        - For more hep, visit <a href="https://java.com/en/download/help/download_options.xml#windows" class="external-link" target="_nexial_external">https://java.com/en/download/help/download_options.xml#windows</a>
        
        **MacOSX**: double-click on the downloaded installer.  Follow the instructions of the 
        installer.  For more help, visit 
        <a href="https://java.com/en/download/help/mac_install.xml" class="external-link" target="_nexial_external">https://java.com/en/download/help/mac_install.xml</a>

1.  Check `PATH`, `JAVA_HOME`, `JRE_HOME`  
    Windows: 
    1.  Start | Run | sysdm.cpl <ENTER> | click "Advanced" tab | click  
        "Environment Variables..." button  
        ![sysdm](image/InstallingNexial_05.png) 
    1.  Under System variable, search for a variable named `Path`.
    1.  Ensure that the `bin\` directory of the installed Java is part of the value of `PATH`.  
        Preferably it should be the first entry of its value.  For example,  
        ![sysdm_path](image/InstallingNexial_06.png) 
    1.  Similarly search for a variable named `JAVA_HOME`.  If not found, click `New...` button to 
        create one.  Its value should be that of the installed directory of Java.
    1.  Similarly search for a variable named `JRE_HOME`.  If not found, there is no need to 
        create it. If found, check that it has the same value as `JAVA_HOME`.


## Check Excel Version
Currently Nexial supports Excel 2007 and 2010. Nexial requires the use of XLSX format (old XLS 
format not supported).


## Checking Browser Availability and Version
1.  **Internet Explorer** \- Nexial at this time only supports Internet Explorer 9 or above.  In 
				the future we might consider older versions of Internet Explorer.  Nexial however will support 
				either 32 or 64 bit.
1.  **Firefox** \- as stated on Selenium's website: "..._Support for Firefox is the latest release, 
				the previous release, the latest ESR release and the previous ESR release..._"  However there's 
				is high likelihood that older versions of Firefox will work as well.  Support from Nexial team 
				is provided on a case-by-case basis.
1.  **Chrome** \- latest and almost all recent versions are supported.  Older version can be 
				supported via using the corresponding 
				<a href="https://sites.google.com/a/chromium.org/chromedriver/downloads" class="external-link" target="_nexial_external">older versions of chrome driver</a>.
1.  **Safari** \- version 9 or above is supported, with the latest most likely to be most stable.


## Installing Nexial
1.  Download Nexial
    1.  Download Nexial distribution from the <a href="https://github.com/nexiality/nexial-core/releases" class="external-link" target="_nexial_external"><b>Release</b></a> page. 
        Note that the instruction for updating to newer version of Nexial is the same as installing it anew.
2.  Installing Nexial
    1.  Create a directory in your local workstation/VDI as `C:\projects\`
    1.  Unzip the downloaded Nexial package to `C:\projects\`.  For example, `C:\projects\nexial-core` 
        is the location where the content of the zip file is unzipped.
    1.  The location where Nexial is unzipped to is referred to as `NEXIAL_HOME`.
    1.  Done!


## Setting up Your First Project
1.  create project structure
    1.  open console and point to `bin` directory under the Nexial installation directory.  
        ![nexial_bin](image/InstallingNexial_07.png) 
    1.  invoke the project creator script - `nexial-project.cmd MyFirstProject`  
        ![nexial-project](image/InstallingNexial_08.png)
    1.  If everything works, then you should see the message "`creating project home at ...`" and "`DONE"`
    1.  You should see the following directory create, along with various files in it:  
        ![script_dir](image/InstallingNexial_09.png)
    1.  To gain better understanding of the project structure, check out 
        [Understanding Nexial project structure](UnderstandingProjectStructure)
    1.  to gain better understanding of the Nexial automation script format and usage, check out 
        [Understanding Nexial Excel templates](UnderstandingExcelTemplates)
    1.  _Now it's time to run some automation_!


## Running your first test automation
#### "Hello World" of Nexial automation
1.  Open `C:\projects\MyFirstProject\artifact\script\MyFirstProject.xlsx` \- we refer to this Excel 
				file as the _test script_ or the _automation script_. By [convention](UnderstandingProjectStructure) 
				all Excel files under the `artifact/script` directory are considered as automation scripts.

1.  Start first test case by typing in the following:  
    ![testcase](image/InstallingNexial_10.png)

1.  Enter the next 3 columns with the `base|verbose(text) command`:  
    ![verbose](image/InstallingNexial_11.png)
    
    Under `param 1` is the value to be used during runtime for the corresponding command.  In this 
    case it matches to the `text` of `base|verbose(text)` \- meaning, "printing to this row the 
    words `Hello World`".

1.  Save/close this automation script.

1.  From console, do the following:    
    ```batch
    cd C:\projects\nexial-core\bin   
    set JAVA_OPT=-Dnexial.assistantMode=on   
    nexial.cmd -script c:\projects\MyFirstProject\artifact\script\MyFirstProject.xlsx
    ```

    **Critical**, note the following:
    1.  The second line above (`-Dnexial.assistantMode=on`) is optional.  It is used to instruct 
        Nexial to open the test result when the test is complete. It is safe to omit but could save 
        you a few steps.
    1.  In some situation where SMTP is not permitted, email notification **must** be disabled.
        The second line **cannot be omitted** and **MUST** be  
        `set JAVA_OPT=-Dnexial.assistantMode=on -Dnexial.enableEmail=off`  
        or  
        `set JAVA_OPT=-Dnexial.enableEmail=off` 
    1.  The third line is to invoke Nexial to run the test as scripted in the file specified via 
        `-script` argument.

1.  If all's well, you should see something like the following on your console:  
    ![nexial_output](image/InstallingNexial_12.png) 
    
    For now, don't worry too much about these logs.  The most critical portion is near the end 
    where Nexial reports a summary of the test.  The above screenshot showed that 1 iteration ran, 
    with 1 step completed within 842ms.

1.  If you have the `assistantMode` turned on, then the output file should have been opened as well.  
				You see the first line (Row 4) looking something like this:  
    ![output](image/InstallingNexial_13.png)
    
    1.  Cell E5 prints `Hello World`.  At this time it might not appear obvious since we just print 
        out a static string of text. Our next example will show more interesting tests.
    1.  `L1:O2` is the execution summary.  It shows where the test was run, who and when it was run 
        and top-level execution numbers.  Note that the time duration is slightly different than 
        what's reported on the console.  The additional time as specified in the console is the 
        additional time to clean up the test run.
    1.  Column M shows the elapsed time in millisecond to complete the corresponding test step
    1.  Column N shows `PASS`, `FAIL` or `SKIP` as the result of the corresponding test step. 

**Congratulations**! You have just successfully run your first automation script via Nexial. Let's 
dig deeper...

## a little bit more...
1.  let's create a few more lines for this test case:  
    _MORE TO COME..._


## Diving Deeper
1. install .NET Framework 4.6.2 for desktop automation

