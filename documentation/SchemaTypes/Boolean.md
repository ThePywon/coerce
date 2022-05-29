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

* [**\_Boolean\_**](#boolean)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



<a id="boolean"></a>

# \_Boolean\_

A class extending from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
It accepts **ALL** values
It converts them all into [`Boolean`](https://javascript.info/types#boolean-logical-type) using the default javascript conversion system

<br/>

**Syntax:** &nbsp; `new _Boolean_()`

<br/>

### **Example**

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes._Boolean_();

console.log(validator.call(null));
```

**Output:**

```
false
```

<br/>

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes._Boolean_();

console.log(validator.call(12));
```

**Output:**

```
true
```

<br/>

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes._Boolean_();

console.log(validator.call( {} ));
```

**Output:**

```
true
```

<br/>

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes._Boolean_();

console.log(validator.call(""));
```

**Output:**

```
false
```

<br/>

**Code:**

```js
const { Schema, SchemaTypes } = require("@protagonists/coerce");

const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String],
  male: Boolean // Equivalent to SchemaTypes._Boolean_ after model is created
});

const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: [ "Steve", "Carl", "Meep" ],
  male: "yes"
});

console.log(John);
```

**Ouput:**

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carla', 'Meep' ],
  male: true
}
```

---

<br/><br/><br/>

# Methods

<br/>

## `.call`

The function called to convert any value into a [`Boolean`](https://javascript.info/types#boolean-logical-type)

<br/>

**Syntax:** &nbsp; `.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**Boolean**](https://javascript.info/types#boolean-logical-type)

<br/>

### **Example**

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes._Boolean_();

console.log(validator.call("A truthy value"));
```

**Output:**

```
true
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
const { SchemaTypes } = require("@protagonists/coerce");

console.log(new SchemaTypes._Boolean_().toString());
```

**Output:**

```
Boolean
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>