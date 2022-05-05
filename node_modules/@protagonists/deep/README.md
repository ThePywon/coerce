# deep

## A simple package to handle objects



# Table of content

* [**How to use?**](#how-to-use)
* <details><summary><a href="#functions"><b>Functions</b></a></summary>
  <p>

    * [**deepClone**](#deepclone)
    * [**deepFreeze**](#deepfreeze)

  </p>
</details>

---



# How to use?

## Description

This is a small and simple package that handles objects using usefull function like `deepClone` and `deepFreeze`

## Import

### Terminal

> `npm i @protagonists/deep`

### Node.js

> ```js
> const deep = require("@protagonists/deep");
> ```

---



# Functions

# deepClone

## Description

This function creates a deep clone of an original object

## Syntax

```js
deep.deepClone(obj: Object)
```

## Example

### Code:

```js
// Original
const a = {
  name: "John",
  age: 37,
  gender: 'M',
  friend: {
    name: "Steve",
    age: 28,
    gender: 'M'
  }
}

// Cloned
const b = deep.deepClone(a);

// Modifications
b.name = "Carla";
b.gender = 'F';
b.friend.name = "Meep";

// Result
console.log(a);
console.log(b);
```

### Output:

```
{
  name: 'John',
  age: 37,
  gender: 'M',
  friend: {
    name: 'Steve',
    age: 28,
    gender: 'M'
  }
}
{
  name: 'Carla',
  age: 37,
  gender: 'F',
  friend: {
    name: 'Meep',
    age: 28,
    gender: 'M'
  }
}
```



# deepFreeze

## Description

This function freezes an object all the way through

## Syntax

```js
deep.deepFreeze(obj: Object)
```

## Example

### Code:

```js
const a = {
  name: "John",
  age: 37,
  gender: 'M',
  friend: {
    name: "Steve",
    age: 28,
    gender: 'M'
  }
}

deep.deepFreeze(a);

a.friend.name = "Meep"; // Error in strict mode

console.log(a);
```

### Output:

```
{
  name: 'John',
  age: 37,
  gender: 'M',
  friend: {
    name: 'Steve',
    age: 28,
    gender: 'M'
  }
}
