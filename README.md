# coerce

## A package to handle user inputs automatically



# Table of content

* [**How to use?**](#how-to-use)
* <details><summary><a href="#properties"><b>Properties</b></a></summary>
  <p>

    * [**Schema**](#schema)
        * [**raw**](#schema-raw)
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

  </p>
</details>

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



<a id="options-prop1"></a>
## `Options.Prop1`

### Description

This is where you describe what the property does and how it works

### Expected Value

[//]: # (this is where you specify the value type/types expected by the property)

> Boolean?

### Example

[//]: # (this is where you give a simple code example of the constructor with the property)

```js
const myInstance = new myPackage({ Prop1: true });
```



<a id="options-prop2"></a>
## `Options.Prop2`

### Description

This is where you describe what the property does and how it works

### Expected Value

[//]: # (this is where you specify the value type/types expected by the property)

> Number?

### Example

[//]: # (this is where you give a simple code example of the constructor with the property)

```js
const myInstance = new myPackage({ Prop2: 5 });
```



<a id="options-prop3"></a>
## `Options.Prop3`

### Description

This is where you describe what the property does and how it works

### Expected Value

[//]: # (this is where you specify the value type/types expected by the property)

> String?

### Example

[//]: # (this is where you give a simple code example of the constructor with the property)

```js
const myInstance = new myPackage({ Prop3: "some text" });
```



# Param2

## Description

This is where you describe what the parameter does and how it works

## Expected Value

[//]: # (this is where you specify the value type/types expected by the parameter)

> Number?

## Example

[//]: # (this is where you give a simple code example of the constructor with the parameter)

```js
const myInstance = new myPackage({}, 14);
```



<a id="param3"></a>
<h1 title="Added in the latest update!">Param3 <img src="https://imgur.com/ToMgUid.gif" width="60px" height="33px"/></h1>

## Description

This is where you describe what the parameter does and how it works

## Expected Value

[//]: # (this is where you specify the value type/types expected by the parameter)

> String?

## Example

[//]: # (this is where you give a simple code example of the constructor with the parameter)

```js
const myInstance = new myPackage({}, 27, "happy");
```

---



# Properties

# Prop1

## Description

This is where you describe what the property does and how it works

## Value

[//]: # (This is where you specify the expected returned value type/types)

```
Boolean
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



<a id="prop2"></a>
<h1 title="Readonly">Prop2 <img src="https://imgur.com/muzdSho.gif" width="24px" height="16px"/></h1>

## Description

This is where you describe what the property does and how it works

## Value

[//]: # (This is where you specify the expected returned value type/types)

```
Number
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



<a id="prop3"></a>
<h1 title="Readonly">Prop3 <img src="https://imgur.com/muzdSho.gif" width="24px" height="16px"/></h1>

## Description

This is where you describe what the property does and how it works

## Value

[//]: # (This is where you specify the expected returned value type/types)

```
String
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
