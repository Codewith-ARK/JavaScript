// console.log((1>2) ? '1 is greater than 2':'1 is NOT greater than 2');

let obj = {
    name: "ARK",
    age: 19,
    isMale: true
}
for(let keys in obj){
    console.log(`${keys}: ${obj[keys]}`);
}


let arr = ['lemon', 'banana', 'apple', 'strawberry']
for(let item of arr){
    console.log(`${item}`)
}
