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



# BigIntRange

A function that return a class extending from [`_BigInt_`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigInt.md)  
The returned class accepts and converts all values [`_BigInt_`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigInt.md) can parse that are within a defined range (inclusive)

<br/>

**Syntax:** &nbsp; `BigIntRange(min, max)`

|**Parameters**|**Types**|
|-|-|
|`min`|Any|
|`max`|Any|

> Accepted values are all the values [`_BigInt_`](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaTypes/BigInt.md) can parse
> `min` must be equal or smaller than `max`

<br/>

**Returns:** &nbsp; [**\_BigIntRange\_**](https://github.com/ThePywon/coerce/blob/main/documentation/BigIntRangeInstance.md)

<br/>

### **Example**

**Code:**

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = SchemaTypes.BigIntRange(0, 5);

console.log(validator.call(123456789012345678901234567890n));
```

**Output:**

```
123456789012345678901234567890n
```

<br/>

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes._BigInt_();

console.log(validator.call(12));
```

**Output:**

```
12n
```

<br/>

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes._BigInt_();

console.log(validator.call("69 haha funny number"));
```

**Output:**

```
69n
```

<br/>

```js
const { SchemaTypes } = require("@protagonists/coerce");
const validator = new SchemaTypes._BigInt_();

console.log(validator.call({ "This is": "an object" }));
```

**Output:**

```
undefined
```

<br/>

**Code:**

```js
const { Schema, SchemaTypes } = require("@protagonists/coerce");

const Person = new Schema({
  name: String,
  age: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  birthday: Date,
  friends: [String],
  ID: BigInt // Equivalent to SchemaTypes._BigInt_ after model is created
});

const John = Person({
  name: "John",
  age: 37,
  birthday: "1984",
  friends: [ "Steve", "Carl", "Meep" ],
  ID: 9817265120564739
});

console.log(John);
```

**Ouput:**

```
{
  name: 'John',
  age: 37,
  birthday: 1984-01-01T00:00:00.000Z,
  friends: [ 'Steve', 'Carla', 'Meep' ],
  ID: 9817265120564739n
}
```

---

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
