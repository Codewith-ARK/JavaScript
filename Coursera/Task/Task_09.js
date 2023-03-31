/*
    Exercise: Error prevention
    using the 'try...catch' block statements we test the code that we think might generate an error. 
    we then catch that particular error in the 'catch' block. displaying the error onto the console is optional.
    this way we can ensure smooth execution of the program even in-case of an error/bug
*/
function addTwoNums(a, b){
    try{
        if(typeof(a) != 'number'){
            throw new ReferenceError('the first argument is not a number')
        }
        else if(typeof(b) != 'number'){
            throw new ReferenceError('the second argument is not a number')
        }
        else {
            console.log(a + b)
        }
    } catch(err){
        console.log("Error!", err)
    }
}

addTwoNums(5, "5")
