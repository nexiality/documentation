---
layout: default
title: assertSoapFaultString(expected,xml)
parent: xml
tags: command xml
comments: true
---


### Description
This command is useful to assert the expected error message as part of automating SOAP API calls. Here's an example of 
a SOAP fault XML:

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
       <soap:Fault>
           <faultcode>soap:Server</faultcode>
           <faultstring>Conversion to SOAP failed</faultstring>
           <detail>
               <CICSFault xmlns:soap="http://www.ibm.com/software/htp/cics/WSFault">
               DFHPI1008 25/01/2010 14:16:50 IYCWZCFU 00340 XML
               generation failed because of incorrect input 
               (CONTAINER_NOT_FOUND container name) for WEBSERVICE servicename. 
               </CICSFault> 
           </detail> 
       </soap:Fault>
   </soap:Body>  
</soap:Envelope>
```

This command extracts the text in the `<faultstring>` node and compare it against `expected`. The assumption here is 
that `xml` is a valid SOAP-compliant "fault" XML. If the specified `xml` is not a valid SOAP fault XML, this 
command will issue a **FAIL** result against the corresponding step.  

Note that with `(null)` or `(empty)` as `expected` and an `xml` **WITHOUT** "fault string" will result in **PASS** - 
meaning, no fault string was expected and no fault string was found.

Nexial supports both SOAP 1.1 and SOAP 1.2 message format.


### Parameters
- **expected** - the expected fault string
- **xml** - the XML content or file


### Example


### See Also
- [`assertSoap(wsdl,xml)`](assertSoap(wsdl,xml))
- [`assertSoapFaultCode(expected,xml)`](assertSoapFaultCode(expected,xml))
- [`storeSoapFaultCode(var,xml)`](storeSoapFaultCode(var,xml))
- [`storeSoapFaultString(var,xml)`](storeSoapFaultString(var,xml))
