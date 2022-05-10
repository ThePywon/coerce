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

* [**Any**](#any)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>
  
  * [**`.prototype.toString`**](#tostring)
    
  </p>
</details>

---

<br/><br/><br/>



# Any

A class extending from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
It accepts all values but [`undefined`](https://javascript.info/types#the-undefined-value), [`null`](https://javascript.info/types#the-null-value) or [`NaN`](https://javascript.info/number#tests-isfinite-and-isnan) without any conversion

<br/>

**Syntax:** &nbsp; `new Any()`

<br/>

### **Example**

**Code:**

```js
const { Schema, SchemaTypes } = require("@protagonists/coerce");

const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String],
  otherInfo: SchemaTypes.Any
});

const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: [ "Steve", "Carl", "Meep" ],
  otherInfo: "Single"
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
  otherInfo: 'Single'
}
```

---

<br/><br/><br/>

# Methods

Some methods from this class are inherited from [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)  
Check it out for more info on this class's methods

<a id="tostring"></a>

## `.prototype.toString`

A function used to convert this object into a string format

<br/>

**Syntax:** &nbsp; `.prototype.toString()`

<br/>

**Returns:** &nbsp; [**String**](https://javascript.info/string)

<br/>

### **Example**

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");

console.log(SchemaTypes.Any.prototype.toString());
```

**Output:**

```
Any
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
