
# About

A package to handle user inputs automatically



# Table of content

* [**How to use?**](#how-to-use)

* <details open><summary><b>Classes</b></summary>
  <p>

  * [**Schema**](https://github.com/ThePywon/coerce/blob/main/Schema.md)
  * [**SchemaType**](https://github.com/ThePywon/coerce/blob/main/SchemaType.md)
  * [**SchemaTypes**](https://github.com/ThePywon/coerce/blob/main/SchemaTypes.md)
    
  </p>
</details>

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
