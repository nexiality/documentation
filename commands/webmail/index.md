---
layout: default
title: webmail
tags: command mail mailinator webmail
comments: true
---

The "webmail" command type represents the automation command for reading and deleting emails from webmail providers 
(online-only email services). At this time, the following webmail providers are supported:
- [mailinator](https://www.mailinator.com) (DEFAULT)
- [temporary-mail](https://www.temporary-mail.net)

Future enhancement could include supporting multiple other webmail providers. In case you want us to support any other 
webmail providers, please let us know via the [GitHub Feature request form](https://github.com/nexiality/nexial-core/issues/new?template=feature_request.md). 
It'll help us prioritize future Nexial features.

In order to read emails, appropriate **mail-provider** and the **inbox** details need to be provided first. The section 
below describes how to specify the configuration settings.


### Webmail Configuration Settings
Nexial supports profile-based configuration for webmail automation. One can configure multiple profiles for different
webmail targets. Here are the various settings available to configure the webmail for your automation (assuming profile 
is `MyWebMail`):

| data variable        | description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `MyWebMail.provider` | **[optional]** the mail-provider used. Possible values are `mailinator` (default) or `temporary-mail`.|
| `MyWebMail.inbox`    | **[REQUIRED]** the name of the inbox (without domain name). |
| `MyWebMail.domain`   | [optional] For **`temporary-mail`** only. Specifies the domain used. |

<br/>
<br/>

#### Mailinator
Here are the settings for targeting [mailinator](https://www.mailinator.com/). Note that the `.provider` is optional.
<br/>
![](image/webmail_01.png)
<br/>

The above settings will read emails from the Mailinator inbox with the specified inbox name:
![](image/webmail_02.png)
<br/>
<br/>

Since Mailinator supports SMS messages, one can configure a burner phone number for the `.inbox` data variable to 
receive SMS messages.


#### Temporary-mail
Here are the settings for targeting [temporary-mail](https://www.temporary-mail.net).
<br/>
![](image/webmail_03.png)
<br/>

The above settings will read emails from the temporary-mail.net **inbox** with the specified inbox name and the
**domain** name `temporary-mail.net` as shown below:
![](image/webmail_04.png)
<br/>
<br/>

### Listing the Links and Retrieving a Link by Label Name
We can extract the various links in the email using the `links` and the `link` attributes. The `links` contain all the
links in the html file, while the `link` attribute is used to extract the url value corresponding to a specific label.

For example, in the below screenshot you can observe there are five web links.
- There are two links with labels `Documentation` and`Nexiality`.
- source code url(with out a label).
- The git and slack images which link to the Nexial source url and the Nexial slack url respectively.

![](image/webmail_05.png)

- The `${email1}.links` lists all the links(urls) in the html page.
- The `[LIST(${email1}.links) => item(0)]`and `${email1}.links[2]` represents the first and third links in the list of 
links in the html page. The urls(links) related to the images(the git and the slack images in the above diagram)
can be retrieved as `${email1}.links[3]` and `${email1}.links[4]`.
- The `${email1}.link[Documentation]` and `${email1}.link[Nexiality]` represents the links corresponding to the labels
`Documentation` and `Nexiality`.

#### Script to extract Links
![](image/webmail_06.png)

#### Output of the script
![](image/webmail_07.png)
<br/>


### Available Commands
- [webmail &raquo; `search(var,profile,searchCriteria,duration)`](../webmail/search(var,profile,searchCriteria,duration))
- [webmail &raquo; `read(var,profile,id)`](../webmail/read(var,profile,id))
- [webmail &raquo; `delete(profile,id)`](../webmail/delete(profile,id))
- [webmail &raquo; `attachment(profile,id,attachment,saveTo)`](../webmail/attachment(profile,id,attachment,saveTo))
- [webmail &raquo; `attachments(profile,id,saveDir)`](../webmail/attachments(profile,id,saveDir))
