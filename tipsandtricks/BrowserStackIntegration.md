---
layout: default
title: BrowserStack Integration
parent: Tips and Tricks
tags: browserstack browser web
comments: true
---


### Description
<a href="https://www.browserstack.com/" class="external-link" target="_nexial_external">BrowserStack</a> is a cloud-based cross-browser testing tool that enables website 
testing across various browsers on different operating systems and mobile devices, without requiring users to install 
virtual machines, devices or emulators.  It is particularly useful when testing of older OS or browser is required.  
In addition, being a cloud-based solution, executing tests on BrowserStack would incur much less computing resources 
within the enterprise and enables for on-demand resource allocation.

Nexial can integrate with BrowserStack by pushing the test steps and commands to BrowserStack. The output will still 
be recorded in the same format, just like local browser testing.  The steps to integrate with BrowserStack is 
straightforward:

1. Sign up for the appropriate BrowserStack account - be sure to select 
   <a href="https://www.browserstack.com/accounts/subscriptions" class="external-link" target="_nexial_external">one of the Automate plans</a> 
   (ya, it's not free  ![(sad)](../image/sad.png)).

2. Note the username and access key in the <a href="https://www.browserstack.com/accounts/settings" class="external-link" target="_nexial_external">Settings page</a>.

3. Define the following data value in your test data sheet:

   | data variable                     | value          |
   |-----------------------------------|----------------|
   | `nexial.browser`                  | `browserstack` |
   | `nexial.browserstack.username`    | the username specified in <a href="https://www.browserstack.com/accounts/settings" class="external-link" target="_nexial_external">Settings page</a> |
   | `nexial.browserstack.automatekey` | the access key specified in <a href="https://www.browserstack.com/accounts/settings" class="external-link" target="_nexial_external">Settings page</a> |
    
4. Note that the above data values are the minimum required for BrowserStack integration.  For more options, navigate 
   to the [System Variable](../systemvars/) page and search for `nexial.browserstack`

5. If you are testing a website/webpage that can only be accessed within local network or intranet, be sure to 
   download and run the 
   <a href="https://www.browserstack.com/local-testing#command-line" class="external-link" target="_nexial_external">BrowserStackLocal binary</a>.  
   BrowserStackLocal must be active prior to automation.  Also `nexial.browserstack.enablelocal` must be `true`.
   1. **Note**: *we are working on automatically starting BrowserStackLocal during Nexial automation.  Stay tuned!*

6. That's it!  Run your test as you normally would.  With BrowserStack, the automation is performed remotely.  Hence 
   you won't see any browser being launched locally.  However all the screenshots will be captured in the same way as 
   local browser testing.


### See Also
- <a href="https://www.browserstack.com/accounts/subscriptions" class="external-link" target="_nexial_external">BrowserStack sign up page</a>
- <a href="https://www.browserstack.com/list-of-browsers-and-platforms?product=automate" class="external-link" target="_nexial_external">BrowserStack OS and browser support</a>
- <a href="https://www.browserstack.com/local-testing#command-line" class="external-link" target="_nexial_external">BrowserStackLocal</a>
- <a href="https://www.browserstack.com/local-testing#modifiers" class="external-link" target="_nexial_external">BrowserStackLocal binary arguments</a>
- <a href="https://www.browserstack.com/local-testing#supported" class="external-link" target="_nexial_external">BrowserStackLocal limitation</a>
- [System Variables](../systemvars)
