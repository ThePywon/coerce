<div id="top" align="center">

# coerce
 
[![npm version](https://img.shields.io/npm/v/@protagonists/coerce)](https://npmjs.com/package/@protagonists/coerce)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/coerce)](https://npmjs.com/package/@protagonists/coerce)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/coerce)](https://github.com/ThePywon/coerce)
 
</div>


# About

A package to handle user inputs automatically



# Table of content

* [**How to use?**](#how-to-use)

* <details><summary><b>Classes</b></summary>
  <p>

  * [**Schema**](https://github.com/ThePywon/coerce/blob/main/Schema.md)
  * [**SchemaType**](https://github.com/ThePywon/coerce/blob/main/SchemaType.md)
  * [**SchemaTypes**](https://github.com/ThePywon/coerce/blob/main/SchemaTypes.md)
    
  </p>
</details>

* [**Symbols?**](#symbols)

---



# How to use?

## Description

This package is meant to coerce objects following a certain model  
This can be a very usefull tool to manage user inputted data automatically

## Import

### Terminal

> ```sh
> npm install @protagonists/coerce
> ```

### Node.js

> ```js
> const Coerce = require("@protagonists/coerce");
> ```

## Example

### Code:

```js
const { Schema, SchemaTypes } = require("@protagonists/coerce");

const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
});

const John = new Person({
  name: "John",
  favColor: "Red",
  friends: ["Steve", "Carla", "Meep"],
  kids: 2,
  birthday: "1984",
  age: 37
});

console.log(John);
```

### Output:

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carla', 'Meep' ]
}
```

---



# Symbols?

<h2><img src="https://imgur.com/ToMgUid.gif" width="60px" height="33px"/></h2>

Added in the latest update!

<h2><img src="https://imgur.com/muzdSho.gif" width="36px" height="24px"/></h2>

Readonly

<h2><img src="https://imgur.com/oSU7YNt.gif" width="42px" height="36px"/></h2>

Non-Enumerable
