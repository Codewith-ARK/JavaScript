// ask user age. perform math and convert it into dog age

let humanAge, dogAge;
dogAge = prompt("Dog age: ");
if(typeof dogAge !== 'number'){
    alert("Incorrect age!!!")
}
humanAge = (dogAge - 2) * 4 + 21;
alert(humanAge)