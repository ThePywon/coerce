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

* [**Schema**](#schema)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`[Symbol.hasInstance]`**](#hasinstance)
    
  </p>
</details>

---

<br/><br/><br/>



# Schema

A builder function that returns a [`SchemaInstance`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaInstance.md) that can coerce objects  
The model used to coerce objects is a parsed version of the parameter `obj`

<br/>

**Syntax:** &nbsp; `new Schema(obj)`

> The lack of the `new` keyword may cause unwanted behaviour

|**Parameters**|**Types**|
|-|-|
|`obj`|[**Object**](https://javascript.info/object)|

<br/>

**Returns:** &nbsp; [**SchemaInstance**](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaInstance.md)

<br/>

### **Example**

**Code:**

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


// Log result
console.log(Person);
```

**Ouput:**

```
[Function: SchemaInstance] {
  raw: {
    name: _String_ {},
    age: _IntRange_ {},
    birthday: _Date_ {},
    friends: [ _String_ {} ]
  },
  defaults: [Getter],
  setDefaults: [Function: setDefaults]
}
```

---

<br/><br/><br/>



# Methods

<br/>

<a id="hasinstance"></a>

## `[Symbol.hasInstance]`

This is the function called when [`Schema`](#schema) is used in the right hand side of [`instanceof`](https://javascript.info/instanceof)  
It returns true if the value is itself or one of the temporary functions it created

<br/>

**Syntax:** &nbsp; `[Symbol.hasInstance]()`

<br/>

**Returns:** &nbsp; [**Boolean**](https://javascript.info/types#boolean-logical-type)

<br/>

### **Example**

**Code:**

```js
// Imports
const { Schema, SchemaTypes } = require("@protagonists/coerce");

// Create a model for the schema
const PersonModel = {
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
};
// Create schema 'Person' from model
const Person = new Schema(PersonModel);

// Log results
console.log(PersonModel instanceof Schema);
console.log(Person instanceof Schema);
console.log(Schema instanceof Schema);
```

**Output:**

```
false
true
true
```

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
