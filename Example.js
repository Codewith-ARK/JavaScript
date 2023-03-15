console.log(a) // like anywhere 
{
    var a = 10;
    // var have noscope you can access anywhere
    let b = 20;
    const c = 30;
    // let and const have scope you can access inside a scope
    // for example if you declare inside function you not be able to access let and const outside of the function
    // const are immutable
    // c = 40;
    // this give you error
    console.log(a, b, c)

}

console.log(a)