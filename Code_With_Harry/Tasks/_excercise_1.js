let num = Math.round(Math.random()*100)
let userInput = 0;
do{
    userInput = prompt("Enter your guess: ");
    console.log(`Your input was ${result}`, result = (userInput>num ? "Greater":"Smaller"))
} while(userInput == num)
console.log(num)