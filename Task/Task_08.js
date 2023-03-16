/*
    Exercise: Creating arrays and objects
*/

// Create a new empty array literal and assign it to the variable clothes.
var clothes = []

// Add 5 of your favorite items of clothing as strings using the push() method.
clothes.push("Trouser")
clothes.push("T-Shirts")
clothes.push("Jeans")
clothes.push("Shalwar")
clothes.push("Kameez")

// Remove the fifth piece of clothing from the array using the pop() method.
clothes.pop()

//Add a new piece of clothing using the push() method.
clothes.push("Shorts")

// Use console.log to show the third item from the clothes array in the console.
console.log(clothes[2])

// Create a new empty object literal and assign it to the variable favCar.
var favCar = {}

// Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.
favCar.color = 'Pink'

// Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.
favCar.convertible = true

// Use the console to log the entire favCar object.
console.log(favCar)