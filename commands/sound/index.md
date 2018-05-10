---
layout: default
title: sound
tags: command sound mp3 wav beep alert 
comments: true
---


### Description
The sound commands is an interesting set of commands. They are not designed for automation, as one would traditionally 
considered as automation. Instead, they are designed to enhence one's automation execution by providing audio 
notifications.

Consider the following: Supposed you have an automation scripts to test out a long list of functionality. The entire 
script takes hours to complete. While you could run the script in the background (while you work on other tasks), it 
might be advantageous to know when the script has finished or failed. Perhaps you are running a suite of tests, of 
which each would take more than an hour to complete. As such it could be useful to know when a new script has started
to execute so that you can track the progress of your test suite.

All these scenarios, and many more, are the impetus for designing such sound commands, which drive at using audio as 
notification of the execution progress or critical events. By using different sounds 
([Predefined Audio Library](play(audio)#example)) one can create distinguishing audio cues for different events such
as "start", "failed" or "complete". It is noteworthy to state that audio notification has another advantage against the
more common, GUI-based notification, namely **non-invasiveness**. 
<a href="https://msdn.microsoft.com/en-us/library/windows/desktop/dn742472(v=vs.85).aspx" class="external-link" target="nexial_external">UI notifications</a>, 
such as pop up windows, alert dialogs, status bar bubbles, toast messages, etc. are designed to interrupt one's focus.
At times this can be rather jarring and counter-productive, esp. if one's reading something on the computer screen. 
Using audio notification, there isn't any shift of visual focus (i.e. nothing's blocking one's view) and yet it provides
similar level of usefulness even when one's turned away from the computer.


### Zero-Touch Environment
When executing under a zero-touch environment - CI environment like Jenkins - the sound commands will automatically
skipped over since it does not make sense to play audio notifications remotely. Besides, in a likelihood, the CI
host is likely configured any sound cards or audio out (such as AWS EC2 or Azure VM). The execution result should
show a "SKIPPED" result for any sound commands executed in a zero-touch environment.


### Available Commands
- [`play(audio)`](play(audio))
- [`laser()`]()