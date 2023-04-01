/* Question - 1 */
// let num = [];

// do{
//     let a = Number.parseInt(prompt("Enter a number: "))
//     num.push(a)
// }while(a == 69)

// console.log(num)

/* Question - 2 */
let arr = [20, 30, 56, 34, 80, 1000]
let newArr = arr.filter((val)=>{
    return val % 10 == 0;
})
console.log(`New Array (after filter): ${newArr}`)