---

path: "/javascript-functions"
title: "Javascript functions"
date: "2019-01-27"
keywords: ['javascript', 'ecmascript', 'functions']

---

## Functions

Functions in JavaScript are in reality regular `Objects`

```javascript

function first() {
  console.log('I was called')
}

first: function first() {
  arguments: null,
  caller: null,
  length: 0,
  name: "first",
  prototype: "first" { ... },
  __proto__: function { ... },
}

// This means we can access properties of a function like as if it was an `Object`

// Get a property from a function
console.log(first.name) // 'first'

// Add a property to a function
first.custom = 'A user-defined value'
console.log(first.custom) // 'A user-defined value'

// Call a function method
console.log(first.toString()) // function first() { console.log('I was called') }
```

### The `call` method

`call` method example without arguments

```javascript
function first() {
  console.log(this)
}

first() // `this` inside first will be: 'undefined'
first.call() // `this` inside first will be: 'undefined' as it tries to access `window`
first.call('me') // will assign `this` inside first to: 'me'
```

```javascript
var wrapper = {
  demo: function() {
    console.log(this) // points to 'wrapper' Object { ... }
    
    function another() {
      console.log(this) // points to 'wrapper' Object { ... }
    }

    // because of the below line `another` function will  
    // point to `this` from the wrapper scope
    another.call(this)
    // is the same as 
    another.call(wrapper)
  }
}
```

`call` method example with arguments

```javascript
function first(one, two, three) {
  console.log(this)
  console.log(one)
  console.log(two)
  console.log(three)
}

first(1, 2, 3) // undefined 1 2 3
first.call('a', 1, 2, 3) // 'a' 1 2 3
first.call(1, 2, 3, 4) // 1 2 3 4
```

### The `apply` method

With arguments

```javascript
function first() {
  console.log(this)
  for(var i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}

var args = [1, 2, 3]
first.apply('a', args) // 'a' 1 2 3
```

### The `bind` method

No `.bind()` example

```javascript
var result = function() {
  console.log(this) // `this` will be undefined
}

result()
```

`bind` will only work if the function is assigned to a variable

```javascript
// this example won't work
function result() {
  console.log(this) 
}.bind('something')

result()
```

`.bind()` with variable assignment example

```javascript
// this works
var result = function() {
  console.log(this) // `this` will be 'something'
}.bind('something')

result() 
```

```javascript
// this also works
var result = function() {
  console.log(this) // `this` will be 'something'
}

result = result.bind('something')

result() 
```
