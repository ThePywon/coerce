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

* [**Byte**](#byte)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.call`**](#call)
  * [**`.toString`**](#tostring) &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)
    
  </p>
</details>

---

<br/><br/><br/>



# Byte

A class extending from [`IntRange`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/IntRange.md)  
The returned class accepts and converts all values [`Integer`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Integer.md) can parse that are within a defined range of 0 to 255 (inclusive)


<br/>

**Syntax:** &nbsp; `new Byte()`

<br/>

### **Example**

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes.Byte();

console.log(validator.call(12));
```

**Output:**

```
12
```

<br/>

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes.Byte();

console.log(validator.call("69 haha funny number"));
```

**Output:**

```
69
```

<br/>

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes.Byte();

console.log(validator.call(999));
```

**Output:**

```
undefined
```

<br/>

**Code:**

```js
const { Schema, SchemaTypes } = require("@protagonists/coerce");

const Color = new Schema({
  name: String,
  red: SchemaTypes.Byte,
  green: SchemaTypes.Byte,
  blue: SchemaTypes.Byte,
  alpha: SchemaTypes.Byte
});

const favColor = Color({
  name: "Blue",
  red: 0,
  green: 128,
  blue: 255,
  alpha: 255
});

console.log(favColor);
```

**Ouput:**

```
{ name: 'Blue', red: 0, green: 128, blue: 255, alpha: 255 }
```

---

<br/><br/><br/>

# Methods

Some methods from this class are inherited from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
Check it out for more info on this class's methods

<br/>

## `.call`

The function called to convert a value into a [`Number`](https://javascript.info/number) within an inclusive range of 0 to 255 and/or validate a value

<br/>

**Syntax:** &nbsp; `.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**Number**](https://javascript.info/number)

<br/>

### **Example**

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes.Byte();

console.log(validator.call("55"));
```

**Output:**

```
55
```

<br/><br/>

<a id="tostring"></a>

## `.toString` &nbsp; [![Prototype](https://shields.io/badge/-Prototype-orange)](https://javascript.info/prototype-inheritance)

A function used to convert this object into a string format

<br/>

**Syntax:** &nbsp; `toString()`

<br/>

**Returns:** &nbsp; [**String**](https://javascript.info/string)

<br/>

### **Example**

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");

console.log(new SchemaTypes.Byte().toString());
```

**Output:**

```
Byte
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
