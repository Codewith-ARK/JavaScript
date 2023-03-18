let myObj = {
    name: "ARK",
    age: 19,
    isMale: true,
    sayHi: function sayHi(){
        console.log("Hello from ", this.name)
    }
}
let Human = new myObj();
console.log(Human);