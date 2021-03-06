<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/coerce">coerce</a></h1>
 
[![npm version](https://img.shields.io/npm/v/@protagonists/coerce)](https://npmjs.com/package/@protagonists/coerce)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/coerce)](https://npmjs.com/package/@protagonists/coerce)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/coerce)](https://github.com/ThePywon/coerce)
 
</div>


# About

A package to handle user inputs automatically

---

<br/><br/><br/>



# Table of content

* [**How to use?**](#how-to-use)

> The content below may not correspond to the structure of the objects

* <details open><summary><a href="https://github.com/ThePywon/coerce/blob/main/documentation/Schema.md"><b>Schema</b></a> &nbsp; <img src="https://img.shields.io/badge/-Exported-cyan"/></summary>
  <p>

  * [**SchemaInstance**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaInstance.md)
    
  </p>
</details>

* [**SchemaType**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)

* <details open><summary><a href="https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes.md"><b>SchemaTypes</b></a> &nbsp; <img src="https://img.shields.io/badge/-Exported-cyan"/></summary>
  <p>

  * [**`.Any`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Any.md)
  * [**`._BigInt_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigInt.md)
  * [**`.BitIntRange`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigIntRange.md)
  * [**BigIntRangeInstance**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigIntRangeInstance.md)
  * [**`._Boolean_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Boolean.md)
  * [**`.Byte`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Byte.md)
  * [**`._Date_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Date.md)
  * [**`.DateRange`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/DateRange.md)
  * [**DateRangeInstance**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/DateRangeInstance.md)
  * [**`._Function_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Function.md)
  * [**`.Integer`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Integer.md)
  * [**`.IntRange`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/IntRange.md)
  * [**IntRangeInstance**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/IntRangeInstance.md)
  * [**`._Number_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Number.md)
  * [**`.Range`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/Range.md)
  * [**RangeInstance**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/RangeInstance.md)
  * [**`._RegExp_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/RegExp.md)
  * [**`._String_`**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/String.md)
    
  </p>
</details>

---

<br/><br/><br/>



# How to use?

## Description

This package takes in an object and coerces it into the same structure as the passed model  
This can be a very usefull tool to manage user inputted data automatically

<br/>

## Import

### Terminal

> ```sh
> npm install @protagonists/coerce
> ```

<br/>

### Node.js

> ```js
> const Coerce = require("@protagonists/coerce");
> ```

<br/>

## Example

### Code:

```js
// Imports
const { Schema, SchemaTypes } = require("@protagonists/coerce");

// Create schema 'Person'
const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
});

// Coerce object with the schema
const John = new Person({
  name: "John",
  favColor: "Red",
  friends: ["Steve", "Carla", "Meep"],
  kids: 2,
  birthday: "1984",
  age: 37
});

// Log the result
console.log(John);
```

<br/>

### Output:

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carla', 'Meep' ]
}
```

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
