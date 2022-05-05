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



# Schema

A function that returns a temporary function to ceorce objects  
The model used to coerce objects in the temporary function is the parsed value of the parameter `obj`

<br/>

**Syntax:** &nbsp; `new Schema(obj)`

> The lack of the `new` keyword may create unwanted behaviour

|**Parameters**|**Types**|
|-|-|
|`obj`|[**Object**](https://javascript.info/object)|

<br/>

**Returns:** [**SchemaInstance**](https://github.com/ThePywon/coerce/blob/main/SchemaInstance.md)

---

<br/><br/><br/>



# Example

## Code:

```js

```

## Output:

```

```

---

<br/><br/><br/>



# Methods

## `[Symbol.hasInstance]`

This is the function called when [`Schema`](#schema) is used in the right hand side of `instanceof`  
It returns true if the value is itself or one of the temporary functions it created

<br/>

**Returns:** [**Boolean**](https://devdocs.io/javascript/global_objects/boolean)
