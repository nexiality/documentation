---
layout: default
title: Installing Nexial
parent: User Guide
tags: installation install nexial userguide
comments: true
---

> Nexial requires Java 1.8.0_151 or above and Excel 2007/2010 or above. If you don't have Java installed on your system, 
> follow the next section to do so.


### Install Java

Check if Java is installed - **Java 1.8.0_151 or above required, and 64-bit Java is highly recommended**
   **If possible, consider installing the latest version of Java 1.8 or the latest release of Java.**<br/>
   
<div class="tabs">
    <ul class="tab-links tabs-collapsed">
        <li class="active"><a href="#tab3">Windows</a></li>
        <li><a href="#tab4">Mac OSX</a></li>
    </ul>
    <div class="tab-content">
        <div id="tab3" class="tab active">
        <ol>
            <li>
			   Open the console by pressing Windows key and the letter R (<code>Win+R</code>) at the same time, 
			   type in <b>cmd</b> and press <b>&lt;ENTER&gt;</b><br/>
            </li>
			<li>
			    From the console, type <b>java -version</b> and press <b>&lt;ENTER&gt;</b><br/>
			    If you get something like the following, please follow the next step (Step 3) below to download and install 
			    Java:<br/>
                <img src="image/InstallingNexial_01.png"/><br/>
                If you are not getting the above message, check that the version of Java installed is 1.8.0_151 or 
                above. For example, here's a snapshot of an outdated Java installation (1.6.0.45).<br/>
                <img src="image/InstallingNexial_02a.png"/><br/>
                While the snapshot below shows Java 1.8, this version of not supported. Please be sure that your Java 
                installation is <b><a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" class="external-link" target="_nexial_link">Java 1.8.0_151 or above</a></b>:<br/>
                <img src="image/InstallingNexial_02.png"/><br/>
                If your Java installation is outdated/unsupported, please follow the next step (Step 3) below to 
                download and install Java.<br/>
			</li>
			<li>
			    To download Java, visit the following link:
			    <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" class="external-link" target="_nexial_link">http://www.oracle.com/technetwork/java/javase/downloads/index.html</a><br/>
			    Click on the Download button:<br/>
			    <img src="image/InstallingJava_01.png" style="width:480px;box-shadow:none"/><br/>
			    <br/>
			    Scroll down to the bottom of the page and click <b>Accept License Agreement</b>.<br/>
			    <img src="image/InstallingJava_02.png" style="width:480px;box-shadow:none"/><br/>
			    Select the appropriate download file suitable for your operating system. It is recommended to select 
			    the <b>64bit version</b> for better performance and efficient memory management.
			</li>
        </ol>
        Please note that <a href="https://adoptopenjdk.net/upstream.html" class="external-link" target="_nexial_link">OpenJDK</a> 
        and <a href="https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html" class="external-link" target="_nexial_link">Amazon Corretto</a> 
        are also supported for Nexial. Both open-source JDKs are used by many Nexialists.  
        </div>
        <div id="tab4" class="tab" style= "display:none;">
        <ol>
            <li>
			   Open the Terminal app, or open Spotlight (CMD-Space) and then type, <b>terminal</b> and press 
			   <b>&lt;ENTER&gt;</b><br/>
            </li>
			<li>
			    From the console, type <b>java -version</b> and press <b>&lt;ENTER&gt;</b><br/>
			    If you get something like the following, please follow the next step (Step 3) below to download and install 
			    Java:<br/>
                <img src="image/InstallingNexial_01.png"/><br/>
			    If you are not getting the above message, check that the version of Java installed is 1.8.0_151 or 
			    above. For example, here's a snapshot of an outdated Java installation (1.6.0.45).<br/>
			    <img src="image/InstallingNexial_02a.png"/><br/>
                While the snapshot below shows Java 1.8, this version of not supported. Please be sure that your Java 
                installation is <b><a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" class="external-link" target="_nexial_link">Java 1.8.0_151 or above</a></b>:<br/>
			    <img src="image/InstallingNexial_02.png"/><br/>
			    If your Java installation is outdated/unsupported, please follow the next step (Step 3) below to 
			    download and install Java.<br/>
			</li>
			<li>
			    To download Java, visit the following link:
			    <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" class="external-link" target="_nexial_link">http://www.oracle.com/technetwork/java/javase/downloads/index.html</a><br/>
			    Click on the Download button:<br/>
			    <img src="image/InstallingJava_01.png" style="width:480px;box-shadow:none"/><br/>
			    <br/>
			    Scroll down to the bottom of the page and click <b>Accept License Agreement</b>.<br/>
			    <img src="image/InstallingJava_02.png" style="width:480px;box-shadow:none"/><br/>
			    Select the appropriate download file suitable for your operating system. It is recommended to select 
			    the <b>64bit version</b> for better performance and efficient memory management.
			</li>
            Please note that <a href="https://adoptopenjdk.net/upstream.html" class="external-link" target="_nexial_link">OpenJDK</a> 
            and <a href="https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html" class="external-link" target="_nexial_link">Amazon Corretto</a> 
            are also supported for Nexial. Both open-source JDKs are used by many Nexialists.  
        </ol>
        </div>
    </div>
</div>
<br/>


### Using Nexial Installer
**Note**: Nexial requires Java 1.8.0_151 or above and Excel 2007/2010 or above. If you don't have Java installed on 
your system, please follow the section above.

<div class="tabs">
    <ul class="tab-links tabs-collapsed">
        <li class="active"><a href="#tab1">Windows</a></li>
        <li><a href="#tab2">Mac OSX</a></li>
    </ul>
    <div class="tab-content">
        <div id="tab1" class="tab active">
            <ol>
                <li>
                    To keep things more structured, we will create a new directory for our installation process: <br/> 
                    Navigate to your local hard drive and create a new folder called **projects** (i.e. 
                    <code>C:\projects</code>).<br/>
                    <img src="image/Installer_01.png"/>
                </li>
                <li>
                    Click the following link to begin downloading the Nexial installer:
                    <a href="https://github.com/nexiality/nexial-installer/releases/download/nexial-installer-v1.4.2/nexial-installer-1.4.2.zip" class="external-link" target="_nexial_link">Nexial Installer</a>.
                </li>            
                <li>
                    Next, locate the downloaded zip file in your Downloads folder.
                    <br/>
                    <img src="image/Installer_02.png"/>
                </li>            
                <li>
                    Unzip the <code>nexial-installer.zip</code> file into the <code>C:\projects\</code> directory that 
                    you just created. <br/>
                    To do this, right-click on <code>nexial-installer.zip</code>, select 
                    <code>Extract All</code> and then type in <code>C:\projects</code>:<br/>
                    <img src="image/Installer_03.gif"/>
                </li>            
                <li>
                    Navigate to <code>C:\projects\</code> directory and double click on the newly created 
                    <code>nexial-installer</code> folder, then double click the <code>bin</code> folder:<br/>
                    <img src="image/Installer_04.gif"/>
                </li>            
                <li>
                    Double click <code>install-latest.cmd</code> file (<b>NOT</b> the <code>install-latest.sh</code> 
                    file).<br/>
                    <img src="image/Installer_05.png"/>
                </li>            
                <li>
                    Let the command prompt run; this may take a while. When it finishes, it should close itself and you 
                    now have the latest Nexial installed onto your computer!
                </li>
            </ol>
        </div>
        <div id="tab2" class="tab" style= "display:none;">
            Create a new directory under your HOME directory named <code>projects</code>. Both Nexial (the 
            automation platform) and Nexial Installer will be installed individually under this directory.<br/>
            <ol>
                <li>
                    Open Finder:<br/>
                    <img src="image/InstallingNexial_01.mac.png"/>
                </li>
                <li>
                    Navigate to your HOME directory via shortcut <code>COMMAND-SHIFT-G</code>, then type in <code>~/</code>:<br/>
                    <img src="image/InstallingNexial_02.mac.png"/>
                </li>
                <li>
                    Create a new directory via shortcut <code>CONTROL-SHIFT-n</code>, then type in <code>projects</code>:<br/>
                    <img src="image/InstallingNexial_03.mac.png"/>
                </li>
                <li>
                    Click the following link to begin downloading the Nexial installer:
                    <a href="https://github.com/nexiality/nexial-installer/releases/download/nexial-installer-v1.4.2/nexial-installer-1.4.2.zip" class="external-link" target="_nexial_link">Nexial Installer</a><br/>
                    <br/>
                    By default, it will be downloaded to the <code>Downloads</code> directory. Move this file to the 
                    newly created <code>projects</code> directory:<br/>
                    <img src="image/InstallingNexial_04.mac.png"/>
                </li>            
                <li>
                    Rename the Nexial Installer zip by removing its version number from the zip file. That way, it will
                    unzip to a directory named as <code>nexial-installer</code> (instead of <code>nexial-installer-1.4.2</code>):<br/>
                    <img src="image/InstallingNexial_05.mac.png"/><br/>
                    <img src="image/InstallingNexial_06.mac.png"/><br/>
                </li>
                <li>
                    Double-click on <code>nexial-installer.zip</code> to start unzipping this file. This will unzip 
                    <code>nexial-installer.zip</code> to a directory named as <code>nexial-installer</code>:<br/>
                    <img src="image/InstallingNexial_07.mac.png"/>
                    <br/>
                    Note that the unzip directory contains a <code>bin</code> and a <code>lib</code> directory.
                </li>
                <li>
                    Right-click on <code>nexial-installer/bin/installer-latest.sh</code> (<b>NOT 
                    <code>installer-latest.cmd</code></b>). Choose either <code>Terminal.app</code> or 
                    <code>iTerm.app</code>:<br/>
                    <img src="image/InstallingNexial_08.mac.png"/>
					<br/><b>a. If the terminal app does not show up on the list:</b> click "other" then in the drop down menu labeled "Enable:" select "All Applications". From here, navigate through
					the Applications folder then enter the Utilities folder and select the Terminal application.
                </li>
                <li>
                    Nexial installation will commence:<br/>
                    <img src="image/InstallingNexial_09.mac.png"/><br/>
                    <br/>
                    Give it a few minutes or so, Nexial installation will complete and you will have yourself the 
                    latest Nexial installed on your computer!<br/>
                    <img src="image/InstallingNexial_10.mac.png"/>
                </li>
            </ol>
        </div>
    </div>
</div>
<br/>

For troubleshooting or any other issues read the following steps:


### Check Excel Version
Nexial requires Excel 2007/2010 or above. It requires the use of XLSX format (old XLS format not supported).


### Checking Browser Availability and Version
1. **Internet Explorer** - Nexial at this time only supports Internet Explorer 9 or above. In the future we might 
   consider older versions of Internet Explorer. Nexial however will support either 32 or 64 bit.

2. **Firefox** - as stated on Selenium's website: "..._Support for Firefox is the latest release, the previous 
   release, the latest ESR release and the previous ESR release..._" However there is a high likelihood that older 
   versions of Firefox will work as well. Support from Nexial team is provided on a case-by-case basis.

3. **Chrome** - latest and almost all recent versions are supported. Older version can be supported via using the 
   corresponding 
   <a href="https://sites.google.com/a/chromium.org/chromedriver/downloads" class="external-link" target="_nexial_link">older versions of chrome driver</a>.

4. **Safari** - version 9 or above is supported, with the latest most likely to be most stable in terms of support.


### Setting up Your First Project
1. Create Project Structure
   1. Open console and point to `bin` directory under the Nexial installation directory.<br/>
      ![nexial_bin](image/InstallingNexial_07.png) 
   2. Invoke the project creator script - `nexial-project.cmd MyFirstProject`
      ![nexial-project](image/InstallingNexial_08.png)
   3. If everything works, then you should see the message "`creating project home at ...`" and "`DONE"`
   4. You should see the following directory create, along with various files in it:<br/>
      ![script_dir](image/InstallingNexial_09.png)
   5. To gain better understanding of the project structure, check out 
      [Understanding Nexial project structure](UnderstandingProjectStructure)
   6. To gain better understanding of the Nexial automation script format and usage, check out 
      [Understanding Nexial Test Artifact](UnderstandingExcelTemplates)
   7. _Now it's time to run some automation_!


### Running your first test automation
##### "Hello World" of Nexial automation
1. Open `C:\projects\MyFirstProject\artifact\script\MyFirstProject.xlsx` \- we refer to this Excel file as the 
   _test script_ or the _automation script_. By [convention](UnderstandingProjectStructure) all Excel files under the 
   `artifact/script` directory are considered as automation scripts.
2. Start first test case by typing in the following:<br/>
   ![testcase](image/InstallingNexial_10.png)
3. Enter the next 3 columns with the `base|verbose(text) command`:<br/>
   ![verbose](image/InstallingNexial_11.png)
   
   Under `param 1` is the value to be used during runtime for the corresponding command.  In this 
   case it matches to the `text` of `base|verbose(text)` - meaning, "printing to this row the 
   words `Hello World`".
4. Save/close this automation script.
5. From console, do the following:
   ```batch
   cd C:\projects\nexial-core\bin
   set JAVA_OPT=-Dnexial.openResult=on
   nexial.cmd -script c:\projects\MyFirstProject\artifact\script\MyFirstProject.xlsx
   ```

   **Critical**, note the following:
   1. The second line above (`-Dnexial.openResult=on`) is optional.  It is used to instruct 
      Nexial to open the test result when the test is complete. It is safe to omit but could save 
      you a few steps.
   2. In some situation where SMTP is not permitted, email notification **must** be disabled.
      The second line **cannot be omitted** and **MUST** be
      `set JAVA_OPT=-Dnexial.openResult=on -Dnexial.enableEmail=off`
      or
      `set JAVA_OPT=-Dnexial.enableEmail=off` 
   3.  The third line is to invoke Nexial to run the test as scripted in the file specified via 
       `-script` argument.
6. If all's well, you should see something like the following on your console:<br/>
   ![nexial_output](image/InstallingNexial_12.png) 
   
   For now, don't worry too much about these logs.  The most critical portion is near the end 
   where Nexial reports a summary of the test.  The above screenshot showed that 1 iteration ran, 
   with 1 step completed within 842ms.
7. If you have `openResult` set as `on` or `true`, then the output file should have been opened as well.  
   You see the first line (Row 4) looking something like this:<br/>
   ![output](image/InstallingNexial_13.png)
   
   1. Cell E5 prints `Hello World`.  At this time it might not appear obvious since we just print 
      out a static string of text. Our next example will show more interesting tests.
   2. `L1:O2` is the execution summary.  It shows where the test was run, who and when it was run 
      and top-level execution numbers.  Note that the time duration is slightly different than 
      what's reported on the console.  The additional time as specified in the console is the 
      additional time to clean up the test run.
   3. Column M shows the elapsed time in millisecond to complete the corresponding test step
   4. Column N shows `PASS`, `FAIL` or `SKIP` as the result of the corresponding test step. 

**Congratulations**! You have just successfully run your first automation script via Nexial. Let's 
dig deeper...


### a little bit more...
1. let's create a few more lines for this test case:
   _MORE TO COME..._


### Diving Deeper
1. install .NET Framework 4.6.2 for desktop automation

