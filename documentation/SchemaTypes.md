<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/coerce">coerce</a><h1>

[![npm version](https://img.shields.io/npm/v/@protagonists/coerce)](https://github.com/ThePywon/coerce)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/coerce)](https://github.com/ThePywon/coerce)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/coerce)](https://github.com/ThePywon/coerce)

</div>


# About

This is where you describe what the package does and how it works

---

<br/><br/><br/>

# Table of content

* [**SchemaTypes**](#schematypes)

* <details open><summary><a href="#classes"><b>Classes</b></a></summary>
  <p>

  * [**`.Any`**](#any)
  * [**`._BigInt_`**](#bigint)
  * [**`.BitIntRange`**](#bigintrange)
  * [**`._Boolean_`**](#boolean)
  * [**`.Byte`**](#byte)
  * [**`._Date_`**](#date)
  * [**`.DateRange`**](#daterange)
  * [**`._Function_`**](#function)
  * [**`.Integer`**](#integer)
  * [**`.IntRange`**](#intrange)
  * [**`._Number_`**](#number)
  * [**`.Range`**](#range)
  * [**`._RegExp_`**](#regexp)
  * [**`_.String_`**](#string)

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
const { Schema, SchemaType, SchemaTypes } = require('.');

const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
});

const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: ["Steve", "Carl", "Meep"]
});

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
