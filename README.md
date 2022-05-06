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

* <details open><summary><b>Classes</b></summary>
  <p>

  * [**Schema**](https://github.com/ThePywon/coerce/blob/main/documentation/Schema.md)
  * [**SchemaInstance**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaInstance.md)
  * [**SchemaType**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md)
  * [**SchemaTypes**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes.md)
    
  </p>
</details>

---

<br/><br/><br/>



# How to use?

## Description

This package is meant to coerce objects following a certain model  
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
