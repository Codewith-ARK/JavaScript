/**
 * the following program uses all operators inside functions to provide the functionality of a modular calculator.
 */
function add (var1, var2){
    checkType(var1, 'number', var2, 'number');
    return var1 + var2;
}
function subtract(var1, var2){
    checkType(var1, 'number', var2, 'number');
    return var1 - var2;
}
function multiply(var1, var2){
    checkType(var1, 'number', var2, 'number');
    return var1 * var2;
}
function divide(var1, var2){
    checkType(var1, 'number', var2, 'number');
    return var1 / var2;
}
function exponential(num, toThePowerOf){
    checkType(var1, 'number', var2, 'number');
    return num ** toThePowerOf;
}
function modulous(var1, var2){
    checkType(var1, 'number', var2, 'number');
    return var1 % var2;
}
function increment(num){
    return num++
}
function decrement(num){
    return num--
}

function checkType(var1, expected1, var2, expected2){
    if(!typeof var1 == expected1.toLowerCase()){
        console.log("Value of 'Variable 1' is not", expected1)
        return
    }
    if(typeof var2 == expected2.toLowerCase()){
        console.log("Value of 'Variable 2' is not", expected2)
        return
    }
}