## Download Nexial

Nexial development team will continue to update the Nexial code base so that enhancements and fixes 
can be timely provided. If you haven't installed Nexial yet, be sure to follow the instructions 
here to [get Nexial set up in your local environment](InstallingNexial).

If you have already installed Nexial, here are the steps to updating Nexial on your local 
environment.

1.  Open your browser to [Nexial Distro](https://s3-us-west-2.amazonaws.com/ep.qm/sentry-distribution/index.html)
1.  Find the appropriate build or release to download. Nexial users are encouraged to use the 
				latest version when possible.
1.  Stop Nexial, if it's still running. Also ensure no webdriver or winium driver instance 
				are running.
1.  Override your current Nexial installation (should be under `C:\projects\nexial-core\`) with 
				the newly downloaded ZIP file. Be sure to check that the following directories are directly 
				under `C:\projects\nexial-core\` (a.k.a. `NEXIAL_HOME`):  
    ![](image/UpdateNexial_01.png)
1.  Done! Now you have the latest version of Nexial.

## Update Command Listing

Before you can start using the latest version of Nexial, it is important to ensure that your 
scripts have the latest commands as well. Failure to follow the steps below would very likely 
hinder the new commands to be shown in your script files.

1.  Open console and point to `bin\` directory under the Nexial installation directory.  
    ![](image/UpdateNexial_02.png)
2.  run the script updater batch file, `nexial-script-update.cmd` with your project directory 
				as the parameter. For example:  
    **`nexial-script-update.cmd -t C:\projects\MyProject`**
3.  This batch file will scan through the specified project directory and update all appropriate 
				Excel files with the latest command.
4.  Now you are ready to use the latest version of Nexial.

## Stay in the Know
Want to stay in the know of the latest updates to Nexial? Sign up to the Slack channel dedicated 
for Nexial users!

Here's how:

1.  Open your browser to [https://ep-tech.slack.com](https://ep-tech.slack.com/)
2.  If you already have an account, proceed to sign in. Otherwise click on 
				[create an account](https://ep-tech.slack.com/signup/) to create a free account.
3.  Once you've logged in, click on the "CHANNELS" link on the top-left corner of the Slack page:  
    ![](image/UpdateNexial_03.png)
4.  When you are presented with the channel search page, type in `nexial-users` to find the 
				channel dedicated for Nexial users:  
    ![](image/UpdateNexial_04.png)
5.  Click on the channel to join.

Alternatively (and encouraged), you can download [the desktop or mobile version of Slack](https://slack.com/downloads). 
The native clients provide better OS integration. You can also invite others to a channel by 
clicking on the channel name and select "Invite team members to join...":

![](image/UpdateNexial_05.png)

**Any Nexial related questions, comments, suggestions, criticism, discussions, etc. are 
welcome in the [#sentry-user channel](https://ep-tech.slack.com/archives/C311SG21W). All good 
common sense and [netiquettes](http://www.dictionary.com/browse/netiquette) enforced.**

