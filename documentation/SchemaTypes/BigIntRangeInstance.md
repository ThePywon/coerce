<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/coerce">coerce</a><h1>

[![npm version](https://img.shields.io/npm/v/@protagonists/coerce)](https://github.com/ThePywon/coerce)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/coerce)](https://github.com/ThePywon/coerce)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/coerce)](https://github.com/ThePywon/coerce)

</div>


# About

A package to handle user inputs automatically

---

<br/><br/><br/>


# Table of content

* [**BigIntRangeInstance**](#bigintrangeinstance)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# BigIntRangeInstance

A class returned from [`BigIntRange`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigIntRange.md)  
it accepts and converts all values [`_BigInt_`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigInt.md) can parse that are within a defined range (inclusive)

<br/>

**Syntax:** &nbsp; `new BigIntRangeInstance()`

<br/>

### **Example**

**Code:**

```js
// Imports
const { SchemaTypes } = require("@protagonists/coerce");

// Create SchemaType instance
const validator = new (SchemaTypes.BigIntRange(0, 5));

// Log result of call()
console.log(validator.call(123456789012345678901234567890n));
```

**Output:**

```
undefined
```

<br/>

```js
// Imports
const { SchemaTypes } = require("@protagonists/coerce");

// Create SchemaType instance
const validator = new (SchemaTypes.BigIntRange(0, 5));

// Log result of call()
console.log(validator.call(4));
```

**Output:**

```
4n
```

<br/>

```js
// Imports
const { SchemaTypes } = require("@protagonists/coerce");

// Create SchemaType instance
const validator = new (SchemaTypes.BigIntRange(0, 5));

// Log result of call()
console.log(validator.call("5 is within the range yes"));
```

**Output:**

```
5n
```

<br/>

```js
// Imports
const { SchemaTypes } = require("@protagonists/coerce");

// Create SchemaType instance
const validator = new (SchemaTypes.BigIntRange(0, 5));

// Log result of call()
console.log(validator.call({ "This is": "an object" }));
```

**Output:**

```
undefined
```

---

<br/><br/><br/>

# Methods

<br/>

## `.call`

The function called to convert a value into a [`BigInt`](https://javascript.info/types#bigint-type) and/or validate a value

<br/>

**Syntax:** &nbsp; `.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**BigInt**](https://javascript.info/types#bigint-type)

<br/>

### **Example**

**Code:**

```js
// Imports
const { SchemaTypes } = require("@protagonists/coerce");

// Create SchemaType instance
const validator = new (SchemaTypes.BigIntRange(0, 5));

// Log result of call()
console.log(validator.call(4));
```

**Output:**

```
4n
```

<br/><br/>

<a id="tostring"></a>

## `.toString` &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)

A function used to convert this object into a string format

<br/>

**Syntax:** &nbsp; `.toString()`

<br/>

**Returns:** &nbsp; [**String**](https://javascript.info/string)

<br/>

### **Example**

**Code:**

```js
// Imports
const { SchemaTypes } = require("@protagonists/coerce");

// Log SchemaType instance's toString() result
console.log(new (SchemaTypes.BigIntRange(0, 5)).toString());
```

**Output:**

```
BigIntRange
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
