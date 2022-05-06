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

* [**SchemaType**](#schematype)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>

  * [**`.defined`**](#defined)
  * [**`.prototype.call`**](#call)
  * [**`.prototype.toString`**](#tostring)
    
  </p>
</details>

---

<br/><br/><br/>



# SchemaType

The parent class used to parse each values within a model  

<br/>

**Syntax:** &nbsp; `class extends SchemaType {}`

> This class can only be extended upon

<br/>

### **Example**

**Code:**

```js
const { Schema, SchemaType, SchemaTypes } = require("@protagonists/coerce");

class Gender extends SchemaType {
  static Male = Symbol("Male");
  static Female = Symbol("Female");

  constructor() { super() }

  call(val) {
    if(val === Gender.Male ||
      val === Gender.Female)
      return val;
  }
}

const Person = new Schema({
  name: String,
  gender: Gender,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
});

const John = Person({
  name: "John",
  gender: Gender.Male,
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
  gender: Symbol(Male),
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carl', 'Meep' ]
}
```

---

<br/><br/><br/>

# Methods

## `.defined`

A simple function that returns true if a value is a valid value  
It returns false whenever the value is [`undefined`](https://javascript.info/types#the-undefined-value), [`null`](https://javascript.info/types#the-null-value) or [`NaN`](https://javascript.info/number#tests-isfinite-and-isnan)

<br/>

**Syntax:** &nbsp; `.defined(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; [**Boolean**](https://javascript.info/types#boolean-logical-type)

<br/>

### **Example**

**Code:**

```js
const { Schema, SchemaType, SchemaTypes } = require("@protagonists/coerce");

class Any extends SchemaType {
  constructor() { super() }

  call(val) {
    if(this.defined(val)) return val;
  }
}

const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String],
  other: Any
});

const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: ["Steve", "Carl", "Meep"],
  other: "Not undefined"
});

console.log(John);
```

**Output:**

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carl', 'Meep' ],
  other: 'Not undefined'
}
```

<br/><br/>

## `.prototype.call`

The function called to convert a value into the proper type and/or validate a value

<br/>

**Syntax:** &nbsp; `.prototype.call(val)`

|**Parameters**|**Types**|
|-|-|
|`val`|**Any**|

<br/>

**Returns:** &nbsp; **Any**

<br/>

### **Example**

**Code:**

```js
const { Schema, SchemaType, SchemaTypes } = require("@protagonists/coerce");

class Gender extends SchemaType {
  static Male = Symbol("Male");
  static Female = Symbol("Female");

  constructor() { super() }

  call(val) {
    if(val === Gender.Male ||
      val === Gender.Female)
      return val;
  }
}

const Person = new Schema({
  name: String,
  gender: Gender,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String]
});

const John = Person({
  name: "John",
  gender: Gender.Male,
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
  gender: Symbol(Male),
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carl', 'Meep' ]
}
```

<br/><br/>

# `.prototype.toString`

A function used to convert this object into a string format

<br/>

**Syntax:** &nbsp; `.prototype.toString()`

<br/>

**Returns:** &nbsp; [**String**](https://javascript.info/string)

<br/>

### **Example**

**Code:**

```js
const { SchemaType } = require("@protagonists/coerce");

class Gender extends SchemaType {
  static Male = Symbol("Male");
  static Female = Symbol("Female");

  constructor() { super() }

  call(val) {
    if(val === Gender.Male ||
      val === Gender.Female)
      return val;
  }
}

console.log(Gender.prototype.toString());
```

**Output:**

```
[SchemaType Gender]
```

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>

<div id="top" align="center">
