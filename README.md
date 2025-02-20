# JavaScript Basics

## Introduction
JavaScript is a powerful programming language used to create interactive and dynamic web applications. This document covers the fundamental concepts of JavaScript, including statements, keywords, functions, and basic syntax.

---

## Table of Contents
- [Statements](#statements)
- [Keywords](#keywords)
- [Variables](#variables)
- [Data Types](#data-types)
- [Operators](#operators)
- [Functions](#functions)
- [Control Flow](#control-flow)
- [Loops](#loops)
- [Events](#events)

---

## Statements
JavaScript programs are made up of statements, which are instructions to be executed by the browser. Statements end with a semicolon (`;`).

Example:
```javascript
let x = 5;
let y = 10;
let sum = x + y;
console.log(sum); // Output: 15
```

---

## Keywords
JavaScript keywords are reserved words used to perform specific tasks.

Some important JavaScript keywords:
- `var`, `let`, `const` - Variable declaration
- `if`, `else`, `switch` - Conditional statements
- `for`, `while`, `do` - Loops
- `function`, `return` - Functions
- `try`, `catch`, `finally` - Error handling
- `new`, `delete`, `typeof` - Object operations

---

## Variables
Variables store data values. JavaScript provides three ways to declare variables:

```javascript
var name = "John"; // Old way (avoid using it)
let age = 25; // Modern way (preferred)
const PI = 3.14; // Constant value (cannot be changed)
```

---

## Data Types
JavaScript has different data types:
- `String` - "Hello World"
- `Number` - 100, 10.5
- `Boolean` - `true`, `false`
- `Array` - `[1, 2, 3]`
- `Object` - `{name: "John", age: 25}`

Example:
```javascript
let isJavaScriptFun = true;
console.log(typeof isJavaScriptFun); // Output: boolean
```

---

## Operators
Operators perform operations on values and variables.

### Arithmetic Operators:
```javascript
let a = 10;
let b = 5;
console.log(a + b); // 15 (Addition)
console.log(a - b); // 5  (Subtraction)
console.log(a * b); // 50 (Multiplication)
console.log(a / b); // 2  (Division)
console.log(a % b); // 0  (Modulus)
```

### Comparison Operators:
```javascript
console.log(5 === "5"); // false (Strict equality)
console.log(5 == "5"); // true (Loose equality)
console.log(10 > 5);   // true
console.log(10 < 5);   // false
```

---

## Functions
Functions allow code reuse and better organization.

Example:
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

Arrow function (ES6):
```javascript
const add = (a, b) => a + b;
console.log(add(3, 7)); // Output: 10
```

---

## Control Flow
### Conditional Statements:
```javascript
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

Switch Case:
```javascript
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Regular day.");
}
```

---

## Loops
Loops help execute code multiple times.

For Loop:
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
```

While Loop:
```javascript
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}
```

---

## Events
JavaScript interacts with HTML using events like `click`, `mouseover`, etc.

Example:
```html
<button onclick="sayHello()">Click Me</button>
<script>
    function sayHello() {
        alert("Hello, World!");
    }
</script>
```

---

## Conclusion
This document provides a basic understanding of JavaScript, covering statements, keywords, functions, and more.
JavaScript is a versatile language used for web development, and mastering it will open many opportunities.

