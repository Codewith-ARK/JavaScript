# JavaScript Practice Task

1. ### Print variables
   use the `console.log()` and `alert()` JavaScript functions to print the values of the following variable.

- `name`: Store your name in this variable
- `age`: Store your age in this variable

2. ### Creating variables

   use the `var`, `let` and `const` keywords to create 3 different variables. (any variables)

3. ### Creating Objects

   create an object that stores the properties of a human being. (e.g. `eyeColor`, `skinColor`, `hairColor`, `canWalk`)

4. ### Creating Arrays

   create an array that stores the list of groceries.

5. ### Using multiple data types
   create variables and store the following values:

- `Number`
- `String`
- `Boolean`
- `Object`
- `Array`

6. ### Conditional Statement

   create a variable named `isMale` and the value is equal to `true` then print the following message: **_"User is Male."_**

7. ### Conditional Statement (pt. 2)
   create 2 variables named: `age` and `gender` and use conditional statement to output the following messages:

- If the age is greater than `18` and the gender is `male`: **_You can drive a car._**

8. ### Conditional Statement (pt. 3)
   create a marksheet program using the `if-else` condition.

- if the marks are `greater than 90`, print **_"Grade: A+"_** using the `console.log()` method
- if the marks are `greater than 80 or less than 89`, print **_"Grade: A"_** using the `console.log()` method
- if the marks are `greater than 70 or less than 79`, print **_"Grade: B"_** using the `console.log()` method
- if the marks are `greater than 60 or less than 69`, print **_"Grade: C"_** using the `console.log()` method
- if the marks are `less than 60`, print **_"Grade: F"_** using the `console.log()` method

9. ### Conditional Statement (pt. 4)

   create a program that asks the user for a number. Create a conditional statement that checks if the number is even or odd.

10. ### Loops

    Use for-loop that prints the table of 2 and 3

11. ### Loops (pt. 2)

    Use while-loop that asks the user for answer of a questions. `What is 2+2?`. Keep asking the user until the user gives the correct answer. If the user gives the correct answer then `break` the loop.

12. ### Use `typeof`

Use the `typeof` opertor the determine the data types of the following variables:

```javascript
let job = "developer";
let age = 20;
let isMale = true;
let list = [];
let animal = {};
```

13. ### Objects
    Create an object that looks like this:

```javascript
let obj = {
  name: "ARK",
  age: "20",
  write: function () {
    console.log(this.name + " is writing");
  },
};
```

- Now use the dot operator `(.)` to change the `name` property of the `obj` object.
- Now use the bracket notation `[""]` to change the `age` property of the `obj` object.
- Now use the dot notation `(.)` to call the `write function` of the `obj` object.

14. ### Array
    Create an array that looks like this:

```javascript
let arr = ["eggs", "bread", "flour", "vegetables", "fruits"];
```

- Now use `index` to change the `"bread"` value to `"onion"`.
- Now use `index` to change the `"fruits"` value to `-0`.

15. ### Functions

- Create a function that prints `"Hello World!"` every time the function is called.

```javascript
console.log("Hello World!");
```

16. ### Functions (pt. 2)

- Create a function that accepts a parameter named: `name`. every time the function is called it is passed a name by a user. The function that prints then following message:

```javascript
console.log("Hello there", name);
```

16. ### Functions (pt. 3)

- Create a function that accepts two parameters named: `name`, `age`. every time the function is called it is passed a name and age by a user. The function then prints the following message:

```javascript
console.log(`Hello there ${name}, Your age is: ${age}`);
```
