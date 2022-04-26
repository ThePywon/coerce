# coerce

## A package to handle user inputs automatically


<a href="https://npmjs.com/package/@protagonists/coerce"><img src="https://img.shields.io/npm/v/@protagonists/coerce" alt="npm version"/></a>
<a href="https://npmjs.com/package/@protagonists/coerce"><img src="https://img.shields.io/npm/dt/@protagonists/coerce" alt="npm downloads"/></a>
<a href="https://discord.gg/cwhj3EgqGP"><imgs src="https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white" alt="discord server"/></a>


# Table of content

* [**How to use?**](#how-to-use)
* <details><summary><a href="#properties"><b>Properties</b></a></summary>
  <p>

    * [**Schema.raw**](#schema-raw)
    * [**SchemaType**](#schematype)
    * [**SchemaTypes**](#schematypes)
        * [**\_Boolean\_**](#schematypes-boolean)
        * [**\_Number\_**](#schematypes-number)
        * [**\_String\_**](#schematypes-string)
        * [**\_Date\_**](#schematypes-date)
    
  </p>
</details>

* <details><summary><a href="#functions"><b>Functions</b></a></summary>
  <p>

    * [**Schema**](#schema)
        * [**from**](#schema-from)
        * [**setDefaults**](schema-setdefaults)

  </p>
</details>

* [**Symbols?**](#symbols)

---



# How to use?

## Description

This package is meant to coerce objects following a certain model (schema)  
This can be a very usefull tool to manage user inputted data automatically

## Import

### Terminal

> `npm i @protagonists/coerce`

### Node.js

> ```js
> const Coerce = require("@protagonists/coerce");
> ```

---



# Schema

## Description

The class used to parse an object using model

## Syntax

```js
constructor(obj: Object)
```

## Example

### Code

```js
// Import
const { Schema } = require('.');

// Create Schema
const myModel = {
  name: String,
  date: Date
};
const mySchema = new Schema(myModel);

// Coerce object
const a = {
  name: "a",
  date: "2022-03-04",
  uselessNum: 69
}
const b = mySchema.from(a);


console.log(b);
```

### Output

```
{
  name: 'a',
  date: 2022-03-04T00:00:00.000Z
}
```

### Code

```js
// Import
const { Schema } = require("@protagonists/ceorce");

// Create Schema
const myModel = {
  name: String,
  date: Date
};
const mySchema = new Schema(myModel);

// Missing/Invalid values throw errors
console.log(mySchema.from({}));
```

### Output

```
Error: Invalid value at root.name, expected String
```


<h1 id="schema-raw" title="Readonly">Schema Raw <img src="https://imgur.com/muzdSho.gif" width="24px" height="16px"/></h1>

## Description

The raw model from the Schema

## Value

> Object

## Example

### Code:

```js
// Import
const { Schema } = require("@protagonists/ceorce");

// Create Schema
const myModel = {
  name: String,
  date: Date
};
const mySchema = new Schema(myModel);

console.log(mySchema.raw);
```

### Ouput:

```
{ name: _String_ {}, date: _Date_ {} }
```



# SchemaType

## Description

This class is used in the Schema class, in fact, the `Schema.raw` property contains lots of them 
It is used to parse the raw values into the proper format (or return undefined when unsuccessful)

## Value

```
Class
```

## Example

### Code:

```js
// Imports
const { Schema, SchemaType } = require("@protagonists/coerce");

// Create Color Type
class Color extends SchemaType {
  // Simple static properties
  static red = Symbol("Red");
  static green = Symbol("Green");
  static blue = Symbol("Blue");
  static magenta = Symbol("Magenta");
  static orange = Symbol("Orange");
  static yellow = Symbol("Yellow");
  static lime = Symbol("Lime");
  static turquoise = Symbol("Turquoise");
  static navy = Symbol("Navy");
  static purple = Symbol("Purple");
  
  constructor() {
    // Call the parent constructor
    super();
  }

  // This function is required!
  call(val) {
    // Return if undefined
    if(val === undefined) return;
    
    // Parse the value
    const colors = ["red", "green", "blue", "magenta", "orange", "yellow", "lime", "turquoise", "navy", "purple"];
    
    for(let i = 0; i < colors.length; i++) {
      if(typeof val === "string" && val.toUpperCase() === colors[i].toUpperCase() || Color[colors[i]] === val)
        return Color[colors[i]];
    }

    // If it gets to this point, it is not parseable so no need to return
  }
}


// Create a schema
const Person = new Schema({
  name: String,
  age: Number,
  favColor: Color
});

// Test out the schema!
const personA = Person.from({
  name: "John",
  age: 32,
  favColor: "Red"
});
const personB = Person.from({
  name: "Steve",
  age: 27,
  favColor: Color.magenta
});

console.log(personA);
console.log(personB);
console.log(Person.raw);
```

### Ouput:

```
{ name: 'John', age: 32, favColor: Symbol(Red) }
{ name: 'Steve', age: 27, favColor: Symbol(Magenta) }
{ name: _String_ {}, age: _Number_ {}, favColor: Color {} }
```

### Code:

```js
// Imports
const { Schema, SchemaTypes } = require('.');

// Create Byte Type from Number type
class Byte extends SchemaTypes._Number_ {
  
  constructor() {
    // Call the parent constructor
    super();
  }

  // This function is required!
  call(val) {
    // Convert into a number using parent
    // We can then assume that the value will either be a valid number or undefined
    val = super.call(val);

    // Return if undefined
    if(val === undefined) return;

    // Return if out of bounds
    if(val < 0 || val > 255) return;

    // Otherwise, return the proper value
    return val;
  }
}

// Create testing schema
const mySchema = new Schema({
  name: String,
  ID: Number,
  data: Byte
});

// Coerce object to schema
const test = mySchema.from({
  name: "Testing Object",
  ID: 239586,
  data: 69
});

console.log(test);
```

### Output:

```
{ name: 'Testing Object', ID: 239586, data: 69 }
```



# SchemaTypes

## Description

This is a simple array containing the default SchemaType classes you often see inside the returned value of `Schema.raw`

## Value

```
Array
```

## Example

### Code:

```js
// Imports
const { Schema, SchemaTypes } = require('.');

// Create a test schema
const mySchema = new Schema({
  str: String,
  num: Number,
  bool: Boolean,
  date: Date
});

// Log stuff
console.log(SchemaTypes);
console.log(mySchema.raw);
```

### Ouput:

```
{
  _Boolean_: [class _Boolean_ extends SchemaType],
  _Number_: [class _Number_ extends SchemaType],
  _String_: [class _String_ extends SchemaType],
  _Date_: [class _Date_ extends SchemaType]
}
{
  str: _String_ {},
  num: _Number_ {},
  bool: _Boolean_ {},
  date: _Date_ {}
}
```



<a id="prop4"></a>
<h1 title="Added in the last update!&#13;Readonly">Prop4 <img src="https://imgur.com/ToMgUid.gif" width="40px" height="22px" title="Added in the last update!"/> <img src="https://imgur.com/muzdSho.gif" width="24px" height="16px" title="Readonly"/></h1>

## Description

This is where you describe what the property does and how it works

## Value

[//]: # (This is where you specify the expected returned value type/types)

```
Object
```

## Example

### Code:

```js
// This is where you give a simple code example for the property
```

### Ouput:

```
This is where you give the output to the above code example
```

---

# Functions

# MyFunc1

## Description

This is where you describe what the function does and how it works

## Syntax

```js
myInstance.myFunc1(param1: String, param2: Number?)
```

## Example

### Code:

```js
myInstance.myFunc1("test", 5);
```

### Output:

```
Undefined
```



# MyFunc2

## Description

This is where you describe what the function does and how it works

## Syntax

```js
myInstance.myFunc2(param: Boolean?)
```

## Example

### Code:

```js
myInstance.myFunc2(false);
```

### Output:

```
Undefined
```



# MyFunc3

## Description

This is where you describe what the function does and how it works

## Syntax

```js
myInstance.myFunc3(param: Number?)
```

## Example

### Code:

```js
myInstance.myFunc3(69);
```

### Output:

```
Undefined
```

---



[//]: # (Using @protagonists/emitter package)

# Events

This package uses imported properties from [`@protagonists/emitter`](https://www.npmjs.com/package/@protagonists/emitter)  
Check it out first before anything in here!

## Event1

### Description

This is where you describe when and what gets sent

### Example

```js
myInstance.on("Event1", ()=>{
  // Your code!
});
```

## Event2

### Description

This is where you describe when and what gets sent

### Example

```js
myInstance.on("Event2", ()=>{
  // Your code!
});
```

---



# Symbols?

<h2><img src="https://imgur.com/ToMgUid.gif" width="60px" height="33px"/></h2>

Added in the latest update!

<h2><img src="https://imgur.com/muzdSho.gif" width="36px" height="24px"/></h2>

Readonly

<h2><img src="https://imgur.com/oSU7YNt.gif" width="42px" height="36px"/></h2>

Non-Enumerable
