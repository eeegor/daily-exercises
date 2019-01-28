---

path: "/javascript-types"
title: "Javascript Types"
date: "2019-01-27"
keywords: ['javascript', 'ecmascript', 'types']

---

## Javascript Types

|Type		| Example			| Typeof		|
|-			|-					|-				|
|Boolean	|`true`, `false`	|`boolean`		|
|Number		|`2`, `2.3`			|`number`		|
|String		|`"Hello"`			|`string`		|
|Null		|`null`				|`object`		|
|Undefined	|`undefined`		|`undefined`	|
|-			|-					|-				|
|Object		|`{ key: 'value' }`	|`object`		|

### Trivia

> - typeof(null) incorrectly returns type object
> - JavaScript is a dynamically typed language (types can change during assignment)

### Check type of a value

```javascript
var stringValue = 'Hello'
typeof(stringValue) // "string"

var numberValue = 32
typeof(numberValue) // "number"
```


### Difference between `==` and `===` comparison operators

In simple words one could say:
- `==` equality -> checks for value equality
- `===` strict equality -> checks for value and type equality

```javascript
// Example
0 == '0' // true
0 === '0' // false

// Another
0 == '' // true
0 === '' // false

```

> JavaScript Equality Table [here](https://dorey.github.io/JavaScript-Equality-Table/)

### What is `NaN`?

`NaN` stands for `Not a number`

```javascript
// Type check
typeof(NaN) // "number"

// Example
"Abc" / 3 // NaN

// Comparison does not work
NaN == NaN // false

// To check type use helper
isNaN(NaN) // true

// Also possible to check through variable comparison
var a = NaN
a !== a // true
```
