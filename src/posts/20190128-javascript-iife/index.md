---

path: "/javascript-iife"
title: "IIFE"
date: "2019-01-27"
keywords: ['javascript', 'iife']

---

## IIFE (Immediately-invoked Function Expressions)

IIFE prevents variables from leaking into global scope

```javascript
"use strict"

(function() {
  var thing = { key: 'value' }
  console.log('thing', thing) // { key: 'value' }
})()

console.log('thing', thing) // ReferenceError: thing is not defined
```
