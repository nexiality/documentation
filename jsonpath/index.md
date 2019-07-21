---
layout: default
title: Nexial Jsonpath
level: 1
tags: jsonpath
comments: true
redirect_from:
  - /jsonpath
---


JSON (/dʒeɪsən/ JAY-sən), short for JavaScript Object Notation, is an open-standard file format that uses 
human-readable text to transmit data objects consisting of name–value pairs and array data types. It is a very 
common data format used for asynchronous browser/server communication, and is seen by many as a replacement for XML 
for web-based and HTTP-based data exchange.  As with any data exchange, it is commonly necessary to manipulate the 
data (in this case, JSON) between exchanges.  Like XPath (currently 
<a href="https://www.w3.org/TR/xpath-30/" class="external-link" target="_nexial_external">in version 3.0</a>) is used 
to process XML documents, we need a descriptive and structure-aware specification to express the same for JSON.  Enters 
JSONPath.

As you might have guessed, there is already a fairly <a href="http://goessner.net/articles/JsonPath/" 
class="external-link" target="_nexial_external">well-defined standard out there for JSONPath</a>. Published since 2007, 
it has picked up some following and subsequent success stories along the way.  But by and large it has not gained the 
same momentum and ubiquity like XPath.  There are several reasons:
1. There are competing declarative query languages for JSON (jpath, jacl, JSONiq, etc.) and none of these, 
   including JSONPath, is currently under official consideration by W3C, the standards body for open Web technology.
2. JSON is native in JavaScript (**J** in `JSON`); requiring no additional language-level or API support to 
   manipulate or manage when using JavaScript. With the popularity of JavaScript and Java's ability (since Java 7) 
   to seamlessly inter-operate with JavaScript, there isn't a great need to see a new standards like JSONPath to 
   surface as yet-another-must-have.  There were simply too many easier routes to take than to wait for an JSON 
   query standards to emerge.
3. Lastly and possibly subjective, JSONPath in its current form may be viewed by some as complex (or cryptic) and 
   yet incomplete.  For certain, it lacks in `function` types when compared with what's available in XPath 2.0.

In the interest of simplicity, and readability, we have opted to create our own JSON query specification - 
unfortunately and so-predictable named as... **`jsonpath`**. ![sad](../image/sad.png) 
_(well, the name was picked a while back, and it did not seem like a problem back then...)_

The main goal behind Nexial's `jsonpath` was to provide a simple and low-entrance approach to express the most 
common types of JSON fragments.  Consider the following JSON document:

```json
{
    "name":"John Smith",
    "age":17,
    "address": {
        "street1":"123 Elm Street",
        "street2":null,
        "city":"Gotham",
        "state":"Solid",
        "zip":"54321"
    },
    "data1": [ "abc","efg","hij" ],
    "data2": [
        {
            "klm":"nop"
        },
        {
            "qrs":999.01
        }
    ]
}
```

For a JSON document like this, some of the common queries might be:
1. What's the value of `name`?
2. What's the age of `John Smith`? (or, what's the value of `age`?)
3. What's the value of `zip` under `address`?
4. How many items are in the `data1` array?
5. How many JSON objects under `data2` has a property named as `qrs`?

Queries like these are what Nexial's `jsonpath` is aimed to solve.

Certainly there are other types of query such as 
1. Find the longest item in `data1`.
2. What's the value of `age` + `data2`.`qrs`
3. List all the unique characters of the values in this document.
4. etc.

Not that these aren't important or useful queries, but Nexial's `jsonpath` does not support the more complex 
ones at this time (_we might in the future_).

Let's see how Nexial's `jsonpath` can be used to answer the first set of queries:

| Question                                                           | Nexial's `jsonpath` |
|--------------------------------------------------------------------|---------------------|
| What's the value of `name`?                                        | **`name`**          |
| What's the age of `John Smith`? (or, what's the value of `age`?)   | **`age`**           |
| What's the value of `zip` under `address`?                         | **`address.zip`**<br/>If `address` does not exists, `null` will be returned.|
| How many items are in the `data1` array?                           | Use [json &raquo; `storeCount(json,jsonpath,var)`](../commands/json/storeCount(json,jsonpath,var)) with `jsonpath` set as **`data1`**. <br/>To assess specific items in `data1`, use **`data1.[<index>]`**, where `<index>` is the zero-based position of the target item.|
| How many JSON objects under `data2` has a property named as `qrs`? | Use [json &raquo; `storeCount(json,jsonpath,var)`](../commands/json/storeCount(json,jsonpath,var)) where `jsonpath` set as **`data2[qrs]`** or **`data2.qrs`**.|

<br/>

### Rules and Filters
To generalize, Nexial's `jsonpath` follows these rules:
1. **Use dot notation (`.`) to express hierarchy**.  For example, **`a.b.c.d`** means:
   - Under a JSON node `"a"`, look for a node named `"b"`,
   - Under that node `"b"`, look for a node named `"c"`,
   - Under that node `"c"`, look for a node named `"d"`,
   - Finally return the JSON fragment of that node `"d"`. 
2. **Use `[ref]` to represent either a primitive item or a JSON fragment within a JSON array**.  `ref` can either be 
   a zero-based index or the name of a child item.
   - For example, **`a.b[1].c`** means:
     - Under a JSON node `"a"`, look for an JSON array named `"b"`,
     - Under that JSON array `"b"`, go to its second item (arrays are zero-based),
     - Within the second item of the JSON array `"b"`, look for a node named `"c"`,
     - Return the JSON fragment of `"c"`.
   - Another example, **`US[California].rivers[Napa].length`** means:
     - Under a JSON array named `"US"`, look for a node named `"California"`,
     - Under that node `"California"`, look for a JSON array named `"rivers"`,
     - Within the JSON array `"rivers"`, find a JSON object named as `"Napa"`,
     - Finally return the `"length"` property of that node named `"Napa"`.
3. **Use `[filter]` to narrow down the selection candidate**.  A easy way to think of this is like a `WHERE` 
   condition in a SQL statement.  In the case of `jsonpath`, the filter can be expressed as _match-by-equality_ and 
   _match-by-regex_. 
   - **match-by-equality**: `[node name=node value]`
     - `department[finance].employee[id=1234].name` reads:
       - In the `"department"` called `"finance"`, find the `"name"` of the `"employee"` whose `"id"` is `1234`.
       - This is useful when a given JSON property, such as `"id"` in this case is not unique to a specific JSON node 
         and its value can be useful to identify a specific JSON fragment. 
     - `state[name=California].city[name=Greenville].population` reads:
       - In the `"state"` node that contains a `"name"` property with value `"California"`, look for a child node 
         named `"city"` that contains a `"name"` property valued as `"Greenville"`.  Then when such `"city"` node is 
         found, return its `"population"`.
       - We can consider this technique as a way of narrowing down the amount of JSON fragment to process.  By 
         specifying the right amount of filter we can simplify the work of processing or parsing what might have being 
         a large JSON document.
     - **match-by-regex**: [**REGEX**:regular expression for node name=**REGEX**:regular expression for node value]
       - `employee[birthdate=REGEX:1985-\.+].full_name`
         - Search for all employees who are born in the year 1985 (assuming the date format of year-month-date), and 
           then return their full name.
         - Notice that the dot (`.`) should be preceded by a backslash (`\`) - _geek term: escape_ \- to avoid 
           confusion from being treatment as a hierarchy separator.
       - `product[made_from=REGEX:\.+(USA|America)].[name=REGEX:*\.*Guitar\.*]`
         - Find all American made guitars.
       - `work_history[REGEX:(zipcode|postal)=REGEX:900\.{2,}].[REGEX:(H|h)ours]` 
         - Find all the hours (denoted by `Hours` or `hours`) worked in the postal code (denoted by `zipcode` or 
           `postal`) that starts with `900`.
         - Yes, regex is support on both node name and node value.  But careful not to abuse it for create hard-to-read 
           `jsonpath`, as regex often do.
4. During the traversal of the specified `jsonpath`, if the intended fragment cannot be reached, Nexial will 
   return `null`.

As shown above, Nexial's `jsonpath` is comparatively simplistic – it really only has 2 notations: dot (`.`)  and 
angled brackets (`[ref]`).  But within the confines of these basic rules, we should be able to address the most 
common queries and still retain its readability. 

### JSONPath Function
As of [Nexial v1.9](../release/nexial-core-v1.9.changelog.md), we are introducing the concept of "function" to JSONPath.
The main idea is to provide the ability to apply one or more functional computation on the end representation of a 
`jsonpath`. Currently here are the supported functions:

1. `sum` - **ONLY FOR ARRAY/LIST OF NUMBERS**. Add up all the numbers. 
2. `count` - Count the number of items in a JSON array (or list). For non-array object, `1` is returned instead.
3. `first` - Find the first item of a JSON array. For non-array object, such object is returned instead.
4. `last` - Find the last item of a JSON array. For non-array object, such object is returned instead.
5. `average` - **ONLY FOR ARRAY/LIST OF NUMBERS**. Find the average of a list of numbers.
6. `max` - **ONLY FOR ARRAY/LIST OF NUMBERS**. Find the maximum number of a JSON array (or list).
7. `min` - **ONLY FOR ARRAY/LIST OF NUMBERS**. Find the minimum number of a JSON array (or list).
8. `unique` - **ONLY FOR ARRAY/LIST**. Removed all duplicated items from a JSON array (or list).
9. `distinct` - **ONLY FOR ARRAY/LIST**. Same as `unique`.
10. `ascending` - **ONLY FOR ARRAY/LIST**. Sort the items in a JSON array (or list).
11. `descending` - **ONLY FOR ARRAY/LIST**. Sort in descending order the items in a JSON array (or list).

Example:
```
country[name=USA].state.population => sum
```

The above sums up the `population` of each US states.

Multiple functions can be specified by delimiting them with a space, in the order of intended operation. For example,
```
customer[state=California].last_name => distinct count
```

The above counts a distinct list of last name of the customers from California.


### Thoughts...
In the future, we might consider adopting JSONPath, such as <a href="https://github.com/json-path/JsonPath" 
class="external-link" target="_nexial_external">https://github.com/json-path/JsonPath</a>, so 
that we can provide more comprehensive JSON querying capability for more complex test scenarios. Stay tuned...

Thoughts? Comments? Please kindly comment below.
