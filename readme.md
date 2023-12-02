# Learning JavaScript

- Getting Started
- JS in the Web Browser
- [`console.log()`](#consolelog)
- [Variables](#variables)
- [Data Types](#primitive--non-primitive-data-types)
- [String Concatenation](#string-concatenation)
- [Operators]()
- Conditional Statements

## Console.log()

This is the method used to output text onto the console **(not the screen)**

```js
console.log("Hello World!"); //semi-colons are optional

// you can format the code in Console bu using `%c`
console.log("%c Hi There!", "color:blue; font-size:48px;");
```

---

## Variables

There are (3) keywords to declare variables:

- `var` the most lenient type of Variables.
- `let` included in ES6 somewhat strict type of variables
- `const` used to create constant (unmodifiable variables)

---

## Variables

There are (3) ways to create a variable in JS:

- `var`: creates a somewhat global variable.
- `let`: creates a scoped variable
- `const`: creates a CONSTANT variable

```js
/*  Using let */
let _var = 67;

function myFunc() {
  // this variables is only accessible inside the function.
  let _var = 100;
}

/* Using const */
// this variable can not be 'reassigned'
const _constant = "I am unchangeable";

/* Using var */
// This variable can be accessed EVERYWHERE in the code
var _anotherVar = null;
```

---

## Primitive & Non-Primitive Data Types

**Primitive**: Data types that are built-in to the language. Examples are:

```js
// nn bb ss u
let _null = null;
let _num = 34;
let _bool = true;
let _bigInt = 456n;
let _string = "ARK";
let _symbol = Symbol("I am a Symbol!");
let _undef = undefined;
```

**Non-Primitive**: Data Types that are user-defined. Examples are: Objects.

```js
let _myObj = {
  name: "ARK",
  age: 19,
  skinColor: "Dark Orange",
};
```

In the above code an object is assigned to the variable named '\_myObj'. The object contains `key-value pair` this means every properties of object can be accessed by a specific key. There are several ways to access the properties of an object

### **Using dot (.) operator:**

```js
let name = _myObj.name;
console.log(name);

// output: "ARK"
```

### **Using Object Literal:**

```js
let age = _myObj["age"];
console.log(age);

// Output: 19
```

## String Concatenation

Concatenation is the process used to combine two or more string together. There are severel ways of concatenating String in **JavaScript**

1. using the `concat` method
1. using the `+` operator
1. using the `,` operator

---

**Method 1:**

```js
str1 = "My";
str2 = "String";

// combines the two existing strings
str3 = str1.concat(str2);

// MyString
```

**Method 2:**

```js
str1 = "My name is";
str2 = "ARK";

console.log(str1 + str2);

// My name isARK
```

**Method 3:**

```js
str1 = "My name is";
str2 = "ARK";

console.log(str1, str2);
```

---

## Loops

There are many types of loops in JS:

- `For loop`

```js
for (let i = 0; i < 11; i++) {
  console.log(i);
}
```

- `For-in loop:` Used for printing the values of an object

```js
// An object literal assigned to a variable named 'Obj'
let obj = {
  name: "ARK",
  age: 19,
  isMale: true,
};

for (let keys in obj) {
  console.log(`${keys}: ${obj[keys]}`);
}

/*
Output:
    name: ARK
    age: 19
    isMale: true 
*/
```

- `For-of loop:` used to iterate over the elements of an Array

```js
// Array of fruits (string).
let arr = ["lemon", "banana", "apple", "strawberry"];
for (let item of arr) {
  console.log(`${item}`);
}
/* 
Output: 
    lemon
    banana
    apple
    strawberry 
*/
```

- `While Loop`

```js
let i = 0;
while (true) {
  console.log(++i);
}
// Output: 1, 2, 3...
```

---

## String Methods

```js
let name = "ark";
console.log(name.length); // tells the number of charachters present in the string
console.log(name.toUpperCase()); // converts the string to UPPERCASE
console.log(name.toLowerCase()); // converts the string to lowercase
console.log(name.replace("a", "s")); // replaces 'a' in string 'ark' with 's'. Output: 'srk'
```

---

## Arrays

A data type that is used to store collection of data types.

```js
let arr = ["banana", 70, 3.142, true];
```

## Methods of Array

```js
arr.push("ARK"); // adds new element at the end
arr.pop(); // removes element from the end
arr.shift(); // removes element from the front
arr.unshift(); // adds element from the front
```

### Turnary Operator

Syntax:

```js
condition ? if_true : if_false;
```

Example:

```js
let result = 1 > 2 ? "1 is greater than 2" : "1 is NOT greater than 2";
console.log(result);
```

---
