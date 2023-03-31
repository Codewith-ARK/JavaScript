/*
    The following example stores the name of all keys inside an array as String.
*/

var arrOfKeys = ['name', 'maxSpeed', 'model', 'engingeHP']
// The car object has key name similar to the array
var Car = {
    name: "Toyotal Corola GLI",
    maxSpeed: 300,
    model: 2010,
    engineHP: 800
}

// The loop accesses the car object using the 'bracket notation'
// instead of explicitly writting the key value. The array is used to insert them one by one
for (let i = 0; i < arrOfKeys.length; i++) {
    console.log(Car[arrOfKeys[i]])
    
}