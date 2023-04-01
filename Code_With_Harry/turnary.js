// console.log((1>2) ? '1 is greater than 2':'1 is NOT greater than 2');

// let obj = {
//     name: "ARK",
//     age: 19,
//     isMale: true
// }
// for(let keys in obj){
//     console.log(`${keys}: ${obj[keys]}`);
// }


// let arr = ['lemon', 'banana', 'apple', 'strawberry']
// for(let item of arr){
//     console.log(`${item}`)
// }

// let name = 'I am ARK'
// console.log(name.concat("Miss Thing Slay.").toLowerCase().replace('a', 'Slay').toUpperCase())

// for(let i=0; i<name.length; i++){
//     console.log(name[i]);
// }

// let ex = "Example"
// console.log(`This is an ${ex.toUpperCase()}`)

let arr = [1, 45, 67, 300, 56, 2345];

// introduces ascending and descending order sorting
let compare = (a, b)=> {
    return a-b
} 

console.log(arr)
// sorts the original array
arr.sort(compare)
console.log(arr)