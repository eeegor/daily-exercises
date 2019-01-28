---

path: "/javascript-hoisting"
title: "Hoisting"
date: "2019-01-27"
keywords: ['javascript', 'hoisting']

---

## Hoisting

The below example returns `undefined` instead of an `Error`, because the variable name and function declarations are hoisted (moved) to the top of the scope

```javascript
"use strict"

function foo() {
  console.log(first) // first is not yet declared
  var first = 100
}

foo() // 'undefined'
```
Because of hoisting the code looks more like this in reality

```javascript
"use strict"

function foo() {
  var first  // first is declared at the top of the scope
  console.log(first) // that's why it doesn't throw an error
  first = 100
}

foo() // 'undefined'
```
