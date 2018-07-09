---
layout: default
title: Avoid OutOfMemory error - Trim Test Artifacts
parent: Tips and Tricks
tags: command tipsandtricks security
comments: true
---


### Introduction
Keeping your test artifacts (plan, script, data files) in check and small goes a long way to avoid the dreaded 
OutOfMemory error.  These test artifacts - really just Excel spreadsheets - can contain all sorts of information that 
are not useful in the context of Nexial automation.  However Nexial must read in the entire spreadsheet in order to 
parse out information related to automation.  If we can reduce the unnecessary information out of these spreadsheets,
then the more likelihood for Nexial automation to run smoothly and fast.

The page will explain how to avoid memory issue by keeping the script size and files under control. Essentially during 
the course of script development, unnecessary information (mostly formatting related) might be added to the test 
scripts and data files.  In order to read the automation-related information, Nexial needs to load each referenced 
Excel file, in its entirety, into memory first. The memory requirement is proportional to the size of the target 
Excel file, and can lead to Garbage Collection(GC) limit issue. 

The quick fix is to reduce the size of these Excel files by removing the formatting and irrelevant content from it.

The more simplest way is to delete the rows/columns that has no relevant information from these Excel files 
(plan, scripts and data files).

**Note**:  If your test artifacts are under 100KB, this is usually not needed.  If you are facing OutOfMemory issue
with small Excel files, then it's likely a different issue.  Please open an 
<a href="https://github.com/nexiality/nexial-core/issues" class="external-link" target="_nexial_link">issue</a> for 
further support.


### Steps to Clean up Excel file
Below are the steps to reduce (at times drastically) the Excel file size.  This involves selecting a whole set of
unused spreadsheets and "cleaning" them.  For more information on how to select a huge series of rows or columns, check
out <a href="https://exceljet.net/keyboard-shortcuts/extend-the-selection-to-the-last-cell-right" class="external-link" target="_nexial_link">this page</a>.

#### Test Plan
1. Navigate to the location of the plan files (i.e. `artifact/plan`)
2. Open your desired test plan Excel file
3. Go to Column N, highlight that column by clicking on the column header
4. Select ALL the columns to the right of Column P by using `Shift-Control-Right` so that Column N to Column XFD are 
   all selected.
5. Right-click on any of the selected column header and select `Delete`
6. Navigate Back to Cell `A1`.
7. Find the empty row after the last script. 
8. Highlight the entire row, and then select ALL the rows before it by using `Shift-Control-Down`
9. Right-click on any of the selected row header and select `Delete`
10. Save the file.  You should see the file size now reduced.

#### Test Script
1. Navigate to the location of the script files (i.e. `artifact/script`)
2. Open your desired test script Excel file
3. Go to Column P, highlight that column by clicking on the column header
4. Select ALL the columns to the right of Column P by using `Shift-Control-Right` so that Column N to Column XFD are 
   all selected.
5. Right-click on any of the selected column header and select `Delete`
6. Navigate Back to Cell `A1`.
7. Find the empty row after the last command. 
8. Highlight the entire row, and then select ALL the rows before it by using `Shift-Control-Down`
9. Right-click on any of the selected row header and select `Delete`
10. Save the file.  You should see the file size now reduced.

#### Data File
1. Navigate to the location of the data files (i.e. `artifact/data`)
2. Open your desired Excel data file
3. Follow the same technique to highlight the rows and columns that are not needed and `Delete` them.

