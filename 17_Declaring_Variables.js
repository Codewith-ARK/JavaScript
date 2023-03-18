var globalVar = "I am Global"

function example(){
    var localVar = "I am Local"
}

try {
    console.log(localVar) // Cannot access the variable
} catch(err){
    console.log("--Can not Access variable.")
}
    