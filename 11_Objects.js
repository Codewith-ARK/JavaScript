/*
    Objects are described as a collection of realted values. Similar to sets
    
    There are (2) methods to creating objcets
*/

// Method-1: Using the 'Dot Syntax'
var Animal = {}
Animal.name = "Tiger"
Animal.weight = "200kg"
Animal.teeth = 40

// Method-2: Using the key-value pair syntax
var Human = {
    skinColor: "Brown",
    legs: 2,
    arms: 2,
    eyes: 2,
}

// Additional values can be added via 2 method.
// the 'Dot Syntax'
Human.eyeColor = "Blue"
// The 'brackets syntax'
Human["hairColor"] = "Black"

// a complete object can be printed onto the console
console.log(Human)
console.clear()
console.warn("HElLO!!!!")