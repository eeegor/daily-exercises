---

path: "/javascript-scope"
title: "Scope"
date: "2019-01-27"
keywords: ['javascript', 'scope']

---

## Scope

All global variables are assigned to the `window` object

```javascript
var first = 'Some value'
window.second = 'Another value'

first // 'Some value'
second // 'Another value'
window.first // 'Some value'
window.second // 'Another value'
```

### Function vs for-loop scope

```javascript
// functions have scope
function functionName() {
  var key = 'value'
  console.log(key) // 'value'
}
console.log(key)  // ReferenceError: key is not defined

// for loops don't
for(var i = 0; i < 5; i++) {
  var value = 'Something'
}

console.log(value) // 'Something'
```
