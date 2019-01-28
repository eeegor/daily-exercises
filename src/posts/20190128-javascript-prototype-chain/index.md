---

path: "/javascript-prototype-chain"
title: "Javascript prototype chain"
date: "2019-01-27"
keywords: ['javascript', 'ecmascript', 'prototype chain']

---

### Prototype chain

```javascript

var vehicle = {
  type: 'bicycle'
}

console.log(vehicle) // { type: 'bicycle' }


// Old school prototype assignment
var roadBike = {}
roadBike.__proto__ = vehicle

console.log(roadBike.type) // bicycle

// check if object is a prototype of another
console.log(vehicle.isPrototypeOf(roadBike)) // true

// This will not affect the 'original' prototype
roadBike.type = 'light bicycle'

console.log(vehicle.type) // 'bicycle'
console.log(roadBike.type) // 'light bicycle'
```

Using `Object.create()` instead of `__proto__`

```javascript
var vehicle = {
  type: 'bicycle'
}

// with __proto__
var roadBike = {}
roadBike.__proto__ = vehicle

// with Object.create()
var roadBike = Object.create(vehicle)

// with Object.create() and parameters (
// the output will be: { wheels: 2 }
// 'value' gets omitted as it's a part of Object.create()
var roadBike = Object.create(vehicle, { wheels: { value: 2 } })

```