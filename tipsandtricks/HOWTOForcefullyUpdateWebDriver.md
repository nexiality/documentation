---
layout: default
title: Forcefully update webdriver or omit the update
parent: Tips and Tricks
tags: command tipsandtricks web webdriver
comments: true
---

### Description
Currently, Nexial automatically installs the latest webdriver version for each web browser depending on requirement only.
Sometimes user have old webdriver version which is not supported by the web browser. User need to update web driver 
version forcefully if Nexial fails to update automatically.

Also, sometimes web browser is not updated to latest but webdriver is updated OR user wants to work on particular
webdriver version. Hence, there is no need to update corresponding webdriver. So, user need to stop/omit an automatic
update of webdriver explicitly.<br/>

For example, In case of Chrome browser, each major release seems to be matched by a corresponding chromedriver.
As such specific chromedriver needs to be used to match the target Chrome browser, one must upgrade or downgrade 
Chrome driver depending on corresponding chrome browser. 

Following are steps to follow while forcefully updating the webdriver and omitting any update as such.

### Forcefully update webdriver
<div class="tabs">
    <ul class="tab-links tabs-collapsed">
        <li class="active"><a href="#tab1">Windows</a></li>
        <li><a href="#tab2">Mac OSX</a></li>
    </ul>
    <div class="tab-content">
        <div id="tab1" class="tab active">
        <ol>
            <li>
                Open Windows Explorer and go to <code>C:\Users\%USER_ID%\.nexial</code> directory.
                %USER_ID% refers to the user id of your machine.<br/>
                Or simply, open Windows <code>Run Box</code> by pressing <b>&lt;WINDOWS + r&gt;</b> and 
                type <code>.nexial</code>. Then, click <b>&lt;OK&gt;</b> button as shown in image.<br/>
                <img src="image/HOWTOUpdateWebDriver_01.png" />
            </li>
			<li>
			    Then, if the directory contains the corresponding webdriver which is to be updated, then simply
                <code>delete</code> that directory. For example, if chrome driver needs to be updated, 
                <code>delete chrome folder</code>  directly.<br/>
                <img src="image/HOWTOUpdateWebDriver_02.png" />
			</li>
			<li>
			    Start your execution on Nexial so that it will automatically install latest webdriver 
			    for that particular browser.
			</li>
        </ol>
        </div>
        <div id="tab2" class="tab" style="display:none;">
        <ol>
            <li></li>
			<li></li>
			<li></li>
        </ol>
        </div>
    </div>
</div>

### Forcefully omit webdriver update
<div class="tabs">
    <ul class="tab-links tabs-collapsed">
        <li class="active"><a href="#tab1">Windows</a></li>
        <li><a href="#tab2">Mac OSX</a></li>
    </ul>
    <div class="tab-content">
        <div id="tab1" class="tab active">
        <ol>
            <li>
                Open Windows Explorer and go to <code>C:\Users\%USER_ID%\.nexial</code> directory.
                %USER_ID% refers to the user id of your machine.<br/>
                Or simply, open Windows <code>Run Box</code> by pressing <b>&lt;WINDOWS + r&gt;</b> and
                type <code>.nexial</code>. Then, click <b>&lt;OK&gt;</b> button as shown in image.<br/>
                <img src="image/HOWTOUpdateWebDriver_01.png" />
            </li>
			<li>
			    Go to corresponding web driver directory which webdriver need not to be updated.<br/>
			    For Example, if user wants to omit chromedriver update, open the <code>chrome</code> directory(if exists).
                <img src="image/HOWTOUpdateWebDriver_03.png" />
			</li>
			<li>
                Open the <code>.manifest</code> file. To open file, right click on file and select <code>open with</code>
                option. Then select <code>notepad</code> application.<br/> If <code>notepad</code> option is not 
                available, choose another application where you can edit the file.
                <img src="image/HOWTOUpdateWebDriver_04.png" />
            </li>
			<li>
			    Set <code>neverCheck</code> to <code>true</code> and save the file simply by pressing 
			    <b>&lt;Ctrl + s&gt;</b><br/>
                <img src="image/HOWTOUpdateWebDriver_05.png" />			    
			</li>
			<li>
			    Start your execution on Nexial.
			</li>
        </ol>
        </div>
        <div id="tab2" class="tab" style="display:none;">
        <ol>
            <li></li>
			<li></li>
			<li></li>
        </ol>
        </div>
    </div>
</div>
