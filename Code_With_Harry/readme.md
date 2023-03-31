# Learning JavaScript with Codewith Harry

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
const _constant = "I am unchangable";

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
    skinColor: "Dark Orange"
}
```

In the above code an object is assigned to the variable named '_myObj'. The object contains `key-value pair` this means every properties of object can be accessed by a specific key. There are severl ways to access the properties of an object 

### **Using dot (.) operator:**
```js
let name = _myObj.name;
console.log(name);

// output: "ARK"
``` 

### **Using Object Literal:**
```js
let age = _myObj["age"];
console.log(age)

// Output: 19
```
### Turnary Operator
Syntax:
```js
(condition) ? if_true : if_false
```
Example:
```js
let result = (1>2) ? '1 is greater than 2':'1 is NOT greater than 2'
console.log(result);
```
---
## Loops
There are many types of loops in JS:
- `For loop`
```js
for(let i=0; i<11; i++){
    console.log(i);
}
```

- `For-in loop:` Used for printing the values of an object
```js
// An object literal assigned to a variable named 'Obj'
let obj = {
    name: "ARK",
    age: 19,
    isMale: true
}

for(let keys in obj){
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
let arr = ['lemon', 'banana', 'apple', 'strawberry']
for(let item of arr){
    console.log(`${item}`)
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
while(true){
    console.log(++i);
}
// Output: 1, 2, 3...
```
---
## String Methods
```js
let name = "ark";
console.log(name.length) // tells the number of charachters present in the string
console.log(name.toUpperCase()) // converts the string to UPPERCASE
console.log(name.toLowerCase()) // converts the string to lowercase
console.log(name.replace('a', 's')) // replaces 'a' in string 'ark' with 's'. Output: 'srk'
```
---
## Arrays
. . .