---
layout: default
title: Time Tracking
parent: Flow Controls
tags: Time Tracking
comments: true
---

### Description
In dealing with automation, often one finds the necessity to have performance testing or analysis charts for tests. 
The ability to articulate such idea gives our automation more flexibility. This is main purpose of **Time Tracking.** 
This will help Nexial user to analyse the time results for test steps and also for different execution levels.

Nexial will generate new log file **`nexial-timetrack.log`** in log folder of output directory under target project.
It will have logs for the tracked steps and tracked execution levels.


Remark is nothing but status of tracking. Following are remarks for some scenarios
1. If execution is ended due to EndIf condition without ending tracking, remark will be "Execution interrupted".
2. If execution is failed in the middle without ending tracking, remark will be "Execution failed".
3. If execution is completed without ending tracking, remark will be "Execution ended."
4. If tracking ended with `TimeTrackEnd`, remark will be empty.

Time tracking should be specified in flow controls column so as they are treated just like flow control. 
The syntax of Time Tracking is same as that of flow control. The general syntax looks like:<br>
**`[TimeTrackStart(label)|TimeTrackEnd()]`**

### TimeTrackStart(label)
`TimeTrackStart` will be start point for time tracking for steps. Label is nothing but description for step tracking. 
Label is OPTIONAL. Default label is scriptName#scenarioName. During execution, Nexial will evaluate this before test step execution.
So start time will be the start time of that step. 

### TimeTrackEnd()
`TimeTrackEnd` will be end point for time tracking. During execution, Nexial will evaluate this after test step execution.
So end time will be the end time of that step.<br>
Lets have a look how to add `TimeTrackStart` and `TimeTrackEnd` in scripts.

### Example
Script:-<br>
![](image/timeTracking_01.png)

Log File:-<br>
![](image/timeTracking_02.png)

In above image, you can see that first two lines are without remark while third line is with remark as tracking is not
ended in the script. 


### Notes:-
1. Nexial does not support nested tracking till this point. For example, you have `TimeTrackStart` for the first step,
again in third steps you have `TimeTrackStart`. You have not closed first `TimeTrackStart` with `TimeTrackEnd`. 
This is nested tracking. Currently Nexial does not support this feature but in future we will think upon this.

2. If you have `TimeTrackStart` in successive steps without having `TimeTrackEnd`, Nexial will take first one into 
consideration for tracking purpose. Two successive `TimeTrackEnd` will do the same.

3. If you have `TimeTrackStart` in script and forgot to end it before iteration completes, Nexial will automatically end
tracking at iteration level.

Nexial now supports new event handling to track time for different execution levels. For this, go through these system variables-

1. [`nexial.trackExecution`](../systemvars/index#nexial.trackExecution) - This is event for tracking logs with start, end and elapsed time of the execution. Default value is `false`.
2. [`nexial.trackScript`](../systemvars/index#nexial.trackScript) - This is event for tracking logs with start, end and elapsed time of each script. Default value is `false`.
3. [`nexial.trackIteration`](../systemvars/index#nexial.trackIteration) - This is event for tracking logs with start, end and elapsed time of each iteration. Default value is `false`.
4. [`nexial.trackScenario`](../systemvars/index#nexial.trackScenario) - This is event for tracking logs with start, end and elapsed time of each scenario. Default value is `false`.

To call above events, just set above system variables as `true`. Lets have a look:<br>
![](image/timeTracking_03.png)

### Log file format- 
Nexial introduced new data variable providing feature for customizing format of time tracking logs.
1. [`nexial.timetrack.format`](../systemvars/index#nexial.timetrack.format) - With this variable, user can specify variety 
of log formats. The default format for this log file is:-<br>
**`START_DATE|START_TIME|END_DATE|END_TIME|ELAPSED_TIME|THREAD_NAME|LABEL|REMARK`**.<br>
User can use above keywords to specify log format. At the back end, Nexial will simply replace above keywords with respective values.<br>
Lets have a look at different formats:-<br>
![](image/timeTracking_04.png)
