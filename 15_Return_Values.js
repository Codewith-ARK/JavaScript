/*
    Return values: are described as values that are returned after a function has finished executing.

    just like the console.log() function returns 'undefined'
*/

function doubleIt(num){
    return num*2
}
function objectMaker(value){
    return {
        prop: value,
    }
}

let Object1 = objectMaker(doubleIt(40))
console.log(Object1)