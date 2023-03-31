# Learning JavaScript
- `Console.log()` - Customize your output
- Variables
- String Concatenation
- Operators
- Switch Statement

## Console.log()
This is the method used to output text onto the console **(not the screen)**

```js
console.log("Hello World!"); //semi-colons are optional

// you can format the code in Console bu using `%c`
console.log("%c Hi There!", "color:blue; font-size:48px;");
```
---
## Variables
There are (3) keywords to decalre variables:
- `var` the most lineniant type of Variables.
- `let` included in ES6 somewhat strict type of variables
- `const` used to create constant (unmodifiable variables)
---

## String Concatenation
Concatentation is the process used to combine two or more string together. There are severel ways of concatenating String in **JavaScript**

1. using the `concat` method
1. using the `+` operator
1. using the `,` operator
---

**Method 1:**
```js
str1 = "My"
str2 = "String"

// combines the two existing strings
str3 = str1.concat(str2)

// MyString
```

**Method 2:**
```js
str1 = "My name is"
str2 = "ARK"

console.log(str1 + str2);

// My name isARK
```

**Method 3:**
```js
str1 = "My name is"
str2 = "ARK"

console.log(str1 , str2);
```
---

