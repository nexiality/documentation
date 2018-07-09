---
layout: default
title: sound
tags: command sound mp3 wav beep alert speak talk
comments: true
---


### Description
The sound commands are an interesting set of commands. They are not designed for automation as one would traditionally 
considered as automation. Instead, they are designed to enhance one's automation execution by providing audio 
notifications.

Consider the following: Supposed you have an automation script to test out a long list of functionality. The entire 
script takes hours to complete. Instead of checking the status of the execution every now and again, a more efficient
way would to have the automation tool inform you of critical statuses - the classical pull versus push model. Some
examples of such notification would be:
- _Notify me when an error occurred_
- _Notify me when my script is started_
- _Notify me when my script is complete_
- _Notify me when `${total_order}` is more than 500_

All these examples, and many more, are the impetus for designing such sound commands, which drive at using audio as 
notification of the execution progress or critical events. By using different sounds 
([Predefined Audio Library](play(audio)#example)) one can create distinguishing audio cues for different events such
as "start", "failed" or "complete". Another advantage of using audio notification against the more common, 
GUI-based notification is its less **invasive** nature. 
<a href="https://msdn.microsoft.com/en-us/library/windows/desktop/dn742472(v=vs.85).aspx" class="external-link" target="_nexial_link">UI notifications</a>, 
such as pop up windows, alert dialogs, status bar bubbles, toast messages, etc. are designed to interrupt one's focus.
At times this can be rather jarring and counter-productive, esp. if one's reading something on the computer screen. 
Using audio notification, there isn't any shift of vision focus (i.e. nothing's blocking one's view) and yet it provides
similar level of usefulness even when one's turned away from the computer.


### Zero-Touch Environment
When executing under a zero-touch environment - CI environment like Jenkins - the sound commands will automatically
skipped over since it does not make sense to play audio notifications remotely. Besides, in all likelihood, the CI
host is likely configured any sound cards or audio out (such as AWS EC2 or Azure VM). The execution result should
show a "SKIPPED" result for any sound commands executed in a zero-touch environment.


### Available Commands
- [sound &raquo; `laser(repeats)`](laser(repeats))
- [sound &raquo; `play(audio)`](play(audio))
- [sound &raquo; `speak(text)`](speak(text))

