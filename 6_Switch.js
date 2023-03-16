/*
    Switch Case is an alternative to if-else condition.

    incase there are too manu else-if conditions we can put them in a switch case condition
*/

var position = "FiRsT"

// transforms the value of variable 'position' and then compares the result with 
switch (position.toLowerCase()) {
    case "first":
        console.log("Gold Medal")
        break;
    case "second":
        console.log("Silver Medal")
        break;
    case "third":
        console.log("Bronze Medal")
        break;
    default:
        break;
}