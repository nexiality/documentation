## Nexial in Action
To see Nexial in action, watch this short demo showcasing how Nexial 
1. performs a few Google searches ([browser automation](/commands/web/)), 
2. uses one of the search results to invoke a few REST API calls ([API automation](/commands/ws/)),
3. bulk generates a series of SQL INSERT statements (text manipulation via [Nexial expression](/expressions/)),
4. stores API responses and Google search stats into database ([database automation](/commands/rdbms), with sqlite),
5. finally, performs a few simple data analytical queries and reports ([database automation](/commands/rdbms), [Nexial expression](/expressions)). 

[Nexial in Action](https://www.youtube.com/watch?v=b372XikN1YU&cc_lang_pref=en&cc_load_policy=1)
<iframe width="820" height="555" src="https://www.youtube-nocookie.com/embed/b372XikN1YU?cc_lang_pref=en&cc_load_policy=1" 
  frameborder="0" style="margin-bottom:20px" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Wanna try? Have at it!
<ol>
<li>
  Follow the <a href="https://nexiality.github.io/documentation/userguide/InstallingNexial">installation guide</a> 
  (mostly one-time setup)
</li>
<li>
  Download the <a href="nexial-in-action.zip">"nexial-in-action"</a> project and unzip to local directory
</li>
<li>Run it
<div class="tabs">
    <ul class="tab-links tabs-collapsed">
        <li class="active"><a href="#tabwin">Windows</a></li>
        <li><a href="#tabmac">Mac/Linux</a></li>
    </ul>
    <div class="tab-content">
        <div id="tabwin" class="tab active">
        Set up an environment variable - <code>NEXIAL_HOME</code> - and point it to the location where Nexial is 
        installed. For example,
<pre>set NEXIAL_HOME=C:\projects\nexial-core</pre>
        Also, set up another environment variable - <code>PROJECT_HOME</code> - and set it to the location where 
        the <a href="nexial-in-action.zip">"nexial-in-action"</a> project is unzipped. For example,
<pre>set PROJECT_HOME=C:\projects\nexial-in-action</pre>
        To execute:
<pre>
cd %NEXIAL_HOME%\bin
nexial.cmd -plan %PROJECT_HOME%\artifact\plan\demo1-plan.xlsx
</pre>
        </div>
        <div id="tabmac" class="tab" style= "display:none;">
        Set up an environment variable - <code>NEXIAL_HOME</code> - and point it to the location where Nexial is 
        installed. For example,
<pre>export NEXIAL_HOME=~/projects/nexial-core</pre>
        Also, set up another environment variable - <code>PROJECT_HOME</code> - and set it to the location where 
        the <a href="nexial-in-action.zip">"nexial-in-action"</a> project is unzipped. For example,
<pre>export PROJECT_HOME=~/projects/nexial-in-action</pre>
        To execute:
<pre>
cd $NEXIAL_HOME/bin
./nexial.sh -plan $PROJECT_HOME/artifact/plan/demo1-plan.xlsx
</pre>
        </div>
    </div>
</div>
</li>
</ol>
<br/>
