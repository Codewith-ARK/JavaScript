function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var fruitNames = arrayBuilder('Apple', 'Pear', 'Plum')
console.log(fruitNames)