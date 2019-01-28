---

path: "/javascript-this"
title: "this"
date: "2019-01-27"
keywords: ['javascript', 'this']

---

## `this` keyword

In JavaScript `this` is determined by the context, by default it returns the global `Window` object

```javascript
console.log(this) // Window { ... }
this.value = 99

console.log(this.value) // 99
console.log(window.value) // 99
console.log(value) // 99
```

A function example where `this` returns the global object

```javascript
function demo() {
  console.log(this) // Window { ... }
}

demo()
```

A function example where `this` returns the object reference

```javascript
var wrapper = {
  demo: function() {
    console.log(this) // 'wrapper' Object { ... }
  }
}

wrapper.demo()
```

An example to show the difficulty of `this` within nested functions

```javascript
var wrapper = {
  demo: function() {
    console.log(this) // points to 'wrapper' Object { ... }
    
    function another() {
      this.other = 2
      console.log(this) // 'global' Window { ... }
    }

    another()
    console.log(other) // undefined
    console.log(window.other) // 2
  }
}

wrapper.demo()
```

Using `use strict` prevents the default object being the global `Window` object if not called explicitly

```javascript
var wrapper = {
  demo: function() {
    "use strict"
    console.log(this) // points to 'wrapper' Object { ... }
    
    function another() {
      console.log(this) // undefined
      this.other = 2 // Throws error 'cannot set property "other" of undefined'
    }

    another()
    console.log(other) // 2
    console.log(window.other) // 2
  }
}

wrapper.demo()
```

A popular pattern is to set `this` to a custom variable (e.g `self`) at the top of your function and reference the custom variable to lock down how `this` behaves

```javascript
var wrapper = {
  demo: function() {
    var self = this
    console.log(self) // points to 'wrapper' Object { ... }
    
    function another() {
      console.log(self) // points to 'wrapper' Object { ... }
      self.other = 2 // adds property to 'wrapper' Object { ... }
    }

    another()
    console.log(self.other) // 2
    console.log(window.other) // undefined
  }
}

wrapper.demo()
```
