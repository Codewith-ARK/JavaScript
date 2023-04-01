/* 
* Task was to take name from user. 
* capitalize the first letter of their name.
* display the rest of the name as is.
*/
let name = prompt("Enter name: ");
let firstLetter = (name.slice(0,1)).toUpperCase();
let restName = name.slice(1, name.length).toLowerCase();

name = firstLetter.concat(restName);
alert(`Hello, ${name}`);