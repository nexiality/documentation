
Gmail by default enforces "secured third-party client app" such that programmatically access (such as Nexial does) is 
denied.  You might see a similar error as below when running a `mail` command against Gmail:<br/>

![](/documentation/image/gmail_02.png)

This is an indication that the email account in questionis restricted to "secured third-party client app" only. For 
further understanding about this, please visit 
<a href="https://support.google.com/mail/answer/7126229?visit_id=1-636610148744612821-503885497&rd=2#cantsignin" class="external-link" target="_nexial_link">https://support.google.com/mail/answer/7126229?visit_id=1-636610148744612821-503885497&rd=2#cantsignin</a>
and <a href="https://support.google.com/accounts/answer/6010255" class="external-link" target="_nexial_link">https://support.google.com/accounts/answer/6010255</a>.

This issue can be addressed via 
<a href="https://myaccount.google.com/lesssecureapps" class="external-link" target="_nexial_link">https://myaccount.google.com/lesssecureapps</a>. 
After successfully signing in to your Gmail account, proceed to enable "les secure apps" option:

![](/documentation/image/gmail_03.png)

After this, you should be able to send email via your Gmail account.  For security reason, it is recommended **NOT**
to use your personal account for automation.  Instead, set up another Gmail account for the purpose of automating
the sending of emails via Nexial.
