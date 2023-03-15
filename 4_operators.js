/* 
    Arithematic operators

    (+) - Addition
    (-) - Subtraction
    (*) - Multiplication
    (/) - Division
    (%) - Modulus
*/

/*
    Logical operators

    ( > ) - Greater than operator
    ( < ) - less than operator
    ( ! ) - not operator [inverses the boolean output]
    ( == ) - equality operator [only compares two values]
    ( === ) - strict equality operator [compares the type AND the value]
    ( != ) - Inequality operator 
    ( !== ) - Strict Inequality operator
    
    (&&) - logical AND operator [description]
    (||) - logical OR operator [description]
    (+=) - addition assignment operator AKA uniry operator [performs addition with the left and right side and assign the right side to the left]
*/

console.log(2 + 2) /* adds two into 2 */
console.log(2 - 2) /* subtracts two from two */
console.log(2 * 2) /* multiplies two with two */
console.log(2 / 2) /* divides two with two */

console.log(2 > 3) /* read as: is two greater than three? */
console.log(2 < 3) /* read as: is two less than three? */
console.log(2 == 3) /* read as: is two equal to three? */
console.log(2 === '3') /* same as above only the data type is compared as well */
console.log(2 != 3) /* read as: is two NOT equal to three?*/
console.log(!(2 == 3)) /* read as: is two equal to three? yes? inverse it. */