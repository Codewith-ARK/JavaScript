/*
    Functions that call on themselves up until a certain condition is met.
*/

let counter = 3
function example(){
    console.log("Line: ", counter)
    counter--
    
    if(counter === 0) return
    example()
}
example()