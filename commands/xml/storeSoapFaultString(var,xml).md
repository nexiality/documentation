---
layout: default
title: storeSoapFaultString(var,xml)
parent: xml
tags: command xml
comments: true
---


### Description
This command extract the error message (aka _fault string_) from a SOAP fault XML and store as as `var`. Here's an 
example of a SOAP fault XML:

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

This command extracts the text in the `<faultstring>` node and store it as `var`. If no such XML node was found, then 
the specified `var` will be removed. If `<faultstring>` is found, then any existing data in `var` will be overwritten.
The assumption here is that `xml` is a valid SOAP-compliant "fault" XML. If the specified `xml` is not a valid SOAP 
fault XML, this command will issue a **FAIL** result against the corresponding step.  

Nexial supports both SOAP 1.1 and SOAP 1.2 message format.


### Parameters
- **var** - the variable to store the extract fault string
- **xml** - the XML content or file


### Example


### See Also
- [`assertSoap(wsdl,xml)`](assertSoap(wsdl,xml))
- [`assertSoapFaultCode(expected,xml)`](assertSoapFaultCode(expected,xml))
- [`assertSoapFaultString(expected,xml)`](assertSoapFaultString(expected,xml))
- [`storeSoapFaultCode(var,xml)`](storeSoapFaultCode(var,xml))
