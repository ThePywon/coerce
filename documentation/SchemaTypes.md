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

* [**SchemaTypes**](#schematypes)

* <details open><summary><a href="#classes"><b>Classes</b></a></summary>
  <p>

  * [**`.Any`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Any.md)
  * [**`._BigInt_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigInt.md)
  * [**`.BitIntRange`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigIntRange.md)
  * [**`._Boolean_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Boolean.md)
  * [**`.Byte`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Byte.md)
  * [**`._Date_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Date.md)
  * [**`.DateRange`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/DateRange.md)
  * [**`._Function_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Function.md)
  * [**`.Integer`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Integer.md)
  * [**`.IntRange`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/IntRange.md)
  * [**`._Number_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Number.md)
  * [**`.Range`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Range.md)
  * [**`._RegExp_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/RegExp.md)
  * [**`._String_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/String.md)

  </p>
</details>

---

<br/><br/><br/>

# SchemaTypes

An object that holds all the default [`SchemaType`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)s

<br/>

### **Example**

**Code:**

```js
// Imports
const { Schema, SchemaType, SchemaTypes } = require("@protagonists/coerce");

// Create schema 'Person'
const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
});

// Coerce object with schema
const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: ["Steve", "Carl", "Meep"]
});

// Log result
console.log(John);
```

**Output:**

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carl', 'Meep' ]
}
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
