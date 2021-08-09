---
layout: default
title: oauthProfile(var,profile)
parent: ws
tags: command ws web_service api oauth
comments: true
---


### Description
This command is another version of [oauth(var,url,auth)](oauth(var,url,auth)) but with support of profile and, some 
defaults based on the major OAuth providers such as Google, Microsoft, Okta, Gitlab and Twitter. It can also support 
other unknown OAuth provider in most cases. 


### Parameters
- **var** - the name of the variable to which the OAuth response will be stored. Nexial user can in turn retrieve 
  specific values from this variable in the respective Nexial script.
- **profile** - the profile name with which OAuth inputs are defined in the data variables that share the same prefix

The OAuth providers are identified by the `<profile>.type` (case-sensitive). Please refer the screenshots of 
`profile` data variable for different OAuth providers.


### Microsoft
Below is an example how to use this command for `microsoft` as OAuth provider. 

![](image/microsoft_script.png)

The `profile` data variables will be something like this

![](image/microsoft_data.png)

#### Defaults
- The default url for `microsoft` is `https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token` and so it 
requires `<your_profile>.tenant_id` in the profile data variable.
- The default `grant_type` is `password`

If all inputs are valid, the successful OAuth response will look something like this 

![](image/microsift_output.png)

Refer this link for more information on [Microsoft OAuth](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth-ropc)


### Microsoft (Using `refresh_token`)
There may be some use-cases where one might not be able to use the above option for Microsoft as OAuth provider. So 
this command has another option built-in to support Microsoft OAuth with `refresh_token`. In `refresh_token` based 
approach, you don't have to provide the credentials of your Microsoft account instead it just needs a valid 
`refresh token`.

To generate the `refresh token`, follow the below steps:

1. Make a cURL request as shown here
    ```
   curl --request POST \
   --data "client_id=<YOUR_CLIENT_ID>&scope=user.read offline_access openid profile email" \
   https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode
    ```
   You will get a response in JSON format like below:
    ```
   {
    "user_code": "ABCD1234X",
    "device_code": "AABBCCDDEE--sadjkTHuiykjnuityytjkliolibvghuLYoio---z9aVQ7V5IvU7O_ksjjuiYtionIOUhiudzkl-5TdsyS4ujAA",
    "verification_uri": "https://microsoft.com/devicelogin",
    "expires_in": 900,
    "interval": 5,
    "message": "To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code ABCD1234X to authenticate."
   }
    ```

2. Open the URL [`https://microsoft.com/devicelogin`](https://microsoft.com/devicelogin) in your browser and type/paste 
   the `user_code` received in above cURL response. Then click on Next & follow the instructions shown on the browser 
   until you see the below screen
   ![](image/microsoft_device_login_confirmation.png)
   
3. You need to copy the `device_code` value, we're going to need it in next (and the last) cURL request.
    ```
   curl --request POST \
   --data "grant_type=urn:ietf:params:oauth:grant-type:device_code \
         &code=<DEVICE_CODE_THAT_YOU_COPIED_FROM_ABOVE_RESPONSE> \
         &client_id=<YOUR_CLIENT_ID>" \
   https://login.microsoftonline.com/organizations/oauth2/v2.0/token
    ```
    The response will contain a `refresh_token` like below:
    ```
    {
        "token_type": "Bearer",
        "scope": "email openid profile User.Read",
        "expires_in": 3599,
        "ext_expires_in": 3599,
        "access_token": <ACCESS_TOKEN_IN_JWT_FORMAT>,
        "refresh_token": "0.AwFTXpJw659XEeyic2zSy3hj9LOc2jc51NpgG3dOj18shWAJE.AgABAAAAAAD--...(huge_string)",
        "id_token": <ID_TOKEN_IN_JWT_FORMAT>
    }
    ```
    Copy `refresh_token` from this response and pass it in the profile data variable `<profile>.refresh_token` in the 
    data sheet. To know more about Microsoft OAuth, access token & refresh tokens, see 
   [this information](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols)

Below is an example script that uses this option.

![](image/microsoft_refresh_script.png)

The `profile` data variables will be something like this

![](image/microsoft_refresh_data.png)

#### Defaults
- The default url for `microsoft` is `https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token` and so it
  requires `<your_profile>.tenant_id` in the profile data variable.
- The default `grant_type` is `refresh_token`

If all inputs are valid, the successful OAuth response will look something like this

![](image/microsoft_refresh_output.png)

Refer this link for more information on [Microsoft OAuth](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth-ropc)


### Google

Google OAuth implementation is a bit restricted as compared to other providers. Hence, there are some additional steps 
you need to perform before you could use the oauth for `google`.

![](image/google_script.png)

Since Google OAuth API requires using `grant_type` as `refresh_token`, you need to generate one `refresh_token` first and
then set it in `profile` data variables along with `client_id` & `client_secret` as shown in below image.

To generate the `refresh_token`, you may follow these steps:

1. Go to `https://accounts.google.com/o/oauth2/v2/auth?scope=<scope>&access_type=offline&response_type=code&client_id=<your_client_id>&redirect_uri=http://localhost`
2. Authorize the access from your Google account.
3. If you have mentioned the `redirect_uri` as `localhot` in above URL, you will be redirected to that URI in your 
     browser with `code` parameter as query param in the redirected URI of the browser window.
4. Copy the value of `code` and use it to make below POST call using any of your favourite tools like Postman, Curl, Insomnia etc.
     ```
     curl --request POST \
          --data "code=<CODE_YOU_COPIED_FROM_REDIRECTED_WINDOW_URL> \
                 &client_id=<YOUR_CLIENT_ID> \
                 &client_secret=<YOUR_CLIENT_SECRET> \
                 &grant_type=authorization_code" \
          https://accounts.google.com/o/oauth2/token
     ```
5. The response of the above HTTP call will be a json body containing `refresh_token`.
6. Copy that `refresh_token` value and set it into `profile` data variable as shown in below image. That's it.     

The `profile` data variables will be something like this
![](image/google_data.png)


#### Defaults
- The default url for `google` is `https://accounts.google.com/o/oauth2/token` 
- The default `grant_type` is `refresh_token`

If all inputs are valid, the successful OAuth response will look something like this
![](image/google_output.png)


### Okta
Below is an example how to use this command for `okta` as OAuth provider.

![](image/okta_script.png)

The `profile` data variables will be something like this

![](image/okta_data.png)

#### Defaults
- The default url for `okta` is `https://{tenant_id}.okta.com/oauth2/default/v1/token` and so it requires 
  `<your_profile>.tenant_id` in the profile data variable.
- The default `grant_type` is `password`

If all inputs are valid, the successful OAuth response will look something like this
![](image/okta_output.png)

Refer this link for more information on [Okta OAuth](https://developer.okta.com/docs/guides/implement-password/use-flow/)


### Gitlab
Below is an example how to use this command for `gitlab` as OAuth provider.

![](image/gitlab_script.png)

The `profile` data variables will be something like this

![](image/gitlab_data.png)


#### Defaults
- The default url for `gitlab` is `https://gitlab.com/oauth/token`
- The default `grant_type` is `password`

If all inputs are valid, the successful OAuth response will look something like this
![](image/gitlab_output.png)

Refer this link for more information on [Gitlab OAuth](https://docs.gitlab.com/ee/api/oauth2.html#resource-owner-password-credentials-flow)


### Twitter
Below is an example how to use this command for `twitter` as OAuth provider.

![](image/twitter_script.png)

The `profile` data variables will be something like this

![](image/twitter_data.png)

#### Defaults
- The default url for `twitter` is `https://api.twitter.com/oauth2/token`
- The default `grant_type` is `client_credentials`

If all inputs are valid, the successful OAuth response will look something like this
![](image/twitter_output.png)

Refer this link for more information on [Twitter OAuth](https://developer.twitter.com/en/docs/authentication/oauth-2-0/bearer-tokens)


### Custom
Below is an example how to use this command for any other OAuth provider.

![](image/custom_script.png)

The `profile` data variables will be something like this

![](image/custom_data.png)

Here, `<your_profile>.type` MUST BE `custom` (case-sensitive).

The `custom` type does not assume any defaults. All the data provided in the `profile` data variable will be passed to 
the respective OAuth provider on `<your_profile>.url` (using http POST method).

If all inputs are valid, the successful OAuth response will look something like this
![](image/custom_output.png)


### See Also
- [`oauth(var,url,auth)`](oauth(var,url,auth))