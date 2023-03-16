/*
    Loops: loops are a block of code that are iterated (repeated) until a condition return true

    for-loop: a for loop runs only for a finite amount of times.
    the strucutre is as follows:

    for(initializing statement; test statement; the resultant statment*) {
        // some code
    }
*/

// Example-1: Incremental loop
for(var i=1; i<=25; i++){
    console.log(i)
}

// this code is executed after the loop is finished executing
console.log("GO!");

// Example-2: Decremental loop
for(var i=10; i>0; i--){
    console.log(i)
}

// this code is executed after the loop is finished executing
console.log("Happy new year!")