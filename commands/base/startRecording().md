### Description

This command can be used for video recording the script execution. It is available in the base package. Usage is given in the example section. Precondition is to perform a one-time installation of the decoder to record the video. Follow the below installation steps:

**Installation Steps:**

**Step 1:**  Visit the below link:

[https://www.techsmith.com/codecs.html](https://www.techsmith.com/codecs.html)

**Step 2: ** Click on the below link (**TSSC Codec**), only that is pointed out in the below image. **TSCC.msi** package will be downloaded. Install the decoder after download is completed.

![](image/startRecording_01.png)

**Note**: No need to download and install the other codec (TSC2 Codec).

### Example

**Usage**: This command can be used at any step. Recording will be started from that point onward. It will be saved in **.avi format** under the **output **directory under **captures** folder. The recorded video can be opened with **Windows Media Player**.

Script:

![](image/startRecording_02.png)

This command is used in conjunction with **stopRecording()** command. Using this command will stop recording the script.

![](image/startRecording_03.png)

### See Also

*   [stopRecording()](https://confluence.ep.com/pages/viewpage.action?pageId=9985416)