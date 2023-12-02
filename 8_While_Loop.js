/*
    Loops: loops are a block of code that are iterated (repeated) until a condition return true

    while-loop: a for loop runs only for a finite amount of times.
    the strucutre is as follows:

    while(condition){
        //some code
    }
*/

// this variable will be used to end the loop after some time
var counter = 10

// this loop until the value of the counter is not less than or equal to '0'
while(counter >=0){

    // prints the value for counter 
    console.log(counter)
    
    // decrement the value for counter each time the loop is run
    counter--
}
console.log("While Loop ended!");